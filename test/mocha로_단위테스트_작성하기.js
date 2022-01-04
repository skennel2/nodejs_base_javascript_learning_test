var assert = require("assert"); //nodejs에서 제공하는 assert 모듈

// npm test 명령으로 test 폴더 하위에 존재하는 테스트메소드들을 실행할 수있다.
describe('mocha', function () {
	describe('mocha hook', function () {
		let status = "ready";
		before(function () {
			status = 'before';
			console.log(status);
		});

		after(function () {
			status = 'after';
			console.log(status);
		});

		beforeEach(function () {
			status = 'beforeEach';
			console.log(status);
		});

		afterEach(function () {
			status = 'afterEach';
			console.log(status);
		});

		// 실질적인 테스트 메소드이다.
		it('run mocha hook', function () {

		})
	});
});
