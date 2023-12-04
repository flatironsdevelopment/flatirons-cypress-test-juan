class BillingPage {
  get planButton() {
    return cy.get("[data-cy=planButton]");
  }

  get cardField() {
    return cy.get("[data-cy=cardField]");
  }

  get cardHolderInput() {
    return cy.get("#cardHolder");
  }

  get cardEmailInput() {
    return cy.get("#email");
  }

  get cardPhoneInput() {
    return cy.get("#phone");
  }

  get cardNumberInput() {
    return cy.get("[data-elements-stable-field-name=cardNumber]");
  }

  get cardExpiryInput() {
    return cy.get("[data-elements-stable-field-name=cardExpiry]");
  }

  get cardCVVInput() {
    return cy.get("[data-elements-stable-field-name=cardCvc]");
  }
}

export default new BillingPage();
