const cont = document.getElementById('cont');
const heart = `&#128153;`;

(async () => {
    const response = await fetch("https://kodaktor.ru/j/react5b_6cbf2");
    const data = await response.json();
    data.forEach(({title, votes, id}) => {
        const heartsRow = heart.repeat(votes);
        cont.innerHTML += 
            `<p id = "${id}" data-val = "${votes}">
                <span>${title}</span>
                <span class = "plus">&#128077;</span>
                <span class = "minus">&#128078;</span>
                <span class = "hearts">${heartsRow}</span>
            </p>`;
    });
})();

cont.addEventListener('click', ({target: t}) => {
    if(t.classList.contains('plus')){
        const framework = t.closest('p');
        const votes = +framework.dataset.val + 1;
        framework.dataset.val = votes;
        const [votesRow] = framework.getElementsByClassName('hearts');
        votesRow.innerHTML += heart;
    }
    if(t.classList.contains('minus')){
        const framework = t.closest('p');
        if(+framework.dataset.val !== 0){
            const votes = +framework.dataset.val - 1;
            framework.dataset.val = votes;
            const heartsRow = heart.repeat(votes);
            const [votesRow] = framework.getElementsByClassName('hearts');
            votesRow.innerHTML = heartsRow;
        }
    }
});