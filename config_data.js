
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
        "advancedMode": "Advanced Mode",
        
        "cat_Controller": "Controller & Hardware",
        "cat_Mount": "Mount Geometry",
        "cat_Gearing": "Motors & Gearing",
        "cat_Axis1": "Axis 1 (RA/AZM)",
        "cat_Axis2": "Axis 2 (DEC/ALT)",
        "cat_Tracking": "Tracking & Guiding",
        "cat_Features": "Aux Features & Sensors",
        "cat_Summary": "Summary",

        "downloadButton": "Download Config.h",
        "summaryText": "Preview your configuration below. The file includes full original comments, translated to your language.",
        "summaryWaiting": "Click Download to generate...",
        
        // Belt Calculator
        "beltCalcButton": "Calculate Belt",
        "beltCalcApply": "Apply Ratio",
        "beltCalcTitle": "Belt Calculator",
        "beltCalcResult": "Result",
        "beltCalcLength": "Required Belt Length",
        "beltCalcTeeth": "Nearest Tooth Count",
        "beltCalcType": "Belt Type",
        "beltCalcPitch": "Pitch (mm)",
        "beltCalcP1": "Pulley 1 (Teeth)",
        "beltCalcP2": "Pulley 2 (Teeth)",
        "beltCalcDist": "Axle Distance (mm)",

        // Calculator Guide
        "XLS_GUIDE_TITLE": "Guide / Limits:",
        "XLS_GUIDE_RPM": "<strong>RPM:</strong> Should be <code>&lt; 1500</code> (ideally &lt; 1200) to avoid motor stalling.",
        "XLS_GUIDE_RES": "<strong>Resolution:</strong> Ideally <code>&lt; 1.0 arc-sec</code> for astrophotography.",
        "XLS_GUIDE_SLEW": "<strong>Slew Rate:</strong> 62.5 us/step -> 1.3°/s | 15.6 us/step -> 5°/s (for 32-bit MCU).",

        // Wiki Nav
        "wikiNavPrerequisites": "Prerequisites",
        "wikiNavHardware": "Hardware Selection",
        "wikiNavGearing": "Gearing & Motors",
        "wikiTitle": "Knowledge Base",

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
        "advancedMode": "Haladó Mód",

        "cat_Controller": "Vezérlő és Hardver",
        "cat_Mount": "Mechanika",
        "cat_Gearing": "Motorok és Áttétel",
        "cat_Axis1": "Tengely 1 (RA/AZM)",
        "cat_Axis2": "Tengely 2 (DEC/ALT)",
        "cat_Tracking": "Követés és Vezetés",
        "cat_Features": "Szenzorok és Extrák",
        "cat_Summary": "Összegzés",

        "downloadButton": "Letöltés (Config.h)",
        "summaryText": "A generált fájl előnézete. A fájl tartalmazza az összes eredeti kommentet, magyarra fordítva.",
        "summaryWaiting": "Kattints a letöltéshez a generáláshoz...",
        
        // Belt Calculator
        "beltCalcButton": "Szíjhossz",
        "beltCalcApply": "Mentés & Bezárás",
        "beltCalcTitle": "Szíjhossz Kalkulátor",
        "beltCalcResult": "Eredmény",
        "beltCalcLength": "Szükséges szíjhossz",
        "beltCalcTeeth": "Legközelebbi fogszám",
        "beltCalcType": "Szíj Típus",
        "beltCalcPitch": "Osztás (mm)",
        "beltCalcP1": "1. tárcsa (fog)",
        "beltCalcP2": "2. tárcsa (fog)",
        "beltCalcDist": "Tengelytáv (mm)",

        // Calculator Guide
        "XLS_GUIDE_TITLE": "Útmutató / Határértékek:",
        "XLS_GUIDE_RPM": "<strong>RPM (Fordulat):</strong> Legyen <code>&lt; 1500</code> (ideális: &lt; 1200) a motor lépésvesztésének elkerülésére.",
        "XLS_GUIDE_RES": "<strong>Felbontás:</strong> Asztrofotózáshoz ideális: <code>&lt; 1.0 ívmásodperc</code>.",
        "XLS_GUIDE_SLEW": "<strong>Sebesség:</strong> 62.5 us/lépés -> 1.3°/s | 15.6 us/lépés -> 5°/s (32-bit MCU esetén).",

        // Wiki Nav
        "wikiNavPrerequisites": "Előfeltételek",
        "wikiNavHardware": "Hardver választás",
        "wikiNavGearing": "Áttételek",
        "wikiTitle": "Tudásbázis",

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
// SCHEMAS (Organized by Categories for Advanced/Basic modes)
// ===================================================================================
// Structure:
// key: { type: '...', options: [...], defaultValue: ..., basic: true/false (show in basic mode) }

