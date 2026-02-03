
// ===================================================================================
// APP STATE
// ===================================================================================
const APP_VERSION = "0.0.7.0-beta";

const appState = { 
    version: null, 
    language: 'en', 
    advancedMode: false,
    config: {}, 
    calcParams: {
        AXIS1: { motor: 200, micro: 32, gr1: 4, gr2: 144 },
        AXIS2: { motor: 200, micro: 32, gr1: 4, gr2: 144 },
        SLEW_RATE: 2.5
    },
    calcModes: {
        AXIS1: { motor: 'std', micro: 'std', gr1: 'free', gr2: 'free' },
        AXIS2: { motor: 'std', micro: 'std', gr1: 'free', gr2: 'free' }
    },
    activeCalcField: null,
    activeCategory: null,
    i18n: {}, 
    constellations: [],
    bgStars: [] 
};

// ===================================================================================
// DOM ELEMENTS
// ===================================================================================
const dom = {
    main: document.querySelector('main'),
    versionSelector: document.getElementById('version-selector'),
    configWizard: document.getElementById('config-wizard'),
    appFooter: document.getElementById('app-footer'),
    constellationCanvas: document.getElementById('constellation-canvas'),
    wikiButton: document.getElementById('wiki-button'),
    wikiSection: document.getElementById('wiki-section'),
    wikiNav: document.getElementById('wiki-nav'),
    wikiArticle: document.getElementById('wiki-article'),
    wikiBackButton: document.getElementById('wiki-back-button'),
    languageSelector: document.getElementById('language-selector'),
    
    advancedModeWrapper: document.getElementById('advanced-mode-wrapper'),
    advancedModeToggle: document.getElementById('advanced-mode-toggle'),
    
    wizardCategories: document.getElementById('wizard-categories'),
    stepContent: document.getElementById('step-content'),
    currentCategoryTitle: document.getElementById('current-category-title'),
    prevBtn: document.getElementById('prev-btn'),
    nextBtn: document.getElementById('next-btn'),
    wizardHomeBtn: document.getElementById('wizard-home-btn'),

    infoModal: document.getElementById('info-modal'),
    infoModalTitle: document.getElementById('modal-title'),
    infoModalText: document.getElementById('modal-text'),
    beltCalcModal: document.getElementById('belt-calc-modal'),
    beltResultText: document.getElementById('belt-result-text'),
    loadingOverlay: document.getElementById('loading-overlay')
};

// ===================================================================================
// UI RENDERING
// ===================================================================================
function applyLocalization() {
    const lang = appState.language;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-lang-key]').forEach(el => { 
        const key = el.dataset.langKey; 
        if (appState.i18n[key]) el.innerHTML = appState.i18n[key]; 
    });
    if (!dom.configWizard.classList.contains('hidden')) renderCategory(appState.activeCategory);
}

function handleVersionSelect(selectedVersion) {
    appState.version = selectedVersion;
    appState.config = {}; 
    
    // Initialize defaults from schema
    const schema = SCHEMAS[selectedVersion];
    for(const cat in schema) {
        if(schema[cat].fields) {
            for(const key in schema[cat].fields) {
                appState.config[key] = schema[cat].fields[key].defaultValue;
            }
        }
    }

    dom.versionSelector.classList.add('hidden');
    dom.advancedModeWrapper.style.display = 'inline-flex'; // Show toggle
    dom.configWizard.classList.remove('hidden');
    
    // Set initial category
    const categories = Object.keys(schema);
    appState.activeCategory = categories[0];
    renderWizardNav();
    renderCategory(appState.activeCategory);
}

function renderWizardNav() {
    dom.wizardCategories.innerHTML = '';
    const schema = SCHEMAS[appState.version];
    if (!schema) return;

    Object.keys(schema).forEach(catKey => {
        const catDef = schema[catKey];
        // Only show if visible in basic mode OR advanced mode is on
        if (appState.advancedMode || catDef.basic) {
            const btn = document.createElement('button');
            btn.className = `category-btn ${appState.activeCategory === catKey ? 'active' : ''}`;
            btn.textContent = appState.i18n[catDef.titleKey] || catKey;
            btn.onclick = () => {
                appState.activeCategory = catKey;
                renderWizardNav();
                renderCategory(catKey);
            };
            dom.wizardCategories.appendChild(btn);
        }
    });
}

