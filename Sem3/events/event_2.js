const writer = document.querySelector('#writer');
const reader = document.querySelector('#reader');
const note = new CustomEvent('note');
const noteback = new CustomEvent('noteback');

writer.addEventListener('click', () => reader.dispatchEvent(note));
reader.addEventListener('note', e => {
    e.target.textContent += e.target.title;
    writer.dispatchEvent(noteback)
});
writer.addEventListener('noteback', e => e.target.textContent += e.target.title);