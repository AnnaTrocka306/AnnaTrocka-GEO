(()=>{"use strict";
/* Demo only. No network traffic, storage backend, publication, or email. */
const main=document.querySelector("[data-pass-content]");if(!main)return;
const heading=document.querySelector("[data-pass-heading]"),status=document.querySelector("[data-pass-status]"),notice=document.querySelector("[data-pass-notice]");
const lang=["ru","de","en"].includes(document.documentElement.lang)?document.documentElement.lang:"ru";
const copy={
ru:{heading:"Я проверяю твои данные",instruction:"Оставайся на этой странице. Я проверяю твои данные и готовлю GEO Pass. Это важно: у меня могут возникнуть дополнительные вопросы.",notice:"Тестовая версия: ответы остаются только в этой вкладке. В облако ничего не отправляется, публикация и email пока недоступны.",checking:"Локальная проверка ответов…",missing:"Здесь нет сохранённой анкеты. Вернись к началу, чтобы проверить работу формы.",start:"Открыть анкету",clarify:"Нужно уточнить ответы",clarifyHelp:"Ответь здесь, повторять всю анкету не нужно.",save:"Сохранить уточнения",preview:"Черновик GEO Pass",previewHelp:"Предварительный текст создан из твоих ответов. Это локальная демонстрация без AI.",edit:"Исправить текст",saveEdit:"Сохранить текст",cancel:"Отмена",h1:"H1 — имя и профессия",h2:"H2 — специализация и потребность",desc:"Описание",h3:"Границы услуги",area:"География и формат",langs:"Языки",contacts:"Разрешённые публичные контакты",service:"Главная услуга",need:"Потребность клиента",method:"Метод работы",outcome:"Ожидаемый результат",location:"Местонахождение",email:"Email для уведомлений",postal:"Почтовый индекс",delivery:"Формат работы",regions:"Уточни регионы или страны",limitChoice:"Ограничение относится к моей выбранной услуге; я хочу видеть его в будущем публичном паспорте.",unavailable:"Публикация отключена до подключения защищённого сервера, проверки согласия и email.",publish:"Подтвердить и опубликовать",demo:"Посмотреть анимацию",demoText:"Демонстрация анимации: настоящая серверная обработка ещё не подключена.",world:"По всему миру",online:"Онлайн",offline:"Лично",contradiction:"Уточни противоречие: выбранная и исключённая услуга совпадают."},
de:{heading:"Ich prüfe deine Angaben",instruction:"Bleib bitte auf dieser Seite. Ich prüfe deine Angaben und bereite deinen GEO Pass vor. Es können noch Fragen auftauchen.",notice:"Testversion: Deine Antworten bleiben in diesem Browser-Tab. Keine Übermittlung, Veröffentlichung oder E-Mail.",checking:"Prüfung der Antworten im Browser …",missing:"Kein gespeicherter Fragebogen in diesem Tab.",start:"Zum Fragebogen",clarify:"Ich habe noch Fragen",clarifyHelp:"Antworte hier. Du musst nicht von vorn beginnen.",save:"Antworten speichern",preview:"Dein GEO-Pass-Entwurf",previewHelp:"Diese Vorschau wurde nur lokal aus deinen Antworten erstellt, ohne KI.",edit:"Text bearbeiten",saveEdit:"Änderungen speichern",cancel:"Abbrechen",h1:"H1 — Name und Beruf",h2:"H2 — Leistung und Kundenbedarf",desc:"Beschreibung",h3:"Leistungsgrenzen",area:"Gebiet und Arbeitsform",langs:"Sprachen",contacts:"Freigegebene öffentliche Kontakte",service:"Schwerpunkt",need:"Kundenbedarf",method:"Methode",outcome:"Gewünschtes Ergebnis",location:"Ort",email:"E-Mail für Benachrichtigungen",postal:"Postleitzahl",delivery:"Arbeitsform",regions:"Regionen oder Länder präzisieren",limitChoice:"Diese Grenze betrifft meinen Schwerpunkt und darf später öffentlich erscheinen.",unavailable:"Veröffentlichung erst nach Anbindung des sicheren Servers, der Freigabeprüfung und des E-Mail-Dienstes.",publish:"Bestätigen und veröffentlichen",demo:"Animation ansehen",demoText:"Animationsdemo: Die Serververarbeitung ist noch nicht angeschlossen.",world:"Weltweit",online:"Online",offline:"Persönlich",contradiction:"Bitte kläre: gewünschte und ausgeschlossene Leistung sind gleich."},
en:{heading:"I'm checking your details",instruction:"Stay on this page while I check your details and prepare your GEO Pass. I may have additional questions.",notice:"Test version: answers stay in this browser tab. Nothing is sent, published or emailed.",checking:"Checking your answers locally…",missing:"No saved questionnaire in this tab.",start:"Open questionnaire",clarify:"I need to clarify something",clarifyHelp:"Answer here — there's no need to repeat the questionnaire.",save:"Save answers",preview:"Your GEO Pass draft",previewHelp:"This preview was prepared locally from your answers, without AI.",edit:"Edit text",saveEdit:"Save changes",cancel:"Cancel",h1:"H1 — name and profession",h2:"H2 — service and customer need",desc:"Description",h3:"Service boundaries",area:"Service area and format",langs:"Languages",contacts:"Approved public contact details",service:"Main service",need:"Customer need",method:"Approach",outcome:"Expected result",location:"Location",email:"Notification email",postal:"Postal code",delivery:"Delivery mode",regions:"Specify regions or countries",limitChoice:"This limit is relevant to my main service and I permit it in the future public passport.",unavailable:"Publication is disabled until secure server storage, publication approval and email are connected.",publish:"Confirm and publish",demo:"Preview animation",demoText:"Animation demo only: server processing is not connected yet.",world:"Worldwide",online:"Remote",offline:"In person",contradiction:"Please clarify: desired and excluded services match."}
};
const t=copy[lang],key="octopus-geo-pass-draft-v1",editKey="octopus-geo-pass-demo-edits-v1";
let data={},edits={};try{const v=JSON.parse(sessionStorage.getItem(key)||"{}");if(v&&typeof v==="object"&&!Array.isArray(v))data=v;}catch{}
try{const v=JSON.parse(sessionStorage.getItem(editKey)||"{}");if(v&&typeof v==="object"&&!Array.isArray(v))edits=v;}catch{}
function str(k){return typeof data[k]==="string"?data[k].trim().replace(/\s+/g," "):""}
function yes(k){return data[k]===true||data[k]==="yes"}
function node(tag,text,cls){const n=document.createElement(tag);if(typeof text==="string")n.textContent=text;if(cls)n.className=cls;return n}
function button(text,action,disabled=false){const b=node("button",text,"q-flow-button");b.type="button";b.disabled=disabled;if(action)b.addEventListener("click",action);return b}
function persist(){try{sessionStorage.setItem(key,JSON.stringify(data))}catch{}}
function persistEdits(){try{sessionStorage.setItem(editKey,JSON.stringify(edits))}catch{}}
function required(){const fields=[["fullName",t.h1],["profession",t.h1],["priorityService",t.service],["clientNeeds",t.need],["professionalApproach",t.method],["expectedOutcome",t.outcome],["country",t.location],["locality",t.location],["postalCode",t.postal],["emailAddress",t.email]];const missing=fields.filter(([k])=>!str(k));if(str("emailAddress")&&!/^\S+@\S+\.\S+$/.test(str("emailAddress")))missing.push(["emailAddress",t.email]);
if(!["geoLocal","geoNational","geoWorldwide","geoSelectedRegions","geoAtWorkplace"].some(yes)&&!str("geoAreaDetails"))missing.push(["geoAreaDetails",t.area]);
if(yes("geoSelectedRegions")&&!str("geoAreaDetails"))missing.push(["geoAreaDetails",t.regions]);
if(!yes("serviceInPerson")&&!yes("serviceRemote"))missing.push(["serviceRemote",t.delivery]);
if(!["langDe","langEn","langRu"].some(yes)&&!str("otherLanguages"))missing.push(["otherLanguages",t.langs]);
if(str("priorityService")&&str("priorityService").toLowerCase()===str("excludedWork").toLowerCase())missing.push(["excludedWork",t.contradiction]);
return missing;}
function draft(){
const methods=str("professionalApproach"),outcome=str("expectedOutcome");
const description=lang==="ru"?"Способ работы: "+methods+". Ожидаемый результат: "+outcome+".":lang==="de"?"Arbeitsweise: "+methods+". Angestrebtes Ergebnis: "+outcome+".":"Approach: "+methods+". Expected outcome: "+outcome+".";
const area=[];
if(yes("geoAtWorkplace")&&str("street"))area.push(str("street")+" "+str("houseNumber"));
if(yes("geoLocal"))area.push(str("locality"));
if(yes("geoNational"))area.push(str("country"));
if(yes("geoSelectedRegions")||(!["geoLocal","geoNational","geoWorldwide","geoAtWorkplace"].some(yes)&&str("geoAreaDetails")))area.push(str("geoAreaDetails"));
if(yes("geoWorldwide"))area.push(t.world);
if(yes("serviceInPerson"))area.push(t.offline);
if(yes("serviceRemote"))area.push(t.online);
const languages=[];if(yes("langDe"))languages.push("DE");if(yes("langEn"))languages.push("EN");if(yes("langRu"))languages.push("RU");
if(str("otherLanguages"))languages.push(str("otherLanguages"));
const contact=[];
for(const [v,flag] of [["emailAddress","emailPublic"],["phoneNumber","phonePublic"],["whatsappNumber","whatsappPublic"],["websiteUrl","websitePublic"],["linkedinUrl","linkedinPublic"],["instagramUrl","instagramPublic"],["youtubeUrl","youtubePublic"],["tiktokUrl","tiktokPublic"]]){
if(!str(v)||!(data[flag]===true||data[flag]==="yes"))continue;
if(v.endsWith("Url")){try{const u=new URL(str(v));if(u.protocol!=="https:"&&u.protocol!=="http:")continue;contact.push(v.replace("Url","")+": "+u.href);}catch{}}
else contact.push(v+": "+str(v));
}
return {h1:str("fullName")+" — "+str("profession"),h2:edits.h2||str("priorityService")+" — "+str("clientNeeds"),desc:edits.desc||description,h3:str("excludedWork"),area:area.filter(Boolean).join(" · "),langs:languages.join(" · "),contacts:contact.join(" · ")};}
function section(parent,label,value,title=false){
const wrap=node("div",null,"q-flow-section");wrap.append(node("p",label,"q-flow-label"));
wrap.append(node(title?"h2":"p",value||"—",title?"q-flow-title":"q-flow-text"));parent.append(wrap);}
function showMissing(){
heading.textContent=t.heading;status.textContent=t.missing;main.replaceChildren();
const a=node("a",t.start,"q-flow-button");a.href="../identity/";main.append(a);}
function showQuestions(items){
heading.textContent=t.clarify;status.textContent=t.clarifyHelp;main.replaceChildren();document.querySelector("[data-pass-mascot]")?.classList.remove("is-checking");
const form=node("form",null,"q-flow-form");
for(const [field,label] of items){
const wrapper=node("label",null,"q-flow-field"),input=node("textarea");wrapper.append(node("span",label));
input.name=field;input.rows=2;input.maxLength=900;input.required=true;input.value=str(field);
if(field==="emailAddress"){input.rows=1;input.inputMode="email"}
if(field==="serviceRemote"){input.remove();const choices=node("div",null,"q-flow-actions");for(const [name,label] of [["serviceRemote",t.online],["serviceInPerson",t.offline]]){const option=node("label",null,"q-flow-checkbox"),box=node("input");box.type="checkbox";box.name=name;box.checked=yes(name);option.append(box,node("span",label));choices.append(option)}wrapper.append(choices)}
else wrapper.append(input);
form.append(wrapper);
}
const save=node("button",t.save,"q-flow-button");save.type="submit";form.append(save);
form.addEventListener("submit",e=>{e.preventDefault();for(const input of form.querySelectorAll("textarea"))data[input.name]=input.value.trim();for(const box of form.querySelectorAll("input[type=checkbox]"))data[box.name]=box.checked;persist();show();});main.append(form);
}
function showEditor(p){
heading.textContent=t.edit;main.replaceChildren();document.querySelector("[data-pass-mascot]")?.classList.remove("is-checking");
const form=node("form",null,"q-flow-form");
for(const [key,label] of [["h2",t.h2],["desc",t.desc]]){
const wrapper=node("label",null,"q-flow-field"),input=node("textarea");wrapper.append(node("span",label));input.name=key;input.rows=key==="h2"?3:5;input.maxLength=key==="h2"?650:1200;input.required=true;input.value=p[key];wrapper.append(input);form.append(wrapper);
}
const controls=node("div",null,"q-flow-actions"),save=node("button",t.saveEdit,"q-flow-button");save.type="submit";
controls.append(save,button(t.cancel,showPreview));form.append(controls);
form.addEventListener("submit",e=>{e.preventDefault();const fd=new FormData(form);edits.h2=String(fd.get("h2")||"").trim();edits.desc=String(fd.get("desc")||"").trim();persistEdits();showPreview();});
main.append(form,node("p",t.unavailable,"q-flow-note"));}
function showPreview(){
const p=draft();heading.textContent=t.preview;status.textContent=t.previewHelp;main.replaceChildren();document.querySelector("[data-pass-mascot]")?.classList.remove("is-checking");
const card=node("article",null,"q-flow-card");
section(card,t.h1,p.h1,true);section(card,t.h2,p.h2,true);section(card,t.desc,p.desc);
if(p.h3){
const label=node("label",null,"q-flow-checkbox"),input=node("input");input.type="checkbox";input.checked=Boolean(edits.showLimit);
input.addEventListener("change",()=>{edits.showLimit=input.checked;persistEdits();showPreview();});
label.append(input,node("span",t.limitChoice));card.append(label);
if(edits.showLimit)section(card,t.h3,p.h3);
}
section(card,t.area,p.area);section(card,t.langs,p.langs);if(p.contacts)section(card,t.contacts,p.contacts);main.append(card);
const actions=node("div",null,"q-flow-actions");actions.append(button(t.demo,showAnimationDemo),button(t.edit,()=>showEditor(p)),button(t.publish,null,true));
main.append(actions,node("p",t.unavailable,"q-flow-note"));
}
function showAnimationDemo(){
heading.textContent=t.heading;status.textContent=t.instruction;main.replaceChildren(node("p",t.demoText,"q-flow-note"));
document.querySelector("[data-pass-mascot]")?.classList.add("is-checking");
window.setTimeout(showPreview,2200);
}
function show(){if(!Object.keys(data).length)return showMissing();const missing=required();if(missing.length)showQuestions(missing);else showPreview();}
heading.textContent=t.heading;status.textContent=t.instruction;notice.textContent=t.notice;
main.replaceChildren(node("p",t.checking,"q-flow-note"));
queueMicrotask(show);
})();