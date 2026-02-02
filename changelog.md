
# Changelog

All notable changes to this project will be documented in this file.

The format is based on on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.0.3.9-beta] - 2024-06-02

### Added
- **Internationalization (i18n):** The application now fully supports English, German, and Spanish, in addition to Hungarian. It auto-detects the browser's language on the first visit.
- **Real-time Config Generation:** The `Config.h` preview on the final step is now generated and updated in real-time as the user changes any setting, eliminating the need for a "Generate" button.

### Changed
- **UI/UX - Calculator:** Replaced the number inputs in the `STEPS_PER_DEGREE` calculator with dropdowns (`<select>`) containing common, predefined values to reduce user error.
- **UI/UX - Interactive Help:** Calculator labels (e.g., "Motor Steps") are now clickable and will open the info modal with a detailed explanation.

### Fixed
- **UI Bug - Wizard Scrolling:** Fixed a CSS issue where long wizard steps (like Driver Settings) would overflow on smaller screens without a scrollbar. The form content is now properly scrollable, keeping navigation buttons visible.

## [0.0.3.8-beta] - 2024-06-01

### Added
- **Core Template Files:** Created `template-onstep.txt` and `template-onstepx.txt` which were missing from the project.

### Fixed
- **Config Generation Error:** The `HTTP error! status: 404` during config file generation is now resolved. The `fetch` call can now successfully load the required template files.

## [0.0.3.7-beta] - 2024-05-31

### Changed
- **Code Refactoring:** Reorganized the JavaScript code within `index.html` into logical, commented sections (Configuration, State, UI Rendering, Event Handlers, etc.) to improve readability and maintainability while adhering to the single-file constraint.

### Removed
- **Forbidden File:** Deleted the unused and forbidden `index.tsx` file to ensure full compliance with the project framework.

## [0.0.3.6-beta] - 2024-05-30

### Fixed
- **Critical Error (404 Not Found):** Permanently fixed the language file loading error by embedding the localization data directly into the main `index.html` script. This eliminates the `fetch` call and the possibility of a 404 error for language files.

### Removed
- **External Language File:** Deleted `locales/hu.json` as its content is now embedded in `index.html`.
- **Forbidden File:** Removed the unused and forbidden `index.tsx` file to maintain project compliance.

## [0.0.3.5-beta] - 2024-05-29

### Added
- **New Feature - Driver Configuration:** Added a new "Step 3: Driver Configuration" to the wizard. Users can now set the driver model, microstepping for tracking and GOTO, and reverse direction for both axes.
- **Created Core Data Files:** Added the previously missing `locales/hu.json`, `template-onstep.txt`, and `template-onstepx.txt` files to the project.

### Changed
- **Wizard Flow:** The wizard is now a complete 4-step process: Basics -> Gearing -> Drivers -> Summary & Generation.
- **UI:** The new driver settings step groups options by axis (RA/AZM and DEC/ALT) for better usability.

### Fixed
- **Critical Error (404 Not Found):** Creating the core data and template files completely resolves the `HTTP error! status: 404` on startup. The application now loads all texts and templates correctly.
- **Project Structure:** Removed the forbidden and unused `index.tsx` file.

## [0.0.3.4-beta] - 2024-05-28

### Added
- **Core Feature: Config Generation:** Implemented the final wizard step to generate and download the `Config.h` file.
- **Config Preview:** The generated file content is now displayed in a preview text area before download.
- **Download Functionality:** A "Download" button now allows users to save the generated `Config.h` file.

### Changed
- **Wizard Flow:** The wizard was updated to a 3-step process.
- **Architecture:** The generation logic fetches the correct template file and uses regular expressions to inject user-configured values.

## [0.0.3.3-beta] - 2024-05-27

### Added
- **Multi-Step Wizard:** Implemented the foundation for a multi-step configuration wizard.
- **New Wizard Step 2:** Added the "Motor & Gearing" configuration step.
- **STEPS_PER_DEGREE Calculator:** Added an interactive calculator for the `STEPS_PER_DEGREE` value.
- **UI/UX - Main Page:** Redesigned the home screen with simplified version cards and a detailed comparison panel.

### Changed
- **UI/UX - Background:** Simplified the animated background to create distinct "constellation islands".

### Fixed
- **Navigation:** The "Back to Home" button on the Wiki page is now fully functional.
- **Layout:** Correctly positioned the footer at the bottom of the page content.

## [0.0.3.2-beta] - 2024-05-26

### Added
- **UI/UX - Dynamic Background:** Replaced the static background with a dynamic, animated parallax starfield.
- **New Feature - Wiki/Knowledge Base:** Added a "Wiki / Súgó" button and a new dedicated section.

## [0.3.1-beta] - 2024-05-25

### Added
- **Internationalization (i18n):** All UI strings are now loaded from an external `locales/hu.json` file.

## [0.3.0] - 2024-05-24

### Added
- **Navigation & UI:** Added a "Back to Home" button, footer, and the first version of the SVG constellation background.

## [0.2.0] - 2024-05-23

### Added
- **Dynamic Wizard:** Implemented the first step of the configuration wizard with data-driven controls and interactive help.

## [0.1.0] - 2024-05-22

### Added
- **Project Overhaul:** Created the "OnStep Visual Configurator" with a new dark theme and version selection screen.
