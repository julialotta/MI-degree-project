describe("testing base url", () => {
  it("passes", () => {
    cy.visit("http://localhost:8000/");
  });

  it("checks first page content", () => {
    cy.visit("http://localhost:8000");

    cy.get("body").should("contain.text", "Oh, hello. I didn't see you there");
  });

  it("check database content", () => {
    cy.visit("http://localhost:8000/game");

    cy.get("body").should("contain.text", "_id");
    cy.get("body").should("contain.text", "name");
    cy.get("body").should("contain.text", "score");
  });
});
