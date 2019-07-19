/**
 * Created by fuzhen on 2018/1/4.
 */
import querystring from "querystring";
import Cookie from "cookie";
import {message} from "antd";

export default function(){
    const post = function (url, data) {
        return fetch(url, {method: "POST", body:data, cache:"no-cache", credentials: "same-origin"});
    };
    const get = function (url, params) {
        if(params){
            url = url + "?" + querystring.stringify(params);
        }
        return fetch(url, {method: "GET", cache:"no-cache", credentials: "same-origin"});
    };

    const del = function (url) {
        return fetch(url, {method: "DELETE", cache:"no-cache", credentials: "same-origin"});
    };

    const put = function (url, data) {
        return fetch(url, {method: "PUT", body:data, cache:"no-cache", credentials: "same-origin"});
    };

    const json = function (data) {
        return new Blob([JSON.stringify(data)], {type : "application/json"});
    };

    return {
        post:post, get:get, delete:del,
        selectAllUsers(){
            return this.get("http://127.0.0.1:4848/").then((res) => {
                if(res.ok){
                    return res.json();
                }
            });
        },
        registerUser(username,password){
            const data = {username:username,password:password};
            const formdata = new Blob([JSON.stringify(data)], {type : "application/json"});
            return this.post("http://127.0.0.1:4848/register",formdata).then((res) => {
                if(res.ok){
                    return res.text();
                }
            });
        },
        loginUser(username,password){
            const data = {username:username,password:password};
            const formdata = new Blob([JSON.stringify(data)], {type : "application/json"});
            return this.post("http://127.0.0.1:4848/login",formdata).then((res) => {
                if(res.ok){
                    return res.text();
                }
            });
        },
        getChinaJson(){
            return this.get("../assets/china.json").then((res) => {
                if(res.ok){
                    return res.json();
                }
            });
        }
    }
}