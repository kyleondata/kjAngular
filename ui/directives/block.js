angular.module('block', [])
  .directive('block', function(){
    return {
      restrict: 'E',
      templateUrl: '/templates/block.html',
      scope: {}
    };
  });
