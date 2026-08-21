@Execute
Feature: Launch and Navigate Application URL

  Scenario: Navigate Application URL
    # Given I launch chromium browser
    When I navigate application url
    Then I find login page