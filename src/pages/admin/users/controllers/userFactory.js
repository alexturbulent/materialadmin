(function(){
	'use strict';
	angular.module('Dashboard.pages.admin')
	.factory('$usersFactory', ['$resource',  function($resource){
		return {
			usersList: $resource('http://localhost:4000/getuserslist/api')
		};
	}]);
})();