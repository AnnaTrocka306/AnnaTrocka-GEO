/* Unternehmensberatung: three self-declared areas, local draft only; no API, AI, billing or publication. */
(()=>{"use strict";
const form=document.querySelector("[data-consulting-directions]");if(!form)return;
const key="octopus-geo-pass-draft-v1",allowed=new Set(["strategy","startup","change","process","digital","ai","management","hr","crisis","succession","international","grants","projects","other"]);
const boxes=[...form.querySelectorAll('input[name="consultingDirectionChoice"]')];
const other=form.querySelector("[data-consulting-other]"),own=form.querySelector('input[name="consultingDirectionOther"]');
const counter=form.querySelector("[data-consulting-count]"),submit=form.querySelector('button[type="submit"]');
let draft={};try{const d=JSON.parse(sessionStorage.getItem(key)||"{}");if(d&&typeof d==="object"&&!Array.isArray(d))draft=d;}catch(_){}
const saved=Array.isArray(draft.consultingDirections)?draft.consultingDirections:[];
const picked=[...new Set(saved.filter(x=>allowed.has(x)))].slice(0,3);
for(const box of boxes)box.checked=picked.includes(box.value);
if(typeof draft.consultingDirectionOther==="string")own.value=draft.consultingDirectionOther;
function selected(){return boxes.filter(b=>b.checked).map(b=>b.value)}
function refresh(){
 const ids=selected(),free=ids.includes("other");
 other.hidden=!free;other.style.display=free?"grid":"none";own.required=free;own.disabled=!free;
 for(const box of boxes)box.disabled=!box.checked&&ids.length>=3;
 if(counter)counter.textContent=ids.length+" / 3";
 if(submit)submit.disabled=ids.length===0;
 draft.sectorId="consulting";draft.sectorOther="";draft.consultingDirections=ids;
 draft.consultingDirectionOther=free?own.value.trim():"";
 try{sessionStorage.setItem(key,JSON.stringify(draft))}catch(_){}
}
boxes.forEach(b=>b.addEventListener("change",refresh));
own.addEventListener("input",refresh);
form.addEventListener("submit",e=>{
 e.preventDefault();refresh();const ids=selected();
 if(ids.length<1||ids.length>3||ids.some(x=>!allowed.has(x))||!form.reportValidity())return;
 if(ids.includes("other")&&!own.value.trim()){own.reportValidity();return}
 window.location.assign("../experience/");
});
refresh();
})();