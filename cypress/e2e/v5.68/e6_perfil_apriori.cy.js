describe('Perfil', function() {
  it('Modificar y validar acciones de mi perfil de ghost', function() {
      cy.visit('http://localhost:2368/ghost/');
      inciarSesion();
      cy.screenshot('/v5.68/caso6/1admin.png');
      cy.wait(2000);
      ingresarPerfil();
      editarPerfil();
      validarEdicion();
      perfilAnterior();
      validarAnterior();
  })
})

function inciarSesion(){
  cy.get('#identification').type('pruebas@correo.com');
  cy.wait(1000);
  cy.get('#password').type('abcde12345');
  cy.wait(1000);
  cy.screenshot('/v5.68/caso6/2homepage.png');
  cy.get('#ember5').click();
}

function ingresarPerfil(){
  cy.get('.gh-user-avatar').click();
  cy.wait(1000);
  cy.contains('a', 'Your profile').click();
  cy.wait(3000);
  cy.screenshot('/v5.68/caso6/3profile.png');
}

function editarPerfil(){
  cy.screenshot('/v5.68/caso6/4datos.png');
  cy.get('#user-name').click();
  cy.get('#user-name').clear();
  cy.get('#user-name').type("Erik editado");
  cy.get('#user-slug').click();
  cy.get('#user-slug').clear();
  cy.get('#user-slug').type("slugeditado");
  cy.get('#user-location').click();
  cy.get('#user-location').clear();
  cy.get('#user-location').type("colombia editado");
  cy.screenshot('/v5.68/caso6/5datosEditados.png');
  cy.wait(5000);
  cy.contains('span', 'Save').click();
  cy.wait(2000);
  cy.contains('a', 'Staff').click();
}

function validarEdicion(){
  cy.contains('h3', 'Erik editado').should('be.visible');
  cy.screenshot('/v5.68/caso6/6confirmarEdicion.png');
  cy.wait(2000);
}

function perfilAnterior(){
  cy.contains('h3', 'Erik editado').click();
  cy.wait(2000);
  cy.screenshot('/v5.68/caso6/7datosNuevos.png');
  cy.get('#user-name').clear();
  cy.get('#user-name').type("Erik");
  cy.get('#user-slug').clear();
  cy.get('#user-slug').type("slug");
  cy.get('#user-location').clear();
  cy.get('#user-location').type("Colombia");
  cy.screenshot('/v5.68/caso6/8datosAnteriores.png');
  cy.wait(5000);
  cy.contains('span', 'Save').click();
  cy.wait(2000);
  cy.contains('a', 'Staff').click();
}

function validarAnterior(){
  cy.contains('h3', 'Erik').should('be.visible');
  cy.screenshot('/v5.68/caso6/9confirmarDatosAnteriores.png');
  cy.wait(2000);
}


