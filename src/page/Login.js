/**
 * Created by fuzhen on 2018/1/2.
 */
import React from "react";
import {Form, Icon, Input, Button, Checkbox, message} from "antd";
import {Link} from "react-router-dom";
const FormItem = Form.Item;

class Login extends React.Component{

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    forgetPwd(){
        message.info("忘记密码页面还没有完善")
    }
    componentWillUnmount(){
        this.props.form.resetFields();//清空表单里的数据
    }
    render(){
        const {getFieldDecorator} = this.props.form;
        return <div className="Login">
            <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
                <FormItem>
                    {getFieldDecorator('username',{
                        rules:[{required:true,message:"请输入用户名"}]
                    })(
                        <Input prefix={<Icon type='user' style={{color:"rgba(0,0,0,.25)"}}/>} placeholder="用户名"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password',{
                        rules:[{required:true,message:"请输入密码"}]
                    })(
                        <Input prefix={<Icon type='lock' style={{color:"rgba(0,0,0,.25)"}}/>} placeholder="密码"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a className="login-form-forgot" href="javascript:;" onClick={this.forgetPwd.bind(this)}>忘记密码</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                </FormItem>
            </Form>
        </div>
    }
}
export default Form.create()(Login);