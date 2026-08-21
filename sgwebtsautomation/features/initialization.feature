Feature: Launch and Navigate Application URL

  Scenario: Verify Launch browser and Navigate URL
    Given I launch chromium browser
    When I navigate application url
    Then I find the login page