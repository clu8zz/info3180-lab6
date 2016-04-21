angular.module('app',[



])
.controller('Main',function($scope){
	$scope.listall=[
		{name:'hevon',age:10},
		{name:'wendy',age:10},
		{name:'natsu',age:10},
		{name:'gajeel',age:10},
		{name:'laxus',age:10}
	]
$scope.categories=[
					{'id':0,'name':"Development"},
					{'id':1,'name':"Design"},
					{'id':2,'name':"Exercise"},
					{'id':3,'name':"Humor"}
				];

$scope.bookmarks=[
					{'id':0,'title':"hevon's app",'url':'https://www.google.com.jm/?gws_rd=ssl','category':'Development'},
					{'id':1,'title':"everoy's app",'url':'gmail.com','category':'Design'},
					{'id':2,'title':"kadaine's app",'url':'worldstar.com','category':'Development'},
					{'id':3,'title':"rickvan's app",'url':'youtube.com','category':'Humor'},
					{'id':4,'title':"xian's app",'url':'disnep.com','category':'Exercise'}
					
				];
				$scope.adder=function(add){
					$scope.listall.push({
						name:add.name,
						age:add.age
					});
					console.log("i was called here");
						}
$scope.currentCategory=null;
function setCurrentCategory(category)
{
	$scope.currentCategory=category;
}
function isCurrentCategory(category)
{
	return $scope.currentCategory!=null&&category.name==$scope.currentCategory.name;
}
$scope.setCurrentCategory=setCurrentCategory;
$scope.isCurrentCategory=isCurrentCategory;
$scope.showForm=false;
$scope.showLabel=false;

$scope.setShowForm=function(){
$scope.showForm=true;
$scope.showLabel=false;
console.log("i was called here");
}
$scope.setShowLabel=function(){
	$scope.showForm=false;
$scope.showLabel=true;
console.log("even here");



}

});