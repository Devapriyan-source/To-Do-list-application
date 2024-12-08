// Select elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add a new task with animation
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span class="task-text">${taskText}</span>
        <div class="task-buttons">
            <button class="complete-btn">✔</button>
            <button class="delete-btn">✖</button>
        </div>
    `;
    listItem.style.animation = 'slideInTask 0.6s ease forwards'; // Apply animation
    taskList.appendChild(listItem);
    taskInput.value = '';
});

// Handle task actions (complete and delete)
taskList.addEventListener('click', (event) => {
    if (event.target.classList.contains('complete-btn')) {
        const task = event.target.parentElement.parentElement;
        task.querySelector('.task-text').classList.toggle('completed');
    }

    if (event.target.classList.contains('delete-btn')) {
        const task = event.target.parentElement.parentElement;
        task.style.animation = 'fadeOut 0.5s ease-out';
        task.addEventListener('animationend', () => task.remove());
    }
});
