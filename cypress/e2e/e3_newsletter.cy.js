describe('Gestionar email newsletter', function() {
  it('Crear y editar email newsletter de ghost', function() {
      const uuid = Math.random() * 100;
      const uuid2 = Math.random() * 100;
      cy.visit('http://localhost:2368/ghost/');
      iniciarSesion(Cypress.env('OldPass'));
      cy.wait(2000);
      ingresarSettingsNewsletter();
      addNewsletter('Test title ' + uuid);
      validateCreateNewsletter('Test title ' + uuid);
      editNewsletter('Test title edit '+ uuid2);
      validateCreateNewsletter('Test title edit '+ uuid2);
      archiveNewsletter();
  })
})

function iniciarSesion(pass){
  cy.get('#identification').type('pruebas@correo.com');
  cy.wait(1000);
  cy.get('#password').type(pass);
  cy.wait(1000);
  cy.screenshot('/caso3/2homepage.png');
  cy.get('#ember5').click();
}

function ingresarSettingsNewsletter(){
  cy.get('#ember34').click();
  cy.wait(1000);
  cy.screenshot('/caso3/3setting.png');
  cy.contains('a', 'Email newsletter').click();
  cy.wait(2000);
  cy.screenshot('/caso3/4news.png');
}

function addNewsletter(text){
  cy.contains('a', 'Add newsletter').click();
  cy.wait(2000);
  cy.get('#newsletter-title').type(text);
  cy.get('#newsletter-description').type('Test description');
  cy.screenshot('/caso3/5add.png');
  cy.contains('span', 'Create').click();
} 

function validateCreateNewsletter(text){
  cy.contains('h3', text).should('be.visible');
  cy.wait(2000);
} 

function editNewsletter(text){
  cy.contains('span', 'Actions').click({ force: true });
  cy.wait(2000);
  cy.screenshot('/caso3/7actions.png');
  cy.contains('span', 'Edit').click();
  cy.get('#newsletter-title').clear();
  cy.get('#newsletter-title').type(text);
  cy.get('#newsletter-description').clear();
  cy.get('#newsletter-description').type('Test description edit');
  cy.screenshot('/caso3/8edit.png');
  cy.contains('span', 'Save and close').click();
} 

function archiveNewsletter(){
  cy.contains('span', 'Actions').click({ force: true });
  cy.wait(2000);
  cy.screenshot('/caso3/9actions.png');
  cy.contains('span', 'Archive').click();
  cy.get('.modal-content').contains('span', 'Archive').click();
  cy.screenshot('/caso3/10archive.png');
} 