'use strict';

// ─── COUPON DATA (from affmaven.com/helium-10-discount/) ────────────────────
const exclusiveCoupons = [
  {
    code: 'BLOGE6M20',
    discount: '20%',
    off: 'OFF',
    title: '🎉 20% Off for 6 Months on Platinum & Diamond',
    desc: 'Slash costs and access premium seller tools including advanced keyword research, PPC automation, and listing optimization for half a year at a reduced price.',
    validity: 'Verified March 2026',
    link: 'https://affmaven.com/go/helium10',
  },
  {
    code: 'BLOGE10',
    discount: '10%',
    off: 'OFF',
    title: '💰 10% Off Every Month Forever (Lifetime Savings)',
    desc: 'Lock in 10% savings every single month for as long as you keep your subscription. Best for long-term sellers committed to Helium 10.',
    validity: 'Verified March 2026',
    link: 'https://affmaven.com/go/helium10',
  },
];

const normalCoupons = [
  {
    code: 'BLOGE6M20',
    discount: '$468',
    off: 'SAVE',
    title: '🛍️ Save $468 on Helium 10 Platinum Plan',
    desc: 'Upgrade to Platinum and unlock keyword research, competitor tracking, and listing optimization with this limited-time discount.',
    validity: 'Verified March 2026',
    link: 'https://affmaven.com/go/helium10',
  },
  {
    code: 'BLOGE6M20',
    discount: '$1,284',
    off: 'SAVE',
    title: '💎 Save $1,284 on Helium 10 Annual Subscription',
    desc: 'Get a full year of Helium 10 with all advanced features while saving $1,284 compared to the monthly subscription. Best deal for serious sellers.',
    validity: 'Verified March 2026',
    link: 'https://affmaven.com/go/helium10',
  },
  {
    code: 'BLOGE10',
    discount: 'FREE',
    off: 'TRIAL',
    title: '🎁 Try Helium 10 for Free — Essential Tools Included',
    desc: 'Start using Helium 10 at zero cost and explore powerful features like product research, keyword tracking, and listing optimization before committing.',
    validity: 'Always available',
    link: 'https://affmaven.com/go/helium10',
  },
];

const unverifiedCoupons = [
  {
    code: 'BLOGE10',
    discount: '$39',
    off: '/MO',
    title: '🚀 Starter Plan at $39/Month (Annual Billing)',
    desc: 'Kickstart your Amazon business with essential tools for product discovery, trend analysis, and competition insights at a super affordable price.',
    validity: 'Unverified — may vary',
    link: 'https://affmaven.com/go/helium10',
  },
];

// ─── FAQ DATA ────────────────────────────────────────────────────────────────
const faqs = [
  { q: 'What is the best Helium 10 coupon code for 2026?', a: 'BLOGE6M20 gives you 20% off for 6 months on Platinum and Diamond plans — the biggest short-term discount available. BLOGE10 gives a steady 10% off every month forever. If you\'re new and evaluating the platform, go with BLOGE6M20. Long-term users will save more overall with BLOGE10.' },
  { q: 'Do Helium 10 coupon codes work on all plans?', a: 'BLOGE6M20 and BLOGE10 work on Platinum and Diamond plans. The Starter plan and free plan may not accept discount codes. Annual billing combined with a code offers the highest total savings.' },
  { q: 'Can I stack multiple Helium 10 coupon codes?', a: 'No — Helium 10 only allows one coupon code per checkout. Choose the code that gives you the best deal for your situation. For most people, BLOGE6M20 wins in the short term while BLOGE10 wins long-term.' },
  { q: 'Does Helium 10 offer a money-back guarantee?', a: 'Yes. Helium 10 offers a 7-day refund window on your first payment. If you\'re not satisfied within those 7 days, you can request a full refund with no questions asked.' },
  { q: 'Is there a free trial for Helium 10?', a: 'Yes — Helium 10 has a free plan that lets you use tools like Black Box and Xray with limited monthly searches. No credit card is required to start. Use code BLOGE10 when you upgrade to lock in your monthly discount.' },
  { q: 'Which Helium 10 plan is best for beginners?', a: 'The Starter plan ($49/mo on monthly billing) is great for testing. But most active sellers quickly move to Platinum ($129/mo) which unlocks unlimited keyword searches, competitor tracking, listing optimization, and PPC tools. Use BLOGE6M20 to get Platinum at $103.20/mo for 6 months.' },
  { q: 'Are these Helium 10 coupon codes verified?', a: 'Yes — BLOGE6M20 and BLOGE10 are tested and verified as of March 2026. We update this page as soon as any changes occur. Unverified codes in the third section may or may not work — use at your own risk.' },
  { q: 'What is Helium 10 and is it worth it?', a: 'Helium 10 is the most comprehensive all-in-one software for Amazon FBA sellers, covering product research, keyword tools, listing optimization, PPC automation, inventory management, profit tracking, and more. With over 30 tools and a valid coupon code, it offers excellent value for the price.' },
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function makeCouponRow(coupon) {
  const el = document.createElement('div');
  el.className = 'coupon-row';
  el.innerHTML = `
    <div class="coupon-discount-badge">
      <div class="pct">${coupon.discount}</div>
      <small class="off">${coupon.off}</small>
    </div>
    <div class="coupon-row-info">
      <div class="coupon-row-title">${coupon.title}</div>
      <div class="coupon-row-desc">${coupon.desc}</div>
      <div class="coupon-validity">✓ ${coupon.validity}</div>
    </div>
    <button class="btn-show-coupon" data-code="${coupon.code}" data-link="${coupon.link}">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px"><path d="M20 12v10H4V12"/><path d="M2 7h20v5H2z"/><path d="M12 22V7"/></svg>
      Show Coupon
    </button>
  `;
  el.querySelector('.btn-show-coupon').addEventListener('click', handleShowCoupon);
  return el;
}

function renderCoupons() {
  const exc = document.getElementById('exclusive-coupons');
  const nor = document.getElementById('normal-coupons');
  const unv = document.getElementById('unverified-coupons');
  if (exc) exclusiveCoupons.forEach(c => exc.appendChild(makeCouponRow(c)));
  if (nor) normalCoupons.forEach(c => nor.appendChild(makeCouponRow(c)));
  if (unv) unverifiedCoupons.forEach(c => unv.appendChild(makeCouponRow(c)));
}

// ─── POPUP ───────────────────────────────────────────────────────────────────
function handleShowCoupon(e) {
  const btn  = e.currentTarget;
  const code = btn.dataset.code;
  const link = btn.dataset.link;

  // Reveal code in button
  btn.textContent = code;
  btn.classList.add('revealed');

  // Open Helium 10 in background tab
  window.open(link, '_blank', 'noopener,noreferrer');

  // Show popup
  document.getElementById('popup-code-text').textContent = code;
  document.getElementById('popup-deal-btn').href = link;
  document.getElementById('coupon-popup').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closePopup() {
  document.getElementById('coupon-popup').classList.add('hidden');
  document.body.style.overflow = '';
}

function copyText(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    if (!btn) return;
    const orig = btn.querySelector('span') ? btn.querySelector('span').textContent : btn.textContent;
    if (btn.querySelector('span')) btn.querySelector('span').textContent = 'Copied!';
    else btn.textContent = 'Copied!';
    setTimeout(() => {
      if (btn.querySelector('span')) btn.querySelector('span').textContent = orig;
      else btn.textContent = orig;
    }, 2000);
  }).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = text; document.body.appendChild(ta); ta.select();
    document.execCommand('copy'); document.body.removeChild(ta);
  });
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
function renderFaq() {
  const list = document.getElementById('faq-list');
  if (!list) return;
  list.innerHTML = faqs.map((f, i) => `
    <div class="faq-item" id="faq-${i}">
      <button class="faq-question" data-index="${i}">
        ${f.q}
        <span class="faq-arrow">▾</span>
      </button>
      <div class="faq-answer">${f.a}</div>
    </div>
  `).join('');
  list.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const open = item.classList.contains('open');
      list.querySelectorAll('.faq-item').forEach(el => el.classList.remove('open'));
      if (!open) item.classList.add('open');
    });
  });
}

