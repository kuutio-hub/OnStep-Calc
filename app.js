
import { TEMPLATE_ONSTEP_CLASSIC, TEMPLATE_ONSTEPX } from './templates.js';
import { LOCALES } from './locales.js';

// ===================================================================================
// CONSTANTS & CONFIGURATION
// ===================================================================================
const APP_VERSION = "0.0.5.3-beta";

const schemas = {
    onstepx: [
        { // Step 1: Alapbeállítások
            PINMAP: { type: 'select', labelKey: 'PINMAP_LABEL', descriptionKey: 'PINMAP_DESC', options: ['FYSETC_E4', 'MiniPCB', 'MiniPCB2', 'MaxPCB2', 'MaxESP3', 'CNC3', 'STM32Blue', 'MaxSTM3', 'FYSETC_S6_2'], defaultValue: 'FYSETC_E4' },
            MOUNT_TYPE: { type: 'select', labelKey: 'MOUNT_TYPE_LABEL', descriptionKey: 'MOUNT_TYPE_DESC', options: ['GEM', 'GEM_TA', 'GEM_TAC', 'FORK', 'FORK_TA', 'FORK_TAC', 'ALTAZM', 'ALTAZM_UNL'], defaultValue: 'GEM' }
        },
        { // Step 2: Motor és Áttétel (XLS Style)
            AXIS_GEARING: { type: 'axis_calculator_table' }
        },
        { // Step 3: Meghajtó Beállítások
            AXIS1_DRIVER_MODEL: { type: 'select', labelKey: 'AXIS_DM_LABEL', descriptionKey: 'AXIS_DM_DESC', options: ['A4988', 'DRV8825', 'TMC2130', 'TMC2209', 'TMC5160'], defaultValue: 'TMC2209' },
            AXIS1_DRIVER_MICROSTEPS: { type: 'select', labelKey: 'AXIS_MS_LABEL', descriptionKey: 'AXIS_MS_DESC', options: [8, 16, 32, 64, 128], defaultValue: 32 },
            AXIS1_DRIVER_MICROSTEPS_GOTO: { type: 'select', labelKey: 'AXIS_MSG_LABEL', descriptionKey: 'AXIS_MSG_DESC', options: [1, 2, 4, 8, 16], defaultValue: 4 },
            AXIS1_REVERSE: { type: 'select', labelKey: 'AXIS_REV_LABEL', descriptionKey: 'AXIS_REV_DESC', options: ['OFF', 'ON'], defaultValue: 'OFF' },
            AXIS2_DRIVER_MODEL: { type: 'select', labelKey: 'AXIS_DM_LABEL', descriptionKey: 'AXIS_DM_DESC', options: ['A4988', 'DRV8825', 'TMC2130', 'TMC2209', 'TMC5160'], defaultValue: 'TMC2209' },
            AXIS2_DRIVER_MICROSTEPS: { type: 'select', labelKey: 'AXIS_MS_LABEL', descriptionKey: 'AXIS_MS_DESC', options: [8, 16, 32, 64, 128], defaultValue: 32 },
            AXIS2_DRIVER_MICROSTEPS_GOTO: { type: 'select', labelKey: 'AXIS_MSG_LABEL', descriptionKey: 'AXIS_MSG_DESC', options: [1, 2, 4, 8, 16], defaultValue: 4 },
            AXIS2_REVERSE: { type: 'select', labelKey: 'AXIS_REV_LABEL', descriptionKey: 'AXIS_REV_DESC', options: ['OFF', 'ON'], defaultValue: 'OFF' },
        },
        { // Step 4: Összegzés és Generálás
            _summary: true
        } 
    ],
    classic: [
        { // Step 1
            PINMAP: { type: 'select', labelKey: 'PINMAP_LABEL', descriptionKey: 'PINMAP_DESC', options: ['MksGenL2', 'MiniPCB2', 'MaxPCB2', 'MaxESP3', 'CNC3', 'STM32Blue', 'MaxSTM3', 'FYSETC_S6_2'], defaultValue: 'OFF' },
            MOUNT_TYPE: { type: 'select', labelKey: 'MOUNT_TYPE_LABEL', descriptionKey: 'MOUNT_TYPE_DESC', options: ['GEM', 'FORK', 'ALTAZM'], defaultValue: 'GEM' }
        },
            { // Step 2: Motor és Áttétel (XLS Style)
            AXIS_GEARING: { type: 'axis_calculator_table' }
        },
        { // Step 3
            AXIS1_DRIVER_MODEL: { type: 'select', labelKey: 'AXIS_DM_LABEL', descriptionKey: 'AXIS_DM_DESC', options: ['A4988', 'DRV8825', 'LV8729', 'TMC2209'], defaultValue: 'A4988' },
            AXIS1_DRIVER_MICROSTEPS: { type: 'select', labelKey: 'AXIS_MS_LABEL', descriptionKey: 'AXIS_MS_DESC', options: [8, 16, 32], defaultValue: 16 },
            AXIS1_DRIVER_MICROSTEPS_GOTO: { type: 'select', labelKey: 'AXIS_MSG_LABEL', descriptionKey: 'AXIS_MSG_DESC', options: [1, 2, 4, 8], defaultValue: 4 },
            AXIS1_DRIVER_REVERSE: { type: 'select', labelKey: 'AXIS_REV_LABEL', descriptionKey: 'AXIS_REV_DESC', options: ['OFF', 'ON'], defaultValue: 'OFF' },
            AXIS2_DRIVER_MODEL: { type: 'select', labelKey: 'AXIS_DM_LABEL', descriptionKey: 'AXIS_DM_DESC', options: ['A4988', 'DRV8825', 'LV8729', 'TMC2209'], defaultValue: 'A4988' },
            AXIS2_DRIVER_MICROSTEPS: { type: 'select', labelKey: 'AXIS_MS_LABEL', descriptionKey: 'AXIS_MS_DESC', options: [8, 16, 32], defaultValue: 16 },
            AXIS2_DRIVER_MICROSTEPS_GOTO: { type: 'select', labelKey: 'AXIS_MSG_LABEL', descriptionKey: 'AXIS_MSG_DESC', options: [1, 2, 4, 8], defaultValue: 4 },
            AXIS2_DRIVER_REVERSE: { type: 'select', labelKey: 'AXIS_REV_LABEL', descriptionKey: 'AXIS_REV_DESC', options: ['OFF', 'ON'], defaultValue: 'OFF' },
        },
        { // Step 4
            _summary: true
        }
    ]
};

