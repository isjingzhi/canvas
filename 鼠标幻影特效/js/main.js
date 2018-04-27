let c = document.getElementById("c");
let ctx = c.getContext("2d");
let w, h, cx, cy, l;
let particles = [];     //存放所有粒子
let b = {
    // n: 100,
    // a: 1,
    // s: 20,
};
let bgColor = '#000';  //背景颜色
let radiusDelta = .9;     //radius增量
let opacityDelta = -.03;   //opacity增量
// let bx = 0, by = 0;
// vx = 0, vy = 0;
// let td = 0;
// let p = 0;
// let hs = 0;
let color;
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
    cx = w / 2;
    cy = h / 2;
}

c.onmousemove = function (e) {
    cx = e.clientX - c.offsetLeft;
    cy = e.clientY - c.offsetTop;

    particles.push({
        x: cx,
        y: cy,
        r: .1,
        o: 1,
        // v: 0
    });
};

begin();