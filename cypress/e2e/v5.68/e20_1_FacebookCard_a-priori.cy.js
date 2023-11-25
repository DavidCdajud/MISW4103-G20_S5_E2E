import 'cypress-file-upload';


describe('Facebook Card', function () {
    it('Customize structured data of your site for Facebook', function () {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.viewport(1900, 1500)
        cy.visit('http://localhost:2368/ghost/');
        inciarSesion();
        cy.wait(2000);
        settingsFbCard();
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
    cy.screenshot('/caso20_1_apriori/Pre-FacebookCard');
    cy.wait(1000);
    cy.get('input[placeholder="Pruebas automatizadas"]').type('My first E2E Card');
    cy.wait(1000);
    cy.get('#ogDescription').type('lorem ipsum dolor sit amet');
    cy.wait(1000);
    cy.screenshot('/v5.68/caso20_1_apriori/Post-FacebookCard');
    cy.contains("Save").click();
    cy.wait(2000);
    cy.screenshot('/v5.68/caso20_1_apriori/Saved-FacebookCard');
}
