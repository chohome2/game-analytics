'use strict';

angular.module('gameAnalyticsApp')
    .controller('LoginCtrl', function ($scope, $rootScope, $state, Auth) {
        $('#loginModal').modal({
            keyboard: false,
            backdrop: 'static',
            show: true
        });

       $scope.login = function() {
            Auth.login({
                    username: $scope.username,
                    password: $scope.password
                },
                function(res) {
                    window.location.reload();
                },
                function(err) {
                    $rootScope.error = "Failed to login";
                });
        };

    });
