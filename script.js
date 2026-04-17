/* Sparsh Aggarwal — Portfolio JS */

// ========== DATA ==========
const projectsData = [
  {
    id: 1,
    name: 'C.N.V.R.T',
    category: 'Entrepreneurial Strategy & Business Model',
    year: '2026',
    description:
      'Led a 6-member team to build a sustainable fashion venture. Identified fast-fashion inefficiencies and consumer trust gaps, then designed the product, pricing and GTM.',
    highlights: [
      'Executed primary research with 90+ surveys and 12 interviews; derived the insight that style and durability outweigh sustainability intent.',
      'Built unit economics: \u20B93,000 ASP, ~33% margin, ~2,100 unit break-even.',
      'Developed GTM strategy and an investor-ready pitch deck.',
    ],
    metrics: [
      { k: 'ASP', v: '\u20B93,000' },
      { k: 'Margin', v: '33%' },
      { k: 'Break-even', v: '2,100 units' },
    ],
    tags: ['Sustainable Fashion', 'GTM', 'Unit Economics', 'Pitch Deck'],
  },
  {
    id: 2,
    name: 'The Outreach Project',
    category: 'Client Acquisition & Revenue',
    year: '2025',
    description:
      'Designed a zero-cost offline client acquisition strategy and executed it end-to-end, proving a repeatable high-conversion framework under a tight time box.',
    highlights: [
      'Achieved 100% conversion (3 out of 3 clients) generating \u20B93,000 in just 4 hours.',
      'Built a repeatable offline sales framework demonstrating rapid execution and sharp targeting.',
    ],
    metrics: [
      { k: 'Conversion', v: '100%' },
      { k: 'Revenue', v: '\u20B93,000' },
      { k: 'Time', v: '4 hrs' },
    ],
    tags: ['Sales', 'Outbound', 'Zero-cost GTM'],
  },
  {
    id: 3,
    name: 'Marketing Analytics Engagement',
    category: 'Revenue, Conversion & CLTV',
    year: '2025',
    description:
      'Ran a full-funnel marketing analytics review \u2014 tracking conversion, CAC, revenue and CLTV \u2014 to diagnose performance volatility and seasonality.',
    highlights: [
      'Identified revenue volatility of 32\u2013170% with ~85% average realisation.',
      'Improved CTR from 2.1% to 3.2% and reduced CPA from \u20B9830 to \u20B9646.',
      'Diagnosed the Q3 ROI drop and surfaced seasonality risk to the team.',
    ],
    metrics: [
      { k: 'CTR', v: '2.1 \u2192 3.2%' },
      { k: 'CPA', v: '\u20B9830 \u2192 \u20B9646' },
      { k: 'Realisation', v: '~85%' },
    ],
    tags: ['Analytics', 'CAC', 'CLTV', 'Funnel'],
  },
  {
    id: 4,
    name: 'SME Operations \u2014 Paper Recycling',
    category: 'Field Research & ESG',
    year: '2025',
    description:
      'On-site operational study of a paper recycling SME with 25\u201340 workers, focused on productivity, worker welfare and low-cost ESG interventions.',
    highlights: [
      'Identified 46\u201348\u00B0C heat stress as the key productivity bottleneck on the shop floor.',
      'Designed 4 low-cost interventions \u2014 insulation, shift optimisation, hydration and water reuse \u2014 aligned with ESG goals.',
    ],
    metrics: [
      { k: 'Workforce', v: '25\u201340' },
      { k: 'Heat Stress', v: '46\u201348\u00B0C' },
      { k: 'Interventions', v: '4' },
    ],
    tags: ['Operations', 'ESG', 'Field Research'],
  },
];

const educationData = [
  {
    degree: 'BBA \u2014 Digital Business & Entrepreneurship',
    school: 'Indian Institute of Management Bangalore (IIM Bangalore)',
    period: 'Sep 2024 \u2013 Jun 2027',
    note: 'Flagship undergraduate programme focused on digital ventures, strategy and analytics.',
  },
  {
    degree: 'Diploma in International Affairs & Diplomacy',
    school: 'Indian Institute of Governance and Leadership (IIGL)',
    period: 'Oct 2025 \u2013 Apr 2026',
    note: 'Electives in geopolitics, public policy and global governance.',
  },
  {
    degree: 'Class XII \u2014 Commerce with Mathematics',
    school: 'D PSG Faridabad',
    period: '2023',
    note: 'Graduated with 75%.',
  },
  {
    degree: 'Class X',
    school: 'Presidium Faridabad',
    period: '2021',
    note: 'Graduated with 85%.',
  },
];

const leadershipData = [
  {
    role: 'Student Representative',
    org: 'IIM Bangalore',
    desc: 'Liaison between students and administration \u2014 managed academic communication and escalation handling.',
  },
  {
    role: 'Extended Partnership Team',
    org: 'IIM Bangalore',
    desc: 'Supported sponsor outreach and pitch development for external collaborations.',
  },
  {
    role: 'Media Cell',
    org: 'IIM Bangalore',
    desc: 'Managed visual content and event coverage for institutional events.',
  },
  {
    role: 'Vice-Captain & Proctor',
    org: 'School',
    desc: 'Led operations for 400+ students \u2014 managed discipline and coordination across school functions.',
  },
];

const skillsData = [
  {
    group: 'Strategy & Business',
    items: [
      'Market Research',
      'Business Model Development',
      'Operations',
      'Problem Solving',
    ],
  },
  {
    group: 'Analytics & Marketing',
    items: [
      'Excel',
      'Data Analysis',
      'Financial Analysis',
      'Social Media Strategy',
      'Content Planning',
    ],
  },
  {
    group: 'Tools & Tech',
    items: [
      'PowerPoint',
      'Canva',
      'Notion',
      'Google Workspace',
      'HTML / CSS',
    ],
  },
];

