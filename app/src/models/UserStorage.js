"use strict";

class UserStorage {
    static #users = {
        email: ["kbj@gmail.com","deeprootedtree1@gmail.com","goh@gmail.com"],
        pwd:["1234", "12345", "123456"],
        name:["고승현","김진욱","이창래"]
    };
    
    static getUsers(...fields){
        const users = this.#users;
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
        const users = this.#users;
        const idx= users.email.indexOf(email);
        const usersKeys=Object.keys(users); // =>[email, pwd, name...]
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }
}



module.exports = UserStorage;
