var assert = require("assert");

/**
 * nodejs 전역 함수인 require로 exports로 내보내기한 모듈을 가져올 수 있다.
 */
var md = require("./module/testModule");

describe('모듈 테스트', function () {
    it('module.js 모듈 불러오기 테스트', function () {
        assert.equal(10, md.someModule.someValue);
    });
});