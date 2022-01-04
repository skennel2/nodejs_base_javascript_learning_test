var assert = require('assert');

describe('nodejs 전역 요소', function () {
    it('전역 변수', function () {
        // 현재 실행 중인 코드의 폴더 경로를 나타낸다.
        console.log(__dirname);
        // 현재 실행 중인 코드의 파일 경로를 나타낸다.
        console.log(__filename);

        assert.equal(typeof __dirname, 'string');
        assert.equal(typeof __filename, 'string');
    });

    it('전역 객체 console', function () {
        console.log(console.time());
        console.log(console.timeEnd());
    });

    /**
     * process 객체는 프로그램과 관련된 정보를 나타내는 객체
     * nodejs에만 존재한다.
     */
    it('전역 객체 process', function () {
        // 실행 매개변수 리스트
        console.log(JSON.stringify(process.argv));
        // 환경 정보
        console.log(JSON.stringify(process.env));
        // 메모리 사용 정보
        console.log(process.memoryUsage());
        // 현재 경로
        console.log(process.cwd())
    });
});