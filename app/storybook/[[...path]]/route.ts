import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(
  request: NextRequest,
  { params }: { params: { path?: string[] } }
) {
  const filePath = params.path?.join('/') || 'index.html';
  
  // Security: Prevent directory traversal
  if (filePath.includes('..')) {
    return new NextResponse('Not Found', { status: 404 });
  }

  const storybookPath = path.join(process.cwd(), 'public', 'storybook', filePath);
  
  // If path is a directory or doesn't exist, serve index.html
  let finalPath = storybookPath;
  if (!fs.existsSync(storybookPath)) {
    finalPath = path.join(process.cwd(), 'public', 'storybook', 'index.html');
  } else if (fs.statSync(storybookPath).isDirectory()) {
    finalPath = path.join(storybookPath, 'index.html');
    if (!fs.existsSync(finalPath)) {
      finalPath = path.join(process.cwd(), 'public', 'storybook', 'index.html');
    }
  }

  if (!fs.existsSync(finalPath)) {
    return new NextResponse('Not Found', { status: 404 });
  }

  const fileContent = fs.readFileSync(finalPath);
  const ext = path.extname(finalPath);

  // Set appropriate content type
  const contentType = getContentType(ext);
  
  return new NextResponse(fileContent, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}

function getContentType(ext: string): string {
  const types: Record<string, string> = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.mjs': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.ico': 'image/x-icon',
  };
  
  return types[ext] || 'application/octet-stream';
}

