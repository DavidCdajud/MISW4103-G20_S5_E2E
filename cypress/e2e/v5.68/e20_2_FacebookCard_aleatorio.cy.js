import 'cypress-file-upload';
import faker from 'faker';


describe('Facebook Card', function () {
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

const fakeTitle = faker.lorem.words(100);
const fakeDescription = faker.lorem.words();

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
    cy.screenshot('/caso20_2_aleatorio/Pre-FacebookCard');
    cy.wait(1000);
    cy.get('input[placeholder="Pruebas automatizadas"]').type(fakeTitle);
    cy.wait(1000);
    cy.get('#ogDescription').type(fakeDescription);
    cy.wait(1000);
    cy.screenshot('/v5.68/caso20_2_aleatorio/pre1-FacebookCard');
    cy.get('body').type('{ctrl}s');
    cy.on('uncaught:exception', (err, runnable) => {
        console.error('Error no manejado:', err.message);
        return false;
    });
    cy.screenshot('/v5.68/caso20_2_aleatorio/Post-FacebookCard');
}


function maxCharacterTitle() {
    cy.contains('.gh-alert-content', "ValidationError: Value in [settings.og_title] exceeds maximum length of 300 characters.").should('be.visible');
    cy.wait(1000);
}
