const faker = require('faker');
describe('barra de busqueda', function() {
    it('barra de busqueda', function() {
      cy.visit('http://localhost:2368/ghost/');
      inciarSesion();
      cy.screenshot('/v5.68/caso50/1admin.png');
      cy.wait(2000);
      abrirBusqueda();
      validarNoResultsMessage();
    })
  })
  
  function inciarSesion() {
    cy.get('#identification').type('pruebas@correo.com');
    cy.wait(1000);
    cy.get('#password').type('abcde12345');
    cy.wait(1000);
    cy.screenshot('/v5.68/caso50/2homepage.png');
    cy.get('#ember5').click();
  }
  
  function abrirBusqueda() {
    const searchTerm = faker.lorem.word(); 
    cy.get('button.gh-nav-btn-search').click();
    cy.wait(1000);
    cy.get('input.gh-input-with-select-input').type(searchTerm);
    cy.screenshot('/v5.68/caso50/3busqueda.png');
    cy.wait(5000);
  }
  
  function validarNoResultsMessage() {
    cy.get('.ember-power-select-option--no-matches-message').should('be.visible');
    cy.contains('.ember-power-select-option--no-matches-message', 'No results found').should('be.visible');
    cy.screenshot('/v5.68/caso50/5NoResultsMessage.png');
  }