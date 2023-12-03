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
      cy.viewport(1900, 1500);
      cy.visit('http://localhost:2368/ghost/');
      inciarSesion();
      cy.screenshot('/v5.68/caso96/1admin.png');
      cy.wait(2000);
      ingresarPerfil();
      editarPerfil();
    })
  })
  
  function inciarSesion() {
    cy.get('#identification').type('pruebas@correo.com');
    cy.wait(1000);
    cy.get('#password').type('abcde12345');
    cy.wait(1000);
    cy.screenshot('/v5.68/caso95/2homepage.png');
    cy.get('#ember5').click();
  }
  
  function ingresarPerfil() {
    cy.get('.gh-user-avatar').click();
    cy.wait(1000);
    cy.contains('a', 'Your profile').click();
    cy.wait(3000);
    cy.screenshot('/v5.68/caso96/3profile.png');
  }
  
  function editarPerfil() {
    cy.screenshot('/v5.68/caso96/4datos.png');
    
   
  
    cy.get('#user-name').clear();
    cy.get('#user-name').type(fakeName);
    cy.get('#user-slug').clear();
    cy.get('#user-slug').type(fakeSlug);
    cy.get('#user-email').clear();
    cy.get('#user-email').type(fakeEmail);
    cy.get('#user-location').clear();
    cy.get('#user-location').type(fakeLocation);
    cy.get('#user-website').clear();
    cy.get('#user-website').type(fakeLocation);
    cy.screenshot('/v5.68/caso96/5datosEditados.png');
    cy.wait(2000);
    cy.contains('span', 'Save').click();
    cy.wait(1000);
    cy.contains('p', 'Website is not a valid url').should("be.visible");
    cy.contains('a', 'Staff').click();
    cy.wait(1000);
    cy.contains('button', 'Leave').click();
    cy.wait(1000);
    cy.contains('h3', fakeName).should('not.exist');
    cy.screenshot('/v5.68/caso96/6perfilNoEditado.png');
  }
  