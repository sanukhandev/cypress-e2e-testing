describe("Testing One Way Flight", () => {
    it("One Way Flight", () => {
    cy.visit("/")
        cy.intercept('*', (req) => {}).as('networkRequests');
        cy.wait('@networkRequests', { timeout: 30000 });
        cy.contains('span', 'Flights').click();
        cy.wait('@networkRequests', { timeout: 30000 });
        cy.contains('span', 'One Way').click();
        cy.get('input#OwDropToOrigin').type('Dubai');
        cy.get('div.dropdown-menuRight.dropdown-menu.ng-star-inserted').filter(':visible').find('span').contains('Dubai').click();
        cy.get('input#OwDropFromDepart').type('Delhi');
        cy.get('div.dropdown-menuRight.dropdown-menu.ng-star-inserted').filter(':visible').find('span').contains('Delhi').click();
    })
})
