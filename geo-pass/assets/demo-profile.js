(()=>{"use strict";
/* This displays ONLY a locally confirmed, on-device demo. No network, no public indexing. */
const host=document.querySelector("[data-octopus-demo-profile]");
if(!host)return;
const lang=["ru","de","en"].includes(document.documentElement.lang)?document.documentElement.lang:"ru";
const words={
 ru:{empty:"В этом браузере пока нет пробного GEO Pass.",start:"Создать пробный GEO Pass",demo:"ЛОКАЛЬНОЕ ДЕМО · Не опубликовано в интернете",heading:"Твой пробный GEO Pass",profession:"Специалист",service:"Специализация",description:"Профессиональное описание",area:"География и формат",language:"Языки",contacts:"Разрешённые контакты",excluded:"Границы услуги",registry:"Вернуться в реестр",delete:"Удалить тестовый профиль из моего браузера",confirm:"Удалить локальную тестовую копию? Это не затрагивает реальные опубликованные профили.",deleted:"Тестовая копия удалена из этого браузера.",phone:"Телефон",email:"Email",whatsapp:"WhatsApp",website:"Сайт"},
 de:{empty:"In diesem Browser gibt es noch keinen Test-GEO-Pass.",start:"Test-GEO-Pass erstellen",demo:"LOKALE DEMO · Nicht im Internet veröffentlicht",heading:"Dein Test-GEO-Pass",profession:"Fachperson",service:"Schwerpunkt",description:"Berufliche Beschreibung",area:"Gebiet und Arbeitsform",language:"Sprachen",contacts:"Freigegebene Kontakte",excluded:"Leistungsgrenzen",registry:"Zurück zum Register",delete:"Testprofil aus meinem Browser löschen",confirm:"Diese lokale Testkopie löschen? Das hat keine Auswirkungen auf tatsächlich veröffentlichte Profile.",deleted:"Die lokale Testkopie wurde entfernt.",phone:"Telefon",email:"E-Mail",whatsapp:"WhatsApp",website:"Website"},
 en:{empty:"There is no test GEO Pass in this browser yet.",start:"Create a test GEO Pass",demo:"LOCAL DEMO · Not published on the internet",heading:"Your test GEO Pass",profession:"Professional",service:"Specialization",description:"Professional description",area:"Area and format",language:"Languages",contacts:"Approved contacts",excluded:"Service boundaries",registry:"Back to registry",delete:"Delete local test profile",confirm:"Delete the local test copy? Real published profiles are unaffected.",deleted:"The local test copy has been removed.",phone:"Phone",email:"Email",whatsapp:"WhatsApp",website:"Website"}
}[lang];
const p=window.OctopusLocalPass?.get();
const node=(tag,text,cls)=>{const el=document.createElement(tag);if(text!==undefined&&text!==null)el.textContent=text;if(cls)el.className=cls;return el;};
const root=host.dataset.root||"../../";
const banner=node("p",words.demo,"oct-local-demo-banner");
host.append(banner);
function empty(text){
 const card=node("section",null,"oct-local-card");
 card.append(node("h1",text));
 const a=node("a",words.start,"oct-local-btn");a.href=root+lang+"/create/";
 card.append(a);host.append(card);
}
if(!p){empty(words.empty);return}
const card=node("article",null,"oct-local-card");
card.append(node("h1",p.h1,"oct-local-title"),node("h2",p.h2,"oct-local-subtitle"),node("p",p.description,"oct-local-paragraph"));
function field(label,val){
 if(!val||(Array.isArray(val)&&!val.length))return;
 const section=node("section",null,"oct-local-field");
 section.append(node("h3",label),node("p",Array.isArray(val)?val.join(" · "):val));card.append(section);
}
field(words.area,p.territory);
field(words.language,p.languages.map(x=>x.toUpperCase()));
field(words.excluded,p.excluded);
const contacts=p.publicContacts||{};
const labels={email:words.email,phone:words.phone,whatsapp:words.whatsapp,website:words.website,linkedin:"LinkedIn",instagram:"Instagram",youtube:"YouTube",tiktok:"TikTok"};
const fields=Object.entries(contacts);
if(fields.length){
 const section=node("section",null,"oct-local-field");
 section.append(node("h3",words.contacts));
 const ul=node("ul");
 for(const [key,value] of fields){
  if(!labels[key]||!value)continue;
  const li=node("li"),label=node("strong",labels[key]+": ");
  li.append(label);
  if(["website","linkedin","instagram","youtube","tiktok"].includes(key)){
   try{const url=new URL(value);if(["https:","http:"].includes(url.protocol)){const a=node("a",value);a.href=url.href;a.target="_blank";a.rel="noopener noreferrer";li.append(a);}else li.append(node("span",value));}catch{li.append(node("span",value));}
  }else li.append(node("span",value));
  ul.append(li);
 }
 section.append(ul);card.append(section);
}
host.append(card);
const actions=node("div",null,"oct-local-actions");
const registry=node("a",words.registry,"oct-local-btn");registry.href=root+lang+"/register/";
const remove=node("button",words.delete,"oct-local-btn oct-local-btn--secondary");remove.type="button";
remove.addEventListener("click",()=>{
 if(!window.confirm(words.confirm))return;
 if(window.OctopusLocalPass.remove()){
  card.remove();actions.remove();empty(words.deleted);
 }
});
actions.append(registry,remove);host.append(actions);
})();