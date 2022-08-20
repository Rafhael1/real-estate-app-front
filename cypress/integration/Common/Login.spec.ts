/// <reference types="cypress" />

describe('Login Screen', () => {
	it('Should log in', () => {
		cy.visit('/');
		cy.get('.css-2uchni > .MuiButton-root').click(); // Open login modal button
		cy.get(
			'.css-163ljxj-MuiStack-root > :nth-child(1) > .MuiOutlinedInput-root'
		).type('teste@gmail.com'); // email
		cy.get(':nth-child(2) > .MuiOutlinedInput-root').type('123456'); // password
		cy.get(
			'.css-w3t7zf-MuiButtonBase-root-MuiButton-root-MuiLoadingButton-root'
		).click(); // Login button
	});
});