// ===================================================================================
// APPLICATION STATE
// ===================================================================================
const appState = { 
    version: null, 
    language: 'en', 
    config: {}, 
    calcParams: {
        AXIS1: { motor: 200, micro: 32, gr1: 4, gr2: 144 },
        AXIS2: { motor: 200, micro: 32, gr1: 4, gr2: 144 },
        SLEW_RATE: 2.5
    },
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
    const schema = schemas[appState.version];
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
    
    if (currentStepSchema._summary) {
        stepContainer.style.display = 'flex'; flex-direction: 'column';
        const summaryText = document.createElement('p');
        summaryText.innerHTML = appState.i18n.summaryText;
        stepContainer.appendChild(summaryText);
        
        const previewArea = document.createElement('textarea');
        previewArea.id = 'config-preview';
        previewArea.readOnly = true;
        previewArea.textContent = appState.i18n.summaryWaiting;
        stepContainer.appendChild(previewArea);
        
        generateConfigFile();
    } else if (currentStepSchema.AXIS_GEARING) {
        stepContainer.appendChild(renderAxisCalculatorTable());
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
            downloadButton.disabled = true;
            downloadButton.onclick = downloadConfigFile;
            nextButtonContainer.appendChild(downloadButton);
    }
    
    nav.append(prevButton, nextButtonContainer);
    dom.configWizard.append(wizardHeader, stepContainer, nav);
    bindWizardEvents();
}

