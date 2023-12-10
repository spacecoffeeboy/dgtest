"use strict";
const fs = require("fs").promises;

class UserStorage {
    static #getUserInfo(data, email) {
        const users = JSON.parse(data);
        const idx= users.email.indexOf(email);
        const usersKeys=Object.keys(users); // =>[email, pwd, name...]
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    } 
    
    static getUsers(...fields){
        // const users = this.#users;
        const newUsers = fields.reduce((newUsers,field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        },{});
        return newUsers;
    };
    //사용자가 기입한 "email"값을 사용하여 사용자 정보를 가져오는 메서드
    static getUserInfo(email) {
        return fs
        .readFile("./src/databases/users.json")
        .then((data) => {
            return this.#getUserInfo(data, email);
        })
        .catch(console.error);
    }
 

    static save(userInfo){
        // const users = this.#users;
        users.email.push(userInfo.email);
        users.pwd.push(userInfo.pwd);
        return {success: true};
    }
}



module.exports = UserStorage;
