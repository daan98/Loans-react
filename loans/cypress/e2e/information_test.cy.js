describe('MAKING CALCULATIONS.', () => {
    it('First calculation.', () => {
        cy.visit('http://localhost:3000/');

        cy.get("[data-cy=amount]")
          .type('12000');

        cy.get("[data-cy=select-month]")
          .select('3');

        cy.get("[data-cy=btn-submit]").click();
        
        cy.get("[data-cy=spinner]")
          .should('have.class', 'spinner');

        cy.screenshot();

        cy.wait(2000);

        cy.get("[data-cy=result]")
          .should('have.class', 'resultado');

        cy.get("[data-cy=quantity]")
          .invoke('text')
          .should('contain', '$12000');

        cy.get("[data-cy=term]")
          .invoke('text')
          .should('contain', '3 months');
        
        cy.get("[data-cy=total]")
          .invoke('text')
          .should('contain', '$13800.00');

        cy.get("[data-cy=per-month]")
          .invoke('text')
          .should('contain', '$4600.00');
        
        cy.screenshot();
    });

    it('Changes amount.', () => {
        cy.get("[data-cy=amount]")
          .clear()
          .type('1000');
        
        cy.get("[data-cy=message]")
          .should('have.class', 'mensajes');

        cy.get("[data-cy=message]")
          .invoke('text')
          .should('equal', 'Specify a quantity and select amount of time for payment');

        cy.get("[data-cy=btn-submit]")
          .click();

        cy.get("[data-cy=spinner]")
          .should('have.class', 'spinner');

        cy.screenshot();

        cy.wait(2000);

        cy.get("[data-cy=result]")
          .should('have.class', 'resultado');

        cy.get("[data-cy=quantity]")
          .invoke('text')
          .should('contain', '$1000');

        cy.get("[data-cy=term]")
          .invoke('text')
          .should('contain', '3 months');
        
        cy.get("[data-cy=total]")
          .invoke('text')
          .should('contain', '$1300.00');

        cy.get("[data-cy=per-month]")
          .invoke('text')
          .should('contain', '$433.33');
        
        cy.screenshot();
    });

    it('Changes term.', () => {
        cy.get("[data-cy=select-month]")
          .select('24');
          
        cy.get("[data-cy=message]")
        .should('have.class', 'mensajes');

        cy.get("[data-cy=message]")
          .invoke('text')
          .should('equal', 'Specify a quantity and select amount of time for payment');

        cy.get("[data-cy=btn-submit]")
          .click();

        cy.get("[data-cy=spinner]")
          .should('have.class', 'spinner');

        cy.screenshot();

        cy.wait(2000);

        cy.get("[data-cy=result]")
          .should('have.class', 'resultado');

        cy.get("[data-cy=quantity]")
          .invoke('text')
          .should('contain', '$1000');

        cy.get("[data-cy=term]")
          .invoke('text')
          .should('contain', '24 months');
        
        cy.get("[data-cy=total]")
          .invoke('text')
          .should('contain', '$1450.00');

        cy.get("[data-cy=per-month]")
          .invoke('text')
          .should('contain', '$60.42');
        
        cy.screenshot();
    });
});