function renderAxisCalculatorTable() {
    const container = document.createElement('div');
    
    // Slew Rate Global Input
    const slewDiv = document.createElement('div');
    slewDiv.style.marginBottom = '1.5rem';
    slewDiv.innerHTML = `
        <div class="form-group" style="max-width: 300px; margin: 0 auto;">
            <label>SLEW_RATE_BASE_DESIRED (°/s) <code>(SLEW_RATE_BASE_DESIRED)</code></label>
            <input type="number" id="SLEW_RATE_BASE_DESIRED" class="xls-input" value="${appState.calcParams.SLEW_RATE}" step="0.1">
        </div>
    `;
    container.appendChild(slewDiv);

    const table = document.createElement('div');
    table.className = 'xls-table';

    // Header
    table.innerHTML += `
        <div class="xls-header">Parameter</div>
        <div class="xls-header">Axis 1 (RA/AZM)</div>
        <div class="xls-header">Axis 2 (DEC/ALT)</div>
    `;

    const params = [
        { id: 'motor', label: 'XLS_MOTOR_STEPS', default: 200 },
        { id: 'micro', label: 'XLS_MICROSTEPS', default: 32, options: [16, 32, 64, 128] },
        { id: 'gr1', label: 'XLS_GR1', default: 4 },
        { id: 'gr2', label: 'XLS_GR2', default: 144 }
    ];

    params.forEach(p => {
        table.innerHTML += `<div class="xls-label">${appState.i18n[p.label] || p.label}</div>`;
        ['AXIS1', 'AXIS2'].forEach(axis => {
            const val = appState.calcParams[axis][p.id];
            if (p.id === 'micro') {
                    let opts = p.options.map(o => `<option value="${o}" ${o==val?'selected':''}>${o}</option>`).join('');
                    table.innerHTML += `<div><select class="xls-input calc-trigger" data-axis="${axis}" data-param="${p.id}">${opts}</select></div>`;
            } else {
                let extra = '';
                if (p.id.startsWith('gr')) extra = `<button class="xls-calc-btn" onclick="document.getElementById('belt-calc-modal').classList.add('visible')">Calc</button>`;
                table.innerHTML += `<div><input type="number" class="xls-input calc-trigger" id="${axis}_${p.id}_input" data-axis="${axis}" data-param="${p.id}" value="${val}">${extra}<div id="${axis}_${p.id}_err" class="xls-warning"></div></div>`;
            }
        });
    });

    // Results Section
        table.innerHTML += `<div class="xls-section-title">Calculated Results</div>`;
        
        // Steps Per Degree
        table.innerHTML += `<div class="xls-label">STEPS_PER_DEGREE</div>`;
        ['AXIS1', 'AXIS2'].forEach(axis => {
            table.innerHTML += `<div><div id="${axis}_RES_SPD" class="xls-result">-</div><span id="${axis}_WARN_SPD" class="xls-warning"></span></div>`;
        });

        // Tracking Resolution
        table.innerHTML += `<div class="xls-label">${appState.i18n.XLS_RESOLUTION} (arc-sec)</div>`;
        ['AXIS1', 'AXIS2'].forEach(axis => {
            table.innerHTML += `<div id="${axis}_RES_TR" class="xls-readout">-</div>`;
        });

        // RPM
        table.innerHTML += `<div class="xls-label">${appState.i18n.XLS_RPM} (@SlewMax)</div>`;
        ['AXIS1', 'AXIS2'].forEach(axis => {
            table.innerHTML += `<div><div id="${axis}_RES_RPM" class="xls-readout">-</div><span id="${axis}_WARN_RPM" class="xls-warning"></span></div>`;
        });

    container.appendChild(table);
    
    // Trigger initial calculation after render
    setTimeout(() => recalculateXLS(), 0);
    return container;
}

