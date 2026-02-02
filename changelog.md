
# Changelog

All notable changes to this project will be documented in this file.

The format is based on on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.0.4.1-beta] - 2024-06-04

### Fixed
- **Development Environment:** Temporarily hardcoded the default language to Hungarian (`hu`) to bypass browser language detection issues within the specific test environment, ensuring all text labels load correctly during development. This is a temporary measure as requested.

## [0.0.4.0-beta] - 2024-06-03

### Added
- **External Language Files:** Reverted to using external JSON files for localization (`locales/en.json`, `locales/hu.json`, etc.) to facilitate community contributions. Added robust error handling to fall back to English if a language file is missing.
- **Advanced Gearing Calculator:**
    - Implemented a mode switch in the calculator: "Preset Ratio" for beginners (selecting from a list of common mounts) and "Custom Calculation" for advanced users.
    - Added a new "Belt Length Calculator" utility in a modal to help users determine the correct belt size based on pulley teeth and axle distance.
- **New Feature - Belt Length Calculator:** A new modal utility to calculate the required belt length and nearest tooth count based on pulley sizes, pitch, and distance.

### Changed
- **Config Generation Logic:** Generation is now triggered only upon entering the final "Summary" step, making the process more efficient and reliable. The preview is instantly available without a "Generate" button.
- **UI/UX - Logical Flow:** The "Microsteps" setting in the Gearing Calculator is now a read-only display that reflects the value chosen in Step 3 ("Driver Settings"), eliminating redundancy and clarifying the source of truth.

### Fixed
- **UI Bug - Wizard Scrolling:** Re-engineered the CSS for the wizard to ensure the content area (`.step-container`) is always scrollable on any screen size, preventing navigation buttons from becoming inaccessible.
- **File Structure:** Removed the forbidden and unused `index.tsx` file as per project rules.

## [0.0.3.9-beta] - 2024-06-02

### Added
- **Internationalization (i18n):** The application now fully supports English, German, and Spanish, in addition to Hungarian. It auto-detects the browser's language on the first visit.
- **Real-time Config Generation:** The `Config.h` preview on the final step is now generated and updated in real-time as the user changes any setting, eliminating the need for a "Generate" button.

### Changed
- **UI/UX - Calculator:** Replaced the number inputs in the `STEPS_PER_DEGREE` calculator with dropdowns (`<select>`) containing common, predefined values to reduce user error.
- **UI/UX - Interactive Help:** Calculator labels (e.g., "Motor Steps") are now clickable and will open the info modal with a detailed explanation.

### Fixed
- **UI Bug - Wizard Scrolling:** Fixed a CSS issue where long wizard steps (like Driver Settings) would overflow on smaller screens without a scrollbar. The form content is now properly scrollable, keeping navigation buttons visible.

## [0.1.0] - [0.0.3.8-beta]
- Initial development phases, feature additions, and bug fixes.
