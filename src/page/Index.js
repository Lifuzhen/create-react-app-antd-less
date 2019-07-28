/**
 * Created by fuzhen on 2018/3/5.
 */

import React from "react";
import {Link} from "react-router-dom";
import G2 from "g2";
import $ from "jquery";
import Service from "../data/Service";

class Index extends React.Component{

    componentDidMount() {
        var data = [
            {name: 'Microsoft Internet Explorer', value: 56.33 },
            {name: 'Chrome', value: 24.03},
            {name: 'Firefox', value: 10.38},
            {name: 'Safari',  value: 4.77},
            {name: 'Opera', value: 0.91},
            {name: 'Proprietary or Undetectable', value: 0.2}
        ];
        var Stat = G2.Stat;
        var chart = new G2.Chart({
            id: 'c1',
            forceFit: true,
            height: 450
        });
        chart.source(data);
        // 重要：绘制饼图时，必须声明 theta 坐标系
        chart.coord('theta', {
            radius: 0.8 // 设置饼图的大小
        });
        chart.legend('name', {
            position: 'bottom',
            itemWrap: true,
            formatter: function(val) {
                for(var i = 0, len = data.length; i < len; i++) {
                    var obj = data[i];
                    if (obj.name === val) {
                        return val + ': ' + obj.value + '%';
                    }
                }
            }
        });
        chart.tooltip({
            title: null,
            map: {
                value: 'value'
            }
        });
        chart.intervalStack()
            .position(Stat.summary.percent('value'))
            .color('name')
            .label('name*..percent',function(name, percent){
                percent = (percent * 100).toFixed(2) + '%';
                return name + ' ' + percent;
            });
        chart.render();
        // 设置默认选中
        var geom = chart.getGeoms()[0]; // 获取所有的图形
        var items = geom.getData(); // 获取图形对应的数据
        geom.setSelected(items[1]); // 设置选中
    }

    render(){
        return <div>
            <div id="c1"></div>
            <Link to="/formMap">ant Design中form动态渲染的增删测试</Link>
        </div>
    }
}
export default Index;