describe('Create a tag in Ghost Admin', () => {
    const tagName = 'New Tag Name';
    const tagDescription = 'A description for the new tag';
    const tagsUrl = '/ghost/#/tags';
    const caseFolder = 'caso14';

    beforeEach(() => {
        cy.loginToGhost();
    });

    it('should create a new tag', () => {
        cy.visit(tagsUrl);
        cy.contains('New tag').click();
        cy.screenshot(`${caseFolder}/before-creating-tag`);
        cy.get('input[name="name"]').type(tagName);
        cy.get('textarea[name="description"]').type(tagDescription);
        cy.screenshot(`${caseFolder}/after-entering-tag-info`);
        cy.contains('Save').click();
        cy.screenshot(`${caseFolder}/after-saving-tag`);
        cy.contains(tagName).should('exist');
        cy.screenshot(`${caseFolder}/after-tag-created`);
    });
});
