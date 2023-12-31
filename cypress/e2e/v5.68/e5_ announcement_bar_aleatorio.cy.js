const faker = require('faker');
const word = faker.lorem.word();
describe('Gestionar code injection', function() {
  it('Agregar y verificar code injection de ghost', function() {
      cy.visit('http://localhost:2368/ghost/');
      iniciarSesion(Cypress.env('OldPass'));
      cy.wait(2000);
      ingresarSettingsAnnouncement();
      writeText();
      cy.visit('http://localhost:2368/');
      validarAnnouncementBar();
      limpiarAnnouncementBar();
  })
})

function iniciarSesion(pass){
  cy.get('#identification').type('pruebas@correo.com');
  cy.wait(1000);
  cy.get('#password').type(pass);
  cy.wait(1000);
  cy.screenshot('/v5.68/caso5/aleatorio/1-inicioSesion');
  cy.get('#ember5').click();
}

function ingresarSettingsAnnouncement(){
  cy.get('#ember34').click();
  cy.wait(1000);
  cy.screenshot('/v5.68/caso5/aleatorio/2-setting');
  cy.contains('a', 'Announcement bar').click();
}

function writeText(){
  cy.get("p[data-koenig-dnd-droppable='true']").type(word);
  cy.wait(2000);
  cy.screenshot('/v5.68/caso5/aleatorio/3-write');
  cy.wait(2000);
  cy.contains('span','Save').click();
} 

function validarAnnouncementBar(){
  cy.contains('span', 'TestAnnouncement').should('be.visible');
  cy.wait(2000);
  cy.screenshot('/v5.68/caso5/aleatorio/4-validate');
}

function limpiarAnnouncementBar(){
  cy.visit('http://localhost:2368/ghost/');
  cy.get('#ember24').click();
  cy.contains('a', 'Announcement bar').click();
  cy.get("p[data-koenig-dnd-droppable='true']").click().type('{selectAll}{del}');
  cy.contains('span','Save').click();
  cy.wait(2000);
  cy.visit('http://localhost:2368/ghost/');
}
