
# Application Logic

This document outlines the core logic, state management, and data flow of the OnStep Visual Configurator.

## Overview

The application is a single-page wizard designed to generate `Config.h` files for the OnStep telescope controller. It guides the user through a series of questions about their hardware and preferences, validates their input, and uses this information to populate a template configuration file. The core design principle is to be data-driven, separating the application logic from the configuration data itself.

## Architecture

The application is built upon three main data pillars:

1.  **Configuration Schemas (`schema-*.js`):** These are JavaScript objects that define the structure of the configuration for each OnStep version. Each entry in the schema describes a single `#define` setting, including its type (e.g., `select`, `number`, `toggle`), its label, a detailed description, default values, options, and dependencies on other settings. The UI is dynamically generated from this schema.

2.  **Language Files (`language-*.js`):** To support multilingual capabilities, all user-facing strings (labels, descriptions, button texts) are stored in language-specific objects. The application uses keys (e.g., `MOUNT_TYPE_LABEL`) to look up the correct string in the currently selected language. This allows for easy addition of new languages in the future.

3.  **Template Files (`template-*.txt`):** These are the raw, working `Config.h` files for each OnStep version. The generation process does not create a file from scratch; instead, it reads the appropriate template and uses regular expressions to find and replace the `#define` values with the user's choices. This ensures that all original formatting, comments, and unchanged settings are preserved, guaranteeing compatibility.

## State Management

A central `appState` JavaScript object holds the entire application state, including:
- `version`: The selected OnStep version ('classic' or 'onstepx').
- `language`: The current UI language (e.g., 'hu').
- `config`: An object that stores the user's selections, keyed by the `#define` name (e.g., `{ MOUNT_TYPE: 'GEM', PINMAP: 'FYSETC_E4' }`).

When a user changes a value in the UI, the `appState.config` object is updated. This change can trigger UI updates, such as showing or hiding dependent fields based on the new state. All settings can be saved to and restored from the browser's `localStorage`.

## Data Flow

1.  **Initialization:** The app starts by showing the version selection screen.
2.  **Version Selection:** The user chooses 'OnStep Classic' or 'OnStepX'.
3.  **Wizard Initialization:** The application loads the corresponding schema and language data. It then dynamically renders the first step of the wizard based on the schema.
4.  **User Interaction:** The user fills out the wizard step-by-step. Each input updates the `appState.config` object. The UI reacts dynamically to these changes, showing/hiding fields as needed.
5.  **Generation:** When the user clicks "Generate", the application fetches the appropriate template file. It iterates through the `appState.config` object and injects each value into the template string.
6.  **Output:** The final, populated string is presented to the user for copying or downloading as a `.h` file.
