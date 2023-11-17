describe('Dashboard General Review in Ghost', () => {
    const dashboardUrl = '/ghost/#/dashboard';
    const versionFolder = Cypress.config('baseFolder568');
    const totalMembersXpath = "//h5[normalize-space()='Total members']";
    const createdManuallyXpath = "//span[normalize-space()='Created manually']";
    const listFooterClass = ".gh-dashboard-list-footer";
    const caseFolder = `${versionFolder}caso11`;

    before(() => {
        cy.loginToGhost();
    });

    it('should display all the dashboard elements correctly', () => {
        cy.visit(dashboardUrl);
        cy.screenshot(`${caseFolder}/01-after-visiting-dashboard`);
        cy.xpath(totalMembersXpath).should('exist');
        cy.screenshot(`${caseFolder}/02-total-members`);
        cy.xpath(createdManuallyXpath).should('exist');
        cy.screenshot(`${caseFolder}/03-created-manually`);
        cy.get(listFooterClass).should('exist');
        cy.screenshot(`${caseFolder}/04-list-footer`);
    });
});
