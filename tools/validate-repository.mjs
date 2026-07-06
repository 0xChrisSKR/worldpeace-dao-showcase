import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const requiredRoot = [
  'README.md',
  'LICENSE',
  '.gitignore',
  '.github/workflows/ci.yml',
  'Dockerfile',
  'docker-compose.yml',
  '.env.example',
  'CONTRIBUTING.md',
  '.github/CODEOWNERS',
  '.github/pull_request_template.md',
  '.github/ISSUE_TEMPLATE/engineering-review.md'
];
const requiredDocs = [
  'API_EXAMPLES.md',
  'FOLDER_STRUCTURE.md',
  'ENGINEERING_NOTES.md',
  'PERFORMANCE.md',
  'SECURITY.md',
  'FUTURE_WORK.md',
  'CAREER_MAPPING.md'
];
const requiredAssets = [
  'system-overview.png',
  'architecture.png',
  'runtime.png',
  'deployment.png'
];

let failed = false;
function requireFile(relativePath) {
  const full = path.join(root, relativePath);
  if (!fs.existsSync(full)) {
    console.error(`Missing required file: ${relativePath}`);
    failed = true;
  }
}
for (const file of requiredRoot) requireFile(file);
for (const file of requiredDocs) requireFile(path.join('docs', file));
for (const file of requiredAssets) requireFile(path.join('assets', file));

const forbiddenFileNames = ['.env', 'id_rsa', 'id_ed25519'];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    const relative = path.relative(root, full).replace(/\\/g, '/');
    if (relative.startsWith('.git/')) continue;
    if (entry.isDirectory()) {
      walk(full);
      continue;
    }
    if (forbiddenFileNames.includes(entry.name)) {
      console.error(`Forbidden file present: ${relative}`);
      failed = true;
    }
    if (/\.(md|txt|yml|yaml|json|js|mjs|ts|tsx|env|example|gitignore|dockerignore)$/i.test(entry.name) || entry.name === 'Dockerfile') {
      const text = fs.readFileSync(full, 'utf8');
      const forbidden = [
        /C:[\\/]/i,
        /BEGIN (RSA|OPENSSH|PRIVATE) KEY/i,
        /private[_-]?key\s*[:=]/i,
        /secret\s*[:=]\s*['"][A-Za-z0-9_.-]{12,}['"]/i,
        /api[_-]?key\s*[:=]\s*['"][A-Za-z0-9_.-]{12,}['"]/i,
        /token\s*[:=]\s*['"][A-Za-z0-9_.-]{20,}['"]/i
      ];
      for (const pattern of forbidden) {
        if (pattern.test(text)) {
          console.error(`Forbidden pattern ${pattern} in ${relative}`);
          failed = true;
        }
      }
    }
  }
}
walk(root);

if (failed) process.exit(1);
console.log('Repository validation passed.');