const SCHEMAS = {
    onstepx: {
        Controller: {
            titleKey: "cat_Controller",
            fields: {
                PINMAP: { type: 'select', labelKey: 'PINMAP_LABEL', options: ['FYSETC_E4', 'MiniPCB', 'MiniPCB2', 'MaxPCB2', 'MaxESP3', 'CNC3', 'STM32Blue', 'MaxSTM3', 'FYSETC_S6_2'], defaultValue: 'FYSETC_E4', basic: true },
                SERIAL_A_BAUD_DEFAULT: { type: 'select', labelKey: 'SERIAL_A_BAUD_DEFAULT_LABEL', options: [9600, 19200, 57600, 115200, 230400, 460800], defaultValue: 9600, basic: false },
                SERIAL_RADIO: { type: 'select', labelKey: 'SERIAL_RADIO_LABEL', options: ['OFF', 'WIFI_ACCESS_POINT', 'WIFI_STATION', 'BLUETOOTH'], defaultValue: 'WIFI_ACCESS_POINT', basic: true },
                STATUS_LED: { type: 'select', labelKey: 'STATUS_LED_LABEL', options: ['OFF', 'ON'], defaultValue: 'ON', basic: true },
                STATUS_BUZZER: { type: 'number', labelKey: 'STATUS_BUZZER_LABEL', defaultValue: 2000, basic: false },
                STEP_WAVE_FORM: { type: 'select', labelKey: 'STEP_WAVE_FORM_LABEL', options: ['SQUARE', 'PULSE'], defaultValue: 'PULSE', basic: false }
            }
        },
        Mount: {
            titleKey: "cat_Mount",
            fields: {
                MOUNT_TYPE: { type: 'select', labelKey: 'MOUNT_TYPE_LABEL', options: ['GEM', 'GEM_TA', 'GEM_TAC', 'FORK', 'FORK_TA', 'FORK_TAC', 'ALTAZM', 'ALTAZM_UNL'], defaultValue: 'GEM', basic: true },
                SLEW_RATE_BASE_DESIRED: { type: 'number', labelKey: 'SLEW_RATE_BASE_DESIRED_LABEL', defaultValue: 2.5, basic: true },
                TIME_LOCATION_SOURCE: { type: 'select', labelKey: 'TIME_LOCATION_SOURCE_LABEL', options: ['OFF', 'DS3231', 'GPS', 'TEENSY'], defaultValue: 'DS3231', basic: true },
                LIMIT_SENSE: { type: 'select', labelKey: 'LIMIT_SENSE_LABEL', options: ['LOW', 'HIGH', 'OFF'], defaultValue: 'LOW', basic: true },
                PIER_SIDE_PREFERRED_DEFAULT: { type: 'select', labelKey: 'PIER_SIDE_PREFERRED_DEFAULT_LABEL', options: ['BEST', 'EAST', 'WEST'], defaultValue: 'EAST', basic: false }
            }
        },
        Gearing: {
            titleKey: "cat_Gearing",
            special: "AXIS_GEARING", // Triggers the calculator UI
            basic: true
        },
        Axis1: {
            titleKey: "cat_Axis1",
            fields: {
                AXIS1_DRIVER_MODEL: { type: 'select', labelKey: 'AXIS_DM_LABEL', options: ['A4988', 'DRV8825', 'TMC2130', 'TMC2209', 'TMC5160', 'LV8729'], defaultValue: 'TMC2209', basic: true },
                AXIS1_DRIVER_MICROSTEPS: { type: 'select', labelKey: 'AXIS_MS_LABEL', options: [8, 16, 32, 64, 128, 256], defaultValue: 32, basic: true },
                AXIS1_DRIVER_MICROSTEPS_GOTO: { type: 'select', labelKey: 'AXIS_MSG_LABEL', options: [1, 2, 4, 8, 16, 32], defaultValue: 4, basic: false },
                AXIS1_DRIVER_IRUN: { type: 'number', labelKey: 'AXIS_IRUN_LABEL', defaultValue: 500, basic: true, condition: { key: 'AXIS1_DRIVER_MODEL', val: 'OFF', invert: true } },
                AXIS1_REVERSE: { type: 'select', labelKey: 'AXIS_REV_LABEL', options: ['OFF', 'ON'], defaultValue: 'OFF', basic: true },
                AXIS1_LIMIT_MIN: { type: 'number', labelKey: 'AXIS_LIMIT_MIN_LABEL', defaultValue: -180, basic: false },
                AXIS1_LIMIT_MAX: { type: 'number', labelKey: 'AXIS_LIMIT_MAX_LABEL', defaultValue: 180, basic: false }
            }
        },
        Axis2: {
            titleKey: "cat_Axis2",
            fields: {
                AXIS2_DRIVER_MODEL: { type: 'select', labelKey: 'AXIS_DM_LABEL', options: ['A4988', 'DRV8825', 'TMC2130', 'TMC2209', 'TMC5160', 'LV8729'], defaultValue: 'TMC2209', basic: true },
                AXIS2_DRIVER_MICROSTEPS: { type: 'select', labelKey: 'AXIS_MS_LABEL', options: [8, 16, 32, 64, 128, 256], defaultValue: 32, basic: true },
                AXIS2_DRIVER_MICROSTEPS_GOTO: { type: 'select', labelKey: 'AXIS_MSG_LABEL', options: [1, 2, 4, 8, 16, 32], defaultValue: 4, basic: false },
                AXIS2_DRIVER_IRUN: { type: 'number', labelKey: 'AXIS_IRUN_LABEL', defaultValue: 500, basic: true, condition: { key: 'AXIS2_DRIVER_MODEL', val: 'OFF', invert: true } },
                AXIS2_REVERSE: { type: 'select', labelKey: 'AXIS_REV_LABEL', options: ['OFF', 'ON'], defaultValue: 'OFF', basic: true },
                AXIS2_LIMIT_MIN: { type: 'number', labelKey: 'AXIS_LIMIT_MIN_LABEL', defaultValue: -90, basic: false },
                AXIS2_LIMIT_MAX: { type: 'number', labelKey: 'AXIS_LIMIT_MAX_LABEL', defaultValue: 90, basic: false }
            }
        },
        Tracking: {
            titleKey: "cat_Tracking",
            fields: {
                GUIDE_TIME_LIMIT: { type: 'number', labelKey: 'GUIDE_TIME_LIMIT_LABEL', defaultValue: 20, basic: false },
                TRACK_BACKLASH_RATE: { type: 'number', labelKey: 'TRACK_BACKLASH_RATE', defaultValue: 20, basic: false },
                TRACK_AUTOSTART: { type: 'select', labelKey: 'TRACK_AUTOSTART', options: ['OFF', 'ON'], defaultValue: 'OFF', basic: false }
            }
        },
        Features: {
            titleKey: "cat_Features",
            fields: {
                FEATURE1_PURPOSE: { type: 'select', labelKey: 'FEATURE1_PURPOSE', options: ['OFF', 'DEW_HEATER', 'SWITCH', 'ANALOG_OUT'], defaultValue: 'OFF', basic: false },
                FEATURE1_PIN: { type: 'number', labelKey: 'FEATURE1_PIN', defaultValue: 0, basic: false, condition: { key: 'FEATURE1_PURPOSE', val: 'OFF', invert: true } },
                WEATHER: { type: 'select', labelKey: 'WEATHER', options: ['OFF', 'BME280_0x76', 'BME280', 'BMP280'], defaultValue: 'OFF', basic: false }
            }
        },
        Summary: {
            titleKey: "cat_Summary",
            special: "_summary",
            basic: true
        }
    },
    
    // Classic Schema follows similar structure but with restricted options
    classic: {
        Controller: {
            titleKey: "cat_Controller",
            fields: {
                PINMAP: { type: 'select', labelKey: 'PINMAP_LABEL', options: ['MksGenL2', 'MiniPCB2', 'MaxPCB2', 'MaxESP3', 'CNC3', 'STM32Blue', 'MaxSTM3', 'FYSETC_S6_2'], defaultValue: 'OFF', basic: true },
                SERIAL_A_BAUD_DEFAULT: { type: 'select', labelKey: 'SERIAL_A_BAUD_DEFAULT_LABEL', options: [9600, 19200, 57600, 115200], defaultValue: 9600, basic: false },
                STATUS_LED: { type: 'select', labelKey: 'STATUS_LED_LABEL', options: ['OFF', 'ON'], defaultValue: 'ON', basic: true }
            }
        },
        Mount: {
            titleKey: "cat_Mount",
            fields: {
                MOUNT_TYPE: { type: 'select', labelKey: 'MOUNT_TYPE_LABEL', options: ['GEM', 'FORK', 'ALTAZM'], defaultValue: 'GEM', basic: true },
                SLEW_RATE_BASE_DESIRED: { type: 'number', labelKey: 'SLEW_RATE_BASE_DESIRED_LABEL', defaultValue: 2.5, basic: true },
                TIME_LOCATION_SOURCE: { type: 'select', labelKey: 'TIME_LOCATION_SOURCE_LABEL', options: ['OFF', 'DS3231', 'GPS', 'TEENSY'], defaultValue: 'OFF', basic: true }
            }
        },
        Gearing: {
            titleKey: "cat_Gearing",
            special: "AXIS_GEARING",
            basic: true
        },
        Axis1: {
            titleKey: "cat_Axis1",
            fields: {
                AXIS1_DRIVER_MODEL: { type: 'select', labelKey: 'AXIS_DM_LABEL', options: ['A4988', 'DRV8825', 'LV8729', 'TMC2209'], defaultValue: 'A4988', basic: true },
                AXIS1_DRIVER_MICROSTEPS: { type: 'select', labelKey: 'AXIS_MS_LABEL', options: [8, 16, 32], defaultValue: 16, basic: true },
                AXIS1_REVERSE: { type: 'select', labelKey: 'AXIS_REV_LABEL', options: ['OFF', 'ON'], defaultValue: 'OFF', basic: true }
            }
        },
        Axis2: {
            titleKey: "cat_Axis2",
            fields: {
                AXIS2_DRIVER_MODEL: { type: 'select', labelKey: 'AXIS_DM_LABEL', options: ['A4988', 'DRV8825', 'LV8729', 'TMC2209'], defaultValue: 'A4988', basic: true },
                AXIS2_DRIVER_MICROSTEPS: { type: 'select', labelKey: 'AXIS_MS_LABEL', options: [8, 16, 32], defaultValue: 16, basic: true },
                AXIS2_REVERSE: { type: 'select', labelKey: 'AXIS_REV_LABEL', options: ['OFF', 'ON'], defaultValue: 'OFF', basic: true }
            }
        },
        Summary: {
            titleKey: "cat_Summary",
            special: "_summary",
            basic: true
        }
    }
};
