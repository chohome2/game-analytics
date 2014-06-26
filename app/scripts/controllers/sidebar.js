'use strict';

angular.module('gameAnalyticsApp')
  .controller('SidebarCtrl', function ($scope, Auth) {
        initLTE();
        $scope.user = Auth.user;
        $scope.userRoles = Auth.userRoles;
        $scope.accessLevels = Auth.accessLevels;
  });
