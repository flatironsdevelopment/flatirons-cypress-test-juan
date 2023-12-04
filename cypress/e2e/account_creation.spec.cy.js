import CreateAccountPage from "./pages/CreateAccountPage";
import moment from "moment";

describe("I can register for the platform.", () => {
  const testData = require("../fixtures/testData.json");

  beforeEach(() => {
    const viewport = Cypress.env("viewport") || "macbook-15";
    cy.viewport(viewport);

    cy.visit(testData.dev.baseUrl + "/users/sign-up");
  });

  it("Creates a new account with email and password", () => {
    const now = moment().format("MM-DD-YY-hmmss"); //calling the moment function and saving the current time and date as a constant variable
    const email = `TestEmail_${now}@gmail.com`; //creating a custom email for testing including the current date to avoid duplicates

    CreateAccountPage.firstNameInput.type(`TestName_${now}`); 
    CreateAccountPage.lastNameInput.type(`TestLastName_${now}`);
    CreateAccountPage.companyNameInput.type(`TestCompanyName_${now}`);
    CreateAccountPage.emailInput.type(email);
    CreateAccountPage.passwordInput.type(testData.dev.PASSWORD);

    CreateAccountPage.signUpButton.click();

    cy.get("body").should("contain", "Check your email!");
    cy.get("body").should("contain", email);
  });
});
