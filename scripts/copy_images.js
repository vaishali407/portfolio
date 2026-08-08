const fs = require('fs');
const path = require('path');

const publicImagesDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

const sourceDir = 'C:\\Users\\vaish\\.gemini\\antigravity-ide\\brain\\11a4fa73-c090-4de1-b364-3da8f4f92cc8';

const files = fs.readdirSync(sourceDir);

const mappings = [
  { prefix: 'voxa_preview_', dest: 'voxa_preview.png' },
  { prefix: 'smart_meeting_preview_', dest: 'smart_meeting_preview.png' },
  { prefix: 'deepfake_detection_preview_', dest: 'deepfake_detection_preview.png' },
  { prefix: 'vitronix_design_preview_', dest: 'vitronix_design_preview.png' }
];

mappings.forEach(mapping => {
  const match = files.find(f => f.startsWith(mapping.prefix) && f.endsWith('.png'));
  if (match) {
    const srcPath = path.join(sourceDir, match);
    const destPath = path.join(publicImagesDir, mapping.dest);
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${match} to ${mapping.dest}`);
  }
});
