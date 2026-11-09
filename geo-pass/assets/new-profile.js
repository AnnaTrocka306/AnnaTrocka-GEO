/* Returning to the welcome page after publishing starts a fresh fictional
 * questionnaire in this tab. Unfinished questionnaires are never reset here.
 * This script makes no API calls and consumes no AI tokens. */
(()=>{
  'use strict';
  try {
    const key='octopus-geo-pass-ai-draft-v1';
    const saved=JSON.parse(sessionStorage.getItem(key)||'null');
    if(saved?.result?.publicationAccepted?.state!=='publishing')return;
    sessionStorage.removeItem('octopus-geo-pass-draft-v1');
    sessionStorage.removeItem('octopus-geo-pass-ai-draft-v1');
    sessionStorage.removeItem('octopus-geo-pass-ai-pending-v1');
  } catch(_){ /* Ignore unavailable private browsing storage. */ }
})();