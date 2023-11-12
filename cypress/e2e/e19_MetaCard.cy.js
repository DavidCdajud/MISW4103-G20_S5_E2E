describe('X Card', function () {
    it('Customize structured data of your site for X', function () {
        cy.viewport(1900, 1500)
        cy.visit('http://localhost:2368/ghost/');
        inciarSesion();
        cy.wait(2000);
        settingsMetaCard();
    })
})

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
    cy.get('div.flex.flex-col input[type="text"][placeholder="Search"]').click().type('meta');
    cy.wait(1000);
    cy.get('[data-testid="metadata"]').contains('Edit').click();
    cy.wait(1000);
    cy.screenshot('/caso19/Pre-MetaCard');
    cy.get('input[placeholder="Pruebas automatizadas"]').type('My first E2E Card');
    cy.wait(1000);
    cy.get('input[placeholder="Thoughts, stories and ideas."]').type('lorem ipsum dolor sit amet');
    cy.wait(1000);
    cy.screenshot('/caso19/Post-MetaCard');
    cy.get('[data-testid="metadata"]').contains('Save').click();
    cy.wait(2000);
    cy.screenshot('/caso19/Saved-MetaCard');
}
