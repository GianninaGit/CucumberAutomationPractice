import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { Variables } from "stepDefinitions/stepAtoms.js"

Given('I navigate to url', () => {
    cy.visit(Variables.URL.URL1);
})

When ('I create my new user', () => {
    //go to SignUp/Login button
    cy.get('a[href="/login]').click();
    cy.contains('New User Signup!').should(be.visible);
    //fill username
    //fill password
    //click login button
})

