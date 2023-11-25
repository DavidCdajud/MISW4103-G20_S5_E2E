describe('Perfil', function() {
    it('Modificar y validar acciones de mi perfil de ghost', function() {
        cy.viewport(1900, 1500);
        cy.visit('http://localhost:2368/ghost/');
        inciarSesion();
        cy.screenshot('/v5.68/caso91/1admin.png');
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
    cy.screenshot('/v5.68/caso91/2homepage.png');
    cy.get('#ember5').click();
  }
  
  function ingresarPerfil(){
    cy.get('.gh-user-avatar').click();
    cy.wait(1000);
    cy.contains('a', 'Your profile').click();
    cy.wait(3000);
    cy.screenshot('/v5.68/caso91/3profile.png');
  }
  
  function editarPerfil(){
    cy.screenshot('/v5.68/caso91/4datos.png');
    cy.get('#user-name').clear();
    cy.get('#user-name').type("Erik editado");
    cy.get('#user-slug').clear();
    cy.get('#user-slug').type("slugeditado");
    cy.get('#user-email').clear();
    cy.get('#user-email').type("$#%$#23");
    cy.get('#user-location').clear();
    cy.get('#user-location').type("colombia editado");
    cy.screenshot('/v5.68/caso91/5datosEditados.png');
    cy.wait(2000);
    cy.contains('span', 'Save').click();
    cy.wait(1000);
    cy.contains('p', 'Please supply a valid email address').should("be.visible");
    cy.contains('a', 'Staff').click();
    cy.wait(1000);
    cy.contains('button','Leave').click();
    cy.wait(1000);
    cy.contains('h3','Erik editado').should('not.exist');
    cy.screenshot('/v5.68/caso91/6perfilNoEditado.png');
  }