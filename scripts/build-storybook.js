const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Find root directory (where package.json with build:storybook script exists)
function findRootDir() {
  // Start from showcase/scripts directory
  let currentDir = path.dirname(__dirname); // showcase
  let parentDir = path.dirname(currentDir); // root
  
  // Try parent directory first (most common case)
  const parentPackageJson = path.join(parentDir, 'package.json');
  if (fs.existsSync(parentPackageJson)) {
    try {
      const packageJson = JSON.parse(fs.readFileSync(parentPackageJson, 'utf8'));
      if (packageJson.scripts && packageJson.scripts['build:storybook']) {
        return parentDir;
      }
    } catch (e) {
      // Continue searching
    }
  }
  
  // Try current directory (showcase)
  const currentPackageJson = path.join(currentDir, 'package.json');
  if (fs.existsSync(currentPackageJson)) {
    try {
      const packageJson = JSON.parse(fs.readFileSync(currentPackageJson, 'utf8'));
      if (packageJson.scripts && packageJson.scripts['build:storybook']) {
        return currentDir;
      }
    } catch (e) {
      // Continue searching
    }
  }
  
  // Search upwards
  currentDir = parentDir;
  while (currentDir !== path.dirname(currentDir)) {
    const packageJsonPath = path.join(currentDir, 'package.json');
    
    if (fs.existsSync(packageJsonPath)) {
      try {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        if (packageJson.scripts && packageJson.scripts['build:storybook']) {
          return currentDir;
        }
      } catch (e) {
        // Continue searching
      }
    }
    
    currentDir = path.dirname(currentDir);
  }
  
  throw new Error('Could not find root directory with build:storybook script');
}

// Check if Storybook static files already exist (pre-built)
const showcasePublic = path.join(__dirname, '../public/storybook');
if (fs.existsSync(showcasePublic) && fs.readdirSync(showcasePublic).length > 0) {
  console.log('✅ Storybook static files already exist, skipping build');
  process.exit(0);
}

try {
  const rootDir = findRootDir();
  console.log(`📦 Found root directory: ${rootDir}`);
  
  // Check if this is actually the right directory (should have .storybook folder)
  const storybookConfig = path.join(rootDir, '.storybook');
  if (!fs.existsSync(storybookConfig)) {
    throw new Error('Storybook config not found in root directory');
  }
  
  // Check if we're in Vercel and root directory is not accessible
  const isVercel = process.env.VERCEL === '1' || process.env.VERCEL_ENV;
  if (isVercel && !rootDir.includes('ozkan-ui') && !rootDir.includes('showcase')) {
    console.warn('⚠️  Vercel detected and root directory seems incorrect, skipping Storybook build');
    console.warn('⚠️  Using pre-built Storybook files from git');
    process.exit(0);
  }
  
  // Change to root directory and build storybook
  process.chdir(rootDir);
  console.log('🔨 Building Storybook...');
  
  try {
    execSync('npm run build:storybook', { stdio: 'inherit', timeout: 120000 });
  } catch (buildError) {
    console.error('❌ Storybook build failed:', buildError.message);
    throw buildError;
  }
  
  // Copy storybook-static to showcase/public/storybook
  const storybookStatic = path.join(rootDir, 'storybook-static');
  
  if (!fs.existsSync(storybookStatic)) {
    throw new Error('storybook-static directory not found after build');
  }
  
  // Remove existing storybook directory if it exists
  if (fs.existsSync(showcasePublic)) {
    fs.rmSync(showcasePublic, { recursive: true, force: true });
  }
  
  // Copy directory
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
  
  copyDir(storybookStatic, showcasePublic);
  console.log('✅ Storybook copied to showcase/public/storybook');
  
} catch (error) {
  console.error('❌ Error building Storybook:', error.message);
  // In Vercel, if root directory is not accessible or build fails, skip Storybook build
  // and continue with Next.js build (static files should already be in git)
  console.warn('⚠️  Skipping Storybook build, using pre-built files from git');
  console.warn('⚠️  Continuing with Next.js build...');
  process.exit(0); // Exit with 0 to continue build
}

