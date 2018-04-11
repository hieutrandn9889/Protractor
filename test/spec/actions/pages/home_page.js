var element_Page = require('../commons/elementPage.js');

var home_page = function () {
    this.enterFieldValue = function (value) {
        element_Page.inputTexbox(value);
    };
    this.getDynamicText = function () {
        return element_Page.compareText();
        
    };
    this.clickContinue = function () {
        element_Page.clickButton();
        // return require('../example/animal_page.js');
    };
};
module.exports = new home_page();