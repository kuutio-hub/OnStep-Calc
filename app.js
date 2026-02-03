
// ===================================================================================
// APP STATE
// ===================================================================================
const APP_VERSION = "0.0.6.2-beta";

const appState = { 
    version: null, 
    language: 'en', 
    config: {}, 
    calcParams: {
        AXIS1: { motor: 200, micro: 32, gr1: 4, gr2: 144 },
        AXIS2: { motor: 200, micro: 32, gr1: 4, gr2: 144 },
        SLEW_RATE: 2.5
    },
    // Default modes for calculator inputs
    calcModes: {
        AXIS1: { motor: 'std', micro: 'std', gr1: 'free', gr2: 'free' },
        AXIS2: { motor: 'std', micro: 'std', gr1: 'free', gr2: 'free' }
    },
    activeCalcField: null,
    i18n: {}, 
    wizardStep: 0, 
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
    if (!dom.configWizard.classList.contains('hidden')) renderWizard();
}

function renderWizard() {
    dom.configWizard.innerHTML = '';
    const schema = SCHEMAS[appState.version];
    if (!schema) return;

    const maxSteps = schema.length;
    const currentStepSchema = schema[appState.wizardStep];
    
    const wizardHeader = document.createElement('div');
    wizardHeader.className = 'wizard-header';
    const backButton = document.createElement('button');
    backButton.className = 'back-button';
    backButton.textContent = appState.i18n.backToHomeButton || "Back";
    backButton.onclick = handleBackToHome;
    const wizardTitle = document.createElement('h2');
    const titleKey = `wizardTitleStep${appState.wizardStep + 1}`;
    wizardTitle.textContent = `${appState.i18n[titleKey] || 'Step'} (${appState.wizardStep + 1}/${maxSteps})`;
    wizardHeader.append(backButton, wizardTitle);
    
    const stepContainer = document.createElement('div');
    stepContainer.className = 'step-container';
    
    // Check type of step
    if (currentStepSchema._summary) {
        stepContainer.style.display = 'flex';
        stepContainer.style.flexDirection = 'column';
        const summaryText = document.createElement('p');
        summaryText.innerHTML = appState.i18n.summaryText;
        stepContainer.appendChild(summaryText);
        
        const previewArea = document.createElement('textarea');
        previewArea.id = 'config-preview';
        previewArea.readOnly = true;
        previewArea.value = appState.i18n.summaryWaiting; 
        stepContainer.appendChild(previewArea);
        
    } else if (currentStepSchema.AXIS_GEARING) {
        stepContainer.appendChild(renderAxisCalculatorTable()); // From calc.js
    } else {
        const formContent = buildFormForStep(currentStepSchema);
        stepContainer.appendChild(formContent);
    }
    
    const nav = document.createElement('div');
    nav.className = 'wizard-nav';
    const prevButton = document.createElement('button');
    prevButton.textContent = appState.i18n.wizardPrev;
    prevButton.className = 'button';
    prevButton.disabled = appState.wizardStep === 0;
    prevButton.onclick = () => changeWizardStep(-1);
    
    const nextButtonContainer = document.createElement('div');
    if (appState.wizardStep < maxSteps - 1) {
        const nextButton = document.createElement('button');
        nextButton.textContent = appState.i18n.wizardNext;
        nextButton.className = 'button primary';
        nextButton.onclick = () => changeWizardStep(1);
        nextButtonContainer.appendChild(nextButton);
    } else {
            const downloadButton = document.createElement('button');
            downloadButton.id = 'download-btn';
            downloadButton.textContent = appState.i18n.downloadButton;
            downloadButton.className = 'button primary';
            // Trigger generation when clicked
            downloadButton.onclick = () => {
                showLoading();
                // Allow UI to update before heavy sync work (though string replacement is fast, it's good UX)
                setTimeout(() => {
                    generateConfigFile();
                    downloadConfigFile();
                    hideLoading();
                }, 500);
            };
            nextButtonContainer.appendChild(downloadButton);
    }
    
    nav.append(prevButton, nextButtonContainer);
    dom.configWizard.append(wizardHeader, stepContainer, nav);
    bindWizardEvents();

    // If we just landed on Summary, auto-generate preview
    if (currentStepSchema._summary) {
         showLoading();
         setTimeout(() => {
             generateConfigFile();
             hideLoading();
         }, 500);
    }
}

