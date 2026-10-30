/* Abbay pages' language switch, for pages without clips (the privacy policy; the landing page's
   abbay.js does the same and more). Shares the stored choice ("abbay.lang") with the landing page.
   The page's titles come from data-title-en / data-title-pt on any element. */
(function () {
  'use strict';

  var STORAGE_KEY = 'abbay.lang';
  var root = document.documentElement;
  var titles = document.querySelector('[data-title-en]');

  function storedLang() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }

  function browserLang() {
    var list = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'en'];
    for (var i = 0; i < list.length; i++) {
      var code = String(list[i]).toLowerCase();
      if (code.indexOf('pt') === 0) return 'pt';
      if (code.indexOf('en') === 0) return 'en';
    }
    return 'en';
  }

  function applyLang(lang, remember) {
    if (lang === 'pt') root.setAttribute('data-lang', 'pt'); else root.removeAttribute('data-lang');
    root.lang = lang === 'pt' ? 'pt-BR' : 'en';
    if (titles) document.title = titles.getAttribute('data-title-' + lang) || document.title;
    var buttons = document.querySelectorAll('[data-set-lang]');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute('aria-pressed', buttons[i].getAttribute('data-set-lang') === lang ? 'true' : 'false');
    }
    if (remember) {
      try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* private mode: not remembered */ }
    }
  }

  var lang = storedLang();
  if (lang !== 'en' && lang !== 'pt') lang = browserLang();
  applyLang(lang, false);

  document.addEventListener('click', function (event) {
    var button = event.target.closest('[data-set-lang]');
    if (button) applyLang(button.getAttribute('data-set-lang'), true);
  });
})();
