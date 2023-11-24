describe('Create a draft in Ghost', () => {
    const baseUrl = 'http://localhost:3001';
    const postTitle = 'My New Ghost Post';
    const postContent = 'Contenido del borrador del post.';
    const publishButtonXpath = '//span[normalize-space()=\'Publish\']';
    const successMessage = 'Published';
    const versionFolder = Cypress.config('baseFolder342');
    const caseFolder = `${versionFolder}caso13`;

    beforeEach(() => {
        cy.loginToGhost(baseUrl);
    });

    it('should create a draft post with content', () => {
        cy.visit('/ghost/#/editor/post');
        cy.screenshot(`${caseFolder}/1-after-login`);

        cy.url().should('include', '/ghost/#/editor/post');

        cy.get('textarea[placeholder="Post Title"]', { timeout: 10000 })
            .should('be.visible')
            .type(postTitle)
            .type('{enter}');
        cy.screenshot(`${caseFolder}/2-post-title`);

        cy.get('.koenig-editor__editor').first()
            .click()
            .type(postContent);
        cy.screenshot(`${caseFolder}/3-post-content`);

        cy.xpath(publishButtonXpath).click();
        cy.screenshot(`${caseFolder}/4-after-clicking-publish`);

        cy.get('.gh-publishmenu-dropdown').should('be.visible');
        cy.get('.gh-btn.gh-btn-blue.gh-publishmenu-button').click();
        cy.screenshot(`${caseFolder}/5-after-confirming-publish`);

        cy.get('.gh-notification-content').should('contain', successMessage);
        cy.screenshot(`${caseFolder}/6-after-publishing`);
    });
});
