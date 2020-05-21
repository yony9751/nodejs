var http = require('http');
var fs = require('fs');
var url = require('url'); // node js 의 모듈

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query; // ?id=HTML 입력시 { id = 'HTML'} 로 객체로 호출됨 , queryData.id => HTML 이 추출됨
    console.log(queryData);
    if(_url == '/'){
      _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
        response.writeHead(404);
		response.end();
		return;
    }
    response.writeHead(200);
    response.end(queryData.id); 
});
app.listen(3000); // 3000번 포트의 node js 를 호출, 포트번호를 생략하면 80임