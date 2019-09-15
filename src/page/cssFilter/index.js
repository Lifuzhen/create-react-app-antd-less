import React from "react";
import filter from "../../assets/filter.png";
import "./index.less";

class CSSFilterProperty extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }


    render(){
        return <div className="test-css-filter">
            <h1>none</h1>
            <div className="none">
                <img src={filter}/>
                <img src={filter}/>
            </div>
            <h1>blur</h1>
            <div className="blur">
                <img src={filter}/>
                <img src={filter}/>
            </div>
            <h1>brightness</h1>
            <div className="brightness">
                <img src={filter}/>
                <img src={filter}/>
            </div>
            <h1>contrast</h1>
            <div className="contrast">
                <img src={filter}/>
                <img src={filter}/>
            </div>
            <h1>drop-shadow</h1>
            <div className="drop-shadow">
                <img src={filter}/>
                <img src={filter}/>
            </div>
            <h1>grayscale</h1>
            <div className="grayscale">
                <img src={filter}/>
                <img src={filter}/>
            </div>
            <h1>hue-rotate</h1>
            <div className="hue-rotate">
                <img src={filter}/>
                <img src={filter}/>
            </div>
            <h1>invert</h1>
            <div className="invert">
                <img src={filter}/>
                <img src={filter}/>
            </div>
            <h1>opacity</h1>
            <div className="opacity">
                <img src={filter}/>
                <img src={filter}/>
            </div>
            <h1>saturate</h1>
            <div className="saturate">
                <img src={filter}/>
                <img src={filter}/>
            </div>
            <h1>sepia</h1>
            <div className="sepia">
                <img src={filter}/>
                <img src={filter}/>
            </div>
            <h1>url</h1>
            <div className="url">
                <img src={filter}/>
                <img src={filter}/>
            </div>
        </div>
    }
}

export default CSSFilterProperty;