function renderCategory(catKey) {
    dom.stepContent.innerHTML = '';
    const schema = SCHEMAS[appState.version];
    const catDef = schema[catKey];
    
    dom.currentCategoryTitle.textContent = appState.i18n[catDef.titleKey] || catKey;

    if (catDef.special === '_summary') {
        const summaryText = document.createElement('p');
        summaryText.innerHTML = appState.i18n.summaryText;
        dom.stepContent.appendChild(summaryText);
        
        const previewArea = document.createElement('textarea');
        previewArea.id = 'config-preview';
        previewArea.readOnly = true;
        previewArea.value = appState.i18n.summaryWaiting; 
        dom.stepContent.appendChild(previewArea);
        
        // Auto-generate for preview
        setTimeout(generateConfigFile, 100);
        
        // Change Next button to Download
        dom.nextBtn.textContent = appState.i18n.downloadButton;
        dom.nextBtn.onclick = () => {
            showLoading();
            setTimeout(() => { generateConfigFile(); downloadConfigFile(); hideLoading(); }, 500);
        };
    } 
    else if (catDef.special === 'AXIS_GEARING') {
        dom.stepContent.appendChild(renderAxisCalculatorTable());
        restoreNavButtons();
    }
    else if (catDef.fields) {
        const fragment = document.createDocumentFragment();
        for (const key in catDef.fields) {
            const fieldDef = catDef.fields[key];
            // Condition check: Show if advanced OR (basic AND marked as basic)
            if (appState.advancedMode || fieldDef.basic) {
                // Dependency Check
                if (checkDependency(fieldDef)) {
                    fragment.appendChild(createFormControl(key, fieldDef));
                }
            }
        }
        dom.stepContent.appendChild(fragment);
        restoreNavButtons();
    }
}

function checkDependency(fieldDef) {
    if (!fieldDef.condition) return true;
    const { key, val, invert } = fieldDef.condition;
    const currentVal = appState.config[key];
    if (invert) return currentVal !== val;
    return currentVal === val;
}

function restoreNavButtons() {
    dom.nextBtn.textContent = appState.i18n.wizardNext || "Next";
    dom.nextBtn.onclick = () => navigateWizard(1);
    dom.prevBtn.onclick = () => navigateWizard(-1);
}

function navigateWizard(dir) {
    const schema = SCHEMAS[appState.version];
    const categories = Object.keys(schema).filter(k => appState.advancedMode || schema[k].basic);
    const currentIndex = categories.indexOf(appState.activeCategory);
    const nextIndex = currentIndex + dir;
    
    if (nextIndex >= 0 && nextIndex < categories.length) {
        appState.activeCategory = categories[nextIndex];
        renderWizardNav();
        renderCategory(appState.activeCategory);
    }
}

function createFormControl(key, def) {
    if (appState.config[key] === undefined) appState.config[key] = def.defaultValue;
    
    const group = document.createElement('div');
    group.className = 'form-group';
    const label = document.createElement('label');
    label.htmlFor = key;
    label.textContent = appState.i18n[def.labelKey] || key;
    
    const codeTag = document.createElement('code');
    codeTag.textContent = `(${key})`;
    label.appendChild(codeTag);

    const infoIcon = document.createElement('span');
    infoIcon.className = 'info-icon';
    infoIcon.textContent = '?';
    infoIcon.dataset.key = key;
    label.appendChild(infoIcon);
    group.appendChild(label);

    if (def.type === 'select') {
        const select = document.createElement('select');
        select.id = key; select.name = key;
        def.options.forEach(opt => {
            const option = document.createElement('option');
            option.value = opt; option.textContent = opt;
            if (opt == appState.config[key]) option.selected = true;
            select.appendChild(option);
        });
        select.addEventListener('change', (e) => {
            appState.config[key] = e.target.value;
            // Re-render to handle dependencies
            renderCategory(appState.activeCategory);
        });
        group.appendChild(select);
    } else if (def.type === 'number') {
        const input = document.createElement('input');
        input.type = 'number';
        input.id = key; input.name = key;
        input.value = appState.config[key];
        input.addEventListener('change', (e) => appState.config[key] = e.target.value);
        group.appendChild(input);
    }
    return group;
}

