(()=>{"use strict";
const host=document.querySelector("[data-registry]");if(!host)return;
const lang=host.dataset.locale||"de",root=host.dataset.root||"../../";
const names={de:{DE:"Deutschland",AT:"Österreich",PL:"Polen",NL:"Niederlande"},en:{DE:"Germany",AT:"Austria",PL:"Poland",NL:"Netherlands"},ru:{DE:"Германия",AT:"Австрия",PL:"Польша",NL:"Нидерланды"}};
const words={de:["Register wird geladen…","Register derzeit nicht verfügbar.","Noch keine veröffentlichten Profile.","DEMO · Fiktives Beispiel"],en:["Loading register…","Register temporarily unavailable.","No published profiles yet.","DEMO · Fictional example"],ru:["Загружаем реестр…","Реестр временно недоступен.","Опубликованных паспортов пока нет.","ДЕМО · Вымышленный пример"]}[lang];
const col=new Intl.Collator(lang,{sensitivity:"base",numeric:true});
const local=x=>typeof x==="object"&&x!==null?String(x[lang]||x.de||x.en||x.ru||"").trim():String(x||"").trim();
const group=(items,get)=>{const m=new Map();items.forEach(item=>{const name=get(item),k=String(name).toLocaleLowerCase(lang);if(!m.has(k))m.set(k,{name,items:[]});m.get(k).items.push(item)});return [...m.values()].sort((a,b)=>col.compare(a.name,b.name))};
function level(name,items,open){const d=document.createElement("details");d.open=open;const s=document.createElement("summary");s.append(document.createTextNode(name));const count=document.createElement("span");count.className="count";count.textContent=items.length;s.append(count);d.append(s);return d}
function links(items){const wrap=document.createElement("div");wrap.className="reg-links";items.slice().sort((a,b)=>col.compare(a.name,b.name)).forEach(p=>{if(!/^[a-z0-9-]+$/.test(p.id))return;const a=document.createElement("a");a.href=root+lang+"/experts/"+encodeURIComponent(p.id)+"/";const strong=document.createElement("strong");strong.textContent=p.name;const meta=document.createElement("span");meta.className="meta";meta.textContent=[local(p.profession),p.fictional?words[3]:""].filter(Boolean).join(" · ");a.append(strong,meta);wrap.append(a)});return wrap}
function render(profiles){host.replaceChildren();if(!profiles.length){host.textContent=words[2];return}
const place=p=>local(p.locality)||local(p.city);
const countryGroups=group(profiles,p=>(names[lang]||names.de)[p.country]||p.country);
function places(items,container){
group(items,p=>place(p)).forEach(locality=>{
const node=level(locality.name,locality.items,locality.items.length<=5);
const direct=locality.items.filter(p=>!local(p.district));if(direct.length)node.append(links(direct));
group(locality.items.filter(p=>local(p.district)),p=>local(p.district)).forEach(district=>{
const area=level(district.name,district.items,false);area.append(links(district.items));node.append(area)});
container.append(node)})}
countryGroups.forEach(country=>{
const countryNode=level(country.name,country.items,countryGroups.length<=5);
const withoutRegion=country.items.filter(p=>!local(p.region));
if(withoutRegion.length)places(withoutRegion,countryNode);
group(country.items.filter(p=>local(p.region)),p=>local(p.region)).forEach(region=>{
const regionNode=level(region.name,region.items,false);places(region.items,regionNode);countryNode.append(regionNode)});
host.append(countryNode)})}
if(!host.querySelector("details"))host.textContent=words[0];
fetch(root+"data/profiles.json",{cache:"no-cache"}).then(r=>{if(!r.ok)throw Error("HTTP "+r.status);return r.json()}).then(data=>{if(!Array.isArray(data))throw Error("Invalid data");render(data.filter(p=>p&&p.published===true&&p.id&&p.name&&p.country&&(local(p.locality)||local(p.city))))}).catch(()=>{if(!host.querySelector("details"))host.textContent=words[1]});
})();