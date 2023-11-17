describe('Gestionar contenido', function() {
  it('Exportar, eliminar e importar contenido de ghost', function() {
      cy.visit('http://localhost:2368/ghost/');
      iniciarSesion(Cypress.env('OldPass'));
      cy.wait(2000);
      ingresarSettingsLabs();
      exportContent();
      deleteContent();
      validarDelete();
      importarContent();
      validarImportar()
  })
})

function iniciarSesion(pass){
  cy.get('#identification').type('pruebas@correo.com');
  cy.wait(1000);
  cy.get('#password').type(pass);
  cy.wait(1000);
  cy.screenshot('/v5.68/caso2/1-inicioSesion');
  cy.get('#ember5').click();
}

function ingresarSettingsLabs(){
  cy.get('#ember34').click();
  cy.wait(1000);
  cy.screenshot('/v5.68/caso2/2-settings');
  cy.contains('a', 'Labs').click();
  cy.wait(2000);
  cy.screenshot('/v5.68/caso2/3-labs');
}

function exportContent(){
  cy.contains('span', 'Export').click();
  cy.wait(2000);
} 

function deleteContent(){
  cy.contains('span', 'Delete').click();
  cy.wait(2000);
  cy.screenshot('/v5.68/caso2/4-export-content');
  cy.get('.modal-content').contains('span', 'Delete').click();
  cy.wait(2000);
} 

function validarDelete(){
  cy.get('.gh-alert.gh-alert-green').should('be.visible');
  cy.screenshot('/v5.68/caso2/5-delete-confirmation');
}

function importarContent(){
  cy.contains('a','Open Importer').click();
  cy.screenshot('/v5.68/caso2/6-delete-confirmation');
  cy.contains('label', 'Select or drop a JSON or zip file').selectFile('cypress/fixtures/import_content.json');
  cy.wait(1000);
}

function validarImportar(){
  cy.contains('span', 'Got it').should('be.visible');
  cy.screenshot('/v5.68/caso2/7-import-successful');
}

