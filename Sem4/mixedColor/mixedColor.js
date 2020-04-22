const numList = document.querySelectorAll('.num');
const ranList = document.querySelectorAll('.ran');
const changingDiv = document.getElementById('isChanging');

const changeDivColor = () => {
    const colorList = [];
    numList.forEach(el => {
        colorList.push(el.value);
    })
    changingDiv.style.backgroundColor = `rgb(${colorList})`;
};

numList.forEach((el, i) => {
    el.addEventListener('change', () => {
        ranList[i].value = el.value;
        changeDivColor();
    })
});

ranList.forEach((el, i) => {
    el.addEventListener('change', () => {
        numList[i].value = el.value;
        changeDivColor();
    })
});