// ===================================================================================
// GENERATOR LOGIC
// ===================================================================================
function generateConfigFile() {
    if (!appState.version) return;
    const rawTemplate = appState.version === 'classic' ? TEMPLATE_ONSTEP_CLASSIC_BASE : TEMPLATE_ONSTEPX_BASE;
    const previewArea = document.getElementById('config-preview');
    if (!previewArea || !rawTemplate) return;

    const comments = CONFIG_COMMENTS[appState.language] || {};
    const lines = rawTemplate.split('\n');
    
    const processedLines = lines.map(line => {
        const defineMatch = line.match(/^(\s*#define\s+)(\w+)(\s+)(.*?)(\s*)(\/\/.*)?$/);
        if (defineMatch) {
            const prefix = defineMatch[1];
            const key = defineMatch[2];
            const spacing1 = defineMatch[3];
            let value = defineMatch[4];
            const spacing2 = defineMatch[5];
            let comment = defineMatch[6] || "";

            if (appState.config.hasOwnProperty(key)) {
                value = appState.config[key]; 
            }
            if (comments[key]) {
                comment = "// " + comments[key]; 
            }
            return `${prefix}${key}${spacing1}${value}${spacing2}${comment}`;
        }
        return line;
    });

    let extraComments = "\n// --- User Selected Hardware Modes ---\n";
    ['AXIS1', 'AXIS2'].forEach(axis => {
        extraComments += `// ${axis}: Motor=${appState.calcModes[axis].motor}, Micro=${appState.calcModes[axis].micro}, GR1=${appState.calcModes[axis].gr1}, GR2=${appState.calcModes[axis].gr2}\n`;
    });
    
    previewArea.value = processedLines.join('\n') + extraComments;
}

function downloadConfigFile() {
    const content = document.getElementById('config-preview').value;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Config.h';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// ===================================================================================
// EVENT HANDLERS & NAVIGATION
// ===================================================================================
function handleBackToHome() {
    appState.version = null; appState.config = {};
    dom.configWizard.classList.add('hidden');
    dom.advancedModeWrapper.style.display = 'none';
    dom.versionSelector.classList.remove('hidden');
    dom.wikiSection.classList.add('hidden');
}

function showWiki() {
    dom.versionSelector.classList.add('hidden');
    dom.wikiSection.classList.remove('hidden');
    dom.advancedModeWrapper.style.display = 'none';
    renderWikiPage(dom.wikiNav.querySelector('a').hash.substring(1));
}

function renderWikiPage(pageKey) {
    dom.wikiNav.querySelectorAll('a').forEach(a => a.classList.remove('active'));
    const activeLink = dom.wikiNav.querySelector(`a[href="#${pageKey}"]`);
    if (activeLink) activeLink.classList.add('active');
    dom.wikiArticle.innerHTML = `<h2>${appState.i18n[`wiki_page_${pageKey}_title`] || 'Page'}</h2>${appState.i18n[`wiki_page_${pageKey}_content`] || 'Content coming soon...'}`;
}

function loadLanguage(lang) {
    appState.language = lang;
    localStorage.setItem('onstep_language', lang);
    dom.languageSelector.value = lang;
    if (LOCALES[lang]) {
        appState.i18n = LOCALES[lang];
    } else {
        appState.i18n = LOCALES['en'] || {};
    }
    applyLocalization();
}

function bindEventListeners() {
    document.querySelectorAll('.version-card').forEach(card => card.addEventListener('click', () => handleVersionSelect(card.dataset.version)));
    
    dom.advancedModeToggle.addEventListener('change', (e) => {
        appState.advancedMode = e.target.checked;
        renderWizardNav();
        renderCategory(appState.activeCategory); // Refresh current view
    });

    dom.languageSelector.addEventListener('change', (e) => loadLanguage(e.target.value));
    dom.wizardHomeBtn.addEventListener('click', handleBackToHome);
    dom.wikiButton.addEventListener('click', showWiki);
    dom.wikiBackButton.addEventListener('click', handleBackToHome);
    
    // Modal Close logic
    [dom.infoModal, dom.beltCalcModal].forEach(modal => {
        modal.querySelector('.modal-close').addEventListener('click', () => modal.classList.remove('visible'));
        modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('visible'); });
    });
    
    window.addEventListener('keydown', e => { if (e.key === 'Escape') { dom.infoModal.classList.remove('visible'); dom.beltCalcModal.classList.remove('visible'); }});

    // Info icons delegation
    dom.configWizard.addEventListener('click', e => {
        if (e.target.classList.contains('info-icon')) {
            const key = e.target.dataset.key;
            // Search schema for description key
            const schema = SCHEMAS[appState.version];
            for (const cat in schema) {
                if (schema[cat].fields && schema[cat].fields[key]) {
                    const def = schema[cat].fields[key];
                    dom.infoModalTitle.innerHTML = appState.i18n[def.labelKey];
                    dom.infoModalText.innerHTML = appState.i18n[def.descriptionKey] || "No description.";
                    dom.infoModal.classList.add('visible');
                    break;
                }
            }
        }
    });
}

function showLoading() { dom.loadingOverlay.classList.remove('hidden'); }
function hideLoading() { dom.loadingOverlay.classList.add('hidden'); }

// ===================================================================================
// BACKGROUND ANIMATION (Improved with Collision Detection)
// ===================================================================================
function initBackground() {
    const canvas = dom.constellationCanvas;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    appState.bgStars = [];
    appState.constellations = [];

    // Static Stars
    for (let i = 0; i < 200; i++) {
        appState.bgStars.push({
            x: Math.random() * canvas.width, y: Math.random() * canvas.height,
            r: Math.random() * 1.2 + 0.3, alpha: Math.random() * 0.6 + 0.2,
            vx: (Math.random() - 0.5) * 0.05, vy: (Math.random() - 0.5) * 0.05
        });
    }
    // Initial Spawn
    for (let i = 0; i < 12; i++) spawnConstellation(canvas);
}

function getBoundingBox(stars) {
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    stars.forEach(s => {
        if (s.x < minX) minX = s.x;
        if (s.x > maxX) maxX = s.x;
        if (s.y < minY) minY = s.y;
        if (s.y > maxY) maxY = s.y;
    });
    return { x: minX, y: minY, w: maxX - minX, h: maxY - minY };
}

function checkCollision(newBox, margin = 50) {
    for (let c of appState.constellations) {
        if (c.opacity <= 0) continue; // Ignore fading ones
        const box = c.box;
        if (newBox.x < box.x + box.w + margin &&
            newBox.x + newBox.w + margin > box.x &&
            newBox.y < box.y + box.h + margin &&
            newBox.y + newBox.h + margin > box.y) {
            return true;
        }
    }
    return false;
}

function spawnConstellation(canvas) {
    let attempts = 0;
    let valid = false;
    let chain = [];

    while (!valid && attempts < 10) {
        let startX = Math.random() * (canvas.width - 100) + 50;
        let startY = Math.random() * (canvas.height - 100) + 50;
        chain = [{ x: startX, y: startY, r: Math.random()*1.5+1.0, vx: (Math.random()-0.5)*0.1, vy: (Math.random()-0.5)*0.1 }];
        const chainLength = Math.floor(Math.random() * 6) + 3; // 3-8 stars
        
        for (let k = 0; k < chainLength - 1; k++) {
            const angle = Math.random() * 2 * Math.PI;
            const dist = 40 + Math.random() * 80;
            let prev = chain[chain.length-1];
            let newX = prev.x + Math.cos(angle) * dist;
            let newY = prev.y + Math.sin(angle) * dist;
            
            // Keep within bounds
            if(newX < 0 || newX > canvas.width || newY < 0 || newY > canvas.height) {
                newX = prev.x - Math.cos(angle) * dist;
                newY = prev.y - Math.sin(angle) * dist;
            }

            chain.push({
                x: newX, y: newY,
                r: Math.random() * 1.5 + 0.8, vx: (Math.random()-0.5)*0.1, vy: (Math.random()-0.5)*0.1
            });
        }

        const newBox = getBoundingBox(chain);
        if (!checkCollision(newBox)) {
            valid = true;
            appState.constellations.push({ 
                stars: chain, 
                box: newBox,
                life: 1000 + Math.random() * 2000, 
                maxLife: 3000, 
                opacity: 0 
            });
        }
        attempts++;
    }
}

function animateBackground() {
    const canvas = dom.constellationCanvas;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw BG Stars
    ctx.fillStyle = 'rgba(224, 229, 240, 1)';
    appState.bgStars.forEach(star => {
        star.x += star.vx; star.y += star.vy;
        if(star.x<0) star.x=canvas.width; else if(star.x>canvas.width) star.x=0;
        if(star.y<0) star.y=canvas.height; else if(star.y>canvas.height) star.y=0;
        ctx.globalAlpha = star.alpha; ctx.beginPath(); ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2); ctx.fill();
    });
    ctx.globalAlpha = 1.0;

    // Draw Constellations
    for (let i = appState.constellations.length - 1; i >= 0; i--) {
        let c = appState.constellations[i];
        c.life--;
        
        // Fade in/out logic
        if (c.life > c.maxLife - 100) c.opacity += 0.01;
        else if (c.life < 100) c.opacity -= 0.01;
        else c.opacity = Math.min(c.opacity, 1.0);

        if (c.life <= 0 || c.opacity <= 0) {
            appState.constellations.splice(i, 1); 
            spawnConstellation(canvas); 
            continue;
        }

        // Draw Lines
        ctx.strokeStyle = `rgba(224, 229, 240, ${c.opacity * 0.3})`;
        ctx.lineWidth = 1;
        ctx.beginPath(); 
        ctx.moveTo(c.stars[0].x, c.stars[0].y);
        c.stars.forEach(star => {
            // Slight movement
            star.x += star.vx; star.y += star.vy;
            ctx.lineTo(star.x, star.y);
        });
        ctx.stroke();

        // Draw Stars
        ctx.fillStyle = `rgba(255, 255, 255, ${c.opacity})`;
        c.stars.forEach(star => { 
            ctx.beginPath(); ctx.arc(star.x, star.y, star.r, 0, Math.PI*2); ctx.fill(); 
        });
        
        // Update box for collisions (approximate)
        c.box = getBoundingBox(c.stars); 
    }
    requestAnimationFrame(animateBackground);
}

// ===================================================================================
// INITIALIZATION
// ===================================================================================
function initFooter() {
    const year = new Date().getFullYear();
    dom.appFooter.innerHTML = `&copy; ${year} OnStep Configurator v${APP_VERSION}`;
}

async function init() {
    try {
        const savedLang = localStorage.getItem('onstep_language');
        const browserLang = navigator.language.split('-')[0];
        let initialLang = 'en'; 
        if (savedLang && ['en', 'de', 'es', 'hu'].includes(savedLang)) {
            initialLang = savedLang;
        } else if (['en', 'de', 'es', 'hu'].includes(browserLang)) {
            initialLang = browserLang;
        }
        loadLanguage(initialLang);
        bindEventListeners();
        initFooter();
        initBackground();
        animateBackground();
        window.addEventListener('resize', initBackground);
    } catch (e) {
        console.error("Critical Initialization Error:", e);
        alert("Critical Error: Application failed to start.\n" + e.message);
    }
}

document.addEventListener('DOMContentLoaded', init);
