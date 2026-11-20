'use strict';
// GEO Pass contract regression: no API keys, no network and no real personal data.
// Run: node --test geo-pass/tests/mandatory-regression.test.cjs
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.resolve(__dirname,'../..');
const file=p=>fs.readFileSync(path.join(root,p),'utf8');
const languages=['de','ru','en'];
const roleCodes=['consultant','strategist','online','geo','seo','performance','brand','pr','social','content','crm','research','manager','other'];
const caption={
  de:['Wähle bis zu drei berufliche Bereiche','zweiten Phase der Registrierung','Anderer Bereich'],
  ru:['Выбери до трёх направлений','втором этапе регистрации','Другое направление'],
  en:['Choose up to three professional areas','second stage of registration','Another area']
};

test('Every marketing role page uses 14 checkboxes, a three-choice counter and a native phase-two notice',()=>{
  for(const lang of languages){
    const html=file('geo-pass/'+lang+'/create/marketing-role/index.html');
    const found=[...html.matchAll(/<input type="checkbox" name="marketingRoleChoice" value="([^"]+)"/g)].map(x=>x[1]);
    assert.deepEqual(found,roleCodes,lang+': changed role choices or single-choice control');
    assert.ok(html.includes('data-marketing-count'),lang+': counter missing');
    assert.ok(html.includes('data-marketing-other'),lang+': free input missing');
    assert.ok(html.includes('marketing-role.js?v='),lang+': script missing');
    for(const label of caption[lang])assert.ok(html.includes(label),lang+': expected text missing: '+label);
    for(const otherLang of languages)assert.ok(html.includes('hreflang="'+otherLang+'"'),lang+': missing language '+otherLang);
    assert.doesNotMatch(html,/type="radio" name="marketingRole"/,lang+': must support up to three choices');
    if(lang==='de')assert.doesNotMatch(html,/(?:Berater|Experte|Spezialist)\/in\b/i);
  }
});

function storage(initial){
  const state=new Map(initial?[['octopus-geo-pass-draft-v1',JSON.stringify(initial)]]:[]);
  return {getItem(key){return state.get(key)||null;},setItem(key,val){state.set(key,String(val));},read(){return JSON.parse(state.get('octopus-geo-pass-draft-v1')||'{}');}};
}

function runMarketing(data=storage()){
  const boxes=roleCodes.map(value=>{
    const callbacks={};return {value,checked:false,disabled:false,
      addEventListener(type,fn){callbacks[type]=fn;},toggle(checked){this.checked=checked;callbacks.change();}};
  });
  const other={hidden:true,style:{}},ownListeners={};
  const own={value:'',disabled:true,required:false,addEventListener(type,fn){ownListeners[type]=fn;},
    reportValidity(){return !this.required||Boolean(this.value.trim());},
    input(value){this.value=value;ownListeners.input();}};
  const counter={textContent:''},submit={disabled:false},listeners={},navigation=[];
  const controls={'[data-marketing-other]':other,
    'input[name="marketingRoleOther"]':own,'[data-marketing-count]':counter,
    'button[type="submit"]':submit};
  const form={querySelectorAll(selector){assert.equal(selector,'input[name="marketingRoleChoice"]');return boxes;},
    querySelector(selector){assert.ok(controls[selector],selector);return controls[selector];},
    addEventListener(type,fn){listeners[type]=fn;},
    reportValidity(){return !own.required||Boolean(own.value.trim());}};
  const context={sessionStorage:data,document:{querySelector(sel){assert.equal(sel,'[data-marketing-role]');return form;}},
    window:{location:{assign(page){navigation.push(page);}}}};
  vm.runInNewContext(file('geo-pass/assets/marketing-role.js'),context,{timeout:1200});
  return {data,boxes,other,own,counter,submit,navigation,
    choose(code,checked=true){const box=boxes.find(b=>b.value===code);assert.ok(box);
      assert.ok(!checked||!box.disabled,'cannot select disabled option');box.toggle(checked);},
    send(){listeners.submit({preventDefault(){}});}};
}