// ========== HELPERS ==========
const $ = (sel, el = document) => el.querySelector(sel);
const $$ = (sel, el = document) => Array.from(el.querySelectorAll(sel));

// ========== NAVBAR ==========
const navbar = $('#navbar');
const menuBtn = $('#menuToggle');

const handleScroll = () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
};
window.addEventListener('scroll', handleScroll, { passive: true });
handleScroll();

menuBtn.addEventListener('click', () => {
  const isOpen = navbar.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', isOpen);
});

// Smooth scroll + close mobile menu on click
$$('[data-scroll]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if (!href || !href.startsWith('#')) return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    navbar.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});

// ========== RENDER PROJECTS ==========
const projectsList = $('#projectsList');
const projectDetail = $('#projectDetail');
let activeProjectId = projectsData[0].id;

function renderProjectsList() {
  projectsList.innerHTML = projectsData
    .map(
      (p, idx) => `
      <button class="project-item ${p.id === activeProjectId ? 'active' : ''}" data-id="${p.id}">
        <div class="project-head">
          <div>
            <div class="project-meta">
              <span class="project-idx">${String(idx + 1).padStart(2, '0')}</span>
              <span class="project-year">${p.year}</span>
            </div>
            <h3 class="project-name font-display">${p.name}</h3>
            <p class="project-cat">${p.category}</p>
          </div>
          <svg class="arrow-ico" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
        </div>
      </button>
    `
    )
    .join('');

  $$('.project-item').forEach((el) => {
    el.addEventListener('click', () => {
      activeProjectId = Number(el.dataset.id);
      renderProjectsList();
      renderProjectDetail();
    });
  });
}

function renderProjectDetail() {
  const p = projectsData.find((x) => x.id === activeProjectId);
  if (!p) return;
  projectDetail.innerHTML = `
    <p class="section-label" style="margin-bottom:16px">Featured \u2014 ${p.year}</p>
    <h3 class="font-display" style="font-size: clamp(1.8rem, 3vw, 2.25rem); line-height:1.1; color:#fafafa; margin:0">${p.name}</h3>
    <p class="muted small" style="margin-top:4px">${p.category}</p>
    <p style="margin-top:24px; color:#d4d4d4; line-height:1.65">${p.description}</p>
    <div class="metric-grid">
      ${p.metrics.map((m) => `<div class="metric"><div class="metric-v">${m.v}</div><div class="metric-k">${m.k}</div></div>`).join('')}
    </div>
    <ul class="bullets">
      ${p.highlights.map((h) => `<li>${h}</li>`).join('')}
    </ul>
    <div class="tags">
      ${p.tags.map((t) => `<span class="tag">${t}</span>`).join('')}
    </div>
  `;
}
renderProjectsList();
renderProjectDetail();

// ========== RENDER EDUCATION ==========
$('#educationGrid').innerHTML = educationData
  .map(
    (e, i) => `
    <div class="card reveal">
      <div style="display:flex; gap:16px; align-items:flex-start">
        <div class="icon-box accent-box">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
        </div>
        <div style="flex:1">
          <div class="edu-head">
            <span class="edu-idx">0${i + 1} / Education</span>
            <span class="edu-period">${e.period}</span>
          </div>
          <h3 class="edu-degree font-display">${e.degree}</h3>
          <p class="edu-school">${e.school}</p>
          <p class="edu-note">${e.note}</p>
        </div>
      </div>
    </div>
  `
  )
  .join('');

// ========== RENDER LEADERSHIP ==========
$('#leadershipGrid').innerHTML = leadershipData
  .map(
    (l) => `
    <div class="card reveal">
      <div style="display:flex; gap:16px; align-items:flex-start">
        <div class="icon-box">
          <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </div>
        <div style="flex:1">
          <h3 class="lead-role font-display">${l.role}</h3>
          <p class="lead-org">${l.org}</p>
          <p class="lead-desc">${l.desc}</p>
        </div>
      </div>
    </div>
  `
  )
  .join('');

// ========== RENDER SKILLS ==========
$('#skillsGrid').innerHTML = skillsData
  .map(
    (g, i) => `
    <div class="card reveal">
      <div class="skill-head">
        <h3 class="skill-title font-display">${g.group}</h3>
        <span class="skill-num">0${i + 1}</span>
      </div>
      <div class="skill-items">
        ${g.items.map((it) => `<span class="skill-item">${it}</span>`).join('')}
      </div>
    </div>
  `
  )
  .join('');

// ========== REVEAL ON SCROLL ==========
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
$$('.reveal').forEach((el) => revealObserver.observe(el));

// ========== COPY EMAIL ==========
const copyBtn = $('#copyEmail');
const toast = $('#toast');
let toastTimer;
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}
copyBtn.addEventListener('click', async () => {
  const email = 'sparsh.aggarwal24@iimb.ac.in';
  try {
    await navigator.clipboard.writeText(email);
    copyBtn.querySelector('.copy').classList.add('hidden');
    copyBtn.querySelector('.check').classList.remove('hidden');
    showToast('Email copied \u2014 ' + email);
    setTimeout(() => {
      copyBtn.querySelector('.copy').classList.remove('hidden');
      copyBtn.querySelector('.check').classList.add('hidden');
    }, 1800);
  } catch {
    showToast('Could not copy. Please copy manually.');
  }
});

// ========== BACK TO TOP ==========
$('#toTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ========== YEAR ==========
$('#year').textContent = new Date().getFullYear();
