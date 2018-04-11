var element_Page = require('../commons/elementPage.js');
var animal_page = function () {
    this.seclectAnimalPage = function(index){
         element_Page.selectAnimal(index);
    };
     this.clickContinueAnimalPage = function(){
         element_Page.clickButton();
    };
};

module.exports = new animal_page();