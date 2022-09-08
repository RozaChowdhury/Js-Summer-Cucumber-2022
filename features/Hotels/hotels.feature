Feature: Hotels

    Scenario: Question 1
        Given I am on hotels landing page
            When I click on Learn about Hotels.com Rewards
            Then I verify Hotels Rewards opened in a new window
            When I click on Join Now
            Then I verify form is blank
            Then I verify Continue button is not enabled

    # npx wdio wdio.conf.js --spec ./features/Hotels/hotels.feature
    # npx wdio wdio.conf.js --spec ./features/Darksky/darksky.feature