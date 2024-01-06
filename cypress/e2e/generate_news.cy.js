/**
 * - Generate News Spec
 *   - User can access Generate News Draft page
 *   - User can't generate news draft without description
 *   - User can generate news draft
 *   - User can regenerate news draft
 */

describe("Generate News Spec", () => {
  beforeEach("Login", () => {
    cy.visit("http://localhost:3000/auth/login?");
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
  });

  it("User can access Generate News Draft page", () => {
    // steps
    cy.get("p").contains("Buat Draf Berita").click();

    // verify
    cy.get("p")
      .contains("Buat draf berita secara otomatis dengan bantuan AI!")
      .should("be.visible");
    cy.get("textarea").should("be.visible");
  });

  it("User can't generate news draft without description", () => {
    // steps
    cy.get("p").contains("Buat Draf Berita").click();
    cy.get("textarea").should("be.visible");
    cy.get("button").contains("Buat Draf Berita").click();

    // verify
    cy.get("div").contains("Masukkan deskripsi berita!").should("be.visible");
  });

  it("User can generate news draft", () => {
    // interceptor
    cy.intercept("https://ta-aings-399219.uc.r.appspot.com/v1/draft").as(
      "generate"
    );

    // steps
    cy.get("p").contains("Buat Draf Berita").click();
    cy.get("textarea").should("be.visible");
    cy.get("textarea").type(
      "Gedung perkantoran tinggi di Jakarta Pusat dilanda kebakaran pada tanggal 15 Oktober pukul 20.30, dengan penyebab diduga akibat korsleting listrik. Respon dari pemadam kebakaran sangat cepat dalam mencegah korban jiwa."
    );
    cy.get("button").contains("Buat Draf Berita").click();

    cy.wait("@generate", {
      timeout: 90_000,
    });

    // verify
    cy.get("p").contains("Melihat Draf Berita").should("be.visible");
    cy.get("button").contains("Kirim Redaktur").should("be.visible");
    cy.get("button").contains("Ubah Draf").should("be.visible");
    cy.get("button").contains("Buat Ulang Draf Berita").should("be.visible");
  });

  it("User can regenerate news draft", () => {
    // interceptor
    cy.intercept("https://ta-aings-399219.uc.r.appspot.com/v1/draft").as(
      "generate"
    );

    // steps
    cy.get("p").contains("Buat Draf Berita").click();
    cy.get("textarea").should("be.visible");
    cy.get("textarea").type(
      "Gedung perkantoran tinggi di Jakarta Pusat dilanda kebakaran pada tanggal 15 Oktober pukul 20.30, dengan penyebab diduga akibat korsleting listrik. Respon dari pemadam kebakaran sangat cepat dalam mencegah korban jiwa."
    );
    cy.get("button").contains("Buat Draf Berita").click();

    cy.wait("@generate", {
      timeout: 90_000,
    });
    cy.get("button").contains("Buat Ulang Draf Berita").should("be.visible");
    cy.get("button").contains("Buat Ulang Draf Berita").click();

    cy.get("button").contains("Buat Ulang Draf Berita").should("be.visible");
    cy.get("button").contains("Buat Ulang Draf Berita").click();

    cy.wait("@generate", {
      timeout: 90_000,
    });

    // verify
    cy.get("p").contains("Melihat Draf Berita").should("be.visible");
    cy.get("button").contains("Kirim Redaktur").should("be.visible");
    cy.get("button").contains("Ubah Draf").should("be.visible");
    cy.get("button").contains("Buat Ulang Draf Berita").should("be.visible");
  });
});
