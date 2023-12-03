const dataMocka = require('../../fixtures/e16_e20-data.json');

let varTitle = new String();
let varDescription = new String();

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

varTitle = dataMocka[getRandomArbitrary(1, 10)].dimTitle;
varDescription = dataMocka[getRandomArbitrary(1, 50)].dimDescription;

describe('Gestionar code injection', function() {
  it('Agregar y verificar code injection de ghost', function() {
     
      cy.visit('http://localhost:2368/ghost/');
      iniciarSesion(Cypress.env('OldPass'));
      cy.wait(2000);
      ingresarSettingsCodeInjection();
      writeText();
      cy.visit('http://localhost:2368/');
      validarHeaderFooter();
      limpiarHeaderFooter();
  })
})

function iniciarSesion(pass){
  cy.get('#identification').type('pruebas@correo.com');
  cy.wait(1000);
  cy.get('#password').type(pass);
  cy.wait(1000);
  cy.screenshot('/v5.68/dinamico/caso4/1-inicioSesion');
  cy.get('#ember5').click();
}

function ingresarSettingsCodeInjection(){
  cy.get('#ember34').click();
  cy.wait(1000);
  cy.screenshot('/v5.68/dinamico/caso4/2-setting');
  cy.contains('a', 'Code injection').click();
}

function writeText(){
  cy.get("#ghost-head").type(varTitle);
  cy.get("#ghost-foot").type(varDescription);
  cy.wait(2000);
  cy.screenshot('/v5.68/dinamico/caso4/3-write');
  cy.contains('span','Save').click();
} 

function validarHeaderFooter(){
  cy.contains('body', varTitle).should('be.visible');
  cy.contains('body', varDescription).should('be.visible');
  cy.wait(2000);
  cy.screenshot('/v5.68/dinamico/caso4/4-validate');
}

function limpiarHeaderFooter(){
  cy.visit('http://localhost:2368/ghost/');
  cy.get('#ember24').click();
  cy.contains('a', 'Code injection').click();
  cy.get("#ghost-head").click().type('{selectAll}{del}');
  cy.wait(2000);
  cy.get("#ghost-foot").click().type('{selectAll}{del}');
  cy.wait(2000);
  cy.contains('span','Save').click();
} 