describe('editar miembro negativo', function () {
  it('editar miembro negativo', function () {
    cy.viewport(1900, 1500)
    cy.visit('http://localhost:2368/ghost/');
    inciarSesion();
    cy.screenshot('/v5.68/caso9/1admin.png');
    cy.wait(2000);
    ingresarMiembros();
    validarMiembroNoCreado();

  })
})

function inciarSesion() {
  cy.get('#identification').type('pruebas@correo.com');
  cy.wait(1000);
  cy.get('#password').type('abcde12345');
  cy.wait(1000);
  cy.screenshot('/v5.68/caso9/2homepage.png');
  cy.get('#ember5').click();
}

function ingresarMiembros() {
  cy.contains('a', 'Members').click();
  cy.wait(1000);
  cy.get('a.gh-list-data').contains('Erik').click();
  cy.wait(1000);
  cy.screenshot('/v5.68/caso9/3editMember.png');
  
  cy.get('#member-name').clear();
  cy.get('#member-note').clear();
  cy.get('#member-email').clear();
  cy.get('#member-name').type("Erik Negativo");
  cy.get('#member-email').type("34325qwe");
  cy.get('#member-note').type("Esto es una prueba de editar miembro de manera negativa");
  cy.contains('button', 'Save').click();
  cy.wait(1000);
  cy.screenshot('/v5.68/caso9/4invalidEmailValidate.png');
  cy.contains('p.response', 'Invalid Email.').should('be.visible');
  cy.wait(1000);
}

function validarMiembroNoCreado() {
  cy.contains('a', 'Members').click();
  cy.screenshot('/v5.68/caso9/5volverMembers.png');
  cy.wait(1000);

  cy.contains('button', 'Leave').click();
  cy.wait(2000);
  cy.get('a.gh-list-data').contains('Erik').should('be.visible');
  cy.screenshot('/v5.68/caso9/6ValidarNoEditado.png');
}