test('Runtime selection: first, second and third work; fourth blocked; removing one restores selection',()=>{
  const h=runMarketing();
  assert.equal(h.counter.textContent,'0 / 3');assert.equal(h.submit.disabled,true);
  h.choose('strategist');assert.equal(h.submit.disabled,false);
  h.choose('geo');h.choose('manager');assert.equal(h.counter.textContent,'3 / 3');
  assert.equal(h.boxes.find(b=>b.value==='seo').disabled,true);
  assert.deepEqual(Array.from(h.data.read().marketingRoles),['strategist','geo','manager']);
  h.choose('geo',false);assert.equal(h.counter.textContent,'2 / 3');
  assert.equal(h.boxes.find(b=>b.value==='seo').disabled,false);
  h.choose('seo');h.send();
  assert.deepEqual(h.navigation,['../experience/']);
  assert.deepEqual(Array.from(h.data.read().marketingRoles),['strategist','seo','manager']);
});

test('Custom Other counts toward 3 and empty custom text cannot continue',()=>{
  const h=runMarketing();
  h.choose('other');assert.equal(h.other.hidden,false);assert.equal(h.own.required,true);
  h.send();assert.equal(h.navigation.length,0);
  h.own.input('Marketing für lokale Unternehmen');h.choose('geo');h.choose('seo');
  assert.equal(h.counter.textContent,'3 / 3');
  assert.equal(h.boxes.find(b=>b.value==='manager').disabled,true);
  h.send();assert.deepEqual(h.navigation,['../experience/']);
  assert.equal(h.data.read().marketingRoleOther,'Marketing für lokale Unternehmen');
  h.choose('other',false);assert.equal(h.data.read().marketingRoleOther,'');
});

test('Return preserves selected directions; legacy and corrupt saved values are safely normalized',()=>{
  const saved=storage();
  const a=runMarketing(saved);a.choose('geo');a.choose('manager');
  const b=runMarketing(saved);
  assert.deepEqual(b.boxes.filter(x=>x.checked).map(x=>x.value),['geo','manager']);
  assert.equal(b.counter.textContent,'2 / 3');
  const old=runMarketing(storage({marketingRole:'manager'}));
  assert.deepEqual(old.boxes.filter(x=>x.checked).map(x=>x.value),['manager']);
  const bad=runMarketing(storage({marketingRoles:['geo','geo','manager','seo','unknown','content']}));
  assert.deepEqual(bad.boxes.filter(x=>x.checked).map(x=>x.value),['geo','seo','manager']);
  assert.equal(bad.counter.textContent,'3 / 3');
});

function preview(lang,source){
  const nodes=new Map();
  function element(){return {textContent:'',hidden:false,parentElement:{hidden:false},previousElementSibling:{textContent:''},
    setAttribute(){},querySelector(){return {setAttribute(){}};}};}
  const document={documentElement:{lang},querySelector(sel){
    if(!nodes.has(sel))nodes.set(sel,element());return nodes.get(sel);
  }};
  vm.runInNewContext(file('geo-pass/assets/final-flow.js'),
    {document,sessionStorage:storage(source)},{timeout:1200});
  return {role:nodes.get('[data-pass-role]')?.textContent,
    label:nodes.get('[data-pass-role]')?.previousElementSibling.textContent,
    servicesHidden:nodes.get('[data-pass-services]')?.parentElement.hidden,
    confirmHidden:nodes.get('.q-final-actions')?.hidden};
}

