
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
  const taskText = taskInput.value.trim();
  if (!taskText) return;

  const taskItem = document.createElement('div');
  taskItem.className = 'task';

  const label = document.createElement('label');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.onchange = () => taskItem.classList.toggle('done');

  const span = document.createElement('span');
  span.textContent = taskText;

  label.appendChild(checkbox);
  label.appendChild(span);

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';
  deleteBtn.onclick = () => taskItem.remove();

  taskItem.appendChild(label);
  taskItem.appendChild(deleteBtn);

  taskList.appendChild(taskItem);
  taskInput.value = '';
}
