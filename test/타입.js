var assert = require('assert');

describe('타입', function(){
    it('명시적으로 number를 string으로 바꾸기', function(){
        let temp  = 2;
        temp = String(temp);
        assert.equal('string', typeof temp);
    });

    it('명시적으로 string를 number로 바꾸기', function(){
        var temp = "2"
        temp = Number(temp);
        assert.equal('number', typeof temp);
    });

    it('자동형변환을 이용한 숫자를 스트링으로 바꾸기', function(){
        var temp  = 2;
        temp += '';
        assert.equal('string', typeof temp);
    });

    it('자동형변환을 이용한 스트링을 숫자로 바꾸기', function(){
        var temp = "2"
        temp *= 1;
        assert.equal('number', typeof temp);
    });
});