const { I } = inject();

Then('the user views the Teste page', () => {
    I.see('Seja bem vindo ao nosso teste!');
});
