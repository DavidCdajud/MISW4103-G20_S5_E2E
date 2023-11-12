describe('Page Creation and Publishing in Ghost', () => {
    const newPageButton = 'New page';
    const pageTitle = 'Título de Nueva Página';
    const publishButton = 'Publish';
    const successMessage = 'Ready, set, publish. Share it with the world.';
    const caseFolder = 'caso12';

    before(() => {
        cy.loginToGhost();
    });

    it('should create a new page with a title', () => {
        cy.visit('/ghost/#/pages');
        cy.contains(newPageButton).click();
        cy.url().should('include', '/editor/page');
        cy.get('textarea[placeholder="Page title"]').type(pageTitle).type('{enter}');
        cy.screenshot(`${caseFolder}/after-typing-title`);
        cy.contains(publishButton).click();
        cy.contains(successMessage).should('be.visible');
        cy.screenshot(`${caseFolder}/after-publish-success`);
    });
});
