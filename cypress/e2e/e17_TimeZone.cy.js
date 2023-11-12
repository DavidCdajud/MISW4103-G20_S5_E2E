describe('Settings - Time Zone', function () {
  it('Como dificata UTC', function () {
    cy.viewport(1900, 1500)
    cy.visit('http://localhost:2368/ghost/');
    inciarSesion();
    cy.wait(2000);
    settingsTimeZone();
  })
})

function inciarSesion() {
  cy.get('#identification').type('d.caycedod@uniandes.edu.co');
  cy.wait(1000);
  cy.get('#password').type('1032481969');
  cy.wait(1000);
  cy.get('#ember5').click();

}

function settingsTimeZone() {
  cy.get('[data-test-nav="settings"]').click();
  cy.wait(1000);
  cy.get('div.flex.flex-col input[type="text"][placeholder="Search"]').click().type('timeZone');
  cy.wait(1000);
  cy.get('[data-testid="timezone"]').contains('Edit').click();
  cy.wait(2000);
  cy.screenshot('/caso17/Pre-TimeZone');
  cy.get('.css-n9qnu9').type('Bogota').first();
  cy.get('[data-testid="select-option"]').click();
  cy.get('[data-testid="timezone"]').contains('Save').click();
  cy.wait(2000);
  cy.screenshot('/caso17/Post-TimeZone');
}

