const EventEmitter = require('events');
const assert = require('assert');

class MyEmitter extends EventEmitter {

    doSomething() {
        this.emit('event')
    }
}

/**
 * https://nodejs.org/docs/latest-v17.x/api/events.html
 */
describe('EventEmitter', () => {
    it('basic', () => {
        const myEmitter = new MyEmitter();

        let eventCounter = 0;
        myEmitter.on('event', () => {
            eventCounter++;
        });

        myEmitter.doSomething();
        myEmitter.doSomething();
        myEmitter.doSomething();
        myEmitter.emit('event')

        assert.equal(eventCounter, 4);
    })
});