function recalculateXLS() {
    if (!document.querySelector('.xls-table')) return;

    const slewRate = parseFloat(document.getElementById('SLEW_RATE_BASE_DESIRED').value) || 2.5;
    appState.calcParams.SLEW_RATE = slewRate;
    appState.config['SLEW_RATE_BASE_DESIRED'] = slewRate;

    ['AXIS1', 'AXIS2'].forEach(axis => {
        const p = appState.calcParams[axis];
        
        // --- INPUT VALIDATION ---
        let isValid = true;
        
        // Motor Steps Validation
        const motorInput = document.getElementById(`${axis}_motor_input`);
        const motorErr = document.getElementById(`${axis}_motor_err`);
        if (p.motor <= 0) {
            motorInput.classList.add('input-error');
            motorErr.textContent = "Invalid (>0)";
            isValid = false;
        } else if (p.motor !== 200 && p.motor !== 400) {
            motorInput.classList.remove('input-error');
            motorErr.textContent = "Std: 200/400"; // Warning
        } else {
            motorInput.classList.remove('input-error');
            motorErr.textContent = "";
        }

        // GR1 Validation
        const gr1Input = document.getElementById(`${axis}_gr1_input`);
        const gr1Err = document.getElementById(`${axis}_gr1_err`);
        if (p.gr1 <= 0) {
            gr1Input.classList.add('input-error');
            gr1Err.textContent = "Invalid (>0)";
            isValid = false;
        } else {
             gr1Input.classList.remove('input-error');
             gr1Err.textContent = "";
        }

        // GR2 Validation
        const gr2Input = document.getElementById(`${axis}_gr2_input`);
        const gr2Err = document.getElementById(`${axis}_gr2_err`);
        if (p.gr2 <= 0) {
            gr2Input.classList.add('input-error');
            gr2Err.textContent = "Invalid (>0)";
            isValid = false;
        } else {
             gr2Input.classList.remove('input-error');
             gr2Err.textContent = "";
        }

        if (!isValid) return; // Stop calc if invalid inputs

        const spd = (p.motor * p.micro * p.gr1 * p.gr2) / 360.0;
        
        // Update App Config
        appState.config[`${axis}_STEPS_PER_DEGREE`] = spd.toFixed(1);
        appState.config[`${axis}_DRIVER_MICROSTEPS`] = p.micro; // Sync with Step 3

        // Update DOM
        const spdEl = document.getElementById(`${axis}_RES_SPD`);
        const warnSpdEl = document.getElementById(`${axis}_WARN_SPD`);
        const trEl = document.getElementById(`${axis}_RES_TR`);
        const rpmEl = document.getElementById(`${axis}_RES_RPM`);
        const warnRpmEl = document.getElementById(`${axis}_WARN_RPM`);

        if (spdEl) spdEl.textContent = spd.toLocaleString(undefined, {maximumFractionDigits: 1});
        
        // Limits check
        if (spd < 12800 || spd > 61200) {
            warnSpdEl.textContent = "[12,800 - 61,200]";
            if (spdEl) spdEl.style.backgroundColor = 'rgba(255,0,0,0.2)';
        } else {
            warnSpdEl.textContent = "";
            if (spdEl) spdEl.style.backgroundColor = '';
        }

        const res = 3600 / spd; 
        if (trEl) trEl.textContent = res.toFixed(3);

        const totalRatio = p.gr1 * p.gr2;
        const rpm = (slewRate * totalRatio) / 6.0;
        
        if (rpmEl) rpmEl.textContent = rpm.toFixed(1);
        if (rpm > 1500) {
                warnRpmEl.textContent = "[< 1500 RPM]";
        } else {
                warnRpmEl.textContent = "";
        }
    });
}

