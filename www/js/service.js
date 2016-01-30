angular.module('service-app', [])

.factory('Api', function ($http) {

	var API = 'http://globoesporte.globo.com/servico/equipe/sport/jogos.json';
	console.log(API)

	return {

		getApi: function() {
      return $http({
        url: API,
        method: 'GET'
      })
    }

	};

})