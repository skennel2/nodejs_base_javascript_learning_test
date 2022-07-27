var fs = require('fs');
var assert = require('assert');

describe('nodejs 전역모듈 fs', function () {
    it('fs readFile', function () {
        fs.readFile('./test/test.txt', 'utf8', (error, data) => {
            assert.equal(data, "Hello");
        });
    });
});