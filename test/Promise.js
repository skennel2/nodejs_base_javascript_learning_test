var assert = require("assert");
var md = require("./module/testModule");

describe('Promise 테스트', function(){
    it('Promise 다루기', function () {
        
        function returnPromise(value){
            return new Promise(function(resolve, reject){
                resolve(value);
            }).then(function(value){
                return value + 1;
            });
        }

        returnPromise(10).then(function(value){
            assert.equal(11, value);
        });
        
    });
});