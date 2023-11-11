describe('Page Creation and Publishing in Ghost', () => {
    const newPageButton = 'New page';
    const pageTitle = 'Título de Nueva Página';
    const publishButton = 'Publish';
    const successMessage = 'Ready, set, publish. Share it with the world.';

    before(() => {
        cy.loginToGhost();
    });

    it('should create a new page with a title', () => {
        cy.visit('/ghost/#/pages');
        cy.contains(newPageButton).click();
        cy.url().should('include', '/editor/page');
        cy.get('textarea[placeholder="Page title"]').type(pageTitle);
        cy.contains('button', 'Publish').click();
        cy.contains('Ready, set, publish. Share it with the world.').should('be.visible');
    });
});