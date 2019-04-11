var assert = require("assert");

describe('프로토타입', function(){
    it('생성자함수는 prototype프로퍼티를 가지며, 생성된 객체에 링크된다.', function(){
        function Person(name, age){
            this.name = name;
            this.age = age;
        }
        Person.prototype.job = "none";
            
        assert.equal(true, Person.hasOwnProperty('prototype'));
        assert.equal("none", Person.prototype.job);

        // 생성자함수로 생성된 객체의 부모는 생성자함수의 prototype속성으로 결정된다.
        var person1 = new Person('ariana', 26);
        assert.equal("none", person1.job);
        assert.equal("none", person1.__proto__.job);
 
        // 프로토타입 링크관계를 보여준다.
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

        // 프로토타입보다 자신의 속성을 우선하여 접근한다.
        assert.equal('dancer', person1.job);

        // 자신의 속성에 접근하려는 프로퍼티가 없을때 프로토타입 체이닝이 일어난다.
        assert.equal('singer', person2.job);
    });

    it('객체의 생성자함수 링크', function(){
        function Person(name, age){
            this.name = name;
            this.age = age;
        }
        
        var person1 = new Person('Cha', 45);
        var person2 = new person1.__proto__.constructor('Kim', 32);
        var person3 = new Person.prototype.constructor('Jung', 42);
        assert.equal('Cha', person1.name);
        assert.equal('Kim', person2.name);
        assert.equal('Jung', person3.name);
    });

    it('객체의 프로토타입 변경하기', function(){
        function Person(name, age){
            this.name = name;
            this.age = age;
        }

        var person1 = new Person('Cha', 45);
        person1.__proto__ = {
          country : "USA"  ,
          getName : function(){
              return this.name;
          }
        };

        assert.equal('USA', person1.country);
        assert.equal('Cha', person1.getName());
    });
});