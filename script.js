// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close mobile nav after clicking a link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Scroll cue jumps to the career graph
document.getElementById('scrollCue').addEventListener('click', () => {
  document.getElementById('graph').scrollIntoView({ behavior: 'smooth' });
});

// Career graph nodes are clickable / keyboard-activatable
document.querySelectorAll('.graph-node').forEach(node => {
  const targetId = node.getAttribute('data-target');
  const go = () => {
    const target = document.getElementById(targetId);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
  node.addEventListener('click', go);
  node.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      go();
    }
  });
});

// Highlight active nav link based on scroll position
const sections = document.querySelectorAll('main section');
const navAnchors = document.querySelectorAll('.nav-links a[data-nav]');

const highlightNav = () => {
  let currentId = '';
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 120 && rect.bottom >= 120) {
      currentId = section.id;
    }
  });
  navAnchors.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${currentId}`);
  });
};

window.addEventListener('scroll', highlightNav, { passive: true });
highlightNav();

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
