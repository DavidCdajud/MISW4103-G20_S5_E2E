describe('Perfil', function() {
  it('Modificar y validar acciones de mi perfil de ghost', function() {
      cy.visit('http://localhost:2368/ghost/');
      inciarSesion();
      cy.screenshot('/caso6/1admin.png');
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
  cy.screenshot('/caso6/2homepage.png');
  cy.get('#ember5').click();
}

function ingresarPerfil(){
  cy.get('.gh-user-avatar').click();
  cy.wait(1000);
  cy.contains('a', 'Your profile').click();
  cy.wait(3000);
  cy.screenshot('/caso6/3profile.png');
}

function editarPerfil(){
  cy.screenshot('/caso6/4datos.png');
  cy.get('input.peer').eq(0).click();
  cy.get('input.peer').eq(0).clear();
  cy.get('input.peer').eq(0).type("Erik editado");
  cy.get('input.peer').eq(2).click();
  cy.get('input.peer').eq(2).clear();
  cy.get('input.peer').eq(2).type("slugeditado");
  cy.get('input.peer').eq(3).click();
  cy.get('input.peer').eq(3).clear();
  cy.get('input.peer').eq(3).type("colombia editado");
  cy.screenshot('/caso6/5datosEditados.png');
  cy.wait(5000);
  cy.contains('span', 'Save & close').click();
  cy.wait(2000);
}

function validarEdicion(){
  cy.contains('span', 'Erik editado').should('be.visible');
  cy.screenshot('/caso6/6confirmarEdicion.png');
  cy.wait(2000);
}

function perfilAnterior(){
  cy.contains('span', 'Erik editado').click();
  cy.wait(2000);
  cy.screenshot('/caso6/7datosNuevos.png');
  cy.get('input.peer').eq(0).click();
  cy.get('input.peer').eq(0).clear();
  cy.get('input.peer').eq(0).type("Erik");
  cy.get('input.peer').eq(2).click();
  cy.get('input.peer').eq(2).clear();
  cy.get('input.peer').eq(2).type("slug");
  cy.get('input.peer').eq(3).click();
  cy.get('input.peer').eq(3).clear();
  cy.get('input.peer').eq(3).type("Colombia");
  cy.screenshot('/caso6/8datosAnteriores.png');
  cy.wait(5000);
  cy.contains('span', 'Save & close').click();
  cy.wait(2000);
}

function validarAnterior(){
  cy.contains('span', 'Erik').should('be.visible');
  cy.screenshot('/caso6/9confirmarDatosAnteriores.png');
  cy.wait(2000);
}


