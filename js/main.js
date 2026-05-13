/* ============================================
   I Ching Wisdom - Premium JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initParallaxHero();
  initScrollAnimations();
  initBackToTop();
  initSmoothScroll();
  initElementHover();
  initQuoteRotator();
  initActiveNavOnScroll();
  initYearFooter();
  initTOC();
  initCategoryFilter();
});

/* ---------- Mobile Navigation ---------- */
function initNavigation() {
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (!toggle || !navLinks) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    navLinks.classList.toggle('show');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      navLinks.classList.remove('show');
    });
  });

  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });
}

/* ---------- Active Nav on Scroll ---------- */
function initActiveNavOnScroll() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  if (!sections.length) return;

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 120) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) link.classList.add('active');
    });
    if (!current && navLinks.length) navLinks[0].classList.add('active');
  });
}

/* ---------- Mouse Parallax Hero ---------- */
function initParallaxHero() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  const content = hero.querySelector('.hero-content');
  if (!content) return;

  window.addEventListener('mousemove', e => {
    const x = (e.clientX - window.innerWidth / 2) / window.innerWidth;
    const y = (e.clientY - window.innerHeight / 2) / window.innerHeight;
    content.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
    hero.style.setProperty('--mx', x * 40 + 'px');
    hero.style.setProperty('--my', y * 40 + 'px');
  });

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    content.style.opacity = Math.max(0, 1 - scrolled / 600);
    content.style.transform = content.style.transform || '';
  });
}

/* ---------- Scroll Animations ---------- */
function initScrollAnimations() {
  const fadeElements = document.querySelectorAll(
    '.iching-card, .fengshui-card, .bagua-item, .element-circle, .section-header, .blog-card'
  );

  fadeElements.forEach((el, i) => {
    el.classList.add('fade-in');
    el.style.transitionDelay = (i % 4) * 0.1 + 's';
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  fadeElements.forEach(el => observer.observe(el));
}

/* ---------- Back to Top ---------- */
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) btn.classList.add('show');
    else btn.classList.remove('show');
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ---------- Smooth Scroll ---------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

/* ---------- Element Circle Hover ---------- */
function initElementHover() {
  const circles = document.querySelectorAll('.element-circle');
  circles.forEach(circle => {
    circle.addEventListener('mouseenter', () => {
      circles.forEach(c => { if (c !== circle) c.style.opacity = '0.45'; });
      circle.style.transform = 'scale(1.2)';
      circle.style.zIndex = '2';
    });
    circle.addEventListener('mouseleave', () => {
      circles.forEach(c => { c.style.opacity = '1'; c.style.transform = 'scale(1)'; c.style.zIndex = '1'; });
    });
  });
}

/* ---------- Quote Rotator ---------- */
function initQuoteRotator() {
  const quotes = [
    { text: 'The Tao that can be told is not the eternal Tao.', author: '— Lao Tzu, Tao Te Ching' },
    { text: 'Heaven is high, the earth is deep. The wise examine themselves.', author: '— I Ching (Book of Changes)' },
    { text: 'A journey of a thousand miles begins with a single step.', author: '— Lao Tzu' },
    { text: 'Knowing others is intelligence; knowing yourself is true wisdom.', author: '— Lao Tzu' },
    { text: 'When the wind of change blows, some build walls and others build windmills.', author: '— Chinese Proverb' }
  ];

  const quoteText = document.querySelector('.quote-text');
  const quoteAuthor = document.querySelector('.quote-author');
  if (!quoteText || !quoteAuthor) return;

  let index = 0;
  quoteText.style.transition = 'opacity 0.5s ease';
  quoteAuthor.style.transition = 'opacity 0.5s ease';

  function showQuote(i) {
    quoteText.style.opacity = '0';
    quoteAuthor.style.opacity = '0';
    setTimeout(() => {
      quoteText.textContent = quotes[i].text;
      quoteAuthor.textContent = quotes[i].author;
      quoteText.style.opacity = '1';
      quoteAuthor.style.opacity = '1';
    }, 400);
  }

  showQuote(0);
  setInterval(() => { index = (index + 1) % quotes.length; showQuote(index); }, 6000);
}

/* ---------- Footer Year ---------- */
function initYearFooter() {
  const span = document.querySelector('.current-year');
  if (span) span.textContent = new Date().getFullYear();
}

/* ---------- Table of Contents ---------- */
function initTOC() {
  var content = document.querySelector('.post-content');
  if (!content) return;

  var headings = content.querySelectorAll('h2');
  if (headings.length < 2) return;

  var sidebar = document.createElement('div');
  sidebar.className = 'toc-sidebar';

  var toggle = document.createElement('button');
  toggle.className = 'toc-toggle';
  toggle.setAttribute('aria-label', 'Toggle table of contents');
  toggle.innerHTML = '◀';
  sidebar.appendChild(toggle);

  var panel = document.createElement('div');
  panel.className = 'toc-panel';

  var title = document.createElement('div');
  title.className = 'toc-title';
  title.textContent = '目录';
  panel.appendChild(title);

  var list = document.createElement('ul');
  list.className = 'toc-list';

  headings.forEach(function(h, i) {
    var id = 'toc-heading-' + i;
    h.id = id;

    var li = document.createElement('li');
    var a = document.createElement('a');
    a.href = '#' + id;
    a.textContent = h.textContent;
    li.appendChild(a);
    list.appendChild(li);
  });

  panel.appendChild(list);
  sidebar.appendChild(panel);
  document.body.appendChild(sidebar);

  var tocLinks = list.querySelectorAll('a');
  var isOpen = true;

  toggle.addEventListener('click', function() {
    isOpen = !isOpen;
    if (isOpen) {
      sidebar.classList.remove('collapsed');
      toggle.innerHTML = '◀';
    } else {
      sidebar.classList.add('collapsed');
      toggle.innerHTML = '▶';
    }
  });

  tocLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var target = document.getElementById(link.getAttribute('href').substring(1));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        tocLinks.forEach(function(link) {
          link.classList.remove('active');
        });
        var activeLink = list.querySelector('a[href="#' + entry.target.id + '"]');
        if (activeLink) activeLink.classList.add('active');
      }
    });
  }, { rootMargin: '-80px 0px -70% 0px', threshold: 0 });

  headings.forEach(function(h) { observer.observe(h); });
}

/* ---------- Blog Category Filter ---------- */
function initCategoryFilter() {
  var filterBar = document.getElementById('category-filter');
  if (!filterBar) return;

  var articles = document.querySelectorAll('.blog-list article');
  if (!articles.length) return;

  var filterTags = filterBar.querySelectorAll('[data-filter]:not(.cat-all)');
  var allTag = filterBar.querySelector('.cat-all');

  filterTags.forEach(function(tag) {
    tag.addEventListener('click', function() {
      var filter = this.getAttribute('data-filter');

      filterTags.forEach(function(t) { t.classList.remove('active'); });
      if (allTag) allTag.classList.remove('active');
      this.classList.add('active');

      articles.forEach(function(article) {
        var category = article.querySelector('.list-category');
        var catText = category ? category.textContent.trim() : '';
        if (catText === filter) {
          article.classList.remove('filtered-out');
        } else {
          article.classList.add('filtered-out');
        }
      });
    });
  });

  if (allTag) {
    allTag.addEventListener('click', function() {
      this.classList.add('active');
      filterTags.forEach(function(t) { t.classList.remove('active'); });
      articles.forEach(function(article) {
        article.classList.remove('filtered-out');
      });
    });
  }
}
