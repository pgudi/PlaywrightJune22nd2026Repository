@Execute
Feature: Customer with Create and Delete functionality
  Scenario: Customer functionality with Create and Delete operations
    # Given I launch chromium browser
    When I navigate application url
    Then I find login page
    When I enter username in username text field
    And I enter password in password text field
    And I click on singin button in login page
    Then I find the home page
    When I click on customers menu
    Then I find add customers button
    When I click on add customers button
    Then I find add customers form
    When I enter customername in customer name text field
    When I enter customeremail in customer emailid text field
    When I enter customerlocation in customer location text field
    When I enter customerdescription in customer description text field
    When I click on save button in create customer page
    Then I find newly created customer
    When I delete newly created customer
    Then I do not find newly created customer
    When I click on logout link
    Then I find login page 