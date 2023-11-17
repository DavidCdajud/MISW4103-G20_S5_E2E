describe('Gestionar code injection', function() {
  it('Agregar y verificar code injection de ghost', function() {
      cy.visit('http://localhost:3001/ghost/');
      iniciarSesion();
      ingresarCodeInjection();
      writeText();
      cy.visit('http://localhost:3001/');
      validarHeaderFooter();
      limpiarHeaderFooter();
  })
})

function iniciarSesion(){
  cy.get("#ember8").type('pruebas@correo.com');
  cy.wait(1000);
  cy.get("#ember10").type('abcde12345');
  cy.wait(1000);
  cy.screenshot('/v3.42/caso4/1-inicioSesion');
  cy.get('#ember12 > span').click();
}

function ingresarCodeInjection(){
  cy.wait(2000);
  cy.screenshot('/v3.42/caso4/2-dashboard');
  cy.contains('a', 'Code injection').click();
  cy.wait(2000);
  cy.screenshot('/v3.42/caso4/3-code-injection');
}

function writeText(){
  cy.get("#ghost-head").type("TestHeader");
  cy.get("#ghost-foot").type("TestFooter");
  cy.wait(2000);
  cy.screenshot('/v3.42/caso4/4-code-injection')
  cy.contains('span','Save').click();
} 

function validarHeaderFooter(){
  cy.contains('body', 'TestHeader').should('be.visible');
  cy.contains('body', 'TestFooter').should('be.visible');
  cy.wait(2000);
  cy.screenshot('/v3.42/caso4/5-validation-code-injection')
}

function limpiarHeaderFooter(){
  cy.visit('http://localhost:3001/ghost/');
  cy.contains('a', 'Code injection').click();
  cy.get("#ghost-head").click().type('{selectAll}{del}');
  cy.wait(2000);
  cy.get("#ghost-foot").click().type('{selectAll}{del}');
  cy.wait(2000);
  cy.contains('span','Save').click();
} 