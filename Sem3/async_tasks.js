let result = '';
const values = Array.from(document.getElementById('values').querySelectorAll('li')).map(el => el.textContent);
const URLs = Array.from(document.getElementById('urls').querySelectorAll('li')).map(el => el.textContent);
document
  .querySelector('button')
  .addEventListener('click',
  async ({ target: t }) => { 
    let response = '';
    for (let i = 0; i < URLs.length; i++) {
        await fetch(`${URLs[i]}${values[i]}/${response}`)
        .then(res => res.text())
        .then(res => {
            const beginSlice = res.indexOf('<span>');
            const endSlice = res.lastIndexOf('</span>');
            const row = res.slice(beginSlice + 6,endSlice);
            return row;
        })
        .then(res => {
            response = res;
            result += response;
        })
    };
    t.textContent = `Результат: ${result}`;
  }
);