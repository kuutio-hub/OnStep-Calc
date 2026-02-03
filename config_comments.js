
// ===================================================================================
// CONFIGURATION COMMENTS (Translations for Config.h files)
// ===================================================================================

const CONFIG_COMMENTS = {
    hu: {
        // Controller
        "PINMAP": "OFF, Válaszd ki: MiniPCB, MiniPCB2, MaxPCB2, MaxESP3, CNC3, STM32Blue, MaxSTM3, FYSETC_S6_2, stb.",
        "SERIAL_A_BAUD_DEFAULT": "9600, n. Ahol n=9600,19200,57600,115200 (gyakori baud ráták).",
        "SERIAL_B_BAUD_DEFAULT": "9600, n. Baud ráta. Lásd (src/pinmaps/) a port kiosztásokhoz.",
        "SERIAL_B_ESP_FLASHING": "OFF, ON ESP8266 WiFi firmware feltöltése SERIAL_B-n keresztül :ESPFLASH# paranccsal.",
        "SERIAL_C_BAUD_DEFAULT": "OFF, n. Baud ráta.",
        "SERIAL_RADIO": "OFF, Használj BLUETOOTH, WIFI_ACCESS_POINT vagy WIFI_STATION (csak ESP32).",
        "STATUS_LED": "OFF, Folyamatos világítás ha nincs hiba, villog hibakóddal ha van.",
        "RETICLE_LED_DEFAULT": "OFF, n. Ahol n=0..255 (0..100%) bekapcsolja és beállítja az alapértelmezett fényerőt.",
        "WEATHER": "OFF, BME280 (I2C 0x77), BME280_0x76, BMP280 hőmérséklethez, nyomáshoz.",
        "STEP_WAVE_FORM": "SQUARE, PULSE Lépés jel hullámforma gyorsabb rátákhoz. SQUARE a legjobb jelintegritáshoz.",
        "NV_DRIVER": "NV_DEF, Az alapértelmezett nem-felejtő memória használata a beállítások tárolására.",

        // Mount / Axis
        "MOUNT_TYPE": "GEM, GEM (Német Ekvatoriális), FORK (Villa), vagy ALTAZM (Dobson stb).",
        "MOUNT_COORDS": "TOPOCENTRIC, Refrakció alkalmazása a koordinátákra.",
        "TIME_LOCATION_SOURCE": "DS3231, OFF, DS3231 (I2C), GPS, vagy NTP forrás.",
        "STATUS_MOUNT_LED": "OFF, ON Villog a mozgás sebességével arányosan vagy folyamatos slew közben.",
        "STATUS_BUZZER": "2000, OFF, ON, n. Ahol n=100..6000 (Hz frekvencia).",
        "ST4_INTERFACE": "OFF, ON engedélyezi az interfészt. <= 1X vezetés.",
        "GUIDE_TIME_LIMIT": "20, 10, n. Időkorlát n=0..120 másodperc. 0 a kikapcsoláshoz.",
        "LIMIT_SENSE": "LOW, OFF, HIGH vagy LOW állapot a végálláskapcsolón megállítja a mozgást.",
        "PARK_SENSE": "OFF, HIGH vagy LOW állapot jelzi, hogy a mechanika parkoló állásban van.",
        "PEC_STEPS_PER_WORM_ROTATION": "12800, 0, n. Lépés per csiga fordulat (0 kikapcsolja, egyébként 720 mp buffer).",
        "TRACK_BACKLASH_RATE": "20, n. Ahol n=2..50 (x sziderikus ráta) a holtjáték kompenzáció alatt.",
        "TRACK_AUTOSTART": "OFF, ON Indításkor a követés automatikusan bekapcsol.",
        "SLEW_RATE_BASE_DESIRED": "1.0, n. Kívánt sebesség fok/mp-ben. Futásidőben állítható 1/2 és 2x között.",
        "SLEW_RATE_MEMORY": "ON, OFF, ON Megjegyzi a sebességet újraindítás után.",
        "GOTO_OFFSET": "0.25, Eltolás fokban a goto célirányú megközelítéshez, 0.0 kikapcsolja.",
        "PIER_SIDE_PREFERRED_DEFAULT": "BEST, BEST Marad a jelenlegi oldalon ha lehet. EAST vagy WEST vált ha lehet.",
        "ALIGN_AUTO_HOME": "OFF, ON használja a home kapcsolókat a home pozíció megtalálásához igazítás előtt.",

        // Axis Specific
        "AXIS1_DRIVER_MODEL": "OFF, Add meg a motorvezérlő típusát mindkét tengelyen a mechanika aktiválásához.",
        "AXIS1_STEPS_PER_DEGREE": "12800, n. Lépés per fok: n = (motor_lépés * mikrolépés * áttétel)/360.0",
        "AXIS1_REVERSE": "OFF, ON Megfordítja a mozgás irányát.",
        "AXIS1_LIMIT_MIN": "-180, n. Minimum 'Óraszög' vagy Azimut.",
        "AXIS1_LIMIT_MAX": "180, n. Maximum 'Óraszög' vagy Azimut.",
        "AXIS1_DRIVER_MICROSTEPS": "OFF, n. Mikrolépés mód követés közben.",
        "AXIS1_DRIVER_MICROSTEPS_GOTO": "OFF, n. Mikrolépés mód gyorsmozgás (goto) közben.",
        "AXIS1_DRIVER_IRUN": "OFF, n, (mA.) Áram követés közben (TMC driverek).",
        
        "AXIS2_DRIVER_MODEL": "OFF, Add meg a motorvezérlő típusát mindkét tengelyen.",
        "AXIS2_STEPS_PER_DEGREE": "12800, n. Lépés per fok.",
        "AXIS2_REVERSE": "OFF, ON Megfordítja a mozgás irányát.",
        "AXIS2_LIMIT_MIN": "-90, n. Minimum Deklináció vagy Magasság.",
        "AXIS2_LIMIT_MAX": "90, n. Maximum Deklináció vagy Magasság.",
        "AXIS2_DRIVER_MICROSTEPS": "OFF, n. Mikrolépés mód követés közben.",
        "AXIS2_DRIVER_IRUN": "OFF, n, (mA.) Áram követés közben.",

        // Focuser / Rotator
        "AXIS3_SLEW_RATE_BASE_DESIRED": "1.0, n. Kívánt sebesség fok/mp-ben.",
        "AXIS3_STEPS_PER_DEGREE": "64.0, n. Lépés per fok rotátornál.",
        "AXIS4_SLEW_RATE_BASE_DESIRED": "1000, n, Ahol n=200..5000 (um/s).",
        "AXIS4_STEPS_PER_MICRON": "0.5, n. Lépés per mikrométer.",
        "FOCUSER_TEMPERATURE": "OFF, THERMISTOR vagy n (ds18b20 s/n).",

        // Features
        "FEATURE1_PURPOSE": "OFF, SWITCH, ANALOG_OUT, DEW_HEATER, stb.",
        "FEATURE1_NAME": "\"FE..\", A vezérelt funkció neve.",
        "FEATURE1_PIN": "OFF, AUX, n. Pin szám.",
        "FEATURE1_ON_STATE": "HIGH, LOW invertáláshoz.",
        
        "THERMISTOR1_TNOM": "Névleges hőmérséklet (Celsius)",
        "THERMISTOR1_RNOM": "Névleges ellenállás (Ohm)",
        "DISPLAY_WEATHER": "Weboldal, időjárás megjelenítése",
        "DISPLAY_INTERNAL_TEMPERATURE": "Weboldal, belső MCU hőmérséklet megjelenítése"
    },
    en: {
        // Fallback is handled by the original template text logic (it keeps original comment if no translation found).
        // But for completeness, we can map keys to themselves or specific English overrides if needed.
    }
};
