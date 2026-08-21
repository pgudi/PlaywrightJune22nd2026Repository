@Execute
Feature: Login with Valid Credentails
  Scenario: login functionality with valid username and password
    # Given I launch chromium browser
    When I navigate application url
    Then I find login page
    When I enter username in username text field
    And I enter password in password text field
    And I click on singin button in login page
    Then I find the home page