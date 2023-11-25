const faker = require('faker');

describe('crear miembro negativo', function() {
  it('crear miembro negativo', function() {
    cy.viewport(1900, 1500)
    cy.visit('http://localhost:2368/ghost/');
    inciarSesion();
    cy.screenshot('/v5.68/caso104/1admin.png');
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
  cy.screenshot('/v5.68/caso104/2homepage.png');
  cy.get('#ember5').click();
}

function ingresarMiembros(){
  cy.contains('a', 'Members').click();
  cy.wait(1000);
  cy.contains('a', 'New member').click();
  cy.wait(1000);
  cy.screenshot('/v5.68/caso104/3newMember.png');
  cy.get('#member-name').click();
  cy.get('#member-name').type(faker.name.findName());
  cy.get('#member-email').click();
  cy.get('#member-email').type(faker.internet.email());
  cy.get('#member-note').click();
  cy.get('#member-note').type(faker.lorem.sentence());
  cy.get('.ember-power-select-trigger-multiple-input').type(' ');
  cy.contains('li.ember-power-select-option', 'Add " "...').click();
  cy.contains('button', 'Save').click();
  cy.wait(1000);
  cy.screenshot('/v5.68/caso104/4invalidEmailValidate.png');
}

function validarMiembroNoCreado(){
  cy.contains('a', 'Members').click();
  cy.wait(1000);
  cy.contains('button', 'Leave').click();
  cy.wait(2000);
  cy.screenshot('/v5.68/caso104/5volverMembers.png');
  cy.get('a.gh-list-data').contains(faker.name.findName()).should('not.exist');
  cy.screenshot('/v5.68/caso104/6validarMiembroNoCreado.png');
}
