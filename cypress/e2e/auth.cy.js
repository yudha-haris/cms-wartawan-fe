/**
 * - Authentication spec
 *   - User can access login page
 *   - User can't login with empty username field
 *   - User can't login with empty password field
 *   - User can't login with wrong account information
 *   - User can login with correct account information
 *   - User can logout
 */

describe("Authentication spec", () => {
  beforeEach("Visit Page", () => {
    cy.visit("http://localhost:3000/auth/login?");
  });

  it("User can access login page", () => {
    // verify element
    cy.get('input[placeholder="Username"').should("be.visible");
    cy.get('input[placeholder="Password"').should("be.visible");
    cy.get("button")
      .contains(/^Masuk$/)
      .should("be.visible");
  });

  it("User can't login with empty email field", () => {
    // steps
    cy.get('input[placeholder="Username"').should("be.visible");
    cy.get('input[placeholder="Password"').should("be.visible");
    cy.get("button")
      .contains(/^Masuk$/)
      .click();

    // verify
    cy.get("div").contains("Data yang dimasukkan salah").should("be.visible");
  });

  it("User can't login with empty password field", () => {
    // steps
    cy.get('input[placeholder="Username"').type("budi.w");
    cy.get("button")
      .contains(/^Masuk$/)
      .click();

    // verify
    cy.get("div").contains("Data yang dimasukkan salah").should("be.visible");
  });

  it("User can't login with wrong account information", () => {
    // steps
    cy.get('input[placeholder="Username"').type("budi.w");
    cy.get('input[placeholder="Password"').type("budi2");
    cy.get("button")
      .contains(/^Masuk$/)
      .click();

    // verify
    cy.get("div").contains("Data yang dimasukkan salah").should("be.visible");
  });

  it("User can login with correct account information", () => {
    // steps
    cy.get('input[placeholder="Username"').type("budi.w");
    cy.get('input[placeholder="Password"').type("budi123");
    cy.get("button")
      .contains(/^Masuk$/)
      .click();

    // verify
    cy.get("p").contains("Daftar Draf Berita").should("be.visible");
  });

  it("User can logout", () => {
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
    cy.get("p").contains("Daftar Draf Berita").should("be.visible");

    cy.wait("@getDraft");

    cy.get("p").filter(":visible").contains("Keluar").click();

    // verify
    cy.get('input[placeholder="Username"').should("be.visible");
  });
});
