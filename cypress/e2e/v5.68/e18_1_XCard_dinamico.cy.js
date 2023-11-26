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



import 'cypress-file-upload';

describe('X Card creation', function () {
    it('Customize structured data of your site for X', function () {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.viewport(1900, 1500)
        cy.visit('http://localhost:2368/ghost/');
        inciarSesion();
        cy.wait(2000);
        settingsXCard();
    })
})

function inciarSesion() {
    cy.get('#identification').type('pruebas@correo.com');
    cy.wait(1000);
    cy.get('#password').type('abcde12345');
    cy.wait(1000);
    cy.get('#ember5').click();

}

function settingsXCard() {
    cy.get('[data-test-nav="settings"]').click();
    cy.wait(1000);
    cy.contains('General').click();
    cy.wait(1000);
    cy.get('button.gh-btn[data-test-toggle-twitter]').click();
    cy.wait(1000);
    cy.screenshot('/v5.68/caso18_1_dinamico/Pre-XCard');
    cy.wait(1000);
    cy.get('input[placeholder="Pruebas automatizadas"]').type(varTitle);
    cy.wait(1000);
    cy.get("#twitterDescription").type(varBody);
    cy.wait(1000);
    cy.screenshot('/v5.68/caso18_1_dinamico/Post-XCard');
    cy.contains("Save").click();
    cy.wait(2000);
    cy.screenshot('/v5.68/caso18_1_dinamico/Saved XCard');
}



function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}