angular.module('frontpage',[]).controller('frontpagectrl',function($scope){
$scope.todos=[
	
];
$scope.filtered=function(rem){
	$scope.todos=$scope.todos.filter(function(el){return el.id!=rem.id})
}

/*do not show list on initialisation---->until we have a database*/
$scope.showList=false;


/*function that adds a todo to the list of todos*/
$scope.addTodo=function(added)
{
	if(added.task!="")
	{
		$scope.todos.push({
		todo:added.task,
		id:Math.floor((Math.random()*100)+3),
		})
	}
	
$scope.showList=true;
$scope.todo.task="";
}

});