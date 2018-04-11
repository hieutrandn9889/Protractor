var mathUtils = require('../../app/scripts/Math');

describe('HelloWorld', function () {
    var num1, num2, result;

    it ('add', function () {
        //given
        num1 = 1;
        num2 = 10;

        // when
        result = mathUtils.add(num1, num2);

        // then
        expect(result).toEqual(11);
    });

    fdescribe('HelloWorld', function () {

        fit ('divide', function () {
            //given
            num1 = 10;
            num2 = 2;

            // when
            result = mathUtils.divide(num1, num2);

            // then
            expect(result).toEqual(5);
        });
        it ('minus', function () {
            //given
            num1 = 10;
            num2 = 2;

            // when
            result = mathUtils.minus(num1, num2);

            // then
            expect(result).toEqual(8);
        });
        it ('multiply', function () {
            //given
            num1 = 10;
            num2 = 2;

            // when
            result = mathUtils.multiply(num1, num2);

            // then
            expect(result).toEqual(20);
        });
    });

});