describe('barra de busqueda', function() {
    it('barra de busqueda', function() {
        cy.visit('http://localhost:2368/ghost/');
        inciarSesion();
        cy.screenshot('/caso10/1admin.png');
        cy.wait(2000);
        abrirBusqueda();
        
        
    })
  })

  function inciarSesion(){
    cy.get('#ember8').type('pruebas@correo.com');
    cy.wait(1000);
    cy.get('#ember10').type('abcde12345');
    cy.wait(1000);
    cy.screenshot('/v3.42/caso10/2homepage.png');
    cy.get('#ember12').click();
  }

  function abrirBusqueda(){
    cy.get('button.gh-nav-btn-search').click();
    cy.wait(1000);
    cy.get('.gh-nav-search-input input[type="search"]').type('Coming soon');
    cy.screenshot('/v3.42/caso10/3busqueda.png');
    cy.wait(5000);
    cy.get('li.ember-power-select-option').click();
    cy.wait(1000);
    cy.contains('span[data-test-task-button-state="idle"]', 'Update').should('be.visible');
    cy.screenshot('/v3.42/caso10/4Validador.png');
  }
