angular.module('service.api', [])

.factory('Api', function ($http) {

	var API = 'http://jsonplaceholder.typicode.com/posts';

	return {

		getApi: function() {
			return $http({
				url: API,
				method: 'GET'
			})
		}

	};
})