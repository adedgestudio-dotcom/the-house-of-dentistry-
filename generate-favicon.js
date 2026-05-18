const fs = require("fs");
const path = require("path");

// Simple SVG to create a green circle with white tooth emoji
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="6" fill="#10B981"/>
  <text x="16" y="24" font-size="20" text-anchor="middle" fill="white">🦷</text>
</svg>`;

// Write to app directory
fs.writeFileSync(path.join(__dirname, "app", "icon.svg"), svg);
console.log("✅ Favicon created successfully!");
