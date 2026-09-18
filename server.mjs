// Production static server for AirportAGA (Astro static build → dist/).
// Zero-dependency: serves the prebuilt dist/ folder, binds to Hostinger's PORT.
// Run:  npm run build  then  npm start
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, normalize, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const DIST = fileURLToPath(new URL('./dist', import.meta.url));
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
};

async function fileAt(p) {
  try {
    const s = await stat(p);
    return s.isFile() ? p : null;
  } catch {
    return null;
  }
}

const server = createServer(async (req, res) => {
  try {
    const urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
    const rel = normalize(urlPath).replace(/^(\.\.[/\\])+/, '');
    const fsPath = join(DIST, rel);
    if (!fsPath.startsWith(DIST)) {
      res.writeHead(403); return res.end('Forbidden');
    }

    let file = null;
    if (extname(rel)) {
      file = await fileAt(fsPath);
    } else if (urlPath.endsWith('/')) {
      file = await fileAt(join(fsPath, 'index.html'));
    } else {
      // trailingSlash: 'always' — 301 /foo → /foo/ when the page exists (canonical)
      const idx = await fileAt(join(fsPath, 'index.html'));
      if (idx) { res.writeHead(301, { Location: urlPath + '/' }); return res.end(); }
    }

    if (file) {
      const ext = extname(file);
      const body = await readFile(file);
      const cache = file.endsWith('.html')
        ? 'public, max-age=0, must-revalidate'
        : (file.includes('/_astro/') || /\.(png|jpe?g|webp|avif|svg|woff2?|css|js|mjs)$/.test(file))
          ? 'public, max-age=31536000, immutable'
          : 'public, max-age=3600';
      res.writeHead(200, {
        'Content-Type': TYPES[ext] || 'application/octet-stream',
        'Cache-Control': cache,
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
      });
      return res.end(req.method === 'HEAD' ? undefined : body);
    }

    const notFound = await fileAt(join(DIST, '404.html'));
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    return res.end(notFound ? await readFile(notFound) : 'Not found');
  } catch {
    res.writeHead(500); res.end('Server error');
  }
});

server.listen(PORT, HOST, () => console.log(`AirportAGA listening on http://${HOST}:${PORT}`));