test('All three chosen marketing directions appear in the preview on DE, RU and EN; real publishing remains disabled',()=>{
  const source={sectorId:'marketing',fullName:'Fictional Example',
    marketingRoles:['strategist','geo','manager'],marketingRole:'strategist',experienceRange:'10to19'};
  const expected={
    de:['Fachperson für Marketingstrategie','GEO-Fachperson','Marketing Manager','Ausgewählte Bereiche'],
    ru:['Специалист по маркетинговой стратегии','Специалист по GEO','Менеджер по маркетингу','Выбранные направления'],
    en:['Marketing Strategist','GEO Specialist','Marketing Manager','Selected areas']};
  for(const lang of languages){
    const p=preview(lang,source);
    for(const label of expected[lang].slice(0,3))assert.ok(p.role.includes(label),lang+': missing '+label);
    assert.equal(p.label,expected[lang][3]);
    assert.equal(p.servicesHidden,true);
    assert.equal(p.confirmHidden,true);
  }
  const other=preview('ru',{sectorId:'marketing',fullName:'Fictional Example',
    marketingRoles:['other','geo'],marketingRoleOther:'Свой вид маркетинга'});
  assert.ok(other.role.includes('Свой вид маркетинга'));
  assert.ok(other.role.includes('Специалист по GEO'));
});

test('Forward and back navigation, AI prohibition, and other existing professional branches remain accounted for',()=>{
  const q=file('geo-pass/assets/questionnaire.js'),ai=file('geo-pass/assets/live-ai.js');
  assert.ok(q.includes('window.location.assign("../marketing-role/")'));
  assert.ok(q.includes('back.href="../marketing-role/"'));
  assert.ok(ai.includes('isBeautyDraft()||isLegalDraft()||isCareDraft()||isMarketingDraft()||isConsultingDraft())beautyGenerating()'));
  assert.ok(ai.includes('!isMarketingDraft()&&!isConsultingDraft())preview()'));
  for(const name of ['beauty-focus.js','legal-focus.js']){
    const script=file('geo-pass/assets/'+name);
    assert.ok(script.includes('n>=3'),name+': three-direction limit disappeared');
    assert.ok(script.includes('n<1||n>3'),name+': submit bounds disappeared');
  }
  for(const lang of languages){
    for(const step of ['marketing-role','matching','experience','preview','generating']){
      const html=file('geo-pass/'+lang+'/create/'+step+'/index.html');
      assert.ok(html.includes('lang="'+lang+'"'),lang+'/'+step+': wrong document language');
    }
  }
});

test('Sector dropdown shows only existing first-stage directions and preserves Other field in DE/RU/EN',()=>{
  const expected=['beauty','care','legal','marketing','consulting','health'];
  for(const lang of languages){
    const html=file('geo-pass/'+lang+'/create/sector/index.html');
    const found=[...html.matchAll(/<option value="([^"]+)"/g)].map(m=>m[1]).filter(Boolean);
    assert.deepEqual(found,expected,lang+': do not display unfinished professional categories');
    assert.match(html,/<select id="sectorId" name="sectorId">/);
    assert.match(html,/<input id="sectorOther" name="sectorOther"[^>]*>/);
    assert.ok(html.includes('octopus-cta.webp'),lang+': Octopus CTA was changed');
  }
});

