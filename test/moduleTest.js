var assert = require("assert");
var md = require("./module/testModule");

describe('모듈 테스트', function(){
    it('module.js 모듈 불러오기 테스트', function () {
        assert.equal(10, md.someModule.someValue);
    });
})