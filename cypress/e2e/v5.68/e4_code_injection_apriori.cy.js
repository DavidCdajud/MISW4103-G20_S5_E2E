const word1 = "$#%#$$@#$@!!*(&";
const word2 = "><#!$!!æ‘@!#";
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
  cy.screenshot('/v5.68/caso4/apriori/1-inicioSesion');
  cy.get('#ember5').click();
}

function ingresarSettingsCodeInjection(){
  cy.get('#ember34').click();
  cy.wait(1000);
  cy.screenshot('/v5.68/caso4/apriori/2-setting');
  cy.contains('a', 'Code injection').click();
}

function writeText(){
  cy.get("#ghost-head").type(word1);
  cy.get("#ghost-foot").type(word2);
  cy.wait(2000);
  cy.screenshot('/v5.68/caso4/apriori/3-write');
  cy.contains('span','Save').click();
} 

function validarHeaderFooter(){
  cy.contains('body', word1).should('be.visible');
  cy.contains('body', word2).should('be.visible');
  cy.wait(2000);
  cy.screenshot('/v5.68/caso4/apriori/4-validate');
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