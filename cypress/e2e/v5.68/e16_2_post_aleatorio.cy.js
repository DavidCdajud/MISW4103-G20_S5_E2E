import faker from 'faker';

describe('Post', function () {
    it('Nuevo Post - Excerpt mayor a 300 caracteres', function () {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.viewport(1900, 1500)
        cy.visit('http://localhost:2368/ghost/');
        inciarSesion();
        cy.wait(2000);
        navegarNewPost();
        cy.wait(2000);
        cy.screenshot('/caso16_2_aleatorio/Navegar');
        rellenarPost();
        openSettings();
        fillSettingPost();
        cy.screenshot('/caso16_2_aleatorio/finalpublish');
        maxCharacterVerification();
    })
})

const fakeTitle = faker.lorem.words(10);
const fakeDescription = faker.lorem.words(50);
const fakeTag = faker.lorem.words();
const fakeException = faker.lorem.words(310);

function inciarSesion() {
    cy.get('#identification').type('pruebas@correo.com');
    cy.wait(1000);
    cy.get('#password').type('abcde12345');
    cy.wait(1000);
    cy.get('#ember5').click();

}

function navegarNewPost() {
    cy.get('#ember20').click();
    cy.wait(1000);
}

function rellenarPost() {
    cy.get('[placeholder = "Post title"').type(fakeTitle);
    cy.wait(1000);
    cy.get('p').type(fakeDescription);

}

function openSettings() {
    cy.get('.settings-menu-toggle > span').click();

}

function fillSettingPost() {
    cy.get('#custom-excerpt').type(fakeException);
    cy.wait(1000);
    cy.get('#tag-input').type(fakeTag);
}

function maxCharacterVerification() {
    cy.contains('.error > .response', 'Excerpt cannot be longer than 300 characters.').should('be.visible');
    cy.wait(1000);
}

