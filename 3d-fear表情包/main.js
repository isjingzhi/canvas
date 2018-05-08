let timer = null;

const cub = document.getElementById('scene');
const f = document.getElementById('front');
const a = document.getElementById('after');
const l = document.getElementById('left');
const r = document.getElementById('right');
const t = document.getElementById('top');
const b = document.getElementById('bottom');


window.onload = function () {
    timer = setTimeout(function () {
        reader();
        setTimeout(arguments.callee, 16.7);
    }, 16.7);
};

(function () {
    let scale = 0, rotateX = 0, speed = 2, n = 0, m = 0;
    let flag = true;

    function reader() {
        const patten = /-?\d+\.?\d*/g;
        const rotate = cub.style.transform.match(patten);
        // 形态1
        if (flag) {
            if (+rotate[4] > 0.6) {
                scale = (+rotate[4] - 0.002)
            }
            else {
                flag = false;
            }
            if (+rotate[0] > -15) {
                rotateX = +rotate[0] - 0.05;
            }
            if (speed > 0) {
                speed = speed - 0.0008;
            }
        }
        //切换形态2
        else {
            if (+rotate[4] < 5) {
                scale = (+rotate[4] + 0.008)
            }
            if (+rotate[0] > -15) {
                rotateX = +rotate[0] - 0.05;
            }
            if (speed > 0) {
                speed = speed - 0.0085;
            }
            if (n < 120) {
                n++;
            }
            if (m < 90) {
                m = m + 0.5;
            }
            else {
                speed = 0;
                clearTimeout(timer);
            }
            t.style.transform = 'rotateY(' + n + 'deg)';
            a.style.transform = 'rotateX(' + -m + 'deg)';
            l.style.transform = 'rotateX(' + -m + 'deg)';
        }
        cub.style.transform = "rotateX(" + (rotateX) + "deg) rotateY(" + (+rotate[1] - speed) + "deg) scale3d(" + scale + "," + scale + "," + scale + ")";
    }

    return window['reader'] = reader;
})();