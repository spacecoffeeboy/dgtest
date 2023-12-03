"use strict";

//모듈
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

//라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

//ejs to js 미들웨어 : 특정 디렉토리 내의 파일들을 웹 서버를 통해 접근 가능하게 함
app.use(express.static(`${__dirname}/src/public`));
//body-parser 미들웨어
app.use(bodyParser.json());
// url을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않은 문제 해결
app.use(bodyParser.urlencoded({ extended: true}));
// use -> 미들웨어 등록 메서드
app.use("/", home);



//www.js로 export
module.exports = app;