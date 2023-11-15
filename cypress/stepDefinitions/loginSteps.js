import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { Variables } from "stepDefinitions/stepAtoms.js"

Given('I navigate to url', () => {
    cy.visit(Variables.URL.URL1);
})

When ('I enter login credentials', () => {
    //fill username
    //fill password
    //click login button
})
