const fDeg = 32, roubles = 25000, a = 8, b = 45, c = -18;
const cDeg = 5/9*(fDeg-32);
const dollars = roubles/75.45;
discr = (a,b,c) => b*b - 4*a*c;
const x1 = (-b + Math.sqrt(discr(a,b,c)))/(2*a);
const x2 = (-b - Math.sqrt(discr(a,b,c)))/(2*a);
console.log(cDeg, dollars, x1, x2);