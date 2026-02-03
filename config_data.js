
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

        // Labels & Descriptions
        "PINMAP_LABEL": "Board Type",
        "PINMAP_DESC": "Select the specific microcontroller board you are using (e.g., FYSETC E4, CNC3).",
        "MOUNT_TYPE_LABEL": "Mount Type",
        "MOUNT_TYPE_DESC": "Defines the geometry of your mount (GEM for Equatorial, ALTAZM for Alt-Az).",
        "SLEW_RATE_BASE_DESIRED_LABEL": "Max Slew Rate (°/s)",
        "SLEW_RATE_BASE_DESIRED_DESC": "The maximum speed for GOTO movements. Lower this if motors stall.",
        "SERIAL_A_BAUD_DEFAULT_LABEL": "Serial Baud Rate",
        "SERIAL_A_BAUD_DEFAULT_DESC": "Communication speed for the USB/Serial connection.",
        "TIME_LOCATION_SOURCE_LABEL": "Time/Location Source",
        "TIME_LOCATION_SOURCE_DESC": "Hardware used to provide real-time clock and location (GPS, DS3231).",
        "GUIDE_TIME_LIMIT_LABEL": "Guide Time Limit (s)",
        "GUIDE_TIME_LIMIT_DESC": "Safety feature: stops guiding if no command is received for N seconds.",
        "LIMIT_SENSE_LABEL": "Limit Switch Logic",
        "LIMIT_SENSE_DESC": "Defines the active state (HIGH/LOW) of limit switches.",
        "PIER_SIDE_PREFERRED_DEFAULT_LABEL": "Preferred Pier Side",
        "PIER_SIDE_PREFERRED_DEFAULT_DESC": "Preferred side of pier to stay on after a Meridian Flip.",
        "STATUS_LED_LABEL": "Status LED",
        "STATUS_LED_DESC": "Enables the onboard LED to blink status codes.",
        "STATUS_BUZZER_LABEL": "Buzzer Frequency",
        "STATUS_BUZZER_DESC": "Frequency in Hz. Set to 0 to disable sound.",
        "SERIAL_RADIO_LABEL": "WiFi Mode (ESP32)",
        "SERIAL_RADIO_DESC": "Configures the ESP32 wireless radio (Access Point or Station).",
        "STEP_WAVE_FORM_LABEL": "Step Wave Form",
        "STEP_WAVE_FORM_DESC": "Pulse allows higher speeds, Square is more compatible.",
        
        "XLS_MOTOR_STEPS": "Motor Steps",
        "XLS_MICROSTEPS": "Microsteps",
        "XLS_GR1": "Gear Ratio 1",
        "XLS_GR2": "Gear Ratio 2",
        "XLS_RESOLUTION": "Resolution",
        "XLS_RPM": "Motor RPM",
        
        "AXIS_DM_LABEL": "Driver Model",
        "AXIS_DM_DESC": "Type of stepper driver (e.g., TMC2209, A4988).",
        "AXIS_MS_LABEL": "Microsteps (Tracking)",
        "AXIS_MS_DESC": "Microstepping used during sidereal tracking.",
        "AXIS_MSG_LABEL": "Microsteps (GoTo)",
        "AXIS_MSG_DESC": "Microstepping used during high-speed slewing.",
        "AXIS_REV_LABEL": "Reverse Direction",
        "AXIS_REV_DESC": "Reverses motor rotation via software.",
        "AXIS_LIMIT_MIN_LABEL": "Limit Min (°)",
        "AXIS_LIMIT_MIN_DESC": "Software limit: Minimum angle.",
        "AXIS_LIMIT_MAX_LABEL": "Limit Max (°)",
        "AXIS_LIMIT_MAX_DESC": "Software limit: Maximum angle.",
        "AXIS_IRUN_LABEL": "Run Current (mA)",
        "AXIS_IRUN_DESC": "Current supplied to the motor during movement (TMC drivers)."
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

        // Labels & Descriptions
        "PINMAP_LABEL": "Vezérlőpanel Típusa",
        "PINMAP_DESC": "Válaszd ki a használt vezérlőpanelt (pl. FYSETC E4, CNC3).",
        "MOUNT_TYPE_LABEL": "Mechanika Típusa",
        "MOUNT_TYPE_DESC": "A mechanika geometriája (GEM: Német Ekvatoriális, ALTAZM: Alt-Az).",
        "SLEW_RATE_BASE_DESIRED_LABEL": "Max Sebesség (°/s)",
        "SLEW_RATE_BASE_DESIRED_DESC": "A GOTO mozgás maximális sebessége.",
        "SERIAL_A_BAUD_DEFAULT_LABEL": "Soros Baud Ráta",
        "SERIAL_A_BAUD_DEFAULT_DESC": "Kommunikációs sebesség USB/Soros porton.",
        "TIME_LOCATION_SOURCE_LABEL": "Idő/Hely Forrás",
        "TIME_LOCATION_SOURCE_DESC": "Valós idejű óra és helymeghatározó hardver (GPS, DS3231).",
        "GUIDE_TIME_LIMIT_LABEL": "Vezetési Idő Limit (s)",
        "GUIDE_TIME_LIMIT_DESC": "Biztonsági funkció: leállítja a vezetést, ha nem érkezik parancs.",
        "LIMIT_SENSE_LABEL": "Végállás Logika",
        "LIMIT_SENSE_DESC": "A végállás kapcsolók aktív állapota (HIGH/LOW).",
        "PIER_SIDE_PREFERRED_DEFAULT_LABEL": "Preferált Oldal",
        "PIER_SIDE_PREFERRED_DEFAULT_DESC": "Meridián átfordulás után melyik oldalon maradjon.",
        "STATUS_LED_LABEL": "Állapot LED",
        "STATUS_LED_DESC": "A vezérlő LED-je villog hibakódokat vagy állapotot.",
        "STATUS_BUZZER_LABEL": "Csipogó Frekvencia",
        "STATUS_BUZZER_DESC": "Frekvencia Hz-ben. 0 a kikapcsoláshoz.",
        "SERIAL_RADIO_LABEL": "WiFi Mód (ESP32)",
        "SERIAL_RADIO_DESC": "ESP32 WiFi beállítása (Access Point vagy Station).",
        "STEP_WAVE_FORM_LABEL": "Lépés Hullámforma",
        "STEP_WAVE_FORM_DESC": "PULSE: nagyobb sebesség, SQUARE: nagyobb kompatibilitás.",
        
        "XLS_MOTOR_STEPS": "Motor Lépés",
        "XLS_MICROSTEPS": "Mikrolépés",
        "XLS_GR1": "Áttétel 1",
        "XLS_GR2": "Áttétel 2",
        "XLS_RESOLUTION": "Felbontás",
        "XLS_RPM": "Motor Fordulat",
        
        "AXIS_DM_LABEL": "Driver Modell",
        "AXIS_DM_DESC": "Léptetőmotor vezérlő típusa (pl. TMC2209).",
        "AXIS_MS_LABEL": "Mikrolépés (Követés)",
        "AXIS_MS_DESC": "Mikrolépés beállítás követés közben.",
        "AXIS_MSG_LABEL": "Mikrolépés (GoTo)",
        "AXIS_MSG_DESC": "Mikrolépés beállítás gyorsmozgás közben.",
        "AXIS_REV_LABEL": "Irányváltás",
        "AXIS_REV_DESC": "Szoftveresen megfordítja a motor forgásirányát.",
        "AXIS_LIMIT_MIN_LABEL": "Limit Min (°)",
        "AXIS_LIMIT_MIN_DESC": "Szoftveres végállás: Minimum szög.",
        "AXIS_LIMIT_MAX_LABEL": "Limit Max (°)",
        "AXIS_LIMIT_MAX_DESC": "Szoftveres végállás: Maximum szög.",
        "AXIS_IRUN_LABEL": "Áramerősség (mA)",
        "AXIS_IRUN_DESC": "A motor árama mozgás közben (TMC drivereknél)."
    }
};

