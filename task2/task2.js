const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    taskInput.addEventListener('input', () => {
        addTaskButton.disabled = taskInput.value.trim() === '';
    });

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('li');
            const taskCheckbox = document.createElement('input');
            const taskLabel = document.createElement('span');

            taskCheckbox.type = 'checkbox';
            taskLabel.textContent = taskText;
            taskLabel.className = 'task-text';

            taskCheckbox.addEventListener('change', () => {
                if (taskCheckbox.checked) {
                    taskItem.classList.add('completed');
                } else {
                    taskItem.classList.remove('completed');
                }
            });

            taskItem.appendChild(taskLabel);
            taskItem.appendChild(taskCheckbox);
            taskList.appendChild(taskItem);

            taskInput.value = '';
            addTaskButton.disabled = true;
        }
    });