2019-08-26
添加scrollreveal
npm install scrollreveal

使用：
import ScrollReveal from "scrollreveal";
<div className="left"> 测试scrollReveal——左 </div>
ScrollReveal().reveal('.left',{
            duration: 1000,
            distance: '40px',
            easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
            origin: 'left',
            interval: 150
        });
