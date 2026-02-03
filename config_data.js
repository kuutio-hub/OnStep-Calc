
// ===================================================================================
// LOCALES (UI Translations)
// ===================================================================================
const LOCALES = {
    en: {
        "appTitle": "OnStep Configurator",
        "appDescription": "Welcome! This tool helps you create a personalized configuration file for your OnStep telescope controller.",
        "classicTitle": "OnStep Classic",
        "onstepxTitle": "OnStepX",
        "classicTagline": "For 8-bit controllers (Arduino Mega).",
        "onstepxTagline": "For 32-bit controllers (ESP32, STM32).",
        "classicFeatures": "<li>Target: 8-bit MCU</li><li>Features: Basic Tracking/GoTo</li>",
        "onstepxFeatures": "<li>Target: 32-bit MCU</li><li>Features: Web Interface, WiFi, Advanced Pointing</li>",
        "wikiButton": "Wiki / Help",
        "backToHomeButton": "Main Menu",
        "wizardTitleStep1": "Basic Hardware",
        "wizardTitleStep2": "Gearing (Calculator)",
        "wizardTitleStep3": "Driver Settings",
        "wizardTitleStep4": "Peripherals & Features",
        "wizardTitleStep5": "Summary",
        "wizardPrev": "Back",
        "wizardNext": "Next",
        "downloadButton": "Download Config.h",
        "summaryText": "Preview your configuration below. The file includes full original comments, translated to your language.",
        "summaryWaiting": "Click Download to generate...",
        "beltCalcButton": "Calculate Belt",
        "beltCalcApply": "Apply Ratio",
        "beltCalcTitle": "Belt Calculator",
        "beltCalcResult": "Result",
        // Labels
        "PINMAP_LABEL": "Board Type",
        "MOUNT_TYPE_LABEL": "Mount Type",
        "SLEW_RATE_BASE_DESIRED_LABEL": "Max Slew Rate (°/s)",
        "SERIAL_A_BAUD_DEFAULT_LABEL": "Serial Baud Rate",
        "TIME_LOCATION_SOURCE_LABEL": "Time/Location Source",
        "GUIDE_TIME_LIMIT_LABEL": "Guide Time Limit (s)",
        "LIMIT_SENSE_LABEL": "Limit Switch Logic",
        "PIER_SIDE_PREFERRED_DEFAULT_LABEL": "Preferred Pier Side",
        "STATUS_LED_LABEL": "Status LED",
        "STATUS_BUZZER_LABEL": "Buzzer Frequency",
        "SERIAL_RADIO_LABEL": "WiFi Mode (ESP32)",
        "STEP_WAVE_FORM_LABEL": "Step Wave Form",
        "XLS_MOTOR_STEPS": "Motor Steps",
        "XLS_MICROSTEPS": "Microsteps",
        "XLS_GR1": "Gear Ratio 1",
        "XLS_GR2": "Gear Ratio 2",
        "XLS_RESOLUTION": "Resolution",
        "XLS_RPM": "Motor RPM",
        "AXIS_DM_LABEL": "Driver Model",
        "AXIS_MS_LABEL": "Microsteps (Tracking)",
        "AXIS_MSG_LABEL": "Microsteps (GoTo)",
        "AXIS_REV_LABEL": "Reverse Direction",
        "AXIS_LIMIT_MIN_LABEL": "Limit Min (°)",
        "AXIS_LIMIT_MAX_LABEL": "Limit Max (°)",
        "AXIS_IRUN_LABEL": "Run Current (mA)"
    },
    hu: {
        "appTitle": "OnStep Konfigurátor",
        "appDescription": "Üdvözlünk! Készítsd el a saját OnStep vezérlődhöz tartozó Config.h fájlt egyszerűen.",
        "classicTitle": "OnStep Classic",
        "onstepxTitle": "OnStepX",
        "classicTagline": "8-bites vezérlőkhöz (pl. Arduino Mega).",
        "onstepxTagline": "32-bites vezérlőkhöz (pl. ESP32, STM32).",
        "classicFeatures": "<li>Cél: 8-bit MCU</li><li>Funkciók: Alap követés/GoTo</li>",
        "onstepxFeatures": "<li>Cél: 32-bit MCU</li><li>Funkciók: Web interfész, WiFi, Fejlett modellek</li>",
        "wikiButton": "Wiki / Súgó",
        "backToHomeButton": "Főmenü",
        "wizardTitleStep1": "Alap Hardver",
        "wizardTitleStep2": "Áttételek (Kalkulátor)",
        "wizardTitleStep3": "Meghajtó Beállítások",
        "wizardTitleStep4": "Perifériák és Funkciók",
        "wizardTitleStep5": "Összegzés",
        "wizardPrev": "Vissza",
        "wizardNext": "Tovább",
        "downloadButton": "Letöltés (Config.h)",
        "summaryText": "A generált fájl előnézete. A fájl tartalmazza az összes eredeti kommentet, magyarra fordítva.",
        "summaryWaiting": "Kattints a letöltéshez...",
        "beltCalcButton": "Szíjhossz",
        "beltCalcApply": "Mentés & Bezárás",
        "beltCalcTitle": "Szíjhossz Kalkulátor",
        "beltCalcResult": "Eredmény",
        // Labels
        "PINMAP_LABEL": "Vezérlőpanel Típusa",
        "MOUNT_TYPE_LABEL": "Mechanika Típusa",
        "SLEW_RATE_BASE_DESIRED_LABEL": "Max Sebesség (°/s)",
        "SERIAL_A_BAUD_DEFAULT_LABEL": "Soros Baud Ráta",
        "TIME_LOCATION_SOURCE_LABEL": "Idő/Hely Forrás",
        "GUIDE_TIME_LIMIT_LABEL": "Vezetési Idő Limit (s)",
        "LIMIT_SENSE_LABEL": "Végállás Logika",
        "PIER_SIDE_PREFERRED_DEFAULT_LABEL": "Preferált Oldal",
        "STATUS_LED_LABEL": "Állapot LED",
        "STATUS_BUZZER_LABEL": "Csipogó Frekvencia",
        "SERIAL_RADIO_LABEL": "WiFi Mód (ESP32)",
        "STEP_WAVE_FORM_LABEL": "Lépés Hullámforma",
        "XLS_MOTOR_STEPS": "Motor Lépés",
        "XLS_MICROSTEPS": "Mikrolépés",
        "XLS_GR1": "Áttétel 1",
        "XLS_GR2": "Áttétel 2",
        "XLS_RESOLUTION": "Felbontás",
        "XLS_RPM": "Motor Fordulat",
        "AXIS_DM_LABEL": "Driver Modell",
        "AXIS_MS_LABEL": "Mikrolépés (Követés)",
        "AXIS_MSG_LABEL": "Mikrolépés (GoTo)",
        "AXIS_REV_LABEL": "Irányváltás",
        "AXIS_LIMIT_MIN_LABEL": "Limit Min (°)",
        "AXIS_LIMIT_MAX_LABEL": "Limit Max (°)",
        "AXIS_IRUN_LABEL": "Áramerősség (mA)"
    }
};

