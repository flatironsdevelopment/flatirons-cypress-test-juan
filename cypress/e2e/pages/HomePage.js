class HomePage {
  get GetStartedTitle() {
    return cy.get("[data-cy=getStartedTitle]");
  }
}

export default new HomePage();
