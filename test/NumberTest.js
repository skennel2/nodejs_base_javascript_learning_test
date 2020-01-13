var assert = require("assert");

describe('Number', function(){
    it('toFix()', function () {
        var number = 12.39;
        assert.equal("12", number.toFixed(0));
        assert.equal("12.4", number.toFixed(1)); 
        assert.equal("12.39", number.toFixed(2));
        assert.equal("12.390", number.toFixed(3));
    });
});