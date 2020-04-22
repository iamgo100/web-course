const valuteTable = document.getElementById('valute');
const tableBody = valuteTable.appendChild(document.createElement('tbody'));
const tableHead = valuteTable.appendChild(document.createElement('thead'));
tableHead.innerHTML = `<tr><td>Валюта</td><td>Продажа</td><td>Покупка</td></tr>`;

fetch('https://kodaktor.ru/j/rates')
.then(res => res.json())
.then(arr => tableBody.innerHTML = arr
	.map(({name,sell,buy}) => `<tr><td>${name}</td><td>${sell}</td><td>${buy}</td></tr>`)
	.join(''));
