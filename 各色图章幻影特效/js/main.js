let c = document.getElementById("c");
let ctx = c.getContext("2d");
let w, h;   //窗口/画布的宽高
let particles = [];     //存放所有粒子
let bgColor = '#000';  //背景颜色
let radiusDelta = .9;     //radius增量
let opacityDelta = -.03;   //opacity增量
let color;      //瞬时颜色
let hue = Math.random() * 360;
let hueDelta = [-.2, .2][~~(Math.random() * 2)];    //hue增量
let shape = 'square';   //图案的形状
let isHollow = true;
let rt2 = Math.sqrt(2);
let d45 = Math.PI / 4;

(window.onresize = () => {
    c.width = w = window.innerWidth;
    c.height = h = window.innerHeight;
})();

class Particle {
    constructor(xx, yy) {
        this.x = xx;    //坐标
        this.y = yy;
        this.r = .1;    //半径/半边长
        this.o = 1;     //alpha
    }
}

c.onmousemove = (e) => {
    particles.unshift(new Particle(e.clientX, e.clientY));  //和push()效果一样...
};

let draw = ({x, y, r, o}) => {   //参数解构
    switch (shape) {
        case 'square': {
            if (isHollow) ctx.strokeRect(x - r, y - r, r * 2, r * 2);
            else ctx.fillRect(x - r, y - r, r * 2, r * 2);
            break;
        }
        case 'circle': {
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.closePath();
            if (isHollow) ctx.stroke();
            else ctx.fill();
            break;
        }
        case 'cross': {
            r *= 1.2;
            if (isHollow) {
                ctx.strokeRect(x - r, y - r / 6, r * 2, r / 3);
                ctx.strokeRect(x - r / 6, y - r, r / 3, r * 2);
            } else {
                ctx.fillRect(x - r, y - r / 6, r * 2, r / 3);
                ctx.fillRect(x - r / 6, y - r, r / 3, r * 2);
            }
            break;
        }
        case 'concave': {
            let R = r * rt2, r2 = r * 2;
            ctx.beginPath();
            ctx.arc(x - r2, y, R, -d45, d45);
            ctx.arc(x, y + r2, R, -3 * d45, -d45);
            ctx.arc(x + r2, y, R, 3 * d45, 5 * d45);
            ctx.arc(x, y - r2, R, d45, 3 * d45);
            ctx.closePath();
            if (isHollow) ctx.stroke();
            else ctx.fill();
            break;
        }
        case 'flower': {
            let R = r / rt2, rr = r / 2;
            ctx.beginPath();
            ctx.arc(x + rr, y - rr, R, -3 * d45, d45);
            ctx.arc(x + rr, y + rr, R, -d45, 3 * d45);
            ctx.arc(x - rr, y + rr, R, d45, 5 * d45);
            ctx.arc(x - rr, y - rr, R, 3 * d45, 7 * d45);
            ctx.closePath();
            if (isHollow) ctx.stroke();
            else ctx.fill();
            break;
        }
        case 'star': {
            let R = r / 2;
            ctx.beginPath();
            ctx.moveTo(x, y - R * 3);
            ctx.lineTo(x + R, y - R);
            ctx.lineTo(x + R * 3, y);
            ctx.lineTo(x + R, y + R);
            ctx.lineTo(x, y + R * 3);
            ctx.lineTo(x - R, y + R);
            ctx.lineTo(x - R * 3, y);
            ctx.lineTo(x - R, y - R);
            ctx.closePath();
            if (isHollow) ctx.stroke();
            else ctx.fill();
            break;
        }
        default:
            break;
    }
};


(function begin() {
    hue += hueDelta;
    color = `hsl(${hue},100%,80%)`;
    ctx.globalAlpha = 1;
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, w, h);
    for (let p of particles) {
        ctx.globalAlpha = p.o;
        ctx.fillStyle = color;
        ctx.strokeStyle = color;
        draw(p);
        //逐帧更新  //基础数据类型是完全拷贝的,不能直接用解构后的变量
        p.r += radiusDelta;
        p.o += opacityDelta;
    }
    //过滤掉opacity<=0的
    particles = particles.filter((p) => p.o > 0);   //map和filter并不改变原数组
    window.requestAnimationFrame(begin);
})();

document.querySelectorAll('#top-left button').forEach((item) => {
    item.addEventListener("click", () => {
        shape = item.value;   //利用闭包
        document.querySelector('#top-left .active').classList.remove('active');
        item.classList.add('active');
    })
});
let toggleHollow = () => {
    if (!event.target.classList.contains('active')) {   //event可以在onclick方法作用域中使用
        document.querySelector('#down-left .active').classList.remove('active');
        event.target.classList.add('active');
        isHollow = !isHollow;
    }
};