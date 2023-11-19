describe('crear miembro negativo', function() {
    it('crear miembro negativo', function() {
        cy.visit('http://localhost:2368/ghost/');
        inciarSesion();
        cy.screenshot('/v5.68/caso8/1admin.png');
        cy.wait(2000);
        ingresarMiembros();
        validarMiembroNoCreado();
        
    })
  })

  function inciarSesion(){
    cy.get('#identification').type('pruebas@correo.com');
    cy.wait(1000);
    cy.get('#password').type('abcde12345');
    cy.wait(1000);
    cy.screenshot('/v5.68/caso8/2homepage.png');
    cy.get('#ember5').click();
  }

  function ingresarMiembros(){
    cy.contains('a', 'Members').click();
    cy.wait(1000);
    cy.contains('a', 'New member').click();
    cy.wait(1000);
    cy.screenshot('/v5.68/caso8/3newMember.png');
    cy.get('#member-name').click();
    cy.get('#member-name').type("Erik Negativo");
    cy.get('#member-email').click();
    cy.get('#member-email').type("34325qwe");
    cy.get('#member-note').click();
    cy.get('#member-note').type("Esto es una prueba de crear miembro de manera negativa");
    cy.contains('button', 'Save').click();
    cy.wait(1000);
    cy.screenshot('/v5.68/caso8/4invalidEmailValidate.png');
    cy.contains('p.response', 'Invalid Email.').should('be.visible');
    cy.wait(1000);
  }

  function validarMiembroNoCreado(){
    cy.contains('a', 'Members').click();
    cy.wait(1000);
    
    cy.contains('button', 'Leave').click();
    cy.wait(2000);
    cy.screenshot('/v5.68/caso8/5volverMembers.png');
    cy.get('a.gh-list-data').contains('Erik Negativo').should('not.exist');
    cy.screenshot('/v5.68/caso8/6validarMiembroNoCreado.png');
  }
