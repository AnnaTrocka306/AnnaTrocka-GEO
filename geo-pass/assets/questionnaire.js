(()=>{"use strict";
const form=document.querySelector("[data-octopus-form]");
if(!form)return;
const step=form.dataset.step;
const key="octopus-geo-pass-draft-v1";
let draft={};
try{draft=JSON.parse(sessionStorage.getItem(key)||"{}")||{}}catch(e){draft={}}
const fields=[...form.querySelectorAll("input[name]")];
for(const input of fields){
 if(typeof draft[input.name]==="string")input.value=draft[input.name];
 input.addEventListener("input",save);
}
function save(){
 const record=Object.assign({},draft);
 for(const input of fields)record[input.name]=input.value;
 draft=record;
 try{sessionStorage.setItem(key,JSON.stringify(record))}catch(e){/* preview: storage unavailable */}
}
const submit=form.querySelector('button[type="submit"]');if(submit)submit.disabled=false;
form.addEventListener("submit",e=>{
 e.preventDefault();
 if(!form.reportValidity())return;
 save();
 if(step==="identity"){
  window.location.assign("../workplace/");
 }else{
  const dialog=document.querySelector("[data-next-unavailable]");
  if(dialog && typeof dialog.showModal==="function")dialog.showModal();
 }
});
})();