/* Shared first-step pattern: exactly one lawyer profession, up to 3 fields, browser-tab draft only. */
(()=>{"use strict";
const form=document.querySelector("[data-legal-focus]");if(!form)return;
const key="octopus-geo-pass-draft-v1",role="lawyer";
const checks=[...form.querySelectorAll("[data-focus-option]")];
const rows=form.querySelector("[data-custom-rows]");
const add=form.querySelector("[data-custom-add]");
const count=form.querySelector("[data-focus-count]");
const submit=form.querySelector('button[type="submit"]');
const labels={input:form.dataset.customPlaceholder||"",remove:form.dataset.customRemove||"",more:form.dataset.customLabel||""};
let draft={};try{const d=JSON.parse(sessionStorage.getItem(key)||"{}");if(d&&typeof d==="object"&&!Array.isArray(d))draft=d}catch(_){}
const saved=draft.legalFocus?.role===role?draft.legalFocus:null;
const codes=new Set(checks.map(c=>c.value));
for(const c of checks)c.checked=!!saved?.selected?.includes(c.value)&&codes.has(c.value);
function customInputs(){return [...rows.querySelectorAll("input[data-custom-item]")]}
function total(){return checks.filter(c=>c.checked).length+customInputs().filter(c=>c.value.trim()).length}
function persist(){
 draft.sectorId="legal";draft.sectorOther="";draft.legalRole=role;
 draft.legalFocus={role,selected:checks.filter(c=>c.checked).map(c=>c.value),
  selectedLabels:checks.filter(c=>c.checked).map(c=>c.closest("label")?.querySelector("span")?.textContent?.trim()||c.value),
  custom:customInputs().map(c=>c.value.trim()).filter(Boolean)};
 try{sessionStorage.setItem(key,JSON.stringify(draft))}catch(_){}
}
function refresh(){
 const n=total();
 for(const c of checks)c.disabled=!c.checked&&n>=3;
 for(const c of customInputs())c.disabled=!c.value.trim()&&n>=3;
 add.disabled=n>=3||customInputs().length>=3;
 submit.disabled=n<1||n>3;
 count.textContent=n+" / 3";
}
function addRow(value=""){
 const row=document.createElement("div");row.className="q-focus-custom-row";
 const inp=document.createElement("input");inp.type="text";inp.maxLength=160;inp.dataset.customItem="";
 inp.placeholder=labels.input;inp.setAttribute("aria-label",labels.more+" "+(customInputs().length+1));inp.value=value;
 row.append(inp);
 if(rows.children.length>0){
  const remove=document.createElement("button");remove.type="button";remove.className="q-focus-remove";
  remove.textContent="×";remove.setAttribute("aria-label",labels.remove);
  remove.addEventListener("click",()=>{row.remove();persist();refresh()});row.append(remove);
 }
 rows.append(row);inp.addEventListener("input",()=>{persist();refresh()});refresh();return inp;
}
const initial=Array.isArray(saved?.custom)?saved.custom.slice(0,3).filter(v=>typeof v==="string"&&v.trim()):[];
for(const v of initial)addRow(v);
if(!rows.children.length)addRow();
for(const c of checks)c.addEventListener("change",()=>{persist();refresh()});
add.addEventListener("click",()=>{if(total()>=3||customInputs().length>=3)return;addRow().focus();persist();refresh()});
form.addEventListener("submit",e=>{e.preventDefault();if(total()<1||total()>3)return;persist();window.location.assign("../visit-details/")});
persist();refresh();
})();