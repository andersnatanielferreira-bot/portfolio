// Verifica o portfólio: screenshots de lista, hover, grelha, menu e página de projeto + erros de consola.
const path = require('path');
const fs = require('fs');
const http = require('http');
const puppeteer = require(path.join(__dirname, '..', '..', 'edicao-video', 'node_modules', 'puppeteer-core'));
const ROOT = path.resolve(__dirname, '..', '..');
const OUT = process.argv[2] || path.join(__dirname, 'out');
fs.mkdirSync(OUT, { recursive: true });
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.jpg': 'image/jpeg', '.png': 'image/png', '.mp4': 'video/mp4', '.svg': 'image/svg+xml' };
const srv = http.createServer((q, r) => {
  const f = path.join(ROOT, decodeURIComponent(q.url.split('?')[0]));
  if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) { r.writeHead(404); return r.end(); }
  r.writeHead(200, { 'Content-Type': MIME[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(r);
}).listen(8810);
const exe = ['C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', 'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe', 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'].find(fs.existsSync);
const wait = ms => new Promise(r => setTimeout(r, ms));
(async () => {
  const b = await puppeteer.launch({ executablePath: exe, headless: 'new' });
  const p = await b.newPage();
  p.on('console', m => m.type() === 'error' && console.log('CONSOLE:', m.text()));
  p.on('pageerror', e => console.log('PAGEERROR:', e.message));
  await p.setViewport({ width: 1440, height: 900 });
  await p.goto('http://127.0.0.1:8810/meu-portfolio/index.html', { waitUntil: 'networkidle2' });
  await wait(1000); await p.screenshot({ path: path.join(OUT, '0-loader.jpg'), type: 'jpeg', quality: 80 });
  await wait(3500); await p.screenshot({ path: path.join(OUT, '1-lista.jpg'), type: 'jpeg', quality: 80 });
  const r = await p.$('#row-lucro-certo'); const bb = await r.boundingBox();
  await p.mouse.move(bb.x + bb.width / 2, bb.y + bb.height / 2, { steps: 8 }); await wait(1200);
  await p.screenshot({ path: path.join(OUT, '2-hover.jpg'), type: 'jpeg', quality: 80 });
  await p.mouse.move(5, 450); await p.click('#sw-grid'); await wait(1800);
  await p.screenshot({ path: path.join(OUT, '3-grelha.jpg'), type: 'jpeg', quality: 80 });
  await p.click('#sw-list'); await wait(800);
  await p.click('#menu-btn'); await wait(1400);
  await p.screenshot({ path: path.join(OUT, '4-menu.jpg'), type: 'jpeg', quality: 80 });
  await p.click('#menu-close'); await wait(600);
  await p.evaluate(() => { location.hash = '#/p/bandi'; }); await wait(1800);
  await p.screenshot({ path: path.join(OUT, '5-bandi.jpg'), type: 'jpeg', quality: 80 });
  await p.evaluate(() => { document.querySelector('#project-scroll').scrollTop = 1500; }); await wait(600);
  await p.screenshot({ path: path.join(OUT, '6-bandi-body.jpg'), type: 'jpeg', quality: 80 });
  await p.evaluate(() => { location.hash = '#sobre'; }); await wait(1600);
  await p.screenshot({ path: path.join(OUT, '7-sobre.jpg'), type: 'jpeg', quality: 80 });
  await p.setViewport({ width: 390, height: 844, isMobile: true });
  await p.evaluate(() => { location.hash = ''; }); await wait(1500);
  await p.screenshot({ path: path.join(OUT, '8-mobile.jpg'), type: 'jpeg', quality: 80 });
  await b.close(); srv.close(); console.log('done');
})();
