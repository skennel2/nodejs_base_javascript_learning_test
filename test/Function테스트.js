var assert = require('assert');

describe('Function 테스트', function(){
    it('bind 테스트', function(){
        let obj = {
            value : 10,
            getValue : function(){
                return this.value;
            }
        };

        assert.equal(10, obj.getValue());

        let testObj = {
            value : 20
        }

        // bind는 넘겨준 객체를 컨텍스트로 가지는 새로운 함수를 리턴한다.
        // bind에 넘겨주는 객체에 따라 this의 의미가 바뀌게된다.
        assert.equal(20, obj.getValue.bind(testObj)());
    })

    it('apply 테스트', function(){
        let obj = {
            value : 10,
            getValue : function(){
                return this.value;
            }
        };

        assert.equal(10, obj.getValue());

        let testObj = {
            value : 20
        }

        // apply에 특정 컨텍스트를 넘겨주어 함수를 실행한다.
        // apply에 넘겨주는 객체에 따라 this의 의미가 바뀌게된다.
        assert.equal(20, obj.getValue.apply(testObj));
    })
});