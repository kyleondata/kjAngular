angular.module('services', ['ngResource'])
.factory('Data', function($resource){
  return $resource('/data');
});
