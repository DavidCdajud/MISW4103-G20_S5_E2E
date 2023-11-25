describe('X Card', function () {
    it('Customize structured data of your site for X', function () {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.viewport(1900, 1500)
        cy.visit('http://localhost:2368/ghost/');
        inciarSesion();
        cy.wait(2000);
        settingsMetaCard();
        maxCharacterTitle()
    })
})

function inciarSesion() {
    cy.get('#identification').type('pruebas@correo.com');
    cy.wait(1000);
    cy.get('#password').type('abcde12345');
    cy.wait(1000);
    cy.get('#ember5').click();

}

function settingsMetaCard() {
    cy.get('[data-test-nav="settings"]').click();
    cy.wait(1000);
    cy.contains('General').click();
    cy.wait(1000);
    cy.get('button.gh-btn[data-test-toggle-meta]').click();
    cy.wait(1000);
    cy.screenshot('/v5.68/caso19_3_apriori/Pre-MetaCard');
    cy.get('input[placeholder="Pruebas automatizadas"]').type('Lorem Ipsum');
    cy.wait(1000);
    cy.get('#metaDescription').type('ducimus accusamus reprehenderit culpa deleniti harum hic voluptatem numquam eos ratione autem vel ducimus accusamus reprehenderit culpa deleniti harum hic voluptatem numquam eos ratione autem vel ducimus accusamus reprehenderit culpa deleniti harum hic voluptatem numquam eos ratione autem vel ducimus accusamus reprehenderit culpa deleniti harum hic voluptatem numquam eos ratione autem vel ducimus accusamus reprehenderit culpa deleniti harum hic voluptatem numquam eos ratione autem vel ducimus accusamus reprehenderit culpa deleniti harum hic voluptatem numquam eos ratione autem velducimus accusamus reprehenderit culpa deleniti harum hic voluptatem numquam eos ratione autem vel ducimus accusamus reprehenderit culpa deleniti harum hic voluptatem numquam eos ratione autem vel ducimus accusamus reprehenderit culpa deleniti harum hic voluptatem numquam eos ratione autem velducimus accusamus reprehenderit culpa deleniti harum hic voluptatem numquam eos ratione autem vel ducimus accusamus reprehenderit culpa deleniti harum hic voluptatem numquam eos ratione autem vel ducimus accusamus reprehenderit culpa deleniti harum hic voluptatem numquam eos ratione autem velducimus accusamus reprehenderit culpa deleniti harum hic voluptatem numquam eos ratione autem vel ducimus accusamus reprehenderit culpa deleniti harum hic voluptatem numquam eos ratione autem vel ducimus accusamus reprehenderit culpa deleniti harum hic voluptatem numquam eos ratione autem velducimus accusamus reprehenderit culpa deleniti harum hic voluptatem numquam eos ratione autem vel ducimus accusamus reprehenderit culpa deleniti harum hic voluptatem numquam eos ratione autem vel ducimus accusamus reprehenderit culpa deleniti harum hic voluptatem numquam eos ratione autem velducimus accusamus reprehenderit culpa deleniti harum hic voluptatem numquam eos ratione autem vel ducimus accusamus reprehenderit culpa deleniti harum hic voluptatem numquam eos ratione autem vel ducimus accusamus reprehenderit culpa deleniti harum hic voluptatem numquam eos ratione autem velducimus accusamus reprehenderit culpa deleniti harum hic voluptatem numquam eos ratione autem vel ducimus accusamus reprehenderit culpa deleniti harum hic voluptatem numquam eos ratione autem vel ducimus accusamus reprehenderit culpa deleniti harum hic voluptatem numquam eos ratione autem vel');
    cy.get('body').type('{ctrl}s');
    cy.on('uncaught:exception', (err, runnable) => {
        console.error('Error no manejado:', err.message);
        return false;
    });
    cy.screenshot('/v5.68/caso19_3_apriori/Post-MetaCard');
}

function maxCharacterTitle() {

    cy.contains('.gh-alert-content', "Validation error, cannot edit setting. ValidationError: Value in [settings.meta_description] exceeds maximum length of 500 characters.").should('be.visible');
    cy.wait(1000);
}
