var INDEX = angular.module("jianshuApp");
// 主页控制器
INDEX.controller("mainCtrl", ['$scope', '$http', '$state', function ($scope, $http, $state) {

    $scope.enterDetails = function () {
        $state.go("details");
    }

}]);