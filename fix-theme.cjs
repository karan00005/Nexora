const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // Light -> Dark Replacements
    content = content.replace(/background: 'white'/g, "background: 'rgba(20,20,25,0.8)'");
    content = content.replace(/backgroundColor: 'white'/g, "backgroundColor: 'rgba(20,20,25,0.8)'");
    content = content.replace(/background: '#f8fafc'/g, "background: '#050505'");
    content = content.replace(/background: '#f1f5f9'/g, "background: 'rgba(255,255,255,0.03)'");
    content = content.replace(/color: '#0f172a'/g, "color: 'white'");
    content = content.replace(/color: '#000'/g, "color: 'white'");
    content = content.replace(/color: 'black'/g, "color: 'white'");
    content = content.replace(/color: '#475569'/g, "color: '#d1d5db'");
    content = content.replace(/color: '#64748b'/g, "color: '#9ca3af'");
    content = content.replace(/color: '#334155'/g, "color: '#e5e7eb'");
    content = content.replace(/background: '#eff6ff'/g, "background: 'rgba(109, 40, 217, 0.1)'");
    content = content.replace(/background: '#dbeafe'/g, "background: 'rgba(109, 40, 217, 0.2)'");
    content = content.replace(/color: '#2563eb'/g, "color: '#a78bfa'");

    // border replacements
    content = content.replace(/border: '1px solid #e2e8f0'/g, "border: '1px solid rgba(255,255,255,0.05)'");
    content = content.replace(/borderBottom: '1px solid #e2e8f0'/g, "borderBottom: '1px solid rgba(255,255,255,0.05)'");
    content = content.replace(/borderRight: '1px solid #e2e8f0'/g, "borderRight: '1px solid rgba(255,255,255,0.05)'");
    content = content.replace(/borderTop: '1px solid #e2e8f0'/g, "borderTop: '1px solid rgba(255,255,255,0.05)'");
    content = content.replace(/borderColor: '#e2e8f0'/g, "borderColor: 'rgba(255,255,255,0.05)'");

    // Shadows
    content = content.replace(/boxShadow: '0 24px 80px rgba\(0,0,0,0.08\)'/g, "boxShadow: '0 24px 80px rgba(0,0,0,0.4)'");
    content = content.replace(/boxShadow: '0 8px 40px rgba\(0,0,0,0.06\)'/g, "boxShadow: '0 8px 40px rgba(0,0,0,0.4)'");
    content = content.replace(/boxShadow: '0 4px 12px rgba\(0,0,0,0.06\)'/g, "boxShadow: '0 4px 12px rgba(0,0,0,0.3)'");

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
    }
}

function walkDir(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (fullPath.endsWith('.tsx') && !fullPath.includes('LandingPage.tsx') && !fullPath.includes('LoginPage.tsx') && !fullPath.includes('Navbar.tsx')) {
            replaceInFile(fullPath);
        }
    }
}

walkDir('src/pages');
walkDir('src/components');
console.log('All files updated to dark theme.');
