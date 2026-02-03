
// ===================================================================================
// TEMPLATES (Full content sourced from user input)
// ===================================================================================
const TEMPLATE_ONSTEP_CLASSIC = `
// Configuration for OnStep
/*
 *          For more information on setting OnStep up see http://www.stellarjourney.com/index.php?r=site/equipment_onstep 
 *                      and join the OnStep Groups.io at https://groups.io/g/onstep
 */

// PINMAP
#define PINMAP                        OFF 
#define SERIAL_A_BAUD_DEFAULT        9600 
#define SERIAL_B_BAUD_DEFAULT        9600 
#define SERIAL_B_ESP_FLASHING         OFF 
#define SERIAL_C_BAUD_DEFAULT         OFF 
#define SERIAL_C_BLUETOOTH_NAME  "OnStep" 

// MOUNT TYPE
#define MOUNT_TYPE                    GEM 

// USER FEEDBACK
#define LED_STATUS                     ON 
#define LED_STATUS2                   OFF 
#define LED_RETICLE                   OFF 
#define BUZZER                        OFF 
#define BUZZER_STATE_DEFAULT          OFF 

// TIME AND LOCATION
#define TIME_LOCATION_SOURCE          OFF 

// SENSORS
#define WEATHER                       OFF 
#define TELESCOPE_TEMPERATURE         OFF 
#define HOME_SENSE                    OFF 
#define HOME_SENSE_STATE_AXIS1       HIGH 
#define HOME_SENSE_STATE_AXIS2       HIGH 
#define LIMIT_SENSE                   OFF 
#define LIMIT_SENSE_STATE             LOW 
#define PEC_SENSE                     OFF 
#define PEC_SENSE_STATE              HIGH 
#define PPS_SENSE                     OFF 

// ST4 INTERFACE
#define ST4_INTERFACE                 OFF 
#define ST4_HAND_CONTROL              OFF 
#define ST4_HAND_CONTROL_FOCUSER      OFF 

// GUIDING BEHAVIOUR
#define GUIDE_TIME_LIMIT                0 
#define GUIDE_DISABLE_BACKLASH        OFF 

// TRACKING BEHAVIOUR
#define TRACK_AUTOSTART               OFF 
#define TRACK_REFRACTION_RATE_DEFAULT OFF 
#define TRACK_BACKLASH_RATE            25 

// SLEWING BEHAVIOUR
#define SLEW_RATE_BASE_DESIRED        1.0 
#define SLEW_RATE_MEMORY              OFF 
#define SLEW_ACCELERATION_DIST        5.0 
#define SLEW_RAPID_STOP_DIST          2.5 

// PIER SIDE BEHAVIOUR
#define MFLIP_SKIP_HOME               OFF 
#define MFLIP_PAUSE_HOME_MEMORY       OFF 
#define MFLIP_AUTOMATIC_MEMORY        OFF 
#define PIER_SIDE_SYNC_CHANGE_SIDES   OFF 
#define PIER_SIDE_PREFERRED_DEFAULT  BEST 

// PARKING BEHAVIOUR
#define STRICT_PARKING                OFF 

// MOTION CONTROL
#define STEP_WAVE_FORM             SQUARE 

// AXIS1 RA/AZM
#define AXIS1_STEPS_PER_DEGREE    12800.0 
#define AXIS1_STEPS_PER_WORMROT         0 
#define AXIS1_DRIVER_MODEL            OFF 
#define AXIS1_DRIVER_MICROSTEPS       OFF 
#define AXIS1_DRIVER_MICROSTEPS_GOTO  OFF 
#define AXIS1_DRIVER_IHOLD            OFF 
#define AXIS1_DRIVER_IRUN             OFF 
#define AXIS1_DRIVER_IGOTO            OFF 
#define AXIS1_DRIVER_REVERSE          OFF 
#define AXIS1_DRIVER_STATUS           OFF 
#define AXIS1_LIMIT_MIN              -180 
#define AXIS1_LIMIT_MAX               180 

// AXIS2 DEC/ALT
#define AXIS2_STEPS_PER_DEGREE    12800.0 
#define AXIS2_DRIVER_MODEL            OFF 
#define AXIS2_DRIVER_MICROSTEPS       OFF 
#define AXIS2_DRIVER_MICROSTEPS_GOTO  OFF 
#define AXIS2_DRIVER_IHOLD            OFF 
#define AXIS2_DRIVER_IRUN             OFF 
#define AXIS2_DRIVER_IGOTO            OFF 
#define AXIS2_DRIVER_POWER_DOWN       OFF 
#define AXIS2_DRIVER_REVERSE          OFF 
#define AXIS2_DRIVER_STATUS           OFF 
#define AXIS2_TANGENT_ARM             OFF 
#define AXIS2_LIMIT_MIN               -90 
#define AXIS2_LIMIT_MAX                90 

// -------------------------------------------------------------------------------------------------------------------------
#define FileVersionConfig 4
`;

