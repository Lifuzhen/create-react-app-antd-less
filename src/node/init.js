/**
 * Created by fuzhen on 2017/12/28.
 */
let express = require("express");  //映入express
let mysql = require('mysql');    //引入mysql
let util = require('util');
//引入body-parser
var bodyParser = require("body-parser");
let app=express();
//配置：作为中间件
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));  //公共  目录  定义
// app.use(express.bodyParser());

//配置数据库信息
let connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '123456',
    database : 'mydb'
});

//连接
connection.connect();

//测试node接口
app.get("/",function(req,res){
    //跨域
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
    //查询
    const obj={};
    connection.query('SELECT * FROM users', function (err,data) {
        obj.content=JSON.parse(JSON.stringify(data));
        if(err){
            console.log(err);
        }else{
            // console.log(JSON.stringify(data));  //打印数据
            res.end(JSON.stringify(obj));   //转化成字符串
        }
    });
});
//注册
app.post("/register",function (req, res) {
    //跨域
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
    var name = req.body.username;
    var pwd = req.body.password;
    connection.query('insert into users set ?',{username : name, password : pwd},function (err, data) {
        if(err){
            console.log(err);
        }else{
            console.log(data);
            res.end('success');
        }
    })
})
//登录
app.post("/login",function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    //跨域
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
    connection.query("select * from users",function (err, data) {
        if(err){
            console.log(err);
        }else{
            const array = JSON.parse(JSON.stringify(data));
            array.map((x)=>{
                if(x.username == username && x.password == password){
                    res.end("success");
                }else{
                    res.end("error");
                }
            });
        }
    })

})

app.listen(4848);