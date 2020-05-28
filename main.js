var http = require('http');
var fs = require('fs');
var url = require('url'); // node js 의 모듈

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query; // ?id=HTML 입력시 { id = 'HTML'} 로 객체로 호출됨 , queryData.id => HTML 이 추출됨
    var pathname = url.parse(_url, true).pathname; // 쿼리 데이터를 제외한 / 만
    var title = queryData.id;
    if(pathname === '/'){
        if(title== undefined){
            title = "welcome";
            var description = "hello world";
                var template = `
                <!doctype html>
                    <html>
                    <head>
                      <title>WEB1 - ${title}</title>
                      <meta charset="utf-8">
                    </head>
                    <body>
                      <h1><a href="/">WEB</a></h1>
                      <ol>
                        <li><a href="/?id=HTML">HTML</a></li>
                        <li><a href="/?id=CSS">CSS</a></li>
                        <li><a href="/?id=JavaScript">JavaScript</a></li>
                      </ol>
                      <h2>${title}</h2>
                      <p>
                        ${description}
                      </p>
                    </body>
                    </html>
                    `;
                response.writeHead(200);
                response.end(template); //함수 안 쪽에 넣어야함 // 클릭할때마다 파일을 불러오기 때문에 html, css, javascript 내용이 바뀌어도 서버 새로 실행 안해도됨!
        }else{
            fs.readFile(`data/${title}`,'utf-8',function(err,description){
                var template = `
                <!doctype html>
                    <html>
                    <head>
                      <title>WEB1 - ${title}</title>
                      <meta charset="utf-8">
                    </head>
                    <body>
                      <h1><a href="/">WEB</a></h1>
                      <ol>
                        <li><a href="/?id=HTML">HTML</a></li>
                        <li><a href="/?id=CSS">CSS</a></li>
                        <li><a href="/?id=JavaScript">JavaScript</a></li>
                      </ol>
                      <h2>${title}</h2>
                      <p>
                        ${description}
                      </p>
                    </body>
                    </html>
                    `;
                response.writeHead(200);
                response.end(template); //함수 안 쪽에 넣어야함 // 클릭할때마다 파일을 불러오기 때문에 html, css, javascript 내용이 바뀌어도 서버 새로 실행 안해도됨!
            });
        }
        
    }else{
        response.writeHead(404);
        response.end('Not found');
    }

    //console.log(url.parse(_url, true));
   
});
app.listen(3000); // 3000번 포트의 node js 를 호출, 포트번호를 생략하면 80임