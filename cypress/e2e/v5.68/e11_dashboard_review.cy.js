describe('Dashboard General Review in Ghost', () => {
    const baseUrl = 'http://localhost:2368';
    const dashboardUrl = '/ghost/#/dashboard';
    const versionFolder = Cypress.config('baseFolder568');
    const totalMembersXpath = "//h5[normalize-space()='Total members']";
    const createdManuallyXpath = "//span[normalize-space()='Created manually']";
    const listFooterClass = ".gh-dashboard-list-footer";
    const caseFolder = `${versionFolder}caso11`;

    before(() => {
        cy.loginToGhost(baseUrl);
    });

    it('debería mostrar todos los elementos del dashboard correctamente', () => {
        cy.visit(dashboardUrl);
        cy.conditionalScreenshot(`${caseFolder}/1-after-visiting-dashboard`);
        cy.xpath(totalMembersXpath).should('exist');
        cy.conditionalScreenshot(`${caseFolder}/2-total-members`);
        cy.xpath(createdManuallyXpath).should('exist');
        cy.conditionalScreenshot(`${caseFolder}/3-created-manually`);
        cy.get(listFooterClass).should('exist');
        cy.conditionalScreenshot(`${caseFolder}/4-list-footer`);
    });
});
