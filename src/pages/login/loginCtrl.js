(function(){

	angular.module('Dashboard.pages.login')
	.controller('LoginCtrl', ['$scope', '$window', function($scope, $window){
		var vm = this;
		vm.submit = function(){
			if(vm.login == 'admin' && vm.password == "123") {
				$window.location.href = "#!/users";
			}
		}
	}]);
	
})();