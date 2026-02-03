
# Changelog

All notable changes to this project will be documented in this file.

The format is based on on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.0.6.1-beta] - 2024-06-08

### Changed
- **Config Generation Logic:** Completely overhauled the file generator. Instead of using a minimal template, it now parses the full original `Config.h` structure (stored in `config_base.js`). It injects user values and replaces the original comments with translated versions (stored in `config_comments.js`) based on the selected language, while keeping the file structure identical to the official release.
- **File Structure:** 
    - Moved raw config templates to `config_base.js`.
    - Moved comment translations to `config_comments.js`.
    - Cleaned up `config_data.js` to only contain UI locales and Wizard schemas.

## [0.0.6.0-beta] - 2024-06-08

### Changed
- **Architecture Refactor:** Split the monolithic `app.js` into three modular files (`config_data.js`, `calc.js`, `app.js`) to improve maintainability and separate concerns.
- **Calculator Logic:** "Custom" and "Worm" modes in the calculator now correctly convert the input field from a dropdown to a free-text number input.

### Added
- **Visual Configuration:** Expanded the wizard schema to include many previously code-only options.
- **Loading State:** Added a visual "Generating..." overlay.
- **Educational Tooltips:** Added an "Info Box" to the calculator.
