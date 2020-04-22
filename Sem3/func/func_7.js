const sec = a => 1 + a;
const add = (a, b) => (b === 0) ? a : sec(add(a, b - 1));
const mpy = (a, b) => (b === 1) ? a : add(a, mpy(a, b - 1));
const pwr = (a, b) => {
    if(a > 0 && b > 0) {
        if(b === 1) return a;
        else return mpy(a, pwr(a, b - 1));
    }
}
// переполнение стека происходит при разных значениях переменных a и b
// в основном переполнение происходит при значениях b > 5 с относительно любым значением a