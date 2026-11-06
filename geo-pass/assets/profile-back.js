(()=>{"use strict";
const query=(new URLSearchParams(window.location.search).get("q")||"").trim();if(!query)return;
const lang=document.documentElement.lang||"de",a=document.querySelector(".profile-grid a.btn.secondary");if(!a)return;
a.textContent={de:"Zurück zu den Suchergebnissen",en:"Back to search results",ru:"Назад к результатам поиска"}[lang]||"Back to search results";
a.href="../../../"+lang+"/search/results/?q="+encodeURIComponent(query);
a.removeAttribute("target");
})();