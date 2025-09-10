(function() {
  function setActiveNav() {
    var path = location.pathname.replace(/\\+/g, '/');
    var page = path.split('/').pop() || 'index.html';
    var links = document.querySelectorAll('.nav a');
    links.forEach(function(link) {
      var href = link.getAttribute('href');
      var normalized = href.replace(/\\+/g, '/');
      var isActive = (page === '' && normalized === 'index.html') || normalized === page;
      if (isActive) {
        link.classList.add('active');
      }
    });
  }

  function smoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        var id = this.getAttribute('href').slice(1);
        var el = document.getElementById(id);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  function revealOnScroll() {
    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var elements = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
    if (prefersReduced) {
      elements.forEach(function(el) { el.classList.add('is-in'); });
      return;
    }
    if (!('IntersectionObserver' in window)) {
      elements.forEach(function(el) { el.classList.add('is-in'); });
      return;
    }
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.2 });

    elements.forEach(function(el, i) {
      el.style.transitionDelay = (i % 6) * 40 + 'ms';
      observer.observe(el);
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    setActiveNav();
    smoothAnchors();
    revealOnScroll();
  });
})();
