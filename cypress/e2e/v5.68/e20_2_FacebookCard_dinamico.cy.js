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

describe('Facebook Card - max character title', function () {
    it('Customize structured data of your site for Facebook', function () {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.viewport(1900, 1500)
        cy.visit('http://localhost:2368/ghost/');
        inciarSesion();
        cy.wait(2000);
        settingsFbCard();
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

function settingsFbCard() {
    cy.get('[data-test-nav="settings"]').click();
    cy.wait(1000);
    cy.contains('General').click();
    cy.wait(1000);
    cy.get('button.gh-btn[data-test-toggle-facebook]').click();
    cy.wait(1000);
    cy.screenshot('/caso20_2_dinamico/Pre-FacebookCard');
    cy.wait(1000);
    cy.get('input[placeholder="Pruebas automatizadas"]').type(varLongDescription);
    cy.wait(1000);
    cy.get('#ogDescription').type(varTitle);
    cy.wait(1000);
    cy.screenshot('/v5.68/caso20_2_dinamico/Post1-FacebookCard');
    cy.get('body').type('{ctrl}s');
    cy.on('uncaught:exception', (err, runnable) => {
        console.error('Error no manejado:', err.message);
        return false;
    });
    cy.screenshot('/v5.68/caso20_2_dinamico/Post-FacebookCard');
}


function maxCharacterTitle() {
    cy.contains('.gh-alert-content', "ValidationError: Value in [settings.og_title] exceeds maximum length of 300 characters.").should('be.visible');
    cy.wait(1000);
}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}