/**
 * Created by fuzhen on 2018/1/2.
 */
import React from "react";
import {Form, Icon, Input, Button, Modal, message} from "antd";
const FormItem = Form.Item;

class Login extends React.Component{


    constructor(props){
        super(props);
        this.state={
            forgetPwdVisible:false,
            resetPwdVisible:false,
            phone:"",
            password:"",
            code:"",
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.form.resetFields();//清空表单里的数据
            }
        });
    };
    //点击忘记密码弹出找回密码的模态框
    forgetPwd = () => {
        this.setState({
            phone:"",
            password:"",
            code:"",
            resetPwdVisible:false,
            forgetPwdVisible:true
        });
    };
    //上一步
    backForgetPwdModal = () => {
        this.setState({resetPwdVisible:false})
    };
    //获取手机号
    getPhone = (e) => {
        this.setState({phone:e.target.value});
    };
    //发送验证码
    getIdentifyCode = () => {
        if(this.state.phone === ""){
            message.error("手机号不能为空")
        }else if(!this.state.phone.match(/^1[34578]\d{9}$/)){
            message.error("请输入正确的手机号")
        }else{
            message.success("验证码已发送");
            this.setState({resetPwdVisible:true})
        }
    };
    //获取重新填写的密码
    getPwd = (e) => {
        this.setState({password:e.target.value});
    };
    //获取填写的验证码
    getICode = (e) => {
        this.setState({code:e.target.value});
    };
    //重置密码
    resetPassword = (e) => {
        if(this.state.password === ""){
            message.error("密码不能为空");
        }else if(this.state.code === ""){
            message.error("验证码不能为空");
        }else{
            message.success("修改成功");
            this.setState({forgetPwdVisible:false});
        }
    };
    disabledPwd = () => {
        const pwd=document.getElementById("pwd");
        pwd.type='password'
    };
    showPwd = () => {
        const pwd=document.getElementById("pwd");
        pwd.type='text'
    };
    render(){
        const suffix=<i className="iconfont icon-kanguo" onMouseOver={this.showPwd} onMouseOut={this.disabledPwd}></i>
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        const {getFieldDecorator} = this.props.form;
        return <div className="Login">
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem
                    {...formItemLayout}
                    label="用户名"
                >
                    {getFieldDecorator('username',{
                        rules:[{required:true,message:"请输入用户名"}]
                    })(
                        <Input prefix={<Icon type='user'/>} placeholder="用户名"/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="密码"
                >
                    {getFieldDecorator('password',{
                        rules:[{required:true,message:"请输入密码"}]
                    })(
                        <Input prefix={<Icon type='lock' />} placeholder="密码" type="password"/>
                    )}
                </FormItem>
                <FormItem
                    {...tailFormItemLayout}
                >
                    <a className="login-form-forgot" href="javascript:;" onClick={this.forgetPwd}>忘记密码</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                </FormItem>
            </Form>
            <Modal
                className="login-resetPwd-modal"
                width={350}
                visible={this.state.forgetPwdVisible}
                footer={null}
                onCancel={()=>{this.setState({forgetPwdVisible:false})}}
                title="找回密码"
            >
                {this.state.forgetPwdVisible && <div>
                    {this.state.resetPwdVisible && <Icon type="arrow-left" onClick={this.backForgetPwdModal}/>}
                    {!this.state.resetPwdVisible && <div className="login-forgetPwd-modal-phone">
                        <p>验证码将会发送至您注册的手机</p>
                        <Input placeholder="手机" value={this.state.phone} onChange={this.getPhone}/>
                        <Button onClick={this.getIdentifyCode} type="primary">获取验证码</Button>
                    </div>}
                    {this.state.resetPwdVisible && <div className="login-forgetPwd-modal-form">
                        <p>验证码已发送，请重置密码</p>
                        <Form>
                            <FormItem>
                                <Input value={this.state.phone} disabled={true} />
                            </FormItem>
                            <FormItem>
                                <Input id="pwd" type="password" value={this.state.password} placeholder="请重新填写密码" onChange={this.getPwd} suffix={suffix}/>
                            </FormItem>
                            <FormItem>
                                <Input placeholder="请填写验证码" value={this.state.code} onChange={this.getICode}/>
                            </FormItem>
                            <FormItem>
                                <Button type="primary" onClick={this.resetPassword}>确定</Button>
                            </FormItem>
                        </Form>
                    </div>}
                </div>}
            </Modal>
        </div>
    }
}
export default Form.create()(Login);