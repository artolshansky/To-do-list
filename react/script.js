(function(){ 
  var toDoApp = angular.module('ToDoApp', [ ]);

  toDoApp.controller('ToDoCtrl', function($scope){
    this.data = tasks;

    this.addTask = function(){
      if(this.task == ""){
      } else {
        this.data.push({
          name: this.task, 
          done: false
        });
        this.task = '';
      }
    }

    $scope.setStyle = function(done){
      return done ? "text-decoration: line-through" : "";
    }

  });

  var tasks = [
    {name: '1 First task', done: false},
    {name: '2 Second task', done: false},
    {name: '3 Third task', done: false},
  ];
})();