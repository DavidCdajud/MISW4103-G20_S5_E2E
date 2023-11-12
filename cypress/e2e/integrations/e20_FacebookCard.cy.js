import 'cypress-file-upload';


describe('Facebook Card', function () {
    it('Customize structured data of your site for Facebook', function () {
        cy.viewport(1900, 1500)
        cy.visit('http://localhost:2368/ghost/');
        inciarSesion();
        cy.wait(2000);
        settingsFbCard();
    })
})

function inciarSesion() {
    cy.get('#identification').type('d.caycedod@uniandes.edu.co');
    cy.wait(1000);
    cy.get('#password').type('1032481969');
    cy.wait(1000);
    cy.get('#ember5').click();

}

function settingsFbCard() {
    cy.get('[data-test-nav="settings"]').click();
    cy.wait(1000);
    cy.get('div.flex.flex-col input[type="text"][placeholder="Search"]').click().type('Facebook');
    cy.wait(1000);
    cy.get('[data-testid="facebook"]').contains('Edit').click();
    cy.wait(1000);
    cy.screenshot('/caso20/Pre-FacebookCard');
    cy.get('label[for="facebook-image"] input[type="file"]').attachFile('descarga.png');
    cy.wait(1000);
    cy.get('input[placeholder="Pruebas automatizadas"]').type('My first E2E Card');
    cy.wait(1000);
    cy.get('input[placeholder="Thoughts, stories and ideas."]').type('lorem ipsum dolor sit amet');
    cy.wait(1000);
    cy.screenshot('/caso20/Post-FacebookCard');
    cy.get('[data-testid="facebook"]').contains('Save').click();
    cy.wait(2000);
    cy.screenshot('/caso20/Saved-FacebookCard');
}
