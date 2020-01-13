var os = require('os');
var url = require('url');
var util = require('util');
var assert = require('assert');

describe('nodejs 전역모듈', function () {
    /**
     * @see https://nodejs.org/dist/latest-v12.x/docs/api/os.html
     */
    it('os', function () {
        console.log(os.hostname());
        console.log(os.type());
    });

    /**
     * @see https://nodejs.org/dist/latest-v12.x/docs/api/url.html
     */
    it('url', function () {
        let naver = url.parse("http://www.naver.com/?param=123", true);
        assert.equal(naver.host, "www.naver.com");
        assert.equal(naver.query.param, '123');
        assert.equal(naver.slashes, true);
        assert.equal(naver.port, null);

        naver.host = 'www.naverHome.com';
        let naverFormat = url.format(naver, {
            unicode: true
        });
        assert.equal(naverFormat, 'http://www.naverHome.com/?param=123');
    });

    /**
     * @see https://nodejs.org/dist/latest-v12.x/docs/api/util.html
     */
    it('util', function () {
        // @deprecated
        assert.equal(util.isNullOrUndefined(null), true);
    });
});