const { Worker } = require('worker_threads')

function runService(parameter) {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./src/service.js', {
            workerData: parameter
        });
        worker.on('message', (data) => {
            resolve(data);
        })
    })
}

function runPromiseService(parameter) {
    return new Promise((resolve, reject) => {
        sleep(3000)
        resolve({ hello: parameter });
    })
}

function sleep(ms) {
    const wakeUpTime = Date.now() + ms;
    while (Date.now() < wakeUpTime) { }
}

function run() {
    runService('world').then((data) => {
        console.log(data);
    })

    // // 아래 호출을 넣고 안넣고의 차이를 보면된다.
    // runPromiseService('world').then((data) => {
    //     console.log(data);
    // })
    
    new Promise(resolve => {
        console.log('app run')
        resolve();
    })
}

run();