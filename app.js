var myWebStore = angular.module('myWebStore', []);

myWebStore.controller('mainController', function($scope, $http){

  $scope.products = [];

$http.get('http://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js').success(function(data){
  console.log(data.products);
  var products = data.products;
  $scope.products = products.sort(function(a, b) {
    return parseFloat(a.defaultPriceInCents) - parseFloat(b.defaultPriceInCents);
  });

  $scope.lessFilter = function() {
    $scope.products = $scope.products.filter(function(a){
      return a.defaultPriceInCents <= 2000
    });
  };

  $scope.all = function() {
    var products = data.products;
    $scope.products = products.sort(function(a, b) {
      return parseFloat(a.defaultPriceInCents) - parseFloat(b.defaultPriceInCents);
    });
  };

  $scope.byName = function() {
    $scope.products = products.sort(function(a, b) {
      return parseFloat(a.name) - parseFloat(b.name);
    });
  };

  $scope.byDate = function() {
    $scope.products = products.sort(function(a, b) {
      return parseFloat(a.createdAt) - parseFloat(b.createdAt);
    });
  };

});




});
