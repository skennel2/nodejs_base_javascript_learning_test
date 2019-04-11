var assert = require("assert");
var md = require("./module/testModule");

describe('프로토타입', function(){
    it('생성자함수는 prototype프로퍼티를 가지며, 생성된 객체에 링크된다.', function(){
        function Person(name, age){
            this.name = name;
            this.age = age;
        }
        Person.prototype.job = "none";
            
        assert.equal(true, Person.hasOwnProperty('prototype'));
        assert.equal("none", Person.prototype.job);

        //생성자함수로 생성된 객체의 부모는 생성자함수의 prototype속성으로 결정된다.
        var person1 = new Person('ariana', 26);
        assert.equal("none", person1.job);
        assert.equal("none", person1.__proto__.job);

        assert.equal(true, person1.__proto__ === Person.prototype);
    });

    it('프로토 타입으로 기본타입에 기능 추가하기', function(){
        String.prototype.test = function(){
          return 'test';  
        };

        var value = "hi";
        
        assert.equal("test", value.test());
    });

    it('프로토타입 체이닝', function () {
        function Person(name, age){
            this.name = name;
            this.age = age;
        }

        Person.prototype.job = 'singer';

        var person1 = new Person('ariana', 26);
        var person2 = new Person('gaga', 34);

        assert.equal('singer', person1.job);
        assert.equal('singer', person2.job);

        // 프로토타입의 값에 접근이 아닌, job이라는 프로퍼티를 동적으로 생성한것이다.
        person1.job = 'dancer';

        assert.equal('dancer', person1.job);
        assert.equal('singer', person2.job);
    });
});