import LoginPage from "./pages/LoginPage";

describe("Login Test Scenarios", () => {
  const testData = require("../fixtures/testData.json");

  beforeEach(() => {
    const viewport = Cypress.env("viewport") || "macbook-15";
    cy.viewport(viewport);

    cy.visit(testData.dev.baseUrl);
  });

  it("I can login to the platform using email and password", () => {
    cy.loginWithEmail(testData.dev.EMAIL, testData.dev.PASSWORD);
    cy.url().should("eq", testData.dev.baseUrl + "/account/importers");
    cy.get("body").should("contain", "Get started");
  });

  it("I can login to the platform using GitHub", () => {
    LoginPage.signGithubActionButton.eq(1).click();
    cy.loginWithGithub(testData.dev.EMAILGITHUB, testData.dev.PASSWORDGITHUB);
    cy.get("body").should("contain", "Get started");
  });
});