const TEMPLATE_ONSTEPX = `
/* ---------------------------------------------------------------------------------------------------------------------------------
 * Configuration for OnStepX
 */
#define THERMISTOR1_TNOM               25
#define THERMISTOR1_RNOM            10000
#define THERMISTOR1_BETA             3950
#define THERMISTOR1_RSERIES          4700

#define DISPLAY_WEATHER                ON 
#define DISPLAY_INTERNAL_TEMPERATURE   ON 

// PINMAP
#define PINMAP                  FYSETC_E4 

// SERIAL PORT COMMAND CHANNELS
#define SERIAL_A_BAUD_DEFAULT        9600 
#define SERIAL_B_BAUD_DEFAULT         OFF 
#define SERIAL_B_ESP_FLASHING         OFF 
#define SERIAL_C_BAUD_DEFAULT         OFF 
#define SERIAL_D_BAUD_DEFAULT         OFF 
#define SERIAL_E_BAUD_DEFAULT         OFF 
#define SERIAL_RADIO    WIFI_ACCESS_POINT 

// STATUS
#define STATUS_LED                     ON 

// RETICLE CONTROL
#define RETICLE_LED_DEFAULT           OFF 
#define RETICLE_LED_MEMORY            OFF 
#define RETICLE_LED_INVERT            OFF 

// WEATHER SENSOR
#define WEATHER               BME280_0x76 

// SIGNALING
#define STEP_WAVE_FORM              PULSE 

// NON-VOLATILE MEMORY
#define NV_DRIVER              NV_DEFAULT 

// AXIS1 RA/AZM
#define AXIS1_DRIVER_MODEL        TMC2209 
#define AXIS1_STEPS_PER_DEGREE      12800 
#define AXIS1_REVERSE                 OFF 
#define AXIS1_LIMIT_MIN              -180 
#define AXIS1_LIMIT_MAX               180 
#define AXIS1_DRIVER_MICROSTEPS        32 
#define AXIS1_DRIVER_MICROSTEPS_GOTO    4 
#define AXIS1_DRIVER_IHOLD            OFF 
#define AXIS1_DRIVER_IRUN             500 
#define AXIS1_DRIVER_IGOTO            OFF 
#define AXIS1_DRIVER_STATUS           OFF 
#define AXIS1_DRIVER_DECAY            OFF 
#define AXIS1_DRIVER_DECAY_GOTO       OFF 
#define AXIS1_POWER_DOWN              OFF 
#define AXIS1_SENSE_HOME              OFF 
#define AXIS1_SENSE_LIMIT_MIN LIMIT_SENSE 
#define AXIS1_SENSE_LIMIT_MAX LIMIT_SENSE 

// AXIS2 DEC/ALT
#define AXIS2_DRIVER_MODEL        TMC2209 
#define AXIS2_STEPS_PER_DEGREE      12800 
#define AXIS2_REVERSE                 OFF 
#define AXIS2_LIMIT_MIN               -90 
#define AXIS2_LIMIT_MAX                90 
#define AXIS2_DRIVER_MICROSTEPS        32 
#define AXIS2_DRIVER_MICROSTEPS_GOTO    4 
#define AXIS2_DRIVER_IHOLD            OFF 
#define AXIS2_DRIVER_IRUN             500 
#define AXIS2_DRIVER_IGOTO            OFF 
#define AXIS2_DRIVER_STATUS           OFF 
#define AXIS2_DRIVER_DECAY            OFF 
#define AXIS2_DRIVER_DECAY_GOTO       OFF 
#define AXIS2_POWER_DOWN              OFF 
#define AXIS2_SENSE_HOME              OFF 
#define AXIS2_SENSE_LIMIT_MIN LIMIT_SENSE 
#define AXIS2_SENSE_LIMIT_MAX LIMIT_SENSE 

// MOUNT
#define MOUNT_TYPE                    GEM 
#define MOUNT_COORDS          TOPOCENTRIC 
#define MOUNT_COORDS_MEMORY           OFF 
#define MOUNT_ENABLE_IN_STANDBY       OFF 

// TIME AND LOCATION
#define TIME_LOCATION_SOURCE       DS3231 
#define TIME_LOCATION_PPS_SENSE       OFF 

// STATUS
#define STATUS_MOUNT_LED              OFF 
#define STATUS_BUZZER                2000 
#define STATUS_BUZZER_DEFAULT         OFF 
#define STATUS_BUZZER_MEMORY           ON 

// ST4 INTERFACE
#define ST4_INTERFACE                 OFF 
#define ST4_HAND_CONTROL               ON 
#define ST4_HAND_CONTROL_FOCUSER       ON 

// GUIDING BEHAVIOUR
#define GUIDE_TIME_LIMIT               20 
#define GUIDE_DISABLE_BACKLASH        OFF 

// LIMITS
#define LIMIT_SENSE                   LOW 
#define LIMIT_STRICT                  OFF 

// PARKING
#define PARK_SENSE                    OFF 
#define PARK_SIGNAL                   OFF 
#define PARK_STATUS                   OFF 
#define PARK_STRICT                   OFF 

// PEC
#define PEC_STEPS_PER_WORM_ROTATION 12800 
#define PEC_SENSE                     OFF 
#define PEC_BUFFER_SIZE_LIMIT         720 

// TRACKING BEHAVIOUR
#define TRACK_BACKLASH_RATE            20 
#define TRACK_AUTOSTART               OFF 
#define TRACK_COMPENSATION_DEFAULT    OFF 
#define TRACK_COMPENSATION_MEMORY     OFF 

// SLEWING BEHAVIOUR
#define SLEW_RATE_BASE_DESIRED        2.5 
#define SLEW_RATE_MEMORY               ON 
#define SLEW_ACCELERATION_DIST        5.0 
#define SLEW_RAPID_STOP_DIST          2.0 
#define GOTO_FEATURE                   ON 
#define GOTO_OFFSET                  0.25 
#define GOTO_OFFSET_ALIGN             OFF 

// PIER SIDE BEHAVIOUR
#define MFLIP_SKIP_HOME               OFF 
#define MFLIP_AUTOMATIC_DEFAULT       OFF 
#define MFLIP_AUTOMATIC_MEMORY        OFF 
#define MFLIP_PAUSE_HOME_DEFAULT      OFF 
#define MFLIP_PAUSE_HOME_MEMORY       OFF 
#define PIER_SIDE_SYNC_CHANGE_SIDES   OFF 
#define PIER_SIDE_PREFERRED_DEFAULT  EAST 
#define PIER_SIDE_PREFERRED_MEMORY    OFF 

// ALIGN
#define ALIGN_AUTO_HOME               OFF 
#define ALIGN_MODEL_MEMORY            OFF 
#define ALIGN_MAX_STARS              AUTO 

#define FileVersionConfig 6
`;

// ===================================================================================
// LOCALES
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
        "summaryText": "Preview your configuration below.",
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
        "summaryText": "A generált fájl előnézete.",
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
