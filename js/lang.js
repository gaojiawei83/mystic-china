/* ============================================
   I Ching Wisdom - Translation & Explanation
   Click popups + mobile support + explain mode
   ============================================ */
(function() {
  'use strict';

  var zhOn = false;
  var explainOn = false;
  var activePop = null;
  var backdrop = null;

  function getPrefs() {
    try {
      zhOn = localStorage.getItem('mc-zh') === '1';
      explainOn = localStorage.getItem('mc-explain') === '1';
    } catch(e) {}
  }

  function savePrefs() {
    try {
      localStorage.setItem('mc-zh', zhOn ? '1' : '0');
      localStorage.setItem('mc-explain', explainOn ? '1' : '0');
    } catch(e) {}
  }

  function applyState() {
    var zhEls = document.querySelectorAll('.zh-text');
    var exEls = document.querySelectorAll('.explain-inline');
    zhEls.forEach(function(el) { el.classList.toggle('visible', zhOn); });
    exEls.forEach(function(el) { el.classList.toggle('visible', explainOn); });
    var btnZh = document.getElementById('btn-zh');
    var btnEx = document.getElementById('btn-explain');
    if (btnZh) btnZh.classList.toggle('active', zhOn);
    if (btnEx) btnEx.classList.toggle('active', explainOn);
  }

  function toggleZh() {
    zhOn = !zhOn;
    savePrefs();
    applyState();
  }

  function toggleExplain() {
    explainOn = !explainOn;
    if (explainOn) closeAllPopups();
    savePrefs();
    applyState();
  }

  function closeAllPopups() {
    if (activePop) activePop.style.display = 'none';
    activePop = null;
    if (backdrop) backdrop.style.display = 'none';
    document.querySelectorAll('.explain-term.active').forEach(function(t) { t.classList.remove('active'); });
  }

  function createBackdrop() {
    if (backdrop) return;
    backdrop = document.createElement('div');
    backdrop.className = 'pop-backdrop';
    backdrop.addEventListener('click', closeAllPopups);
    document.body.appendChild(backdrop);
  }

  function positionPopup(pop, term) {
    var rect = term.getBoundingClientRect();
    var pw = pop.offsetWidth || 320;
    var ph = pop.offsetHeight || 100;
    var left = rect.left + rect.width / 2 - pw / 2;
    var top = rect.bottom + 8;
    if (left < 10) left = 10;
    if (left + pw > window.innerWidth - 10) left = window.innerWidth - pw - 10;
    if (top + ph > window.innerHeight - 20) top = rect.top - ph - 8;
    if (top < 10) top = 10;
    pop.style.left = left + 'px';
    pop.style.top = top + 'px';
  }

  function showPopup(term) {
    var pop = term.querySelector('.explain-pop');
    if (!pop) return;
    if (activePop === pop) { closeAllPopups(); return; }
    closeAllPopups();
    createBackdrop();
    backdrop.style.display = 'block';
    pop.style.display = 'block';
    positionPopup(pop, term);
    activePop = pop;
    term.classList.add('active');
  }

  function addCloseButton(pop) {
    if (pop.querySelector('.pop-close')) return;
    var btn = document.createElement('button');
    btn.className = 'pop-close';
    btn.innerHTML = '&times;';
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      closeAllPopups();
    });
    pop.appendChild(btn);
  }

  function insertToolbar() {
    var post = document.querySelector('.post-container');
    if (!post) return;
    if (document.querySelector('.lang-toolbar')) return;
    var toolbar = document.createElement('div');
    toolbar.className = 'lang-toolbar';
    toolbar.innerHTML = '<button id="btn-zh" class="' + (zhOn ? 'active' : '') + '"><span>中/EN</span> Show Chinese</button><button id="btn-explain" class="' + (explainOn ? 'active' : '') + '"><span>i</span> Explain Terms</button>';
    var header = post.querySelector('.post-header');
    if (header) {
      header.parentNode.insertBefore(toolbar, header.nextSibling);
    } else {
      post.insertBefore(toolbar, post.firstChild);
    }
    document.getElementById('btn-zh').addEventListener('click', toggleZh);
    document.getElementById('btn-explain').addEventListener('click', toggleExplain);
  }

  function initTerms() {
    var terms = document.querySelectorAll('.explain-term');
    terms.forEach(function(term) {
      var pop = term.querySelector('.explain-pop');
      if (pop) addCloseButton(pop);
      term.addEventListener('click', function(e) {
        if (explainOn) return;
        e.preventDefault();
        e.stopPropagation();
        showPopup(term);
      });
    });
  }

  getPrefs();
  document.addEventListener('DOMContentLoaded', function() {
    insertToolbar();
    applyState();
    initTerms();
  });
  window.addEventListener('resize', function() {
    if (activePop) {
      var term = document.querySelector('.explain-term.active');
      if (term) positionPopup(activePop, term);
    }
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeAllPopups();
  });
})();
