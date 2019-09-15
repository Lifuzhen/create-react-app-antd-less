import React from "react";
import logo from "../../assets/logo.png";
import ScrollReveal from "scrollreveal";
import "./index.less";


class ScrollTest extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        ScrollReveal().reveal('.left', {
            duration: 1000,
            distance: '40px',
            easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
            origin: 'left',
            interval: 150
        });
        ScrollReveal().reveal('.right', {
            duration: 1000,
            distance: '40px',
            easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
            origin: 'right',
            interval: 150
        });
        ScrollReveal().reveal('.bottom', {
            duration: 1500,
            distance: '80px',
            easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
            origin: 'bottom',
            interval: 200
        });
        // ScrollReveal().reveal('.bottom',{
        //     duration: 1000,
        //     distance: '40px',
        //     easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
        //     interval: 100,
        //     origin: 'bottom',
        //     scale: 0.9,
        //     viewFactor: 0.5
        // })
    }

    render(){
        return <div>
            <div className="left">
                测试scrollReveal——左
            </div>
            <div className="right">
                测试scrollReveal——右
            </div>
            <div className="bottom">
                <img src={logo}/>
            </div>

            <div className="left">
                <img src={logo}/>
            </div>

            <div className="right">
                <img src={logo}/>
            </div>
        </div>
    }
}
export default ScrollTest