describe('Create a draft in Ghost', () => {
    const baseUrl = 'http://localhost:2368';
    const postTitle = 'My New Ghost Post';
    const postContent = 'Contenido del borrador del post.';
    const publishButtonXpath = '//span[normalize-space()=\'Publish\']';
    const successMessage = 'Ready, set, publish. Share it with the world.';
    const versionFolder = Cypress.config('baseFolder568');
    const caseFolder = `${versionFolder}caso13`;

    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.loginToGhost(baseUrl);
    });

    it('should create a draft post', () => {
        cy.visit('/ghost/#/editor/post');
        cy.url().should('include', '/ghost/#/editor/post');
        cy.conditionalScreenshot(`${caseFolder}/1-after-navigating-to-post-creation`);
        cy.get('textarea[placeholder="Post title"]', { timeout: 10000 }).should('be.visible').type(postTitle);
        cy.conditionalScreenshot(`${caseFolder}/2-after-typing-title`);
        cy.xpath('//p[@data-koenig-dnd-droppable="true"]').first().click({force: true}).type(postContent);
        cy.conditionalScreenshot(`${caseFolder}/3-after-typing-content`);
        cy.xpath(publishButtonXpath).click();
        cy.conditionalScreenshot(`${caseFolder}/4-after-clicking-publish`);
        cy.contains(successMessage).should('be.visible');
        cy.conditionalScreenshot(`${caseFolder}/5-after-publish-success`);
    });

    it('should create a draft post sin descripcion', () => {
        cy.visit('/ghost/#/editor/post');
        cy.url().should('include', '/ghost/#/editor/post');
        cy.conditionalScreenshot(`${caseFolder}/1`);
        cy.get('textarea[placeholder="Post title"]', { timeout: 10000 }).should('be.visible').type(postTitle);
        cy.conditionalScreenshot(`${caseFolder}/2`);
        cy.xpath(publishButtonXpath).click();
        cy.conditionalScreenshot(`${caseFolder}/4`);
        cy.contains(successMessage).should('be.visible');
        cy.conditionalScreenshot(`${caseFolder}/5`);
    });

});
