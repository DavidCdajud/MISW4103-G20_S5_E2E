const dataMocka = require('../../fixtures/e16_e20-data.json');

let varTitle = new String();
let varDescription = new String();
let varBody = new String();
let varTag = new String();
let varNum = new Number();

varTitle = dataMocka[getRandomArbitrary(1, 50)].dimTitle;
varDescription = dataMocka[getRandomArbitrary(1, 50)].dimDescription;
varBody = dataMocka[getRandomArbitrary(1, 50)].dimBody;
varTag = dataMocka[getRandomArbitrary(1, 50)].dimTag;
varNum = dataMocka[getRandomArbitrary(1, 50)].dimNum;

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
        cy.screenshot('/caso16_1_dinamico/Navegar');
        rellenarPost();
        openSettings();
        fillSettingPost();
        closeSettingsPost();
        publishPost();
        prePublish();
        finalPusblish();
        cy.wait(2000);
        cy.screenshot('/caso16_1_dinamico/finalpublish');
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
    cy.get('[placeholder = "Post title"').type(varTitle);
    cy.wait(1000);
    cy.get('p').type(varDescription);

}

function openSettings() {
    cy.get('.settings-menu-toggle > span').click();

}

function fillSettingPost() {
    cy.get('#tag-input').type(varTag).type('{enter}');
    cy.wait(1000);
    cy.get('#custom-excerpt').type(varTag);
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
    cy.get('[placeholder = "Post title"').type(varTitle + "(EDITADO)");
    cy.wait(1000);
    cy.get('p').type(varDescription + "(EDITADO)");

}

function editSettingPost() {
    cy.get('#tag-input').type(varTag).type('{enter}');
    cy.wait(1000);
    cy.get('#custom-excerpt').type(varDescription + "(EDITADO)");

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
    cy.screenshot('/caso16_1_dinamico/delete');
    cy.get('[data-test-task-button-state="idle"]').contains('Delete').click();
}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}