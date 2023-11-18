import 'cypress-file-upload';

describe('X Card', function () {
    it('Customize structured data of your site for X', function () {
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
    cy.get('div.flex.flex-col input[type="text"][placeholder="Search"]').click().type('X');
    cy.wait(1000);
    cy.get('[data-testid="twitter"]').contains('Edit').click();
    cy.wait(1000);
    cy.screenshot('/v5.68/caso18/Pre-XCard');
    cy.get('label[for="twitter-image"] input[type="file"]').attachFile('descarga.png');
    cy.wait(1000);
    cy.get('input[placeholder="Pruebas automatizadas"]').type('My first E2E Card');
    cy.wait(1000);
    cy.get('input[placeholder="Thoughts, stories and ideas."]').type('lorem ipsum dolor sit amet');
    cy.wait(1000);
    cy.screenshot('/v5.68/caso18/Post-XCard');
    cy.get('[data-testid="twitter"]').contains('Save').click();
    cy.wait(2000);
    cy.screenshot('/v5.68/caso18/Saved XCard');
}



