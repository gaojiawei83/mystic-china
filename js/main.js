/* ============================================
   Mystic China - Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initScrollAnimations();
  initBackToTop();
  initSmoothScroll();
  initElementHover();
  initQuoteRotator();
  initActiveNavOnScroll();
});

/* ---------- Mobile Navigation ---------- */
function initNavigation() {
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const links = navLinks.querySelectorAll('a');

  if (toggle) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      navLinks.classList.toggle('show');
    });
  }

  links.forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      navLinks.classList.remove('show');
    });
  });

  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

/* ---------- Active Nav on Scroll ---------- */
function initActiveNavOnScroll() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });

    if (!current) {
      navLinks[0].classList.add('active');
    }
  });
}

/* ---------- Scroll Animations (Intersection Observer) ---------- */
function initScrollAnimations() {
  const fadeElements = document.querySelectorAll(
    '.iching-card, .fengshui-card, .bagua-item, .element-circle, .section-header'
  );

  fadeElements.forEach(el => {
    el.classList.add('fade-in');
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  fadeElements.forEach(el => observer.observe(el));
}

/* ---------- Back to Top Button ---------- */
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ---------- Smooth Scroll for Anchor Links ---------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* ---------- Element Circle Hover Effect ---------- */
function initElementHover() {
  const circles = document.querySelectorAll('.element-circle');

  circles.forEach(circle => {
    circle.addEventListener('mouseenter', () => {
      circles.forEach(c => {
        if (c !== circle) c.style.opacity = '0.5';
      });
      circle.style.transform = 'scale(1.2)';
      circle.style.zIndex = '2';
    });

    circle.addEventListener('mouseleave', () => {
      circles.forEach(c => {
        c.style.opacity = '1';
        c.style.transform = 'scale(1)';
        c.style.zIndex = '1';
      });
    });
  });
}

/* ---------- Quote Rotator ---------- */
function initQuoteRotator() {
  const quotes = [
    {
      text: 'The Tao that can be told is not the eternal Tao.',
      author: '— Lao Tzu, Tao Te Ching'
    },
    {
      text: 'Heaven is high, the earth is deep. The wise examine themselves.',
      author: '— I Ching (Book of Changes)'
    },
    {
      text: 'A journey of a thousand miles begins with a single step.',
      author: '— Lao Tzu'
    },
    {
      text: 'Knowing others is intelligence; knowing yourself is true wisdom.',
      author: '— Lao Tzu'
    },
    {
      text: 'When the wind of change blows, some build walls and others build windmills.',
      author: '— Chinese Proverb'
    }
  ];

  const quoteText = document.querySelector('.quote-text');
  const quoteAuthor = document.querySelector('.quote-author');

  if (!quoteText || !quoteAuthor) return;

  let index = 0;

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

  quoteText.style.transition = 'opacity 0.4s ease';
  quoteAuthor.style.transition = 'opacity 0.4s ease';

  showQuote(0);

  setInterval(() => {
    index = (index + 1) % quotes.length;
    showQuote(index);
  }, 6000);
}

/* ---------- Parallax Effect on Hero ---------- */
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  const scrolled = window.scrollY;
  hero.style.backgroundPositionY = scrolled * 0.4 + 'px';
});

/* ---------- Year in Footer ---------- */
const yearSpan = document.querySelector('.current-year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
