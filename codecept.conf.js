exports.config = {
  output: './output',
  helpers: {
    TestCafe: {
      url: 'https://avaliacao.dextra.tech/',
      browser: 'chrome',
      show: false
    },
    Mochawesome: {
      uniqueScreenshotNames: "true"
    }
  },
  include: {
    I: './steps_file.js',
    homePage: './pages/home.js',
    pesquisaPage: './pages/pesquisa.js'
  },
  mocha: {
    "reporterOptions": {
      "reportDir": "report"
    }
  },
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/givenSteps.js',
      './step_definitions/whenSteps.js',
      './step_definitions/thenSteps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    }
  },
  tests: './testCases/*_test.js',
  name: 'testCafeWCodecept'
}