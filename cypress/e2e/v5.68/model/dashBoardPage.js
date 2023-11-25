class DashBoardPage {
    constructor() {
        this.dashboardUrl = '/ghost/#/dashboard';
        this.themeToggleSelector = '.nightshift-toggle-container .nightshift-toggle';
        this.themeActiveClass = 'on';
    }

    visitDashboard() {
        cy.visit(this.dashboardUrl);
    }

    getThemeState() {
        return cy.get(this.themeToggleSelector).invoke('hasClass', this.themeActiveClass).then(isDark => isDark ? 'dark' : 'light');
    }

    toggleTheme(expectedTheme) {
        return this.getThemeState().then((theme) => {
            if ((theme === 'dark' && expectedTheme === 'light') || (theme === 'light' && expectedTheme === 'dark')) {
                cy.get(this.themeToggleSelector).click();
                return cy.get(this.themeToggleSelector).should(expectedTheme === 'dark' ? 'have.class' : 'not.have.class', this.themeActiveClass);
            }
        });
    }

    confirmTheme(expectedTheme) {
        this.getThemeState().should('eq', expectedTheme);
    }

    clickSearchButton() {
        cy.get('.gh-nav-btn-search').click();
    }

    typeSearchTerm(searchTerm, typeDelay) {
        cy.get('input[placeholder="Search site"]').should('be.visible').type(searchTerm, { delay: typeDelay });
    }

    verifyNoResultsFound() {
        cy.get('.ember-power-select-option--no-matches-message').should('contain', 'No results found');
    }

    searchForTerm(searchTerm) {
        this.clickSearchButton();
        cy.get('input[placeholder="Search site"]').type(searchTerm);
    }

    clearSearchField() {
        cy.get('input[placeholder="Search site"]').clear();
    }

    verifySearchButtonVisible() {
        cy.get('.gh-nav-btn-search').should('be.visible');
    }

    verifySearchResults() {
        // Asume que el 'ul' tiene un rol de 'listbox' y que los resultados de la búsqueda son 'li' descendientes directos.
        cy.get('ul[role="listbox"] > li').should('have.length.greaterThan', 0);
    }


}

module.exports = DashBoardPage;
