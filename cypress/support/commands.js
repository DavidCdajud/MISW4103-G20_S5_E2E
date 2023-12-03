// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

require('cypress-xpath');

// En cypress/support/commands.js
Cypress.Commands.add('loginToGhost', (baseUrl) => {
    cy.visit(`${baseUrl}/ghost/#/signin`);
    cy.get('input[name="identification"]').type(Cypress.env('EMAIL'));
    cy.get('input[name="password"]').type(Cypress.env('PASSWORD'), { log: false });
    cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('conditionalScreenshot', (filename) => {
    let shouldTakeScreenshot = Cypress.config('printImage') === 'true';
    if (shouldTakeScreenshot) {
        cy.screenshot(filename);
    }
});

Cypress.Commands.add('performActionAndScreenshot', (actionFunction, screenshotName) => {
    actionFunction();
    cy.conditionalScreenshot(screenshotName);
});

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('TransitionAborted')) {
        return false;
    }
    return true;
});
