var app = angular.module("TodoApp", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider){
  $routeProvider.when('/', {
    templateUrl: "templates/home.html"
  }).otherwise({
    redirectTo: '/'
  })
})