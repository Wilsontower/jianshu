var INDEX = angular.module("jianshuApp");
// 主页控制器
INDEX.controller("centerCtrl", ['$scope', '$http', '$state', function ($scope, $http, $state) {

    $scope.initUserCenter = function () {
        user = sessionStorage.getItem("user");
        $scope.userId = user;

    }
    $scope.gotoShop =function () {
        //先通过用户ID检测是否已经创建过店铺，没有就创建
        var userId = sessionStorage.getItem("user");
        var url_find_shop = "/shop/findByUserId/"+userId;
        $http({
            method: 'GET',
            url: url_find_shop
        }).then(function successCallback(response) {
            var findUserResult = response.data;
            if(findUserResult){
                user = sessionStorage.getItem("user");
                $scope.userId = user;
                $state.go("userShop",{cache:false},{reload: true});
            }
            else{
                $state.go("createShop",{cache:false},{reload: true});
            }
        });


    }

    $scope.backToMain = function () {
        sessionStorage.setItem("currentUrl", "main");
        currentUrl = sessionStorage.getItem("currentUrl");
        user = sessionStorage.getItem("user");
        $state.go("main",{cache:false},{reload: true});
    }

}]);
