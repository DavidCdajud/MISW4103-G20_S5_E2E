const dataMocka = require('../../fixtures/e16_e20-data.json');

let varTitle = new String();
let varDescription = new String();
let varBody = new String();
let varTag = new String();
let varNum = new Number();

varTitle = dataMocka[getRandomArbitrary(1, 50)].dimTitle;
varDescription = dataMocka[getRandomArbitrary(1, 50)].dimDescription;
varBody = dataMocka[getRandomArbitrary(1, 50)].dimBody;
varTag = dataMocka[getRandomArbitrary(1, 50)].dimTag;
varNum = dataMocka[getRandomArbitrary(1, 50)].dimNum;

describe('Metacard creation', function () {
    it('Customize structured data of your site for Metacard', function () {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.viewport(1900, 1500)
        cy.visit('http://localhost:2368/ghost/');
        inciarSesion();
        cy.wait(2000);
        settingsMetaCard();
    })
})

function inciarSesion() {
    cy.get('#identification').type('pruebas@correo.com');
    cy.wait(1000);
    cy.get('#password').type('abcde12345');
    cy.wait(1000);
    cy.get('#ember5').click();

}

function settingsMetaCard() {
    cy.get('[data-test-nav="settings"]').click();
    cy.wait(1000);
    cy.contains('General').click();
    cy.wait(1000);
    cy.get('button.gh-btn[data-test-toggle-meta]').click();
    cy.wait(1000);
    cy.screenshot('/v5.68/caso19_1_dinamico/Pre-MetaCard');
    cy.get('input[placeholder="Pruebas automatizadas"]').type(varTitle);
    cy.wait(1000);
    cy.get('#metaDescription').type(varBody);
    cy.wait(1000);
    cy.screenshot('/v5.68/caso19_1_dinamico/Post-MetaCard');
    cy.contains("Save").click();
    cy.wait(2000);
    cy.screenshot('/v5.68/caso19_1_dinamico/Saved-MetaCard');
}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}