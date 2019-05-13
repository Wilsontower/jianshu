var INDEX = angular.module("jianshuApp");
// 主页控制器
INDEX.controller("buyCtrl", ['$scope', '$http', '$state','$stateParams', function ($scope, $http, $state, $stateParams) {


    $scope. initBuy = function () {
        $scope.userId = sessionStorage.getItem("user");
        var bookID = $stateParams.bookID;
        var shopID="";
        var url_get_book = "/book/getByBookId/"+bookID;
        $http({
            method: 'GET',
            url: url_get_book
        }).then(function successCallback(response) {
            var data = response.data;
            $scope.currentBook = data;
            shopID = $scope.currentBook["shopID"];
            var url_get_shop = "/shop/getShopByShopID/"+shopID;
            $http({
                method: 'GET',
                url: url_get_shop
            }).then(function successCallback(response) {
                var tmp = response.data;
                $scope.bookShop = tmp;
            });

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


    $scope.addOrder = function () {
        var orderData = [];
        orderData.push( $scope.currentBook["bookID"]);
        orderData.push( $scope.userId );
        orderData.push( $scope.bookShop["shopID"]);
        orderData.push( $scope.currentBook["bookPrice"]);
        orderData.push($scope.currentBook["bookName"]);
        orderData.push($scope.currentBook["bookInfo"]);
        orderData.push($scope.currentBook["imageUrl"]);
        if($scope.leaveMessage) orderData.push( $scope.leaveMessage );
        var url_set_order = "/order/add";
        $http({
            method: 'POST',
            url: url_set_order,
            data:orderData
        }).then(function successCallback(response) {
            layui.use('layer', function(){
                var layer = layui.layer;
                layer.alert('购买成功');
                $state.go('details', {
                    bookID: $scope.currentBook["bookID"]
                });
            });
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
