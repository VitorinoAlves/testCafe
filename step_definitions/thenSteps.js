const { I, pesquisaPage } = inject();
const faker = require('faker');

Then('the user views the Teste page', () => {
    I.see('Seja bem vindo ao nosso teste!');
    I.say(faker.name.findName());
});

Then('the user views the success message recording the research data', () => {
    I.see(pesquisaPage.successMessage.message);
});

Then('the user views an alert message about the different emails', () => {
    I.see('Field values do not match');
});

Then('the user views an alert message about the invalid email', () => {
    I.see('Please enter a valid email address.');
});


