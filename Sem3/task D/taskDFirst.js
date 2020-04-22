(function() {
    "use strict";
    const toDoList = document.getElementById('list');
    const buttonElement = document.getElementById('btn');
    const taskInput = document.getElementById('task');
    var arrList = [];
    var id = 0;

    buttonElement.addEventListener('click', () => {
        toDoList.innerHTML = addTask();
    });

    toDoList.addEventListener('click', event => {
        toDoList.innerHTML = removeTask(event);
    });

    function addTask() {
        const taskText = taskInput.value;
        if (taskText === "") return arrList.join('');
        arrList.push(`<li data-id = "${id}">${taskText} (удалить)</li>`);
        id++;
        return arrList.join('');
    }

    function removeTask(event) {
        const taskId = event.target.closest('li').dataset.id;
        arrList.splice(taskId, 1, "");
        return arrList.join('');
    }
})();
