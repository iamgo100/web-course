const curryPow = x => y => x ** y;
const partiPow = x => y => y ** x;
console.log(curryPow(2)(10));
        
const qv = partiPow(2);
const cb = partiPow(3);

console.log(qv(5));
console.log(cb(5));