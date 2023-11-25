describe('Gestionar email newsletter', function() {
  it('Crear y editar email newsletter de ghost', function() {
    const specialCharactersTitle = '!@#$%^&*()_+=';
    const specialCharactersDescription = '!@#$%^&*()_+=-[]{};:,.<>?';
      cy.visit('http://localhost:2368/ghost/');
      iniciarSesion(Cypress.env('OldPass'));
      cy.wait(2000);
      ingresarSettingsNewsletter();
      addNewsletter(specialCharactersTitle);
      validateCreateNewsletter(specialCharactersTitle);
      editNewsletter(specialCharactersDescription);
      validateCreateNewsletter(specialCharactersDescription);
      archiveNewsletter();
  })
})

function iniciarSesion(pass){
  cy.get('#identification').type('pruebas@correo.com');
  cy.wait(1000);
  cy.get('#password').type(pass);
  cy.wait(1000);
  cy.screenshot('/v5.68/caso3/apriori/1-inicioSesion');
  cy.get('#ember5').click();
}

function ingresarSettingsNewsletter(){
  cy.get('#ember34').click();
  cy.wait(1000);
  cy.screenshot('/v5.68/caso3/apriori/2-setting');
  cy.contains('a', 'Email newsletter').click();
  cy.wait(2000);
  cy.screenshot('/v5.68/caso3/apriori/3-news');
}

function addNewsletter(text){
  cy.contains('a', 'Add newsletter').click();
  cy.wait(2000);
  cy.get('#newsletter-title').type(text);
  cy.get('#newsletter-description').type('Test description');
  cy.screenshot('/v5.68/caso3/apriori/4-add');
  cy.contains('span', 'Create').click();
} 

function validateCreateNewsletter(text){
  cy.contains('h3', text).should('be.visible');
  cy.wait(2000);
} 

function editNewsletter(text){
  cy.contains('span', 'Actions').click({ force: true });
  cy.wait(2000);
  cy.screenshot('/v5.68/caso3/apriori/5-actions');
  cy.contains('span', 'Edit').click();
  cy.get('#newsletter-title').clear();
  cy.get('#newsletter-title').type(text);
  cy.get('#newsletter-description').clear();
  cy.get('#newsletter-description').type('Test description edit');
  cy.screenshot('/v5.68/caso3/apriori/6-edit');
  cy.contains('span', 'Save and close').click();
} 

function archiveNewsletter(){
  cy.contains('span', 'Actions').click({ force: true });
  cy.wait(2000);
  cy.screenshot('/v5.68/caso3/apriori/7-actions');
  cy.contains('span', 'Archive').click();
  cy.get('.modal-content').contains('span', 'Archive').click();
  cy.screenshot('/v5.68/caso3/apriori/8-archive');
} 