test('Octopus homepage and experts hub preserve localized new-tab GEO Pass entry and questionnaire navigation',()=>{
  // Approved site architecture 2026-11-17: Octopus is the homepage; GEO Pass lives in the experts section.
  // Stage-1 architecture: eight items in the primary menu, with three existing GEO Pass CTAs on the homepage (hero, product card, floating mascot).
  for(const lang of languages){
    const home=file('geo-pass/'+lang+'/index.html');
    const starts=[...home.matchAll(/<a\b[^>]*href="\.\.\/(?:de|ru|en)\/create\/"[^>]*>/g)].map(m=>m[0]);
    assert.equal(starts.length,3,lang+': approved homepage GEO Pass entry points changed');
    for(const link of starts){
      assert.ok(link.includes('href="../'+lang+'/create/"'),lang+': registration language lost');
      assert.ok(link.includes('target="_blank"'),lang+': must preserve landing in a separate tab');
      assert.ok(link.includes('rel="noopener noreferrer"'),lang+': new tab must not control landing');
    }
    assert.ok(home.includes('class="os-menu"'),lang+': global site navigation missing');
    assert.ok(home.includes('href="../'+lang+'/how-it-works/"'),lang+': Octopus process link missing');
    const experts=file('geo-pass/'+lang+'/experts/index.html');
    assert.ok(experts.includes('action="../../'+lang+'/search/results/"'),lang+': existing name-only search route lost');
    assert.ok(experts.includes('name="q"'),lang+': name query field changed');
    assert.ok(experts.includes('href="../../'+lang+'/register/"'),lang+': expert registry lost');
    assert.ok(experts.includes('href="../../'+lang+'/create/"'),lang+': GEO Pass entry missing from experts page');
    const form=file('geo-pass/'+lang+'/create/sector/index.html');
    assert.ok(form.includes('href="../channels/"'),lang+': existing questionnaire navigation changed');
  }
});



test('Stage-2 commercial terms: transparent net prices, differentiated offer, and honest website capability status',()=>{
  for(const lang of languages){
    const website=file('geo-pass/'+lang+'/services/website/index.html');
    const articles=file('geo-pass/'+lang+'/services/articles/index.html');
    const services=file('geo-pass/'+lang+'/services/index.html');
    const prices=file('geo-pass/'+lang+'/pricing/index.html');
    const vat=lang==='de'?'gesetzlichen Umsatzsteuer':lang==='ru'?'НДС по действующей ставке':'applicable VAT';
    for(const [name,html] of [['Website',website],['Articles',articles],['Services',services],['Archived prices',prices]]){
      assert.ok(html.includes(vat),lang+': '+name+' must disclose net prices plus VAT');
    }
    for(const label of ['oh-website-rate-grid','oh-website-benefits','oh-website-questions','oh-website-pricing','oh-website-process']){
      assert.ok(website.includes(label),lang+': detailed website explanation missing '+label);
    }
    assert.ok(website.includes('19,90 €')||website.includes('€19.90'),lang+': 19.90 mapping price missing');
    assert.ok(website.includes('150 €')||website.includes('€150'),lang+': first-page price missing');
    assert.ok(website.includes('90 €')||website.includes('€90'),lang+': additional-page price missing');
    assert.ok(website.includes('noch in Entwicklung')||website.includes('ещё разрабатывается')||website.includes('still being developed'),lang+': planned editor must not be presented as live');
    for(const [name,html] of [['Articles',articles],['Services',services],['Archived prices',prices]]){
      assert.ok(html.includes('oh-discount-current'),lang+': '+name+' missing green current price');
      assert.ok(html.includes('oh-discount-previous'),lang+': '+name+' missing visible crossed-out old price');
      assert.ok(html.includes('oh-discount-saving'),lang+': '+name+' missing discount message');
    }
    assert.ok(articles.includes('glossary/#geo'),lang+': GEO reference should resolve to the glossary');
    assert.ok(prices.includes('services/website/'),lang+': archived pricing should reference the full website description');
  }
});

