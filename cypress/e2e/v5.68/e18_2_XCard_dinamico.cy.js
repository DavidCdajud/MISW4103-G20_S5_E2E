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


describe('X Card - max character title', function () {
    it('Customize structured data of your site for X', function () {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.viewport(1900, 1500)
        cy.visit('http://localhost:2368/ghost/');
        inciarSesion();
        cy.wait(2000);
        settingsXCard();
        maxCharacterTitle()
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
    cy.screenshot('/v5.68/caso18_2_dinamico/Pre-XCard');
    cy.wait(1000);
    cy.get('input[placeholder="Pruebas automatizadas"]').type(varLongDescription);
    cy.wait(1000);
    cy.get("#twitterDescription").type(varBody);
    cy.wait(1000);
    cy.screenshot('/v5.68/caso18_2_dinamico/Post-XCard');
    cy.get('body').type('{ctrl}s');
    cy.on('uncaught:exception', (err, runnable) => {
        console.error('Error no manejado:', err.message);
        return false;
    });
}

function maxCharacterTitle() {

    cy.contains('.gh-alert-content', "Validation error, cannot edit setting. ValidationError: Value in [settings.twitter_title] exceeds maximum length of 300 characters.").should('be.visible');
    cy.wait(1000);
}



function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}