// ===================================================================================
// SCHEMAS (Expanded for detailed configuration)
// ===================================================================================
const SCHEMAS = {
    onstepx: [
        { // Step 1: Basics
            PINMAP: { type: 'select', labelKey: 'PINMAP_LABEL', descriptionKey: 'PINMAP_DESC', options: ['FYSETC_E4', 'MiniPCB', 'MiniPCB2', 'MaxPCB2', 'MaxESP3', 'CNC3', 'STM32Blue', 'MaxSTM3', 'FYSETC_S6_2'], defaultValue: 'FYSETC_E4' },
            MOUNT_TYPE: { type: 'select', labelKey: 'MOUNT_TYPE_LABEL', descriptionKey: 'MOUNT_TYPE_DESC', options: ['GEM', 'GEM_TA', 'GEM_TAC', 'FORK', 'FORK_TA', 'FORK_TAC', 'ALTAZM', 'ALTAZM_UNL'], defaultValue: 'GEM' },
            SLEW_RATE_BASE_DESIRED: { type: 'number', labelKey: 'SLEW_RATE_BASE_DESIRED_LABEL', descriptionKey: 'SLEW_RATE_BASE_DESIRED_DESC', defaultValue: 2.5 }
        },
        { // Step 2: Gearing (Custom Calculator UI)
            AXIS_GEARING: { type: 'axis_calculator_table' }
        },
        { // Step 3: Drivers
            AXIS1_DRIVER_MODEL: { type: 'select', labelKey: 'AXIS_DM_LABEL', descriptionKey: 'AXIS_DM_DESC', options: ['A4988', 'DRV8825', 'TMC2130', 'TMC2209', 'TMC5160'], defaultValue: 'TMC2209' },
            AXIS1_DRIVER_MICROSTEPS: { type: 'select', labelKey: 'AXIS_MS_LABEL', descriptionKey: 'AXIS_MS_DESC', options: [8, 16, 32, 64, 128], defaultValue: 32 },
            AXIS1_DRIVER_MICROSTEPS_GOTO: { type: 'select', labelKey: 'AXIS_MSG_LABEL', descriptionKey: 'AXIS_MSG_DESC', options: [1, 2, 4, 8, 16], defaultValue: 4 },
            AXIS1_DRIVER_IRUN: { type: 'number', labelKey: 'AXIS_IRUN_LABEL', descriptionKey: 'AXIS_IRUN_DESC', defaultValue: 500 },
            AXIS1_REVERSE: { type: 'select', labelKey: 'AXIS_REV_LABEL', descriptionKey: 'AXIS_REV_DESC', options: ['OFF', 'ON'], defaultValue: 'OFF' },
            AXIS1_LIMIT_MIN: { type: 'number', labelKey: 'AXIS_LIMIT_MIN_LABEL', descriptionKey: 'AXIS_LIMIT_MIN_DESC', defaultValue: -180 },
            AXIS1_LIMIT_MAX: { type: 'number', labelKey: 'AXIS_LIMIT_MAX_LABEL', descriptionKey: 'AXIS_LIMIT_MAX_DESC', defaultValue: 180 },
            
            _separator: true, // Internal flag for visual separation

            AXIS2_DRIVER_MODEL: { type: 'select', labelKey: 'AXIS_DM_LABEL', descriptionKey: 'AXIS_DM_DESC', options: ['A4988', 'DRV8825', 'TMC2130', 'TMC2209', 'TMC5160'], defaultValue: 'TMC2209' },
            AXIS2_DRIVER_MICROSTEPS: { type: 'select', labelKey: 'AXIS_MS_LABEL', descriptionKey: 'AXIS_MS_DESC', options: [8, 16, 32, 64, 128], defaultValue: 32 },
            AXIS2_DRIVER_MICROSTEPS_GOTO: { type: 'select', labelKey: 'AXIS_MSG_LABEL', descriptionKey: 'AXIS_MSG_DESC', options: [1, 2, 4, 8, 16], defaultValue: 4 },
            AXIS2_DRIVER_IRUN: { type: 'number', labelKey: 'AXIS_IRUN_LABEL', descriptionKey: 'AXIS_IRUN_DESC', defaultValue: 500 },
            AXIS2_REVERSE: { type: 'select', labelKey: 'AXIS_REV_LABEL', descriptionKey: 'AXIS_REV_DESC', options: ['OFF', 'ON'], defaultValue: 'OFF' },
            AXIS2_LIMIT_MIN: { type: 'number', labelKey: 'AXIS_LIMIT_MIN_LABEL', descriptionKey: 'AXIS_LIMIT_MIN_DESC', defaultValue: -90 },
            AXIS2_LIMIT_MAX: { type: 'number', labelKey: 'AXIS_LIMIT_MAX_LABEL', descriptionKey: 'AXIS_LIMIT_MAX_DESC', defaultValue: 90 },
        },
        { // Step 4: Peripherals
            SERIAL_A_BAUD_DEFAULT: { type: 'select', labelKey: 'SERIAL_A_BAUD_DEFAULT_LABEL', descriptionKey: 'SERIAL_A_BAUD_DEFAULT_DESC', options: [9600, 19200, 57600, 115200], defaultValue: 9600 },
            SERIAL_RADIO: { type: 'select', labelKey: 'SERIAL_RADIO_LABEL', descriptionKey: 'SERIAL_RADIO_DESC', options: ['OFF', 'WIFI_ACCESS_POINT', 'WIFI_STATION', 'BLUETOOTH'], defaultValue: 'WIFI_ACCESS_POINT' },
            TIME_LOCATION_SOURCE: { type: 'select', labelKey: 'TIME_LOCATION_SOURCE_LABEL', descriptionKey: 'TIME_LOCATION_SOURCE_DESC', options: ['OFF', 'DS3231', 'GPS', 'TEENSY'], defaultValue: 'DS3231' },
            STATUS_LED: { type: 'select', labelKey: 'STATUS_LED_LABEL', descriptionKey: 'STATUS_LED_DESC', options: ['OFF', 'ON'], defaultValue: 'ON' },
            STATUS_BUZZER: { type: 'number', labelKey: 'STATUS_BUZZER_LABEL', descriptionKey: 'STATUS_BUZZER_DESC', defaultValue: 2000 },
            LIMIT_SENSE: { type: 'select', labelKey: 'LIMIT_SENSE_LABEL', descriptionKey: 'LIMIT_SENSE_DESC', options: ['LOW', 'HIGH', 'OFF'], defaultValue: 'LOW' },
            PIER_SIDE_PREFERRED_DEFAULT: { type: 'select', labelKey: 'PIER_SIDE_PREFERRED_DEFAULT_LABEL', descriptionKey: 'PIER_SIDE_PREFERRED_DEFAULT_DESC', options: ['BEST', 'EAST', 'WEST'], defaultValue: 'EAST' },
            GUIDE_TIME_LIMIT: { type: 'number', labelKey: 'GUIDE_TIME_LIMIT_LABEL', descriptionKey: 'GUIDE_TIME_LIMIT_DESC', defaultValue: 20 },
            STEP_WAVE_FORM: { type: 'select', labelKey: 'STEP_WAVE_FORM_LABEL', descriptionKey: 'STEP_WAVE_FORM_DESC', options: ['SQUARE', 'PULSE'], defaultValue: 'PULSE' }
        },
        { // Step 5: Summary
            _summary: true
        }
    ],
    classic: [
        { // Step 1
            PINMAP: { type: 'select', labelKey: 'PINMAP_LABEL', descriptionKey: 'PINMAP_DESC', options: ['MksGenL2', 'MiniPCB2', 'MaxPCB2', 'MaxESP3', 'CNC3', 'STM32Blue', 'MaxSTM3', 'FYSETC_S6_2'], defaultValue: 'OFF' },
            MOUNT_TYPE: { type: 'select', labelKey: 'MOUNT_TYPE_LABEL', descriptionKey: 'MOUNT_TYPE_DESC', options: ['GEM', 'FORK', 'ALTAZM'], defaultValue: 'GEM' },
            SLEW_RATE_BASE_DESIRED: { type: 'number', labelKey: 'SLEW_RATE_BASE_DESIRED_LABEL', descriptionKey: 'SLEW_RATE_BASE_DESIRED_DESC', defaultValue: 2.5 }
        },
        { // Step 2
            AXIS_GEARING: { type: 'axis_calculator_table' }
        },
        { // Step 3
            AXIS1_DRIVER_MODEL: { type: 'select', labelKey: 'AXIS_DM_LABEL', descriptionKey: 'AXIS_DM_DESC', options: ['A4988', 'DRV8825', 'LV8729', 'TMC2209'], defaultValue: 'A4988' },
            AXIS1_DRIVER_MICROSTEPS: { type: 'select', labelKey: 'AXIS_MS_LABEL', descriptionKey: 'AXIS_MS_DESC', options: [8, 16, 32], defaultValue: 16 },
            AXIS1_DRIVER_MICROSTEPS_GOTO: { type: 'select', labelKey: 'AXIS_MSG_LABEL', descriptionKey: 'AXIS_MSG_DESC', options: [1, 2, 4, 8], defaultValue: 4 },
            AXIS1_DRIVER_REVERSE: { type: 'select', labelKey: 'AXIS_REV_LABEL', descriptionKey: 'AXIS_REV_DESC', options: ['OFF', 'ON'], defaultValue: 'OFF' },
            AXIS1_LIMIT_MIN: { type: 'number', labelKey: 'AXIS_LIMIT_MIN_LABEL', descriptionKey: 'AXIS_LIMIT_MIN_DESC', defaultValue: -180 },
            AXIS1_LIMIT_MAX: { type: 'number', labelKey: 'AXIS_LIMIT_MAX_LABEL', descriptionKey: 'AXIS_LIMIT_MAX_DESC', defaultValue: 180 },

            _separator: true,

            AXIS2_DRIVER_MODEL: { type: 'select', labelKey: 'AXIS_DM_LABEL', descriptionKey: 'AXIS_DM_DESC', options: ['A4988', 'DRV8825', 'LV8729', 'TMC2209'], defaultValue: 'A4988' },
            AXIS2_DRIVER_MICROSTEPS: { type: 'select', labelKey: 'AXIS_MS_LABEL', descriptionKey: 'AXIS_MS_DESC', options: [8, 16, 32], defaultValue: 16 },
            AXIS2_DRIVER_MICROSTEPS_GOTO: { type: 'select', labelKey: 'AXIS_MSG_LABEL', descriptionKey: 'AXIS_MSG_DESC', options: [1, 2, 4, 8], defaultValue: 4 },
            AXIS2_DRIVER_REVERSE: { type: 'select', labelKey: 'AXIS_REV_LABEL', descriptionKey: 'AXIS_REV_DESC', options: ['OFF', 'ON'], defaultValue: 'OFF' },
            AXIS2_LIMIT_MIN: { type: 'number', labelKey: 'AXIS_LIMIT_MIN_LABEL', descriptionKey: 'AXIS_LIMIT_MIN_DESC', defaultValue: -90 },
            AXIS2_LIMIT_MAX: { type: 'number', labelKey: 'AXIS_LIMIT_MAX_LABEL', descriptionKey: 'AXIS_LIMIT_MAX_DESC', defaultValue: 90 },
        },
        { // Step 4
            SERIAL_A_BAUD_DEFAULT: { type: 'select', labelKey: 'SERIAL_A_BAUD_DEFAULT_LABEL', descriptionKey: 'SERIAL_A_BAUD_DEFAULT_DESC', options: [9600, 19200, 57600, 115200], defaultValue: 9600 },
            TIME_LOCATION_SOURCE: { type: 'select', labelKey: 'TIME_LOCATION_SOURCE_LABEL', descriptionKey: 'TIME_LOCATION_SOURCE_DESC', options: ['OFF', 'DS3231', 'GPS', 'TEENSY'], defaultValue: 'OFF' },
            STATUS_LED: { type: 'select', labelKey: 'STATUS_LED_LABEL', descriptionKey: 'STATUS_LED_DESC', options: ['OFF', 'ON'], defaultValue: 'ON' },
            STEP_WAVE_FORM: { type: 'select', labelKey: 'STEP_WAVE_FORM_LABEL', descriptionKey: 'STEP_WAVE_FORM_DESC', options: ['SQUARE', 'PULSE'], defaultValue: 'SQUARE' }
        },
        { // Step 5
            _summary: true
        }
    ]
};
