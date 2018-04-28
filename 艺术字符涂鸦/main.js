let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let counter = 0;
const minFontSize = 3;
const mouse = {x: 0, y: 0, down: false};
const position = {x: 0, y: window.innerHeight / 2};     //应该是上一次鼠标的位置
const letters = "坚持一件你认为有价值的事情!";
const angleDistortion = 0; //角变形


function mouseMove(event) {
    mouse.x = event.pageX; //鼠标指针的位置
    mouse.y = event.pageY;
    draw();
}

function mouseUp(event) {
    mouse.down = false;
}

function mouseDown(event) {
    mouse.down = true;
    position.x = event.pageX;
    position.y = event.pageY;
    // document.getElementById("info")
}

function draw() {
    if (mouse.down) {
        const letter = letters[counter];
        const d = distance(position, mouse);
        const fontSize = minFontSize + d / 2;
        const stepSize = textWidth(letter, fontSize);

        if (d > stepSize) {
            //返回从X轴正向逆时针到（x,y）点的角度
            const angle = Math.atan2(mouse.y - position.y, mouse.x - position.x);
            ctx.font = `${fontSize}px Georgia`; //定义字号，字体
            ctx.fillStyle = "magenta";
            ctx.save(); //保存当前的环境状态
            ctx.translate(position.x, position.y); //将新的画布（0,0）改为（x,y）
            ctx.rotate(angle); //
            ctx.fillText(letter, 0, 0); //开始绘制文本时，相对于文本的位置
            ctx.restore(); //返回之前保存过的路径状态和属性。

            counter++;
            if (counter > letters.length - 1) {
                counter = 0;
            }
            position.x = position.x + Math.cos(angle) * stepSize;
            position.y = position.y + Math.sin(angle) * stepSize;
        }
    }
}


//决定绘制文本字体大小
//当鼠标按下时，获得鼠标移动前的x,y坐标，传入pt中
//当鼠标移动时，获得鼠标移动后的x,y坐标，传入pt2中
//通过获取这两个状态的坐标，来设置文字的大小，
//与函数textWidth()函数共同，表现出一种，速度越快，文字越大的效果
function distance(pt, pt2) {
    let xs;
    let ys;
    xs = pt2.x - pt.x;
    xs = xs * xs;
    ys = pt2.y - pt.y;
    ys = ys * ys;
    return Math.sqrt(xs + ys);
}

function textWidth(string, size) {
    ctx.font = size + "px Georgia"; //定义字号，字体
    if (ctx.fillText) {
        return ctx.measureText(string).width; //该函数以像素指定文字的宽度。
    } else if (ctx.mozDrawText) {
        return ctx.mozMeasureText(string);
    }
}

(window.onresize = function (event) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})();

canvas.addEventListener('mousemove', mouseMove, false);
canvas.addEventListener('mousedown', mouseDown, false);
canvas.addEventListener('mouseup', mouseUp, false);
canvas.addEventListener('mouseout', mouseUp, false);

(function init() {
})();