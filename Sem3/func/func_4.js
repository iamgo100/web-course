const compose = (...funcs) => funcs
.reduce((accum, fn) => (...args) => accum(fn(...args), x => x));;
const qv = x => x * x;
const sc = x => x + 1;
console.log(qv(sc((5))))         /* 36 */
    .log(sc(qv((5))))         /* 26 */
    .log(compose(qv,sc)(5))
    .log(compose(sc,qv)(5));