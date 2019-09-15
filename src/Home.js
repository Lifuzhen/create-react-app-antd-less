/**
 * Created by fuzhen on 2017/12/28.
 */
import React from "react";
import {Route, HashRouter} from "react-router-dom";
import AppFrame from "./page/Frame";
import AntFormMap from "./page/test/AntFormMap";
import CssFilter from "./page/cssFilter/index";
import ScrollTest from "./page/scrollReveal/index";
import Test from "./page/React+React-router4.x+Ant Design+Flux视频教程--【IT营大地】/index";
import G2Example from "./page/G2/index";
import Index from "./page/Index";
import Login from "./page/Login";
import Register from "./page/Register";
import Logout from "./page/Logout";
import test from "./test/test";



class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return <HashRouter>
            <div>
                <AppFrame>
                    <Route path="/" exact component={Index} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/logout" component={Logout} />
                    <Route path="/test" component={test} />
                    <Route path="/formMap" component={AntFormMap} />
                    <Route path="/cssFilter" component={CssFilter} />
                    <Route path="/scrollReveal" component={ScrollTest} />
                    <Route path="/g2Example" component={G2Example} />
                    <Route path="/test" component={Test} />
                </AppFrame>
            </div>
        </HashRouter>
    }
}
export default Home;
