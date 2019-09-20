import React from "react";
import ReactCanvasNest from 'react-canvas-nest';


class Nest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        return <div style={{background: "#F1F2F6"}}>
            <ReactCanvasNest className='canvasNest' config={{
                pointColor: '173, 188, 213 ',
                lineColor: '185, 198,219',
                lineWidth: 2,
                count: 120,
                pointR: 1.5
            }} style={{zIndex: 99}}/>
           <div style={{textAlign:"center"}}>
               <h1>API</h1>
               <h2>className</h2>
               <p>Support className attribute</p>
               <h2>config</h2>
               <table style={{margin:"0 auto"}} border>
                   <tr>
                       <th>Property</th>
                       <th>Description</th>
                       <th>Default</th>
                   </tr>
                   <tr>
                       <td>count</td>
                       <td>count of points</td>
                       <td>88</td>
                   </tr>
                   <tr>
                       <td>pointR</td>
                       <td>radius of the point</td>
                       <td>1</td>
                   </tr>
                   <tr>
                       <td>pointColor</td>
                       <td></td>
                       <td>114, 114, 114</td>
                   </tr>
                   <tr>
                       <td>pointOpacity</td>
                       <td>transparency of points</td>
                       <td>1</td>
                   </tr>
                   <tr>
                       <td>dist</td>
                       <td>maximum distance between two point</td>
                       <td>6000</td>
                   </tr>
                   <tr>
                       <td>lineColor</td>
                       <td></td>
                       <td>0, 0, 0</td>
                   </tr>
                   <tr>
                       <td>lineWidth</td>
                       <td>multiple of line width</td>
                       <td>1</td>
                   </tr>
                   <tr>
                       <td>follow</td>
                       <td>mouse follow</td>
                       <td>true</td>
                   </tr>
                   <tr>
                       <td>mouseDist</td>
                       <td>distance between point and mouse</td>
                       <td>20000</td>
                   </tr>
               </table>
               <h2>style</h2>
               <p>Support style attribute, default style as follows:</p>
               <table style={{margin:"0 auto"}}>
                   <tr>
                       <th>Property</th>
                       <th>Default</th>
                   </tr>
                   <tr>
                       <td>zIndex</td>
                       <td>-1</td>
                   </tr>
                   <tr>
                       <td>opacity</td>
                       <td>1</td>
                   </tr>
                   <tr>
                       <td>display</td>
                       <td>block</td>
                   </tr>
                   <tr>
                       <td>position</td>
                       <td>absolute</td>
                   </tr>
               </table>
           </div>
        </div>
    }

}

export default Nest;