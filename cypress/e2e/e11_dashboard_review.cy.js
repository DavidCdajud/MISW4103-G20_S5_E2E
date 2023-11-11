describe('Dashboard General Review in Ghost', () => {
    const dashboardUrl = '/ghost/#/dashboard';
    const totalMembersXpath = "//h5[normalize-space()='Total members']";
    const createdManuallyXpath = "//span[normalize-space()='Created manually']";
    const listFooterClass = ".gh-dashboard-list-footer";

    before(() => {
        cy.loginToGhost();
    });

    it('should display all the dashboard elements correctly', () => {
        cy.visit(dashboardUrl);
        cy.xpath(totalMembersXpath).should('exist');
        cy.xpath(createdManuallyXpath).should('exist');
        cy.get(listFooterClass).should('exist');
    });
});
