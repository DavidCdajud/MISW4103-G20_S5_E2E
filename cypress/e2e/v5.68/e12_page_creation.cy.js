describe('Page Creation and Publishing in Ghost', () => {
    const newPageButton = 'New page';
    const pageTitle = 'Título de Nueva Página';
    const publishButton = 'Publish';
    const successMessage = 'Ready, set, publish. Share it with the world.';
    const versionFolder = Cypress.config('baseFolder568');
    const caseFolder = `${versionFolder}caso12`;

    before(() => {
        cy.loginToGhost();
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
        cy.contains(successMessage).should('be.visible');
        cy.screenshot(`${caseFolder}/05-after-publish-success`);
    });
});
