Feature: Business rules
  In order to achieve my goals
  As a persona
  I want to be able to interact with a system

  @important
  Scenario: Access the test page 
    Given a user on the home page
    When the user selects menu option Teste
    Then the user views the Teste page

  @automated
  Scenario: Send the research with valid data
    Given a user on the pesquisa page
    When the user fulfill the form
    And send the research
    Then the user views the success message recording the research data

  @automated
  Scenario Outline: Send the research with empty mandatory fields 
    Given a user on the pesquisa page
    When the user fulfill the form lefting the "<field>" empty
    And send the research
    Then the user views an alert message about the empty mandatory fields
    Examples:
      | field             |
      | Nome              |
      | Sobrenome         |
      | Email             |
      | Confirmar Email   |

  @automated
  Scenario Outline: Send the research with an invalid email address 
    Given a user on the pesquisa page
    When the user fulfill the form with an invalid email address "<email>"
    And send the research
    Then the user views an alert message about the invalid email
    Examples:
      | email                       |
      | teste@.com                  |
      | teste@test                  |
      | teste.gmail.com             |

  @automated
  Scenario: Send the research with different email address 
    Given a user on the pesquisa page
    When the user fulfill the form with different email address
    And send the research
    Then the user views an alert message about the different emails