test('Stage-3: mobile-friendly value-first hero, original green Octopus and reviews directly below products',()=>{
  const colorStyle=file('geo-pass/assets/octopus-home-2026.css');
  const siteStyle=file('geo-pass/assets/octopus-site.css');
  const revealScript=file('geo-pass/assets/octopus-cta-visibility.js');
  assert.ok(colorStyle.includes('.oh-homehero-v3'), 'dedicated responsive hero style is absent');
  assert.ok(siteStyle.includes('.oh-home-cta-gated.is-visible'), 'floating mascot visible-state style is absent');
  assert.ok(revealScript.includes("getElementById('plattform')"), 'floating CTA must start at platform section');
  for(const lang of languages){
    const home=file('geo-pass/'+lang+'/index.html');
    const hero=home.slice(home.indexOf('id="startseite"'),home.indexOf('id="plattform"'));
    const image=lang==='de'?'octopus-cta-green.webp':lang==='ru'?'octopus-cta-green-ru.webp':'octopus-cta-green-en.webp';
    assert.ok(hero.includes('oh-hero-benefit'), lang+': customer benefit is not highlighted');
    assert.ok(hero.includes(image),lang+': green approved Octopus artwork changed');
    assert.ok(home.includes('class="octo-float oh-home-cta-gated"'),lang+': floating CTA missing');
    const prod=home.indexOf('id="produkte"');
    const review=home.indexOf('id="kundenstimmen"');
    const benefit=home.indexOf('id="vorteile"');
    assert.ok(prod>=0&&review>prod&&benefit>review,lang+': testimonials must directly follow product section');
    const reviews=home.slice(review,benefit);
    assert.ok(reviews.includes('oh-demo-note'),lang+': sample testimonials must be labelled');
    assert.ok(!reviews.includes('<footer class="footer os-footer">'),lang+': site footer accidentally embedded inside a testimonial');
    assert.equal((reviews.match(/<article class="oh-review">/g)||[]).length,3,lang+': three testimonial placeholders should be preserved');
    assert.ok(home.includes('href="../'+lang+'/services/articles/"'),lang+': link to article detail is missing');
  }
});

test('Stage-1 architecture: eight navigation sections, utility-only footer, working glossary and archive links',()=>{
  const menuDestinations=['','product-features/','geo/','about/','blog/','case-studies/','services/','onboarding/'];
  const utilityDestinations=['agb/','privacy/','legal/','search/','register/','glossary/','what-is-geo/'];
  const archiveDestinations=['how-it-works/','passport/','pricing/','faq/','experts/'];
  for(const lang of languages){
    const home=file('geo-pass/'+lang+'/index.html');
    const mainNav=home.match(/<nav class="os-menu-panel"[^>]*>([\s\S]*?)<\/nav>/);
    assert.ok(mainNav,lang+': no primary navigation');
    const menuLinks=[...mainNav[1].matchAll(/href="([^"]+)"/g)].map(m=>m[1]);
    assert.deepEqual(menuLinks,menuDestinations.map(s=>'../'+lang+'/'+s),lang+': primary menu differs from agreed eight sections');
    const footer=file('geo-pass/'+lang+'/services/index.html').match(/<footer[^>]*>([\s\S]*?)<\/footer>/);
    assert.ok(footer,lang+': footer missing');
    for(const target of [...utilityDestinations,...archiveDestinations]){
      assert.ok(footer[1].includes('href="../../'+lang+'/'+target+'"'),lang+': service footer entry missing '+target);
      assert.ok(fs.existsSync(path.join(__dirname,'..',lang,target,'index.html')),lang+': linked page does not exist '+target);
    }
    assert.ok(footer[1].includes('os-archive-links'),lang+': temporary content archive missing');
    const glossary=file('geo-pass/'+lang+'/glossary/index.html');
    for(const anchor of ['geo','seo','ki','geo-pass','maschinenlesbar','ki-empfehlung','website-mapping','onboarding','analytics']){
      assert.ok(glossary.includes('id="'+anchor+'"'),lang+': glossary anchor missing '+anchor);
    }
    for(const p of [...menuDestinations.slice(1),'geo-hotels/']){
      assert.ok(fs.existsSync(path.join(__dirname,'..',lang,p,'index.html')),lang+': main section not created '+p);
    }
  }
});

