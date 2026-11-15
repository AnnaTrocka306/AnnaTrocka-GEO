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
  assert.ok(ai.includes('isBeautyDraft()||isLegalDraft()||isCareDraft()||isMarketingDraft())beautyGenerating()'));
  assert.ok(ai.includes('!isMarketingDraft())preview()'));
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
  const expected=['beauty','care','legal','marketing','health'];
  for(const lang of languages){
    const html=file('geo-pass/'+lang+'/create/sector/index.html');
    const found=[...html.matchAll(/<option value="([^"]+)"/g)].map(m=>m[1]).filter(Boolean);
    assert.deepEqual(found,expected,lang+': do not display unfinished professional categories');
    assert.match(html,/<select id="sectorId" name="sectorId">/);
    assert.match(html,/<input id="sectorOther" name="sectorOther"[^>]*>/);
    assert.ok(html.includes('octopus-cta.webp'),lang+': Octopus CTA was changed');
  }
});

test('All three landing CTAs open registration in a new tab; questionnaire navigation remains unchanged',()=>{
  for(const lang of languages){
    const html=file('geo-pass/'+lang+'/index.html');
    // Check the exact links, not unrelated navigation.
    const starts=[...html.matchAll(/<a class="hero-pass__mascot-cta[^"]*" href="\.\.\/(?:de|ru|en)\/create\/"[^>]*>/g)].map(m=>m[0]);
    assert.equal(starts.length,3,lang+': landing registration CTA count changed');
    for(const link of starts){
      assert.ok(link.includes('href="../'+lang+'/create/"'),lang+': registration language lost');
      assert.ok(link.includes('target="_blank"'),lang+': CTA must open a separate tab');
      assert.ok(link.includes('rel="noopener noreferrer"'),lang+': new tab must not control landing');
    }
    const form=file('geo-pass/'+lang+'/create/sector/index.html');
    assert.ok(form.includes('href="../channels/"'),lang+': existing form navigation changed');
  }
});
