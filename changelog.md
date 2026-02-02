
# Changelog

All notable changes to this project will be documented in this file.

The format is based on on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.0.4.2-beta] - 2024-06-05

### Added
- **UI Clarity:** Added inline `<code>` tags next to each form label, displaying the corresponding `#define` variable name from the source code (e.g., `(PINMAP)`). This helps experienced users immediately recognize the parameters.
- **Belt Calculator Enhancement:** The belt length calculator modal now includes a "Belt Type" selector (GT2, HTD-3M, etc.), which automatically sets the correct pitch value, improving accuracy and usability.

### Changed
- **Re-enabled Language Detection:** The temporary hardcoding of the Hungarian language has been removed. The application now properly uses its automatic language detection logic (checking `localStorage`, then browser language, then falling back to English).
- **README.md Update:** The "Framework" section has been updated to more accurately reflect the project's structure, noting that while the core app is in `index.html`, it fetches modular data files like locales and templates.

### Fixed
- **Critical UI Bug - Wizard Scrolling:** The persistent scrolling issue on long wizard pages (like Driver Settings) has been definitively fixed by re-engineering the flexbox layout of the main content and wizard containers. The content area is now guaranteed to be scrollable on all screen sizes.
- **Visuals - Background Animation:** The lines connecting the stars in the background animation have been restored and improved. The new logic creates smaller, more aesthetically pleasing "island-like" constellations instead of a uniform web.

## [0.0.4.1-beta] - 2024-06-04

### Fixed
- **Development Environment:** Temporarily hardcoded the default language to Hungarian (`hu`) to bypass browser language detection issues within the specific test environment, ensuring all text labels load correctly during development. This was a temporary measure.

## [0.0.4.0-beta] - 2024-06-03

### Added
- **External Language Files:** Reverted to using external JSON files for localization (`locales/*.json`) to facilitate community contributions. Added robust error handling to fall back to English if a language file is missing.
- **Advanced Gearing Calculator:**
    - Implemented a mode switch in the calculator: "Preset Ratio" and "Custom Calculation".
    - Added a "Belt Length Calculator" utility.

### Changed
- **Config Generation Logic:** Generation is now triggered upon entering the final "Summary" step.
- **UI/UX - Logical Flow:** The "Microsteps" setting in the Gearing Calculator is now a read-only display.

### Fixed
- **File Structure:** Removed the forbidden and unused `index.tsx` file.

## [0.1.0] - [0.0.3.9-beta]
- Initial development phases, feature additions, and bug fixes.
