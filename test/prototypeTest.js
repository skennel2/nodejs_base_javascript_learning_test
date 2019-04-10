var assert = require("assert");
var md = require("./module/testModule");

describe('프로토타입', function(){
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

        person1.job = 'dancer';

        assert.equal('dancer', person1.job);
        assert.equal('singer', person2.job);
    });
});