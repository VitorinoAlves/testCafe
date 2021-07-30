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
    tempoExperiancia: '.choices__inner',
    tempoExperienciaOpcoes: [
        'div[data-id="2"]',
        'div[data-id="3"]',
        'div[data-id="4"]'
    ],
    tiposTestes: [
        '[value="Funcionais Web"]',
        '[value="Funcionais Mobile"]',
        '[value="API"]',
        '[value="Unitário"]',
        '[value="CI/CD"]'
    ],
    linProgramacao: 'input[placeholder="Ex.: Java, JavaScript, Python ..."]',
    xpRange: 'input[type="range"]',
    xpSelectedValue: 'div[data-hint="Selected Value: {value}"],b',
    sendButton: 'button[type="submit"]',
    successMessage: {
        locator: '//p',
        message: 'Obrigado por responder nossa pesquisa. Agradecemos sua participação!'
    }
}
