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

describe('Meta Card', function () {
    it('Customize structured data of your site for Meta', function () {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.viewport(1900, 1500)
        cy.visit('http://localhost:2368/ghost/');
        inciarSesion();
        cy.wait(2000);
        settingsMetaCard();
        maxCharacterTitle();
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
    cy.screenshot('/v5.68/caso19_3_dinamico/Pre-MetaCard');
    cy.get('input[placeholder="Pruebas automatizadas"]').type(varTag);
    cy.wait(1000);
    cy.get('#metaDescription').type(varLongDescription);
    cy.get('body').type('{ctrl}s');
    cy.on('uncaught:exception', (err, runnable) => {
        console.error('Error no manejado:', err.message);
        return false;
    });
    cy.screenshot('/v5.68/caso19_3_dinamico/Post-MetaCard');
}

function maxCharacterTitle() {

    cy.contains('.gh-alert-content', "Validation error, cannot edit setting. ValidationError: Value in [settings.meta_description] exceeds maximum length of 500 characters.").should('be.visible');
    cy.wait(1000);
}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}