function buildFormForStep(stepSchema) {
    const fragment = document.createDocumentFragment();
    
    // Optional grouping logic for Driver settings
    if (stepSchema.AXIS1_DRIVER_MODEL) {
        const axis1Section = document.createElement('div');
        axis1Section.className = 'axis-section';
        axis1Section.innerHTML = `<h3>RA/AZM Axis</h3>`;
        
        const axis2Section = document.createElement('div');
        axis2Section.className = 'axis-section';
        axis2Section.innerHTML = `<h3>DEC/ALT Axis</h3>`;
        
        for (const key in stepSchema) {
            if (key === '_separator') continue;
            const def = stepSchema[key];
            const formControl = createFormControl(key, def);
            if(key.startsWith('AXIS1')) axis1Section.appendChild(formControl);
            else if (key.startsWith('AXIS2')) axis2Section.appendChild(formControl);
            else fragment.appendChild(formControl);
        }
        fragment.append(axis1Section, axis2Section);
    } else {
            for (const key in stepSchema) {
            if (key === '_separator') continue;
            const def = stepSchema[key];
            fragment.appendChild(createFormControl(key, def));
        }
    }
    return fragment;
}

function createFormControl(key, def) {
    if (appState.config[key] === undefined) appState.config[key] = def.defaultValue;
    
    const group = document.createElement('div');
    group.className = 'form-group';
    const label = document.createElement('label');
    label.htmlFor = key;
    label.textContent = appState.i18n[def.labelKey] || key;
    
    // Add define code name
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
        group.appendChild(select);
    } else if (def.type === 'number') {
        const input = document.createElement('input');
        input.type = 'number';
        input.id = key; input.name = key;
        input.value = appState.config[key];
        group.appendChild(input);
    }
    return group;
}

function renderWikiPage(pageKey) {
    dom.wikiNav.querySelectorAll('a').forEach(a => a.classList.remove('active'));
    const activeLink = dom.wikiNav.querySelector(`a[href="#${pageKey}"]`);
    if (activeLink) activeLink.classList.add('active');
    
    dom.wikiArticle.innerHTML = `<h2>${appState.i18n[`wiki_page_${pageKey}_title`]}</h2>${appState.i18n[`wiki_page_${pageKey}_content`]}`;
}

// ===================================================================================
// EVENT HANDLERS
// ===================================================================================
function loadLanguage(lang) {
    appState.language = lang;
    localStorage.setItem('onstep_language', lang);
    dom.languageSelector.value = lang;

    if (LOCALES[lang]) {
        appState.i18n = LOCALES[lang];
    } else {
        console.warn(`Language ${lang} not found, falling back to English.`);
        appState.i18n = LOCALES['en'] || {};
    }
    applyLocalization();
}

function handleVersionSelect(selectedVersion) {
    appState.version = selectedVersion;
    appState.wizardStep = 0;
    appState.config = {}; // Reset config
    dom.versionSelector.classList.add('hidden');
    dom.configWizard.classList.remove('hidden');
    renderWizard();
}

function handleBackToHome() {
    appState.version = null; appState.config = {};
    dom.configWizard.classList.add('hidden');
    dom.wikiSection.classList.add('hidden');
    dom.versionSelector.classList.remove('hidden');
    dom.configWizard.innerHTML = '';
}

function showWiki() {
    dom.versionSelector.classList.add('hidden');
    dom.wikiSection.classList.remove('hidden');
    const firstLink = dom.wikiNav.querySelector('a');
    if(firstLink) renderWikiPage(firstLink.hash.substring(1));
}

function changeWizardStep(direction) {
    appState.wizardStep += direction;
    renderWizard();
}

