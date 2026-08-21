@Execute
Feature: Login with Invalid Credentails

  Scenario: login functionality with invalid username and password
    # Given I launch chromium browser
    When I navigate application url
    Then I find login page
    When I enter invalid username in username text field
    And I enter invalid password in password text field
    And I click on singin button in login page
    Then I find error message Invalid username or password