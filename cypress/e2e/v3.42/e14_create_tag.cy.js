describe('Create a tag in Ghost Admin', () => {
    const tagName = 'New Tag Name';
    const versionFolder = Cypress.config('baseFolder342');
    const caseFolder = `${versionFolder}caso14`;

    beforeEach(() => {
        cy.loginToGhost();
    });

    it('should create a new tag', () => {
        cy.get('a[href="#/tags/"]').click();
        cy.screenshot(`${caseFolder}/before-creating-tag`);

        cy.xpath("//span[normalize-space()='New tag']").should('be.visible').click({ force: true });
        cy.get('input[name="name"]').type(tagName);
        cy.screenshot(`${caseFolder}/after-entering-tag-info`);

        cy.get('button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click();
        cy.screenshot(`${caseFolder}/after-saving-tag`);

        cy.contains(tagName).should('exist');
        cy.screenshot(`${caseFolder}/after-tag-created`);
    });
});
