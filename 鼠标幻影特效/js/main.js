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
let shape = 'square';
let isHollow = true;

(window.onresize = () => {
    c.width = w = window.innerWidth;
    c.height = h = window.innerHeight;
})();

class particle {
    constructor(xx, yy) {
        this.x = xx;    //坐标
        this.y = yy;
        this.r = .1;    //半径/半边长
        this.o = 1;     //alpha
    }
}

c.onmousemove = (e) => {
    particles.unshift(new particle(e.clientX, e.clientY));  //push()
};

(function begin() {
    hue += hueDelta;
    color = `hsl(${hue},100%,80%)`;
    ctx.globalAlpha = 1;
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, w, h);
    for (let p of particles) {
        let {x, y, r, o} = p;
        ctx.globalAlpha = o;
        ctx.fillStyle = color;
        ctx.strokeStyle = color;
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
                let R = r * Math.sqrt(2);
                let d45 = Math.PI / 4;
                ctx.beginPath();
                ctx.arc(x - r - r, y, R, -d45, d45);
                ctx.arc(x, y + r + r, R, -3 * d45, -d45);
                ctx.arc(x + r + r, y, R, 3 * d45, 5 * d45);
                ctx.arc(x, y - r - r, R, d45, 3 * d45);
                ctx.closePath();
                if (isHollow) ctx.stroke();
                else ctx.fill();
                break;
            }
            default:
                break;
        }
        //逐帧更新
        p.r += radiusDelta;
        p.o += opacityDelta;
    }
    //过滤掉opacity<=0的
    particles = particles.filter((p) => p.o > 0);   //map和filter并不改变原数组
    window.requestAnimationFrame(begin);
})();