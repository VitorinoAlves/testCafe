const { I, homePage } = inject();

When('the user selects menu option Teste', () => {
    I.click(homePage.mainMenu.teste);
});
