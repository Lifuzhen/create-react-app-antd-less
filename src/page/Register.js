/**
 * Created by fuzhen on 2018/1/2.
 */
import React from "react";
import Service from "../data/Service";
import {Form, Icon, Button, Input, message, Checkbox, Modal} from "antd";
const FormItem = Form.Item;

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={
            confirmDirty:false,
            agreementVisible:false,

        }
    }
    checkPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('两次密码不一致');
        } else {
            callback();
        }
    };
    checkConfirm = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };
    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                if(values.agreement === undefined){
                    message.error("请同意我公司的服务条款")
                }else{
                    Service().registerUser(values.username,values.password).then((data)=>{
                        console.log(data);
                        if(data != undefined){
                            //成功注册后
                            message.success("注册成功,请登录");
                            this.props.form.resetFields();//清空表单里的数据
                            window.location.href = "/#/login";
                        }else{
                            message.error("注册失败")
                        }
                    }).catch(function (error) {
                        console.log(error);
                    })
                }
            }
        });
    };

    showAgreement = () => {
        this.setState({agreementVisible:true})
    };

    render(){
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
        const {getFieldDecorator}=this.props.form;
        return <div className="Register">
            <Form className="register-form" onSubmit={this.handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    label="手机号码"
                >
                    {getFieldDecorator('phone',{
                        rules:[{
                            pattern: /^1[34578]\d{9}$/, message: '手机号码格式不正确'},
                            {required: true , message : '请输入手机'}
                            ]
                    })(
                        <Input prefix={<Icon type="mail" />} placeholder="手机号码"/>
                    )}
                </FormItem>
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
                    {getFieldDecorator('password', {
                        rules: [{
                            required: true, message: '请输入密码',
                        }, {
                            validator: this.checkConfirm,
                        }],
                    })(
                        <Input prefix={<Icon type="lock"/>} type="password" placeholder="密码"/>
                    )}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="确认密码"
                >
                    {getFieldDecorator('confirm', {
                        rules: [{
                            required: true, message: '请确认密码',
                        }, {
                            validator: this.checkPassword,
                        }],
                    })(
                        <Input prefix={<Icon type="lock"/>} type="password" onBlur={this.handleConfirmBlur} placeholder="确认密码"/>
                    )}
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    {getFieldDecorator('agreement', {
                        valuePropName: 'checked',
                    })(
                        <Checkbox>阅读并同意我公司<a href="javascript:;" onClick={this.showAgreement}>服务条款</a></Checkbox>
                    )}
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" className="register-form-button">注册</Button>
                </FormItem>
            </Form>
            <Modal className="register-agreement-modal" visible={this.state.agreementVisible} onCancel={()=>{this.setState({agreementVisible:false})}} footer={null} title="服务条款">
                <h6>一、所有解释权归本公司所有</h6>
                <h6>二、不得非法传播不良信息，违者后果自负</h6>
                <h6>三、不要违反法律，法律是保护我们的。</h6>
                <Button type="primary" onClick={()=>{this.setState({agreementVisible:false})}}>确定</Button>
            </Modal>
        </div>
    }
}
export default Form.create()(Register);