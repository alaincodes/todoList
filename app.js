const displayTodosButton = document.getElementById("displayTodosButton");
const toggleAllButton = document.getElementById("toggleAllButton");

let todoList = {
  // It should have a place to store todos
  todos: [],

  // It should have a way add new todos
  addTodos: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },

  // It should have a way to change todos
  changeTodos: function(index, todoText) {
    this.todos[index].todoText = todoText;
  },

  // It should have a way to delete a todo
  deleteTodos: function(index) {
    this.todos.splice(index, 1);
  },

  toggleCompleted: function(index) {
    let todo = this.todos[index];
    todo.completed = !todo.completed;
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
  }
};

let handlers = {
  addTodo: function() {
    let addTodoTextInput = document.getElementById("addTodoTextInput");
    todoList.addTodos(addTodoTextInput.value);
    addTodoTextInput.value = "";
    view.displayTodos();
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
    view.displayTodos();
  },

  deleteTodo: function() {
    let deleteTodoPositionInput = document.getElementById(
      "deleteTodoPositionInput"
    );
    todoList.deleteTodos(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = "";
    view.displayTodos();
  },

  toggleCompleted: function() {
    let toggleCompletedPositionInput = document.getElementById(
      "toggleCompletedPositionInput"
    );
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = "";
    view.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  }
};

let view = {
  displayTodos: function() {
    let todoUl = document.querySelector("ul");
    todoUl.innerHTML = "";
    
    for (let i = 0; i < todoList.todos.length; i++) {
      let todoLi = document.createElement("li");
      let todo = todoList.todos[i];
      let todoTextWithCompletion = "";

      if (todo.completed === true) {
        todoTextWithCompletion = "(x) " + todo.todoText;
      } else {
        todoTextWithCompletion = "( )" + todo.todoText;
      }

      todoLi.textContent = todoTextWithCompletion;
      todoUl.appendChild(todoLi);
    }
  }
};
