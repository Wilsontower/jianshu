var INDEX = angular.module("jianshuApp");
// 主页控制器
INDEX.controller("shopCtrl", ['$scope', '$http', '$state', function ($scope, $http, $state) {

    $scope.initShop = function () {
        user = sessionStorage.getItem("user");
        $scope.userId = user;

    }

    $scope.createShop = function () {
        var url_find_shop = "/shop/findByUserId/"+$scope.userId;
        $http({
            method: 'GET',
            url: url_find_shop
        }).then(function successCallback(response) {
            var findUserResult = response.data;
            if(findUserResult){
                alert("您已经开通过店铺，无法再次开通")
                user = sessionStorage.getItem("user");
                $scope.userId = user;
                $state.go("userShop",{cache:false},{reload: true});
            }
            else{
                if($scope.shopName&&$scope.shopInfo){
                    var userId  = sessionStorage.getItem("user");
                    var url_get_type = "/user/getType/"+userId;
                    $http({
                        method: 'GET',
                        url: url_get_type
                    }).then(function successCallback(response) {
                        var tmp = response.data;
                        $scope.userType = tmp["userType"];
                        var data = [];
                        data.push($scope.shopName);
                        data.push($scope.shopInfo);
                        data.push($scope.userId);
                        data.push($scope.userType);
                        var url_create_shop = "/shop/create";
                        $http({
                            method: 'POST',
                            url: url_create_shop,
                            data:data
                        }).then(function successCallback(response) {
                            alert("开通成功");
                            $scope.gotoShop();
                        });
                    });

                }else {
                    alert("请完整填写所需内容");
                }
            }
        });


    }

    $scope.gotoShop =function () {
        //先通过用户ID检测是否已经创建过店铺，没有就创建
        var url_find_shop = "/shop/findByUserId/"+$scope.userId;
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


    $scope.gotoUserCenter = function () {
        $state.go("userCenter",{cache:false},{reload: true});
    }

    $scope.backToMain = function () {
        sessionStorage.setItem("currentUrl", "main");
        currentUrl = sessionStorage.getItem("currentUrl");
        user = sessionStorage.getItem("user");
        $state.go("main",{cache:false},{reload: true});
    }

}]);
