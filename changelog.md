
# Changelog

All notable changes to this project will be documented in this file.

The format is based on on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.0.6.0-beta] - 2024-06-08

### Changed
- **Architecture Refactor:** Split the monolithic `app.js` into three modular files (`config_data.js`, `calc.js`, `app.js`) to improve maintainability and separate concerns.
- **Calculator Logic:** "Custom" and "Worm" modes in the calculator now correctly convert the input field from a dropdown to a free-text number input.
- **Templates:** Updated the internal configuration templates (`Config.h` and `Config.x.h`) with the full content provided by the user, ensuring comprehensive coverage of options.

### Added
- **Visual Configuration:** Expanded the wizard schema to include many previously code-only options: Serial Baud Rates, Time/Location Source, WiFi settings, Status LED/Buzzer controls, and detailed Limit Switch configuration.
- **Loading State:** Added a visual "Generating..." overlay with a spinner to provide feedback during the configuration file generation process.
- **Educational Tooltips:** Added an "Info Box" to the calculator step explaining recommended RPM limits (<1500), tracking resolution (<1.0"), and slew rates based on user-provided engineering data.

## [0.0.5.6-beta] - 2024-06-07

### Added
- **UI Improvements:** Added "Mode Selectors" to the Motor/Gearing Calculator.
- **Belt Calculator Integration:** Added an "Apply Ratio" button.
- **Background Animation:** Completely rewrote constellation logic with "lifespan" to prevent degradation.

### Fixed
- **Generation Bug:** Fixed an issue where the `Config.h` preview window remained stuck on "Generating...".

## [0.0.5.5-beta] - 2024-06-07

### Fixed
- **Syntax Error:** Fixed a CSS syntax leak in the JavaScript code.

## [0.0.5.4-beta] - 2024-06-07

### Fixed
- **Offline Compatibility (CORS):** Removed ES6 Module dependencies.
- **Refactor:** Merged `templates.js` and `locales.js` directly into `app.js`.
