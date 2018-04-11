describe('angularjs homepage', function () {

  beforeEach(function () {
    browser.get('http://www.thetestroom.com/jswebapp/');
  });

  afterEach(function () {
    console.log("Finished");
  });

  it('test correct page', function () {
    expect(browser.getCurrentUrl()).toContain("jswebapp");
    expect(browser.getCurrentUrl()).toEqual("http://www.thetestroom.com/jswebapp/");
    (browser.getCurrentUrl()).then(function (text) {
      console.log(text);
    });
  });

  describe('should generate correct text', function () {
    var textMss;
    beforeEach(function () {
      textMss = "hello123";
    });

    it('test correct test', function () {

      var inputMss = element(by.model("person.name"));
      var getMess = element(by.binding("person.name"))

      inputMss.sendKeys(textMss);
      getMess.getText().then(function (text) {
        expect(text).toEqual(textMss);
        console.log(text);
      });
    });
  });

  it('test drop', function () {
    var continueButton = element(by.buttonText("CONTINUE"));
    var dropValue = element(by.model("animal"));
    var partial = element(by.partialButtonText("CONT"));
    continueButton.click();
    dropValue.$('[value="1"]').click();
    partial.click();
  });

  describe('should generate items length', function () {
    var itemsLength;
    beforeEach(function () {
      itemsLength = 4;
    });

    it('test content in drop', function () {
      var continueButton = element(by.buttonText("CONTINUE"));
      continueButton.click();
      element.all(by.css(".ng-pristine option")).then(function (items) {
        expect(items.length).toBe(itemsLength);
        expect(items[1].getText()).toBe("George the Turtle");
      });
      continueButton.click();
    });
  });

  it("check css", function () {
    //css tag
    element(by.css('input')).sendKeys("test");

    // css class
    element(by.css('.ng-binding')).getText().then(function (text) {
      console.log(text);
    });

    // css id
    element(by.css('#continue_button')).click();

    // css chaining
    element(by.css('button#continue_button')).click();

    // css chaining
    element(by.css('h1#title')).getText().then(function (text) {
      console.log(text);
    });
    //css child nodes
    element(by.css('table td a')).getText().then(function (text) {
      console.log(text);
    });
    // css attributes
    element(by.css('h1[id="title"]')).getText().then(function (text) {
      console.log(text);
    });
  });
});
