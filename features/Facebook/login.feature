Feature: Login

    Scenario: Verify login fields are enabled by default
        Given I am on facebook landing page
        Then I verify login username field is enabled
        And I verify login password field is enabled
        And I verify login button field is enabled

 #   Scenario: Verify user gets error for invalid credentials
 #       Given I am on facebook landing page
 #       When I enter "@%$^^^" as username
 #       And I enter "invalid pwd" as password
 #       And I click login button
 #       Then I verify error is displayed







