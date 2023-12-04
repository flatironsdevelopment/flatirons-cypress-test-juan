class LoginPage {
  get emailInput() {
    return cy.get("#email");
  }

  get passwordInput() {
    return cy.get("#password");
  }

  get signInButton() {
    return cy.get("[data-cy=SignIn]");
  }

  get signGithubActionButton() {
    return cy.get('div[role="button"]');
  }

  get emailGithubInput() {
    return cy.get("#login_field");
  }

  get passwordGithubInput() {
    return cy.get("#password");
  }

  get signInGithubButton() {
    return cy.get('input[type="submit"]');
  }
}

export default new LoginPage();
