(function(){
	'use strict';
	angular.module('Dashboard.pages', [
		'ui.router',
		'Dashboard.pages.login',
		'Dashboard.pages.admin'

	])
	// .config(routeConfig);

	// function routeConfig($urlRouterProvider){
	// 	$urlRouterProvider.otherwise('/login');
	// }
	.config(['$urlRouterProvider', function($urlRouterProvider){
		$urlRouterProvider.otherwise('/login');
	}]);
})();
