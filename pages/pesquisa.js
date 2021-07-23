const { I } = inject();

module.exports = {
    nameField: 'input[placeholder="Nome"]',
    lastNameField: 'input[placeholder="Sobrenome"]',
    emailField: 'input[placeholder="Email"]',
    confirmEmailField: 'input[placeholder="Confirmar Email"]',
    telefoneField: '//label[text()="Telefone"]/../input',
    age: [
        '//label[text()="18 - 20"]/../input',
        '//label[text()="21 - 30"]/../input',
        '//label[text()="31 - 40"]/../input',
        '//label[text()="41 - 50"]/../input',
        '//label[text()="50+"]/../input'
    ],
    ageFirstOption: '//label[text()="18 - 20"]/../input',
    ageSecondOption: '//label[text()="21 - 30"]/../input',
    ageThirdOption: '//label[text()="31 - 40"]/../input',
    ageFourthOption: '//label[text()="41 - 50"]/../input',
    ageFifthOption: '//label[text()="50+"]/../input',
}
