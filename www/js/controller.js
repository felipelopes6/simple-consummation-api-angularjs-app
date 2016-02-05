angular.module('controller.api', [])

.controller('MyAppCtrl', function ($scope, Api) {

	Api.getApi().then(function(result){
		console.log(result);
		$scope.list = result.data;
	})

})