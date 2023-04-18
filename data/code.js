const form = document.getElementById('form');
const taskInput = document.getElementById('task');
const list = document.getElementById('list');

// Load tasks from localStorage on page load
document.addEventListener('DOMContentLoaded', () => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => addTask(task));
  console.log(tasks);
});



form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (taskInput.value.trim()) {
    addTask(taskInput.value.trim());
    saveTasksToLocalStorage();
    taskInput.value = '';
    // location.reload()
  }
  console.log(tasks);

});

function addTask(task) {
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${task}</span>
    <button class="delete">Delete</button>
  `;
  list.appendChild(li);
}

list.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
    saveTasksToLocalStorage();
    // location.reload()
    AnimationEffect(TransitionEvent)
  }
  console.log(tasks);

});

function saveTasksToLocalStorage() {
    const tasks = Array.from(list.children).map(li => li.firstChild.textContent.trim());
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  

