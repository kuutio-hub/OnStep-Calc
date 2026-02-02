
# OnStep Visual Configurator

This project is a single-file web application to visually and interactively generate configuration files (`Config.h`) for the OnStep open-source telescope controller firmware.

## Description

The goal of this application is to simplify the complex process of configuring OnStep for new and experienced users alike. Instead of manually editing a C++ header file, users are guided through a wizard-like interface to select their hardware and preferences. The application then generates a ready-to-use `Config.h` file.

## Features

- **Wizard-Style Interface:** Guides users step-by-step through the configuration process.
- **Support for OnStep Versions:** Allows selection between the classic OnStep (for 8-bit MCUs) and the advanced OnStepX (for 32-bit MCUs).
- **Dynamic UI:** The form intelligently shows or hides options based on user selections, reducing clutter and confusion.
- **Integrated Calculator:** Complex parameters like `STEPS_PER_DEGREE` are calculated automatically from user-friendly hardware inputs (motor steps, gear ratios, pulleys, etc.).
- **Template-Based Generation:** Uses official configuration files as templates to ensure maximum compatibility and includes all original comments.
- **Save/Load/Share:** Users can save their progress to their browser, load previous configurations, and share their setup via a unique URL.
- **Validation:** Provides real-time feedback on inputs to prevent common configuration errors.
- **Dark Theme:** Features a modern, astronomy-themed dark UI for comfortable use.

## Framework

This project adheres strictly to the development framework outlined in `Prompt_0`. Key principles include:
- **No JS Frameworks:** The application uses only vanilla JavaScript (ES6+ Modules).
- **No Build Step:** The code is written to run directly in the browser without any need for transpilation or bundling.
- **Single-File Structure:** All HTML, CSS, and JavaScript are contained within a single `index.html` file to ensure simplicity and portability. Data templates are fetched dynamically.
- **Responsiveness & Accessibility:** The design is optimized for desktop and tablet use and is built with accessibility (ARIA, semantic HTML) in mind.

## How to Run

Simply open the `index.html` file in any modern web browser (Chrome, Firefox, Edge). No web server or build process is required.
