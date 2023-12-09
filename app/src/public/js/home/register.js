"use strict";

const email = document.querySelector("#create-email"),
pwd = document.querySelector("#create-password"),
confirmPwd = document.querySelector("#confirm-password"),
registerBtn = document.querySelector("button");
registerBtn.addEventListener("click", register);

function register(){
    if (!email.value) return alert("이메일을 입력해주세요.");
    if (pwd.value !== confirmPwd.value) return alert("비밀번호와 비밀번호 재확인이 일치하지 않습니다.");

    const req = {
        email : email.value,
        pwd : pwd.value,
    };


     fetch("/register", {
         method: "POST",
         headers: {
             "Content-Type": "application/json"
         },
         body: JSON.stringify(req)
     })
         .then((res) => res.json())
         .then((res) => {
             if(res.success){
              location.href = '/login';   
             } else {
                 alert(res.msg);
             }
         })
         .catch((err) => {
             console.error(new Error("회원가입 중 에러 발생"));
         }) 
    }