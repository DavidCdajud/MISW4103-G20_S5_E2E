const DashboardPage = require('./model/dashBoardPage.js');

describe('Theme toggle in Ghost Admin', () => {
    const baseUrl = 'http://localhost:2368';
    const versionFolder = Cypress.config('baseFolder568');
    const caseFolder = `${versionFolder}caso15`;
    const dashboardPage = new DashboardPage();

    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.loginToGhost(baseUrl);
        cy.performActionAndScreenshot(() => {
            dashboardPage.visitDashboard();
        }, `${caseFolder}/1-dashboard-initial`);
    });

    it('debería cambiar entre light y dark themes', () => {
        cy.performActionAndScreenshot(() => {
            dashboardPage.toggleTheme('dark');
            dashboardPage.confirmTheme('dark');
        }, `${caseFolder}/2-dashboard-dark-theme`);
        cy.performActionAndScreenshot(() => {
            dashboardPage.toggleTheme('light');
            dashboardPage.confirmTheme('light');
        }, `${caseFolder}/3-dashboard-light-theme`);
    });

    it('no debería mostrar resultados para un término de búsqueda poco probable con un carácter adicional', () => {
        const searchTermNegative = 'XWZXYZ';
        const additionalChar = 'a';
        const typeDelay = 100;
        cy.performActionAndScreenshot(() => {
            dashboardPage.clickSearchButton();
            dashboardPage.typeSearchTerm(searchTermNegative, typeDelay);
            dashboardPage.typeSearchTerm(additionalChar, typeDelay);
            dashboardPage.verifyNoResultsFound();
        }, `${caseFolder}/11-search-no-results`);
    });

    it('debería mostrar resultados para una de búsqueda válido', () => {
        const validSearchTerm = 'A';
        dashboardPage.visitDashboard();
        cy.performActionAndScreenshot(() => {
            dashboardPage.clickSearchButton();
            dashboardPage.typeSearchTerm(validSearchTerm);
            dashboardPage.verifySearchResults();
        }, `${caseFolder}/search-results-for-valid-term`);
    });
});
