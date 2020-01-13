var assert = require('assert');

describe('연산자 테스트', function () {
    it('==, === 키워드 비교', function () {
        assert.equal(true, '1' == 1);
        assert.equal(false, '1' === 1);

        assert.equal(true, undefined == null); // true
        assert.equal(false, undefined === null); // false

        assert.equal(false, '' == null); // false
        assert.equal(false, '' === null); // false
    });
});