"use strict";

const app = require("../app");
const PORT = 3000;

//특정 포트 활성화
app.listen(PORT, () => {
    console.log("서버 가동");
});