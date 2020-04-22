const [a1, b1, c1, a2, b2, c2] = [1, 3, 2, 9, 2, 7];
const det = a1*b2-a2*b1;
const det1 = c1*b2-c2*b1;
const det2 = a1*c2-a2*c1;
const x = det1/det;
const y = det2/det;
console.log(`Ответ: x = ${x}, y = ${y}`);