var INDEX = angular.module("jianshuApp");
// 主页控制器
INDEX.controller("detailsCtrl", ['$scope', '$http', '$state','$stateParams', function ($scope, $http, $state,$stateParams) {


    $scope.initDetails = function () {
        var bookID = $stateParams.bookID;
        var url_get_book = "/book/getByBookId/"+bookID;
        $http({
            method: 'GET',
            url: url_get_book
        }).then(function successCallback(response) {
            var data = response.data;
            $scope.currentBook = data;

        });
    };

    $scope.backToShop = function () {
        $state.go("userShop",{cache:false},{reload: true});
    };

    $scope.backToMain = function () {
        sessionStorage.setItem("currentUrl", "main");
        currentUrl = sessionStorage.getItem("currentUrl");
        user = sessionStorage.getItem("user");
        $state.go("main",{cache:false},{reload: true});
    };

}]);
