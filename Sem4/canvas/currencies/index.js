const makeCanvas = (x, y) => {
    const canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d');
    canvas.setAttribute('width', x);
    canvas.setAttribute('height', y);
    return {canvas, ctx}
};

const {canvas, ctx} = makeCanvas(300, 120);
document.querySelector('#cnv').appendChild(canvas);
ctx.lineWidth = 1;
ctx.strokeStyle = 'black';
ctx.beginPath();
ctx.rect(1, 2, canvas.width-2, canvas.height-2);
ctx.stroke();

document.querySelector('#btn').addEventListener('click', async () => {
    data = await fetch('https://kodaktor.ru/j/rates').then(res => res.json());
    let arr = new Array();
    let names = new Array();
    data.forEach(el => {
        arr.push(parseFloat(el.sell));
        names.push(el.name);
    });
    let cWidth = (canvas.width - 20)/arr.length - 2;
    let cHeight = arr[0];
    for (let i = 1; i < arr.length; i++) {
        cHeight = Math.max(cHeight,arr[i])
    };
    arr.forEach((el, i) => arr[i] = el/cHeight*100);
    let dotW = 11;
    for (let  i = 0; i < arr.length; i++) {
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'red';
        ctx.font = '8px';
        ctx.textAlign = 'center';
        ctx.beginPath();
        ctx.fillRect(dotW, 110 - arr[i], cWidth, arr[i]);
        ctx.strokeText(names[i], dotW + cWidth/2, 108, cWidth);
        dotW += cWidth + 2;
    };
});