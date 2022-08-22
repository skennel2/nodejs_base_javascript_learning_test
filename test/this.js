var assert = require('assert');

describe('this 테스트', () => {
    it('화살표함수와 일반 함수에서 this의 차이', () => {
        // this 는 일반적으로는 메소드를 호출한 객체가 저장되어 있는 속성이다.
        this.name = 'kevin'

        var jane = {
            name: 'jane',
            age: 27,
            job: 'designer',
            getName: function () {
                return this.name;
            },
            setName: function (name) {
                this.name = name;
            },
            getNameArrow: () => {
                return this.name;
            },
            setNameArrow: (name) => {
                this.name = name;
            }
        };

        // 화살표 함수와 일반 함수의 동작차이를 주의깊게 볼것
        jane.setName('Joe');
        assert.equal('Joe', jane.getName());
        assert.equal('Joe', jane.name);

        jane.setNameArrow('Marry');
        assert.equal('Joe', jane.getName());
        assert.equal('Marry', this.name);
    });

    it('화살표함수 내부의 this의 의미', () => {
        let someFunction = () => {
            this.age = 10;
            assert.equal(10, this.age);
        }

        someFunction();

        assert.equal(10, this.age);

    });

    /**
     * 위 예제와 결과에 차이가 없다.
     */
    it('function 함수 내부의 this의 의미', () => {
        function someFunction() {
            this.age = 10;
            assert.equal(10, this.age);
        }

        someFunction();

        assert.equal(10, this.age);

    });

    /**
     * @link https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/this
     */
    it('화살표 함수의 this', () => {
        var o = { prop: 37 };

        function independent() {
            return this.prop;
        }

        o.f = independent;

        // 함수가 객체 o의 멤버 f로부터 호출되었다는 사살이 중요하다.
        assert.equal(37, o.f());

        assert.equal(undefined, independent())
    })
});