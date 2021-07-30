const { I, pesquisaPage } = inject();
const faker = require('faker');

Then('the user views the Teste page', () => {
    I.see('Seja bem vindo ao nosso teste!');
    I.say(faker.name.findName());
});

Then('the user views the success message recording the research data', () => {
    I.see(pesquisaPage.successMessage.message);
});
