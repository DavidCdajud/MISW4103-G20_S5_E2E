const dataMocka = require('../../fixtures/e16_e20-data.json');

let varTitle = new String();
let varDescription = new String();
let varBody = new String();
let varTag = new String();
let varNum = new Number();

varTitle = dataMocka[getRandomArbitrary(1, 50)].dimTitle;
varDescription = dataMocka[getRandomArbitrary(1, 50)].dimDescription;
varBody = dataMocka[getRandomArbitrary(1, 50)].dimBody;
varTag = dataMocka[getRandomArbitrary(1, 50)].dimTag;
varNum = dataMocka[getRandomArbitrary(1, 10)].dimNum;


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

function inciarSesion() {
  cy.get('#identification').type('pruebas@correo.com');
  cy.wait(1000);
  cy.get('#password').type('abcde12345');
  cy.wait(1000);
  cy.get('#ember5').click();

}

function settingsTimeZone() {
  cy.screenshot('/v5.68/caso17_1_dinamico/Settings TimeZone');
  cy.get('[data-test-nav="settings"]').click();
  cy.wait(1000);
  cy.contains('General').click();
  cy.get('button.gh-btn[data-test-toggle-timezone]').click();
  cy.wait(2000);
  cy.screenshot('/v5.68/caso17_1_dinamico/Pre-TimeZone');
  cy.get('#timezone').select("(GMT -5:00) Bogota, Lima, Quito");
  cy.screenshot('/v5.68/caso17_1_dinamico/Post-TimeZone');
  cy.contains("Save").click();
  cy.screenshot('/v5.68/caso17_1_dinamico/SavedSettings')
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}