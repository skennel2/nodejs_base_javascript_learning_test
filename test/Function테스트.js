var assert = require('assert');

describe('Function 테스트', function(){
    it('함수도 객체다.', function(){
        function add(a, b){
            return a + b;
        }

        add(2, 8);

        // 함수를 객체 다루듯이 동적으로 속성을 할당해주었다. 
        add.prop = "some value";

        assert.equal("some value", add.prop);
    })

    it('함수에는 기본적으로 정의되고 할당되어있는 프로퍼티들이 존재한다.', function(){
        function add(a, b){
            return a + b;
        }

        add(7, 6); 
        
        assert.equal(true, add.hasOwnProperty('name')); // 함수의 이름을 나타낸다.
        assert.equal(true, add.hasOwnProperty('arguments')); // 함수를 호출할때 전달된 인자값 
        assert.equal(true, add.hasOwnProperty('caller')); // 자신을 호출한 함수
        assert.equal(true, add.hasOwnProperty('length')); // 함수의 정의부의 인자갯수

        // 이렇듯 함수를 정의하면 함수에는 기본적인 프로퍼티들이 포함된다는것을 기억하자.
    })

    it('Inner Function의 this', function(){
        var value = 10;

        var obj = {
            value : 1,
            func1 : function(){
                this.value++; 

                // obj의 value를 가르킨다.
                assert.equal(2, this.value); 

                function func2(){
                    this.value++;
                    //TODO: 브라우저의 경우 아래 구문에서의 this는 windows의 value를 가르킨다.
                    // 즉 내부함수의 정의는 메소드가 아닌 일반 함수로서 동작한다는 것이다.
                    assert.equal(true, isNaN(this.value)); 
                }

                func2();
            }
        }

        obj.func1();
    })

    it('리터럴 객체와 생성자 함수로 생성된 객체의 차이', function(){
        // 리터럴 객체
        var personL = {
            name : "Son H.M",
            age : 27, 
            getName : function(){
                return this.name;
            }
        };

        // 생성자 함수
        var Person = function (name, age){
            this.name = name;
            this.age = age;
        };

        Person.prototype.getName = function(){
            return this.getName();
        };

        // 리터럴로 생성된 객체와 생성자함수로 생성된 객체 둘의 차이는?
        // 리터럴과 다르게 생성자함수로 정의된 객체의 메소드는 _proto_에 정의되어 있다.
        var instance = new Person("Na Y.S", 32); 

        console.log(personL);
        console.log(instance);

        // 사실 리터럴 객체는 Object() 라는 내장 생성자 함수로 생성된 것이다.
        var literal = {
            value : 20,
            getValue : function(){
                return this.value;
            }
        };

        var object = new Object();
        object.value = 20;
        object.getValue = function(){
            return this.value;
        }

        // 둘이 완전 동일하다.
        // 정의한 속성과 메소드들이 _proto_가 아닌 객체 바로 아래에 포함되어있다.
        console.log(literal);
        console.log(object);
    })
    

    it('생성자 함수의 this', function(){
        // 생성자 함수 정의
        // TODO: 생성자 함수의 이름은 변수의 네이밍 컨텍스트와 다르게 대문자로 시작하는듯하다.
        var Person = function(name){
            this.name = name;
        }

        Person.prototype.getName = function(){
            return this.name;
        }

        // 생성자함수를 일반함수로 호출한다면?
        Person('person');

        // 생성자함수내의 this가 windows를 가르키는 것이 되버린다.
        assert.equal('person', name);

        // 생성자 함수로 객체생성
        // 다음은 생성자함수를 호출했을 때 일어나는 일의 순서이다.
        // 1. 아래 구문이 실행되면 함수 코드가 실행되기전 빈객체를 생성한다.
        var person1 = new Person("NaYunsu");
        assert.equal("NaYunsu", person1.name);
        assert.equal("NaYunsu", person1.getName());
    })

    it('강제 생성자 패턴', function(){
        var Person = function (name, age){
            if(!(this instanceof Person)){
                return new Person(name, age);
            }
            this.name = name;
            this.age = age;
        };
        var person = Person("Na Y.S", 32);
    })

    it('함수의 기본 프로퍼티 : arguments', function(){
        function sum(){
            var result = 0;
            // 함수도 객체라고 했다.
            // 함수객체에는 arguments라는 기본 프로퍼티가 포함된다.
            // arguments는 함수에 전달된 인자들의 유사배열이다.
            // 매개변수의 갯수가 정해지지않는 유형의 함수를 구현할때 유용하다.
            for (let index = 0; index < arguments.length; index++) {
                result += arguments[index];
            }
            return result;
        }

        assert.equal(6, sum(1,2,3));
    })

    it('함수 호이스팅', function(){
        // 소스코드의 순서상 add함수는 호출 이전에 선언되었지만 인식한다.
        // 이게 가능한 이유는 자바스크립트는 변수의 생성과 초기화의 작업을 분리하기 때문이다.
        var result = add(3, 5);
        
        assert.equal(8, result);

        function add(a, b){
            return a + b;
        }
        
        // 함수표현식일 호이스팅이 발생하지 않는다. 에러발생
        result = subtract(11, 3); // uncaught type error : subtract is not a function
        var subtract = function(a, b){
            return a - b;
        };
    })

    it('', function(){
        function add(a, b){
            return a + b;
        }

        // 이 함수를 호출할떄 2, 8 외에 arguments객체(유사배열)및 this가 전달된다.
        add(2, 8);
    })

    it('함수 호출시 암묵적으로 전달되는 인자', function(){
        function add(a, b){
            return a + b;
        }

        // 이 함수를 호출할떄 2, 8 외에 arguments객체(유사배열)및 this가 전달된다.
        add(2, 8);
    })

    it('Function.protoype.bind 함수 테스트', function(){
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

    it('Function.protoype.apply 함수 테스트', function(){
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