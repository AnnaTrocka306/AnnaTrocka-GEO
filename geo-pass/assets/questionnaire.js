(()=>{"use strict";
/* Privacy-first temporary prototype. All answers stay in this tab's sessionStorage.
   No account, database connection, publication, or notification is live. */
const form=document.querySelector("[data-octopus-form]");if(!form)return;
const step=form.dataset.step,key="octopus-geo-pass-draft-v1";
const steps=["identity","workplace","email","phone","website","whatsapp","social","terms","channels","matching"];
let draft={};try{const x=JSON.parse(sessionStorage.getItem(key)||"{}");if(x&&typeof x==="object"&&!Array.isArray(x))draft=x}catch(e){}
const inputs=[...form.querySelectorAll("input[name],textarea[name]")];
function put(input){
  if(input.type==="checkbox"||input.type==="radio"){
    if(Object.hasOwn(draft,input.name))input.checked=(input.type==="checkbox" ? draft[input.name]===true : draft[input.name]===input.value);
  }else if(typeof draft[input.name]==="string")input.value=draft[input.name];
}
inputs.forEach(put);
function capture(){
  for(const input of inputs){
    if(input.type==="radio"){if(input.checked)draft[input.name]=input.value;else if(!Object.hasOwn(draft,input.name))draft[input.name]="no";}
    else if(input.type==="checkbox")draft[input.name]=input.checked;
    else draft[input.name]=input.value;
  }
  try{sessionStorage.setItem(key,JSON.stringify(draft))}catch(e){/* private browsing may deny storage */}
}
const toggles=[...form.querySelectorAll("[data-conditional]")];
function refresh(){
  for(const block of toggles){
    const source=block.dataset.conditional;
    const checked=form.querySelector('input[name="'+source+'"]:checked');
    const visible=!!checked;
    block.hidden=!visible;
    const field=block.querySelector("input,textarea");if(field)field.required=visible&&block.dataset.required==="true";
  }
  const fieldsUsingAvailability=[...form.querySelectorAll("input[data-requires-draft]")];
  fieldsUsingAvailability.forEach(input=>{
    const has=!!String(draft[input.dataset.requiresDraft]||"").trim();
    input.disabled=!has;
    if(!has)input.checked=false;
  });
}
form.addEventListener("input",()=>{capture();refresh()});
form.addEventListener("change",()=>{const anchor=form.querySelector('input[name="channelEmail"]');if(anchor)anchor.setCustomValidity("");capture();refresh()});
refresh();
const submit=form.querySelector('button[type="submit"]');if(submit)submit.disabled=false;
function normalizeUrls(){
  for(const input of inputs){
    if(input.type==="url"&&input.value.trim()&&!/^[a-z][a-z0-9+.-]*:\/\//i.test(input.value.trim()))
      input.value="https://"+input.value.trim();
  }
}
form.addEventListener("submit",e=>{
  e.preventDefault();
  normalizeUrls();refresh();
  // A contact cannot be marked public without its contact value.
  for(const pair of [["emailAddress","emailPublic"],["phoneNumber","phonePublic"],["websiteUrl","websitePublic"],["whatsappNumber","whatsappPublic"]]){
    const value=form.querySelector('[name="'+pair[0]+'"]');
    const privateChoice=form.querySelector('input[name="'+pair[1]+'"][value="no"]');
    if(value&&!value.value.trim()&&privateChoice)privateChoice.checked=true;
  }
  if(step==="channels"){
    const options=[...form.querySelectorAll('input[type="checkbox"][name^="channel"]')];
    const anchor=options[0];
    if(anchor){
      const messages={de:"Bitte wähle mindestens einen Kontaktweg.",en:"Please choose at least one contact method.",ru:"Выбери хотя бы один способ связи."};
      anchor.setCustomValidity(options.some(x=>x.checked)?"":(messages[document.documentElement.lang]||messages.en));
      if(!anchor.checkValidity()){anchor.reportValidity();return}
    }
  }
  if(!form.reportValidity())return;
  capture();
  const at=steps.indexOf(step);
  if(at>=0&&at<steps.length-1)window.location.assign("../"+steps[at+1]+"/");
  else{
    const dialog=document.querySelector("[data-next-unavailable]");
    if(dialog&&typeof dialog.showModal==="function")dialog.showModal();
  }
});
})();