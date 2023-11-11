describe('Create a tag in Ghost Admin', () => {
    const tagName = 'New Tag Name';
    const tagDescription = 'A description for the new tag';
    const tagsUrl = '/ghost/#/tags';

    beforeEach(() => {
        cy.loginToGhost();
    });

    it('should create a new tag', () => {
        cy.visit(tagsUrl);
        cy.contains('New tag').click();
        cy.get('input[name="name"]').type(tagName);
        cy.get('textarea[name="description"]').type(tagDescription);
        cy.contains('Save').click();
        cy.contains(tagName).should('exist');
    });
});
