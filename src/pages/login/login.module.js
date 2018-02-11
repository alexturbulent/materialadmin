(function(){
	'use strict';
	angular.module('Dashboard.pages.login', [])
	.config(['$stateProvider', '$urlRouterProvider' ,function($stateProvider, $urlRouterProvider) {
		// $urlRouterProvider.otherwise('/login');
		$stateProvider
		.state('login', {
			url: '/login',
			templateUrl: '../pages/login/login.html'
		});
		// $urlRouterProvider.when('/admin', '/admin/login')
	}])

})();