const express = require('express');
const path = require('path');
const app = express();

app.listen(8080, function () {
  console.log('listening on 8080')
});

// [1] 해당 경로에 있는 static 파일들을 가져다가 쓰겠다고 선언
app.use(express.static(path.join(__dirname, 'test-web-page\\build')));

// [2] 메인 페이지로 접속 시, '리액트로 만든 html 파일 경로'보여주세요~ 라고 하는거임
app.get('/', function(요청, 응답) {
  응답.sendFile(path.join(__dirname, 'test-web-page\\build\\index.html'));
});