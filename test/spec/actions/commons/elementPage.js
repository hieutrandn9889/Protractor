var UI_textPage = require('../../interface/UI_page.js');

var element_Page = function () {

    this.inputTexbox = function (value) {
        element(by.model(UI_textPage.person_name)).sendKeys(value);
    };

    this.compareText = function () {
        return element(by.binding(UI_textPage.person_name)).getText();
    };

    this.selectAnimal = function (index) {
        element(by.model(UI_textPage.animal_name)).$('[value="'+ index + '"]').click();
    };

    this.clickButton = function () {
        element(by.buttonText(UI_textPage.continue_name)).click();
    };

    this.getTitle = function () {
       return element(by.css('h1')).getText();
    };

};
module.exports = new element_Page();