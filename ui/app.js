angular.module('main', [
  'block',
  'services'
])
.controller('mainCtlr',['$scope', '$log', 'Data', function($scope, $log, Data){
  Data.query(function(data){
	$scope.data = data;
  });
}]);
