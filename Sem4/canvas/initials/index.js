function getBezierBasis(i, n, t) {
    function f(n) {
        return (n <= 1) ? 1 : n * f(n - 1);
    }
    return (f(n)/(f(i)*f(n - i)))* Math.pow(t, i)*Math.pow(1 - t, n - i)
};

function getBezierCurve(arr, step) {
    let res = [];
    step = step/arr.length;
    for (let t = 0.0; t < 1 + step; t += step) {
        if (t > 1) {
            t = 1;
        }
        let ind = res.length;
        res[ind] = new Array(0, 0);
        for (let i = 0; i < arr.length; i++) {
            let b = getBezierBasis(i, arr.length - 1, t);
            res[ind][0] += arr[i][0] * b;
            res[ind][1] += arr[i][1] * b;
        }
    }
    return res
};

function drawLines(ctx, arr) {
    let i = 0;
    for (let i = 0; i < arr.length; ++i) {
        ctx.moveTo(arr[i][0],arr[i][1]);
        ctx.lineTo(arr[i+1][0],arr[i+1][1]);
        ctx.stroke();
    }
};

const makeCanvas = (x, y) => {
    const canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d');
    canvas.setAttribute('width', x);
    canvas.setAttribute('height', y);
    return {canvas, ctx}
};

const {canvas, ctx} = makeCanvas(80, 100);
document.body.appendChild(canvas);
ctx.lineWidth = 2;
ctx.strokeStyle = 'black';
ctx.beginPath();
ctx.rect(1, 2, canvas.width-2, canvas.height-2);
ctx.stroke();

let arr = new Array();
arr[0] = new Array(10, 70);
arr[1] = new Array(40, 100);
arr[2] = new Array(65, 70);
let flow = getBezierCurve(new Array(arr[0], arr[1], arr[2]), 0.01);

ctx.strokeStyle = 'blue';
ctx.beginPath();
ctx.moveTo(10,10);
ctx.lineTo(10,60);
ctx.moveTo(10,10);
ctx.lineTo(30,10);
ctx.rect(31,59,1,1);
ctx.moveTo(40,60);
ctx.lineTo(40,25);
ctx.lineTo(60,10);
ctx.lineTo(60,60);
ctx.moveTo(40,35);
ctx.lineTo(60,35);
ctx.rect(65,59,1,1);
ctx.stroke();

ctx.strokeStyle = 'red';
ctx.beginPath();
drawLines(ctx, flow);