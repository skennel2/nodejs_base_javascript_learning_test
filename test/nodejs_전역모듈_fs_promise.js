var fsp = require('fs/promises');
var assert = require('assert');

describe('nodejs 전역모듈 fs, promise 버전', () => {
    it('readFile await', async () => {
        const file = await fsp.readFile('./test/test.txt');

        console.log(file)

        assert.ok(file)
    })
})
