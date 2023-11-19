describe('Page Creation and Publishing in Ghost', () => {
    const baseUrl = 'http://localhost:2368';
    const newPageButton = 'New page';
    const pageTitle = 'New Title Page';
    const publishButton = 'Publish';
    const successMessageContainer = '.gh-publish-title';
    const continueButtonSelector = '[data-test-button="continue"]';
    const confirmPublishButtonSelector = 'button[data-test-button="confirm-publish"]'; 
    const versionFolder = Cypress.config('baseFolder568');
    const caseFolder = `${versionFolder}caso12`;

    before(() => {
        cy.loginToGhost(baseUrl);
    });

    it('should create a new page with a title', () => {
        cy.visit('/ghost/#/pages');
        cy.screenshot(`${caseFolder}/01-after-navigating-to-pages`);
        cy.contains(newPageButton).click();
        cy.url().should('include', '/editor/page');
        cy.screenshot(`${caseFolder}/02-after-clicking-new-page`);
        cy.get('textarea[placeholder="Page title"]').type(pageTitle).type('{enter}');
        cy.screenshot(`${caseFolder}/03-after-typing-title`);
        cy.contains(publishButton).click();
        cy.screenshot(`${caseFolder}/04-after-clicking-publish`);
        cy.get(successMessageContainer).should('be.visible');
        cy.screenshot(`${caseFolder}/05-after-publish-success-visible`);
        cy.get(continueButtonSelector).click();
        cy.screenshot(`${caseFolder}/06-after-clicking-continue`);
        cy.get(confirmPublishButtonSelector).should('be.visible');
        cy.get(confirmPublishButtonSelector).click();
        cy.screenshot(`${caseFolder}/07-after-confirming-publish`);
    });
});
