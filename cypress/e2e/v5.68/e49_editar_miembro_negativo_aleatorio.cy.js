const faker = require('faker');
const fakeName = faker.name.findName();
const fakeEmail = faker.address.country();
const fakeNote = faker.lorem.sentence();
describe('editar miembro negativo', function () {
  it('editar miembro negativo', function () {
    cy.viewport(1900, 1500)
    cy.visit('http://localhost:2368/ghost/');
    inciarSesion();
    cy.screenshot('/v5.68/caso49/1admin.png');
    cy.wait(2000);
    ingresarMiembros();
    validarMiembroNoEditado();
  })
})

function inciarSesion() {
  cy.get('#identification').type('pruebas@correo.com');
  cy.wait(1000);
  cy.get('#password').type('abcde12345');
  cy.wait(1000);
  cy.screenshot('/v5.68/caso49/2homepage.png');
  cy.get('#ember5').click();
}

function ingresarMiembros() {
  cy.contains('a', 'Members').click();
  cy.wait(1000);
  cy.get('a.gh-list-data').contains('Erik').click();
  cy.wait(1000);
  cy.screenshot('/v5.68/caso49/3editMember.png');
  


  cy.get('#member-name').clear();
  cy.get('#member-note').clear();
  cy.get('#member-email').clear();
  cy.get('#member-name').type(fakeName);
  cy.get('#member-email').type(fakeEmail);
  cy.get('#member-note').type(fakeNote);
  cy.contains('button', 'Save').click();
  cy.wait(1000);
  cy.screenshot('/v5.68/caso49/4invalidEmailValidate.png');
  cy.contains('p.response', 'Invalid Email.').should('be.visible');
  cy.wait(1000);
}

function validarMiembroNoEditado() {
  cy.contains('a', 'Members').click();
  cy.screenshot('/v5.68/caso49/5volverMembers.png');
  cy.wait(1000);

  cy.contains('button', 'Leave').click();
  cy.wait(2000);
 
  cy.get('a.gh-list-data').contains(fakeName).should('not.exist'); // Validar con el nombre generado por Faker
  cy.screenshot('/v5.68/caso49/6ValidarNoEditado.png');
}