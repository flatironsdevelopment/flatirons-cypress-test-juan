import BillingPage from "./pages/BillingPage";

describe("Stripe Embedded Checkout Test Scenario", () => {
  const testData = require("../fixtures/testData.json"); //importing the test data needed into a constant variable

  beforeEach(() => {
    //setting the default viewport
    const viewport = Cypress.env("viewport") || "macbook-15";
    cy.viewport(viewport);

    cy.visit(testData.dev.baseUrl);

    cy.loginWithEmail(testData.dev.EMAIL, testData.dev.PASSWORD); //calling the commands for logging and passing the loging parameters needed
    cy.get("body").should("contain", "Get started"); //Assertion for text in the page
    cy.visit(testData.dev.baseUrl + "/account/billing"); //Assertion for the page URL
  });

  it("I can subscribe to a plan using my credit card", () => {
    cy.get("body").should("contain", "Your Plan");

    BillingPage.planButton.eq(0).click(); //clicking the first our of three plans
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
