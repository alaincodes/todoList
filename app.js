const displayTodosButton = document.getElementById("displayTodosButton");
const toggleAllButton = document.getElementById("toggleAllButton");

let todoList = {
  // It should have a place to store todos
  todos: [],

  // It should have a way to display todos
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log(`Your todo list is empty`);
    } else {
      console.log("My todos: ");
      for (let i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log(`(x) - ${this.todos[i].todoText}`);
        } else {
          console.log(`( ) - ${this.todos[i].todoText}`);
        }
      }
    }
  },

  // It should have a way add new todos
  addTodos: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },

  // It should have a way to change todos
  changeTodos: function(index, todoText) {
    this.todos[index].todoText = todoText;
    this.displayTodos();
  },

  // It should have a way to delete a todo
  deleteTodos: function(index) {
    this.todos.splice(index, 1);
    this.displayTodos();
  },

  toggleCompleted: function(index) {
    let todo = this.todos[index];
    todo.completed = !todo.completed;
    this.displayTodos();
  },

  toggleAll: function() {
    let totalTodos = this.todos.length;
    let completedTodos = 0;
    // Get number of completed todos.
    for (let i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    // If everything is true, make everything false.
    if (completedTodos === totalTodos) {
      for (let i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
      // Else make everything true.
    } else {
      for (let i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
    this.displayTodos();
  }
};

let handlers = {
  displayTodos: function() {
    todoList.displayTodos();
  },

  addTodo: function() {
    let addTodoTextInput = document.getElementById("addTodoTextInput");
    todoList.addTodos(addTodoTextInput.value);
    addTodoTextInput.value = "";
  },

  changeTodo: function() {
    let changeTodoPoisitionInput = document.getElementById(
      "changeTodoPositionInput"
    );
    let changeTodoTextInput = document.getElementById("changeTodoTextInput");
    todoList.changeTodos(
      changeTodoPoisitionInput.valueAsNumber,
      changeTodoTextInput.value
    );
    changeTodoPoisitionInput.value = "";
    changeTodoTextInput.value = "";
  },

  deleteTodo: function() {
    let deleteTodoPositionInput = document.getElementById(
      "deleteTodoPositionInput"
    );
    todoList.deleteTodos(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = "";
  },

  toggleCompleted: function() {
    let toggleCompletedPositionInput = document.getElementById(
      "toggleCompletedPositionInput"
    );
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = "";
  },
  toggleAll: function() {
    todoList.toggleAll();
  }
};
