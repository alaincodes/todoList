// It should have a place to store todos
let todos = ['item1', 'item2', 'item3', 1990];

// It should have a way to display todos
function displayTodos() {
  console.log(`My todos : ${todos}`);
}

// It should have a way add new todos
function addTodos(newValue) {
  todos.push(newValue);
  displayTodos();
}

// It should have a way to change todos
function changeTodos(index, newValue) {
  todos[index] = newValue;
  displayTodos();
}

// It should have a way to delete a todo
function deleteTodos(index, deleteValue) {
  todos.splice(index, deleteValue);
  displayTodos();
}