test('Octopus homepage preserves two approved AI illustrations, current hero, FAQ and standalone GEO Pass landing',()=>{
  for(const lang of languages){
    const home=file('geo-pass/'+lang+'/index.html');
    const passport=file('geo-pass/'+lang+'/passport/index.html');
    const experts=file('geo-pass/'+lang+'/experts/index.html');
    assert.ok(home.includes('octopus_geo_comparison_ai.webp'),lang+': GEO illustration missing');
    assert.ok(home.includes('octopus_automation_ai.webp'),lang+': automation illustration missing');
    assert.ok(!home.includes('class="os-anchors wrap"'),lang+': rejected anchor navigation returned');
    assert.ok(!home.includes('class="os-passport-landing"'),lang+': GEO Pass landing should not be embedded in homepage');
    assert.ok(home.includes('href="../'+lang+'/passport/"'),lang+': footer passport link missing');
    assert.ok(home.includes('<section class="oh-hero oh-homehero-v3" id="startseite"'),lang+': approved benefit-first Octopus first screen missing');
    const mainStart=home.indexOf('<main'),heroStart=home.indexOf('id="startseite"'),faqStart=home.indexOf('id="faq"'),mainEnd=home.indexOf('</main>');
    assert.ok(mainStart>=0&&heroStart>mainStart&&faqStart>heroStart&&faqStart<mainEnd,lang+': homepage sections are missing or out of order');
    assert.ok(passport.includes('class="os-passport-landing"'),lang+': complete original passport page absent');
    for(const marker of ['hero-pass','benefits-section','geo-pass-process','geo-pass-why','geo-pass-identity']){
      assert.ok(passport.includes(marker),lang+': legacy passport section lost: '+marker);
    }
    assert.ok(experts.includes('href="../../'+lang+'/passport/"'),lang+': experts hub should link to full passport information');
  }
});

