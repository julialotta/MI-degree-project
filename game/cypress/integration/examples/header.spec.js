describe("Jullan Debugger Header", () => {
  it("Should see header", () => {
    cy.visit("http://localhost:3000");
    cy.wait(3000);
    cy.get("header");
  });
  it("Should click on 'tillbaka'", () => {
    cy.visit("http://localhost:3000");
    cy.wait(3000);

    cy.get('[data-cy="back"]').should(
      "have.attr",
      "href",
      "http://localhost:3000/projects"
    );
  });
  it("Should click on 'highscore'", () => {
    cy.visit("http://localhost:3000");
    cy.wait(3000);
    cy.get('[data-cy="highscore"]').should(
      "have.attr",
      "href",
      "http://localhost:3000/highscore"
    );
  });
});
