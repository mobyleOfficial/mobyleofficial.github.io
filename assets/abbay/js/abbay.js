/* Abbay landing page: language switch, lazy looping clips, scroll reveal.
   No dependencies, no network calls besides the page's own clips, nothing sent anywhere.
   The only thing stored is the chosen language, in this browser's localStorage. */
(function () {
  'use strict';

  var STORAGE_KEY = 'abbay.lang';
  var root = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var hasIO = 'IntersectionObserver' in window;

  var TEXT = {
    en: {
      title: 'Abbay - free public-domain audiobooks for iPhone - Mobyle',
      description: 'Abbay is a free audiobook player for iPhone. Listen to thousands of public-domain classics from LibriVox, offline, with no account, no ads and no tracking.'
    },
    pt: {
      title: 'Abbay - audiolivros grátis de domínio público para iPhone - Mobyle',
      description: 'O Abbay é um player de audiolivros grátis para iPhone. Ouça milhares de clássicos de domínio público do LibriVox, offline, sem conta, sem anúncios e sem rastreamento.'
    }
  };

  // ---------- Language ----------

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

  var lang = storedLang();
  if (lang !== 'en' && lang !== 'pt') lang = browserLang();

  function applyLang(next, remember) {
    lang = next;
    if (lang === 'pt') root.setAttribute('data-lang', 'pt'); else root.removeAttribute('data-lang');
    root.lang = lang === 'pt' ? 'pt-BR' : 'en';
    document.title = TEXT[lang].title;
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', TEXT[lang].description);

    var buttons = document.querySelectorAll('[data-set-lang]');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute('aria-pressed', buttons[i].getAttribute('data-set-lang') === lang ? 'true' : 'false');
    }
    clips.forEach(function (clip) { clip.setLang(); });
    if (remember) {
      try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* private mode: not remembered */ }
    }
  }

  // ---------- Clips ----------
  // Each clip is an animated GIF in an <img>. "Paused" (by the button, off screen, a hidden tab or
  // Reduce Motion) shows the clip's still poster instead, since a GIF can't be paused.

  function Clip(img) {
    this.img = img;
    this.base = img.getAttribute('data-base');
    // The build's version, so a redeployed clip isn't served from a browser's cache.
    var version = img.getAttribute('data-version');
    this.query = version ? '?v=' + version : '';
    this.eager = img.getAttribute('data-eager') === 'true';
    this.visible = false;
    this.userPaused = false;
    this.toggle = img.closest('.phone').querySelector('.phone__toggle');
    var self = this;
    if (this.toggle) {
      this.toggle.hidden = false;
      this.toggle.addEventListener('click', function () {
        self.userPaused = !self.userPaused;
        self.render();
      });
    }
  }

  Clip.prototype.url = function (ext) {
    return this.base + '-' + lang + '.' + ext + this.query;
  };

  Clip.prototype.isPlaying = function () {
    return this.visible && !document.hidden && !reduceMotion.matches && !this.userPaused;
  };

  /** Fetches the current language's GIF ahead of time, so it animates at once when shown. */
  Clip.prototype.prefetch = function () {
    if (reduceMotion.matches) return;
    var image = new Image();
    image.src = this.url('gif');
  };

  Clip.prototype.render = function () {
    var src = this.url(this.isPlaying() ? 'gif' : 'png');
    if (this.img.getAttribute('src') !== src) this.img.setAttribute('src', src);
    this.img.alt = this.img.getAttribute('data-label-' + lang) || this.img.alt;
    if (this.toggle) {
      var paused = !this.isPlaying();
      this.toggle.setAttribute('data-state', paused ? 'paused' : 'playing');
      this.toggle.setAttribute('aria-label', this.toggle.getAttribute('data-label-' + (paused ? 'play' : 'pause') + '-' + lang));
    }
  };

  Clip.prototype.setLang = function () {
    this.render();
  };

  Clip.prototype.onVisibility = function (visible) {
    this.visible = visible;
    this.render();
  };

  var clips = [];
  var images = document.querySelectorAll('img.js-clip');
  for (var i = 0; i < images.length; i++) clips.push(new Clip(images[i]));

  applyLang(lang, false);

  document.addEventListener('click', function (event) {
    var button = event.target.closest('[data-set-lang]');
    if (button) applyLang(button.getAttribute('data-set-lang'), true);
    var placeholder = event.target.closest('a[data-placeholder="true"]');
    if (placeholder) event.preventDefault(); // TODO: remove with the App Store placeholder
  });

  if (hasIO) {
    // Fetch a clip's GIF shortly before it scrolls in; animate it only while it is on screen.
    var preload = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        clips.forEach(function (clip) { if (clip.img === entry.target) clip.prefetch(); });
      });
    }, { rootMargin: '300px 0px' });
    var playback = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        clips.forEach(function (clip) { if (clip.img === entry.target) clip.onVisibility(entry.isIntersecting); });
      });
    }, { threshold: 0.25 });
    clips.forEach(function (clip) {
      if (clip.eager) clip.prefetch();
      preload.observe(clip.img);
      playback.observe(clip.img);
    });
  } else {
    clips.forEach(function (clip) { clip.onVisibility(true); });
  }

  // A hidden tab shows the posters; the visible clips animate again when it comes back.
  document.addEventListener('visibilitychange', function () {
    clips.forEach(function (clip) { clip.render(); });
  });

  // Turning Reduce Motion on stops the clips (posters); turning it off lets the visible ones animate.
  var onMotionChange = function () {
    clips.forEach(function (clip) { clip.render(); });
    if (reduceMotion.matches) revealAll();
  };
  if (reduceMotion.addEventListener) reduceMotion.addEventListener('change', onMotionChange);
  else if (reduceMotion.addListener) reduceMotion.addListener(onMotionChange);

  // ---------- Scroll reveal ----------

  var revealed = document.querySelectorAll('.reveal');
  function revealAll() {
    for (var j = 0; j < revealed.length; j++) revealed[j].classList.add('is-visible');
  }
  if (hasIO && !reduceMotion.matches) {
    root.classList.add('js-reveal');
    var revealer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    for (var k = 0; k < revealed.length; k++) revealer.observe(revealed[k]);
  }
})();
