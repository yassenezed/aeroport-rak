// Calcule la date de dernière modification de chaque fichier de contenu
// (src/copy/{pages,blog,hotels}/*.ts) d'après l'historique git, et l'écrit
// dans src/data/lastmod.json, utilisé par le sitemap (<lastmod>).
// Sans historique git complet (clone superficiel chez l'hébergeur), le
// fichier déjà commité est conservé tel quel.
import { execSync } from 'node:child_process';
import { readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUT = 'src/data/lastmod.json';
const sh = (cmd) => execSync(cmd, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();

try {
  if (sh('git rev-parse --is-shallow-repository') !== 'false') throw new Error('shallow');
} catch {
  console.log('[lastmod] pas d\'historique git complet : src/data/lastmod.json conservé');
  process.exit(0);
}

const dates = {};
for (const dir of ['pages', 'blog', 'hotels']) {
  const base = join('src/copy', dir);
  for (const file of readdirSync(base).filter((f) => f.endsWith('.ts')).sort()) {
    const rel = join(base, file);
    let d = '';
    // Fichier modifié mais pas encore commité : date du jour.
    try { d = sh(`git status --porcelain -- "${rel}"`) ? '' : sh(`git log -1 --format=%cs -- "${rel}"`); } catch {}
    dates[`${dir}/${file.replace(/\.ts$/, '')}`] = d || new Date().toISOString().slice(0, 10);
  }
}
writeFileSync(OUT, JSON.stringify(dates, null, 2) + '\n');
console.log(`[lastmod] ${Object.keys(dates).length} dates écrites dans ${OUT}`);
