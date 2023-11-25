describe('Post', function () {
    it('Crear, editar, eliminar post', function () {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.viewport(1900, 1500)
        cy.visit('http://localhost:2368/ghost/');
        inciarSesion();
        cy.wait(2000);
        navegarNewPost();
        cy.wait(2000);
        cy.screenshot('/caso16_1_apriori/Navegar');
        rellenarPost();
        openSettings();
        fillSettingPost();
        closeSettingsPost();
        publishPost();
        prePublish();
        finalPusblish();
        cy.wait(2000);
        cy.screenshot('/caso16_1_apriori/finalpublish');
        editorPost();
        openSettings();
        editSettingPost();
        closeSettingsPost();
        updatePost();
        deletePost();
    })
})

function inciarSesion() {
    cy.get('#identification').type('pruebas@correo.com');
    cy.wait(1000);
    cy.get('#password').type('abcde12345');
    cy.wait(1000);
    cy.get('#ember5').click();

}

function navegarNewPost() {
    cy.get('#ember20').click();
    cy.wait(1000);
}

function rellenarPost() {
    cy.get('[placeholder = "Post title"').type("E2E Post");
    cy.wait(1000);
    cy.get('p').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus eros in libero sagittis, at ornare leo rhoncus. Duis odio mauris, blandit ut blandit eu, luctus eu eros. Morbi quis massa in ante gravida posuere condimentum et dui. Mauris eu interdum urna. Nullam arcu ante, elementum at leo id, tincidunt sodales tellus. Etiam placerat enim et nisl tincidunt, vel aliquam leo ornare.');

}

function openSettings() {
    cy.get('.settings-menu-toggle > span').click();

}

function fillSettingPost() {
    cy.get('#tag-input').type('E2E').type('{enter}');
    cy.wait(1000);
    cy.get('#custom-excerpt').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
}

function closeSettingsPost() {
    cy.get('.settings-menu-toggle > span').click();

}

function publishPost() {
    cy.get('[data-test-button="publish-flow"]').click();

}

function prePublish() {
    cy.get('[data-test-button="continue"]').click();


}

function finalPusblish() {
    cy.get('[data-test-button="confirm-publish"]').click();
    cy.wait(10000);
}

function editorPost() {
    cy.get('.gh-publish-header > .gh-btn-editor').click();
    cy.get('[placeholder = "Post title"').type("E2E Post (EDITADO)");
    cy.wait(1000);
    cy.get('p').type('(EDITADO)(EDITADO)(EDITADO)(EDITADO)(EDITADO)(EDITADO)');

}

function editSettingPost() {
    cy.get('#tag-input').type('E2E').type('{enter}');
    cy.wait(1000);
    cy.get('#custom-excerpt').type('(EDITADO)(EDITADO)(EDITADO)(EDITADO)(EDITADO)(EDITADO)');

}

function updatePost() {
    cy.get('[data-test-task-button-state="idle"]').as('updateButton').click();
    cy.wait(5000)
}


function deletePost() {
    cy.get('.settings-menu-toggle > span').click();
    cy.get('#custom-excerpt').click
    cy.get('.settings-menu-delete-button > .gh-btn > span').click();
    cy.wait(5000)
    cy.screenshot('/caso16_1_apriori/delete');
    cy.get('[data-test-task-button-state="idle"]').contains('Delete').click();
}

