exports.config = {
  output: './output',
  helpers: {
    TestCafe: {
      url: 'https://avaliacao.dextra.tech/',
      browser: 'chrome',
      show: true
    }
  },
  include: {
    I: './steps_file.js',
    homePage: './pages/home.js'
  },
  mocha: {},
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