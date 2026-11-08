(()=>{"use strict";/* GEO Pass UI: offline forms; no messages transmitted. */
const lang=["de","ru","en"].includes(document.documentElement.lang)?document.documentElement.lang:"en";
const w={
ru:["Связаться через Octopus","Сообщение через Octopus","Форма подготовлена, но безопасная отправка ещё не подключена. Сообщение не будет отправлено.","Сообщить об ошибке / исправить или удалить","Обращение к администрации","Это тестовая форма: обращения пока не отправляются.","Имя","Email для ответа","Тема","Сообщение","Тип обращения","Ошибка","Исправление","Удаление","Что необходимо изменить или удалить?","Отправка недоступна","Закрыть","Позвонить","Сайт","Исправить мой GEO-Pass","ТЕСТ · Контакт через Octopus пока не работает.","Здравствуйте! Пишу по вашему профилю GEO-Pass. Меня интересуют ваши услуги. Можно уточнить детали?"],
de:["Über Octopus kontaktieren","Nachricht über Octopus","Das sichere Nachrichtenformular ist vorbereitet, aber der Versand ist noch nicht angeschlossen.","Fehler melden / Korrektur oder Löschung beantragen","Anfrage an Octopus","Dies ist ein Testformular. Es werden noch keine Anfragen versendet.","Name","E-Mail für Antwort","Betreff","Nachricht","Anfrageart","Fehler","Korrektur","Löschung","Was soll geändert oder gelöscht werden?","Versand nicht verfügbar","Schließen","Anrufen","Website","Meinen GEO-Pass bearbeiten","TEST · Kontakt über Octopus noch nicht verfügbar.","Guten Tag! Ich kontaktiere Sie über Ihr GEO-Pass-Profil und interessiere mich für Ihre Leistung. Könnten wir die Einzelheiten besprechen?"],
en:["Contact via Octopus","Message via Octopus","Secure messaging is planned but not yet connected. This form cannot send messages.","Report an error / request correction or removal","Request to Octopus","This is a test form. Requests are not yet transmitted.","Name","Reply email","Subject","Message","Request type","Error","Correction","Removal","What should be corrected or removed?","Sending unavailable","Close","Call","Website","Edit my GEO Pass","TEST · Contact through Octopus not yet operational.","Hello! I'm contacting you through your GEO Pass profile. I'm interested in your services. Could we discuss the details?"]}[lang];
const el=(tag,text,cls)=>{const e=document.createElement(tag);if(text!=null)e.textContent=text;if(cls)e.className=cls;return e;};
const url=x=>{try{let u=new URL(x);return ["https:","http:"].includes(u.protocol)&&u.hostname.includes(".")&&!u.username&&!u.password?u.href:null}catch{return null}};
const email=x=>typeof x==="string"&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(x)?x:null;
const phone=x=>typeof x==="string"&&/^\+?[\d\s().-]+$/.test(x)&&x.replace(/\D/g,"").length>=7&&x.replace(/\D/g,"").length<=15?x:null;
function makeForm(title,help,fields){
 const d=el("dialog",null,"oct-pass-dialog"),f=el("form");f.method="dialog";f.append(el("h2",title),el("p",help,"oct-pass-explain"));
 for(const [label,type,val] of fields){const wrapper=el("label",null,"oct-pass-field");wrapper.append(el("span",label));let e;
 if(type==="select"){e=el("select");for(const [v,t] of val){const op=el("option",t);op.value=v;e.append(op)}}
 else if(type==="textarea"){e=el("textarea");e.rows=4;e.maxLength=900}
 else {e=el("input");e.type=type||"text";e.maxLength=180}
 if(type==="readonly"){e.value=val;e.readOnly=true}wrapper.append(e);f.append(wrapper)}
 const buttons=el("div",null,"oct-pass-dialog-actions"),send=el("button",w[15],"oct-pass-button");
 send.type="button";send.disabled=true;const close=el("button",w[16],"oct-pass-button");close.type="submit";
 buttons.append(send,close);f.append(buttons);d.append(f);d.addEventListener("click",e=>{if(e.target===d)d.close()});return d;
}
function mount(host,options={}){
if(!host)return;const data=options.contacts||{},name=options.profileName||"GEO-Pass",wrap=el("section",null,"oct-pass-actions");
const primary=el("div",null,"oct-pass-actions-row"),open=el("button",w[0],"oct-pass-button oct-pass-button--primary");open.type="button";
const msg=makeForm(w[1],w[2],[[ "GEO-Pass","readonly",name],[w[6],"text"],[w[7],"email"],[w[8],"text"],[w[9],"textarea"]]);open.addEventListener("click",()=>msg.showModal());primary.append(open);
const direct=el("div",null,"oct-pass-actions-row");
function link(text,href){const a=el("a",text,"oct-pass-button");a.href=href;if(href.startsWith("https://")||href.startsWith("http://")){a.target="_blank";a.rel="noopener noreferrer"}direct.append(a);return a}
if(phone(data.phone))link(w[17],"tel:"+data.phone.replace(/[^\d+]/g,""));
if(email(data.email))link("Email","mailto:"+data.email);
if(phone(data.whatsapp)){let num=data.whatsapp.replace(/\D/g,"");link("WhatsApp","https://wa.me/"+num+"?text="+encodeURIComponent(w[21]))}
for(const [k,t] of [["website",w[18]],["linkedin","LinkedIn"],["instagram","Instagram"],["youtube","YouTube"],["tiktok","TikTok"]]){const u=url(data[k]);if(u)link(t,u)}
const foot=el("div",null,"oct-pass-actions-row");if(options.local&&options.editUrl){const a=el("a",w[19],"oct-pass-button");a.href=options.editUrl;foot.append(a)}
const correction=el("button",w[3],"oct-pass-text-link"),request=makeForm(w[4],w[5],[["GEO-Pass","readonly",location.pathname],[w[10],"select",[["error",w[11]],["correction",w[12]],["removal",w[13]]]],[w[6],"text"],[w[7],"email"],[w[14],"textarea"]]);
correction.type="button";correction.addEventListener("click",()=>request.showModal());foot.append(correction);
wrap.append(primary);if(direct.childElementCount)wrap.append(direct);wrap.append(foot,el("p",w[20],"oct-pass-status"),msg,request);host.append(wrap);return wrap;
}
window.OctopusPassActions=Object.freeze({mount});
document.querySelectorAll("[data-octopus-pass-actions]").forEach(e=>mount(e,{profileName:document.querySelector("main h1")?.textContent||"GEO-Pass"}));
})();