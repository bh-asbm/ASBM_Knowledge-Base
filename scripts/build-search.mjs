import { execSync } from 'node:child_process';
try {
  execSync('npx pagefind --site build', { stdio: 'inherit' });
} catch (e) {
  console.error('Pagefind build failed (ok if not installed):', e.message);
}
