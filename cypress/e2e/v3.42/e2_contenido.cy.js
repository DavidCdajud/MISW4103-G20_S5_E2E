describe('Gestionar contenido', function() {
  it('Exportar, eliminar e importar contenido de ghost', function() {
      cy.visit('http://localhost:3001/ghost/');
      iniciarSesion();
      ingresarLabs();
      exportContent();
      deleteContent();
      validarDelete();
      importarContent();
      validarImportar();
  })
})

function iniciarSesion(){
  cy.get("#ember8").type('pruebas@correo.com');
  cy.wait(1000);
  cy.get("#ember10").type('abcde12345');
  cy.wait(1000);
  cy.screenshot('/v3.42/caso2/1-inicioSesion.png');
  cy.get('#ember12 > span').click();
}

function ingresarLabs(){
  cy.wait(2000);
  cy.screenshot('/v3.42/caso2/2-dashboard.png');
  cy.contains('a', 'Labs').click();
  cy.wait(2000);
  cy.screenshot('/v3.42/caso2/3-labs.png');
}

function exportContent(){
  cy.contains('span', 'Export').click();
} 

function deleteContent(){
  cy.contains('span', 'Delete').click();
  cy.wait(2000);
  cy.screenshot('/v3.42/caso2/4-delete-modal.png');
  cy.get('.modal-content').contains('span', 'Delete').click();
} 

function validarDelete(){
  cy.get('.gh-alert.gh-alert-green').should('be.visible');
  cy.screenshot('/v3.42/caso2/5-delete-confirmation.png');
}

function importarContent(){
  cy.get("input[name='importfile']").selectFile('cypress/fixtures/import_content.json');
  cy.wait(2000);
  cy.screenshot('/v3.42/caso2/6-import-file1.png');
  cy.contains('span', 'Import').click();
  cy.wait(2000);

}

function validarImportar(){
  cy.contains('span', 'Import successful').should('be.visible');
  cy.wait(2000);
  cy.screenshot('/v3.42/caso2/7-import-successful.png');
}

