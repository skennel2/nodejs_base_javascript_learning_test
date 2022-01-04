var assert = require('assert');
var path = require('path');

describe('nodejs 전역 요소 path', function () {
    it('window vs posix', function () {
        // 아래 결과는 실행하는 운영체제에 따라 다르게 해석된다.
        // 참고로 basename은 경로의 마지막을 리턴하는 함수
        const win32BaseTestPath = 'C:\\temp\\myfile.html'
        const baseName = path.basename(win32BaseTestPath)

        const win32BaseName = path.win32.basename(win32BaseTestPath)
        const posixBaseName = path.posix.basename(win32BaseTestPath)

        assert.equal(win32BaseName, 'myfile.html');
        assert.equal(posixBaseName, 'C:\\temp\\myfile.html');
    });

    it('delimeter', function () {
        // 경로 구분자를 리턴, 윈도우와 포식스의 구분자가 다름에 유의
        const win32BaseTestPath = `C:\\Windows\\system32;C:\\Windows;C:\\Program Files\\node\\`

        const splitedWithWinDelimeters = win32BaseTestPath.split(path.win32.delimiter);
        const splitedWithDelimeters = win32BaseTestPath.split(path.delimiter);

        assert.equal(splitedWithWinDelimeters.length, 3);
    });

    it('sep', function () {
        // path segment separator 리턴 \ on Windows, / on POSIX
        const splitOnPosix = 'foo/bar/baz'.split(path.sep);
        
        //Returns: ['foo', 'bar', 'baz']
    });

    it('format', function () {
        // 그다지 유용한지는 모르겠다...
        const formatted = path.format({
            dir: '/root/sample',
            name: 'test',
            ext: '.txt'
        });

        console.log(formatted)
    });

    it('join', function () {
        const join = path.join('/foo', 'bar/', '/baz/asdf', 'quux', '..');
        assert.equal(join, '/foo/bar/baz/asdf')
    });

    it('parse', function () {
        const parsed = path.parse('C:\\path\\dir\\file.txt');

        console.log(parsed)

        // Returns:
        // { root: 'C:\\',
        //   dir: 'C:\\path\\dir',
        //   base: 'file.txt',
        //   ext: '.txt',
        //   name: 'file' }
    });
});