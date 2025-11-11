const fs = require('fs');
const path = require('path');

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

const storybookStatic = path.join(__dirname, '../../storybook-static');
const showcasePublic = path.join(__dirname, '../public/storybook');

if (fs.existsSync(storybookStatic)) {
  copyDir(storybookStatic, showcasePublic);
  console.log('✅ Storybook copied to showcase/public/storybook');
} else {
  console.error('❌ storybook-static directory not found. Run "npm run build:storybook" first.');
  process.exit(1);
}

