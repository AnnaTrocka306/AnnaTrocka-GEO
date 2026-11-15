/* Marketing & Kommunikation: profession selection only, local draft only. */
(()=>{"use strict";
const form=document.querySelector("[data-marketing-role]");if(!form)return;
const key="octopus-geo-pass-draft-v1",allowed=new Set(["consultant","strategist","online","geo","seo","performance","brand","pr","social","content","crm","research","manager","other"]);
const radios=[...form.querySelectorAll('input[name="marketingRole"]')],other=form.querySelector("[data-marketing-other]"),own=form.querySelector('input[name="marketingRoleOther"]');
let draft={};try{const x=JSON.parse(sessionStorage.getItem(key)||"{}");if(x&&typeof x==="object"&&!Array.isArray(x))draft=x;}catch(_){}
if(allowed.has(draft.marketingRole)){const found=radios.find(x=>x.value===draft.marketingRole);if(found)found.checked=true;}
if(typeof draft.marketingRoleOther==="string")own.value=draft.marketingRoleOther;
function refresh(){
 const choice=radios.find(x=>x.checked),isOther=choice?.value==="other";
 other.hidden=!isOther;other.style.display=isOther?"grid":"none";own.required=isOther;own.disabled=!isOther;
 draft.sectorId="marketing";draft.sectorOther="";draft.marketingRole=choice?.value||"";draft.marketingRoleOther=isOther?own.value.trim():"";
 try{sessionStorage.setItem(key,JSON.stringify(draft))}catch(_){}
}
radios.forEach(x=>x.addEventListener("change",refresh));own.addEventListener("input",refresh);
form.addEventListener("submit",e=>{e.preventDefault();refresh();if(!form.reportValidity()||!allowed.has(draft.marketingRole)||(draft.marketingRole==="other"&&!draft.marketingRoleOther))return;window.location.assign("../experience/");});
refresh();
})();
