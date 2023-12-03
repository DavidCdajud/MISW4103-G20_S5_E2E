import faker from "faker";

describe('Settings - Time Zone', function () {
  it('Como dificata UTC', function () {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.viewport(1900, 1500)
    cy.visit('http://localhost:2368/ghost/');
    inciarSesion();
    cy.wait(2000);
    settingsTimeZone();
  })
})

const fakeNumber = faker.datatype.number(10);

function inciarSesion() {
  cy.get('#identification').type('pruebas@correo.com');
  cy.wait(1000);
  cy.get('#password').type('abcde12345');
  cy.wait(1000);
  cy.get('#ember5').click();

}

function settingsTimeZone() {
  cy.screenshot('/v5.68/caso17_1_aleatorio/Settings TimeZone');
  cy.get('[data-test-nav="settings"]').click();
  cy.wait(1000);
  cy.contains('General').click();
  cy.get('button.gh-btn[data-test-toggle-timezone]').click();
  cy.wait(2000);
  cy.screenshot('/v5.68/caso17_1_aleatorio/Pre-TimeZone');
  cy.get('#timezone').select(fakeNumber);
  cy.screenshot('/v5.68/caso17_1_aleatorio/Post-TimeZone');
  cy.contains("Save").click();
  cy.screenshot('/v5.68/caso17_1_aleatorio/SavedSettings')
}

