/* GEO Pass Marketing & Kommunikation — up to 3 stage-one directions.
 * Data remain in this browser tab; no AI, publication or network requests. */
(()=>{"use strict";
const form=document.querySelector("[data-marketing-role]");if(!form)return;
const key="octopus-geo-pass-draft-v1";
const allowed=new Set(["consultant","strategist","online","geo","seo","performance","brand","pr","social","content","crm","research","manager","other"]);
const boxes=[...form.querySelectorAll('input[name="marketingRoleChoice"]')];
const other=form.querySelector("[data-marketing-other]"),own=form.querySelector('input[name="marketingRoleOther"]');
const counter=form.querySelector("[data-marketing-count]"),submit=form.querySelector('button[type="submit"]');
let draft={};
try{const x=JSON.parse(sessionStorage.getItem(key)||"{}");if(x&&typeof x==="object"&&!Array.isArray(x))draft=x;}catch(_){}
const prior=Array.isArray(draft.marketingRoles)?draft.marketingRoles:allowed.has(draft.marketingRole)?[draft.marketingRole]:[];
const selectedSaved=[...new Set(prior.filter(x=>allowed.has(x)))].slice(0,3);
for(const checkbox of boxes)checkbox.checked=selectedSaved.includes(checkbox.value);
if(typeof draft.marketingRoleOther==="string")own.value=draft.marketingRoleOther;
function values(){return boxes.filter(x=>x.checked).map(x=>x.value)}
function refresh(){
 const selected=values(),isOther=selected.includes("other");
 other.hidden=!isOther;other.style.display=isOther?"grid":"none";own.required=isOther;own.disabled=!isOther;
 for(const x of boxes)x.disabled=!x.checked&&selected.length>=3;
 if(counter)counter.textContent=selected.length+" / 3";
 if(submit)submit.disabled=selected.length<1;
 draft.sectorId="marketing";draft.sectorOther="";
 draft.marketingRoles=selected;draft.marketingRole=selected[0]||""; // Legacy first-choice compatibility only.
 draft.marketingRoleOther=isOther?own.value.trim():"";
 try{sessionStorage.setItem(key,JSON.stringify(draft))}catch(_){}
}
for(const x of boxes)x.addEventListener("change",refresh);
own.addEventListener("input",refresh);
form.addEventListener("submit",e=>{
 e.preventDefault();refresh();
 const selection=values();
 if(!selection.length||selection.length>3||selection.some(x=>!allowed.has(x))||!form.reportValidity())return;
 if(selection.includes("other")&&!own.value.trim()){own.reportValidity();return;}
 window.location.assign("../experience/");
});
refresh();
})();