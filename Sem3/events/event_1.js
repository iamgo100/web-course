const { random: r, round: d } = Math;	
const headline = document.querySelector('h1');
const btn = document.getElementById('clicker');
const changeColor = ({ target: t }) => { 
    t.style.color = ['red', 'blue'][d(r(1))]
};
btn.addEventListener("click", async () => {
    headline.addEventListener('mousemove', changeColor, {once: true});
});