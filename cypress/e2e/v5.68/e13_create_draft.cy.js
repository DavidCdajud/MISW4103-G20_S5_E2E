describe('Create a draft in Ghost', () => {
    const baseUrl = 'http://localhost:2368';
    const postTitle = 'My New Ghost Post';
    const postContent = 'Contenido del borrador del post.';
    const publishButtonXpath = '//span[normalize-space()=\'Publish\']';
    const successMessage = 'Ready, set, publish. Share it with the world.';
    const versionFolder = Cypress.config('baseFolder568');
    const caseFolder = `${versionFolder}caso13`;

    beforeEach(() => {
        cy.loginToGhost(baseUrl);
    });

    it('should create a draft post', () => {
        cy.visit('/ghost/#/editor/post');
        cy.url().should('include', '/ghost/#/editor/post');
        cy.screenshot(`${caseFolder}/1-after-navigating-to-post-creation`);
        cy.get('textarea[placeholder="Post title"]', { timeout: 10000 }).should('be.visible').type(postTitle);
        cy.screenshot(`${caseFolder}/2-after-typing-title`);
        cy.xpath('//p[@data-koenig-dnd-droppable="true"]').first().click({force: true}).type(postContent);
        cy.screenshot(`${caseFolder}/3-after-typing-content`);
        cy.xpath(publishButtonXpath).click();
        cy.screenshot(`${caseFolder}/4-after-clicking-publish`);
        cy.contains(successMessage).should('be.visible');
        cy.screenshot(`${caseFolder}/5-after-publish-success`);
    });
});
