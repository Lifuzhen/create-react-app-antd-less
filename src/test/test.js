/**
 * Created by fuzhen on 2018/1/4.
 */
import React from "react";
import Service from "../data/Service";

class test extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }

    componentDidMount(){
        const self=this;
        Service().selectAllUsers().then(function (data) {
            console.log(data);
            self.setState({data:data.content})
        })
    }

    render(){
        const data=this.state.data.map((x)=>{
            return <li key={x.id}>{x.username}</li>
        })
        return <div>{data}</div>
    }

}
export default test;


