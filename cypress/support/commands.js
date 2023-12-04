import LoginPage from "../e2e/pages/LoginPage";
const testData = require("../fixtures/testData.json");

Cypress.Commands.add("loginWithEmail", (email, password) => {
  LoginPage.emailInput.type(email);
  LoginPage.passwordInput.type(password);
  LoginPage.signInButton.click();
});

Cypress.Commands.add("loginWithGithub", (email, password) => {
  LoginPage.emailGithubInput.type(email);
  LoginPage.passwordGithubInput.type(password);
  LoginPage.signInGithubButton.click();
});
