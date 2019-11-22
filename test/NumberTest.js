var assert = require("assert");

describe('Number', function(){
    it('toFix()', function () {
        var n = 12.39;
        assert.equal("12", n.toFixed(0));
        assert.equal("12.4", n.toFixed(1)); 
        assert.equal("12.39", n.toFixed(2));
        assert.equal("12.390", n.toFixed(3));
    });
});