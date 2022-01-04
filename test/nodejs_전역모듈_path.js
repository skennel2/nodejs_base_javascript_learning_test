var assert = require('assert');
var path = require('path');
const { win32 } = require('path');
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

        console.log(splitedWithDelimeters, path.delimiter)
        assert.equal(splitedWithWinDelimeters.length, 3);
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
});