test('Consulting categories DE/RU/EN have 13 approved directions + Other and phase-two notice',()=>{
  const expected=['strategy','startup','change','process','digital','ai','management','hr','crisis','succession','international','grants','projects','other'];
  const copy={de:['Wähle bis zu drei Beratungsbereiche','zweiten Phase der Registrierung','Unternehmensnachfolge','Fördermittelberatung'],ru:['Выбери до трёх направлений консультирования','втором этапе регистрации','Передача и преемственность бизнеса','Консультирование по субсидиям'],en:['Choose up to three consulting areas','second stage of registration','Business Succession','Grants']};
  for(const lang of languages){
    const h=file('geo-pass/'+lang+'/create/consulting-directions/index.html');
    assert.deepEqual([...h.matchAll(/<input type="checkbox" name="consultingDirectionChoice" value="([^"]+)"/g)].map(x=>x[1]),expected);
    assert.ok(h.includes('data-consulting-count'));assert.ok(h.includes('data-consulting-other'));
    assert.ok(h.includes('name="consultingDirectionOther"'));assert.ok(h.includes('octopus-cta.webp'));
    for(const term of copy[lang])assert.ok(h.includes(term),lang+' missing '+term);
    for(const l of languages)assert.ok(h.includes('hreflang="'+l+'"'));
    const sector=file('geo-pass/'+lang+'/create/sector/index.html');
    assert.match(sector,/<option value="consulting">[^<]+<\/option>/);
  }
});

function consultingHarness(data=storage()){
  const codes=['strategy','startup','change','process','digital','ai','management','hr','crisis','succession','international','grants','projects','other'];
  const boxes=codes.map(value=>{const events={};return {value,checked:false,disabled:false,
    addEventListener(type,fn){events[type]=fn;},toggle(value){this.checked=value;events.change();}};});
  const other={hidden:true,style:{}},ownHandlers={};
  const own={value:'',disabled:true,required:false,addEventListener(type,fn){ownHandlers[type]=fn;},reportValidity(){return !this.required||!!this.value.trim();},input(value){this.value=value;ownHandlers.input();}};
  const counter={textContent:''},submit={disabled:false},callbacks={},routes=[];
  const controls={'[data-consulting-other]':other,'input[name="consultingDirectionOther"]':own,'[data-consulting-count]':counter,'button[type="submit"]':submit};
  const form={querySelectorAll(s){assert.equal(s,'input[name="consultingDirectionChoice"]');return boxes;},
    querySelector(s){assert.ok(controls[s],s);return controls[s];},addEventListener(type,fn){callbacks[type]=fn;},
    reportValidity(){return !own.required||!!own.value.trim();}};
  vm.runInNewContext(file('geo-pass/assets/consulting-directions.js'),{sessionStorage:data,
    document:{querySelector(s){assert.equal(s,'[data-consulting-directions]');return form;}},
    window:{location:{assign(s){routes.push(s);}}}},{timeout:1200});
  return {data,boxes,other,own,counter,submit,routes,
    choose(id,checked=true){const b=boxes.find(x=>x.value===id);assert.ok(b);assert.ok(!checked||!b.disabled);b.toggle(checked);},
    send(){callbacks.submit({preventDefault(){}});}
  };
}

test('Consulting 1-3 selections, fourth blocked, custom Other required, restored after back',()=>{
  const data=storage(),h=consultingHarness(data);
  assert.equal(h.counter.textContent,'0 / 3');assert.equal(h.submit.disabled,true);
  h.choose('strategy');h.choose('ai');h.choose('other');assert.equal(h.counter.textContent,'3 / 3');
  assert.equal(h.boxes.find(x=>x.value==='hr').disabled,true);h.send();assert.equal(h.routes.length,0);
  h.own.input('Логистический консалтинг');h.send();assert.deepEqual(h.routes,['../experience/']);
  assert.deepEqual(Array.from(data.read().consultingDirections),['strategy','ai','other']);
  assert.equal(data.read().consultingDirectionOther,'Логистический консалтинг');
  const restore=consultingHarness(data);
  assert.deepEqual(restore.boxes.filter(x=>x.checked).map(x=>x.value),['strategy','ai','other']);
  restore.choose('other',false);assert.equal(restore.counter.textContent,'2 / 3');
  assert.equal(restore.boxes.find(x=>x.value==='hr').disabled,false);
  assert.equal(data.read().consultingDirectionOther,'');restore.choose('hr');
  assert.equal(restore.counter.textContent,'3 / 3');
  const damaged=consultingHarness(storage({consultingDirections:['strategy','strategy','fake','hr','projects','other']}));
  assert.deepEqual(damaged.boxes.filter(x=>x.checked).map(x=>x.value),['strategy','hr','projects']);
});

test('All 3 consulting areas rendered in DE/RU/EN preview and AI publication stays disabled',()=>{
  const draft={sectorId:'consulting',fullName:'Fictional Example',consultingDirections:['strategy','ai','grants']};
  const translations={de:['Unternehmensstrategie & Geschäftsmodelle','KI-Beratung & Automatisierung','Fördermittelberatung'],ru:['Стратегия и бизнес-модели','Внедрение AI и автоматизация','Консультирование по субсидиям'],en:['Business Strategy & Business Models','AI Consulting & Automation','Grants & Funding Consulting']};
  for(const lang of languages){const p=preview(lang,draft);
    for(const label of translations[lang])assert.ok(p.role.includes(label),lang+' missing '+label);
    assert.equal(p.servicesHidden,true);assert.equal(p.confirmHidden,true);
  }
  const own=preview('ru',{sectorId:'consulting',fullName:'Fictional Example',consultingDirections:['other','strategy'],consultingDirectionOther:'Моё направление'});
  assert.ok(own.role.includes('Моё направление'));assert.ok(own.role.includes('Стратегия и бизнес-модели'));
  const q=file('geo-pass/assets/questionnaire.js'),ai=file('geo-pass/assets/live-ai.js');
  assert.ok(q.includes('window.location.assign("../consulting-directions/")'));
  assert.ok(q.includes('back.href="../consulting-directions/"'));
  assert.ok(ai.includes('||isConsultingDraft())beautyGenerating()'));
  assert.ok(ai.includes('&&!isConsultingDraft())preview()'));
});
