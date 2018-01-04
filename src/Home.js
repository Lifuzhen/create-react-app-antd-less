/**
 * Created by fuzhen on 2017/12/28.
 */
import React from "react";
import {Route, HashRouter} from "react-router-dom";
import Index from "./page/Index";
import Login from "./page/Login";
import Register from "./page/Register";
import Logout from "./page/Logout";
import test from "./node/test";


class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return <HashRouter>
            <div>
                <Route path="/" exact component={Index} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/logout" component={Logout} />
                <Route path="/test" component={test} />
            </div>
        </HashRouter>
    }
}
export default Home;
