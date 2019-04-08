var assert = require("assert"); //nodejs에서 제공하는 assert 모듈

describe('mocha', function(){
	describe('mocha hook', function(){
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
});
