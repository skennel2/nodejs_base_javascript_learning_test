const { workerData, parentPort } = require('worker_threads')

// 여기에서 무거운 작업을 동기로 메인 스레드를 방해하지 않으면서 처리할 수 있다.
function sleep(ms) {
    const wakeUpTime = Date.now() + ms;
    while (Date.now() < wakeUpTime) { }
}

sleep(3000)

parentPort.postMessage({ hello: workerData })