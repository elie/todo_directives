app.controller("TodoController", TodoController);

TodoController.$inject = ["TodoService"];

function TodoController(TodoService){
  this.showForm = false
  this.toggleCompletion = function(){
    TodoService.toggleCompletion(this.todo);
  },
  this.showEditForm = function(){
    this.showForm = !this.showForm
  },
  this.editTodo = function(){
    TodoService.editTodo(this.todo)
    this.showForm = false
  }
  this.removeTodo = function(){
    TodoService.removeTodo(this.todo)
  }
}

app.controller("EditTodoController", EditTodoController);

EditTodoController.$inject = []

function EditTodoController(){
  this.editTodo = function(){
    this.onEdit(this.todo)
  }
}

app.controller("TodoListController", TodoListController);

TodoListController.$inject = ["TodoService"]

function TodoListController(TodoService){
  this.todos = TodoService.getTodos();
}

app.controller("NewTodoController", NewTodoController);

NewTodoController.$inject = ["TodoService"]

function NewTodoController(TodoService){
  this.newTodo = {}
  this.addTodo = function(todo){
    TodoService.addTodo(todo)
    this.newTodo = {}
  }
}