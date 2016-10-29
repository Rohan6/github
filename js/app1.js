angular.module('app1', ['app2'])
.controller('worldController', ['$scope', function($scope, yahooservice)
	{ //$scope.name= 'world';
	  $scope.greet = function(){ alert("Happy Birthday!")};
	  $scope.stocks=[{'ticker': "AMZN", 'company': "Amazon"},
                  {'ticker': "GOOG", 'company': "Alphabet Inc."}];
      //$scope.news= yahooservice.fetched;          
    }]);