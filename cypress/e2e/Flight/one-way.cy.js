
const testData = require('../../fixtures/testData.json');
for (const testDatum of testData) {
   const {scenario, origin, destination, departureDate, adultCount,childCount,infantCount,isDirect,isBaggage,searchKey,airline,isrRefund} = testDatum;
   const URL =  `Flight/search?dep1=${origin}&ret1=${destination}&dtt1=${departureDate}&cl1=Y&triptype=1&adult=${adultCount}&child=${childCount}&infant=${infantCount}&direct=${isDirect}&baggage=${isBaggage}&key=${searchKey}&airlines=${airline}&ref=${isrRefund}&langcode=EN&curr=AED&ipc=false`
   console.log(scenario,URL);
   describe(scenario, () => {
      it('should search for one way flight', () => {
         cy.visit(URL);
         cy.intercept('*', (req) => {}).as('networkRequests');
         cy.wait('@networkRequests', { timeout: 30000 });
           cy.wait(2000);
            cy.get('.empireFlight_airline-name').should('be.visible');
      });
   });
}

