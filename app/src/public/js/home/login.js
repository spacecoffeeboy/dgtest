"use strict";

const email = document.querySelector("#login-email"),
pwd = document.querySelector("#login-password"),
loginbtn = document.querySelector("button");

loginbtn.addEventListener("click", login);

function login(){
    const req = {
        email : email.value,
        pwd : pwd.value,
    };

    fetch("/login", {
        method: "POST",
        headers: {
            "Cotent-Type": "application/json"
        },
        body: JSON.stringify(req)
    })
}