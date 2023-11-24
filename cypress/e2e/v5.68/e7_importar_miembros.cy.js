describe('miembro', function() {
    it('importar miembros', function() {
        cy.visit('http://localhost:2368/ghost/');
        inciarSesion();
        cy.screenshot('/v5.68/caso7/1admin.png');
        cy.wait(2000);
        ingresarMiembros();
        
    })
  })

  function inciarSesion(){
    cy.get('#identification').type('pruebas@correo.com');
    cy.wait(1000);
    cy.get('#password').type('abcde12345');
    cy.wait(1000);
    cy.screenshot('/v5.68/caso7/2homepage.png');
    cy.get('#ember5').click();
  }
  function ingresarMiembros(){
    cy.contains('a', 'Members').click();
    cy.wait(1000);
    cy.get('button.gh-btn[data-test-button="members-actions"]').click();
    cy.screenshot('/v5.68/caso7/3miembros.png');
    cy.contains('span', 'Import members').click();
    cy.wait(1000);
    cy.contains('label', 'Select or drop a CSV file').selectFile('cypress/fixtures/cargar_miembros.csv');
    cy.wait(1000);
    cy.screenshot('/v5.68/caso7/4cargaArchivo.png');
    cy.contains('button', 'Import 1 member').click();
    cy.wait(1000);
    cy.contains('p.ma0.pa0', 'An unexpected error occurred, please try again').should('be.visible');
    cy.screenshot('/v5.68/caso7/5validacionMensajeError.png');
  }
  
  