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

// Security: Sanitize YAML frontmatter values to prevent injection attacks
function sanitizeYaml(value) {
  if (!value) return '';
  // Escape special YAML characters and newlines to prevent injection
  return value
    .replace(/\\/g, '\\\\')   // Escape backslashes first
    .replace(/"/g, '\\"')     // Escape double quotes
    .replace(/\n/g, '\\n')    // Escape newlines
    .replace(/\r/g, '\\r')    // Escape carriage returns
    .replace(/\t/g, '\\t')    // Escape tabs
    .replace(/[<>]/g, '');    // Remove angle brackets (potential XSS)
}

// Security: Sanitize markdown content to prevent content injection
function sanitizeMarkdown(value) {
  if (!value) return '';
  // Remove potentially dangerous characters while preserving readability
  return value
    .replace(/[<>]/g, '')     // Remove angle brackets (potential HTML)
    .replace(/\n{3,}/g, '\n\n'); // Limit consecutive newlines
}

fs.mkdirSync(OUT, { recursive: true });

for (const line of csv) {
  const r = rowToObj(line);
  const baseSlug = r.sku || r.title || 'product';
  const slug = baseSlug.toLowerCase().replace(/[^a-z0-9]+/g,'-');
  const file = path.join(OUT, `${slug}.mdx`);
  const mdx = `---
title: "${sanitizeYaml(r.title || '')}"
vendor: "${sanitizeYaml(r.vendor || '')}"
sku: "${sanitizeYaml(r.sku || slug)}"
primary_category: "${sanitizeYaml(r.primary_category || '')}"
secondary_categories: ${sanitizeYaml(r.secondary_categories || '[]')}
substrates: ${sanitizeYaml(r.substrates || '[]')}
applications: ${sanitizeYaml(r.applications || '[]')}
coverage_rate: "${sanitizeYaml(r.coverage_rate || '')}"
packaging: "${sanitizeYaml(r.packaging || '')}"
links:
  tds: "${sanitizeYaml(r.tds || '')}"
  sds: "${sanitizeYaml(r.sds || '')}"
last_verified: "${sanitizeYaml(r.last_verified || '')}"
---

## Summary
Add a concise, sales-friendly summary here.

## Key Specs (fast read)
- Bullet the key decision info here.

## Coverage & Yield
${sanitizeMarkdown(r.coverage_rate || '')}

**Last reviewed:** ${sanitizeMarkdown(r.last_verified || '')} • _Internal use only._
`;
  fs.writeFileSync(file, mdx);
  console.log('Wrote', file);
}
