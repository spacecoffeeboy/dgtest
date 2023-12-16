"use strict";
const db = require("../config/db");

class UserStorage {
    //사용자가 기입한 "email"값을 사용하여 사용자 정보를 가져오는 메서드
    static getUserInfo(email) {
        return new Promise((resolve, reject)=> {
           const query = "SELECT * FROM users where email=?;";
            db.query(query, [email], (err, data) => {
                if(err) reject(`${err}`);
                resolve (data[0]);
            });
        });
    }
 
    static async save(userInfo){
        return new Promise((resolve, reject)=> {
            const query = "INSERT INTO users(email, pwd) VALUES(?,?);";
             db.query(
                query, [userInfo.email, userInfo.pwd], (err) => {
                 if(err) reject(`${err}`);
                 resolve ({success: true});
             });
         });
    }
}



module.exports = UserStorage;
