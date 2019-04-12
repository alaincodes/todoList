let todoList = {
  // It should have a place to store todos
  todos: ["item1", "item2", "item3", 1990],

  // It should have a way to display todos
  displayTodos: function() {
    console.log(`My todos : ${this.todos}`);
  },

  // It should have a way add new todos
  addTodos: function(newValue) {
    this.todos.push(newValue);
    this.displayTodos();
  },

  // It should have a way to change todos
  changeTodos: function(index, newValue) {
    this.todos[index] = newValue;
    this.displayTodos();
  },

  // It should have a way to delete a todo
  deleteTodos: function(index, deleteValue) {
    this.todos.splice(index, deleteValue);
    this.displayTodos();
  }
};
