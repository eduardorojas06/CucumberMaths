Feature: Cucumber Mathematics

  Scenario: Let’s eat cucumbers!
    Given I have 5 "cucumbers"
    When I eat 4 "cucumbers"
    Then I should have 1 "cucumbers"


  Scenario Outline: Let’s eat carrots!
    Given I have <amount> "carrots"
    When I eat <eat> "carrots"
    Then The result should be <expectedResult>
  Examples: 
    | amount | eat | expectedResult             |
    | 10     | 12  | "Not enough carrots to eat"|
    | 8      | 5   | "3"                        |


  Scenario: Let’s make a salad!
    Given I have 8 "cucumbers"
    And I have 5 "carrots"
    When I make a salad with 
    | vegetable | amount|
    | cucumbers | 3     |
    | carrots   | 2     |
    Then I should have 5 "cucumbers"
    And I should have 3 "carrots"
    And I should have 1 salad


