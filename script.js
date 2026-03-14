/* ============================================================
   HELIUM 10 COUPONS - script.js
   ============================================================ */

// ─── DATA ──────────────────────────────────────────────────
const coupons = [
  {
    id: 'bloge6m20-a',
    type: 'featured',
    badge: 'Featured',
    title: '🎉 20% Off for 6 Months on Any Plan',
    desc: 'Slash your costs on Platinum or Diamond — the biggest short-term discount available.',
    code: 'BLOGE6M20',
    discount: '20%',
    discountSub: '6 Months',
    link: 'https://affmaven.com/go/helium10',
  },
  {
    id: 'bloge10-a',
    type: 'featured',
    badge: 'Featured',
    title: '💰 10% Off Every Month — Forever',
    desc: 'Smaller percentage, but it never expires. Perfect for long-term sellers committed to Helium 10.',
    code: 'BLOGE10',
    discount: '10%',
    discountSub: 'Every Month',
    link: 'https://affmaven.com/go/helium10',
  },
  {
    id: 'bloge6m20-b',
    type: 'verified',
    badge: 'Verified',
    title: '💎 Save $1,284 on Annual Helium 10 Subscription',
    desc: 'Get a full year of Helium 10 with all advanced features at massive savings versus monthly billing.',
    code: 'BLOGE6M20',
    discount: '$1,284',
    discountSub: 'Annual Save',
    link: 'https://affmaven.com/go/helium10',
  },
  {
    id: 'free-trial',
    type: 'verified',
    badge: 'Verified',
    title: '🎁 Try Helium 10 for Free — Essential Tools Included',
    desc: 'Start with zero cost. Explore product research, keyword tracking, and listing tools before committing.',
    code: 'BLOGE10',
    discount: 'FREE',
    discountSub: 'Free Plan',
    link: 'https://affmaven.com/go/helium10',
  },
  {
    id: 'bloge6m20-c',
    type: 'verified',
    badge: 'Verified',
    title: '🛍️ Get $468 Off Helium 10 Platinum Plan',
    desc: 'Upgrade to Platinum and unlock keyword research, competitor tracking, and listing optimization at a big discount.',
    code: 'BLOGE6M20',
    discount: '$468',
    discountSub: 'Platinum',
    link: 'https://affmaven.com/go/helium10',
  },
  {
    id: 'starter',
    type: 'verified',
    badge: 'Verified',
    title: '🚀 Starter Plan — Just $39/Month (Annual)',
    desc: 'Kickstart your Amazon business with essential discovery and trend analysis tools at a super affordable rate.',
    code: 'BLOGE10',
    discount: '$39',
    discountSub: '/mo Annual',
    link: 'https://affmaven.com/go/helium10',
  },
];

const faqs = [
  {
    q: 'What is the best Helium 10 coupon code for 2026?',
    a: 'BLOGE6M20 gives you 20% off for 6 months — ideal for new users. BLOGE10 gives 10% off every single month forever, making it better for long-term sellers. Both work on Platinum and Diamond plans.',
  },
  {
    q: 'Do Helium 10 coupon codes work on all plans?',
    a: 'BLOGE6M20 and BLOGE10 work on the Platinum and Diamond plans. The free trial and Starter plan have fixed pricing and may not accept discount codes.',
  },
  {
    q: 'Can I stack multiple Helium 10 coupon codes?',
    a: 'No, Helium 10 only allows one coupon code per checkout. Choose the code that gives you the best deal for your situation.',
  },
  {
    q: 'Does Helium 10 offer a money-back guarantee?',
    a: 'Yes, Helium 10 offers a 7-day refund window on your first payment. If you're not satisfied within those 7 days, you can request a full refund.',
  },
  {
    q: 'Is there a free trial for Helium 10?',
    a: 'Yes! Helium 10 has a free plan that lets you explore tools like Xray and Black Box with limited searches. No credit card required to sign up.',
  },
  {
    q: 'Which Helium 10 plan is best for beginners?',
    a: 'The Starter plan ($39/mo on annual billing) is great to test the platform. But most active sellers quickly move to Platinum ($129/mo) for unlimited keyword research and full access to key tools.',
  },
  {
    q: 'Are these Helium 10 coupon codes verified?',
    a: 'Yes. All codes on this page (BLOGE6M20 and BLOGE10) are tested and verified regularly. We update them as soon as any changes occur.',
  },
  {
    q: 'What is Helium 10 and is it worth it?',
    a: 'Helium 10 is the most comprehensive all-in-one software for Amazon sellers, covering product research, keyword tools, listing optimization, PPC automation, inventory management, and more. With a valid coupon, it offers excellent value for the price.',
  },
];

