describe('Settings - Time Zone', function () {
  it('Como dificata UTC', function () {
    cy.viewport(1900, 1500)
    cy.visit('http://localhost:3001/ghost');
    inciarSesion();
    cy.wait(2000);
    settingsTimeZone();
  })
})

function inciarSesion() {
  cy.get("#ember8").type('pruebas@correo.com');
  cy.wait(1000);
  cy.get("#ember10").type('abcde12345');
  cy.wait(1000);
  cy.get('#ember12 > span').click();

}

function settingsTimeZone() {
  cy.screenshot('/v3.42/caso17/Settings TimeZone');
  cy.contains("General").click();
  cy.wait(1000);
  cy.get('.gh-setting > .gh-setting-action > .gh-btn > span').click();
  cy.wait(2000);
  cy.screenshot('/v3.42/caso17/Pre-TimeZone');
  cy.get('#timezone').select('(GMT -5:00) Bogota, Lima, Quito');
  cy.screenshot('/v3.42/caso17/Post-TimeZone');
  cy.contains("Save settings").click();
  cy.screenshot('/v3.42/caso17/SavedSettings')

}

