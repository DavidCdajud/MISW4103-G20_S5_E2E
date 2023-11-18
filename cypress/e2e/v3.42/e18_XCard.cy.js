import 'cypress-file-upload';

describe('X Card', function () {
    it('Como dificata UTC', function () {
        cy.viewport(1900, 1500)
        cy.visit('http://localhost:2368/ghost');
        inciarSesion();
        cy.wait(2000);
        settingsXCard();
    })
})

function inciarSesion() {
    cy.get("#ember8").type('pruebas@correo.com');
    cy.wait(1000);
    cy.get("#ember10").type('abcde12345');
    cy.wait(1000);
    cy.get('#ember12 > span').click();
}

function settingsXCard() {
    cy.contains("General").click();
    cy.wait(1000);
    cy.get(".gh-setting > .flex > .gh-setting-action > .gh-btn > span").click();
    cy.wait(2000);
    cy.get("#twitterTitle").type("My first E2E tweet");
    cy.get("#twitterDescription").type("This is my first body tweet using E2E");
    cy.contains("Add Twitter image").attachFile('descarga.png');
}



