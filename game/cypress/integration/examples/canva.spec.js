describe("Jullan Debugger", () => {
  it("should see starting page", () => {
    cy.visit("http://localhost:3000");
    cy.wait(3000);
    cy.get("#kaboom");
    cy.get("body").toMatchImageSnapshot();
  });
});
