const DashboardPage = require('./model/dashBoardPage.js');

describe('Dashboard General Review in Ghost', () => {
    const baseUrl = 'http://localhost:2368';
    const versionFolder = Cypress.config('baseFolder568');
    const caseFolder = `${versionFolder}caso11`;
    const dashboardPage = new DashboardPage();

    before(() => {
        cy.loginToGhost(baseUrl);
    });

    it('debería mostrar todos los elementos del dashboard correctamente', () => {
        cy.performActionAndScreenshot(() => {
            dashboardPage.visitDashboard();
        }, `${caseFolder}/1-after-visiting-dashboard`);
        cy.performActionAndScreenshot(() => {
            dashboardPage.visitTotalMembers();
        }, `${caseFolder}/2-total-members`);
        cy.performActionAndScreenshot(() => {
            dashboardPage.visitCreatedManually();
        }, `${caseFolder}/3-created-manually`);
        cy.performActionAndScreenshot(() => {
            dashboardPage.checkListFooter();
        }, `${caseFolder}/4-list-footer`);
    });
});
