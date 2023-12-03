"use strict";

class Userstorage {
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
}



module.exports = Userstorage;
