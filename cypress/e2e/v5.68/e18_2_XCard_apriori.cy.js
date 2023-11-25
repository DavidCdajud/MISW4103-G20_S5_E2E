describe('X Card - max character title', function () {
    it('Customize structured data of your site for X', function () {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.viewport(1900, 1500)
        cy.visit('http://localhost:2368/ghost/');
        inciarSesion();
        cy.wait(2000);
        settingsXCard();
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

function settingsXCard() {
    cy.get('[data-test-nav="settings"]').click();
    cy.wait(1000);
    cy.contains('General').click();
    cy.wait(1000);
    cy.get('button.gh-btn[data-test-toggle-twitter]').click();
    cy.wait(1000);
    cy.screenshot('/v5.68/caso18_2_apriori/Pre-XCard');
    cy.wait(1000);
    cy.get('input[placeholder="Pruebas automatizadas"]').type("ducimus accusamus reprehenderit culpa deleniti harum hic voluptatem numquam eos ratione autem vel placeat rem ut ea veniam eos quas voluptatem accusantium consequatur repellat ratione mollitia fuga assumenda at cum error ut officia nostrum quaerat repellendus cumque inventore qui esse non eum nulla deleniti vel neque aut eveniet dolor quam numquam illum porro voluptatibus veniam assumenda libero nihil eum accusamus explicabo in voluptatum facilis et cum quia omnis aspernatur distinctio similique sit minima ipsum et impedit ratione eos odio accusantium sunt eos consequatur et ullam sint quae porro qui quas cupiditate nesciunt eaque nihil officia illum enim aspernatur ipsam sapiente quo perspiciatis et odio amet quasi est voluptas aut odio quae sapiente perferendis minima exercitationem aut inventore dolores placeat vitae natus ea est aut adipisci et exercitationem vero voluptates sint ut et reprehenderit nostrum nesciunt modi omnis magnam rerum non minima consectetur maiores architecto sit necessitatibus voluptate vel sit aperiam omnis ducimus perferendis cumque quidem et repellat voluptas aut hic id hic asperiores facere nesciunt omnis adipisci molestiae veritatis eos provident ut voluptas est veritatis non enim quisquam inventore temporibus qui laudantium aspernatur nesciunt qui optio consequatur expedita quidem culpa iusto ea ut nesciunt repellat tempore aliquam et eaque aut ut ipsam voluptas facere ut sed officiis provident nulla consequatur aut voluptas adipisci quia expedita quo expedita nam et magni tempore non impedit omnis doloribus quam eaque doloribus earum exercitationem qui quia qui magnam perferendis hic nesciunt voluptas sunt ratione nobis non facilis voluptas atque natus odit excepturi provident molestiae iste quisquam inventore quasi iste ut voluptatibus non vero facilis quisquam hic quidem quis consequatur ea occaecati omnis facere repellendus sed dolorem accusamus iure molestiae vel qui veniam culpa architecto quae nobis accusantium omnis natus a sed quos quas tempore qui dolore dolorem iusto qui ratione officia tempora voluptas non et vel est dolorum nihil suscipit blanditiis necessitatibus natus magnam");
    cy.wait(1000);
    cy.get("#twitterDescription").type("velit provident quiad ea asperiorescorporis ipsa veritatisid quibusdam facilisalias non voluptatemvoluptatem non doloremqui non sit");
    cy.wait(1000);
    cy.screenshot('/v5.68/caso18_2_apriori/Post-XCard');
    cy.get('body').type('{ctrl}s');
    cy.on('uncaught:exception', (err, runnable) => {
        console.error('Error no manejado:', err.message);
        return false;
    });
}

function maxCharacterTitle() {

    cy.contains('.gh-alert-content', "Validation error, cannot edit setting. ValidationError: Value in [settings.twitter_title] exceeds maximum length of 300 characters.").should('be.visible');
    cy.wait(1000);
}


