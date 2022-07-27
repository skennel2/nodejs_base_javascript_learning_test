var assert = require('assert');

// 윈도우 기반 명령 프롬프트 명령어인 cd
const process = exec("cd");

// 표준 출력
process.stdout.on("data", function (data) {
  console.log(data.toString()); // 버퍼 형태로 전달됩니다.
});

// 표준 에러
process.stderr.on("data", function (data) {
  console.error(data.toString()); // 버퍼 형태로 전달됩니다.
});