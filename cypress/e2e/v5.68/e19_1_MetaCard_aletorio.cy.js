import faker from "faker";

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

const fakeTitle = faker.lorem.words();
const fakeBody = faker.lorem.words();

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
    cy.screenshot('/v5.68/caso19_1_aleatorio/Pre-MetaCard');
    cy.get('input[placeholder="Pruebas automatizadas"]').type(fakeTitle);
    cy.wait(1000);
    cy.get('#metaDescription').type(fakeBody);
    cy.wait(1000);
    cy.screenshot('/v5.68/caso19_1_aleatorio/Post-MetaCard');
    cy.contains("Save").click();
    cy.wait(2000);
    cy.screenshot('/v5.68/caso19_1_aleatorio/Saved-MetaCard');
}
