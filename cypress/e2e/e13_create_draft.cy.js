describe('Create a draft in Ghost', () => {
    const postTitle = 'New Test Post';
    const postContent = 'Contenido del borrador del post.';
    const publishButtonXpath = '//span[normalize-space()=\'Publish\']';
    const successMessage = 'Ready, set, publish. Share it with the world.';

    beforeEach(() => {
        cy.loginToGhost();
    });

    it('should create a draft post', () => {
        cy.visit('/ghost/#/editor/post');
        cy.url().should('include', '/ghost/#/editor/post');
        cy.get('textarea[placeholder="Post title"]', { timeout: 10000 }).should('be.visible').type(postTitle);
        cy.xpath('//p[@data-koenig-dnd-droppable="true"]').first().click({force: true}).type(postContent);
        cy.xpath(publishButtonXpath).click();
        cy.contains(successMessage).should('be.visible');
    });
});
