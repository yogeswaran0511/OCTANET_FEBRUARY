const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        const completeButton = document.createElement('button');
        completeButton.innerText = 'Complete';
        completeButton.onclick = function () {
            li.classList.toggle('completed');
        };
        li.textContent = taskText;
        li.appendChild(completeButton);
        taskList.appendChild(li);
        taskInput.value = '';
    }
}