describe('Cambiar contrasena', function() {
  it('Cambiar y validar la contraseña de mi usuario de ghost', function() {
      cy.visit('http://localhost:2368/ghost/');
      iniciarSesion(Cypress.env('OldPass'));
      cy.wait(2000);
      ingresarSettingsStaff();
      editarContrasena(Cypress.env('OldPass'),Cypress.env('NewPass'));
      validarCambioContrasena();
      cy.visit('http://localhost:2368/ghost/signout');
      iniciarSesion(Cypress.env('NewPass'));
      ingresarSettingsStaff();
      editarContrasena(Cypress.env('NewPass'),Cypress.env('OldPass'));
      validarCambioContrasena();
  })
})

function iniciarSesion(pass){
  cy.get('#identification').type('pruebas@correo.com');
  cy.wait(1000);
  cy.get('#password').type(pass);
  cy.wait(1000);
  cy.screenshot('/v5.68/caso1/1-inicioSesion');
  cy.get('#ember5').click();
}

function ingresarSettingsStaff(){
  cy.get('#ember34').click();
  cy.wait(1000);
  cy.screenshot('/v5.68/caso1/2-settings');
  cy.get('#staff_svg__Regular').click();
  cy.wait(2000);
  cy.screenshot('/v5.68/caso1/3-staff');
  cy.get('.user-list-item-figure').click();
}

function editarContrasena(OldPass,NewPass){
  cy.get('#user-password-old').click();
  cy.get('#user-password-old').type(OldPass);
  cy.get('#user-password-new').type(NewPass);
  cy.get('#user-new-password-verification').type(NewPass);
  cy.wait(2000);
  cy.screenshot('/v5.68/caso1/4-editarContrasena');
  cy.contains('span', 'Change Password').click();
} 

function validarCambioContrasena(){
  cy.get('.gh-notification.gh-notification-passive').should('be.visible');
  cy.screenshot('/v5.68/caso1/5-validar-contrasena');
}
