var fs = require('fs');
var assert = require('assert');

describe('nodejs 전역모듈 fs', function () {
    /**
     * @see https://nodejs.org/dist/latest-v12.x/docs/api/fs.html
     */
    it('fs readFile', function () {
        // path는 프로젝트 루트 경로 기준
        fs.readFile('./test/test.txt', 'utf8', (error, data) => {
            assert.equal(data, "Hello");
        });
    });
});