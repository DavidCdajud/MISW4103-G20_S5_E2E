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
  cy.get('#identification').type('pruebas@correo.com');
  cy.wait(1000);
  cy.get('#password').type('abcde12345');
  cy.wait(1000);
  cy.get('#ember5').click();

}

function settingsTimeZone() {
  cy.screenshot('/v5.68/caso17/Settings TimeZone');
  cy.get('[data-test-nav="settings"]').click();
  cy.wait(1000);
  cy.contains('General').click();
  cy.get('button.gh-btn[data-test-toggle-timezone]').click();
  cy.wait(2000);
  cy.screenshot('/v5.68/caso17/Pre-TimeZone');
  cy.get('#timezone').select('(GMT -5:00) Bogota, Lima, Quito');
  cy.screenshot('/v5.68/caso17/Post-TimeZone');
  cy.contains("Save").click();
  cy.screenshot('/v5.68/caso17/SavedSettings')
}

