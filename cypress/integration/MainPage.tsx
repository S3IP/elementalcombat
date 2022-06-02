///<reference types="cypress" />

describe("renders the page", () => {
    it("renders correctly", () => {
        cy.visit("/");
        cy.get("div").should('have.class', "App");
    })
})

//test@gmail.com
//Testing1