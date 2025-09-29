import { readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';

const docsDir = 'docs';
const THRESHOLD_DAYS = 180;
const now = Date.now();
let stale = [];

function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
      const fm = readFileSync(full, 'utf8').match(/(^|\n)last_verified:\s*["']?([\d-]+)["']?/);
      if (fm?.[2]) {
        const age = (now - new Date(fm[2]).getTime()) / (1000*60*60*24);
        if (age > THRESHOLD_DAYS) stale.push({ file: full, days: Math.round(age) });
      }
    }
  }
}
walk(docsDir);

if (stale.length) {
  console.log('Stale pages (>180 days):\n' + stale.map(s => `${s.file} (${s.days}d)`).join('\n'));
  process.exit(1);
} else {
  console.log('All pages fresh enough.');
}
