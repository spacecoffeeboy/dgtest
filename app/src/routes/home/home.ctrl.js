"use strict";

const UserStorage = require("../../models/UserStorage")

const output = {
    home: (req, res) =>{
        res.render("home/index")
    },
    
    login: (req, res) =>{
        res.render("home/login")
    },
};


const process = {
    login: (req, res) => {
        const email = req.body.email,
                pwd = req.body.pwd;
    
        const users = UserStorage.getUsers("email","pwd");

        const response = {};
        if(users.email.includes(email)) {
            const idx = users.email.indexOf(email);
            if(users.pwd[idx]===pwd){
            response.success = true;   
            return res.json(response);
        }
    }

        response.success = false;
        response.msg = "로그인에 실패하셨습니다."   
        return res.json(response);
    }
}

module.exports = {
    output, process
}