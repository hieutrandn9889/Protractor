var element_Page = require('../commons/elementPage.js');

var confirm_page = function () {
    this.getConfirmPage = function(){
      return element_Page.getTitle();
    };
};

module.exports = new confirm_page();