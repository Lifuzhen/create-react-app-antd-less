/**
 * Created by fuzhen on 2018/3/5.
 */
import React from "react";
import {Link} from "react-router-dom";

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return <div className="home-page">
            <Link to="/formMap">ant Design中form动态渲染的增删测试</Link>
            <br/>
            <br/>
            <Link to="/cssFilter">css的filter属性</Link>
            <br/>
            <br/>
            <Link to="/scrollReveal">scrollReveal</Link>
            <br/>
            <br/>
            <Link to="/g2Example">G2</Link>
            <br/>
            <br/>
            <Link to="/test">Test</Link>
            <br/>
            <br/>
            <Link to="/nest">超级酷炫的粒子围绕鼠标的效果(react-canvas-nest)</Link>
            <br/>
            <br/>
        </div>
    }
}

export default Index;