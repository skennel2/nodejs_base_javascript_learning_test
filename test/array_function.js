var assert = require('assert');

describe('javascript array function', function () {
    it('some 함수로 조건에 만족하는 아이템이 존재하는지 검사', function () {
        const arr = [1, 2, 3, 4, 5, 6, 7];

        const hasOver10 = arr.some(i => i > 10);
        const hasUnder10 = arr.some(i => i < 10);

        assert.equal(false, hasOver10);
        assert.equal(true, hasUnder10);
    });

    it('every 함수로 모든 아이템이 조건에 만족하는지 검사', function () {
        const arr = [1, 2, 3, 4, 5, 6, 7];

        const everyOver10 = arr.every(i => i > 10);
        const everyUnder10 = arr.every(i => i < 10);

        assert.equal(false, everyOver10);
        assert.equal(true, everyUnder10);
    });
});