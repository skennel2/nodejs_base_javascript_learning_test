const assert = require('assert');
const { Buffer } = require('buffer');
const fsp = require('fs/promises');
const fs = require('fs');

describe('nodejs 전역 요소 Buffer', () => {
    // Buffer는 고정된 크기의 바이트 시퀀스를 표현하는 오브젝트이다.
    it('basic', () => {
        const buf = Buffer.from('hello world', 'utf8');

        console.log(buf.toString('hex'));
        console.log(buf.toString('base64'))

        assert.equal(buf.length, 11);
    })

    it('파일을 읽어서 buffer로 다뤄보기', async () => {
        // 파일 삭제
        await fsp.unlink('./test/test_image_copy.png');

        // 파일을 buffer로 읽어옴
        const imageFileBuffer = await fsp.readFile('./test/test_image.png');

        console.log('image file base64', imageFileBuffer.toString('base64'));

        assert.ok(imageFileBuffer);

        // writable stream 생성
        const writeStream = fs.createWriteStream('./test/test_image_copy.png');

        // stream에 버퍼쓰기
        writeStream.write(imageFileBuffer);
        
        writeStream.end();
    })
});