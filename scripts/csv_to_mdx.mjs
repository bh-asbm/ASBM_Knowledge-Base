import fs from 'node:fs';
import path from 'node:path';

const IN = process.argv[2];
const OUT = process.argv[3] || 'docs/vendors/euclid-chemical/products';
if (!IN) {
  console.error('Usage: node scripts/csv_to_mdx.mjs input.csv [outputDir]');
  process.exit(1);
}
const csv = fs.readFileSync(IN, 'utf8').split(/\r?\n/).filter(Boolean);
const headers = csv.shift().split(',');

// Helper: very light CSV parsing (no embedded commas handling)
function rowToObj(row) {
  const cols = row.split(',');
  const obj = {};
  headers.forEach((h, i) => obj[h.trim()] = (cols[i] || '').trim());
  return obj;
}

fs.mkdirSync(OUT, { recursive: true });

for (const line of csv) {
  const r = rowToObj(line);
  const baseSlug = r.sku || r.title || 'product';
  const slug = baseSlug.toLowerCase().replace(/[^a-z0-9]+/g,'-');
  const file = path.join(OUT, `${slug}.mdx`);
  const mdx = `---
title: ${r.title || ''}
vendor: ${r.vendor || ''}
sku: ${r.sku || slug}
primary_category: ${r.primary_category || ''}
secondary_categories: ${r.secondary_categories || '[]'}
substrates: ${r.substrates || '[]'}
applications: ${r.applications || '[]'}
coverage_rate: "${r.coverage_rate || ''}"
packaging: "${r.packaging || ''}"
links:
  tds: "${r.tds || ''}"
  sds: "${r.sds || ''}"
last_verified: "${r.last_verified || ''}"
---

## Summary
Add a concise, sales-friendly summary here.

## Key Specs (fast read)
- Bullet the key decision info here.

## Coverage & Yield
${r.coverage_rate || ''}

**Last reviewed:** ${r.last_verified || ''} • _Internal use only._
`;
  fs.writeFileSync(file, mdx);
  console.log('Wrote', file);
}
