/**
 * - News Draft Detail Spec
 *   - User can see comments
 *   - User can add comments
 */

import {
  originalTitle,
  originalDesc,
} from "../utils/news_draft_detail_test_util";

describe("Comment Spec", () => {
  it("User can see comments", () => {
    cy.request({
      method: "POST",
      url: `https://redaktur-backend.et.r.appspot.com/v1/auth/login/email`,
      // form: true,
      body: {
        email: "adarmono@mail.com",
        password: "12345",
      },
    }).then((response) => {
      // const responseJson = response.json();
      const {
        jwt: { token },
      } = response.body;

      cy.request({
        method: "GET",
        url: "https://redaktur-backend.et.r.appspot.com/v1/draft-berita/67?version=12",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }).then((resp2) => {
        const totalVersion = resp2.body.total_version;

        cy.request({
          method: "GET",
          url: `https://redaktur-backend.et.r.appspot.com/v1/draft-berita/67?version=${totalVersion}`,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }).then((resp3) => {
          const version = resp3.body.draft_berita.id;
          cy.request({
            method: "POST",
            url: `https://redaktur-backend.et.r.appspot.com/v1/draft-berita/${version}`,
            // form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: {
              status: "reviewed",
              title: originalTitle,
              content: originalDesc,
            },
          }).then((resp) => {
            cy.visit("http://localhost:3000/auth/login?");
            // interceptor
            cy.intercept(
              "https://ta-aings-399219.uc.r.appspot.com/v1/draft?*"
            ).as("getDraft");

            cy.intercept(
              "https://ta-aings-399219.uc.r.appspot.com/v1/draft/67"
            ).as("monyet");

            // steps
            cy.get('input[placeholder="Username"').type("budi.w");
            cy.get('input[placeholder="Password"').type("budi123");
            cy.get("button")
              .contains(/^Masuk$/)
              .click();

            cy.wait("@getDraft");
            cy.visit("http://localhost:3000/draf/67");

            cy.wait("@monyet");

            // verify
            cy.get("button").contains("Komentar").click();
            cy.get("textarea").should("be.visible");
            cy.get("button").contains("Buat Komentar").should("be.visible");
            cy.get(".CardKomentar").should("exist");
          });
        });
      });
    });
  });

  it("User can add comments", () => {
    cy.request({
      method: "POST",
      url: `https://redaktur-backend.et.r.appspot.com/v1/auth/login/email`,
      // form: true,
      body: {
        email: "adarmono@mail.com",
        password: "12345",
      },
    }).then((response) => {
      // const responseJson = response.json();
      const {
        jwt: { token },
      } = response.body;

      cy.request({
        method: "GET",
        url: "https://redaktur-backend.et.r.appspot.com/v1/draft-berita/67?version=12",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }).then((resp2) => {
        const totalVersion = resp2.body.total_version;

        cy.request({
          method: "GET",
          url: `https://redaktur-backend.et.r.appspot.com/v1/draft-berita/67?version=${totalVersion}`,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }).then((resp3) => {
          const version = resp3.body.draft_berita.id;
          cy.request({
            method: "POST",
            url: `https://redaktur-backend.et.r.appspot.com/v1/draft-berita/${version}`,
            // form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: {
              status: "reviewed",
              title: originalTitle,
              content: originalDesc,
            },
          }).then((resp) => {
            cy.visit("http://localhost:3000/auth/login?");
            // interceptor
            cy.intercept(
              "https://ta-aings-399219.uc.r.appspot.com/v1/draft?*"
            ).as("getDraft");

            cy.intercept(
              "https://ta-aings-399219.uc.r.appspot.com/v1/draft/67"
            ).as("monyet");

            cy.intercept(
              "https://ta-aings-399219.uc.r.appspot.com/v1/comment/*"
            ).as("komentar");

            // steps
            cy.get('input[placeholder="Username"').type("budi.w");
            cy.get('input[placeholder="Password"').type("budi123");
            cy.get("button")
              .contains(/^Masuk$/)
              .click();

            cy.wait("@getDraft");
            cy.visit("http://localhost:3000/draf/67");

            cy.wait("@monyet");

            cy.get("button").contains("Komentar").click();
            cy.get("textarea").should("be.visible");
            cy.get("button").contains("Buat Komentar").should("be.visible");
            cy.get(".CardKomentar").should("exist");

            const now = Date.now();
            cy.get("textarea").type(`test comment ${now}`);
            cy.get("button").contains("Buat Komentar").click();

            cy.wait("@komentar", {
              timeout: 90_000,
            }).then((_) => {
              // verify
              cy.get("p").contains(`test comment ${now}`).should("exist");
            });
          });
        });
      });
    });
  });
});
