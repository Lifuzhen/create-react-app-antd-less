import React from "react";
import {Form, Input, Button, Icon} from "antd";
import "./index.less";

const FormItem = Form.Item;


class AntFormMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [
                {
                    key: 0,
                    title: undefined,
                    value: undefined
                }
            ]
        }
    }

    componentDidMount() {

    }

    handleSubmit(e) {
        const self = this;
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values);
            } else {

            }
        });
    }

    removeItem(index) {
        this.state.arr.splice(index,1);
        this.forceUpdate();
    }

    addItems() {
        this.state.arr.push(
            {
                key: this.state.arr.length,
                title: undefined,
                value: undefined
            }
        );
        this.forceUpdate();
    }

    changeTitle(index, e){
        console.log(index);
        console.log(e.target.value);
        this.state.arr[index].title = e.target.value;
        this.forceUpdate();

        console.log(this.state.arr);
    }

    changeValue(index, e){
        console.log(index);
        console.log(e.target.value);
        this.state.arr[index].value = e.target.value;
        this.forceUpdate();
    }

    render() {
        const {getFieldDecorator} = this.props.form;

        return <Form className="ant-form-map-page" onSubmit={this.handleSubmit.bind(this)}>
            {this.state.arr.map((x, index)=>{
                return <div className="form-item-wrap" key={index}>
                    <FormItem>
                        {getFieldDecorator('title', {
                            rules: [{required: true, message: "请输入title值"}],
                            initialValue: x.title
                        })(
                            <Input placeholder="请输入title" onChange={((e)=>{()=> this.changeTitle.bind(this,index, e)})(index)}/>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('value', {
                            rules: [{required: true, message: "请输入value的值"}],
                            initialValue:x.value
                        })(
                            <Input placeholder="请输入value" onChange={this.changeValue.bind(this,index)}/>
                        )}
                    </FormItem>
                    <div className="delete-props">
                        {this.state.arr.length != 1 && <Icon
                            className="dynamic-delete-button"
                            type="close-circle-o"
                            onClick={this.removeItem.bind(this, index)}
                            style={{cursor: "pointer", "color": "red"}}
                        />}
                    </div>
                </div>
            })}
            <FormItem>
                <Button type="dashed" onClick={this.addItems.bind(this)}>
                    <Icon type="plus"/>
                </Button>
            </FormItem>
            <FormItem>
                <Button htmlType="submit" type="primary">确定</Button>
            </FormItem>
        </Form>
    }
}

export default Form.create()(AntFormMap);