describe('Create a draft in Ghost', () => {
    const postTitle = 'My New Ghost Post';
    const postContent = 'Contenido del borrador del post.';
    const publishButtonXpath = '//span[normalize-space()=\'Publish\']';
    const successMessage = 'Ready, set, publish. Share it with the world.';
    const caseFolder = 'caso13';

    beforeEach(() => {
        cy.loginToGhost();
    });

    it('should create a draft post', () => {
        cy.visit('/ghost/#/editor/post');
        cy.url().should('include', '/ghost/#/editor/post');
        cy.get('textarea[placeholder="Post title"]', { timeout: 10000 }).should('be.visible').type(postTitle);
        cy.screenshot(`${caseFolder}/post-title`);

        cy.xpath('//p[@data-koenig-dnd-droppable="true"]').first().click({force: true}).type(postContent);
        cy.screenshot(`${caseFolder}/post-content`);

        cy.xpath(publishButtonXpath).click();
        cy.contains(successMessage).should('be.visible');
        cy.screenshot(`${caseFolder}/publish-success`);
    });
});
