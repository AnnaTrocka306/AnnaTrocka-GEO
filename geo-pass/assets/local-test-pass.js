/* Octopus local-only GEO Pass publishing simulator.
 * Only intentionally selected public snapshot fields are stored.
 * Not a server, not a real public record, never transmitted by this script.
 */
(()=>{"use strict";
const KEY="octopus-geo-pass-local-test-v1";
const ID="browser-demo-pass";
const clean=(v,max=900)=>typeof v==="string"?v.trim().replace(/\s+/g," ").slice(0,max):"";
const get=()=>{
  try{
    const p=JSON.parse(localStorage.getItem(KEY)||"null");
    if(!p||p.localDemo!==true||p.id!==ID||!clean(p.name)||!clean(p.h2)||!clean(p.description))return null;
    return p;
  }catch{return null;}
};
function save(snapshot){
  if(!snapshot||typeof snapshot!=="object")throw Error("missing_snapshot");
  const name=clean(snapshot.name,160),profession=clean(snapshot.profession,150),
  h1=clean(snapshot.h1,330),h2=clean(snapshot.h2,350),description=clean(snapshot.description,900);
  if(!name||!profession||h1!==name+" — "+profession||!h2||!description)throw Error("incomplete_public_snapshot");
  const contacts={};
  for(const type of ["email","phone","whatsapp","website","linkedin","instagram","youtube","tiktok"]){
    if(snapshot.contacts&&Object.hasOwn(snapshot.contacts,type)){
      const v=clean(snapshot.contacts[type],350);
      if(v){
        if(["website","linkedin","instagram","youtube","tiktok"].includes(type)){
          try{const url=new URL(v);if(!["https:","http:"].includes(url.protocol)||!url.hostname.includes("."))continue;contacts[type]=url.href;}catch{}
        }else contacts[type]=v;
      }
    }
  }
  const record={
    id:ID,localDemo:true,published:false,createdAt:new Date().toISOString(),
    name,profession:{ru:profession,de:profession,en:profession},
    h1,h2,description,publicContacts:contacts,
    country:clean(snapshot.country,120),locality:clean(snapshot.locality,120),
    territory:Array.isArray(snapshot.territory)?snapshot.territory.map(x=>clean(x,120)).filter(Boolean).slice(0,10):[],
    languages:Array.isArray(snapshot.languages)?snapshot.languages.map(x=>clean(x,50)).filter(Boolean).slice(0,12):[],
    excluded: snapshot.includeExclusion===true?clean(snapshot.excluded,500):"",
    locale:["ru","de","en"].includes(snapshot.locale)?snapshot.locale:"ru"
  };
  // The original questionnaire and private notification contacts are never copied here.
  localStorage.setItem(KEY,JSON.stringify(record));
  if(!get())throw Error("browser_storage_unavailable");
  return record;
}
function remove(){try{localStorage.removeItem(KEY);return !get()}catch{return false}}
function countryCode(value){
  const s=clean(value).toLocaleLowerCase();
  const m={"германия":"DE","deutschland":"DE","germany":"DE","польша":"PL","polen":"PL","poland":"PL","австрия":"AT","österreich":"AT","austria":"AT","нидерланды":"NL","niederlande":"NL","netherlands":"NL"};
  return m[s]||value;
}
function asRegistryEntry(){
  const p=get();
  if(!p)return null;
  return {
    id:ID,name:p.name,profession:p.profession,country:countryCode(p.country),
    locality:p.locality,district:"",region:"",localDemo:true,published:false
  };
}
window.OctopusLocalPass=Object.freeze({get,save,remove,asRegistryEntry,ID});
})();