/**
 * Created by fuzhen on 2017/12/27.
 */
import React from "react";
import "./index.less";
import {Button, Layout} from "antd";
import {Link} from "react-router-dom";
const { Header, Footer, Content } = Layout;


class Index extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:props.id || 0,
        }
    }

    render(){
        return <div className="Index">
            <Layout>
                <Header>
                    <div className="logo">
                        logo
                    </div>
                    <div className="index-header-right">
                        <Link to="/login"><Button>登录</Button></Link>
                        <Link to="/register"><Button>注册</Button></Link>
                        <Link to="/logout"><Button>退出</Button></Link>
                        <Link to="/test">接口数据</Link>
                    </div>
                </Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>
        </div>
    }
}
export default Index;

