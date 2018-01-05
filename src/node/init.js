/**
 * Created by fuzhen on 2017/12/28.
 */
let express = require("express");  //映入express
let mysql = require('mysql');    //引入mysql

let app=express();

app.use(express.static(__dirname + "/public"));  //公共  目录  定义

//配置数据库信息
let connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '123456',
    database : 'mydb'
});

//连接
connection.connect();

//路径get请求
app.get("/",function(req,res){
    //跨域
    res.setHeader("Access-Control-Allow-Origin", "*");

    res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});

    //查询
    connection.query('SELECT * FROM users', function (err,data) {
        if(err){
            console.log(err);
        }else{
            // console.log(JSON.stringify(data));  //打印数据
            res.end(JSON.stringify(data));   //转化成字符串
        }
    });
});

app.listen(4848);