function generateConfigFile() {
    if (!appState.version) return;
    
    // Pick the BASE template (full original text)
    const rawTemplate = appState.version === 'classic' ? TEMPLATE_ONSTEP_CLASSIC_BASE : TEMPLATE_ONSTEPX_BASE;
    const previewArea = document.getElementById('config-preview');
    if (!previewArea || !rawTemplate) return;

    // Get comment translations for current language
    const comments = CONFIG_COMMENTS[appState.language] || {};

    // Process line by line
    const lines = rawTemplate.split('\n');
    const processedLines = lines.map(line => {
        // More robust Regex:
        // Group 1: Leading whitespace + #define + space
        // Group 2: Key (variable name)
        // Group 3: Separator space
        // Group 4: Value (lazy match until comment or end)
        // Group 5: Whitespace before comment
        // Group 6: Comment (starting with //) or undefined
        const defineMatch = line.match(/^(\s*#define\s+)(\w+)(\s+)(.*?)(\s*)(\/\/.*)?$/);
        
        if (defineMatch) {
            const prefix = defineMatch[1];
            const key = defineMatch[2];
            const spacing1 = defineMatch[3];
            let value = defineMatch[4];
            const spacing2 = defineMatch[5];
            let comment = defineMatch[6] || "";

            // 1. Update Value if user changed it in Wizard
            if (appState.config.hasOwnProperty(key)) {
                value = appState.config[key]; 
                // Pad value to align comments? (Optional, skipping for simplicity)
            }

            // 2. Update Comment if translation exists
            if (comments[key]) {
                // Replace everything after // with the new text
                comment = "// " + comments[key]; 
            }

            return `${prefix}${key}${spacing1}${value}${spacing2}${comment}`;
        }
        
        // Return line unchanged if not a define we need to touch
        return line;
    });

    // Inject Comments about Gearing Modes (Append to end or specific location)
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

function showInfoModal(key) {
        // Find schema definition across all steps (naive search)
        const schema = SCHEMAS[appState.version];
        let def = null;
        for(let step of schema) {
            if(step[key]) { def = step[key]; break; }
        }
    
    if (def) {
        dom.infoModalTitle.innerHTML = appState.i18n[def.labelKey] || key;
        dom.infoModalText.innerHTML = (appState.i18n[def.descriptionKey] || 'No description available.');
        dom.infoModal.classList.add('visible');
    }
}
function hideInfoModal(modal) { modal.classList.remove('visible'); }

function showLoading() { dom.loadingOverlay.classList.remove('hidden'); }
function hideLoading() { dom.loadingOverlay.classList.add('hidden'); }

// ===================================================================================
// BACKGROUND ANIMATION
// ===================================================================================
// (Keeping this compact)
function initBackground() {
    const canvas = dom.constellationCanvas;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    appState.bgStars = [];
    appState.constellations = [];

    for (let i = 0; i < 200; i++) {
        appState.bgStars.push({
            x: Math.random() * canvas.width, y: Math.random() * canvas.height,
            r: Math.random() * 1.2 + 0.3, alpha: Math.random() * 0.6 + 0.2,
            vx: (Math.random() - 0.5) * 0.05, vy: (Math.random() - 0.5) * 0.05
        });
    }
    for (let i = 0; i < 15; i++) spawnConstellation(canvas);
}

function spawnConstellation(canvas) {
    let startX = Math.random() * canvas.width;
    let startY = Math.random() * canvas.height;
    let chain = [{ x: startX, y: startY, r: Math.random()*1.5+1.0, vx: (Math.random()-0.5)*0.15, vy: (Math.random()-0.5)*0.15 }];
    const chainLength = Math.floor(Math.random() * 11) + 3; 
    
    for (let k = 0; k < chainLength - 1; k++) {
        const angle = Math.random() * 2 * Math.PI;
        const dist = 50 + Math.random() * 100;
        let prev = chain[chain.length-1];
        chain.push({
            x: prev.x + Math.cos(angle) * dist, y: prev.y + Math.sin(angle) * dist,
            r: Math.random() * 1.5 + 0.8, vx: (Math.random()-0.5)*0.15, vy: (Math.random()-0.5)*0.15
        });
    }
    appState.constellations.push({ stars: chain, life: 1000 + Math.random() * 2000, maxLife: 3000, opacity: 0 });
}

function animateBackground() {
    const canvas = dom.constellationCanvas;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = 'rgba(224, 229, 240, 1)';
    appState.bgStars.forEach(star => {
        star.x += star.vx; star.y += star.vy;
        if(star.x<0) star.x=canvas.width; else if(star.x>canvas.width) star.x=0;
        if(star.y<0) star.y=canvas.height; else if(star.y>canvas.height) star.y=0;
        ctx.globalAlpha = star.alpha; ctx.beginPath(); ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2); ctx.fill();
    });
    ctx.globalAlpha = 1.0;

    for (let i = appState.constellations.length - 1; i >= 0; i--) {
        let c = appState.constellations[i];
        c.life--;
        if (c.life > c.maxLife - 100) c.opacity += 0.01;
        else if (c.life < 100) c.opacity -= 0.01;
        else c.opacity = Math.min(c.opacity, 1.0);

        if (c.life <= 0 || c.opacity <= 0) {
            appState.constellations.splice(i, 1); spawnConstellation(canvas); continue;
        }

        ctx.strokeStyle = `rgba(224, 229, 240, ${c.opacity * 0.3})`;
        ctx.fillStyle = `rgba(255, 255, 255, ${c.opacity})`;
        ctx.lineWidth = 1;

        if(c.stars.length > 0) {
            ctx.beginPath(); ctx.moveTo(c.stars[0].x, c.stars[0].y);
            c.stars.forEach(star => {
                star.x += star.vx; star.y += star.vy;
                if(star.x<0||star.x>canvas.width) star.vx*=-1; if(star.y<0||star.y>canvas.height) star.vy*=-1;
                ctx.lineTo(star.x, star.y);
            });
            ctx.stroke();
            c.stars.forEach(star => { ctx.beginPath(); ctx.arc(star.x, star.y, star.r, 0, Math.PI*2); ctx.fill(); });
        }
    }
    requestAnimationFrame(animateBackground);
}

// ===================================================================================
// EVENT BINDING
// ===================================================================================
function bindEventListeners() {
    document.querySelectorAll('.version-card').forEach(card => card.addEventListener('click', () => handleVersionSelect(card.dataset.version)));
    
    [dom.infoModal, dom.beltCalcModal].forEach(modal => {
        modal.querySelector('.modal-close').addEventListener('click', () => hideInfoModal(modal));
        modal.addEventListener('click', e => { if (e.target === modal) hideInfoModal(modal); });
    });
    
    window.addEventListener('keydown', e => { if (e.key === 'Escape') { hideInfoModal(dom.infoModal); hideInfoModal(dom.beltCalcModal); }});
    dom.wikiButton.addEventListener('click', showWiki);
    dom.wikiBackButton.addEventListener('click', handleBackToHome);
    dom.wikiNav.addEventListener('click', e => { e.preventDefault(); if (e.target.tagName === 'A') renderWikiPage(e.target.hash.substring(1)); });
    dom.languageSelector.addEventListener('change', (e) => loadLanguage(e.target.value));

    const beltTypeSelector = document.getElementById('belt-type');
    const beltPitchInput = document.getElementById('belt-pitch');
    beltTypeSelector.addEventListener('change', (e) => {
        beltPitchInput.value = e.target.value;
        if(typeof calculateBeltLength === 'function') calculateBeltLength(); // Check existence in case calc.js fails
    });
    dom.beltCalcModal.addEventListener('input', e => {
        if (e.target.id !== 'belt-type' && typeof calculateBeltLength === 'function') calculateBeltLength();
    });
}

function bindWizardEvents() {
    dom.configWizard.addEventListener('click', e => {
            if (e.target.classList.contains('info-icon')) showInfoModal(e.target.dataset.key);
    });

    dom.configWizard.addEventListener('change', e => {
            const target = e.target;
            if (target.classList.contains('calc-trigger')) {
            const axis = target.dataset.axis;
            const param = target.dataset.param;
            appState.calcParams[axis][param] = parseFloat(target.value);
            if(typeof recalculateXLS === 'function') recalculateXLS();
            } else if (target.id === 'SLEW_RATE_BASE_DESIRED') {
            if(typeof recalculateXLS === 'function') recalculateXLS();
            } else if (target.tagName === 'SELECT' || target.tagName === 'INPUT') {
            if (target.id) appState.config[target.id] = target.value;
            }
    });
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
