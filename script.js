// ── Hamburger menu ──────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));

// ── Navbar shadow on scroll ─────────────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('navbar').style.boxShadow =
    window.scrollY > 10 ? '0 4px 24px rgba(0,0,0,0.4)' : '';
});

// ── Terminal typewriter ─────────────────────────────────
const lines = [
  { text: '$ harrisTek --init automation-suite', cls: 'cmd',  delay: 0 },
  { text: '> Analyzing project structure…',       cls: 'out',  delay: 800 },
  { text: '> Framework detected: Python / pytest',cls: 'out',  delay: 1400 },
  { text: '✔ CI pipeline scaffolded',             cls: 'ok',   delay: 2000 },
  { text: '✔ Docker multi-stage build ready',     cls: 'ok',   delay: 2500 },
  { text: '✔ GitHub Actions workflow created',    cls: 'ok',   delay: 3000 },
  { text: '$ kubectl apply -f ./infra/',          cls: 'cmd',  delay: 3700 },
  { text: '> deployment.apps/api configured',     cls: 'out',  delay: 4300 },
  { text: '> service/api-lb configured',          cls: 'out',  delay: 4700 },
  { text: '✔ All 3 pods running',                 cls: 'ok',   delay: 5200 },
  { text: '⚡ Deploy complete — 42s total',       cls: 'warn', delay: 5800 },
];

const termBody = document.getElementById('terminal-body');

lines.forEach(({ text, cls, delay }) => {
  setTimeout(() => {
    const line = document.createElement('div');
    line.className = cls;
    line.textContent = text;
    termBody.appendChild(line);
    termBody.scrollTop = termBody.scrollHeight;
  }, delay);
});

// blinking cursor at end
setTimeout(() => {
  const cursor = document.createElement('span');
  cursor.className = 'terminal-cursor';
  termBody.appendChild(cursor);
}, 6400);

// ── Scroll-reveal ───────────────────────────────────────
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity  = '1';
      e.target.style.transform = 'translateY(0)';
    }
  }),
  { threshold: 0.1 }
);

document.querySelectorAll('.service-card, .pillar, .stat, .tech-grid span').forEach(el => {
  el.style.opacity   = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// ── Contact form ────────────────────────────────────────
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const btn     = this.querySelector('button[type="submit"]');
  const success = document.getElementById('form-success');

  btn.textContent = 'Sending…';
  btn.disabled    = true;

  // Simulate async send (wire up to a real backend/form service as needed)
  setTimeout(() => {
    success.classList.remove('hidden');
    btn.textContent = 'Message Sent ✓';
    btn.style.background = '#10b981';
    this.querySelectorAll('input, select, textarea').forEach(f => f.value = '');
  }, 1200);
});
