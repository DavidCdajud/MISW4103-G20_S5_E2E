describe('Dashboard General Review in Ghost', () => {
    const dashboardUrl = '/ghost/#/dashboard';
    const totalMembersXpath = "//h5[normalize-space()='Total members']";
    const createdManuallyXpath = "//span[normalize-space()='Created manually']";
    const listFooterClass = ".gh-dashboard-list-footer";
    const caseFolder = 'caso11';

    before(() => {
        cy.loginToGhost();
    });

    it('should display all the dashboard elements correctly', () => {
        cy.visit(dashboardUrl);
        cy.xpath(totalMembersXpath).should('exist').screenshot(`${caseFolder}/total-members`);
        cy.xpath(createdManuallyXpath).should('exist').screenshot(`${caseFolder}/created-manually`);
        cy.get(listFooterClass).should('exist').screenshot(`${caseFolder}/list-footer`);
    });
});
