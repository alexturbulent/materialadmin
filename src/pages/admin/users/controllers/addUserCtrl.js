(function() {
    'use strict';
    angular.module('Dashboard.pages.admin')
        .controller('AddUserCtrl',
            ['$mdDialog', '$scope',
                function ($mdDialog, $scope) {

            this.cancel = $mdDialog.cancel;

            function success(accountlist) {
                $mdDialog.hide(accountlist);
            }

            this.addItem = function () {
                $scope.item.form.$setSubmitted();

                if ($scope.item.form.$valid) {
                    $account.accountlist.save({accountlist: $scope.accountlist}, success);
                }
            };
        }]);
})();