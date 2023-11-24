describe('Dashboard General Review in Ghost', () => {
    const baseUrl = 'http://localhost:3001';
    const dashboardUrl = '/ghost/#/site';
    const versionFolder = Cypress.config('baseFolder342');
    const caseFolder = `${versionFolder}caso11`;

    before(() => {
        cy.loginToGhost(baseUrl);
    });

    it('should display the site description correctly', () => {
        cy.visit(dashboardUrl);
        cy.screenshot(`${caseFolder}/1-after-login`);

        cy.get('iframe')
            .its('0.contentDocument.body').should('not.be.empty')
            .then(cy.wrap)
            .find('.site-header-content .site-description')
            .should('be.visible')
            .and('contain', 'Thoughts, stories and ideas.');
        cy.screenshot(`${caseFolder}/2-after-validating-description`);
    });
});
