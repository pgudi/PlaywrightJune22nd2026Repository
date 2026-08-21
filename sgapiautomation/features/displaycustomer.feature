Feature: Display Existing Customer

  Scenario: Display Existing Customer uisng GET HTTP Method
    Given I authenticate user to generate Token
    When I provide GET HTTP Method for Customer and get the Response
    When I display response in console
    Then I get the 200 status Code