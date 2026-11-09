/* Closed publication verification for three approved fictional identities.
 * The real-client legal workflow remains disabled, independent of this
 * fictional trial. Neither GitHub nor Cloudflare secrets exist in this file.
 */
(()=>{'use strict';
const card=document.querySelector('[data-oct-publish-trial]');
if(!card)return;
const lang=['ru','de','en'].includes(document.documentElement.lang)?document.documentElement.lang:'ru';
const T={
ru:{
 intro:'Сейчас проверяем публикацию только заранее подготовленных вымышленных профилей. Настоящие данные пока не публикуются.',
 check:'Подтверждаю, что сведения относятся к вымышленному персонажу, и разрешаю разместить эту карточку в открытом реестре в рамках испытания.',
 button:'Опубликовать GEO-Pass',working:'Octopus создаёт страницу и добавляет GEO-Pass в реестр…',
 disabled:'Публикация ещё не подключена. Карточка не размещена в интернете.',
 noProof:'Эта карточка создана до подключения публикации или не входит в разрешённые вымышленные профили. Для проверки создай новую карточку с согласованным вымышленным именем.',
 failed:'Публикация не завершилась. Профиль не подтверждён как опубликованный; можно повторить проверку.',
 updating:'GitHub принял изменения. Проверяем, когда страница и запись в реестре появятся на сайте…',
 pending:'Карточка передана для публикации. Сайт ещё обновляется — повторное нажатие не требуется.',
 done:'GEO-Pass опубликован: отдельная страница и реестр доступны.',
 page:'Открыть GEO-Pass',registry:'Открыть реестр',search:'Найти по имени'
},
de:{
 intro:'Wir prüfen die Veröffentlichung nur mit zuvor festgelegten fiktiven Personen. Echte Personendaten werden noch nicht veröffentlicht.',
 check:'Ich bestätige, dass die Angaben eine fiktive Person betreffen, und erlaube ihre Veröffentlichung im offenen Register im Rahmen des Versuchs.',
 button:'GEO-Pass veröffentlichen',working:'Octopus erstellt die Profilseite und aktualisiert das Register…',
 disabled:'Die Veröffentlichung ist noch nicht angeschlossen. Es wurden keine Daten veröffentlicht.',
 noProof:'Dieser Entwurf entstand vor dem Anschluss der Veröffentlichung oder gehört nicht zu den zugelassenen fiktiven Profilen. Erstelle für den Versuch einen neuen fiktiven GEO-Pass.',
 failed:'Die Veröffentlichung konnte noch nicht abgeschlossen werden. Du kannst die Überprüfung erneut starten.',
 updating:'GitHub hat die Änderungen angenommen. Wir prüfen die Verfügbarkeit von Profil und Register…',
 pending:'Die Veröffentlichung wurde angenommen. Die Webseite wird noch aktualisiert; bitte nicht erneut absenden.',
 done:'GEO-Pass veröffentlicht: die eigene Seite und der Registereintrag sind erreichbar.',
 page:'GEO-Pass öffnen',registry:'Register öffnen',search:'Nach Namen suchen'
},
en:{
 intro:'We are testing publication only with predefined fictional identities. Real-person data are not being published yet.',
 check:'I confirm that this profile describes a fictional person and allow its publication in the public registry for this trial.',
 button:'Publish GEO-Pass',working:'Octopus is creating the page and updating the register…',
 disabled:'Publication is not yet connected. No profile has been made public.',
 noProof:'This draft predates publication integration or is not one of the approved fictional identities. Create a new fictional profile for the trial.',
 failed:'Publication has not been confirmed. You can retry the verification.',
 updating:'GitHub accepted the changes. We are checking when the profile and register record are live…',
 pending:'Publication was accepted. The website is still updating; there is no need to submit again.',
 done:'GEO-Pass published: the profile page and registry entry are available.',
 page:'Open GEO-Pass',registry:'Open register',search:'Search by name'
}}[lang];
const worker='https://octopus-geo-pass-test.expert3abeauty.workers.dev';
const store='octopus-geo-pass-ai-draft-v1';
const state=document.querySelector('[data-oct-publish-status]');
const checkbox=card.querySelector('input[type=checkbox]');
const button=card.querySelector('button');
const note=document.querySelector('.q-final-disclaimer');
const terms=card.querySelector('.q-final-terms');
const explanation=card.querySelector('label span');
const intro=document.querySelector('.q-final-intro p');
const read=()=>{try{return JSON.parse(sessionStorage.getItem(store)||'null')}catch{return null}};
const save=result=>{try{sessionStorage.setItem(store,JSON.stringify(result))}catch(_){}};
const say=s=>{state.textContent=s;};
if(intro)intro.textContent=T.intro;
if(explanation)explanation.textContent=T.check;
if(terms)terms.hidden=true; // Temporary legal copy is not an actual client agreement.
if(note)note.hidden=true;
if(button)button.textContent=T.button;
function setLinks(data){
 const wrap=document.createElement('p');wrap.className='oct-publication-links';
 const items=[[T.page,data.profileUrl],[T.registry,data.registryUrl],
  [T.search,data.searchUrl+'results/?q='+encodeURIComponent(data.name||'')]];
 for(const [label,url] of items){
  if(typeof url!=='string'||!url.startsWith('https://annatrocka306.github.io/AnnaTrocka-GEO/geo-pass/'))continue;
  const a=document.createElement('a');a.textContent=label;a.href=url;a.target='_blank';a.rel='noopener';wrap.append(a);
 }
 state.replaceChildren(document.createTextNode(T.done),wrap);
}
function ready(yes){
 checkbox.disabled=!yes;button.disabled=!yes||!checkbox.checked;
}
function isSigned(record){
 const pass=record?.result;
 return pass?.publicationEnvelope?.version===1 &&
   typeof pass?.publicationProof==='string'&&pass.publicationProof.length>20;
}
async function liveCheck(profile){
 if(!profile?.profileUrl||!profile?.registryUrl)return false;
 try{
  const [page,index]=await Promise.all([
   fetch(profile.profileUrl,{cache:'no-store'}),
   fetch('https://annatrocka306.github.io/AnnaTrocka-GEO/geo-pass/data/profiles.json',{cache:'no-store'})
  ]);
  if(!page.ok||!index.ok)return false;
  const records=await index.json();
  if(!Array.isArray(records))return false;
  return records.some(x=>x.id===profile.id&&x.published===true&&x.name===profile.name);
 }catch(_){return false}
}
async function monitor(profile){
 for(let i=0;i<14;i++){
  if(await liveCheck(profile)){setLinks(profile);return}
  await new Promise(resolve=>setTimeout(resolve,3500));
 }
 say(T.pending);
 const a=document.createElement('a');a.href=profile.profileUrl;a.textContent=T.page;a.rel='noopener';a.target='_blank';state.append(' ',a);
}
async function boot(){
 ready(false);
 const saved=read();
 if(!isSigned(saved)){say(T.noProof);return}
 let enabled=false;
 try{
  const response=await fetch(worker+'/health',{cache:'no-store'});
  enabled=response.ok&&(await response.json()).publishingEnabled===true;
 }catch(_){}
 if(!enabled){say(T.disabled);return}
 say('');ready(true);
 const published=saved.result.publicationAccepted;
 if(published){say(T.updating);await monitor(published)}
}
checkbox.addEventListener('change',()=>{button.disabled=!checkbox.checked});
button.addEventListener('click',async()=>{
 const saved=read();
 if(!isSigned(saved)||!checkbox.checked)return;
 checkbox.disabled=true;button.disabled=true;say(T.working);
 try{
  const response=await fetch(worker+'/api/publish',{
   method:'POST',headers:{'content-type':'application/json'},
   body:JSON.stringify({
    confirmed:true,envelope:saved.result.publicationEnvelope,
    proof:saved.result.publicationProof
   }),cache:'no-store',referrerPolicy:'no-referrer'
  });
  const result=await response.json();
  if(!response.ok||result.state!=='publishing')throw Error('not_published');
  const profile={...result,name:saved.result.publicationEnvelope.source.fullName};
  saved.result.publicationAccepted=profile;save(saved);
  say(T.updating);await monitor(profile);
 }catch(_){say(T.failed);ready(true)}
});
boot();
})();