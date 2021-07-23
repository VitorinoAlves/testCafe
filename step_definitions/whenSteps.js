const { I, homePage, pesquisaPage } = inject();
const faker = require('faker');
faker.locale = "pt_BR";

When('the user selects menu option Teste', () => {
    I.click(homePage.mainMenu.teste);
});

When('the user fulfill the form', () => {
    I.fillField(pesquisaPage.nameField, faker.name.firstName());
    I.fillField(pesquisaPage.lastNameField, faker.name.lastName());
    const email = faker.internet.email();
    I.fillField(pesquisaPage.emailField, email);
    I.fillField(pesquisaPage.confirmEmailField, email);
    I.fillField(pesquisaPage.telefoneField, faker.phone.phoneNumber());
    I.checkOption(pesquisaPage.age[faker.datatype.number({ 'min': 0, 'max': 4 })]);
});

When('send the research', () => {

});
