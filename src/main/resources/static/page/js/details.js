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
    
    $scope.gotoOrderDetails = function (bookId) {
        $state.go('buy', {
            bookID: bookId
        });
    };
    
    $scope.addToShopCart = function (bookID) {
        var userId = sessionStorage.getItem("user");
        var url_get_book = "/book/getByBookId/" + bookID;
        $http({
            method: 'GET',
            url: url_get_book,
        }).then(function successCallback(response) {
            var data = response.data;
            var cartData = [bookID,userId,data["bookName"],data["bookInfo"],data["bookPrice"],data["imageUrl"]];
            var  url_add_cart = "/cart/add";
            $http({
                method: 'POST',
                url: url_add_cart,
                data:cartData
            }).then(function successCallback(response) {
                layui.use('layer', function(){
                    var layer = layui.layer;
                    layer.alert('添加成功');
                });
            });
        });

    }
}]);
