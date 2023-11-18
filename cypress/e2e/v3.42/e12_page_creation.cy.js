describe('Page Creation and Publishing in Ghost', () => {
    const pageTitle = 'New Title Page';
    const publishMenuButton = 'Publish';
    const versionFolder = Cypress.config('baseFolder342');
    const caseFolder = `${versionFolder}caso12`;

    before(() => {
        cy.loginToGhost();
    });

    it('should create a new page with a title', () => {
        cy.visit('/ghost/#/pages');
        cy.screenshot(`${caseFolder}/1-after-navigating-to-pages`);

        cy.contains('New page').click();
        cy.screenshot(`${caseFolder}/2.after-clicking-new-page`);

        cy.url().should('include', '/editor');
        cy.get('textarea.gh-editor-title').type(pageTitle).type('{enter}');
        cy.screenshot(`${caseFolder}/3.after-typing-title`);

        cy.contains(publishMenuButton).click();
        cy.screenshot(`${caseFolder}/4.after-clicking-publish`);

        cy.get('.gh-publishmenu-dropdown').should('be.visible');
        cy.get('.gh-btn.gh-btn-blue.gh-publishmenu-button').click();
        cy.screenshot(`${caseFolder}/5.after-confirming-publish`);

        cy.get('.gh-notification-content').should('contain', 'Published');
        cy.screenshot(`${caseFolder}/6.after-publishing`)

    });
});
