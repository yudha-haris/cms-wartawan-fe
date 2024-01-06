/**
 * - News Draft spec
 *   - User can access News Draft page
 *   - User can navigate through pages in News Draft page
 */

describe("Authentication spec", () => {
  beforeEach("Visit Page", () => {
    cy.visit("http://localhost:3000/auth/login?");
  });

  it("User can access News Draft page", () => {
    // interceptor
    cy.intercept("https://ta-aings-399219.uc.r.appspot.com/v1/draft?*").as(
      "getDraft"
    );

    // steps
    cy.get('input[placeholder="Username"').type("budi.w");
    cy.get('input[placeholder="Password"').type("budi123");
    cy.get("button")
      .contains(/^Masuk$/)
      .click();

    cy.wait("@getDraft");

    // verify
    cy.get("p").contains("Daftar Draf Berita").should("be.visible");
  });

  it("User can navigate through pages in News Draft page", () => {
    // interceptor
    cy.intercept("https://ta-aings-399219.uc.r.appspot.com/v1/draft?*").as(
      "getDraft"
    );

    // steps
    cy.get('input[placeholder="Username"').type("budi.w");
    cy.get('input[placeholder="Password"').type("budi123");
    cy.get("button")
      .contains(/^Masuk$/)
      .click();

    cy.wait("@getDraft");
    cy.get("p").contains("Berikutnya").click();

    // verify
    cy.get("p").contains("2/").should("be.visible");
  });
});