// ─── COUNTDOWN ───────────────────────────────────────────────────────────────
function initCountdown() {
  // Set deadline to end of month
  const now = new Date();
  const deadline = new Date(now.getFullYear(), now.getMonth() + 1, 1, 0, 0, 0);

  function tick() {
    const diff = deadline - Date.now();
    if (diff <= 0) return;
    const d  = Math.floor(diff / 86400000);
    const h  = Math.floor((diff % 86400000) / 3600000);
    const m  = Math.floor((diff % 3600000) / 60000);
    const s  = Math.floor((diff % 60000) / 1000);
    const pad = n => String(n).padStart(2, '0');
    const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    set('hero-days', pad(d));
    set('hero-hours', pad(h));
    set('hero-mins', pad(m));
    set('hero-secs', pad(s));
  }
  tick();
  setInterval(tick, 1000);
}

// ─── MOBILE MENU ─────────────────────────────────────────────────────────────
function initMobileMenu() {
  const btn   = document.getElementById('mobile-menu-btn');
  const nav   = document.getElementById('mobile-nav');
  const iMenu = btn?.querySelector('.icon-menu');
  const iClose = btn?.querySelector('.icon-close');
  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    const open = !nav.classList.contains('hidden');
    nav.classList.toggle('hidden');
    iMenu?.classList.toggle('hidden', !open);
    iClose?.classList.toggle('hidden', open);
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.add('hidden');
    iMenu?.classList.remove('hidden');
    iClose?.classList.add('hidden');
  }));
}

// ─── HEADER SCROLL ───────────────────────────────────────────────────────────
function initScrollHeader() {
  const h = document.getElementById('header');
  if (!h) return;
  window.addEventListener('scroll', () => {
    h.style.boxShadow = window.scrollY > 10 ? '0 2px 20px rgba(0,0,0,.3)' : '';
  }, { passive: true });
}

// ─── SCROLL ANIMATIONS ───────────────────────────────────────────────────────
function initAnimations() {
  if (!('IntersectionObserver' in window)) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.coupon-row, .benefit-card, .badge-card, .choose-card, .step-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity .4s ease, transform .4s ease';
    obs.observe(el);
  });
}

// ─── SMOOTH SCROLL ───────────────────────────────────────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 70;
        const y = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });
}

// ─── INIT ────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderCoupons();
  renderFaq();
  initCountdown();
  initMobileMenu();
  initScrollHeader();
  initSmoothScroll();
  setTimeout(initAnimations, 100);

  // Footer year
  const yr = document.getElementById('current-year');
  if (yr) yr.textContent = new Date().getFullYear();

  // Popup events
  document.getElementById('popup-close')?.addEventListener('click', closePopup);
  document.getElementById('popup-continue')?.addEventListener('click', closePopup);
  document.getElementById('coupon-popup')?.addEventListener('click', e => {
    if (e.target === document.getElementById('coupon-popup')) closePopup();
  });

  document.getElementById('popup-copy-btn')?.addEventListener('click', () => {
    const code = document.getElementById('popup-code-text')?.textContent;
    if (!code) return;
    copyText(code, document.getElementById('popup-copy-btn'));
    const dealBtn = document.getElementById('popup-deal-btn');
    if (dealBtn?.href) window.open(dealBtn.href, '_blank', 'noopener,noreferrer');
  });
});
