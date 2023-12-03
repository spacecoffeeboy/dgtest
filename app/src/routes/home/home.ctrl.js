"use strict";

const output = {
    home: (req, res) =>{
        res.render("home/index")
    },
    
    login: (req, res) =>{
        res.render("home/login")
    },
};

const users = {
    email: ["kbj@gmail.com","deeprootedtree1@gmail.com","goh@gmail.com"],
    pwd:["1234", "12345", "123456"],
}

const process = {
    login: (req, res) => {
        const email = req.body.email,
                pwd = req.body.pwd;
        if(users.email.includes(email)) {
            const idx = users.email.indexOf(email);
            if(users.pwd[idx]===pwd){
            return res.json({
                success: true,
            });
        }
    }

        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다.",
        });
    }
}

module.exports = {
    output, process
}