
// ===================================================================================
// CALCULATOR LOGIC (Separated from app.js)
// ===================================================================================

function renderAxisCalculatorTable() {
    const container = document.createElement('div');
    const table = document.createElement('div');
    table.className = 'xls-table';

    // Header
    table.innerHTML += `
        <div class="xls-header">Parameter</div>
        <div class="xls-header">Axis 1 (RA/AZM)</div>
        <div class="xls-header">Axis 2 (DEC/ALT)</div>
    `;

    // Definition of rows with "modes"
    const rows = [
        { id: 'motor', label: 'XLS_MOTOR_STEPS', modes: [{k:'std', l:'Std'}, {k:'custom', l:'Custom'}], stdOpts: [200, 400] },
        { id: 'micro', label: 'XLS_MICROSTEPS', modes: [{k:'std', l:'Std'}, {k:'custom', l:'Custom'}], stdOpts: [16, 32, 64, 128] },
        { id: 'gr1', label: 'XLS_GR1', modes: [{k:'free', l:'Free'}, {k:'belt', l:'Belt'}, {k:'worm', l:'Worm'}] },
        { id: 'gr2', label: 'XLS_GR2', modes: [{k:'free', l:'Free'}, {k:'belt', l:'Belt'}, {k:'worm', l:'Worm'}] }
    ];

    rows.forEach(p => {
        // Render Label
        table.innerHTML += `<div class="xls-cell"><div class="xls-label">${appState.i18n[p.label] || p.label}</div></div>`;
        
        // Render Axis 1 & 2 Inputs
        ['AXIS1', 'AXIS2'].forEach(axis => {
            const cell = document.createElement('div');
            cell.className = 'xls-cell';
            
            // Mode Selector Buttons
            const modeContainer = document.createElement('div');
            modeContainer.className = 'mode-selector';
            const currentMode = appState.calcModes[axis][p.id];

            p.modes.forEach(m => {
                const btn = document.createElement('button');
                btn.className = `mode-btn ${currentMode === m.k ? 'active' : ''}`;
                btn.textContent = m.l;
                btn.onclick = () => {
                    appState.calcModes[axis][p.id] = m.k;
                    // Force re-render of this step to reflect changes
                    const newContent = renderAxisCalculatorTable();
                    dom.configWizard.querySelector('.step-container').innerHTML = '';
                    dom.configWizard.querySelector('.step-container').appendChild(newContent);
                };
                modeContainer.appendChild(btn);
            });
            cell.appendChild(modeContainer);

            // Input Logic based on Mode
            const val = appState.calcParams[axis][p.id];
            let inputHTML = '';
            let extraHTML = '';

            // 1. Belt Mode: Locked input, Calc button active
            if ((p.id === 'gr1' || p.id === 'gr2') && currentMode === 'belt') {
                inputHTML = `<input type="number" class="xls-input locked-input" id="${axis}_${p.id}_input" value="${val}" readonly>`;
                extraHTML = `<button class="xls-calc-btn btn-glow" onclick="openBeltCalc('${axis}', '${p.id}')">${appState.i18n.beltCalcButton || 'Calc'}</button>`;
            } 
            // 2. Standard Mode (Dropdown): Only if opts exist
            else if (currentMode === 'std' && p.stdOpts) {
                 let opts = p.stdOpts.map(o => `<option value="${o}" ${o==val?'selected':''}>${o}</option>`).join('');
                 inputHTML = `<select class="xls-input calc-trigger" data-axis="${axis}" data-param="${p.id}">${opts}</select>`;
            }
            // 3. Custom / Free / Worm Mode: Text Input
            else {
                // If Custom or Worm, we just show a number input
                inputHTML = `<input type="number" class="xls-input calc-trigger" id="${axis}_${p.id}_input" data-axis="${axis}" data-param="${p.id}" value="${val}">`;
                if(p.id.startsWith('gr')) {
                     // Show Calc button for convenience but no glow
                     extraHTML = `<button class="xls-calc-btn" onclick="openBeltCalc('${axis}', '${p.id}')">Calc</button>`;
                }
            }

            cell.innerHTML += inputHTML + extraHTML + `<div id="${axis}_${p.id}_err" class="xls-warning"></div>`;
            table.appendChild(cell);
        });
    });

    // Results Section
    table.innerHTML += `<div class="xls-section-title">Calculated Results</div>`;
    table.innerHTML += `<div class="xls-label">STEPS_PER_DEGREE</div>`;
    ['AXIS1', 'AXIS2'].forEach(axis => {
        table.innerHTML += `<div><div id="${axis}_RES_SPD" class="xls-result">-</div><span id="${axis}_WARN_SPD" class="xls-warning"></span></div>`;
    });
    table.innerHTML += `<div class="xls-label">${appState.i18n.XLS_RESOLUTION} (arc-sec)</div>`;
    ['AXIS1', 'AXIS2'].forEach(axis => {
        table.innerHTML += `<div id="${axis}_RES_TR" class="xls-readout">-</div>`;
    });
    table.innerHTML += `<div class="xls-label">${appState.i18n.XLS_RPM} (@SlewMax)</div>`;
    ['AXIS1', 'AXIS2'].forEach(axis => {
        table.innerHTML += `<div><div id="${axis}_RES_RPM" class="xls-readout">-</div><span id="${axis}_WARN_RPM" class="xls-warning"></span></div>`;
    });

    container.appendChild(table);

    // INFO BOX (Localized)
    const infoBox = document.createElement('div');
    infoBox.className = 'info-box';
    infoBox.innerHTML = `
        <strong>${appState.i18n.XLS_GUIDE_TITLE}</strong>
        <ul>
            <li>${appState.i18n.XLS_GUIDE_RPM}</li>
            <li>${appState.i18n.XLS_GUIDE_RES}</li>
            <li>${appState.i18n.XLS_GUIDE_SLEW}</li>
        </ul>
    `;
    container.appendChild(infoBox);

    setTimeout(() => recalculateXLS(), 0);
    return container;
}

