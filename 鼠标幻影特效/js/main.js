    let c = document.getElementById("c");
    let ctx = c.getContext("2d");
    let w, h, cx, cy, l;
    let y = [];
    let b = {
        n: 100,
        c: false,    //  颜色  如果是false 则是随机渐变颜色
        bc: '#000',   //  背景颜色
        r: 0.9,     //radius
        o: 0.05,    //opacity
        a: 1,
        s: 20,
    };
    let bx = 0, by = 0, vx = 0, vy = 0;
    let td = 0;
    let p = 0;
    let hs = 0;
    resize();
    let color, color2;
    if (b.c) {
        color2 = b.c;
    } else {
        color = Math.random() * 360;
    }

    window.onresize = resize;

    function begin() {

        if (!b.c) {
            color += .1;
            color2 = 'hsl(' + color + ',100%,80%)';
        }
        ctx.globalAlpha = 1;
        ctx.fillStyle = b.bc;
        ctx.fillRect(0, 0, w, h);
        for (let i = 0; i < y.length; i++) {
            ctx.globalAlpha = y[i].o;
            ctx.fillStyle = color2;
            ctx.beginPath();
            ctx.arc(y[i].x, y[i].y, y[i].r, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
            y[i].r += b.r;
            y[i].o -= b.o;
            if (y[i].o <= 0) {
                y.splice(i, 1);
                i--;
            }
        }
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

        y.push({
            x: cx,
            y: cy,
            r: b.r,
            o: 1,
            v: 0
        });

    };
    /*c.mousedown(function(){
     c.on('mousemove',function(e){
     cx = e.pageX-c.offset().left;
     cy = e.pageY-c.offset().top;
     y.push({x:cx,y:cy,r:b.r,o:1});
     });
     c.on('mouseup',function(){
     c.off('mouseup');
     c.off('mousemove');
     c.off('moseleave');
     });
     c.on('mouseleave',function(){
     c.off('mouseup');
     c.off('mousemove');
     c.off('moseleave');
     });
     });*/

    begin();