const btn = document.querySelector('.btn')
const cont = document.getElementById('cont');
const modal = document.querySelector('.modal');
const closeEl = modal.querySelector('.close');
const modalImg = modal.querySelector('img');
const parser = new DOMParser();
let open = true;

const buttonClick = () => {
    if (open) {
        cont.classList.remove('open');
        open = false;
        btn.textContent = 'Открыть галерею';
    }
    else {
        cont.classList.add('open');
        open = true;
        btn.textContent = 'Закрыть галерею';
    }
}

btn.addEventListener('click', async () => {
    //https://kodaktor.ru/g/books_e713b
    const res = await fetch('/galarybook.xml');
    const stringContent = await res.text();
    const doc = parser.parseFromString(stringContent, "application/xml");
    const data = doc.querySelectorAll('img1');

    data.forEach((el, id) => {
        cont.innerHTML += `<li id="${id}"></li>`;

        const smallImg = el.querySelector('small1').textContent;
        const bigImg = el.querySelector('big1').textContent;

        const newImage = document.createElement('img');
        newImage.src = smallImg;
        newImage.alt = `Красивая девушка ${id}`;
        newImage.setAttribute('data-small',smallImg);
        newImage.setAttribute('data-big',bigImg);
        document.getElementById(id).appendChild(newImage);
    });

    btn.dispatchEvent(new Event('click'));
}, {once:true});

btn.addEventListener('click', buttonClick);

cont.addEventListener('click', ({target: t}) => {
    if(t.closest('img')){
        const thisImg = t.closest('img');
        modal.classList.add('open');
        modalImg.src = thisImg.dataset.big;
        // if (thisImg.src === thisImg.dataset.small) {
        //     thisImg.src = thisImg.dataset.big;
        // }
        // else if (thisImg.src === thisImg.dataset.big) {
        //     thisImg.src = thisImg.dataset.small;
        // }
    }
});

closeEl.addEventListener('click', () => {
    modal.classList.remove('open')
});