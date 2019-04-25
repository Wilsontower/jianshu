var INDEX = angular.module("jianshuApp");
// 主页控制器
INDEX.controller("centerCtrl", ['$scope', '$http', '$state', function ($scope, $http, $state) {

    $scope.initUserCenter = function () {
        user = sessionStorage.getItem("user");
        $scope.userId = user;

    }

    $scope.backToMain = function () {
        sessionStorage.setItem("currentUrl", "main");
        currentUrl = sessionStorage.getItem("currentUrl");
        user = sessionStorage.getItem("user");
        $state.go("main",{cache:false},{reload: true});
    }

}]);
