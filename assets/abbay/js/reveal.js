/* Scroll reveal for Abbay pages without clips (the Android page; abbay.js does the same on the iPhone
   page). Sections with .reveal fade in as they scroll into view; nothing moves with Reduce Motion. */
(function () {
  'use strict';

  var root = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var revealed = document.querySelectorAll('.reveal');

  function revealAll() {
    for (var i = 0; i < revealed.length; i++) revealed[i].classList.add('is-visible');
  }

  if (!('IntersectionObserver' in window) || reduceMotion.matches) return;

  root.classList.add('js-reveal');
  var revealer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
  for (var j = 0; j < revealed.length; j++) revealer.observe(revealed[j]);

  var onMotionChange = function () { if (reduceMotion.matches) revealAll(); };
  if (reduceMotion.addEventListener) reduceMotion.addEventListener('change', onMotionChange);
  else if (reduceMotion.addListener) reduceMotion.addListener(onMotionChange);
})();
