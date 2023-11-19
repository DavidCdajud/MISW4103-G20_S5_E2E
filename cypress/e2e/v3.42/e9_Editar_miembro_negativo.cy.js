describe('editar miembro negativo', function() {
    it('editar miembro negativo', function() {
        cy.visit('http://localhost:2368/ghost/');
        inciarSesion();
        cy.screenshot('/v3.42/caso9/1admin.png');
        cy.wait(2000);
        ingresarMiembros();
        validarMiembroNoCreado();
        
    })
  })

  function inciarSesion(){
    cy.get('#ember8').type('pruebas@correo.com');
    cy.wait(1000);
    cy.get('#ember10').type('abcde12345');
    cy.wait(1000);
    cy.screenshot('/v3.42/caso9/2homepage.png');
    cy.get('#ember12').click();
  }

  function ingresarMiembros(){
    cy.get('#ember39').click();
    cy.wait(1000);
    cy.screenshot('/v3.42/caso9/3newMember.png');
    cy.contains('h3.apps-card-app-title', 'Erik').click();
    cy.wait(3000);
    cy.get('#user-name').clear();
    cy.get('#user-email').clear();
    cy.get('#user-bio').clear();
    cy.get('#user-name').type("Erik Negativo");
    cy.get('#user-email').type("34325qwe");
    cy.get('#user-bio').type("Esto es una prueba de crear miembro de manera negativa");
    cy.contains('button', 'Save').click();
    cy.wait(1000);
    cy.get('#user-name').scrollIntoView();
    cy.screenshot('/v3.42/caso9/4invalidEmailValidate.png');
    cy.contains('p.response', 'Please supply a valid email address').should('be.visible');
    cy.wait(1000);
  }

  function validarMiembroNoCreado(){
    cy.contains('a', 'Staff').click();
    cy.wait(1000);
    
    cy.contains('button', 'Leave').click();
    cy.wait(2000);
    cy.screenshot('/v3.42/caso9/5volverMembers.png');
    cy.contains('h3.apps-card-app-title', 'Erik editado').should('not.exist');
    cy.screenshot('/v3.42/caso9/6validarMiembroNoCreado.png');
  }
