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

describe('Perfil', function() {
  it('Modificar y validar acciones de mi perfil de ghost', function() {
    cy.visit('http://localhost:2368/ghost/');
    inciarSesion();
    cy.screenshot('/v5.68/caso26/1admin.png');
    cy.wait(2000);
    ingresarPerfil();
    editarPerfil();
    validarEdicion();
    perfilAnterior();
    validarAnterior();
  })
})

function inciarSesion() {
  cy.get('#identification').type('pruebas@correo.com');
  cy.wait(1000);
  cy.get('#password').type('abcde12345');
  cy.wait(1000);
  cy.screenshot('/v5.68/caso26/2homepage.png');
  cy.get('#ember5').click();
}

function ingresarPerfil() {
  cy.get('.gh-user-avatar').click();
  cy.wait(1000);
  cy.contains('a', 'Your profile').click();
  cy.wait(3000);
  cy.screenshot('/v5.68/caso26/3profile.png');
}

function editarPerfil() {
  
  cy.screenshot('/v5.68/caso26/4datos.png');
  cy.get('#user-name').click();
  cy.get('#user-name').clear();
  cy.get('#user-name').type(fakeName);
  cy.get('#user-slug').click();
  cy.get('#user-slug').clear();
  cy.get('#user-slug').type(fakeSlug);
  cy.get('#user-location').click();
  cy.get('#user-location').clear();
  cy.get('#user-location').type(fakeLocation);
  cy.screenshot('/v5.68/caso26/5datosEditados.png');
  cy.wait(5000);
  cy.contains('span', 'Save').click();
  cy.wait(2000);
  cy.contains('a', 'Staff').click();
}

function validarEdicion() {
  
  cy.contains('h3', fakeName).should('be.visible');
  cy.screenshot('/v5.68/caso26/6confirmarEdicion.png');
  cy.wait(2000);
}

function perfilAnterior(){
    cy.contains('h3', fakeName).click();
    cy.wait(2000);
    cy.screenshot('/v5.68/caso26/7datosNuevos.png');
    cy.get('#user-name').clear();
    cy.get('#user-name').type("Erik");
    cy.get('#user-slug').clear();
    cy.get('#user-slug').type("slug");
    cy.get('#user-location').clear();
    cy.get('#user-location').type("Colombia");
    cy.screenshot('/v5.68/caso26/8datosAnteriores.png');
    cy.wait(5000);
    cy.contains('span', 'Save').click();
    cy.wait(2000);
    cy.contains('a', 'Staff').click();
  }
  
  function validarAnterior(){
    cy.contains('h3', 'Erik').should('be.visible');
    cy.screenshot('/v5.68/caso26/9confirmarDatosAnteriores.png');
    cy.wait(2000);
  }
