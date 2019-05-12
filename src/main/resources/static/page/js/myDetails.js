var INDEX = angular.module("jianshuApp");
// 主页控制器
INDEX.controller("myDetailsCtrl", ['$scope', '$http', '$state','$stateParams', function ($scope, $http, $state,$stateParams) {


    $scope.initMyDetails = function () {
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

    $scope.stopSale = function (bookId) {
        var url_stop_sale = "/book/stopSale/"+bookId;
        $http({
            method: 'GET',
            url: url_stop_sale
        }).then(function successCallback(response) {
            var data = response.data;
            $scope.currentBook = data;

        });
    };

    $scope.startSale = function (bookId) {
        var url_start_sale = "/book/startSale/"+bookId;
        $http({
            method: 'GET',
            url: url_start_sale
        }).then(function successCallback(response) {
            var data = response.data;
            $scope.currentBook = data;

        });
    };

    $scope.offShelf = function (bookId) {
        var url_off_shelf = "/book/offShelf/"+bookId;
        $http({
            method: 'GET',
            url: url_off_shelf
        }).then(function successCallback(response) {
            $scope.backToShop();//下架相当于删除

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

    $scope.backToShop = function () {
        $state.go("userShop",{cache:false},{reload: true});
    };

}]);
