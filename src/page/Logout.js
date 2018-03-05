/**
 * Created by fuzhen on 2018/1/2.
 */
import React from "react";
import Cookie from "cookie";
import {Modal} from "antd";
import Service from "../data/Service";
class Logout extends React.Component{

    componentDidMount(){
        document.cookie = Cookie.serialize("user","");
        setTimeout(() => document.location.href = "/", 1000);

    }
    render(){
        return <div>
            <Modal width={410} className="session-timeout" visible={true} title="正在退出" footer={null}>
                <div>
                    <img style={{width: "375px", marginTop: "-10px", marginBottom: "20px"}} src="/assets/exit.png"/>
                </div>
            </Modal></div>;
    }
}
export default Logout;