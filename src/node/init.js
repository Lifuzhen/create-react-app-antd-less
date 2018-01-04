/**
 * Created by fuzhen on 2017/12/28.
 */
let mysql = require('mysql');

let connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    port:'3306',
    database:'mydb'
});

connection.connect(function (err) {
    if(err){
        console.log("mysql"+err);
    }
});
// let selSql = 'SELECT * FROM users';
// connection.query(selSql,(err,result)=>{
//     console.log(result);
// })

