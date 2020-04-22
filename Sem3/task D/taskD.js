(function() {
    "use strict";
    const toDoList = document.getElementById('list');
    const buttonElement = document.getElementById('btn');
    const taskText = document.getElementById('task');
    const arrList = [];

    buttonElement.addEventListener('click', addTask);
    toDoList.addEventListener('click', event => removeTask(event));

    function addTask() {
        if (taskText.value !== "") arrList.push(taskText.value);
        draw();
    }

    function removeTask(event) {
        if (event.target.closest('.delete')){
            const taskId = event.target.closest('li').dataset.id;
            arrList.splice(taskId,1);
            draw();
        }
    }

    function draw() {
        toDoList.innerHTML = arrList
            .map((task,id) => `<li data-id = "${id}"><span>${task}</span> &nbsp <span class = "delete">X</span></li>`)
            .join('');
    }
})();
