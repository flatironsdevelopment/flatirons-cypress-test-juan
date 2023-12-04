class CreateAccountPage {
  get firstNameInput() {
    return cy.get("#first_name");
  }

  get lastNameInput() {
    return cy.get("#last_name");
  }

  get companyNameInput() {
    return cy.get("#company_name");
  }

  get emailInput() {
    return cy.get("#email");
  }

  get passwordInput() {
    return cy.get("#password");
  }

  get signUpButton() {
    return cy.get("[data-cy=SignUp]");
  }
}

export default new CreateAccountPage();
