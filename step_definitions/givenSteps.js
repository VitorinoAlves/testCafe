const { I } = inject();
const config = require('config');

Given('a user on the home page', () => {
    I.amOnPage('/');
});
