
// ===================================================================================
// CONFIGURATION COMMENTS (Translations for Config.h files)
// ===================================================================================

const CONFIG_COMMENTS = {
    hu: {
        "PINMAP": "OFF, Válaszd ki: MksGenL2, MiniPCB2, MaxPCB2, MaxESP3, CNC3, STM32Blue, MaxSTM3, FYSETC_S6_2, stb.",
        "SERIAL_A_BAUD_DEFAULT": "9600, n. Ahol n=9600,19200,57600,115200 (gyakori baud ráták).",
        "MOUNT_TYPE": "GEM, GEM (Német Ekvatoriális), FORK (Villa), vagy ALTAZM (Dobson stb). A GEM mód meridián átfordulást végez.",
        "LED_STATUS": "ON, Villog sziderikus követésnél, egyébként folyamatosan világít aktivitás jelzésére.",
        "LED_STATUS2": "OFF, ON Villog 1mp-enként PPS szinkronnal, folyamatos goto közben.",
        "TIME_LOCATION_SOURCE": "OFF, DS3231 (I2c), DS3234 (Spi), TEENSY (belső) vagy GPS forrás.",
        "ST4_INTERFACE": "OFF, ON, ON_PULLUP engedélyezi az interfészt. <= 1X vezetés, kivéve kézivezérlő módban.",
        "GUIDE_TIME_LIMIT": "0, Nincs időkorlát. Vagy n=1..120 másodperc biztonsági időkorlát.",
        "TRACK_AUTOSTART": "OFF, ON Indításkor a követés automatikusan bekapcsol.",
        "SLEW_RATE_BASE_DESIRED": "1.0, n. Kívánt sebesség fok/mp-ben. Futásidőben állítható 1/2 és 2x között.",
        "AXIS1_STEPS_PER_DEGREE": "12800, n. Lépés per fok: n = (motor_lépés * mikrolépés * áttétel)/360.0",
        "AXIS1_DRIVER_MODEL": "OFF, Léptetőmotor meghajtó típusa (pl. TMC2209).",
        "AXIS1_DRIVER_MICROSTEPS": "OFF, n. Mikrolépés mód követés közben.",
        "AXIS1_DRIVER_MICROSTEPS_GOTO": "OFF, n. Mikrolépés mód gyorsmozgás (goto) közben.",
        "AXIS1_DRIVER_REVERSE": "OFF, ON Megfordítja a mozgás irányát.",
        "AXIS1_LIMIT_MIN": "-180, n. Minimum 'Óraszög' vagy Azimut.",
        "AXIS1_LIMIT_MAX": "180, n. Maximum 'Óraszög' vagy Azimut.",
        "AXIS2_STEPS_PER_DEGREE": "12800, n. Lépés per fok: n = (motor_lépés * mikrolépés * áttétel)/360.0"
        // ... További fordítások helye ...
    },
    en: {
        // Fallback is handled by the original template text, but this object exists for consistency.
    }
    // Add other languages here...
};
