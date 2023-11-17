describe('Page Creation and Publishing in Ghost', () => {
    const pageTitle = 'Título de Nueva Página';
    const publishMenuButton = 'Publish';
    const versionFolder = Cypress.config('baseFolder342');
    const caseFolder = `${versionFolder}caso12`;

    before(() => {
        cy.loginToGhost();
    });

    it('should create a new page with a title', () => {
        cy.visit('/ghost/#/pages');

        cy.contains('New page').click();
        cy.screenshot(`${caseFolder}/after-clicking-new-page`);

        cy.url().should('include', '/editor');
        cy.get('textarea.gh-editor-title').type(pageTitle).type('{enter}');
        cy.screenshot(`${caseFolder}/after-typing-title`);

        cy.contains(publishMenuButton).click();
        cy.screenshot(`${caseFolder}/after-clicking-publish`);

        cy.get('.gh-publishmenu-dropdown').should('be.visible');
        cy.get('.gh-btn.gh-btn-blue.gh-publishmenu-button').click();
        cy.screenshot(`${caseFolder}/after-confirming-publish`);

        cy.get('.gh-notification-content').should('contain', 'Published');
        cy.screenshot(`${caseFolder}/after-publishing`);
    });
});
