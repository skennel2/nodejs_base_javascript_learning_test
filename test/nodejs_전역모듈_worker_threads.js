const assert = require("assert");
const {
    Worker, isMainThread, parentPort, workerData, setEnvironmentData,
    getEnvironmentData,
} = require('worker_threads');


describe('worker_threads', () => {
    it('basic', () => {
        if (isMainThread) {
            // This re-loads the current file inside a Worker instance.
            new Worker(__filename);
        } else {
            console.log('Inside Worker!');
            console.log(isMainThread);  // Prints 'false'.
        }
    });
});