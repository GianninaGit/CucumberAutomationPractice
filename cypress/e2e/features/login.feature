Feature: Login

Scenario: Login user with correct email and password

Given I navigate to url
When I enter login credentials
Then I should be logged in
