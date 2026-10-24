/* Portfólio — interações (loader, vistas, menu, preview no cursor, páginas de projeto) */
(() => {
  const P = window.PROJECTS;
  const S = window.SITE;
  const $ = s => document.querySelector(s);
  const body = document.body;
  const pad = n => String(n).padStart(2, '0');

  if (S.name && S.name !== 'Portfólio') document.title = `${S.name} ✲ Portfólio de Aplicações & Websites`;

  /* ---------- Render lista + grelha ---------- */
  const list = $('#list'), grid = $('#grid');
  P.forEach((p, i) => {
    const a = document.createElement('a');
    a.className = 'row'; a.href = `#/p/${p.id}`; a.dataset.i = i; a.id = `row-${p.id}`;
    a.innerHTML = `<span class="n">${pad(i + 1)}/</span>${p.featured ? '<span class="star">✲</span>' : ''}<span class="t">${p.title}</span><span class="k">${p.kind}</span>`;
    list.appendChild(a);

    const t = document.createElement('a');
    t.className = 'tile' + (p.featured ? ' featured' : ''); t.href = `#/p/${p.id}`; t.id = `tile-${p.id}`;
    t.innerHTML = `<div class="tile-img"><img src="${p.shot}" alt="${p.title}" loading="lazy"></div>
      <div class="tile-cap"><span>${pad(i + 1)}/ ${p.title}</span><span>${p.kind}</span></div>`;
    grid.appendChild(t);
  });
  $('#menu-count').textContent = `${pad(P.length)} aplicações & sites`;

  /* ---------- Contactos (só mostra o que estiver preenchido) ---------- */
  const cl = $('#contact-list');
  const items = [
    S.email && `<li><a href="mailto:${S.email}">${S.email}</a></li>`,
    S.whatsapp && `<li><a href="https://wa.me/${S.whatsapp}" target="_blank" rel="noopener">WhatsApp</a></li>`,
    S.instagram && `<li><a href="${S.instagram}" target="_blank" rel="noopener">Instagram</a></li>`,
    S.github && `<li><a href="${S.github}" target="_blank" rel="noopener">GitHub</a></li>`
  ].filter(Boolean);
  cl.innerHTML = items.length ? items.join('') : '<li>Luanda, Angola</li>';

  /* ---------- Loader: percentagem real de imagens carregadas ---------- */
  const urls = [...new Set(P.map(p => p.shot))];
  let loaded = 0, shown = 0;
  const pct = $('#loader-pct');
  urls.forEach(u => { const im = new Image(); im.onload = im.onerror = () => loaded++; im.src = u; });
  const t0 = performance.now();
  (function tick() {
    const target = Math.min(100, (loaded / urls.length) * 100, ((performance.now() - t0) / 1400) * 100);
    shown += (target - shown) * .12;
    pct.textContent = Math.round(shown >= 99.5 ? 100 : shown);
    if (shown < 99.5) return requestAnimationFrame(tick);
    setTimeout(() => {
      $('#loader').classList.add('done');
      body.classList.remove('is-loading');
      reveal();
      route();
    }, 250);
  })();

  function reveal() {
    const sel = body.classList.contains('view-grid') ? '.tile' : '.row';
    document.querySelectorAll('.row, .tile').forEach(el => el.classList.remove('in'));
    document.querySelectorAll(sel).forEach((el, i) => setTimeout(() => el.classList.add('in'), 60 * i + 150));
  }

  /* ---------- Switch Lista / Grelha ---------- */
  document.querySelectorAll('.sw').forEach(b => b.addEventListener('click', () => {
    document.querySelectorAll('.sw').forEach(x => { x.classList.toggle('active', x === b); x.setAttribute('aria-selected', x === b); });
    body.classList.toggle('view-grid', b.dataset.view === 'grid');
    body.classList.toggle('view-list', b.dataset.view === 'list');
    window.scrollTo({ top: 0 });
    reveal();
  }));

  /* ---------- Preview que segue o cursor (lista) ---------- */
  const hp = $('#hover-preview'), hpImg = $('#hp-img');
  let mx = innerWidth / 2, my = innerHeight / 2, px = mx, py = my;
  addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  list.addEventListener('mouseover', e => {
    const r = e.target.closest('.row'); if (!r) return;
    hpImg.src = P[r.dataset.i].shot; hp.classList.add('on');
  });
  list.addEventListener('mouseout', e => { if (!e.relatedTarget || !e.relatedTarget.closest('.row')) hp.classList.remove('on'); });
  (function follow() {
    px += (mx - px) * .14; py += (my - py) * .14;
    const w = hp.offsetWidth;
    hp.style.transform = `translate(${px - w / 2}px, ${py - w * .31}px) rotate(${(mx - px) * .03}deg)`;
    requestAnimationFrame(follow);
  })();

  /* ---------- Menu ---------- */
  const menu = $('#menu'), menuBtn = $('#menu-btn');
  const setMenu = open => { menu.classList.toggle('open', open); menuBtn.setAttribute('aria-expanded', open); };
  menuBtn.addEventListener('click', () => setMenu(true));
  $('#menu-close').addEventListener('click', () => setMenu(false));
  document.querySelectorAll('.menu-links a').forEach(a => a.addEventListener('click', e => {
    e.preventDefault(); setMenu(false);
    const go = a.dataset.go;
    setTimeout(() => {
      if (go === 'home') location.hash = '';
      if (go === 'bandi') location.hash = '#/p/bandi';
      if (go === 'about' || go === 'contact') location.hash = '#sobre';
    }, 350);
  }));

  /* ---------- Logo: saudação ---------- */
  const greet = ['Olá!', 'Bem-vindo', 'Mbote!', 'Tudo bem?'];
  $('#logo').addEventListener('mouseenter', () => { $('#logo-tag').textContent = greet[Math.floor(Math.random() * greet.length)]; });
  $('#logo').addEventListener('click', e => { e.preventDefault(); location.hash = ''; window.scrollTo({ top: 0, behavior: 'smooth' }); });

  /* ---------- Destaque rodado: texto a correr no contorno ---------- */
  const ft = $('#feature-text'); let off = 0;
  (function run() { off = (off - .035) % 50; ft.setAttribute('startOffset', off + '%'); requestAnimationFrame(run); })();
  $('#feature').addEventListener('click', () => { location.hash = '#/p/bandi'; });

  /* ---------- Relógio de Luanda ---------- */
  const clock = $('#clock');
  const fmt = new Intl.DateTimeFormat('pt-PT', { hour: '2-digit', minute: '2-digit', timeZone: 'Africa/Luanda' });
  const tickClock = () => { clock.textContent = fmt.format(new Date()); };
  tickClock(); setInterval(tickClock, 15000);

  /* ---------- Páginas (hash routing) ---------- */
  const proj = $('#project'), about = $('#about'), scroller = $('#project-scroll');
  const split = s => s.split(' ').map(w => `<span class="w"><span>${w}</span></span>`).join(' ');

  function openProject(id) {
    const i = P.findIndex(p => p.id === id); if (i < 0) return closeAll();
    const p = P[i], next = P[(i + 1) % P.length];
    $('#p-num').textContent = `${pad(i + 1)}/${pad(P.length)} — ${p.kind}`;
    $('#p-title').innerHTML = split(p.title);
    $('#p-lead').textContent = p.lead;
    $('#p-meta').innerHTML = Object.entries(p.meta).map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('');
    $('#p-hero').src = p.shot; $('#p-hero').alt = p.title;
    $('#p-body').innerHTML = p.body.map(t => `<p>${t}</p>`).join('');
    const g = [];
    if (p.video) g.push(`<video src="${p.video}" controls preload="metadata" playsinline></video>`);
    (p.gallery || []).forEach(src => g.push(`<img src="${src}" alt="${p.title}" loading="lazy">`));
    $('#p-gallery').innerHTML = g.join('');
    $('#p-actions').innerHTML = (p.links || []).map((l, k) =>
      `<a class="btn${k ? ' ghost' : ''}" href="${l.href}" target="_blank" rel="noopener">${l.label}</a>`).join('');
    $('#p-next').href = `#/p/${next.id}`;
    $('#p-next-title').textContent = next.title;
    proj.classList.remove('open'); void proj.offsetWidth;   // reinicia animação do título
    proj.classList.add('open'); proj.setAttribute('aria-hidden', 'false');
    about.classList.remove('open');
    scroller.scrollTop = 0;
    body.classList.add('is-locked');
    hp.classList.remove('on');
  }
  function openAbout() {
    proj.classList.remove('open');
    about.classList.add('open'); about.setAttribute('aria-hidden', 'false');
    body.classList.add('is-locked');
  }
  function closeAll() {
    proj.classList.remove('open'); about.classList.remove('open');
    proj.setAttribute('aria-hidden', 'true'); about.setAttribute('aria-hidden', 'true');
    body.classList.remove('is-locked');
    proj.querySelectorAll('video').forEach(v => v.pause());
  }
  function route() {
    const h = location.hash;
    if (h.startsWith('#/p/')) openProject(h.slice(4));
    else if (h === '#sobre' || h === '#contacto') openAbout();
    else closeAll();
  }
  addEventListener('hashchange', route);
  $('#p-close').addEventListener('click', () => { location.hash = ''; });
  $('#about-close').addEventListener('click', () => { location.hash = ''; });
  addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (menu.classList.contains('open')) return setMenu(false);
    if (location.hash) location.hash = '';
  });

  /* ---------- Fundo: manchas de luz suaves (leve, em baixa resolução) ---------- */
  const cv = $('#bg'), ctx = cv.getContext('2d');
  const blobs = [
    { c: [201, 163, 106], r: .55, s: .00011, o: 0 },
    { c: [70, 60, 140], r: .5, s: .00008, o: 2 },
    { c: [40, 110, 90], r: .45, s: .00013, o: 4 }
  ];
  const size = () => { cv.width = innerWidth / 8; cv.height = innerHeight / 8; };
  size(); addEventListener('resize', size);
  (function draw(t) {
    const w = cv.width, h = cv.height;
    ctx.clearRect(0, 0, w, h);
    blobs.forEach(b => {
      const x = w * (.5 + .35 * Math.sin(t * b.s + b.o)), y = h * (.5 + .35 * Math.cos(t * b.s * 1.3 + b.o));
      const g = ctx.createRadialGradient(x, y, 0, x, y, Math.max(w, h) * b.r);
      g.addColorStop(0, `rgba(${b.c},.22)`); g.addColorStop(1, `rgba(${b.c},0)`);
      ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
    });
    requestAnimationFrame(draw);
  })(0);
})();
