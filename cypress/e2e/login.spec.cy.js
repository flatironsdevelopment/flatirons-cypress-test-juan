import LoginPage from "./pages/LoginPage";

describe("Login Test Scenarios", () => {
  const testData = require("../fixtures/testData.json"); //importing the test data needed into a constant variable

  beforeEach(() => {
    //setting the default viewport
    const viewport = Cypress.env("viewport") || "macbook-15";
    cy.viewport(viewport);

    cy.visit(testData.dev.baseUrl);
  });

  it("I can login to the platform using email and password", () => {
    cy.loginWithEmail(testData.dev.EMAIL, testData.dev.PASSWORD); //calling the commands for logging and passing the loging parameters needed
    cy.url().should("eq", testData.dev.baseUrl + "/account/importers"); //Assertion for the page URL
    cy.get("body").should("contain", "Get started"); //Assertion for text in the page
  });

  it("I can login to the platform using GitHub", () => {
    LoginPage.signGithubActionButton.eq(1).click(); //Click the second submit type button which is Github
    cy.loginWithGithub(testData.dev.EMAILGITHUB, testData.dev.PASSWORDGITHUB); //calling the commands for logging and passing the loging parameters needed
    cy.get("body").should("contain", "Get started");
  });
});
