Feature('Answer survey');

Scenario('Send the survey', ({ I }) => {
    I.amOnPage('/');
    I.click('a[href="https://avaliacao.dextra.tech/pesquisa/"]');
});
