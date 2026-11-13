/* GEO-Pass Pflege & Betreuung: first-stage profession selection; no network calls. */
(()=>{"use strict";
const form=document.querySelector('[data-pflege-role]');if(!form)return;
const key='octopus-geo-pass-draft-v1';
const radios=[...form.querySelectorAll('input[name="careRole"]')];
const own=form.querySelector('input[name="careRoleOther"]'),other=form.querySelector('[data-care-other]');
const allowed=new Set(["fach","alten","kranken","kinder","assist","helfer","betreuung","haus","heiler","other"]);
let draft={};try{const value=JSON.parse(sessionStorage.getItem(key)||"{}");if(value&&typeof value==="object"&&!Array.isArray(value))draft=value;}catch(_){}
if(allowed.has(draft.careRole)){const field=radios.find(x=>x.value===draft.careRole);if(field)field.checked=true;}
if(typeof draft.careRoleOther==="string")own.value=draft.careRoleOther;
function refresh(){
 const current=radios.find(x=>x.checked),isOther=current?.value==="other";
 other.hidden=!isOther;other.style.display=isOther?'grid':'none';own.required=isOther;own.disabled=!isOther;
 draft.sectorId="care";draft.sectorOther="";
 draft.careRole=current?.value||"";
 draft.careRoleOther=isOther?own.value.trim():"";
 try{sessionStorage.setItem(key,JSON.stringify(draft))}catch(_){}
}
for(const item of radios)item.addEventListener("change",refresh);
own.addEventListener("input",refresh);
form.addEventListener("submit",e=>{
 e.preventDefault();refresh();
 if(!form.reportValidity()||!allowed.has(draft.careRole)||draft.careRole==="other"&&!draft.careRoleOther)return;
 window.location.assign("../visit-details/");
});
refresh();
})();