function buildFormForStep(stepSchema) {
    const fragment = document.createDocumentFragment();
    if (stepSchema.AXIS1_DRIVER_MODEL) {
        const axis1Section = document.createElement('div');
        axis1Section.className = 'axis-section';
        const h3_1 = document.createElement('h3');
        h3_1.textContent = 'RA/AZM Axis';
        axis1Section.appendChild(h3_1);
        
        const axis2Section = document.createElement('div');
        axis2Section.className = 'axis-section';
        const h3_2 = document.createElement('h3');
        h3_2.textContent = 'DEC/ALT Axis';
        axis2Section.appendChild(h3_2);
        
        for (const key in stepSchema) {
            const def = stepSchema[key];
            const formControl = createFormControl(key, def);
            if(key.startsWith('AXIS1')) axis1Section.appendChild(formControl);
            else if (key.startsWith('AXIS2')) axis2Section.appendChild(formControl);
        }
        fragment.append(axis1Section, axis2Section);
    } else {
            for (const key in stepSchema) {
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
// EVENT HANDLERS & ACTIONS
// ===================================================================================
function loadLanguage(lang) {
    appState.language = lang;
    localStorage.setItem('onstep_language', lang);
    dom.languageSelector.value = lang;

    // Direct synchronous load from imported constant
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
    // Select template based on version
    const template = appState.version === 'classic' ? TEMPLATE_ONSTEP_CLASSIC : TEMPLATE_ONSTEPX;
    
    const previewArea = document.getElementById('config-preview');
    const downloadBtn = document.getElementById('download-btn');
    if (!previewArea || !downloadBtn) return;
    
    downloadBtn.disabled = true;

    let content = template;
    // Simple replacement strategy
    for (const key in appState.config) {
        const value = appState.config[key];
        const regex = new RegExp(`(#define\\s+${key}\\s+)(.*?)(\\s*\\/\\/|$)`, 'gm');
        if (content.match(regex)) {
                content = content.replace(regex, `$1${value}$3`);
        }
    }
    
    previewArea.value = content;
    downloadBtn.disabled = false;
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
        const stepSchema = schemas[appState.version]?.[appState.wizardStep];
        const def = stepSchema?.[key];
    
    if (def) {
        dom.infoModalTitle.innerHTML = appState.i18n[def.labelKey] || key;
        dom.infoModalText.innerHTML = (appState.i18n[def.descriptionKey] || 'N/A');
        dom.infoModal.classList.add('visible');
    }
}
function hideInfoModal(modal) { modal.classList.remove('visible'); }

function showBeltCalcModal() { dom.beltCalcModal.classList.add('visible'); calculateBeltLength(); }
function calculateBeltLength() {
    const p1 = parseFloat(document.getElementById('belt-p1').value);
    const p2 = parseFloat(document.getElementById('belt-p2').value);
    const pitch = parseFloat(document.getElementById('belt-pitch').value);
    const dist = parseFloat(document.getElementById('belt-distance').value);
    if ([p1, p2, pitch, dist].some(isNaN)) return;

    const r1 = (p1 * pitch) / (2 * Math.PI);
    const r2 = (p2 * pitch) / (2 * Math.PI);
    const length = Math.sqrt(4 * dist**2 - (r1 - r2)**2) + Math.PI * (r1 + r2) + Math.asin((r1 - r2) / (2*dist)) * (r1 - r2);
    const teeth = Math.round(length / pitch);
    dom.beltResultText.innerHTML = `${appState.i18n.beltCalcLength}: <strong>${length.toFixed(2)} mm</strong><br>${appState.i18n.beltCalcTeeth}: <strong>${teeth}</strong>`;
}

// ===================================================================================
// BACKGROUND ANIMATION
// ===================================================================================
function distance(p1, p2) {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}

function initBackground() {
    const canvas = dom.constellationCanvas;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    appState.bgStars = [];
    appState.constellations = [];

    // 1. Background Stars (Static, unconnected)
    // INCREASED VISIBILITY: higher alpha range
    for (let i = 0; i < 200; i++) {
        appState.bgStars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 1.2 + 0.3, 
            alpha: Math.random() * 0.6 + 0.2, // Was 0.1 to 0.6, now 0.2 to 0.8
            vx: (Math.random() - 0.5) * 0.05,
            vy: (Math.random() - 0.5) * 0.05,
        });
    }

    // 2. Constellations
    let cStars = [];
    for (let i = 0; i < 60; i++) {
        cStars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 1.5 + 0.8,
            vx: (Math.random() - 0.5) * 0.08,
            vy: (Math.random() - 0.5) * 0.08,
            id: i
        });
    }

    // Generate paths (Single line chains)
    let available = [...cStars];
    while(available.length > 5) {
        let chain = [];
        let start = available.shift(); // Pick random start
        chain.push(start);
        
        let current = start;
        let chainLength = Math.floor(Math.random() * 6) + 4; // 4 to 10 stars

        for(let k=0; k<chainLength; k++) {
             // Find nearest unvisited neighbor within range
             let nearest = null;
             let minDist = 9999;
             let nearIndex = -1;

             for(let j=0; j<available.length; j++) {
                 let d = distance(current, available[j]);
                 if(d < 150 && d > 20 && d < minDist) {
                     minDist = d;
                     nearest = available[j];
                     nearIndex = j;
                 }
             }

             if(nearest) {
                 chain.push(nearest);
                 available.splice(nearIndex, 1);
                 current = nearest;
             } else {
                 break; // End chain if no neighbor
             }
        }
        
        if(chain.length > 3) {
            appState.constellations.push(chain);
        } else {
            appState.constellations.push(chain); 
        }
    }
}

