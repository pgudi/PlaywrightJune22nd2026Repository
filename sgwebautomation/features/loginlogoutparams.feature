@Execute
Feature: Login with Parametrizaton of Valid Credentails
 Scenario Outline: login functionality with Parametrizaton of valid username and password
    # Given I launch chromium browser
    When I navigate application url
    Then I find login page
    When I enter "<username>" in username text field
    And I enter "<password>" in password text field
    And I click on singin button in login page
    Then I find the home page
    When I click on logout link
    Then I find login page 
Examples:
    | username | password | 
    | pgudi  | pgudi  | 
    | pgudi  | pgudi  | 
    | pgudi  | pgudi  | 