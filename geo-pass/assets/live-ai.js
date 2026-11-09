/* Octopus: browser-to-Worker editorial bridge for three existing professional branches.
 * No API key or permanent login credential in this public file.
 * An automatic Cloudflare Turnstile proof may issue a short-lived session.
 * No passwords or test codes are requested from the visitor. Server must verify proof.
 * Profile generation does not publish; publishing is a separate approved step.
 */
(()=>{'use strict';
const worker='https://octopus-geo-pass-test.expert3abeauty.workers.dev';
const draftKey='octopus-geo-pass-draft-v1';
const sessionKey='octopus-geo-pass-session-v1';
const passKey='octopus-geo-pass-ai-draft-v1';
const pendingKey='octopus-geo-pass-ai-pending-v1';
const lang=['ru','de','en'].includes(document.documentElement.lang)?document.documentElement.lang:'ru';
const ui={
 ru:{login:'Подтверди доступ к созданию GEO-Pass',code:'Код доступа',go:'Продолжить',working:'Octopus создаёт твой GEO-Pass…',badCode:'Неверный код доступа. Проверь его и попробуй снова.',network:'Не удалось связаться с Octopus. Проверь соединение и попробуй снова.',badInput:'Не удалось подготовить анкету. Вернись назад и проверь профессию, имя и услуги.',failed:'Не удалось создать профиль. Попробуй ещё раз.',retry:'Повторить',title:'Твой GEO-Pass',h2:'Профессиональное направление',description:'Описание профессиональной деятельности',schema:'Предварительный просмотр Schema.org',save:'Изменения сохраняются автоматически',missing:'Готового описания пока нет. Вернись к предыдущему шагу.',noPublish:'Готовый текст можно проверить и изменить перед подтверждением.',unavailable:'Создание GEO-Pass временно недоступно. Попробуй позже.',pending:'Запрос на создание уже был отправлен. Чтобы не оплачивать повторную генерацию, Octopus не отправляет его снова автоматически.',retryPaid:'Создать заново (новый запрос к AI)',schemaUpdate:'Обновляем Schema.org…',schemaError:'Не удалось обновить Schema.org. Текст сохранён — попробуй открыть эту карточку снова.'},
 de:{login:'Zugang zur Erstellung deines GEO-Pass bestätigen',code:'Zugangscode',go:'Weiter',working:'Octopus erstellt deinen GEO-Pass…',badCode:'Der Zugangscode ist nicht korrekt. Bitte erneut versuchen.',network:'Octopus ist nicht erreichbar. Prüfe die Verbindung und versuche es erneut.',badInput:'Die Angaben sind unvollständig. Bitte prüfe Name, Berufsrolle und Leistungen.',failed:'Der GEO-Pass konnte nicht erstellt werden. Bitte erneut versuchen.',retry:'Erneut versuchen',title:'Dein GEO-Pass',h2:'Beruflicher Schwerpunkt',description:'Beschreibung deiner Tätigkeit',schema:'Schema.org-Vorschau',save:'Änderungen werden automatisch gespeichert',missing:'Noch keine Beschreibung vorhanden. Bitte einen Schritt zurückgehen.',noPublish:'Du kannst den Text vor der Bestätigung prüfen und bearbeiten.',unavailable:'Die GEO-Pass-Erstellung ist vorübergehend nicht verfügbar. Bitte versuche es später erneut.',pending:'Die Erstellung wurde bereits gestartet. Octopus sendet keine weitere kostenpflichtige Anfrage automatisch.',retryPaid:'Neue KI-Erstellung ausdrücklich starten',schemaUpdate:'Schema.org wird aktualisiert…',schemaError:'Schema.org konnte nicht aktualisiert werden. Der Text ist gespeichert.'},
 en:{login:'Confirm access to create your GEO-Pass',code:'Access code',go:'Continue',working:'Octopus is preparing your GEO-Pass…',badCode:'Incorrect access code. Please try again.',network:'Could not contact Octopus. Check your connection and try again.',badInput:'The questionnaire is incomplete. Check your name, role and services.',failed:'Could not generate your profile. Please try again.',retry:'Try again',title:'Your GEO-Pass',h2:'Professional focus',description:'Professional description',schema:'Schema.org preview',save:'Changes are saved automatically',missing:'No description yet. Return to the previous step.',noPublish:'Review and edit the text before confirming.',unavailable:'GEO-Pass creation is temporarily unavailable. Please try again later.',pending:'Generation has already been requested. Octopus will not send a second paid request automatically.',retryPaid:'Explicitly request new generation',schemaUpdate:'Updating Schema.org…',schemaError:'Could not update Schema.org. Your text is saved.'}
}[lang];
const label={
 ru:{medicalInjection:'Инъекционные процедуры',medicalDevice:'Аппаратная косметология',medicalLaser:'Лазерные процедуры',medicalSkin:'Пилинги и процедуры для кожи',medicalMinimallyInvasive:'Нитевые и другие малоинвазивные процедуры',medicalSurgery:'Эстетическая хирургия',podNail:'Обработка ногтей',podSkin:'Обработка мозолей и огрубевшей кожи',podIngrown:'Работа с вросшими ногтями и коррекция ногтей',podRiskFoot:'Подологический уход при диабете и других особенностях стоп',podProtection:'Разгрузка и защита проблемных участков стопы',podFullCare:'Комплексная подологическая обработка'},
 de:{medicalInjection:'Injektionsbehandlungen',medicalDevice:'Apparative Kosmetik',medicalLaser:'Laserbehandlungen',medicalSkin:'Peelings und Hautbehandlungen',medicalMinimallyInvasive:'Fadenbehandlungen und minimalinvasive Verfahren',medicalSurgery:'Ästhetische Chirurgie',podNail:'Nagelbehandlung',podSkin:'Hornhaut- und Hühneraugenbehandlung',podIngrown:'Eingewachsene Nägel und Nagelkorrektur',podRiskFoot:'Podologische Versorgung bei Diabetes',podProtection:'Druckentlastung und Schutz der Füße',podFullCare:'Podologische Komplexbehandlung'},
 en:{medicalInjection:'Injectable treatments',medicalDevice:'Device-based cosmetic treatments',medicalLaser:'Laser treatments',medicalSkin:'Peels and skin treatments',medicalMinimallyInvasive:'Thread and minimally invasive procedures',medicalSurgery:'Aesthetic surgery',podNail:'Nail care',podSkin:'Corns and callus care',podIngrown:'Ingrown toenail care',podRiskFoot:'Foot care for diabetes',podProtection:'Pressure relief and foot protection',podFullCare:'Comprehensive podological care'}
}[lang];
const roles={doctor:{ru:'Врач',de:'Arzt / Ärztin',en:'Medical doctor'},heilpraktiker:{ru:'Heilpraktiker',de:'Heilpraktiker / Heilpraktikerin',en:'Heilpraktiker'},podologist:{ru:'Подолог',de:'Podologe / Podologin',en:'Podologist'}};
const read=(key)=>{try{return JSON.parse(sessionStorage.getItem(key)||'null')}catch{return null}};
const validText=(s)=>typeof s==='string'&&s.trim().length>0;
function series(d,prefix){return Object.keys(d).filter(k=>k===prefix||new RegExp('^'+prefix+'[0-9]+$').test(k)).sort((a,b)=>(a===prefix?1:Number(a.slice(prefix.length)))-(b===prefix?1:Number(b.slice(prefix.length)))).map(k=>d[k]).filter(validText)}
function sourceFromDraft(d){
 if(!d||typeof d!=='object'||!validText(d.fullName)||!Object.hasOwn(roles,d.medicalRole))throw Error('invalid_input');
 const isPod=d.medicalRole==='podologist';
 const names=Object.keys(label).filter(k=>d[k]===true&&(k!=='medicalSurgery'||d.medicalRole==='doctor'));
 const extras=series(d,isPod?'podOtherProcedure':'medicalOtherProcedure');
 const services=[...names.map(k=>label[k]),...extras].map(s=>s.trim());
 if(!services.length||services.length>16)throw Error('invalid_services');
 const city=validText(d.locality)?d.locality.trim():'';
 const calendar=series(d,'bookingCalendarUrl');
 const channels=[];
 if(validText(d.phoneNumber)&&d.phonePublic==='yes')channels.push('phone');
 if(calendar.length)channels.push('online_calendar');
 return {
  testOnly:true,locale:lang,fullName:d.fullName.trim(),roleId:d.medicalRole,
  sector:lang==='de'?'Medizinische Ästhetik':lang==='ru'?'Медицинская эстетика':'Medical aesthetics',
  professionalArea:isPod?(lang==='ru'?'Подология':lang==='de'?'Podologie':'Podology'):(lang==='ru'?'Эстетическая медицина':lang==='de'?'Medizinische Ästhetik':'Medical aesthetics'),
  services,practiceCities:city?[city]:[],mobileVisits:d.visitMobile===true,
  experienceRange:['under5','5to9','10to19','20plus','undisclosed'].includes(d.experienceRange)?d.experienceRange:'undisclosed',
  publicBookingChannels:channels
 };
}
function workplaceFromDraft(d) {
 const street=[d.street,d.houseNumber].filter(validText).join(' ').trim();
 return {
  primary:{
   streetAddress:street,
   postalCode:validText(d.postalCode)?d.postalCode.trim():'',
   addressLocality:validText(d.locality)?d.locality.trim():'',
   addressCountry:validText(d.country)?d.country.trim():''
  },
  additional:series(d,'additionalPracticeAddress')
 };
}
function elt(tag,text,cls){const e=document.createElement(tag);if(text!=null)e.textContent=text;if(cls)e.className=cls;return e}
function showStatus(host,msg){host.replaceChildren(elt('p',msg,'oct-ai-status'))}
function getSession(){const s=read(sessionKey);return s&&typeof s.token==='string'&&Number(s.expiresAt)>Date.now()+10000?s.token:null}
async function jsonRequest(path,body,token){
 const headers={'content-type':'application/json'};
 if(token)headers.authorization='Bearer '+token;
 const resp=await fetch(worker+path,{method:'POST',headers,body:JSON.stringify(body),cache:'no-store',referrerPolicy:'no-referrer'});
 let data;try{data=await resp.json()}catch{throw Error('bad_response')}
 if(!resp.ok)throw Error(data?.error||'request_failed');
 return data;
}
/* Schema.org is generated only by the Worker. Editing uses /api/schema,
 * which never invokes OpenAI; there is deliberately no second JS schema generator. */
async function loadTurnstile(){
 if(window.turnstile)return window.turnstile;
 return new Promise((resolve,reject)=>{
   const script=document.createElement('script');
   script.src='https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
   script.async=true;script.defer=true;
   script.onload=()=>window.turnstile?resolve(window.turnstile):reject(Error('turnstile_unavailable'));
   script.onerror=()=>reject(Error('turnstile_unavailable'));
   document.head.append(script);
 });
}
async function generating(){
 const screen=document.querySelector('.q-screen--final-flow');if(!screen)return;
 const disclaimer=document.querySelector('.q-final-disclaimer');if(disclaimer)disclaimer.hidden=true;
 const demo=document.querySelector('.q-final-demo-link');if(demo)demo.hidden=true;
 const info=document.querySelector('.q-final-info');if(info)info.hidden=true;
 const root=document.querySelector('.q-final-main');if(!root)return;
 const panel=elt('section',null,'oct-ai-panel');panel.setAttribute('aria-live','polite');root.append(panel);
 let source;try{source=sourceFromDraft(read(draftKey))}catch{showStatus(panel,ui.badInput);return}
 const fingerprint=JSON.stringify(source);
 const cached=read(passKey);
 if(cached&&cached.fingerprint===fingerprint&&validText(cached.result?.description)){
   sessionStorage.removeItem(pendingKey);
   location.replace('../preview/');return;
 }
 // These clock animations must appear only when fresh generation is needed.
 document.documentElement.classList.add('oct-ai-needs-generation');
 const pending=read(pendingKey);
 if(pending&&pending.fingerprint===fingerprint&&
    Number.isFinite(pending.at)&&Date.now()-pending.at<120000){
   showStatus(panel,ui.pending);
   const restart=elt('button',ui.retryPaid,'oct-ai-button');restart.type='button';
   restart.addEventListener('click',()=>{
     sessionStorage.removeItem(pendingKey);
     location.reload();
   },{once:true});
   panel.append(restart);
   return;
 }
 sessionStorage.removeItem(pendingKey);
 const retry=(fn,msg)=>{
  showStatus(panel,msg);
  const b=elt('button',ui.retry,'oct-ai-button');
  b.type='button';b.addEventListener('click',fn,{once:true});panel.append(b);
 };
 let isGenerating=false;
 async function generate(session){
   if(isGenerating)return;
   isGenerating=true;
   sessionStorage.setItem(pendingKey,JSON.stringify({fingerprint,at:Date.now()}));
   showStatus(panel,ui.working);
   try{
     const result=await jsonRequest('/api/generate',source,session);
     if(!validText(result.h2)||!validText(result.description))throw Error('bad_response');
     sessionStorage.setItem(passKey,JSON.stringify({fingerprint,source,result}));
     sessionStorage.removeItem(pendingKey);
     location.replace('../preview/');
   }catch(err){
     sessionStorage.removeItem(pendingKey);
     if(err.message==='unauthorized'){
       sessionStorage.removeItem(sessionKey);return startSession();
     }
     retry(()=>generate(session),err.message==='invalid_input'?ui.badInput:ui.failed);
   }finally{isGenerating=false}
 }
 async function startSession(){
   showStatus(panel,ui.working);
   let config;
   try{
     const resp=await fetch(worker+'/api/config',{cache:'no-store',referrerPolicy:'no-referrer'});
     if(!resp.ok)throw Error('config_error');
     config=await resp.json();
   }catch(_){retry(startSession,ui.network);return}
   if(!config.ready||!validText(config.turnstileSiteKey)){
     showStatus(panel,ui.unavailable);return;
   }
   let turnstile;
   try{turnstile=await loadTurnstile()}catch(_){retry(startSession,ui.network);return}
   panel.replaceChildren(elt('p',ui.working,'oct-ai-status'));
   const widget=elt('div');panel.append(widget);
   let done=false;
   const fail=()=>{if(done)return;done=true;retry(startSession,ui.network)};
   try{
     const id=turnstile.render(widget,{
       sitekey:config.turnstileSiteKey,
       action:'geo-pass-generate',
       execution:'execute',
       appearance:'interaction-only',
       callback:async proof=>{
         if(done)return;done=true;
         try{
           const result=await jsonRequest('/api/session',{turnstileToken:proof});
           if(!validText(result.session)||!Number.isFinite(result.expiresAt))throw Error('bad_response');
           sessionStorage.setItem(sessionKey,JSON.stringify({token:result.session,expiresAt:result.expiresAt}));
           await generate(result.session);
         }catch(_){retry(startSession,ui.network)}
       },
       'error-callback':fail,
       'timeout-callback':fail,
       'expired-callback':fail
     });
     turnstile.execute(id);
   }catch(_){fail()}
 }
 const token=getSession();if(token)generate(token);else startSession();
}
function preview(){
 const root=document.querySelector('.q-final-main');if(!root)return;
 const disclaimer=document.querySelector('.q-final-disclaimer');if(disclaimer)disclaimer.hidden=true;
 const saved=read(passKey),d=read(draftKey);
 let source;try{source=sourceFromDraft(d)}catch{source=null}
 if(!saved||!source||saved.fingerprint!==JSON.stringify(source)||!saved.result){
   const notice=elt('p',ui.missing,'oct-ai-status');root.prepend(notice);return;
 }
 const pass=saved.result,workplace=workplaceFromDraft(d);
 if(!validText(pass.draftId)){
   pass.draftId=crypto.randomUUID();saved.result=pass;
   sessionStorage.setItem(passKey,JSON.stringify(saved));
 }
 const intro=document.querySelector('.q-final-intro p');if(intro)intro.textContent=ui.noPublish;
 const previous=document.querySelector('.q-pass-preview');
 const panel=elt('section',null,'oct-ai-card');
 panel.append(elt('div','GEO-Pass','oct-ai-eyebrow'),elt('h2',pass.h1,'oct-ai-name'));
 const labelH2=elt('label',ui.h2),h2=elt('textarea');h2.rows=2;h2.maxLength=150;h2.value=pass.h2;
 const labelDesc=elt('label',ui.description),desc=elt('textarea');desc.rows=6;desc.maxLength=520;desc.value=pass.description;
 labelH2.append(h2);labelDesc.append(desc);
 const details=elt('details'),summary=elt('summary',ui.schema),pre=elt('pre');
 details.append(summary,pre);
 const schemaStatus=elt('p',null,'oct-ai-save');schemaStatus.setAttribute('role','status');
 const saveNote=elt('p',ui.save,'oct-ai-save');
 panel.append(labelH2,labelDesc,saveNote,details);
 details.append(schemaStatus);
 if(previous)previous.replaceWith(panel);else root.append(panel);
 const next=document.querySelector('.q-final-primary');
 function setReady(ready){
  if(!next)return;
  next.style.pointerEvents=ready?'':'none';
  next.setAttribute('aria-disabled',String(!ready));
  next.tabIndex=ready?0:-1;
 }
 if(next)next.addEventListener('click',e=>{
  if(next.getAttribute('aria-disabled')==='true')e.preventDefault();
 });
 let revision=0,timeout=null;
 const signature=()=>JSON.stringify({source,workplace,h2:pass.h2,description:pass.description});
 async function refreshSchema(n){
  schemaStatus.textContent=ui.schemaUpdate;
  try{
   const fp=signature();
   const fresh=await jsonRequest('/api/schema',{source,workplace,h2:pass.h2,description:pass.description,draftId:pass.draftId});
   if(n!==revision)return;
   if(!fresh.schemaPreview||fresh.schemaVersion!==2)throw Error('schema_version');
   pass.schemaPreview=fresh.schemaPreview;pass.schemaVersion=2;pass.schemaSourceFingerprint=fp;
   pre.textContent=JSON.stringify(fresh.schemaPreview,null,2);
   schemaStatus.textContent='';
   sessionStorage.setItem(passKey,JSON.stringify(saved));
   setReady(true);
  }catch(_){if(n===revision){
    pre.textContent='';schemaStatus.textContent=ui.schemaError;setReady(false);
  }}
 }
 function update(){
  pass.h2=h2.value.trim().slice(0,150);pass.description=desc.value.trim().slice(0,520);
  sessionStorage.setItem(passKey,JSON.stringify(saved));
  const n=++revision;
  if(timeout)clearTimeout(timeout);
  setReady(false);
  if(pass.h2&&pass.description)timeout=setTimeout(()=>refreshSchema(n),500);
  else {pre.textContent='';schemaStatus.textContent=''}
 }
 h2.addEventListener('input',update);desc.addEventListener('input',update);
 if(pass.schemaVersion===2&&pass.schemaPreview&&pass.schemaSourceFingerprint===signature()){
   pre.textContent=JSON.stringify(pass.schemaPreview,null,2);
   setReady(!!pass.h2?.trim()&&!!pass.description?.trim());
 }else{
   setReady(false);
   refreshSchema(++revision);
 }
 // No AI generation from the preview: human edits are saved locally.
}

const route=location.pathname;
if(route.endsWith('/generating/'))generating();
else if(route.endsWith('/preview/'))preview();
})();