function animateBackground() {
    const canvas = dom.constellationCanvas;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw Background Stars
    ctx.fillStyle = 'rgba(224, 229, 240, 1)'; // Alpha handled individually
    appState.bgStars.forEach(star => {
        star.x += star.vx; star.y += star.vy;
        if(star.x < 0) star.x = canvas.width; else if(star.x > canvas.width) star.x = 0;
        if(star.y < 0) star.y = canvas.height; else if(star.y > canvas.height) star.y = 0;
        
        ctx.globalAlpha = star.alpha;
        ctx.beginPath(); ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2); ctx.fill();
    });
    ctx.globalAlpha = 1.0;

    // Draw Constellations
    ctx.strokeStyle = 'rgba(224, 229, 240, 0.2)'; // Brighter lines
    ctx.lineWidth = 1;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)'; // Brighter stars

    appState.constellations.forEach(chain => {
        // Update positions
        chain.forEach(star => {
            star.x += star.vx; star.y += star.vy;
            if (star.x < 0 || star.x > canvas.width) star.vx *= -1;
            if (star.y < 0 || star.y > canvas.height) star.vy *= -1;
            
            ctx.beginPath(); ctx.arc(star.x, star.y, star.r, 0, Math.PI*2); ctx.fill();
        });

        // Draw Lines
        if(chain.length > 1) {
            ctx.beginPath();
            ctx.moveTo(chain[0].x, chain[0].y);
            for(let i=1; i<chain.length; i++) {
                ctx.lineTo(chain[i].x, chain[i].y);
            }
            ctx.stroke();
        }
    });

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
        calculateBeltLength();
    });
    dom.beltCalcModal.addEventListener('input', e => {
        if (e.target.id !== 'belt-type') calculateBeltLength();
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
            recalculateXLS();
            } else if (target.id === 'SLEW_RATE_BASE_DESIRED') {
            recalculateXLS();
            } else if (target.tagName === 'SELECT') {
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
        alert("Critical Error: Application failed to start. Check console for details.\n\n" + e.message);
    }
}

document.addEventListener('DOMContentLoaded', init);
