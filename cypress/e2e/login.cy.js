

import LoginPage from '../pages/loginPage';

describe('Login Functionality Tests', () => {
  const loginPage = new LoginPage();
  const { username, password } = Cypress.env();

  beforeEach(() => {
    loginPage.visit();
  });

  //  Login with valid credentials
  it('should login successfully with valid credentials', () => {
    loginPage
      .typeUsername(username)
      .typePassword(password)
      .clickLogin();

    cy.url({ timeout: 50000 }).should('include', '/#/home');
  });

   

  after(() => {
    cy.logout();
  });
});