function recalculateXLS() {
    if (!document.querySelector('.xls-table')) return;

    const slewRateInput = document.getElementById('SLEW_RATE_BASE_DESIRED');
    let slewRate = slewRateInput ? parseFloat(slewRateInput.value) : (appState.config.SLEW_RATE_BASE_DESIRED || 2.5);
    
    appState.calcParams.SLEW_RATE = slewRate;

    ['AXIS1', 'AXIS2'].forEach(axis => {
        const p = appState.calcParams[axis];
        
        let isValid = true;
        // Basic validation
        if (p.motor <= 0) isValid = false;
        if (p.gr1 <= 0) isValid = false;
        if (p.gr2 <= 0) isValid = false;

        const motorErr = document.getElementById(`${axis}_motor_err`);
        if(motorErr) motorErr.textContent = (p.motor <= 0) ? "Invalid" : "";

        if (!isValid) return;

        const spd = (p.motor * p.micro * p.gr1 * p.gr2) / 360.0;
        
        appState.config[`${axis}_STEPS_PER_DEGREE`] = spd.toFixed(1);
        appState.config[`${axis}_DRIVER_MICROSTEPS`] = p.micro;

        const spdEl = document.getElementById(`${axis}_RES_SPD`);
        const warnSpdEl = document.getElementById(`${axis}_WARN_SPD`);
        const trEl = document.getElementById(`${axis}_RES_TR`);
        const rpmEl = document.getElementById(`${axis}_RES_RPM`);
        const warnRpmEl = document.getElementById(`${axis}_WARN_RPM`);

        if (spdEl) spdEl.textContent = spd.toLocaleString(undefined, {maximumFractionDigits: 1});
        
        if (spd < 12800 || spd > 61200) {
            if(warnSpdEl) warnSpdEl.textContent = "WARN: Range 12k-61k recommended";
            if(spdEl) spdEl.style.backgroundColor = 'rgba(255,0,0,0.2)';
        } else {
            if(warnSpdEl) warnSpdEl.textContent = "";
            if(spdEl) spdEl.style.backgroundColor = '';
        }

        const res = 3600 / spd; 
        if (trEl) {
            trEl.textContent = res.toFixed(2);
            trEl.style.color = res > 1.0 ? '#ffaa00' : '#28a745'; 
        }

        const totalRatio = p.gr1 * p.gr2;
        const rpm = (slewRate * totalRatio) / 6.0;
        
        if (rpmEl) rpmEl.textContent = rpm.toFixed(1);
        if (rpm > 1500) {
            if(warnRpmEl) warnRpmEl.textContent = "WARN: > 1500 RPM (Stall Risk)";
            if(rpmEl) rpmEl.style.color = '#ff4444';
        } else {
            if(warnRpmEl) warnRpmEl.textContent = "";
            if(rpmEl) rpmEl.style.color = '#28a745';
        }
    });
}

function openBeltCalc(axis, param) {
    appState.activeCalcField = { axis, param };
    dom.beltCalcModal.classList.add('visible');
    
    let applyBtn = document.getElementById('belt-apply-btn');
    if(!applyBtn) {
        applyBtn = document.createElement('button');
        applyBtn.id = 'belt-apply-btn';
        applyBtn.className = 'button primary';
        applyBtn.style.marginTop = '1rem';
        applyBtn.style.width = '100%';
        applyBtn.textContent = appState.i18n.beltCalcApply || "Apply Ratio";
        dom.beltResultText.parentNode.appendChild(applyBtn);
        applyBtn.onclick = applyBeltCalcResult;
    }
    calculateBeltLength();
}

function applyBeltCalcResult() {
    if (!appState.activeCalcField) return;
    const p1 = parseFloat(document.getElementById('belt-p1').value);
    const p2 = parseFloat(document.getElementById('belt-p2').value);
    
    if (p1 > 0 && p2 > 0) {
        const ratio = p2 / p1;
        const { axis, param } = appState.activeCalcField;
        appState.calcParams[axis][param] = ratio;
        appState.calcModes[axis][param] = 'belt'; 
        hideInfoModal(dom.beltCalcModal);
        
        // Refresh Table
        const newContent = renderAxisCalculatorTable();
        dom.configWizard.querySelector('.step-container').innerHTML = '';
        dom.configWizard.querySelector('.step-container').appendChild(newContent);
    }
}

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
    const ratio = (p2/p1).toFixed(4);
    
    // Corrected to use proper localization keys
    dom.beltResultText.innerHTML = `
        ${appState.i18n.beltCalcLength}: <strong>${length.toFixed(2)} mm</strong><br>
        ${appState.i18n.beltCalcTeeth}: <strong>${teeth}</strong><br>
        <hr style="border: 0; border-top: 1px solid #444; margin: 0.5rem 0;">
        Ratio (P2/P1): <strong>${ratio}</strong>
    `;
}
