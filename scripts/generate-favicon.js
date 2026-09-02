const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicons() {
  const logoPath = path.join(__dirname, '../public/images/logo/Glam-Go-logo.webp');
  
  if (!fs.existsSync(logoPath)) {
    console.error('Logo not found at:', logoPath);
    process.exit(1);
  }

  console.log('Extracting G emblem from:', logoPath);

  // Exact coordinates of the G emblem
  const extractRegion = {
    left: 103,
    top: 102,
    width: 319,
    height: 305
  };

  // Crop the G emblem
  const croppedBuffer = await sharp(logoPath)
    .extract(extractRegion)
    .toBuffer();

  // Create a high-res 512x512 transparent canvas with the G emblem centered
  const icon512Buffer = await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
  .composite([
    {
      input: await sharp(croppedBuffer)
        .resize(440, 440, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .toBuffer(),
      gravity: 'center'
    }
  ])
  .png()
  .toBuffer();

  // 1. Output src/app/icon.png (Next.js automatically serves this as standard icon)
  const appIconPngPath = path.join(__dirname, '../src/app/icon.png');
  fs.writeFileSync(appIconPngPath, icon512Buffer);
  console.log('Created:', appIconPngPath);

  // 2. Output src/app/apple-icon.png (180x180 for iOS)
  const appleIcon180Buffer = await sharp(icon512Buffer)
    .resize(180, 180)
    .png()
    .toBuffer();
  const appleIconPath = path.join(__dirname, '../src/app/apple-icon.png');
  fs.writeFileSync(appleIconPath, appleIcon180Buffer);
  console.log('Created:', appleIconPath);

  // 3. Output 32x32 and 48x48 icon for favicon.ico
  const icon32Buffer = await sharp(icon512Buffer)
    .resize(32, 32)
    .png()
    .toBuffer();

  const appFaviconPath = path.join(__dirname, '../src/app/favicon.ico');
  fs.writeFileSync(appFaviconPath, icon32Buffer);
  console.log('Created:', appFaviconPath);

  const publicFaviconPath = path.join(__dirname, '../public/favicon.ico');
  fs.writeFileSync(publicFaviconPath, icon32Buffer);
  console.log('Created:', publicFaviconPath);

  // 4. Output public/favicon-32x32.png and public/favicon-16x16.png
  const icon16Buffer = await sharp(icon512Buffer)
    .resize(16, 16)
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(__dirname, '../public/favicon-32x32.png'), icon32Buffer);
  fs.writeFileSync(path.join(__dirname, '../public/favicon-16x16.png'), icon16Buffer);

  // 5. Output public/images/logo/icon-g.png
  const logoIconGPath = path.join(__dirname, '../public/images/logo/icon-g.png');
  fs.writeFileSync(logoIconGPath, icon512Buffer);
  console.log('Created:', logoIconGPath);

  console.log('All favicon and icon assets generated successfully from G logo emblem!');
}

generateFavicons().catch(err => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});
