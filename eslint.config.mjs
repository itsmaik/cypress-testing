import { defineConfig } from 'eslint/config';

export default defineConfig({
  env: {
    browser: true,
    es2021: true,
    node: true, // Cypress tests can run in a Node.js environment
  },
  extends: 'eslint:recommended',
  overrides: [
    {
      files: ['**/*.cy.js'], // Targeting Cypress test files
      env: {
        'cypress/globals': true, // Enables global variables provided by Cypress
      },
      plugins: ['cypress'], // Using the Cypress ESLint plugin
      extends: ['plugin:cypress/recommended'], // Use recommended settings for Cypress
      rules: {
        // Custom rules for Cypress files
        'cypress/no-unnecessary-waiting': 'off', // Example: Disabling a specific Cypress rule
        'no-unused-vars': 'off', // Example: Disabling the no-unused-vars rule for Cypress tests
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // Global rules that apply to all files
  },
});
