const faker = require('faker');

describe('Create a tag in Ghost Admin', () => {
    const baseUrl = 'http://localhost:2368';
    const tagName = 'New Tag Name';
    const tagDescription = 'A description for the new tag';
    const tagsUrl = '/ghost/#/tags';
    const versionFolder = Cypress.config('baseFolder568');
    const caseFolder = `${versionFolder}caso14`;

    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.loginToGhost(baseUrl);
    });

    it('debería crear un nuevo tag con nombre y descripción aleatorios', () => {
        const randomTagName = faker.lorem.word();
        const randomTagDescription = faker.lorem.sentence();
        cy.visit(tagsUrl);
        cy.conditionalScreenshot(`${caseFolder}/1-after-visiting-tags`);
        cy.contains('New tag').click();
        cy.conditionalScreenshot(`${caseFolder}/2-before-creating-tag`);
        cy.get('input[name="name"]').type(randomTagName);
        cy.get('textarea[name="description"]').type(randomTagDescription);
        cy.conditionalScreenshot(`${caseFolder}/3-after-entering-tag-info`);
        cy.contains('Save').click();
        cy.conditionalScreenshot(`${caseFolder}/4-after-saving-tag`);
        cy.contains(randomTagName).should('exist');
        cy.conditionalScreenshot(`${caseFolder}/5-after-tag-created`);
    });

    it('debería crear un nuevo tag con un nombre aleatorio', () => {
        const randomTagName = faker.lorem.word();
        cy.visit(tagsUrl);
        cy.conditionalScreenshot(`${caseFolder}/1-after-visiting-tags`);
        cy.contains('New tag').click();
        cy.conditionalScreenshot(`${caseFolder}/2-before-creating-tag`);
        cy.get('input[name="name"]').type(randomTagName);
        cy.conditionalScreenshot(`${caseFolder}/3-after-entering-tag-name`);
        cy.contains('Save').click();
        cy.conditionalScreenshot(`${caseFolder}/4-after-saving-tag`);
        cy.contains(randomTagName).should('exist');
        cy.conditionalScreenshot(`${caseFolder}/5-after-tag-created`);
    });

    it('no debería permitir la creación de un nuevo tag sin nombre', () => {
        const specialCharactersDescription = '!@#$%^&*()_+=-[]{};:<>?,./';
        cy.visit(tagsUrl);
        cy.conditionalScreenshot(`${caseFolder}/1-after-visiting-tags`);
        cy.contains('New tag').click();
        cy.conditionalScreenshot(`${caseFolder}/2-before-creating-tag`);
        cy.get('textarea[name="description"]').type(specialCharactersDescription);
        cy.conditionalScreenshot(`${caseFolder}/3-after-entering-tag-description`);
        cy.contains('Save').click();
        cy.conditionalScreenshot(`${caseFolder}/4-after-attempting-to-save-tag`);
        cy.get('span.error p.response').should('contain', 'You must specify a name for the tag.');
        cy.conditionalScreenshot(`${caseFolder}/5-after-error-message`);
    });

    it('no debería permitir la creación de un nuevo tag con un nombre excesivamente largo', () => {
        const excessivelyLongTagName = 'a'.repeat(192);
        cy.visit(tagsUrl);
        cy.conditionalScreenshot(`${caseFolder}/1-after-visiting-tags`);
        cy.contains('New tag').click();
        cy.conditionalScreenshot(`${caseFolder}/2-before-creating-tag`);
        cy.get('input[name="name"]').type(excessivelyLongTagName, { force: true });
        cy.conditionalScreenshot(`${caseFolder}/3-after-entering-long-tag-name`);
        cy.contains('Save').click();
        cy.conditionalScreenshot(`${caseFolder}/4-after-attempting-to-save-tag`);
        cy.get('span.error p.response').should('contain', 'Tag names cannot be longer than 191 characters');
        cy.conditionalScreenshot(`${caseFolder}/5-after-error-message`);
    });

    it('no debería permitir la creación de un nuevo tag con un nombre válido y una descripción excesivamente larga', () => {
        const validTagName = faker.lorem.word();
        const baseDescription = faker.lorem.paragraphs(10);
        const excessivelyLongTagDescription = baseDescription.slice(0, 501);
        cy.visit(tagsUrl);
        cy.conditionalScreenshot(`${caseFolder}/1-after-visiting-tags`);
        cy.contains('New tag').click();
        cy.conditionalScreenshot(`${caseFolder}/2-before-creating-tag`);
        cy.get('input[name="name"]').type(validTagName);
        cy.conditionalScreenshot(`${caseFolder}/3-after-entering-tag-name`);
        cy.get('textarea[name="description"]').type(excessivelyLongTagDescription, { force: true });
        cy.conditionalScreenshot(`${caseFolder}/4-after-entering-long-tag-description`);
        cy.contains('Save').click();
        cy.conditionalScreenshot(`${caseFolder}/5-after-attempting-to-save-tag`);
        cy.get('p.response').should('contain', 'Description cannot be longer than 500 characters');
        cy.conditionalScreenshot(`${caseFolder}/6-after-error-message`);
    });

    it('debería crear un nuevo tag y subir una imagen de Unsplash', () => {
        const tagName = faker.lorem.word();
        cy.visit(tagsUrl);
        cy.conditionalScreenshot(`${caseFolder}/1-after-visiting-tags`);
        cy.contains('New tag').click();
        cy.conditionalScreenshot(`${caseFolder}/2-before-creating-tag`);
        cy.get('input[name="name"]').type(tagName);
        cy.conditionalScreenshot(`${caseFolder}/3-after-entering-tag-name`);
        cy.get('div.gh-image-uploader-unsplash').click();
        cy.conditionalScreenshot(`${caseFolder}/4-after-clicking-image-upload-button`);
        cy.get('section.gh-unsplash-grid').find('a.gh-unsplash-photo').first().click();
        cy.conditionalScreenshot(`${caseFolder}/5-after-selecting-image`);
        cy.get('a.gh-unsplash-button').contains('Insert image').click({force: true});
        cy.conditionalScreenshot(`${caseFolder}/6-after-inserting-image`);
        cy.contains('Save').click({force: true});
        cy.conditionalScreenshot(`${caseFolder}/7-after-saving-tag`);
        cy.contains(tagName).should('exist');
        cy.conditionalScreenshot(`${caseFolder}/8-after-tag-created`);
    });

    it('debería crear un nuevo internal tag', () => {
        const internalTagName = faker.lorem.word();
        const internalTagDescription = faker.lorem.sentence();
        cy.visit(tagsUrl);
        cy.conditionalScreenshot(`${caseFolder}/1-after-visiting-tags`);
        cy.get('button[data-test-tags-nav="internal"]').click({force: true});
        cy.conditionalScreenshot(`${caseFolder}/2-after-clicking-internal-tags`);
        cy.get('a.ember-view.gh-btn.gh-btn-green').click({force: true});
        cy.conditionalScreenshot(`${caseFolder}/3-before-creating-new-tag`);
        cy.get('input[name="name"]').type(internalTagName);
        cy.get('textarea[name="description"]').type(internalTagDescription);
        cy.conditionalScreenshot(`${caseFolder}/4-after-entering-internal-tag-info`);
        cy.contains('Save').click();
        cy.conditionalScreenshot(`${caseFolder}/5-after-saving-internal-tag`);
        cy.contains(internalTagName).should('exist');
        cy.conditionalScreenshot(`${caseFolder}/6-after-internal-tag-created`);
    });

    it('debería crear un nuevo internal tag con un nombre aleatorio excesivamente largo', () => {
        let internalTagName = faker.lorem.words(30);
        internalTagName = internalTagName.length > 191 ? internalTagName.substring(0, 191) : internalTagName;
        const internalTagDescription = faker.lorem.sentence();
        cy.visit(tagsUrl);
        cy.conditionalScreenshot(`${caseFolder}/1-after-visiting-tags`);
        cy.get('button[data-test-tags-nav="internal"]').click({force: true});
        cy.conditionalScreenshot(`${caseFolder}/2-after-clicking-internal-tags`);
        cy.get('a.ember-view.gh-btn.gh-btn-green').click({force: true});
        cy.conditionalScreenshot(`${caseFolder}/3-before-creating-new-tag`);
        cy.get('input[name="name"]').type(internalTagName, { force: true });
        cy.get('textarea[name="description"]').type(internalTagDescription, { force: true });
        cy.conditionalScreenshot(`${caseFolder}/4-after-entering-internal-tag-info`);
        cy.contains('Save').click();
        cy.conditionalScreenshot(`${caseFolder}/5-after-saving-internal-tag`);
        cy.contains(internalTagName.slice(0, 50)).should('exist');
        cy.conditionalScreenshot(`${caseFolder}/6-after-internal-tag-created`);
    });

    it('debería crear un nuevo internal tag con un nombre aleatorio y una descripción aleatoria excesivamente larga', () => {
        let internalTagName = faker.lorem.word();
        let internalTagDescription = faker.lorem.paragraphs(5);
        internalTagDescription = internalTagDescription.substring(0, 501);
        cy.visit(tagsUrl);
        cy.conditionalScreenshot(`${caseFolder}/1-after-visiting-tags`);
        cy.get('button[data-test-tags-nav="internal"]').click({force: true});
        cy.conditionalScreenshot(`${caseFolder}/2-after-clicking-internal-tags`);
        cy.get('a.ember-view.gh-btn.gh-btn-green').click({force: true});
        cy.conditionalScreenshot(`${caseFolder}/3-before-creating-new-tag`);
        cy.get('input[name="name"]').type(internalTagName, { force: true });
        cy.get('textarea[name="description"]').type(internalTagDescription, { force: true });
        cy.conditionalScreenshot(`${caseFolder}/4-after-entering-internal-tag-info`);
        cy.contains('Save').click();
        cy.get('p.response').should('contain', 'Description cannot be longer than 500 characters');
        cy.conditionalScreenshot(`${caseFolder}/5-after-attempt-to-save-internal-tag`);
    });
});
