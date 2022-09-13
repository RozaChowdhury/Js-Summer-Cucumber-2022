Feature: Darksky
    Scenario: Question 2
        Given I am on darksky landing page
        Then I verify timeline has 12 data point with 2 hour gap from current hour

        # npx wdio wdio.conf.js --spec ./features/Darksky/darksky.feature

     Scenario: Question 3
        Given I am on darksky landing page
        When I scroll to Today's timeline and click on add button
        Then I verify minTemp on and in Today's timeline is same
        Then I verify maxTemp on and in Today's timeline is same

