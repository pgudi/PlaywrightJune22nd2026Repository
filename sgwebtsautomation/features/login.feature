Feature: Login Functionality

  Scenario: Validate Login Functionality
    Given I launch chromium browser
    When I navigate application url
    Then I find the login page
    When I enter username in username text field
    When I enter password in password text field
    When I clcik signin button
    Then I find home page