angular.module('controller-app', [])

.controller('AppCtrl', function ($scope, Api) {

	Api.getApi().then(function(result){
		console.log(result);
		$scope.getData = result.data;
	})

})