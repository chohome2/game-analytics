'use strict';

angular.module('mutzipAdminApp')
    .controller('HeaderCtrl', function ($scope,$state,Auth) {

        $scope.logout = function() {
            Auth.logout(function() {
                $state.go('anon.login');
            }, function() {
                $rootScope.error = "Failed to logout";
            });
        };
    });
