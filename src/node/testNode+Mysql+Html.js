/**
 * Created by fuzhen on 2018/1/4.
 */

let express = require("express");
let router = express.Router();

let init = require("./init");
let selSql = 'SELECT * FROM users';
let result="";
router.get('/mysql',function (req, res, next) {
    res.writeHead(200, {
        "Content-Type": "text/html;charset=utf-8"
    });
    console.log("执行到了这了");
    init.conn().query(selSql,function (err, rows) {
        if(err){
            console.log(err);
            return ;
        }
        result = JSON.stringify(rows);
        console.log(result);
        res.end(result);
    })
});
module.exports = router;