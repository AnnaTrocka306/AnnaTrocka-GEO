/* Octopus 2026-11-20: reveal floating CTA only after the "platform" section enters the viewport. */
(function(){
  function boot(){
    var trigger=document.getElementById('plattform');
    var cta=document.querySelector('.octo-float.oh-home-cta-gated');
    if(!trigger || !cta)return;
    var scheduled=false;
    function update(){
      scheduled=false;
      var start=trigger.getBoundingClientRect().top <= window.innerHeight*0.72;
      cta.classList.toggle('is-visible',start);
      cta.setAttribute('aria-hidden',start?'false':'true');
      if(start)cta.removeAttribute('tabindex');else cta.setAttribute('tabindex','-1');
    }
    function onScroll(){
      if(scheduled)return;
      scheduled=true;
      window.requestAnimationFrame(update);
    }
    update();
    window.addEventListener('scroll',onScroll,{passive:true});
    window.addEventListener('resize',onScroll,{passive:true});
    window.addEventListener('pageshow',update);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);
  else boot();
})();
