describe('SUBMIT FORM.', () => {
  it('showing error message.', () => {
    cy.visit('http://localhost:3000/');

    cy.get("[data-cy=amount]")
      .should('have.class', 'u-full-width');

    /* cy.get("[data-cy=amount]")
      .invoke('text')
      .should('equal','Example: 3000'); */

    cy.get("[data-cy=select-month]")
      .should('have.class', 'u-full-width');

    cy.get("[data-cy=btn-submit]")
      .should('have.class', 'button-primary u-full-width');

    cy.get("[data-cy=btn-submit]").click();

    cy.get("[data-cy=error-message]")
      .invoke('text')
      .should('equal', 'All fields are required');

    cy.get("[data-cy=error-message]")
      .should('have.class', 'error');

    cy.screenshot();
  });

  it('showing result on submit.', () => {
    cy.get("[data-cy=amount]")
      .type('12000');

    cy.get("[data-cy=select-month]")
      .select("3");

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
})