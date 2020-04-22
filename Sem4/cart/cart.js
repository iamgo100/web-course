const totalCost = document.getElementById('total-cost');
let totalCostVal = 0;
const cart = document.querySelector('.cart');
const creditModal = document.querySelector('.credit-modal');
const goods = document.querySelector('.gds');
const costs = [
    {id: 1, cost: 150},
    {id: 2, cost: 350},
    {id: 3, cost: 400},
    {id: 4, cost: 1500}
];
const buy = [];

const render = newCost => {
    totalCostVal = newCost;
    totalCost.textContent = `$${newCost}`;
    let renderArray = [];
    buy.forEach(id => {
        el = document.querySelector(`[data-id="${id}"]`).outerHTML;
        renderArray.push(el);
    });
    cart.innerHTML = renderArray.join('');
};

goods.addEventListener('dragstart', function ({target: t, dataTransfer: dt}) {
    const thisItem = t.closest('.item');
    dt.setData('text/plain',thisItem.dataset.id);
});
cart.addEventListener('dragover', function (event) {
    event.preventDefault();
});
cart.addEventListener('dragenter', function (event) {
    event.preventDefault();
    this.classList.add('hovered');
});
cart.addEventListener('dragleave', function () {
    this.classList.remove('hovered');
});
cart.addEventListener('drop', function ({dataTransfer: dt}) {
    const id = dt.getData('text/plain');
    const {cost: thisCost} = costs[id-1];
    const newCost = totalCostVal + thisCost;
    if (newCost > 2000) {
        creditModal.classList.add('warning');
        setTimeout(() => creditModal.classList.remove('warning'), 3000);
    }
    else {
        this.classList.remove('hovered');
        buy.push(id);
        render(newCost);
    }
});