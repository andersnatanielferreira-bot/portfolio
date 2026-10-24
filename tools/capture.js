// Captura screenshots reais de cada projeto para usar como capas no portfólio.
// Uso: node tools/capture.js
const path = require('path');
const fs = require('fs');
const http = require('http');
const puppeteer = require(path.join(__dirname, '..', '..', 'edicao-video', 'node_modules', 'puppeteer-core'));

const SCRATCH = path.resolve(__dirname, '..', '..');
const OUT = path.resolve(__dirname, '..', 'assets', 'shots');
fs.mkdirSync(OUT, { recursive: true });

const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.json': 'application/json',
  '.mp4': 'video/mp4', '.woff2': 'font/woff2', '.mp3': 'audio/mpeg' };

function serve(root, port) {
  return new Promise(res => {
    const s = http.createServer((req, rsp) => {
      let p = decodeURIComponent(req.url.split('?')[0]);
      if (p.endsWith('/')) p += 'index.html';
      let f = path.join(root, p);
      if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) f = path.join(root, 'index.html'); // SPA fallback
      if (!fs.existsSync(f)) { rsp.writeHead(404); return rsp.end(); }
      rsp.writeHead(200, { 'Content-Type': MIME[path.extname(f).toLowerCase()] || 'application/octet-stream' });
      fs.createReadStream(f).pipe(rsp);
    }).listen(port, () => res(s));
  });
}

const exe = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
].find(fs.existsSync);

const JOBS = [
  { id: 'bandi-app', port: 8801, root: 'secretariado-agt-app/dist', url: '/' , wait: 2500 },
  { id: 'bandi-site', port: 8800, root: '', url: '/secretariado-agt-app/site-download/index.html', wait: 2500 },
  { id: 'lucro-certo', port: 8800, root: '', url: '/lucro-certo/index.html', wait: 5000 },
  { id: 'drip-nassendes', port: 8800, root: '', url: '/drip-nassendes/index.html', wait: 3500 },
  { id: 'viewgow', port: 8802, root: 'clipviral-saas/dist', url: '/', wait: 3000 },
  { id: 'tiktok-landing', port: 8800, root: '', url: '/landing_page_tiktok_shop_ia/index.html', wait: 2500 },
  { id: 'tiktok-guide', port: 8800, root: '', url: '/tiktok_shop_live_ia_guide/index.html', wait: 2500 },
  { id: 'tiktok-demo', port: 8800, root: '', url: '/tiktok_live_screen_demo/index.html', wait: 2500 },
  { id: 'gestao-custos', port: 8800, root: '', url: '/gestao-custos/index.html', wait: 2000 },
  { id: 'site-desculpas', port: 8800, root: '', url: '/site-desculpas/index.html', wait: 3000 },
  { id: 'proposta', port: 8800, root: '', url: '/orcamento_portfolio/proposta.html', wait: 1500 },
  { id: 'ovakanda-video', port: 8800, root: '', url: '/edicao-video/video.html', wait: 3000 },
  { id: 'guia-fornecedores', port: 8800, root: '', url: '/guia_fornecedores_angola/pdf_final/documento_fornecedores_angola.html', wait: 2000 },
];

(async () => {
  const servers = {};
  for (const j of JOBS) if (!servers[j.port]) servers[j.port] = await serve(path.join(SCRATCH, j.root), j.port);

  const browser = await puppeteer.launch({ executablePath: exe, headless: 'new', args: ['--autoplay-policy=no-user-gesture-required'] });
  const only = process.argv.slice(2);
  for (const j of JOBS) {
    if (only.length && !only.includes(j.id)) continue;
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
    try {
      await page.goto(`http://127.0.0.1:${j.port}${j.url}`, { waitUntil: 'networkidle2', timeout: 30000 });
      await new Promise(r => setTimeout(r, j.wait));
      await page.screenshot({ path: path.join(OUT, `${j.id}.jpg`), type: 'jpeg', quality: 82 });
      console.log('OK  ', j.id);
    } catch (e) {
      console.log('FAIL', j.id, e.message);
    }
    await page.close();
  }
  await browser.close();
  Object.values(servers).forEach(s => s.close());
})();
