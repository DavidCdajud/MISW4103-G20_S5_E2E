describe('Theme toggle in Ghost Admin', () => {
    const dashboardUrl = '/ghost/#/dashboard';
    const themeToggleSelector = '.nightshift-toggle-container .nightshift-toggle';
    const themeActiveClass = 'on';

    before(() => {
        cy.loginToGhost();
    });

    it('should switch between light and dark themes', () => {
        cy.visit(dashboardUrl);
        const getThemeState = () => cy.get(themeToggleSelector).then(($toggle) => $toggle.hasClass(themeActiveClass) ? 'dark' : 'light');
        const toggleTheme = (expectedTheme) => {
            getThemeState().then((currentTheme) => {
                if (currentTheme !== expectedTheme) {
                    cy.get(themeToggleSelector).click();
                }
            });
        };

        toggleTheme('dark');
        cy.get(themeToggleSelector).should('have.class', themeActiveClass);
        toggleTheme('light');
        cy.get(themeToggleSelector).should('not.have.class', themeActiveClass);
    });
});
