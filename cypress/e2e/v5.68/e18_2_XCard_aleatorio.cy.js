import faker from 'faker';
import 'cypress-file-upload';

describe('X Card- max character title', function () {
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

const fakeTitle = faker.lorem.words(310);
const fakeDescription = faker.lorem.words();

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
    cy.screenshot('/v5.68/caso18_2_aleatorio/Pre-XCard');
    cy.wait(1000);
    cy.get('input[placeholder="Pruebas automatizadas"]').type(fakeTitle);
    cy.wait(1000);
    cy.get("#twitterDescription").type(fakeDescription);
    cy.wait(1000);
    cy.screenshot('/v5.68/caso18_2_aleatorio/Post-XCard');
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



