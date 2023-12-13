"use strict";
const fs = require("fs").promises;

class UserStorage {
    //user.js에 있는 정보를 불러오는 메서드
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

    static #getUsers(data, isAll, fields) {
    const users = JSON.parse(data);
    if(isAll) return users;
    const newUsers = fields.reduce((newUsers,field) => {
    if(users.hasOwnProperty(field)){
        newUsers[field] = users[field];
        }
        return newUsers;
        },{});
        return newUsers;
    }

    static getUsers(isAll, ...fields){
        return fs
        .readFile("./src/databases/users.json")
        .then((data) => {
            return this.#getUsers(data, isAll, fields);
        })
        .catch(console.error);
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
 
    static async save(userInfo){
        const users  = await this.getUsers(true);
        if(users.email.includes(userInfo.email)) {
            throw "이미 존재하는 이메일입니다.";
        }
        users.email.push(userInfo.email);
        users.pwd.push(userInfo.pwd);
        fs.writeFile("./src/databases/users.json", JSON.stringify(users));
        return {success: true};
    }
}



module.exports = UserStorage;
