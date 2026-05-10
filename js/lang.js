/* ============================================
   Mystic China - Translation & Explanation
   ============================================ */
(function() {
  'use strict';

  var zhOn = false;
  var explainOn = false;

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
    savePrefs();
    applyState();
  }

  function insertToolbar() {
    var post = document.querySelector('.post-container');
    if (!post) return;
    var existing = document.querySelector('.lang-toolbar');
    if (existing) return;
    var toolbar = document.createElement('div');
    toolbar.className = 'lang-toolbar';
    toolbar.innerHTML = '<button id="btn-zh" class="' + (zhOn ? 'active' : '') + '">\u4e2d\u6587</button><button id="btn-explain" class="' + (explainOn ? 'active' : '') + '">\u89e3\u91ca</button>';
    var header = post.querySelector('.post-header');
    if (header) {
      header.parentNode.insertBefore(toolbar, header.nextSibling);
    } else {
      post.insertBefore(toolbar, post.firstChild);
    }
    document.getElementById('btn-zh').addEventListener('click', toggleZh);
    document.getElementById('btn-explain').addEventListener('click', toggleExplain);
  }

  function initExplainPopups() {
    var terms = document.querySelectorAll('.explain-term');
    terms.forEach(function(term) {
      term.addEventListener('mouseenter', function() {
        if (explainOn) return;
        var pop = term.querySelector('.explain-pop');
        if (pop) pop.classList.add('visible');
      });
      term.addEventListener('mouseleave', function() {
        var pop = term.querySelector('.explain-pop');
        if (pop) pop.classList.remove('visible');
      });
      term.addEventListener('click', function(e) {
        if (!explainOn) {
          e.preventDefault();
          var pop = term.querySelector('.explain-pop');
          if (pop) pop.classList.toggle('visible');
        }
      });
    });
  }

  getPrefs();
  document.addEventListener('DOMContentLoaded', function() {
    insertToolbar();
    applyState();
    initExplainPopups();
  });
})();
