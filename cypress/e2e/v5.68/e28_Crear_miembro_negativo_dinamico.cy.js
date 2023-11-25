const dataMocka = require('../../fixtures/auto.json');

let fakeEmail = new String();
let fakeName = new String();
let fakeSlug = new String();
let fakeLocation = new String();
let fakeText = new String();
let fakeRandom = new String();

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log(dataMocka);

fakeEmail = dataMocka[getRandomArbitrary(1, 50)].email;
fakeName = dataMocka[getRandomArbitrary(1, 50)].name;
fakeSlug = dataMocka[getRandomArbitrary(1, 50)].slug;
fakeLocation = dataMocka[getRandomArbitrary(1, 50)].location;
fakeText = dataMocka[getRandomArbitrary(1, 50)].text;
fakeRandom = dataMocka[getRandomArbitrary(1, 50)].random;

describe('crear miembro negativo', function() {
  it('crear miembro negativo', function() {
    cy.viewport(1900, 1500);
    cy.visit('http://localhost:2368/ghost/');
    inciarSesion();
    cy.screenshot('/v5.68/caso28/1admin.png');
    cy.wait(2000);
    ingresarMiembros();
    validarMiembroNoCreado();
  });
});

function inciarSesion() {
  cy.get('#identification').type('pruebas@correo.com');
  cy.wait(1000);
  cy.get('#password').type('abcde12345');
  cy.wait(1000);
  cy.screenshot('/v5.68/caso28/2homepage.png');
  cy.get('#ember5').click();
}

function ingresarMiembros() {
  cy.contains('a', 'Members').click();
  cy.wait(1000);
  cy.contains('a', 'New member').click();
  cy.wait(1000);
  cy.screenshot('/v5.68/caso28/3newMember.png');
  cy.get('#member-name').click();
  cy.get('#member-name').type(fakeName); 
  cy.get('#member-email').click();
  cy.get('#member-email').type(fakeRandom); 
  cy.get('#member-note').click();
  cy.get('#member-note').type(fakeText);
  cy.contains('button', 'Save').click();
  cy.wait(1000);
  cy.screenshot('/v5.68/caso28/4invalidEmailValidate.png');
  cy.contains('p.response', 'Invalid Email.').should('be.visible');
  cy.wait(1000);
}

function validarMiembroNoCreado() {
  cy.contains('a', 'Members').click();
  cy.wait(1000);
  
  cy.contains('button', 'Leave').click();
  cy.wait(2000);
  cy.screenshot('/v5.68/caso28/5volverMembers.png');
  cy.get('a.gh-list-data').contains(fakeName).should('not.exist'); // Validar con el nombre generado por Faker
  cy.screenshot('/v5.68/caso28/6validarMiembroNoCreado.png');
}