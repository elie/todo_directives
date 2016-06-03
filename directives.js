app.directive("parent", function(){
  return {
    scope: {},
    transclude: true,
    controllerAs: "parentController",
    controller: function(){
      // $scope.parentController === this
      this.parentMessage = "Hello from the parent"
    },
    templateUrl: "partials/parent.html"
  }
})

// move to component
  // directive becomes component
  // annonymous function becomes an object
  // controllerAs defaults to $ctrl
  // bindToController becomes bindings

app.component("child", {
    bindings: {
      data: "<"
    },
    controller: function(){
      this.childMessage = "Hello from the child"
    },
    templateUrl: "partials/child.html"
})

