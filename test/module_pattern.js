var assert = require('assert');

// 모듈은 자바스크립트의 class라고 볼수 있다.
// 객체지향언어의 class 처럼 캡슐화로 정보은닉을 하며 
// return값으로 외부에 공개할 인터페이스를 노출한다.
var hello = function(name){
    var name = name;

    // 일종의 private 메소드라고 볼수 있다. 
    function print(text){
        console.log(text);
    }

    function sayHello(){
        print('hello ' + name);
    }

    return {
        // return 으로 넘겨주는 것은 일종의 public 메소드라고 볼수 있다. 
        sayHello : sayHello
    }
}

describe('모듈 패턴 테스트', function(){
    it('모듈 패턴 테스트', function(){
        var object = hello("world");
        object.sayHello();
    });
});