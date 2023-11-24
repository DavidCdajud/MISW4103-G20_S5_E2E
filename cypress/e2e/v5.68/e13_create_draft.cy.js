const faker = require('faker');

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

    it('debería crear un draft post con título y descripción', () => {
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

   it('debería crear un draft post sin descripción', () => {
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

    it('debería mostrar un error cuando el título del post es más largo de 255 caracteres', () => {
        let overlyLongTitle = '';
        while (overlyLongTitle.length <= 255) {
            overlyLongTitle += faker.lorem.word() + ' ';
        }
        cy.visit('/ghost/#/editor/post');
        cy.url().should('include', '/ghost/#/editor/post');
        cy.get('textarea[placeholder="Post title"]').type(overlyLongTitle, { force: true });
        cy.xpath('//span[normalize-space()="Publish"]').click({ force: true });
        cy.get('article.gh-alert.gh-alert-red').should('be.visible');
        cy.get('article.gh-alert.gh-alert-red .gh-alert-content').should('contain', 'Validation failed: Title cannot be longer than 255 characters.');
    });

    it('debería verificar que el botón de publicar no esté presente cuando son solo caracteres especiales', () => {
        const specialChars = '!@#$%^&*()_+{}:"<>?[];\',./`~';
        const titleWithSpecialChars = new Array(5)
            .fill(null)
            .map(() => specialChars[Math.floor(Math.random() * specialChars.length)])
            .join('');
        cy.visit('/ghost/#/editor/post');
        cy.url().should('include', '/ghost/#/editor/post');
        cy.conditionalScreenshot(`${caseFolder}/1-after-navigating-to-post-creation`);
        cy.get('textarea[placeholder="Post title"]', { timeout: 10000 })
            .should('be.visible')
            .type(titleWithSpecialChars, { parseSpecialCharSequences: false })
            .type('{enter}');
        cy.conditionalScreenshot(`${caseFolder}/2-after-typing-title`);
        cy.xpath(publishButtonXpath).should('not.exist');
        cy.conditionalScreenshot(`${caseFolder}/3-after-publish-button-should-not-exist`);
    });

   it('debería crear un draft post con título y descripción, y luego contar las palabras', () => {
        const postTitle = faker.lorem.sentence();
        const postContent = faker.lorem.paragraphs(5);
        cy.visit('/ghost/#/editor/post');
        cy.url().should('include', '/ghost/#/editor/post');
        cy.conditionalScreenshot(`${caseFolder}/1-after-navigating-to-post-creation`);
        cy.get('textarea[placeholder="Post title"]', { timeout: 10000 }).should('be.visible').type(postTitle);
        cy.conditionalScreenshot(`${caseFolder}/2-after-typing-title`);
        cy.xpath('//p[@data-koenig-dnd-droppable="true"]').first().click({force: true}).type(postContent);
        cy.conditionalScreenshot(`${caseFolder}/3-after-typing-content`);
        cy.get('.gh-editor-wordcount').invoke('text').then(wordCountText => {
            const wordCount = parseInt(wordCountText.match(/\d+/)[0], 10);
            expect(wordCount).to.be.at.least(1);
        });
        cy.conditionalScreenshot(`${caseFolder}/4-after-verifying-word-count`);
    });

   it('debería crear un draft post con un título aleatorio y contenido con caracteres especiales', () => {
        const randomTitle = faker.lorem.sentence();
        const specialCharactersContent = '!@#$%^&*()_+=-[]{};:<>?,./';
        cy.visit('/ghost/#/editor/post');
        cy.url().should('include', '/ghost/#/editor/post');
        cy.conditionalScreenshot(`${caseFolder}/1-after-navigating-to-post-creation`);
        cy.get('textarea[placeholder="Post title"]', { timeout: 10000 }).should('be.visible').type(randomTitle);
        cy.conditionalScreenshot(`${caseFolder}/2-after-typing-title`);
        cy.xpath('//p[@data-koenig-dnd-droppable="true"]')
            .first()
            .click({force: true})
            .type(specialCharactersContent);
        cy.conditionalScreenshot(`${caseFolder}/3-after-typing-special-characters`);
        cy.xpath(publishButtonXpath).click();
        cy.conditionalScreenshot(`${caseFolder}/4-after-clicking-save-draft`);
        cy.contains(successMessage).should('be.visible');
        cy.conditionalScreenshot(`${caseFolder}/5-after-draft-save-success`);
    });

    it('debería crear un post sin título pero con contenido aleatorio', () => {
        const randomContent = faker.lorem.paragraphs(3);
        cy.visit('/ghost/#/editor/post');
        cy.url().should('include', '/ghost/#/editor/post');
        cy.conditionalScreenshot(`${caseFolder}/1-after-navigating-to-post-creation`);
        cy.xpath('//p[@data-koenig-dnd-droppable="true"]')
            .first()
            .click({force: true})
            .type(randomContent);
        cy.conditionalScreenshot(`${caseFolder}/2-after-typing-content`);
        cy.xpath(publishButtonXpath).click();
        cy.conditionalScreenshot(`${caseFolder}/3-after-clicking-publish`);
        cy.contains(successMessage).should('be.visible');
        cy.conditionalScreenshot(`${caseFolder}/4-after-publish-success`);
    });
});
