/**
 * Created by fuzhen on 2017/12/27.
 */
import React from "react";
import "./ClickCounter.less";
import {Button,message} from "antd";

class ClickCounter extends React.Component{

    buttonClick(){
        message.success("success");
    }
    render(){
        return <div className="ClickCounter">
            <button>click me</button>
            <Button onClick={this.buttonClick.bind(this)}>点击</Button>
        </div>
    }
}
export default ClickCounter;
