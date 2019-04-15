


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
    // Get number of competed todos.
    this.todos.forEach(function(todo) {
      if (todo.completed === true) {
        completedTodos++;
      }
    });

    this.todos.forEach(function(todo) {
      // Case 1: If everything's true, make everything false.
      if (completedTodos === totalTodos) {
        todo.completed = false;
        // Case 2: Otherwise, make everything true.
      } else {
        todo.completed = true;
      }
    });
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

  deleteTodo: function(index) {
    todoList.deleteTodos(index);
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

    todoList.todos.forEach(function(todo, index) {
      let todoLi = document.createElement("li");
    //   let todo = todoList.todos[i];
      let todoTextWithCompletion = "";

      if (todo.completed === true) {
        todoTextWithCompletion = `(x) ${todo.todoText}`;
      } else {
        todoTextWithCompletion = `( ) ${todo.todoText}`;
      }

      todoLi.id = index;
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todoUl.appendChild(todoLi);
      // Value to use as THIS when executing callback.
    }, this);
  },

  createDeleteButton: function() {
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteButton";
    return deleteButton;
  },

  setUpEventListeners: function() {
    let todosUl = document.querySelector("ul");

    todosUl.addEventListener("click", function(event) {
      let elementClicked = event.target;

      if (elementClicked.className === "deleteButton") {
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    });
  }
};

view.setUpEventListeners();

