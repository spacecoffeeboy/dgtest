"use strict";

//모듈
const express = require("express");
const app = express();

//라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

//ejs to js 미들웨어 : 특정 디렉토리 내의 파일들을 웹 서버를 통해 접근 가능하게 함
app.use(express.static(`${__dirname}/src/public`));

// use -> 미들웨어 등록 메서드
app.use("/", home); 

//www.js로 export
module.exports = app;