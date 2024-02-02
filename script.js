//your code here
document.addEventListener('DOMContentLoaded', function () {
  const newTodoInput = document.getElementById('newTodoInput');
  const addTodoBtn = document.getElementById('addTodoBtn');
  const todoList = document.getElementById('todoList');

  addTodoBtn.addEventListener('click', function () {
    const newTodoText = newTodoInput.value.trim();

    if (newTodoText !== '') {
      const newTodoItem = document.createElement('li');
      newTodoItem.textContent = newTodoText;

      todoList.appendChild(newTodoItem);
      newTodoInput.value = '';
    }
  });
});


