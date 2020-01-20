var assert = require('assert');

describe('Scope 테스트', () => {
    it('전역 변수', () => {
        function scopeTest(){
            // var 키워드로 선언하지 않으면, 전역변수로서 해석된다.
            value = 10; 
        }
        // 함수를 꼭 실행해야한다.
        scopeTest(); 

        assert.equal(10, value);
    });

    it('var 키워드의 함수단위 스코프', () => {
        function somefunction(){
            if(true){
                var value = 'test';
            }
            
            // 접근가능, 블록 단위의 스코프를 가지는 C#, Java 와는 분명한 차이
            assert.equal('test', value); 
        }

        somefunction();
    });
});