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

  function Clip(video) {
    this.video = video;
    this.base = video.getAttribute('data-base');
    // The build's version, so a redeployed clip isn't served from a browser's cache.
    var version = video.getAttribute('data-version');
    this.query = version ? '?v=' + version : '';
    this.eager = video.getAttribute('data-eager') === 'true';
    this.loadedLang = null;
    this.visible = false;
    this.userPaused = false;
    this.toggle = video.closest('.phone').querySelector('.phone__toggle');
    var self = this;
    if (this.toggle) {
      this.toggle.hidden = false;
      this.toggle.addEventListener('click', function () {
        if (self.video.paused) {
          self.userPaused = false;
          self.load();
          self.play();
        } else {
          self.userPaused = true;
          self.video.pause();
        }
      });
    }
    video.addEventListener('play', function () { self.updateToggle(); });
    video.addEventListener('pause', function () { self.updateToggle(); });
    this.updateToggle();
  }

  Clip.prototype.wantsAutoplay = function () {
    return !reduceMotion.matches && !this.userPaused;
  };

  Clip.prototype.load = function () {
    if (this.loadedLang === lang) return;
    var v = this.video;
    var wasPlaying = !v.paused;
    while (v.firstChild) v.removeChild(v.firstChild);
    var source = document.createElement('source');
    source.src = this.base + '-' + lang + '.mp4' + this.query;
    source.type = 'video/mp4';
    v.appendChild(source);
    v.poster = this.base + '-' + lang + '.png' + this.query;
    v.preload = 'metadata';
    v.load();
    this.loadedLang = lang;
    if (wasPlaying) this.play();
  };

  Clip.prototype.play = function () {
    var promise = this.video.play();
    if (promise && promise.catch) promise.catch(function () { /* autoplay refused: poster stays */ });
  };

  Clip.prototype.setLang = function () {
    var v = this.video;
    v.setAttribute('aria-label', v.getAttribute('data-label-' + lang) || v.getAttribute('aria-label'));
    if (this.loadedLang) {
      this.load();
    } else {
      v.poster = this.base + '-' + lang + '.png' + this.query;
    }
    this.updateToggle();
  };

  Clip.prototype.updateToggle = function () {
    if (!this.toggle) return;
    var paused = this.video.paused;
    this.toggle.setAttribute('data-state', paused ? 'paused' : 'playing');
    this.toggle.setAttribute('aria-label', this.toggle.getAttribute('data-label-' + (paused ? 'play' : 'pause') + '-' + lang));
  };

  Clip.prototype.onVisibility = function (visible) {
    this.visible = visible;
    if (visible) {
      this.load();
      if (this.wantsAutoplay()) this.play();
    } else if (!this.video.paused) {
      this.video.pause();
    }
  };

  var clips = [];
  var videos = document.querySelectorAll('video.js-video');
  for (var i = 0; i < videos.length; i++) clips.push(new Clip(videos[i]));

  applyLang(lang, false);

  document.addEventListener('click', function (event) {
    var button = event.target.closest('[data-set-lang]');
    if (button) applyLang(button.getAttribute('data-set-lang'), true);
    var placeholder = event.target.closest('a[data-placeholder="true"]');
    if (placeholder) event.preventDefault(); // TODO: remove with the App Store placeholder
  });

  if (hasIO) {
    // Fetch a clip shortly before it scrolls in; play only while it is on screen.
    var preload = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        clips.forEach(function (clip) { if (clip.video === entry.target) clip.load(); });
        preload.unobserve(entry.target);
      });
    }, { rootMargin: '300px 0px' });
    var playback = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        clips.forEach(function (clip) { if (clip.video === entry.target) clip.onVisibility(entry.isIntersecting); });
      });
    }, { threshold: 0.25 });
    clips.forEach(function (clip) {
      if (clip.eager) clip.load();
      preload.observe(clip.video);
      playback.observe(clip.video);
    });
  } else {
    clips.forEach(function (clip) { clip.load(); if (clip.wantsAutoplay()) clip.play(); });
  }

  // Pause everything when the tab is hidden; resume the visible ones when it comes back.
  document.addEventListener('visibilitychange', function () {
    clips.forEach(function (clip) {
      if (document.hidden) clip.video.pause();
      else if (clip.visible && clip.wantsAutoplay()) clip.play();
    });
  });

  // Turning Reduce Motion on stops the clips; turning it off lets the visible ones play.
  var onMotionChange = function () {
    clips.forEach(function (clip) {
      if (reduceMotion.matches) clip.video.pause();
      else if (clip.visible && !clip.userPaused) clip.play();
    });
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
