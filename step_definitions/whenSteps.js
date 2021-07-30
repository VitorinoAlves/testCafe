const { I, homePage, pesquisaPage } = inject();
const faker = require('faker');
faker.locale = "pt_BR";

When('the user selects menu option Teste', () => {
    I.click(homePage.mainMenu.teste);
});

When('the user fulfill the form', async () => {
    I.fillField(pesquisaPage.nameField, faker.name.firstName());
    I.fillField(pesquisaPage.lastNameField, faker.name.lastName());
    const email = faker.internet.email().toLowerCase();
    I.fillField(pesquisaPage.emailField, email);
    I.fillField(pesquisaPage.confirmEmailField, email);
    I.fillField(pesquisaPage.telefoneField, faker.phone.phoneNumber());
    I.checkOption(pesquisaPage.age[faker.datatype.number({ 'min': 0, 'max': 4 })]);
    I.click(pesquisaPage.tempoExperiancia);
    I.click(pesquisaPage.tempoExperienciaOpcoes[faker.datatype.number({ 'min': 0, 'max': 2 })]);
    for (let i = 0; i < faker.datatype.number({ 'min': 1, 'max': 4 }); i++) {
        I.click(pesquisaPage.tiposTestes[faker.datatype.number({ 'min': 0, 'max': 4 })])
    }
    I.fillField(pesquisaPage.linProgramacao, faker.lorem.sentence());
    const randomNumber = faker.datatype.number({ 'min': 1, 'max': 10 });
    await I.executeScript((rangeLocator, value) => {
        var range = document.querySelector(rangeLocator);
        range.setAttribute("value", value);
    }, pesquisaPage.xpRange, randomNumber);
});

When('send the research', () => {
    I.click(pesquisaPage.sendButton);
});

When('the user fulfill the form with different email address', async () => {
    I.fillField(pesquisaPage.nameField, faker.name.firstName());
    I.fillField(pesquisaPage.lastNameField, faker.name.lastName());
    I.fillField(pesquisaPage.emailField, faker.internet.email());
    I.fillField(pesquisaPage.confirmEmailField, faker.internet.email());
    I.fillField(pesquisaPage.telefoneField, faker.phone.phoneNumber());
    I.checkOption(pesquisaPage.age[faker.datatype.number({ 'min': 0, 'max': 4 })]);
    I.click(pesquisaPage.tempoExperiancia);
    I.click(pesquisaPage.tempoExperienciaOpcoes[faker.datatype.number({ 'min': 0, 'max': 2 })]);
    for (let i = 0; i < faker.datatype.number({ 'min': 1, 'max': 4 }); i++) {
        I.click(pesquisaPage.tiposTestes[faker.datatype.number({ 'min': 0, 'max': 4 })])
    }
    I.fillField(pesquisaPage.linProgramacao, faker.lorem.sentence());
    const randomNumber = faker.datatype.number({ 'min': 1, 'max': 10 });
    await I.executeScript((rangeLocator, value) => {
        var range = document.querySelector(rangeLocator);
        range.setAttribute("value", value);
    }, pesquisaPage.xpRange, randomNumber);
});

When('the user fulfill the form with an invalid email address {string}', async (email) => {
    I.fillField(pesquisaPage.nameField, faker.name.firstName());
    I.fillField(pesquisaPage.lastNameField, faker.name.lastName());
    I.fillField(pesquisaPage.emailField, email);
    I.fillField(pesquisaPage.confirmEmailField, email);
    I.fillField(pesquisaPage.telefoneField, faker.phone.phoneNumber());
    I.checkOption(pesquisaPage.age[faker.datatype.number({ 'min': 0, 'max': 4 })]);
    I.click(pesquisaPage.tempoExperiancia);
    I.click(pesquisaPage.tempoExperienciaOpcoes[faker.datatype.number({ 'min': 0, 'max': 2 })]);
    for (let i = 0; i < faker.datatype.number({ 'min': 1, 'max': 4 }); i++) {
        I.click(pesquisaPage.tiposTestes[faker.datatype.number({ 'min': 0, 'max': 4 })])
    }
    I.fillField(pesquisaPage.linProgramacao, faker.lorem.sentence());
    const randomNumber = faker.datatype.number({ 'min': 1, 'max': 10 });
    await I.executeScript((rangeLocator, value) => {
        var range = document.querySelector(rangeLocator);
        range.setAttribute("value", value);
    }, pesquisaPage.xpRange, randomNumber);
});

When('the user fulfill the form lefting the {string} empty', async (field) => {
    const email = faker.internet.email().toLowerCase();
    switch (field) {
        case 'Nome':
            I.fillField(pesquisaPage.lastNameField, faker.name.lastName());
            I.fillField(pesquisaPage.emailField, email);
            I.fillField(pesquisaPage.confirmEmailField, email);
            break;
        case 'Sobrenome':
            I.fillField(pesquisaPage.nameField, faker.name.firstName());
            I.fillField(pesquisaPage.emailField, email);
            I.fillField(pesquisaPage.confirmEmailField, email);
            break;
        case 'Email':
            I.fillField(pesquisaPage.nameField, faker.name.firstName());
            I.fillField(pesquisaPage.lastNameField, faker.name.lastName());
            I.fillField(pesquisaPage.confirmEmailField, email);
            break
        default:
            I.fillField(pesquisaPage.nameField, faker.name.firstName());
            I.fillField(pesquisaPage.lastNameField, faker.name.lastName());
            I.fillField(pesquisaPage.emailField, email);
    }

    I.fillField(pesquisaPage.telefoneField, faker.phone.phoneNumber());
    I.checkOption(pesquisaPage.age[faker.datatype.number({ 'min': 0, 'max': 4 })]);
    I.click(pesquisaPage.tempoExperiancia);
    I.click(pesquisaPage.tempoExperienciaOpcoes[faker.datatype.number({ 'min': 0, 'max': 2 })]);
    for (let i = 0; i < faker.datatype.number({ 'min': 1, 'max': 4 }); i++) {
        I.click(pesquisaPage.tiposTestes[faker.datatype.number({ 'min': 0, 'max': 4 })])
    }
    I.fillField(pesquisaPage.linProgramacao, faker.lorem.sentence());
    const randomNumber = faker.datatype.number({ 'min': 1, 'max': 10 });
    await I.executeScript((rangeLocator, value) => {
        var range = document.querySelector(rangeLocator);
        range.setAttribute("value", value);
    }, pesquisaPage.xpRange, randomNumber);
});
