const faker = require('faker');

describe('Page Creation and Publishing in Ghost', () => {
    const baseUrl = 'http://localhost:2368';
    const newPageButton = 'New page';
    const publishButton = 'Publish';
    const successMessageContainer = '.gh-publish-title';
    const continueButtonSelector = '[data-test-button="continue"]';
    const confirmPublishButtonSelector = 'button[data-test-button="confirm-publish"]';
    const versionFolder = Cypress.config('baseFolder568');
    const caseFolder = `${versionFolder}caso12`;

    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.loginToGhost(baseUrl);
    });


    it('debería crear una página y verificar su vista previa', () => {
        const randomPageTitle = faker.lorem.sentence();
        const randomPageDescription = faker.lorem.paragraph();
        cy.visit('/ghost/#/pages');
        cy.conditionalScreenshot(`${caseFolder}/401-after-navigating-to-pages`);
        cy.contains(newPageButton).click();
        cy.url().should('include', '/editor/page');
        cy.conditionalScreenshot(`${caseFolder}/402-after-clicking-new-page`);
        cy.get('textarea[placeholder="Page title"]').type(randomPageTitle).type('{enter}');
        cy.get('div[contenteditable="true"]').first().click({ force: true }).type(randomPageDescription);
        cy.conditionalScreenshot(`${caseFolder}/403-after-typing-page-details`);
        cy.contains('button', 'Preview').click();
        cy.conditionalScreenshot(`${caseFolder}/404-after-clicking-preview-button`);
        cy.conditionalScreenshot(`${caseFolder}/405-after-verifying-preview`);
    });

    it('debería contar las palabras aleatoriamente en la descripción al crear una Page', () => {
        const randomPageTitle = faker.commerce.productName();
        const pageDescription = faker.lorem.sentence(50);
        const expectedWordCount = pageDescription.split(' ').length;
        cy.visit('/ghost/#/pages');
        cy.conditionalScreenshot(`${caseFolder}/101-after-navigating-to-pages`);
        cy.contains('New page').click();
        cy.url().should('include', '/editor/page');
        cy.conditionalScreenshot(`${caseFolder}/102-after-clicking-new-page`);
        cy.get('textarea[placeholder="Page title"]').type(randomPageTitle).type('{enter}');
        cy.conditionalScreenshot(`${caseFolder}/103-after-typing-title`);
        cy.get('div[contenteditable="true"]').first().click({ force: true }).type(pageDescription);
        cy.conditionalScreenshot(`${caseFolder}/104-after-typing-description`);
        cy.get('.gh-editor-wordcount').should('contain', `${expectedWordCount} words`);
        cy.conditionalScreenshot(`${caseFolder}/105-after-verifying-word-count`);
    });

    it('debería crear una página y luego cancelar, verificando que la página no se crea', () => {
        const pageTitle = faker.lorem.sentence();
        const pageDescription = faker.lorem.paragraph();
        cy.visit('/ghost/#/pages');
        cy.conditionalScreenshot(`${caseFolder}/71-after-navigating-to-pages`);
        cy.get('li.gh-list-row.gh-posts-list-item.gh-post-list-plain-status').its('length').then(initialCount => {
            cy.contains(newPageButton).click();
            cy.url().should('include', '/editor/page');
            cy.conditionalScreenshot(`${caseFolder}/72-after-clicking-new-page`);
            cy.get('textarea[placeholder="Page title"]').type(pageTitle).type('{enter}');
            cy.conditionalScreenshot(`${caseFolder}/73-after-typing-title`);
            cy.get('div[contenteditable="true"]').first().click({ force: true }).type(pageDescription);
            cy.conditionalScreenshot(`${caseFolder}/74-after-typing-description`);
            cy.get('.gh-btn-editor.gh-editor-back-button').click();
            cy.conditionalScreenshot(`${caseFolder}/75-after-clicking-cancel`);
            cy.wait(1000);
            cy.visit('/ghost/#/pages');
            cy.wait(1000);
            cy.get('li.gh-list-row.gh-posts-list-item.gh-post-list-plain-status').its('length').should('eq', initialCount);
            cy.conditionalScreenshot(`${caseFolder}/76-after-verifying-page-not-created`);
        });
    });

    it('debería crear una page con un título y descripción aleatorios', () => {
         const randomPageTitle = faker.lorem.sentence();
         const randomPageDescription = faker.lorem.paragraph();
         cy.visit('/ghost/#/pages');
         cy.conditionalScreenshot(`${caseFolder}/03-after-navigating-to-pages`);
         cy.contains(newPageButton).click();
         cy.url().should('include', '/editor/page');
         cy.conditionalScreenshot(`${caseFolder}/04-after-clicking-new-page`);
         cy.get('textarea[placeholder="Page title"]').type(randomPageTitle).type('{enter}');
         cy.conditionalScreenshot(`${caseFolder}/05-after-typing-title`);
         cy.get('div[contenteditable="true"]').first().click({force: true}).type(randomPageDescription);
         cy.conditionalScreenshot(`${caseFolder}/06-after-typing-description`);
         cy.contains(publishButton).click();
         cy.conditionalScreenshot(`${caseFolder}/07-after-clicking-publish`);
         cy.get(successMessageContainer).should('be.visible');
         cy.conditionalScreenshot(`${caseFolder}/08-after-publish-success-visible`);
         cy.get(continueButtonSelector).click();
         cy.conditionalScreenshot(`${caseFolder}/09-after-clicking-continue`);
         cy.get(confirmPublishButtonSelector).should('be.visible');
         cy.get(confirmPublishButtonSelector).click();
         cy.conditionalScreenshot(`${caseFolder}/10-after-confirming-publish`);
     });

     it('debería crear una nueva page solo con título aleatorio sin descripción', () => {
         const randomPageTitle = faker.lorem.sentence();
         cy.visit('/ghost/#/pages');
         cy.conditionalScreenshot(`${caseFolder}/03-after-navigating-to-pages`);
         cy.contains(newPageButton).click();
         cy.url().should('include', '/editor/page');
         cy.conditionalScreenshot(`${caseFolder}/04-after-clicking-new-page`);
         cy.get('textarea[placeholder="Page title"]').type(randomPageTitle).type('{enter}');
         cy.conditionalScreenshot(`${caseFolder}/05-after-typing-title`);
         cy.contains(publishButton).click();
         cy.conditionalScreenshot(`${caseFolder}/07-after-clicking-publish`);
         cy.get(successMessageContainer).should('be.visible');
         cy.conditionalScreenshot(`${caseFolder}/08-after-publish-success-visible`);
         cy.get(continueButtonSelector).click();
         cy.conditionalScreenshot(`${caseFolder}/09-after-clicking-continue`);
         cy.get(confirmPublishButtonSelector).should('be.visible');
         cy.get(confirmPublishButtonSelector).click();
         cy.conditionalScreenshot(`${caseFolder}/10-after-confirming-publish`);
     });

    it('debería permitir la creación de una nueva Page sin título pero con descripción', () => {
        const randomPageDescription = faker.lorem.paragraph();
        cy.visit('/ghost/#/pages');
        cy.conditionalScreenshot(`${caseFolder}/03-after-navigating-to-pages`);
        cy.contains(newPageButton).click();
        cy.url().should('include', '/editor/page');
        cy.conditionalScreenshot(`${caseFolder}/04-after-clicking-new-page`);
        cy.get('div[contenteditable="true"]').first().click({force: true}).type(randomPageDescription);
        cy.conditionalScreenshot(`${caseFolder}/05-after-typing-description`);
        cy.contains(publishButton).click();
        cy.conditionalScreenshot(`${caseFolder}/06-after-clicking-publish`);
        cy.get(continueButtonSelector).click();
        cy.conditionalScreenshot(`${caseFolder}/07-after-clicking-continue`);
        cy.get(confirmPublishButtonSelector).should('be.visible');
        cy.get(confirmPublishButtonSelector).click();
        cy.conditionalScreenshot(`${caseFolder}/08-after-confirming-publish`);
        cy.get(successMessageContainer).should('be.visible');
        cy.conditionalScreenshot(`${caseFolder}/09-after-publish-success-visible`);
    });

    it('debería fallar al crear una page sin título', () => {
        cy.visit('/ghost/#/pages');
        cy.conditionalScreenshot(`${caseFolder}/10-after-navigating-to-pages`);
        cy.contains(newPageButton).click();
        cy.url().should('include', '/editor/page');
        cy.conditionalScreenshot(`${caseFolder}/11-after-clicking-new-page`);
        cy.contains(publishButton).should('not.exist');
        cy.conditionalScreenshot(`${caseFolder}/12-after-attempting-publish-without-title`);
        cy.url().should('not.include', '/editor/finish');
        cy.conditionalScreenshot(`${caseFolder}/13-after-confirming-no-navigation-on-error`);
    });

    it('debería fallar al crear una nueva Page con un título extremadamente largo', () => {
        const extremelyLongTitle = Array(20).fill(faker.lorem.paragraph()).join(' ');
        cy.visit('/ghost/#/pages');
        cy.conditionalScreenshot(`${caseFolder}/14-after-navigating-to-pages`);
        cy.contains(newPageButton).click();
        cy.url().should('include', '/editor/page');
        cy.conditionalScreenshot(`${caseFolder}/15-after-clicking-new-page`);
        cy.get('textarea[placeholder="Page title"]').type(extremelyLongTitle, { force: true });
        cy.conditionalScreenshot(`${caseFolder}/16-after-typing-extremely-long-title`);
        cy.get(publishButton).should('not.exist');
        cy.conditionalScreenshot(`${caseFolder}/17-after-attempting-publish-with-extremely-long-title`);
    });

   it('debería fallar al crear una nueva page con una descripción extremadamente larga', () => {
        const extremelyLongDescription = Array(20).fill(faker.lorem.paragraphs(10)).join(' ');
        // se queda en 5,420 words
        cy.visit('/ghost/#/pages');
        cy.conditionalScreenshot(`${caseFolder}/14-after-navigating-to-pages`);
        cy.contains(newPageButton).click();
        cy.url().should('include', '/editor/page');
        cy.conditionalScreenshot(`${caseFolder}/15-after-clicking-new-page`);
        cy.get('div[contenteditable="true"]').first().click({ force: true }).type(extremelyLongDescription, { force: true });
        cy.conditionalScreenshot(`${caseFolder}/16-after-typing-extremely-long-description`);
        cy.get(publishButton).should('not.exist');
        cy.conditionalScreenshot(`${caseFolder}/17-after-attempting-publish-with-extremely-long-description`);
    });

    it('debería crear una nueva page con título y descripción usando solo caracteres especiales', () => {
        const specialCharactersTitle = '!@#$%^&*()_+=';
        const specialCharactersDescription = '!@#$%^&*()_+=-[]{};:,.<>?';
        cy.visit('/ghost/#/pages');
        cy.conditionalScreenshot(`${caseFolder}/34-after-navigating-to-pages`);
        cy.contains(newPageButton).click();
        cy.url().should('include', '/editor/page');
        cy.conditionalScreenshot(`${caseFolder}/35-after-clicking-new-page`);
        cy.get('textarea[placeholder="Page title"]').type(specialCharactersTitle).type('{enter}');
        cy.conditionalScreenshot(`${caseFolder}/36-after-typing-special-characters-title`);
        cy.get('div[contenteditable="true"]').first().click({force: true}).type(specialCharactersDescription);
        cy.conditionalScreenshot(`${caseFolder}/37-after-typing-special-characters-description`);
        cy.contains(publishButton).click();
        cy.conditionalScreenshot(`${caseFolder}/38-after-clicking-publish`);
        cy.get(successMessageContainer).should('be.visible');
        cy.conditionalScreenshot(`${caseFolder}/39-after-publish-success-visible`);
        cy.get(continueButtonSelector).click();
        cy.conditionalScreenshot(`${caseFolder}/40-after-clicking-continue`);
        cy.get(confirmPublishButtonSelector).should('be.visible');
        cy.get(confirmPublishButtonSelector).click();
        cy.conditionalScreenshot(`${caseFolder}/41-after-confirming-publish`);
    });
});
