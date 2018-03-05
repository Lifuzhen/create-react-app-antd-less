/**
 * Created by fuzhen on 2017/12/27.
 */
import React from "react";
import "./index.less";
import {Button, Layout, Menu, Icon} from "antd";
import {Link} from "react-router-dom";
import Cookie from 'cookie';
import Home from "../Home";
import logo from "../assets/logo.png";
const { Header, Footer, Content} = Layout;


// ReactDOM.render(<Home/>, document.getElementById("root"));

class Index extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:props.id || 0,
        }
    }
    render(){
        const {children} = this.props;
        const { user } = Cookie.parse(document.cookie);
        return <div className="Index">
            <Layout>
                <Header>
                    <div className="logo">
                        <Link to="/"><img src={logo}/></Link>
                    </div>
                    <div className="nav-menu">
                        <Menu mode="horizontal">
                            <Menu.Item key="chuan">
                                川
                            </Menu.Item>
                            <Menu.Item key="lu">
                                鲁
                            </Menu.Item>
                            <Menu.Item key="yue">
                                粤
                            </Menu.Item>
                            <Menu.Item key="su">
                                苏
                            </Menu.Item>
                            <Menu.Item key="zhe">
                                浙
                            </Menu.Item>
                            <Menu.Item key="min">
                                闽
                            </Menu.Item>
                            <Menu.Item key="xiang">
                                湘
                            </Menu.Item>
                            <Menu.Item key="hui">
                                徽
                            </Menu.Item>
                        </Menu>
                    </div>
                    { user == undefined || user == "" && <div className="index-header-right">
                        <Link to="/login"><Button>登录</Button></Link>
                        <Link to="/register"><Button>注册</Button></Link>

                        {/*<Link to="/test">接口数据</Link>*/}
                    </div>}
                    {user && user != "undefined" && user !== "" && <div className="index-header-right">
                        <Link to="/logout"><Button>退出</Button></Link>
                    </div>}
                </Header>
                <Content style={{padding: "0"}}>
                    {children}
                </Content>
            </Layout>
        </div>
    }
}
export default Index;

