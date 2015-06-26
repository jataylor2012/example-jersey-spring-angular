'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoApp
 */
angular.module('yoApp')
    .controller('MainCtrl', function ($scope, $http) {
        $scope.title = 'Example Angular Query Jersey Spring';

        $scope.recievePing = function (data) {
            $scope.ping = data;
        };

        $scope.queryPingService = function () {
            $http({
                url: 'service/ping',
                method: 'GET'
            })
                .success($scope.recievePing);
        };

        $scope.queryPingService();
    });