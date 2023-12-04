import BillingPage from "./pages/BillingPage";

describe("Stripe Checkout", () => {
  const testData = require("../fixtures/testData.json");

  beforeEach(() => {
    const viewport = Cypress.env("viewport") || "macbook-15";
    cy.viewport(viewport);

    cy.visit(testData.dev.baseUrl);

    cy.loginWithEmail(testData.dev.EMAIL, testData.dev.PASSWORD);
    cy.get("body").should("contain", "Get started");
    cy.visit(testData.dev.baseUrl + "/account/billing");
  });

  it("Subscribes to a plan using Stripe checkout", () => {
    cy.get("body").should("contain", "Your Plan");

    BillingPage.planButton.eq(0).click();
    BillingPage.cardHolderInput.type(testData.dev.CardHolder);
    BillingPage.cardEmailInput.type(testData.dev.CardEmail);
    BillingPage.cardPhoneInput.type(testData.dev.CardPhone);
    //BillingPage.cardNumberInput.type(testData.dev.CardNumber);
    //BillingPage.cardExpiryInput.type(testData.dev.CardExpiry);
    //BillingPage.cardCVVInput.type(testData.dev.CardCVC);

    //cy.contains('button', 'Upgrade Plan').click();
    //cy.get('body').should('contain', 'Your Plan');
  });
});
