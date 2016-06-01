// THE FUTURE!
app.component("singleTodo", {
    restrict: "E",
    // always isolate scope
    // scope: {},
    // same as bind to controller
    bindings: {
      // one way data bind!
      todo: "<"
    },
    templateUrl: "templates/singleTodo.html",
    // default to $ctrl
    // controllerAs: "todoCtrl",
    controller: TodoController
})

app.directive("editTodoForm", function(){
  return {
    restrict: "E",
    scope: {},
    bindToController: {
      todo: "=",
      onEdit: "&"
    },
    templateUrl: "templates/editTodoForm.html",
    controllerAs: "edit",
    controller: EditTodoController
  }
})

app.directive("todoList", function(){
  return {
    restrict: "E",
    scope: {},
    templateUrl: "templates/todoList.html",
    controllerAs: "list",
    controller: TodoListController
  }
})

app.directive("newTodoForm", function(){
  return {
    restrict: "E",
    scope: {},
    templateUrl: "templates/newTodoForm.html",
    controllerAs: "add",
    controller: NewTodoController
  }
})