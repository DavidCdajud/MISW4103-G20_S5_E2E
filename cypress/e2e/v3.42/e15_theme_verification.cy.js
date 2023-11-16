describe('Night shift toggle in Ghost Admin', () => {
    const versionFolder = Cypress.config('baseFolder342');
    const caseFolder = `${versionFolder}caso15`;

    before(() => {
        cy.loginToGhost();
    });

    it('debería alternar el modo Night shift y verificar el tema', () => {
        cy.screenshot(`${caseFolder}/before-toggle`);

        cy.get('button.gh-secondary-action').trigger('mouseover').click();
        cy.wait(1000);

        cy.screenshot(`${caseFolder}/after-first-toggle`);

        cy.get('button.gh-secondary-action').trigger('mouseover').click();
        cy.wait(1000);

        cy.screenshot(`${caseFolder}/after-second-toggle`);
    });
});
