import React from "react";
import {Form, Input, Button, Icon} from "antd";
import "./index.less";

const FormItem = Form.Item;
let id = 0;

class AntFormMap extends React.Component {
    handleSubmit = e => {
        const self = this;
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log(values);
            if (!err) {
                console.log(values);
            } else {

            }
        });
    };

    remove = k => {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        // We need at least one passenger
        if (keys.length === 1) {
            return;
        }
        // can use data-binding to set
        form.setFieldsValue({
            keys: keys.filter(key => key !== k),
        });
    };

    add = () => {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        const nextKeys = keys.concat(id++);
        // can use data-binding to set
        // important! notify form to detect changes
        form.setFieldsValue({
            keys: nextKeys,
        });
    };

    render() {
        const {getFieldDecorator, getFieldValue} = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 20 },
            },
        };
        const formItemLayoutWithOutLabel = {
            wrapperCol: {
                xs: { span: 24, offset: 0 },
                sm: { span: 20, offset: 4 },
            },
        };
        getFieldDecorator('keys', { initialValue: [] });
        const keys = getFieldValue('keys');
        const formItems = keys.map((x,index)=>{
            return <div className="form-item-wrap" key={x}>
                <FormItem>
                    {getFieldDecorator(`title[${x}]`, {
                        validateTrigger: ['onChange', 'onBlur'],
                        rules: [{required: true, message: "请输入title值"}],
                    })(
                        <Input placeholder="请输入title"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator(`value[${x}]`, {
                        validateTrigger: ['onChange', 'onBlur'],
                        rules: [{required: true, message: "请输入value的值"}],
                    })(
                        <Input placeholder="请输入value"/>
                    )}
                </FormItem>
                {
                    keys.length > 1 && <Icon
                        className="dynamic-delete-button"
                        type="close-circle-o"
                        onClick={() => this.remove(x)}
                        style={{cursor: "pointer", "color": "red"}}
                    />
                }
            </div>
        });
        return <Form className="ant-form-map-page" onSubmit={this.handleSubmit}>
            {formItems}
            <FormItem {...formItemLayoutWithOutLabel}>
                <Button type="dashed" onClick={this.add}>
                    <Icon type="plus"/>
                </Button>
            </FormItem>
            <FormItem {...formItemLayoutWithOutLabel}>
                <Button htmlType="submit" type="primary">确定</Button>
            </FormItem>
        </Form>
    }
}

export default Form.create()(AntFormMap);