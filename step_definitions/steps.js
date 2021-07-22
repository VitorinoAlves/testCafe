const { I } = inject();
// Add in your custom step files

Given('I have a defined step', () => {
  I.amOnPage('/');
  I.click('a[href="https://avaliacao.dextra.tech/pesquisa/"]');
});
