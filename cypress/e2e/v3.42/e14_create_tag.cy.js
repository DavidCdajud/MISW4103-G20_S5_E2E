describe('Create a tag in Ghost Admin', () => {
    const tagName = 'New Tag Name';
    const tagDescription = 'A description for the new tag';
    const versionFolder = Cypress.config('baseFolder342');
    const caseFolder = `${versionFolder}caso14`;

    beforeEach(() => {
        cy.loginToGhost();
    });

    it('should create a new tag', () => {
        cy.screenshot(`${caseFolder}/1-after-visiting-page`);
        cy.get('a[href="#/tags/"]').click();
        cy.screenshot(`${caseFolder}/2.before-creating-tag`);

        cy.xpath("//span[normalize-space()='New tag']").should('be.visible').click({ force: true });
        cy.get('input[name="name"]').type(tagName);
        cy.get('textarea[name="description"]').type(tagDescription);
        cy.screenshot(`${caseFolder}/3.after-entering-tag-info`);

        cy.get('button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click();
        cy.screenshot(`${caseFolder}/4.after-saving-tag`);

        cy.contains(tagName).should('exist');
        cy.screenshot(`${caseFolder}/5.after-tag-created`);
    });
});
