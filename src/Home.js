/**
 * Created by fuzhen on 2017/12/28.
 */
import React from "react";
import {Route} from "react-router-dom";
import ClickCounter from "./ClickCounter";


class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }


    render(){
        return <div><ClickCounter id="007"/></div>
    }

}
export default Home;
