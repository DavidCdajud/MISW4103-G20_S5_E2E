describe('Perfil', function() {
    it('Modificar y validar acciones de mi perfil de ghost', function() {
        cy.viewport(1900, 1500);
        cy.visit('http://localhost:2368/ghost/');
        inciarSesion();
        cy.screenshot('/v5.68/caso97/1admin.png');
        cy.wait(2000);
        ingresarPerfil();
        editarPerfil();
    
    })
  })
  
  function inciarSesion(){
    cy.get('#identification').type('pruebas@correo.com');
    cy.wait(1000);
    cy.get('#password').type('abcde12345');
    cy.wait(1000);
    cy.screenshot('/v5.68/caso97/2homepage.png');
    cy.get('#ember5').click();
  }
  
  function ingresarPerfil(){
    cy.get('.gh-user-avatar').click();
    cy.wait(1000);
    cy.contains('a', 'Your profile').click();
    cy.wait(3000);
    cy.screenshot('/v5.68/caso97/3profile.png');
  }
  
  function editarPerfil(){
    cy.screenshot('/v5.68/caso97/4datos.png');
    cy.get('#user-slug').clear();
    cy.get('#user-slug').type("slugeditado");
    cy.get('#user-location').clear();
    cy.get('#user-location').type("colombia editado");
    cy.get('#user-website').clear();
    cy.get('#user-website').type("www.prubasdegos.com");
    cy.get('#user-facebook').clear();
    cy.get('#user-facebook').type("1231$#%_32");
    cy.screenshot('/v5.68/caso97/5datosEditados.png');
    cy.wait(2000);
    cy.contains('span', 'Save').click();
    cy.wait(1000);
    cy.contains('p', 'Your Username is not a valid Facebook Username').should("be.visible");
    cy.contains('a', 'Staff').click();
    cy.wait(1000);
    cy.contains('button','Leave').click();
    cy.wait(1000);
    cy.contains('h3','Erik editado').should('not.exist');
    cy.screenshot('/v5.68/caso97/6perfilNoEditado.png');
  }