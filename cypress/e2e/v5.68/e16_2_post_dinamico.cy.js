const dataMocka = require('../../fixtures/e16_e20-data.json');

let varTitle = new String();
let varDescription = new String();
let varBody = new String();
let varTag = new String();
let varNum = new Number();
let varLongDescription = new String();

varTitle = dataMocka[getRandomArbitrary(1, 10)].dimTitle;
varDescription = dataMocka[getRandomArbitrary(1, 50)].dimDescription;
varBody = dataMocka[getRandomArbitrary(1, 50)].dimBody;
varTag = dataMocka[getRandomArbitrary(1, 50)].dimTag;
varNum = dataMocka[getRandomArbitrary(1, 50)].dimNum;
varLongDescription = dataMocka[getRandomArbitrary(1, 50)].dimLongDescription;

describe('Post ', function () {
    it('Nuevo Post - Excerpt mayor a 300 caracteres', function () {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.viewport(1900, 1500)
        cy.visit('http://localhost:2368/ghost/');
        inciarSesion();
        cy.wait(2000);
        navegarNewPost();
        cy.wait(2000);
        cy.screenshot('/caso16_2_dinamico/Navegar');
        rellenarPost();
        openSettings();
        fillSettingPost();
        cy.screenshot('/caso16_2_dinamico/finalpublish');
        maxCharacterVerification();
    })
})

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
    cy.get('[placeholder = "Post title"').type(varTitle);
    cy.wait(1000);
    cy.get('p').type(varDescription);

}

function openSettings() {
    cy.get('.settings-menu-toggle > span').click();

}

function fillSettingPost() {
    cy.get('#custom-excerpt').type(varLongDescription);
    cy.wait(1000);
    cy.get('#tag-input')
}

function maxCharacterVerification() {
    cy.contains('.error > .response', 'Excerpt cannot be longer than 300 characters.').should('be.visible');
    cy.wait(1000);
}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}