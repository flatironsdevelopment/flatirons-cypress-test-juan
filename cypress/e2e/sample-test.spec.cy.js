describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://fuse-develop.flatirons.com/");
  });

  it("Does not do much!", () => {
    expect(true).to.equal(true);
  });
});
