/// <reference types="cypress" />

describe('Login Screen', () => {
  it('Should log in', () => {
    cy.visit('/login');

    cy.get(
      ':nth-child(1) > .MuiOutlinedInput-root > .MuiOutlinedInput-input'
    ).type('oi');
  });
});
