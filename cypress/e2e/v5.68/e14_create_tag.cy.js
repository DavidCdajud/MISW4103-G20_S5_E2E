describe('Create a tag in Ghost Admin', () => {
    const tagName = 'New Tag Name';
    const tagDescription = 'A description for the new tag';
    const tagsUrl = '/ghost/#/tags';
    const versionFolder = Cypress.config('baseFolder568');
    const caseFolder = `${versionFolder}caso14`;

    beforeEach(() => {
        cy.loginToGhost();
    });

    it('should create a new tag', () => {
        cy.visit(tagsUrl);
        cy.screenshot(`${caseFolder}/01-after-visiting-tags`);
        cy.contains('New tag').click();
        cy.screenshot(`${caseFolder}/02-before-creating-tag`);
        cy.get('input[name="name"]').type(tagName);
        cy.get('textarea[name="description"]').type(tagDescription);
        cy.screenshot(`${caseFolder}/03-after-entering-tag-info`);
        cy.contains('Save').click();
        cy.screenshot(`${caseFolder}/04-after-saving-tag`);
        cy.contains(tagName).should('exist');
        cy.screenshot(`${caseFolder}/05-after-tag-created`);
    });
});
