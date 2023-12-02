"use strict";

//모듈
const express = require("express");
const app = express();

//라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

// use -> 미들웨어 등록 메서드
app.use("/", home); 

//www.js로 export
module.exports = app;