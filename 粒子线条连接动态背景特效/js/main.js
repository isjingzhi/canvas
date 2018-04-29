let max_particles = 100;
let particles = [];
let frequency = 100;
let init_num = max_particles;
let max_time = frequency * max_particles;
let time_to_recreate = false;

let w, h;

// Enable repopolate
setTimeout(function () {
    time_to_recreate = true;
}.bind(this), max_time);

// Popolate particles
popolate(max_particles);

const tela = document.querySelector('#canvas');
tela.width = w = window.innerWidth;
tela.height = h = window.innerHeight;
// $("body").append(tela);

const ctx = tela.getContext('2d');

class Particle {
    constructor(ctx, options) {
        let colors = ["#feea00", "#a9df85", "#5dc0ad", "#ff9a00", "#fa3f20"];
        let types = ["double", "wrap", "fill", "empty"];
        this.random = Math.random();
        this.ctx = ctx;
        this.progress = 0;

        this.x = (w / 2) + (Math.random() * 200 - Math.random() * 200);
        this.y = (h / 2) + (Math.random() * 200 - Math.random() * 200);
        this.w = w;
        this.h = h;
        this.radius = 1 + (8 * this.random);
        this.type = types[Particle.randomIntFromInterval(0, types.length - 1)];     //通过类名调用静态方法...
        this.color = colors[Particle.randomIntFromInterval(0, colors.length - 1)];
        this.a = 0;
        this.s = (this.radius + (Math.random())) / 10;
        //this.s = 12 //Math.random() * 1;
    }

    getCoordinates() {
        return {
            x: this.x,
            y: this.y
        }
    }

    static randomIntFromInterval(min, max) {    //静态方法,因为函数体内没有this!!!!
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    render() {
        // Create arc
        let lineWidth = 0.2 + (2.8 * this.random);
        let color = this.color;
        switch (this.type) {
            case "wrap":  //空心套实心
                this.createArcFill(this.radius, color);
                this.createArcEmpty(this.radius + lineWidth, lineWidth / 2, color);
                break;
            case "fill":    //实心
                this.createArcFill(this.radius, color);
                break;
            case "empty":   //空心
                this.createArcEmpty(this.radius, lineWidth, color);
                break;
            case "double":  //空心套空心
                this.createArcEmpty(this.radius, lineWidth / 2, color);
                this.createArcEmpty(this.radius - lineWidth * 2, lineWidth / 2, color);
                break;
            default:
                break;

        }
    }

    createArcFill(radius, color) {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, radius, 0, 2 * Math.PI);
        this.ctx.fillStyle = color;
        this.ctx.fill();
        this.ctx.closePath();
    }

    createArcEmpty(radius, lineWidth, color) {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, radius, 0, 2 * Math.PI);
        this.ctx.lineWidth = lineWidth;
        this.ctx.strokeStyle = color;
        this.ctx.stroke();
        this.ctx.closePath();
    }

    move() {

        this.x += Math.cos(this.a) * this.s;
        this.y += Math.sin(this.a) * this.s;
        this.a += Math.random() * 0.4 - 0.2;

        //边界检测
        if (this.x < -this.radius || this.x > this.w + this.radius) {
            return false
        }

        if (this.y < -this.radius || this.y > this.h + this.radius) {
            return false
        }
        this.render();
        return true
    }

    static calculateDistance(v1, v2) {
        let x = Math.abs(v1.x - v2.x);
        let y = Math.abs(v1.y - v2.y);
        return Math.sqrt((x * x) + (y * y));
    }
}

/*
 * Function to clear layer ctx
 * @num:number number of particles
 */
function popolate(num) {
    for (let i = 0; i < num; i++) {
        setTimeout(
            function (x) {
                return function () {
                    // Add particle
                    particles.push(new Particle(ctx))
                };
            }(i)
            , frequency * i);
    }
    return particles.length
}

function clear() {
    // ctx.globalAlpha=0.04;
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, tela.width, tela.height);
    // ctx.globalAlpha=1;
}

//两点一线
function connection() {
    let old_element = null;
    particles.forEach(function (element, i) {
        if (i > 0) {
            let box1 = old_element.getCoordinates();
            let box2 = element.getCoordinates();
            ctx.beginPath();
            ctx.moveTo(box1.x, box1.y);
            ctx.lineTo(box2.x, box2.y);
            ctx.lineWidth = 0.45;
            ctx.strokeStyle = "rgba(255,255,255,0.5)";
            ctx.stroke();
            ctx.closePath();
        }

        old_element = element
    })
}

/*
 * Function to update particles in ctx
 */
(function update() {
    clear();
    connection();
    //粒子位置更新的同时过滤
    particles = particles.filter((p) => p.move());
    // Recreate particles
    if (time_to_recreate) {
        if (particles.length < init_num) {
            popolate(1);
        }
    }
    requestAnimationFrame(update.bind(this));   //这里的this是window,因为this指向的是所在函数体(也就是update定义的内部)被调用的对象,而不是参数体中!!!!!
})();
