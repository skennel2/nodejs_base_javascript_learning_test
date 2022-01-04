var assert = require("assert");

describe('프로토타입', function () {
    it('생성자함수는 prototype프로퍼티를 가지며, 생성된 객체에 링크된다.', function () {
        function Person(name, age) {
            this.name = name;
            this.age = age;
        }
        Person.prototype.job = "none";
        Person.prototype.getName = function () {
            return this.name;
        }

        assert.equal(true, Person.hasOwnProperty('prototype'));
        assert.equal("none", Person.prototype.job);
        assert.equal(undefined, Person.prototype.getName());

        // 생성자함수로 생성된 객체의 부모는 생성자함수의 prototype속성으로 결정된다.
        var person1 = new Person('ariana', 26);
        assert.equal("none", person1.job);
        assert.equal("none", person1.__proto__.job);

        assert.equal("ariana", person1.getName());
        assert.equal(undefined, person1.__proto__.getName()); // TODO: this 에 바인딩 되는 값이 내 예상과 다르다.

        // 프로토타입 링크관계를 보여준다.
        assert.equal(true, person1.__proto__ === Person.prototype);
    });

    it('프로토 타입으로 기본타입에 기능 추가하기', function () {
        // String의 프로토타입에 test라는 메소드를 추가했다.
        String.prototype.test = function () {
            return 'test';
        };

        var value = "hi";
        var calltest = value.test();

        assert.equal("test", calltest);
    });

    it('프로토타입 체이닝', function () {
        function Person(name, age) {
            this.name = name;
            this.age = age;
        }
        Person.prototype.job = 'singer';

        var ariana = new Person('ariana', 26);
        var gaga = new Person('gaga', 34);

        assert.equal('singer', ariana.job);
        assert.equal('singer', gaga.job);

        // 프로토타입의 값에 접근이 아닌, job이라는 프로퍼티를 동적으로 생성한것이다.
        ariana.job = 'dancer';

        // 프로토타입보다 자신의 속성을 우선하여 접근한다.
        assert.equal('dancer', ariana.job);

        // 자신의 속성에 접근하려는 프로퍼티가 없을때 프로토타입 체이닝이 일어난다.
        assert.equal('singer', gaga.job);
    });

    it('객체의 생성자함수 링크', function () {
        function Person(name, age) {
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

    it('객체의 프로토타입 변경하기', function () {
        function Person(name, age) {
            this.name = name;
            this.age = age;
        }

        var person1 = new Person('Cha', 45);
        person1.__proto__ = {
            country: "USA",
            getName: function () {
                return this.name;
            }
        };

        assert.equal('USA', person1.country);
        assert.equal('Cha', person1.getName());
    });
});