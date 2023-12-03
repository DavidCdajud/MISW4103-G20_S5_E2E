describe('barra de busqueda', function() {
    it('barra de busqueda', function() {
        cy.visit('http://localhost:2368/ghost/');
        inciarSesion();
        cy.screenshot('/v5.68/caso10/1admin.png');
        cy.wait(2000);
        abrirBusqueda();
        
        
    })
  })

  function inciarSesion(){
    cy.get('#identification').type('pruebas@correo.com');
    cy.wait(1000);
    cy.get('#password').type('abcde12345');
    cy.wait(1000);
    cy.screenshot('/v5.68/caso10/2homepage.png');
    cy.get('#ember5').click();
  }

  function abrirBusqueda(){
    cy.get('button.gh-nav-btn-search').click();
    cy.wait(1000);
    cy.get('input.gh-input-with-select-input').type('Coming soon');
    cy.screenshot('/v5.68/caso10/3busqueda.png');
    cy.wait(5000);
    cy.get('li.ember-power-select-option').click();
    cy.wait(1000);
    cy.contains('span[data-test-task-button-state="idle"]', 'Update').should('be.visible');
    cy.screenshot('/v5.68/caso10/4Validador.png');
  }
