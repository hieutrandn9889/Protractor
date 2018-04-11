var util = require('util');
describe('angularjs homepage', function () {

    beforeEach(function () {
        browser.get('http://www.thetestroom.com/jswebapp/');
    });

    afterEach(function () {
        console.log("Finished");
    });
    describe('should generate correct text', function () {
        var textMss;
        beforeEach(function () {
            textMss = "hello123";
        });

        xit('test correct test', function () {

            var inputMss = element(by.model("person.name"));
            var getMess = element(by.binding("person.name"))
            var continueButton = element(by.buttonText("CONTINUE"));
            var dropValue = element(by.model("animal"));
            var partial = element(by.partialButtonText("CONT"));


            // input hello123
            inputMss.sendKeys(textMss);
            getMess.getText().then(function (text) {
                expect(text).toEqual(textMss);
                console.log(text);
            });
            // drop and animal
            continueButton.click();
            dropValue.$('[value="2"]').click();
            partial.click();

            //compare
            var thankYouText = element(by.css('h1')).getText();
            expect(thankYouText).toEqual('Thank you');
        });

        var home_page = require('../actions/pages/home_page.js');
        var animal_page = require('../actions/pages/animal_page.js');
        var confirm_page = require('../actions/pages/confirm_page.js');
        it('test page object model', function () {

            // home page
            home_page.enterFieldValue('Hello123');
            var getHomePageText = home_page.getDynamicText();
            expect(getHomePageText).toBe('Hello123');
            home_page.clickContinue();
            browser.waitForAngular();
            //animal page
            animal_page.seclectAnimalPage(2);
            animal_page.clickContinueAnimalPage();

            // confirm page
           var getTitleConfrimPage = confirm_page.getConfirmPage();
            expect(getTitleConfrimPage).toEqual('Thank you');
        });

    });
});
