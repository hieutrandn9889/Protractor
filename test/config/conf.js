// // An example configuration file.
// exports.config = {
//   directConnect: true,

//   // Capabilities to be passed to the webdriver instance.
//   capabilities: {
//     'browserName': 'chrome'
//   },

//   // Framework to use. Jasmine is recommended.
//   framework: 'jasmine',

//   // Spec patterns are relative to the current working directory when
//   // protractor is called.
//   specs: ['example_spec.js'],pageObjectPattern.js


//   // Options to be passed to Jasmine.
//   jasmineNodeOpts: {
//     defaultTimeoutInterval: 30000
//   }
// };

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['../spec/testcases/pageObject_Pattern.js'],
  capabilities: {
    'browserName': 'chrome'
  },
  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',
  //   // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};