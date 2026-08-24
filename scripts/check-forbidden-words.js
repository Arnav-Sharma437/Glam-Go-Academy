const fs = require("fs");
const path = require("path");

const FORBIDDEN_WORDS_REGEX = /\b(botox|botulinum|bocouture|azzalure|dysport|xeomin|anti-wrinkle|wrinkle-relaxing|brotox|baby\s+botox|tox|toxin|hyaluronidase)\b|profitable\s+cosmetic\s+styling\s+business|London['’]s\s+(leading|premier)/gi;

const IGNORED_PATHS = [
  "node_modules",
  ".next",
  "out",
  "build",
  "dist"
];

const SCAN_EXTENSIONS = [
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".json",
  ".css",
  ".md"
];

function scanDirectory(dir, violations = []) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      if (!IGNORED_PATHS.some(ignored => file === ignored || fullPath.includes(ignored))) {
        scanDirectory(fullPath, violations);
      }
    } else {
      const ext = path.extname(file);
      if (SCAN_EXTENSIONS.includes(ext)) {
        // Skip scanning check-forbidden-words.js itself
        if (file === "check-forbidden-words.js") continue;
        
        const content = fs.readFileSync(fullPath, "utf8");
        const lines = content.split(/\r?\n/);
        
        lines.forEach((line, index) => {
          let match;
          // Reset lastIndex for safety
          FORBIDDEN_WORDS_REGEX.lastIndex = 0;
          
          while ((match = FORBIDDEN_WORDS_REGEX.exec(line)) !== null) {
            violations.push({
              file: fullPath,
              lineNumber: index + 1,
              matchedWord: match[0],
              lineContent: line.trim()
            });
          }
        });
      }
    }
  }
  return violations;
}

const srcDir = path.join(__dirname, "../src");
console.log(`Starting build validation: scanning ${srcDir} for forbidden prescription-medicine words...`);

const violations = scanDirectory(srcDir);

if (violations.length > 0) {
  console.error("\n❌ BUILD FAILED: Found forbidden prescription-medicine words inside 'src/':");
  violations.forEach(v => {
    console.error(`  - File: ${v.file}:${v.lineNumber}`);
    console.error(`    Found word: "${v.matchedWord}"`);
    console.error(`    Code: "${v.lineContent}"\n`);
  });
  console.error("Please remove or rewrite these clinical prescription terms to compile successfully.\n");
  process.exit(1);
} else {
  console.log("✅ Validation passed: No forbidden prescription-medicine words found in 'src/'.\n");
  process.exit(0);
}
