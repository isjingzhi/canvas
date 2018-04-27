let c = document.getElementById("c");
let ctx = c.getContext("2d");
let w, h;   //窗口/画布的宽高
let particles = [];     //存放所有粒子
let bgColor = '#000';  //背景颜色
let radiusDelta = .9;     //radius增量
let opacityDelta = -.03;   //opacity增量
let color;      //瞬时颜色
let hue = Math.random() * 360;
let hueDelta = .2;    //hue增量

window.onresize = resize;
resize();

function begin() {
    hue += hueDelta;
    color = `hsl(${hue},100%,80%)`;
    ctx.globalAlpha = 1;
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, w, h);
    for (let p of particles) {
        ctx.globalAlpha = p.o;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        p.r += radiusDelta;
        p.o += opacityDelta;
    }
    //过滤掉opacity<=0的
    particles = particles.filter((p) => p.o > 0);   //map和filter并不改变原数组
    window.requestAnimationFrame(begin);
}

function resize() {
    w = window.innerWidth;
    h = window.innerHeight;
    c.width = w;
    c.height = h;
}

class particle {
    constructor(xx, yy) {
        this.x = xx;    //坐标
        this.y = yy;
        this.r = .1;    //半径
        this.o = 1;     //alpha
    }
}

c.onmousemove = (e) => {
    particles.unshift(new particle(e.clientX, e.clientY));
};

begin();