describe('Theme toggle in Ghost Admin', () => {
    const dashboardUrl = '/ghost/#/dashboard';
    const themeToggleSelector = '.nightshift-toggle-container .nightshift-toggle';
    const themeActiveClass = 'on';
    const caseFolder = 'caso15';

    before(() => {
        cy.loginToGhost();
    });

    it('should switch between light and dark themes', () => {
        cy.visit(dashboardUrl);
        cy.screenshot(`${caseFolder}/dashboard-initial`);

        const getThemeState = () => {
            return cy.get(themeToggleSelector).invoke('hasClass', themeActiveClass).then(isDark => isDark ? 'dark' : 'light');
        };

        const toggleTheme = (expectedTheme) => {
            getThemeState().then((theme) => {
                if ((theme === 'dark' && expectedTheme === 'light') || (theme === 'light' && expectedTheme === 'dark')) {
                    cy.get(themeToggleSelector).click();
                    cy.screenshot(`${caseFolder}/dashboard-after-toggle-to-${expectedTheme}`);
                }
            });
        };

        toggleTheme('dark');
        getThemeState().should('eq', 'dark');
        toggleTheme('light');
        getThemeState().should('eq', 'light');
    });
});
