app.service("TodoService", function(){
  const todos = [{id:1, task: "Eat", isCompleted: false},{id: 2, task: "Sleep", isCompleted: false}]
  let id = 3;
  return {
    getTodos: function(){
      return todos;
    },
    addTodo: function(todo){
      todo.id = id
      todos.push(todo);
      id++
      return todos
    },
    toggleCompletion: function(todo){
      let foundTodo = todos.find(t => t.id === todo.id);
      foundTodo.isCompleted = !foundTodo.isCompleted;
    },
    editTodo: function(todo){
      let foundTodo = todos.find(t => t.id === todo.id)
      todo = foundTodo;
      return todo;
    },
    removeTodo: function(todo){
      let foundTodoIndex = todos.findIndex(t => t.id === todo.id)
      todos.splice(foundTodoIndex,1)
      return todos;
    }
  }
})