var INDEX = angular.module("jianshuApp");
// 主页控制器
INDEX.controller("buyCtrl", ['$scope', '$http', '$state','$stateParams', function ($scope, $http, $state,$stateParams) {


    $scope. initBuy = function () {
        $scope.userId = sessionStorage.getItem("user");
        var bookID = $stateParams.bookID;
        var url_get_book = "/book/getByBookId/"+bookID;
        $http({
            method: 'GET',
            url: url_get_book
        }).then(function successCallback(response) {
            var data = response.data;
            $scope.currentBook = data;

        });

        var url_get_user = "/user/getByUserId/"+ $scope.userId;
        $http({
            method: 'GET',
            url: url_get_user
        }).then(function successCallback(response) {
            var data = response.data;
            $scope.currentUser = data;
        });
    };


    $scope.gotoOtherShop = function (shopId) {
        $state.go('otherShop', {
            shopID: shopId
        });
    };

    $scope.backToMain = function () {
        sessionStorage.setItem("currentUrl", "main");
        currentUrl = sessionStorage.getItem("currentUrl");
        user = sessionStorage.getItem("user");
        $state.go("main",{cache:false},{reload: true});
    };

}]);
