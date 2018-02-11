(function(){
	'use strict';
	angular.module('Dashboard.pages.admin', [])
	.config(['$stateProvider', '$urlRouterProvider' ,function($stateProvider, $urlRouterProvider) {
		$stateProvider
		.state('users', {
			url: '/users',
			templateUrl: '../pages/admin/users/users.html'
		});
		// $urlRouterProvider.when('/admin', '/admin/users');
	}]);
})();