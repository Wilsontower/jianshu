var INDEX = angular.module("jianshuApp");
// 主页控制器
INDEX.controller("otherShopCtrl", ['$scope', '$http', '$state','$stateParams', function ($scope, $http, $state,$stateParams) {

    $scope.initOtherShop= function () {
        //获取主页上各种类型的书籍
        var shopId = $stateParams.shopID;
        $scope.getShopByShopID(shopId);
        $scope.getAllBooks();
    };

    $scope.getShopByShopID = function (shopId) {
        var url_get_shop = "/shop/getShopByShopID/"+shopId;
        $http({
            method: 'GET',
            url: url_get_shop
        }).then(function successCallback(response) {
            var data = response.data;
            $scope.shopname = data["shopName"];
            $scope.shopinfo = data["shopInfo"];
        });
    };

    $scope.getAllBooks = function () {
        var url_get_allBooks = "/book/getAll/"+$scope.userId;
        $http({
            method: 'GET',
            url: url_get_allBooks
        }).then(function successCallback(response) {
            var data = response.data;
            $scope.allBooks = data;

        });

    };


    $scope.enterDetails = function (bookId) {
        $state.go('details', {
            bookID: bookId
        });
    };

}]);