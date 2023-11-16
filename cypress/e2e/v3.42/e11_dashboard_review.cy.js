describe('Dashboard General Review in Ghost', () => {
    const dashboardUrl = '/ghost/#/site';
    const versionFolder = Cypress.config('baseFolder342');
    const caseFolder = `${versionFolder}caso11`;

    before(() => {
        cy.loginToGhost();
    });

    it('should display the site description correctly', () => {
        cy.visit(dashboardUrl);

        cy.get('iframe')
            .its('0.contentDocument.body').should('not.be.empty')
            .then(cy.wrap)
            .find('.site-header-content .site-description')
            .should('be.visible')
            .and('contain', 'Thoughts, stories and ideas.');
        cy.screenshot(`${caseFolder}/after-validating-description`);
    });
});
