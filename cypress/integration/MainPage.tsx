///<reference types="cypress" />

describe("renders the page", () => {
    it("renders correctly", () => {
        cy.visit("/");
        cy.get("div").should('have.class', "App");
    })
})

describe("mock login process", () => {
    it("logs in correctly", () => {
        cy.get(".justify-contend-end > .btn").click();
        
    })
})

//
//test@gmail.com
//Testing1