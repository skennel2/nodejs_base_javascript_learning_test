var fs = require('fs');
var assert = require('assert');

/**
 * @link https://velog.io/@moongq/Stream-Nodejs
 * 
 * @link https://seungtaek-overflow.tistory.com/7
 */
describe('nodejs 전역모듈 fs stream', () => {
    /**
     * readable 스트림에는 두가지 타입의 읽기 모드가 존재한다. (flowing, paused)
     * flowing은 자동으로 데이터가 읽히고 이벤트를 통해 데이터를 제공한다.
     * paused에서는 stream.read() 메소드 호출을 통해 데이터 청크를 읽게 만들어야한다.
     */
    it('make readable stream', async () => {

        // 파일로 부터 readable 스트림생성
        const fileStream = fs.createReadStream('./test/test.txt', 'utf-8');

        // 모든 readable stream은 paused 모드에서 시작한다. 
        // 만약 readableFlowing === null이면 아직 데이터 사용처가 없는 것으로 스트림은 데이터를 생성하지 않는다.
        assert.equal(fileStream.readableFlowing, null)

        // data 콜백을 등록하는 순간 flowing 모드로 전환된다.
        // 이 예제에서는 빠르게 pause를 호출하고 있어서 실제로 아래 콜백은 타지 않는다.
        fileStream.on('data', (e) => {
            console.log('data callback1', e)
        })

        // 위에서 data 이벤트 핸들러를 추가했기에 readableFlowing === true가 되었다.
        // 자동으로 데이터를 계속 읽으며 이벤트 헨들러가 호출될것이다.
        assert.equal(fileStream.readableFlowing, true)
        fileStream.pause();

        // pause 메소드를 호출해 readableFlowing === false 가 되었다.
        assert.equal(fileStream.readableFlowing, false)
    })

    it('make readable stream, readable 이벤트', () => {
        const fileStream = fs.createReadStream('./test/test.txt', 'utf-8');

        let readableCount = 0;

        // stream으로부터 데이터를 읽어올 수 있을 때 발생된다.
        // 1. 새로운 데이터가 읽힐 준비가 되었다,/ 2. 데이터를 끝까지 읽었다.
        fileStream.on('readable', () => {
            readableCount++;
            // read 메소드를 실행할 때, Readable stream은 paused mode 이어야 한다
            console.log(`readable: ${fileStream.read()}`);
        });

        // stream으로부터 데이터를 읽어올 수 있을 때 발생된다.
        // 1. 새로운 데이터가 읽힐 준비가 되었다,/ 2. 데이터를 끝까지 읽었다.
        fileStream.on('data', (e) => {
            console.log('data callback2', e)
        });

        // 위와는 다른 결과? 
        assert.equal(fileStream.readableFlowing, false)

        fileStream.on('end', () => {
            // readable 이벤트는 스트림 데이터의 끝에 도달하면 'end' 이벤트를 발생시키기 전에 한번 더 발생된다.
            assert.equal(readableCount, 2);
        });
    })

    it('make writable stream', () => {
        const fileStream = fs.createWriteStream('./test/text_write.txt');

        fileStream.write('Hello World');
        // write 외에 append 같은 api는 존재하지 않는다.

        // write stream 은 반드시 end를 호출한다.
        fileStream.end();

        assert.ok(fileStream)
    })

    it('stream pipe', () => {
        const writeStream = fs.createWriteStream('./test/test_copy.txt');
        const readStream = fs.createReadStream('./test/test.txt');

        // pipe로 다른스트림과 연결되면 자동으로 readStream은 flowing 모드가 된다.
        const pipe = readStream.pipe(writeStream);

        // 시작점이 되는 stream이 데이터를 모두 불러와서 종료되면, 목적지 stream의 end메소드를 호출하면서 종료시켜준다
        writeStream.on('close', () => {
            console.log('writeStream closed!');
        });

        readStream.on('close', () => {
            console.log('readStream closed!');
        });

        // test_copy파일에 내용이 그대로 복사되었다.
        assert.ok(pipe)
    })
})
