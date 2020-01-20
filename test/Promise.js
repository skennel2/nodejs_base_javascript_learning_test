var assert = require("assert");
var md = require("./module/testModule");

describe('Promise 테스트', () => {
    it('Promise 다루기', () => {

        let returnPromise = (value) => {
            return new Promise(function (resolve, reject) {
                resolve(value);
            }).then(function (value) {
                return value + 1;
            });
        }

        returnPromise(10).then((value) => {
            assert.equal(11, value);
        });

    });
});