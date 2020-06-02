const testFunction = require('../index.js');

describe('App', function () {

    it('testing...', function () {
        expect(testFunction(1)).toBe(false);
        expect(testFunction(2)).toBe(true);
        expect(testFunction(3)).toBe(true);
        expect(testFunction(4)).toBe(false);
        expect(testFunction(5)).toBe(true);
        expect(testFunction(11)).toBe(true);
        expect(testFunction(15)).toBe(false);
        expect(testFunction(191)).toBe(true);
        expect(testFunction(191)).toBe(true);
        expect(testFunction(200)).toBe(false);
        expect(testFunction(199)).toBe(true);
    })
})