// ===================================================================================
// SCHEMAS (Expanded for detailed configuration)
// ===================================================================================
const SCHEMAS = {
    onstepx: [
        { // Step 1: Basics
            PINMAP: { type: 'select', labelKey: 'PINMAP_LABEL', options: ['FYSETC_E4', 'MiniPCB', 'MiniPCB2', 'MaxPCB2', 'MaxESP3', 'CNC3', 'STM32Blue', 'MaxSTM3', 'FYSETC_S6_2'], defaultValue: 'FYSETC_E4' },
            MOUNT_TYPE: { type: 'select', labelKey: 'MOUNT_TYPE_LABEL', options: ['GEM', 'GEM_TA', 'GEM_TAC', 'FORK', 'FORK_TA', 'FORK_TAC', 'ALTAZM', 'ALTAZM_UNL'], defaultValue: 'GEM' },
            SLEW_RATE_BASE_DESIRED: { type: 'number', labelKey: 'SLEW_RATE_BASE_DESIRED_LABEL', defaultValue: 2.5 }
        },
        { // Step 2: Gearing (Custom Calculator UI)
            AXIS_GEARING: { type: 'axis_calculator_table' }
        },
        { // Step 3: Drivers
            AXIS1_DRIVER_MODEL: { type: 'select', labelKey: 'AXIS_DM_LABEL', options: ['A4988', 'DRV8825', 'TMC2130', 'TMC2209', 'TMC5160'], defaultValue: 'TMC2209' },
            AXIS1_DRIVER_MICROSTEPS: { type: 'select', labelKey: 'AXIS_MS_LABEL', options: [8, 16, 32, 64, 128], defaultValue: 32 },
            AXIS1_DRIVER_MICROSTEPS_GOTO: { type: 'select', labelKey: 'AXIS_MSG_LABEL', options: [1, 2, 4, 8, 16], defaultValue: 4 },
            AXIS1_DRIVER_IRUN: { type: 'number', labelKey: 'AXIS_IRUN_LABEL', defaultValue: 500 },
            AXIS1_REVERSE: { type: 'select', labelKey: 'AXIS_REV_LABEL', options: ['OFF', 'ON'], defaultValue: 'OFF' },
            AXIS1_LIMIT_MIN: { type: 'number', labelKey: 'AXIS_LIMIT_MIN_LABEL', defaultValue: -180 },
            AXIS1_LIMIT_MAX: { type: 'number', labelKey: 'AXIS_LIMIT_MAX_LABEL', defaultValue: 180 },
            
            _separator: true, // Internal flag for visual separation

            AXIS2_DRIVER_MODEL: { type: 'select', labelKey: 'AXIS_DM_LABEL', options: ['A4988', 'DRV8825', 'TMC2130', 'TMC2209', 'TMC5160'], defaultValue: 'TMC2209' },
            AXIS2_DRIVER_MICROSTEPS: { type: 'select', labelKey: 'AXIS_MS_LABEL', options: [8, 16, 32, 64, 128], defaultValue: 32 },
            AXIS2_DRIVER_MICROSTEPS_GOTO: { type: 'select', labelKey: 'AXIS_MSG_LABEL', options: [1, 2, 4, 8, 16], defaultValue: 4 },
            AXIS2_DRIVER_IRUN: { type: 'number', labelKey: 'AXIS_IRUN_LABEL', defaultValue: 500 },
            AXIS2_REVERSE: { type: 'select', labelKey: 'AXIS_REV_LABEL', options: ['OFF', 'ON'], defaultValue: 'OFF' },
            AXIS2_LIMIT_MIN: { type: 'number', labelKey: 'AXIS_LIMIT_MIN_LABEL', defaultValue: -90 },
            AXIS2_LIMIT_MAX: { type: 'number', labelKey: 'AXIS_LIMIT_MAX_LABEL', defaultValue: 90 },
        },
        { // Step 4: Peripherals
            SERIAL_A_BAUD_DEFAULT: { type: 'select', labelKey: 'SERIAL_A_BAUD_DEFAULT_LABEL', options: [9600, 19200, 57600, 115200], defaultValue: 9600 },
            SERIAL_RADIO: { type: 'select', labelKey: 'SERIAL_RADIO_LABEL', options: ['OFF', 'WIFI_ACCESS_POINT', 'WIFI_STATION', 'BLUETOOTH'], defaultValue: 'WIFI_ACCESS_POINT' },
            TIME_LOCATION_SOURCE: { type: 'select', labelKey: 'TIME_LOCATION_SOURCE_LABEL', options: ['OFF', 'DS3231', 'GPS', 'TEENSY'], defaultValue: 'DS3231' },
            STATUS_LED: { type: 'select', labelKey: 'STATUS_LED_LABEL', options: ['OFF', 'ON'], defaultValue: 'ON' },
            STATUS_BUZZER: { type: 'number', labelKey: 'STATUS_BUZZER_LABEL', defaultValue: 2000 },
            LIMIT_SENSE: { type: 'select', labelKey: 'LIMIT_SENSE_LABEL', options: ['LOW', 'HIGH', 'OFF'], defaultValue: 'LOW' },
            PIER_SIDE_PREFERRED_DEFAULT: { type: 'select', labelKey: 'PIER_SIDE_PREFERRED_DEFAULT_LABEL', options: ['BEST', 'EAST', 'WEST'], defaultValue: 'EAST' },
            GUIDE_TIME_LIMIT: { type: 'number', labelKey: 'GUIDE_TIME_LIMIT_LABEL', defaultValue: 20 },
            STEP_WAVE_FORM: { type: 'select', labelKey: 'STEP_WAVE_FORM_LABEL', options: ['SQUARE', 'PULSE'], defaultValue: 'PULSE' }
        },
        { // Step 5: Summary
            _summary: true
        }
    ],
    classic: [
        { // Step 1
            PINMAP: { type: 'select', labelKey: 'PINMAP_LABEL', options: ['MksGenL2', 'MiniPCB2', 'MaxPCB2', 'MaxESP3', 'CNC3', 'STM32Blue', 'MaxSTM3', 'FYSETC_S6_2'], defaultValue: 'OFF' },
            MOUNT_TYPE: { type: 'select', labelKey: 'MOUNT_TYPE_LABEL', options: ['GEM', 'FORK', 'ALTAZM'], defaultValue: 'GEM' },
            SLEW_RATE_BASE_DESIRED: { type: 'number', labelKey: 'SLEW_RATE_BASE_DESIRED_LABEL', defaultValue: 2.5 }
        },
        { // Step 2
            AXIS_GEARING: { type: 'axis_calculator_table' }
        },
        { // Step 3
            AXIS1_DRIVER_MODEL: { type: 'select', labelKey: 'AXIS_DM_LABEL', options: ['A4988', 'DRV8825', 'LV8729', 'TMC2209'], defaultValue: 'A4988' },
            AXIS1_DRIVER_MICROSTEPS: { type: 'select', labelKey: 'AXIS_MS_LABEL', options: [8, 16, 32], defaultValue: 16 },
            AXIS1_DRIVER_MICROSTEPS_GOTO: { type: 'select', labelKey: 'AXIS_MSG_LABEL', options: [1, 2, 4, 8], defaultValue: 4 },
            AXIS1_DRIVER_REVERSE: { type: 'select', labelKey: 'AXIS_REV_LABEL', options: ['OFF', 'ON'], defaultValue: 'OFF' },
            AXIS1_LIMIT_MIN: { type: 'number', labelKey: 'AXIS_LIMIT_MIN_LABEL', defaultValue: -180 },
            AXIS1_LIMIT_MAX: { type: 'number', labelKey: 'AXIS_LIMIT_MAX_LABEL', defaultValue: 180 },

            _separator: true,

            AXIS2_DRIVER_MODEL: { type: 'select', labelKey: 'AXIS_DM_LABEL', options: ['A4988', 'DRV8825', 'LV8729', 'TMC2209'], defaultValue: 'A4988' },
            AXIS2_DRIVER_MICROSTEPS: { type: 'select', labelKey: 'AXIS_MS_LABEL', options: [8, 16, 32], defaultValue: 16 },
            AXIS2_DRIVER_MICROSTEPS_GOTO: { type: 'select', labelKey: 'AXIS_MSG_LABEL', options: [1, 2, 4, 8], defaultValue: 4 },
            AXIS2_DRIVER_REVERSE: { type: 'select', labelKey: 'AXIS_REV_LABEL', options: ['OFF', 'ON'], defaultValue: 'OFF' },
            AXIS2_LIMIT_MIN: { type: 'number', labelKey: 'AXIS_LIMIT_MIN_LABEL', defaultValue: -90 },
            AXIS2_LIMIT_MAX: { type: 'number', labelKey: 'AXIS_LIMIT_MAX_LABEL', defaultValue: 90 },
        },
        { // Step 4
            SERIAL_A_BAUD_DEFAULT: { type: 'select', labelKey: 'SERIAL_A_BAUD_DEFAULT_LABEL', options: [9600, 19200, 57600, 115200], defaultValue: 9600 },
            TIME_LOCATION_SOURCE: { type: 'select', labelKey: 'TIME_LOCATION_SOURCE_LABEL', options: ['OFF', 'DS3231', 'GPS', 'TEENSY'], defaultValue: 'OFF' },
            STATUS_LED: { type: 'select', labelKey: 'STATUS_LED_LABEL', options: ['OFF', 'ON'], defaultValue: 'ON' },
            STEP_WAVE_FORM: { type: 'select', labelKey: 'STEP_WAVE_FORM_LABEL', options: ['SQUARE', 'PULSE'], defaultValue: 'SQUARE' }
        },
        { // Step 5
            _summary: true
        }
    ]
};
