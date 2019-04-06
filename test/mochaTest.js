var assert = require("assert"); //nodejs에서 제공하는 assert 모듈

describe('mocha 사용법', function(){
	let status = "ready";
	before(function(){
		status = 'before';
		console.log(status);
	});

	after(function(){
		status = 'after';
		console.log(status);
	});

	beforeEach(function(){
		status = 'beforeEach';
		console.log(status);
	});

	afterEach(function(){
		status = 'afterEach';
		console.log(status);
	});

	it('run mocha hook', function(){

	})
});

describe('Array 테스트', function() {
	describe('indexOf() 메서드', function () {
		it('값이 없을 때에는 -1 을 리턴함', function () {
			assert.equal(-1, [1,2,3].indexOf(5));
			assert.equal(-1, [1,2,3].indexOf(0));
		});
	});
});