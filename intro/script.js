const intro = document.querySelector('.intro');
const buttonFlowGlow = document.querySelector('.button-flow-glow');
let portfolioWarmed = false;

function warmPortfolio() {
  if (portfolioWarmed) return;
  portfolioWarmed = true;
  [
    ['prefetch', '../portfolio.html', 'document'],
    ['prefetch', '../site.css', 'style'],
    ['prefetch', '../site.js', 'script'],
    ['preload', '../首页banner/首页轮播1.webp', 'image'],
  ].forEach(([rel, href, as]) => {
    const link = document.createElement('link');
    link.rel = rel;
    link.href = href;
    link.as = as;
    document.head.appendChild(link);
  });
}

function leave() {
  if (intro.classList.contains('is-leaving')) return;
  warmPortfolio();
  intro.classList.add('is-leaving');
  sessionStorage.setItem('sjFromIntro', '1');
  window.setTimeout(() => {
    window.location.href = '../portfolio.html';
  }, 1560);
}

function updateButtonGlow(event) {
  const x = event.clientX;
  const y = event.clientY;
  const buttonLeft = window.innerWidth * 0.4713541667;
  const buttonRight = window.innerWidth * 0.5302083333;
  const buttonTop = window.innerHeight * 0.6922290389;
  const buttonBottom = window.innerHeight * 0.7249488753;
  const pad = 30;
  const near = x >= buttonLeft - pad && x <= buttonRight + pad && y >= buttonTop - pad && y <= buttonBottom + pad;
  intro.classList.toggle('is-button-near', near);
  if (!buttonFlowGlow) return;
  if (!near) {
    buttonFlowGlow.style.setProperty('--glow-opacity', '0');
    return;
  }
  const cx = (buttonLeft + buttonRight) / 2;
  const cy = (buttonTop + buttonBottom) / 2;
  const halfW = (buttonRight - buttonLeft) / 2;
  const halfH = (buttonBottom - buttonTop) / 2;
  const dx = x - cx;
  const dy = y - cy;
  const kx = dx === 0 ? Infinity : halfW / Math.abs(dx);
  const ky = dy === 0 ? Infinity : halfH / Math.abs(dy);
  const edge = Math.min(Math.max(1 / Math.min(kx, ky), 0), 1);
  let angle = Math.atan2(dy, dx) * 180 / Math.PI + 90;
  if (angle < 0) angle += 360;
  const opacity = Math.max(0, Math.min(1, (edge * 100 - 24) / 76));
  buttonFlowGlow.style.setProperty('--glow-opacity', opacity.toFixed(3));
  buttonFlowGlow.style.setProperty('--cursor-angle', angle.toFixed(3) + 'deg');
}

intro.addEventListener('click', leave);
intro.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    leave();
  }
});
intro.addEventListener('pointermove', updateButtonGlow);
intro.addEventListener('pointerleave', () => {
  intro.classList.remove('is-button-near');
  if (buttonFlowGlow) buttonFlowGlow.style.setProperty('--glow-opacity', '0');
});

if ('requestIdleCallback' in window) {
  requestIdleCallback(warmPortfolio, { timeout: 1600 });
} else {
  window.setTimeout(warmPortfolio, 1200);
}
