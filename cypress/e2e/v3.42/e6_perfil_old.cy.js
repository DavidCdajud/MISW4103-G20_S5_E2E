describe('Perfil', function() {
  it('Modificar y validar acciones de mi perfil de ghost', function() {
      cy.visit('http://localhost:2368/ghost/');
      inciarSesion();
      cy.screenshot('/v3.42/caso6/1admin.png');
      cy.wait(2000);
      ingresarPerfil();
      editarPerfil();
      validarEdicion();
      perfilAnterior();
      validarAnterior();
  })
})

function inciarSesion(){
  cy.get('#ember8').type('pruebas@correo.com');
  cy.wait(1000);
  cy.get('#ember10').type('abcde12345');
  cy.wait(1000);
  cy.screenshot('/v3.42/caso6/2homepage.png');
  cy.get('#ember12').click();
}

function ingresarPerfil(){
  cy.get('#ember39').click();
  cy.wait(1000);
  cy.screenshot('/v3.42/caso6/3profile.png');
  cy.contains('h3.apps-card-app-title', 'Erik').click();
  cy.wait(3000);
  cy.screenshot('/v3.42/caso6/3profile.png');
}

function editarPerfil(){
  cy.screenshot('/v3.42/caso_6/4profile.png');
  
  cy.get('#user-name').clear();
  cy.get('#user-slug').clear();
  cy.get('#user-location').clear();
  cy.wait(1000);
  cy.get('#user-name').scrollIntoView();
  cy.get('#user-name').type("Erik editado");
  cy.get('#user-slug').type("slugeditado");
  cy.get('#user-location').type("colombia editado");
  cy.screenshot('/v3.42/caso6/5datosEditados.png');
  cy.wait(2000);
  cy.contains('span', 'Save').click();
  cy.wait(2000);
  cy.contains('a', 'Staff').click();
}

function validarEdicion(){
  cy.contains('h3', 'Erik editado').should('be.visible');
  cy.screenshot('/v3.42/caso6/6confirmarEdicion.png');
  cy.wait(2000);
}

function perfilAnterior(){
  cy.contains('h3', 'Erik editado').click();
  cy.wait(2000);
  cy.screenshot('/v3.42/caso6/7datosNuevos.png');
  cy.get('#user-name').clear();
  cy.get('#user-slug').clear();
  cy.get('#user-location').clear();
  cy.get('#user-name').scrollIntoView();
  cy.get('#user-name').type("Erik");
  cy.get('#user-slug').type("slug");
  cy.get('#user-location').type("Colombia");
  cy.screenshot('/v3.42/caso6/8datosAnteriores.png');
  cy.wait(2000);
  cy.contains('span', 'Save').click();
  cy.wait(2000);
  cy.contains('a', 'Staff').click();
}

function validarAnterior(){
  cy.contains('h3', 'Erik').should('be.visible');
  cy.screenshot('/v3.42/caso6/9confirmarDatosAnteriores.png');
  cy.wait(2000);
}


