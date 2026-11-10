/* Octopus Beauty: one priority card, max three directions, browser-only staging.
 * No AI, no server calls; uses existing draft storage and does not alter medical intake. */
(()=>{"use strict";
const form=document.querySelector("[data-beauty-focus]");if(!form)return;
const branch=form.dataset.beautyFocus;
const key="octopus-geo-pass-draft-v1";
const checks=[...form.querySelectorAll("[data-focus-option]")];
const rows=form.querySelector("[data-custom-rows]");
const add=form.querySelector("[data-custom-add]");
const count=form.querySelector("[data-focus-count]");
const submit=form.querySelector('button[type="submit"]');
const dialog=document.querySelector("[data-focus-dialog]");
const labels={input:form.dataset.customPlaceholder||"",remove:form.dataset.customRemove||"",more:form.dataset.customLabel||""};
let draft={};try{const x=JSON.parse(sessionStorage.getItem(key)||"{}");if(x&&typeof x==="object"&&!Array.isArray(x))draft=x;}catch(_){}
const saved=draft.beautyFocus?.branch===branch?draft.beautyFocus:null;
const codes=new Set(checks.map(c=>c.value));
for(const check of checks)check.checked=!!saved?.selected?.includes(check.value)&&codes.has(check.value);
function customInputs(){return [...rows.querySelectorAll("input[data-custom-item]")]}
function total(){return checks.filter(c=>c.checked).length+customInputs().filter(c=>c.value.trim()).length}
function persist(){
 draft.beautyFocus={branch,selected:checks.filter(c=>c.checked).map(c=>c.value),
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
 const field=document.createElement("input");field.type="text";field.maxLength=160;
 field.dataset.customItem="";field.placeholder=labels.input;
 field.setAttribute("aria-label",labels.more+" "+(customInputs().length+1));
 field.value=value;
 row.append(field);
 if(rows.children.length>0){
  const del=document.createElement("button");del.type="button";del.className="q-focus-remove";
  del.textContent="×";del.setAttribute("aria-label",labels.remove);
  del.addEventListener("click",()=>{row.remove();persist();refresh()});
  row.append(del);
 }
 rows.append(row);
 field.addEventListener("input",()=>{persist();refresh()});
 refresh();return field;
}
const initial=Array.isArray(saved?.custom)?saved.custom.slice(0,3).filter(x=>typeof x==="string"&&x.trim()):[];
for(const value of initial)addRow(value);
if(!rows.children.length)addRow();
for(const check of checks)check.addEventListener("change",()=>{persist();refresh()});
add.addEventListener("click",()=>{if(total()>=3||customInputs().length>=3)return;addRow().focus();persist();refresh()});
form.addEventListener("submit",e=>{
 e.preventDefault();if(total()<1||total()>3)return;
 persist();
 if(dialog&&typeof dialog.showModal==="function")dialog.showModal();
});
persist();refresh();
})();
