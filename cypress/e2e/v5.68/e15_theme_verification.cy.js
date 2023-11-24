describe('Theme toggle in Ghost Admin', () => {
    const baseUrl = 'http://localhost:2368';
    const dashboardUrl = '/ghost/#/dashboard';
    const themeToggleSelector = '.nightshift-toggle-container .nightshift-toggle';
    const themeActiveClass = 'on';
    const versionFolder = Cypress.config('baseFolder568');
    const caseFolder = `${versionFolder}caso15`;

    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.loginToGhost(baseUrl);
    });

    it('debería cambiar entre light y dark themes', () => {
        cy.visit(dashboardUrl);
        const getThemeState = () => {
            return cy.get(themeToggleSelector).invoke('hasClass', themeActiveClass).then(isDark => isDark ? 'dark' : 'light');
        };
        const toggleTheme = (expectedTheme) => {
            getThemeState().then((theme) => {
                if ((theme === 'dark' && expectedTheme === 'light') || (theme === 'light' && expectedTheme === 'dark')) {
                    cy.get(themeToggleSelector).click();
                    cy.wait(500);
                    cy.conditionalScreenshot(`${caseFolder}/2-dashboard-after-toggle-to-${expectedTheme}`);
                }
            });
        };
        cy.conditionalScreenshot(`${caseFolder}/1-dashboard-initial`);
        toggleTheme('dark');
        getThemeState().should('eq', 'dark');
        toggleTheme('light');
        getThemeState().should('eq', 'light');
    });

    it('debería mantener el theme seleccionado incluso después de recargar la página', () => {
        cy.visit(dashboardUrl);
        const getThemeState = () => {
            return cy.get(themeToggleSelector).invoke('hasClass', themeActiveClass).then(isDark => isDark ? 'dark' : 'light');
        };
        getThemeState().then((initialTheme) => {
            if (initialTheme === 'light') {
                cy.get(themeToggleSelector).click();
                cy.wait(500);
                cy.conditionalScreenshot(`${caseFolder}/3-dashboard-after-toggle-to-dark`);
            }
            cy.reload();
            cy.conditionalScreenshot(`${caseFolder}/4-dashboard-after-reload`);
            getThemeState().should('eq', 'dark');
            cy.get(themeToggleSelector).click();
            cy.wait(500);
            cy.conditionalScreenshot(`${caseFolder}/5-dashboard-after-toggle-to-light`);
            cy.reload();
            cy.conditionalScreenshot(`${caseFolder}/6-dashboard-after-second-reload`);
            getThemeState().should('eq', 'light');
        });
    });

    it('no debería mostrar resultados para un término de búsqueda poco probable con un carácter adicional', () => {
        const searchTermNegative = 'UnlikelyTermXYZ';
        const additionalChar = 'a';
        const typeDelay = 100;
        cy.visit(dashboardUrl);
        cy.get('.gh-nav-btn-search').click();
        cy.get('input[placeholder="Search site"]').should('be.visible').type(searchTermNegative, { delay: typeDelay });
        cy.get('input[placeholder="Search site"]').type(additionalChar);
        cy.wait(typeDelay);
        cy.get('.ember-power-select-option--no-matches-message').should('contain', 'No results found');
        cy.conditionalScreenshot(`${caseFolder}/11-search-no-results`);
    });
});
