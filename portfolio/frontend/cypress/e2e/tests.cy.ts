describe("portfolio", () => {
  it("successfully loaded", () => {
    cy.visit("http://localhost:3000");
  });
});

it("goes to homepage route", () => {
  cy.visit("http://localhost:3000");

  cy.get('[data-cy="homelink"]').click();

  cy.visit("http://localhost:3000/book");
});

it("goes to about route", () => {
  cy.visit("http://localhost:3000");

  cy.get('[data-cy="aboutlink"]').click();
  cy.visit("http://localhost:3000/about");
});

it("goes to project route", () => {
  cy.visit("http://localhost:3000");

  cy.get('[data-cy="projectlink"]').click();
  cy.visit("http://localhost:3000/projects");
});

it("check game page link via project page and checking database connection", () => {
  cy.visit("http://localhost:3000");

  cy.get('[data-cy="projectlink"]').click();
  cy.visit("http://localhost:3000/projects");
  cy.get('[data-cy="63bf2bff6cd1e091714b8dec"]').click();

  cy.get('[data-cy="website"]').should(
    "have.attr",
    "href",
    "http://127.0.0.1:5500/game/"
  );
});
