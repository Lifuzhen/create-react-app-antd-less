/**
 * Created by fuzhen on 2017/12/27.
 */
import React from "react";
import "./ClickCounter.less";
import {Button, message, Icon} from "antd";

class ClickCounter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:props.id || 0,
            first:0,
            second:0,
            third:0
        }
    }

    addFirstCount(){
        this.setState({first:this.state.first+1});
        // this.state.first=this.state.first+1;
    }
    minusFirstCount(){
        if(this.state.first>0){
            this.setState({first:this.state.first-1})
        }else{
            message.error("first:error");
        }
    }
    addSecondCount(){
        this.setState({second:this.state.second+1});
    }
    minusSecondCount(){
        if(this.state.second>0){
            this.setState({second:this.state.second-1})
        }else{
            message.error("second:error");
        }
    }
    addThirdCount(){
        this.setState({third:this.state.third+1});
    }
    minusThirdCount(){
        if(this.state.third>0){
            this.setState({third:this.state.third-1})
        }else{
            message.error("third:error");
        }
    }
    renewRender(){
        this.setState({first:0,second:0,third:0});
    }
    render(){
        return <div className="ClickCounter">
            <div>
                <Button type="primary" onClick={this.addFirstCount.bind(this)}><Icon type="plus" /></Button>
                <Button type="danger" onClick={this.minusFirstCount.bind(this)}><Icon type="minus" /></Button>
                <p>first counter: {this.state.first}</p>
            </div>
            <div>
                <Button type="dashed" onClick={this.addSecondCount.bind(this)}><Icon type="plus" /></Button>
                <Button type="danger" onClick={this.minusSecondCount.bind(this)}><Icon type="minus" /></Button>
                <p>second counter: {this.state.second}</p>
            </div>
            <div>
                <Button type="primary" onClick={this.addThirdCount.bind(this)}><Icon type="plus" /></Button>
                <Button type="danger" onClick={this.minusThirdCount.bind(this)}><Icon type="minus" /></Button>
                <p>third counter: {this.state.third}</p>
            </div>
            <Button onClick={this.renewRender.bind(this)}>renew render</Button>
            <div>从父组件中传递过来的props:{this.state.id}</div>
        </div>
    }
}
export default ClickCounter;

