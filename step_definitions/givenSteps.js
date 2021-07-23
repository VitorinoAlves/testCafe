const { I, homePage } = inject();
const config = require('config');

Given('a user on the home page', () => {
    I.amOnPage('/');
});

Given('a user on the pesquisa page', () => {
    I.amOnPage('/');
    I.click(homePage.mainMenu.pesquisa);
});
