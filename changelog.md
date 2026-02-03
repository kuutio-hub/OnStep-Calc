
# Changelog

All notable changes to this project will be documented in this file.

The format is based on on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.0.5.4-beta] - 2024-06-07

### Fixed
- **Offline Compatibility (CORS):** Completely removed ES6 Module dependencies (`import`/`export`) which caused "Loading..." freeze when opening the application directly from the hard drive via `file://` protocol.
- **Refactor:** Merged `templates.js` and `locales.js` directly into `app.js`.

## [0.0.5.3-beta] - 2024-06-07

### Fixed
- **Major Bugfix:** Fixed syntax errors in `locales.js` (missing quote marks on keys) that were causing the entire application to crash on load.
- **Safety:** Added global error handling to the application initialization process.

### Removed
- **Cleanup:** Instructions provided to remove unused files (`metadata.json`, `LOGIC.md`) from the project structure.

## [0.0.5.2-beta] - 2024-06-07

### Fixed
- **Critical Crash Fix:** Corrected malformed JSON syntax in `locales.js` which caused the application to freeze on the "Loading..." screen, prevented buttons from working, and stopped the star animation.
- **Cleanup:** Removed unused files (`locales/*.json`, templates) to reduce clutter, consolidating logic into JS modules.

## [0.0.5.1-beta] - 2024-06-07

### Added
- **Offline Capability:** Migrated localization files from external JSONs to a valid ES6 module (`locales.js`). This fixes the "white screen" issue when running the app locally without a web server (due to browser CORS policies).
- **Input Validation:** Added strict validation for calculator inputs (Motor Steps, Gear Ratios). Invalid entries are now highlighted in red with specific error messages.
- **Visuals:** Increased the visibility of background stars.

## [0.0.5.0-alpha] - 2024-06-06

### Changed
- **Modular Refactor:** Split the monolithic `index.html` into structured separate files (`app.js`, `style.css`, `templates.js`) for better maintainability.
- **Constellation Algorithm:** completely rewritten star generation logic. Stars now form "pathfinding" style constellations (lines connecting nearest neighbors) instead of random webs.

## [0.0.4.4-beta] - 2024-06-06

### Added
- **Excel-Style Calculator:** Completely reimagined the "Motor & Gearing" step. It now mimics the official OnStep Excel calculator with a tabular layout, real-time feedback, and warning limits (e.g., max RPM, min resolution).
- **Cleanup:** Removed artifact text from the end of the HTML file.

## [0.0.4.2-beta] - 2024-06-05

### Added
- **UI Clarity:** Added inline `<code>` tags next to each form label, displaying the corresponding `#define` variable name from the source code.
- **Belt Calculator Enhancement:** The belt length calculator modal now includes a "Belt Type" selector.

### Changed
- **Re-enabled Language Detection:** The application now properly uses its automatic language detection logic.

### Fixed
- **Critical UI Bug - Wizard Scrolling:** Fixed scrolling issues on long wizard pages.

## [0.0.4.1-beta] - 2024-06-04

### Fixed
- **Development Environment:** Temporarily hardcoded the default language to Hungarian (`hu`).

## [0.0.4.0-beta] - 2024-06-03

### Added
- **External Language Files:** Reverted to using external JSON files for localization.
- **Advanced Gearing Calculator:** Implemented mode switch and Belt Length Calculator.

### Changed
- **Config Generation Logic:** Generation is now triggered upon entering the final "Summary" step.

### Fixed
- **File Structure:** Removed the forbidden and unused `index.tsx` file.
