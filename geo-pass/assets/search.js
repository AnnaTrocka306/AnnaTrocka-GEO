(()=>{"use strict";
const host=document.querySelector("[data-search-results]");if(!host)return;
const lang=host.dataset.locale||"de",root=host.dataset.root||"../../../";
const labels={
de:{results:"Suchergebnisse für",found:"Gefundene Profile:",empty:"Leider haben wir diese Fachperson noch nicht gefunden.",hint:"Erstelle jetzt deinen eigenen GEO-Pass, damit KI-Systeme deine Leistungen besser verstehen können.",cta:"Jetzt meinen GEO-Pass erstellen",error:"Die Suche ist vorübergehend nicht verfügbar.",missing:"Bitte gib auf der Suchseite einen Namen ein.",demo:"DEMO · Fiktives Beispiel"},
en:{results:"Search results for",found:"Matching profiles:",empty:"Sorry, we couldn't find that professional.",hint:"Create your GEO-Pass so AI systems can better understand your services.",cta:"Create my GEO-Pass",error:"Search is temporarily unavailable.",missing:"Please enter a name on the search page.",demo:"DEMO · Fictional example"},
ru:{results:"Результаты поиска по запросу",found:"Найдено профилей:",empty:"К сожалению, такой специалист пока не найден.",hint:"Оформите свой GEO Pass, чтобы AI-системам было проще узнать о вас и ваших услугах.",cta:"Зарегистрировать свой GEO Pass",error:"Поиск временно недоступен.",missing:"Введите имя на странице поиска.",demo:"ДЕМО · Вымышленный пример"}}[lang];
const query=(new URLSearchParams(window.location.search).get("q")||"").trim().slice(0,120),title=document.querySelector("[data-query-title]");
const normalize=s=>String(s||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLocaleLowerCase(lang).trim().replace(/\s+/g," ");
const countries={de:{DE:"Deutschland",AT:"Österreich",PL:"Polen",NL:"Niederlande"},en:{DE:"Germany",AT:"Austria",PL:"Poland",NL:"Netherlands"},ru:{DE:"Германия",AT:"Австрия",PL:"Польша",NL:"Нидерланды"}};
const local=x=>typeof x==="object"&&x!==null?x[lang]||x.de||x.en||"":x||"";
function noResults(){host.replaceChildren();const card=document.createElement("div");card.className="search-empty";
const img=document.createElement("img");img.src=root+"assets/octopus-sad.webp";img.alt="";img.width=480;img.height=360;img.loading="eager";
const h=document.createElement("h2");h.textContent=labels.empty;
const p=document.createElement("p");p.textContent=labels.hint;
const a=document.createElement("a");a.className="btn";a.href=root+lang+"/create/";a.textContent=labels.cta;
card.append(img,h,p,a);host.append(card)}
if(!query){host.textContent=labels.missing;return}
if(title)title.textContent=labels.results+" «"+query+"»";
host.textContent="…";
fetch(root+"data/profiles.json",{cache:"no-cache"}).then(r=>{if(!r.ok)throw Error("HTTP "+r.status);return r.json()}).then(data=>{
if(!Array.isArray(data))throw Error("Invalid index");
const found=data.filter(p=>p&&p.published===true&&normalize(p.name).includes(normalize(query))&&/^[a-z0-9-]+$/.test(p.id));
if(!found.length){noResults();return}
host.replaceChildren();const count=document.createElement("p");count.className="tiny";count.textContent=labels.found+" "+found.length;host.append(count);
found.sort((a,b)=>a.name.localeCompare(b.name,lang,{sensitivity:"base"})).forEach(p=>{
const a=document.createElement("a");a.className="search-item";a.href=root+lang+"/experts/"+encodeURIComponent(p.id)+"/?q="+encodeURIComponent(query);
const content=document.createElement("span"),name=document.createElement("strong"),detail=document.createElement("span");
name.textContent=p.name;detail.className="meta";detail.textContent=[local(p.profession),local(p.district),p.city,(countries[lang]||{})[p.country]||p.country,p.fictional?labels.demo:""].filter(Boolean).join(" · ");
content.append(name,detail);const arrow=document.createElement("span");arrow.setAttribute("aria-hidden","true");arrow.textContent="→";a.append(content,arrow);host.append(a)})}).catch(()=>{host.textContent=labels.error});
})();