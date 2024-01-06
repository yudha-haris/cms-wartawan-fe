/**
 * - News Draft Detail Spec
 *   - User can access News Draft Detail page
 *   - User can edit news content
 *   - User can send news to editor
 *   - User can edit returned news content
 *   - User can send returned news content to editor
 */

import {
  originalTitle,
  originalDesc,
} from "../utils/news_draft_detail_test_util";

describe("News Draft Detail Spec", () => {
  it("User can access News Draft Detail page", () => {
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
              status: "draft",
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
            cy.get("p").contains("Melihat Draf Berita");
          });
        });
      });
    });
  });

  it("User can edit news content", () => {
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
              status: "draft",
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
              "https://ta-aings-399219.uc.r.appspot.com/v1/draft/*"
            ).as("edit");

            // steps
            cy.get('input[placeholder="Username"').type("budi.w");
            cy.get('input[placeholder="Password"').type("budi123");
            cy.get("button")
              .contains(/^Masuk$/)
              .click();

            cy.wait("@getDraft");
            cy.visit("http://localhost:3000/draf/67");

            cy.wait("@monyet");

            cy.get("button").contains("Ubah Draf").click();
            cy.get(".prose").first().type("defg");
            cy.get("button").contains("Simpan Perubahan").click();

            cy.wait("@edit");

            // verify
            cy.get("p").contains("Melihat Draf Berita");
          });
        });
      });
    });
  });

  it("User can send news to editor", () => {
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
              status: "draft",
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
              "https://ta-aings-399219.uc.r.appspot.com/v1/draft/*"
            ).as("edit");

            // steps
            cy.get('input[placeholder="Username"').type("budi.w");
            cy.get('input[placeholder="Password"').type("budi123");
            cy.get("button")
              .contains(/^Masuk$/)
              .click();

            cy.wait("@getDraft");
            cy.visit("http://localhost:3000/draf/67");

            cy.wait("@monyet");

            cy.get("button").contains("Kirim Redaktur").click();

            cy.wait("@edit");

            // verify
            cy.get("p").contains("Dikirim ke Redaktur");
          });
        });
      });
    });
  });

  it("User can edit returned news content", () => {
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
              "https://ta-aings-399219.uc.r.appspot.com/v1/draft/*"
            ).as("edit");

            // steps
            cy.get('input[placeholder="Username"').type("budi.w");
            cy.get('input[placeholder="Password"').type("budi123");
            cy.get("button")
              .contains(/^Masuk$/)
              .click();

            cy.wait("@getDraft");
            cy.visit("http://localhost:3000/draf/67");

            cy.wait("@monyet");

            cy.get("button").contains("Ubah Kembali Draf Berita").click();

            cy.wait(1000);
            cy.get(".prose").first().type("defg", { force: true });
            cy.get("button").contains("Simpan Perubahan").click();

            cy.wait("@edit");

            // verify
            cy.get("p").contains("Melihat Draf Berita");
          });
        });
      });
    });
  });

  it("User can send returned news content to editor", () => {
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
              "https://ta-aings-399219.uc.r.appspot.com/v1/draft/*"
            ).as("edit");

            // steps
            cy.get('input[placeholder="Username"').type("budi.w");
            cy.get('input[placeholder="Password"').type("budi123");
            cy.get("button")
              .contains(/^Masuk$/)
              .click();

            cy.wait("@getDraft");
            cy.visit("http://localhost:3000/draf/67");

            cy.wait("@monyet");

            cy.get("button").contains("Kirim Ulang ke Redaktur").click();

            cy.wait("@edit");

            // verify
            cy.get("p").contains("Dikirim ke Redaktur");
          });
        });
      });
    });
  });
});
