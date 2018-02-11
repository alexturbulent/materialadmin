(function(){
	'use strict';
	angular.module('Dashboard.pages.admin')
	.controller('UsersCtrl', ['$scope', '$http', '$timeout', '$mdSidenav', '$usersFactory', '$mdDialog', function($scope, $http, $timeout, $mdSidenav, $usersFactory, $mdDialog){

		$scope.toggleLeft = buildToggler('left');
	    $scope.toggleRight = buildToggler('right');

	    function buildToggler(componentId) {
	      return function() {
	        $mdSidenav(componentId).toggle();
	      };
	    }
	    $scope.tableSearch = false;
	    $scope.selected = [];
  		var bookmark;
  		$scope.filter = {
            options: {
                debounce: 500
            }
        };
		$scope.query = {
			filter: '',
			order: 'firstName',
			limit: 5,
			page: 1
		};

		// function success(usersList) {
		// 	$scope.usersList = usersList;
		// 	console.log($scope.usersList);
		// };

		// $scope.getUsers = function (){
		// 	$scope.promise = $usersFactory.usersList.get($scope.query, success).$promise;
		// };

	    $http.get('/getuserslist/api').then(function(res){
    		console.log('Ive got the data');
    		$scope.usersList = res.data;
    	});

	    $scope.addItem = function (event) {
            $mdDialog.show({
                clickOutsideToClose: true,
                controller: 'AddUserCtrl',
                controllerAs: 'ctrl',
                focusOnOpen: false,
                targetEvent: event,
                templateUrl: '../pages/admin/users/add.user.html'
            }).then();
        };

        $scope.removeFilter = function () {
            $scope.filter.show = false;
            $scope.query.filter = '';

            if ($scope.filter.form.$dirty) {
                $scope.filter.form.$setPristine();
            }
        };

	    $scope.$watch('query.filter', function (newValue, oldValue) {
            if (!oldValue) {
                bookmark = $scope.query.page;
            }

            if (newValue !== oldValue) {
                $scope.query.page = 1;
            }

            if (!newValue) {
                $scope.query.page = bookmark;
            }

            // $scope.getUsers();
        });

		$scope.accountMenu = [
			{
				name: 'Profile',
				icon: 'account_circle',
				url: '/getuserslist'
			},
			{
				name: 'Settings',
				icon: 'settings',
				url: ''
			},
			{
				name: 'Exit',
				icon: 'cancel',
				url: ''
			}
		];

		$scope.menus = [
			{
				name: 'Administrator',
				icon: 'assignment_ind',
				nestedMenu: [
					{
						name: 'Foydalanuvchilar',
						icon: 'supervisor_accounts',
						url: ''
					},
					{
						name: 'Huquqlar',
						icon: 'done_all',
						url: ''
					},
					{
						name: 'Kirishga ruxsat',
						icon: 'recent_actors',
						url: ''
					},
					{
						name: 'Rol bo\'yicha huquqlar',
						icon: 'games',
						url: ''
					}
				]
			},
			{
				name: 'Products',
				icon: 'shopping_cart',
				nestedMenu: [
					{
						name: 'Mahsulot toifalari',
						icon: 'assignment_turned_in',
						url: ''
					},
					{
						name: 'Mahsulot turlari',
						icon: 'description',
						url: ''
					},
					{
						name: 'Mahsulot brendlari',
						icon: 'bookmark',
						url: ''
					},
					{
						name: 'Mahsulot modellari',
						icon: 'donut_small',
						url: ''
					},
					{
						name: 'Mahsulotlar',
						icon: 'receipt',
						url: ''
					},
					{
						name: 'Ishlab chiqaruvchilar',
						icon: 'store',
						url: ''
					}
				]
			},
			{
				name: 'Manager',
				icon: 'work',
				nestedMenu: [
					{
						name: 'Yuridik shaxs turlari',
						icon: 'accessibility',
						url: ''
					},
					{
						name: 'Yuridik shaxslar',
						icon: 'touch_app',
						url: ''
					},
					{
						name: 'Yuridik shaxslar va faoliyat turlari',
						icon: 'verified_user',
						url: ''
					}
				]
			}
		];

	}]);

})();