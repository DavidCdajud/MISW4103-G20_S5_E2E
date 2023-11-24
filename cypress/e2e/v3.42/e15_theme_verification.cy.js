describe('Night shift toggle in Ghost Admin', () => {
    const baseUrl = 'http://localhost:3001';
    const versionFolder = Cypress.config('baseFolder342');
    const caseFolder = `${versionFolder}caso15`;

    before(() => {
        cy.loginToGhost(baseUrl);
    });

    it('debería alternar el modo Night shift y verificar el tema', () => {
        cy.screenshot(`${caseFolder}/1.before-toggle`);

        cy.get('button.gh-secondary-action').trigger('mouseover').click();
        cy.wait(1000);

        cy.screenshot(`${caseFolder}/2.after-first-toggle`);

        cy.get('button.gh-secondary-action').trigger('mouseover').click();
        cy.wait(1000);

        cy.screenshot(`${caseFolder}/3.after-second-toggle`);
    });
});