// ─── COUPON CARD RENDERER ─────────────────────────────────
function renderCoupons() {
  const grid = document.getElementById('coupons-grid');
  if (!grid) return;

  grid.innerHTML = coupons.map(c => {
    const badgeClass = c.type === 'featured' ? 'badge-featured' : c.type === 'verified' ? 'badge-verified' : 'badge-unverified';
    const cardClass = c.type === 'featured' ? 'coupon-card featured' : 'coupon-card';
    return `
      <div class="${cardClass}" id="card-${c.id}">
        <div class="coupon-logo">H10</div>
        <div class="coupon-info">
          <span class="coupon-badge ${badgeClass}">${c.badge}</span>
          <div class="coupon-title">${c.title}</div>
          <div class="coupon-desc">${c.desc}</div>
        </div>
        <div class="coupon-discount">${c.discount}<small>${c.discountSub}</small></div>
        <button class="btn-show-coupon" data-id="${c.id}" data-code="${c.code}" data-link="${c.link}">
          Show Coupon
        </button>
      </div>
    `;
  }).join('');

  // Bind click
  grid.querySelectorAll('.btn-show-coupon').forEach(btn => {
    btn.addEventListener('click', handleShowCoupon);
  });
}

// ─── POPUP LOGIC ──────────────────────────────────────────
function handleShowCoupon(e) {
  const btn = e.currentTarget;
  const code = btn.dataset.code;
  const link = btn.dataset.link;

  // Reveal code in button
  btn.textContent = code;
  btn.classList.add('revealed');

  // Open Helium 10 in new tab
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

// ─── COPY TO CLIPBOARD ────────────────────────────────────
function copyToClipboard(text, feedbackEl) {
  navigator.clipboard.writeText(text).then(() => {
    if (feedbackEl) {
      const orig = feedbackEl.textContent;
      feedbackEl.textContent = 'Copied!';
      setTimeout(() => { feedbackEl.textContent = orig; }, 2000);
    }
  }).catch(() => {
    // Fallback
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  });
}

// ─── FAQ RENDERER ─────────────────────────────────────────
function renderFaq() {
  const list = document.getElementById('faq-list');
  if (!list) return;

  list.innerHTML = faqs.map((item, i) => `
    <div class="faq-item" id="faq-${i}">
      <button class="faq-question" data-index="${i}">
        ${item.q}
        <span class="faq-arrow">▾</span>
      </button>
      <div class="faq-answer">${item.a}</div>
    </div>
  `).join('');

  list.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      // Close all
      list.querySelectorAll('.faq-item').forEach(el => el.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

// ─── MOBILE MENU ──────────────────────────────────────────
function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const nav = document.getElementById('mobile-nav');
  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    nav.classList.toggle('hidden');
  });

  // Close on link click
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => nav.classList.add('hidden'));
  });
}

// ─── HEADER SCROLL ────────────────────────────────────────
function initHeaderScroll() {
  const header = document.getElementById('header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.style.background = 'rgba(8,15,26,0.97)';
    } else {
      header.style.background = 'rgba(8,15,26,0.85)';
    }
  }, { passive: true });
}

// ─── FOOTER YEAR ─────────────────────────────────────────
function setYear() {
  const el = document.getElementById('current-year');
  if (el) el.textContent = new Date().getFullYear();
}

// ─── INIT ─────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderCoupons();
  renderFaq();
  initMobileMenu();
  initHeaderScroll();
  setYear();

  // Popup close
  document.getElementById('popup-close')?.addEventListener('click', closePopup);
  document.getElementById('popup-continue')?.addEventListener('click', closePopup);
  document.getElementById('coupon-popup')?.addEventListener('click', e => {
    if (e.target === document.getElementById('coupon-popup')) closePopup();
  });

  // Popup copy button
  document.getElementById('popup-copy-btn')?.addEventListener('click', () => {
    const code = document.getElementById('popup-code-text')?.textContent;
    const btn = document.getElementById('popup-copy-btn');
    if (!code) return;
    copyToClipboard(code, btn);
    // Also open Helium 10
    const dealBtn = document.getElementById('popup-deal-btn');
    if (dealBtn?.href) window.open(dealBtn.href, '_blank', 'noopener,noreferrer');
  });

  // Inline copy in popup
  document.getElementById('popup-copy-inline')?.addEventListener('click', () => {
    const code = document.getElementById('popup-code-text')?.textContent;
    const btn = document.getElementById('popup-copy-inline');
    if (!code) return;
    copyToClipboard(code);
    if (btn) {
      const orig = btn.textContent;
      btn.textContent = '✓';
      setTimeout(() => { btn.textContent = orig; }, 1500);
    }
  });

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Animate cards on scroll
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.coupon-card, .feature-card, .step-block').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(18px)';
      el.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
      observer.observe(el);
    });
  }
});
