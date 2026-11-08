(()=>{"use strict";
/* Privacy-first temporary prototype. All answers stay in this tab's sessionStorage.
   No account, database connection, publication, or notification is live. */
const form=document.querySelector("[data-octopus-form]");if(!form)return;
const step=form.dataset.step,key="octopus-geo-pass-draft-v1";
const steps=["identity","workplace","email","phone","website","whatsapp","social","terms","channels","sector","matching","beauty-direction","medical-role","medical-services","podology-services","visit-details"];
let draft={};try{const x=JSON.parse(sessionStorage.getItem(key)||"{}");if(x&&typeof x==="object"&&!Array.isArray(x))draft=x}catch(e){}
// The profession field was removed from the active identity screen.
delete draft.profession;
// A surgical choice from a previous doctor draft is never carried into other roles.
if(step==="medical-services"&&draft.medicalRole!=="doctor")delete draft.medicalSurgery;
const inputs=[...form.querySelectorAll("input[name],textarea[name],select[name]")];
// Repeatable "other procedure" answers use separately named fields so each entry
// survives backwards navigation. No server-side collection is enabled.
function setupProcedureRepeater(){
  const block=form.querySelector("[data-procedure-repeater]");
  if(!block)return;
  const base=block.dataset.procedureRepeater;
  const rows=block.querySelector("[data-procedure-rows]");
  const original=form.querySelector('[name="'+base+'"]');
  const addButton=block.querySelector("[data-add-procedure]");
  if(!rows||!original||!addButton)return;
  const labelText=block.dataset.procedureLabel||"Other treatment";
  const removeText=block.dataset.procedureRemove||"Remove treatment";
  let next=2;
  function createRow(n){
    const name=base+n;
    const row=document.createElement("div");
    row.className="q-procedure-extra";
    const field=document.createElement("div");
    field.className="q-procedure-extra__field";
    const label=document.createElement("label");
    label.htmlFor=name;
    label.textContent=labelText+" "+n;
    const input=document.createElement("input");
    input.type="text";input.id=name;input.name=name;input.maxLength=180;
    input.placeholder=original.placeholder;
    input.autocomplete="off";
    if(typeof draft[name]==="string")input.value=draft[name];
    field.append(label,input);
    const remove=document.createElement("button");
    remove.type="button";remove.className="q-procedure-remove";
    remove.setAttribute("aria-label",removeText+" "+n);
    remove.textContent="×";
    remove.addEventListener("click",()=>{
      row.remove();
      const at=inputs.indexOf(input);
      if(at!==-1)inputs.splice(at,1);
      delete draft[name];
      capture();clearRequiredGroupErrors();
      original.focus();
    });
    row.append(field,remove);
    rows.append(row);
    inputs.push(input);
    next=Math.max(next,n+1);
    return input;
  }
  // Restore the complete set, not just the first free-text answer.
  for(const n of Object.keys(draft)
    .filter(k=>k.startsWith(base)&&/^\d+$/.test(k.slice(base.length)))
    .map(k=>Number(k.slice(base.length)))
    .filter(n=>Number.isSafeInteger(n)&&n>=2)
    .sort((a,b)=>a-b))createRow(n);
  addButton.addEventListener("click",()=>{
    const field=createRow(next);
    capture();field.focus();
  });
}
setupProcedureRepeater();

// Additional practice addresses and calendar URLs are optional repeatable inputs.
function setupVisitRepeaters(){
 if(step!=="visit-details")return;
 const back=document.querySelector("[data-medical-back]");
 if(back&&draft.medicalRole==="podologist")back.href="../podology-services/";
 for(const block of form.querySelectorAll("[data-visit-repeater]")){
  const base=block.dataset.visitRepeater,orig=block.querySelector('input[name="'+base+'"]');
  const rows=block.querySelector("[data-visit-rows]"),add=block.querySelector("[data-visit-add]");
  if(!orig||!rows||!add)continue;
  let next=2;
  function row(n){
   const name=base+n,el=document.createElement("div"),field=document.createElement("div");
   el.className="q-procedure-extra";field.className="q-procedure-extra__field";
   const label=document.createElement("label");label.htmlFor=name;label.textContent=(block.dataset.visitLabel||"Extra")+" "+n;
   const inp=document.createElement("input");inp.id=name;inp.name=name;inp.type=orig.type;inp.maxLength=orig.maxLength;
   inp.placeholder=orig.placeholder;inp.autocomplete="off";
   if(typeof draft[name]==="string")inp.value=draft[name];
   const del=document.createElement("button");del.type="button";del.className="q-procedure-remove";
   del.setAttribute("aria-label",(block.dataset.visitRemove||"Remove")+" "+n);del.textContent="×";
   del.addEventListener("click",()=>{el.remove();const i=inputs.indexOf(inp);if(i>=0)inputs.splice(i,1);delete draft[name];capture();orig.focus()});
   field.append(label,inp);el.append(field,del);rows.append(el);inputs.push(inp);
   next=Math.max(next,n+1);return inp;
  }
  for(const n of Object.keys(draft).filter(k=>k.startsWith(base)&&/^\d+$/.test(k.slice(base.length))).map(k=>Number(k.slice(base.length))).filter(n=>Number.isSafeInteger(n)&&n>=2&&n<1000).sort((a,b)=>a-b))row(n);
  add.addEventListener("click",()=>{const inp=row(next);capture();inp.focus()});
 }
}
setupVisitRepeaters();

// Medical branch is a short self-declared profile, not a credentials audit.
if(step==="medical-services"){
  const surgery=form.querySelector('[data-doctor-only]');
  if(surgery){
    const show=draft.medicalRole==="doctor";
    surgery.hidden=!show;
    const field=surgery.querySelector('input');
    if(field){field.disabled=!show;if(!show)field.checked=false;}
  }
}
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
// Geographic reach, work mode and spoken language are separate, explicit answers.
// No geographic area or language is inferred from residence, UI language or nationality.
const requiredGroups=[...form.querySelectorAll("[data-required-group]")];
function clearRequiredGroupErrors(){for(const group of requiredGroups){const first=group.querySelector('input[type="checkbox"]');if(first)first.setCustomValidity("");}}
function validateRequiredGroups(){
  for(const group of requiredGroups){
    const first=group.querySelector('input[type="checkbox"]');if(!first)continue;
    const choices=[...group.querySelectorAll('input[type="checkbox"]')];
    const additionalName=group.dataset.additionalInput;
    const additional=additionalName?[...form.querySelectorAll('input[name^="'+additionalName+'"],textarea[name^="'+additionalName+'"]')]:[];
    const valid=choices.some(x=>x.checked&&!x.disabled)||additional.some(x=>x.value.trim());
    first.setCustomValidity(valid?"":(group.dataset.requiredMessage||"Please choose at least one option."));
    if(!valid){first.reportValidity();return false;}
  }
  return true;
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
  const selectedRegions=form.querySelector('input[name="geoSelectedRegions"]');
  const areaDetails=form.querySelector('input[name="geoAreaDetails"]');
  if(areaDetails)areaDetails.required=!!(selectedRegions&&selectedRegions.checked);
  const workplaceType=form.querySelector('select[name="workplaceType"]');
  const workplaceOther=form.querySelector("[data-workplace-other]");
  if(workplaceOther){
    const showOther=!!(workplaceType&&workplaceType.value==="other");
    workplaceOther.hidden=!showOther;
    const otherInput=workplaceOther.querySelector('input[name="workplaceTypeOther"]');
    if(otherInput)otherInput.required=showOther;
  }
  const fieldsUsingAvailability=[...form.querySelectorAll("input[data-requires-draft]")];
  fieldsUsingAvailability.forEach(input=>{
    const has=!!String(draft[input.dataset.requiresDraft]||"").trim();
    input.disabled=!has;
    if(!has)input.checked=false;
  });
}
function syncSectorChoice(event){
  if(step!=="sector")return;
  const selected=form.querySelector('[name="sectorId"]');
  const custom=form.querySelector('[name="sectorOther"]');
  if(!selected||!custom)return;
  if(event.target===selected&&selected.value)custom.value="";
  if(event.target===custom&&custom.value.trim())selected.value="";
  selected.setCustomValidity("");
}
form.addEventListener("input",e=>{syncSectorChoice(e);clearRequiredGroupErrors();for(const el of inputs)if(el.type==="url")el.setCustomValidity("");capture();refresh()});
form.addEventListener("change",e=>{syncSectorChoice(e);clearRequiredGroupErrors();const anchor=form.querySelector('input[name="channelEmail"]');if(anchor)anchor.setCustomValidity("");const v=form.querySelector('input[name="visitFixed"]');if(v)v.setCustomValidity("");capture();refresh()});
refresh();
const submit=form.querySelector('button[type="submit"]');if(submit)submit.disabled=false;
function normalizeUrls(){
  for(const input of inputs){
    if(input.type!=="url")continue;
    input.setCustomValidity("");
    let entered=input.value.trim();
    if(!entered)continue;
    // Common omission: http//example.org or https//example.org
    entered=entered.replace(/^(https?)(\/\/)/i,"$1:$2");
    if(!/^[a-z][a-z0-9+.-]*:\/\//i.test(entered))entered="https://"+entered;
    try{
      const parsed=new URL(entered);
      if(!["https:","http:"].includes(parsed.protocol)||!parsed.hostname.includes(".")||parsed.username||parsed.password)
        throw new Error("unsafe_website_url");
      input.value=parsed.href;
    }catch{
      const messages={ru:"Укажи корректный адрес сайта, например https://example.com",de:"Bitte eine gültige Webadresse eingeben, zum Beispiel https://example.com",en:"Please enter a valid website address, for example https://example.com"};
      input.setCustomValidity(messages[document.documentElement.lang]||messages.en);
    }
  }
}
// Fallback link on informational steps: native navigation works without JS.
// When JS is available, capture the last contact preferences and validate them.
// The professional questionnaire is hidden from this active prototype until its redesign.
const nextLink=form.querySelector('a.welcome-mascot[role="button"]');
if(nextLink)nextLink.addEventListener("click",e=>{
  refresh();
  if(step==="channels"){
    const options=[...form.querySelectorAll('input[type="checkbox"][name^="channel"]')];
    const anchor=options[0];
    if(anchor){
      const m={de:"Bitte wähle mindestens einen Kontaktweg.",en:"Please choose at least one contact method.",ru:"Выбери хотя бы один способ связи."};
      anchor.setCustomValidity(options.some(x=>x.checked)?"":(m[document.documentElement.lang]||m.en));
    }
  }
  if(!form.reportValidity()){e.preventDefault();return;}
  capture();
  if(step==="matching"){
    e.preventDefault();
    // Route only the explicitly selected Beauty category to its own branch.
    // All other categories retain the existing development placeholder.
    if(draft.sectorId==="beauty"&&!String(draft.sectorOther||"").trim()){
      window.location.assign("../beauty-direction/");
      return;
    }
    const dialog=document.querySelector("[data-next-unavailable]");
    if(dialog&&typeof dialog.showModal==="function")dialog.showModal();
    else {
      const message={ru:"Следующий этап анкеты ещё готовится. Твои данные пока хранятся только в этой вкладке.",de:"Der nächste Teil wird noch vorbereitet. Deine Angaben bleiben vorerst nur in diesem Browser-Tab.",en:"The next section is still being prepared. Your answers remain in this browser tab only."};
      window.alert(message[document.documentElement.lang]||message.en);
    }
  }
});
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
  if(step==="sector"){
    const sector=form.querySelector('[name="sectorId"]');
    const other=form.querySelector('[name="sectorOther"]');
    const errors={ru:"Выбери сферу из списка или напиши свою.",de:"Wähle einen Bereich oder trage deinen eigenen ein.",en:"Choose an area or enter your own."};
    sector.setCustomValidity(sector.value||other.value.trim()?"":(errors[document.documentElement.lang]||errors.en));
  }
  if(step==="medical-role"){
    const choice=form.querySelector('input[name="medicalRole"]:checked');
    if(!choice){form.querySelector('input[name="medicalRole"]')?.reportValidity();return;}
    const previous=draft.medicalRole;
    if(previous&&previous!==choice.value){
      for(const name of ["medicalInjection","medicalDevice","medicalLaser","medicalSkin","medicalMinimallyInvasive","medicalSurgery","medicalOtherProcedure","podNail","podSkin","podIngrown","podRiskFoot","podProtection","podFullCare","podOtherProcedure"])delete draft[name];
      for(const name of Object.keys(draft))if(/^medicalOtherProcedure\d+$|^podOtherProcedure\d+$/.test(name))delete draft[name];
    }
  }
  if(step==="visit-details"){
    const first=form.querySelector('input[name="visitFixed"]');
    const other=form.querySelector('input[name="visitMobile"]');
    if(first&&other){
      const errors={ru:"Выбери, как ты работаешь: в кабинете или с выездом.",de:"Bitte wähle mindestens eine Art der Tätigkeit.",en:"Choose at least one way you see clients."};
      first.setCustomValidity(first.checked||other.checked?"":(errors[document.documentElement.lang]||errors.en));
    }
  }
  if(!form.reportValidity())return;
  if(!validateRequiredGroups())return;
  capture();
  if(step==="beauty-direction" && draft.beautyMedical===true){
    window.location.assign("../medical-role/");
    return;
  }
  if(step==="medical-role"){
    window.location.assign(draft.medicalRole==="podologist"?"../podology-services/":"../medical-services/");
    return;
  }
  if(step==="medical-services"||step==="podology-services"){
    window.location.assign("../visit-details/");return;
  }
  const at=steps.indexOf(step);
  if(at>=0&&at<steps.length-1)window.location.assign("../"+steps[at+1]+"/");
  else{
    const dialog=document.querySelector("[data-next-unavailable]");
    if(dialog&&typeof dialog.showModal==="function")dialog.showModal();
  }
});
})();