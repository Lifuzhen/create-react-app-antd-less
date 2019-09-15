import React from "react";


class Test extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount() {

    }

    changeInputValue= () =>{
        console.log(this.refs.username.value);
    };
    render(){
        return <div>
            <input type="text" ref="username" onChange={this.changeInputValue}/>
        </div>
    }

}
export default Test;