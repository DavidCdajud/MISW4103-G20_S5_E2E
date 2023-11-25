import faker from 'faker';
import 'cypress-file-upload';

describe('X Card', function () {
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

const fakeImage = faker.image.imageUrl();
const fakeTitle = faker.lorem.words();
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
    cy.screenshot('/v5.68/caso18_1_aleatorio/Pre-XCard');
    cy.contains("Add Twitter image").attachFile('descarga.png');
    cy.wait(1000);
    cy.get('input[placeholder="Pruebas automatizadas"]').type(fakeTitle);
    cy.wait(1000);
    cy.get("#twitterDescription").type(fakeDescription);
    cy.wait(1000);
    cy.screenshot('/v5.68/caso18_1_aleatorio/Post-XCard');
    cy.contains("Save").click();
    cy.wait(2000);
    cy.screenshot('/v5.68/caso18_1_aleatorio/Saved XCard');
}



