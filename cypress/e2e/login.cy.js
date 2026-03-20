/// <reference types="cypress" />
import credetials from "../fixtures/example.json";

describe("Test cases for login", () => {
  it("login with valid credentials", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
    cy.get("input[name='username']").type(credetials.username);
    cy.get("input[name='password']").type(credetials.password);
    cy.get("button[type='submit']").click();
    cy.title().should("eq", "OrangeHRM");
    // #Id
    // .class
    // input[tagname]
    // xpath
  });

  it("login with valid credentials with custom command", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
    cy.login(credetials.username, credetials.password);
    cy.title().should("eq", "OrangeHRM");
  });

  it("login with baseurl config", () => {
    cy.visit("/web/index.php/auth/login");
    cy.login(credetials.username, credetials.password);
    cy.title().should("eq", "OrangeHRM");
  });
});
