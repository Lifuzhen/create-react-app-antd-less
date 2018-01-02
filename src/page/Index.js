/**
 * Created by fuzhen on 2017/12/27.
 */
import React from "react";
import "./index.less";
import {Button, message, Icon, Layout, Modal} from "antd";
import {Link} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
const { Header, Footer, Sider, Content } = Layout;


class Index extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:props.id || 0,
            visibleLogin:false,
            visibleRegister:false,

        }
    }

    showLoginForm(){
        this.setState({visibleLogin:true})
    }
    showRegisterForm(){
        this.setState({visibleRegister:true})
    }
    cancleModal(){
        this.setState({visibleRegister:false, visibleLogin:false})
    }
    render(){
        return <div className="Index">
            <Layout>
                <Header>
                    <div className="logo">
                        logo
                    </div>
                    <div className="index-header-right">
                        <a href="javascript:;" onClick={this.showLoginForm.bind(this)}><Button>登录</Button></a>
                        <a href="javascript:;" onClick={this.showRegisterForm.bind(this)}><Button>注册</Button></a>
                        <Link to="/logout"><Button>退出</Button></Link>
                    </div>
                </Header>
                <Layout>
                    <Sider>Sider</Sider>
                    <Content>Content</Content>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>


            <Modal visible={this.state.visibleLogin} footer={null} onCancel={this.cancleModal.bind(this)}>
                <Login />
            </Modal>
            <Modal visible={this.state.visibleRegister} footer={null} onCancel={this.cancleModal.bind(this)}>
                <Register />
            </Modal>
        </div>
    }
}
export default Index;

