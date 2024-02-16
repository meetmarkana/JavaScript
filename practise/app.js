document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
});

function addTask() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('dueDate').value;
    const priority = document.getElementById('priority').value;

    if (title && dueDate) {
        const task = { title, description, dueDate, priority };
        saveTask(task);
        clearInputFields();
        displayTasks();
    } else {
        alert("Title and Due Date are required!");
    }
}

function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    for (const task of tasks) {
        formatAndDisplayTask(task);
    }
}

function displayTasks() {
    document.getElementById('taskList').innerHTML = '';
    loadTasks();
}

function formatAndDisplayTask(task) {
    const taskElement = document.createElement('div');
    taskElement.innerHTML = `
        <strong>Title:</strong> ${task.title}<br>
        <strong>Description:</strong> ${task.description || 'N/A'}<br>
        <strong>Due Date:</strong> ${task.dueDate}<br>
        <strong>Priority:</strong> ${task.priority}<br>
        <button onclick="editTask('${task.title}')">Edit</button>
        <button onclick="deleteTask('${task.title}')">Delete</button>
        <hr>
    `;
    document.getElementById('taskList').appendChild(taskElement);
}

function editTask(title) {
    // Implement the edit functionality here
}

function deleteTask(title) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task.title !== title);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
}

function clearInputFields() {
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('dueDate').value = '';
    document.getElementById('priority').value = 'low';
}
