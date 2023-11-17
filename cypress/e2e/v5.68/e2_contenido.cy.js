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
  })
})

function iniciarSesion(pass){
  cy.get('#identification').type('pruebas@correo.com');
  cy.wait(1000);
  cy.get('#password').type(pass);
  cy.wait(1000);
  cy.screenshot('/caso2/2homepage.png');
  cy.get('#ember5').click();
}

function ingresarSettingsLabs(){
  cy.get('#ember34').click();
  cy.wait(1000);
  cy.screenshot('/caso2/3setting.png');
  cy.contains('a', 'Labs').click();
  cy.wait(2000);
  cy.screenshot('/caso2/4labs.png');
}

function exportContent(){
  cy.contains('span', 'Export').click();
  cy.wait(2000);
  cy.screenshot('/caso2/5export.png');
} 

function deleteContent(){
  cy.contains('span', 'Delete').click();
  cy.wait(2000);
  cy.screenshot('/caso2/6delete.png');
  cy.get('.modal-content').contains('span', 'Delete').click();
  cy.wait(2000);
} 

function validarDelete(){
  cy.get('.gh-alert.gh-alert-green').should('be.visible');
  cy.screenshot('/caso1/7successfuldelete.png');
}

function importarContent(){
  cy.contains('a','Open Importer').click();
  cy.screenshot('/caso1/8import.png');
  cy.contains('label', 'Select or drop a JSON or zip file').selectFile('cypress/fixtures/import_content.json');
  cy.wait(1000);
  cy.screenshot('/caso1/9cargaArchivo.png');
}

function validarImportar(){
  cy.contains('span', 'Got it').should('be.visible');
}

