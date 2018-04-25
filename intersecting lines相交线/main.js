let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let cw = canvas.width = window.innerWidth;
let ch = canvas.height = window.innerHeight;

//ctx.fillStyle = "#000";
let linesNum = 16;//线段总数
let linesRy = [];//存储所有的线段
let requestId = null;
let color = "#ccc";

//line类
function Line(flag) {
    this.flag = flag;
    //线段的两个端点都在窗口边框上
    this.a = {};//起点
    this.b = {};//终点
    if (flag === "v") {//"v"代表大致上竖直的线
        this.a.y = 0;
        this.b.y = ch;
        this.a.x = Math.random() * cw;
        this.b.x = Math.random() * cw;
    } else if (flag === "h") {//"h"代表大致上水平的线
        this.a.x = 0;
        this.b.x = cw;
        this.a.y = Math.random() * ch;
        this.b.y = Math.random() * ch;
    }
    //速度/增量(px),(-1.5~1.5)
    this.va = Math.random() * 3 - 1.5;
    this.vb = Math.random() * 3 - 1.5;

    this.draw = function () {
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.moveTo(this.a.x, this.a.y);
        ctx.lineTo(this.b.x, this.b.y);
        ctx.stroke();
    };

    this.update = function () {
        if (this.flag === "v") {
            this.a.x += this.va;
            this.b.x += this.vb;
        } else if (flag === "h") {
            this.a.y += this.va;
            this.b.y += this.vb;
        }

        this.edges();
    };

    //判断线条移动到边界时
    this.edges = function () {
        if (this.flag === "v") {
            if (this.a.x < 0 || this.a.x > cw)
                this.va *= -1;
            if (this.b.x < 0 || this.b.x > cw)
                this.vb *= -1;
        } else if (this.flag === "h") {
            if (this.a.y < 0 || this.a.y > ch)
                this.va *= -1;
            if (this.b.y < 0 || this.b.y > ch)
                this.vb *= -1;
        }
    }

}

for (let i = 0; i < linesNum; i++) {
    let flag = i % 2 === 0 ? "h" : "v";
    let l = new Line(flag);
    linesRy.push(l);
}

//刷新canvas
function Draw() {
    requestId = window.requestAnimationFrame(Draw);
    ctx.clearRect(0, 0, cw, ch);

    for (let i = 0; i < linesRy.length; i++) {
        let l = linesRy[i];
        l.draw();
        l.update();
    }
    for (let i = 0; i < linesRy.length; i++) {
        let l = linesRy[i];
        for (let j = i + 1; j < linesRy.length; j++) {
            let l1 = linesRy[j];
            Intersect2lines(l, l1);
        }
    }
}

function Init() {
    linesRy.length = 0;
    for (let i = 0; i < linesNum; i++) {
        //公平算法:垂直或水平线条按照宽高比例分配数量
        let flag = Math.random() * (cw + ch) < cw ? 'v' : 'h';
        let l = new Line(flag);
        linesRy.push(l);
    }

    if (requestId) {
        window.cancelAnimationFrame(requestId);
        requestId = null;
    }

    cw = canvas.width = window.innerWidth;
    ch = canvas.height = window.innerHeight;

    Draw();
}

setTimeout(function () {
    Init();
    addEventListener('resize', Init, false);
}, 15);

function Intersect2lines(l1, l2) {
    let p1 = l1.a,
        p2 = l1.b,
        p3 = l2.a,
        p4 = l2.b;
    //计算交点位置
    let denominator = (p4.y - p3.y) * (p2.x - p1.x) - (p4.x - p3.x) * (p2.y - p1.y);
    let ua = ((p4.x - p3.x) * (p1.y - p3.y) - (p4.y - p3.y) * (p1.x - p3.x)) / denominator;
    let ub = ((p2.x - p1.x) * (p1.y - p3.y) - (p2.y - p1.y) * (p1.x - p3.x)) / denominator;
    let x = p1.x + ua * (p2.x - p1.x);
    let y = p1.y + ua * (p2.y - p1.y);
    if (ua > 0 && ub > 0)
        markPoint({
            x: x,
            y: y
        });
}

function markPoint(p) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, 1.5, 0, 2 * Math.PI);
    ctx.fill();
}

//屏幕点击,随机换色~(最标准的做法还是通过计算十进制的rgb(,,)
canvas.addEventListener("click",()=>{
    color = '#' + parseInt(0xffffff * Math.random()).toString(16);
});