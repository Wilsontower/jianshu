var INDEX = angular.module("jianshuApp");
// 主页控制器
INDEX.controller("centerCtrl", ['$scope', '$http', '$state', function ($scope, $http, $state) {

    $scope.initUserCenter = function () {
        user = sessionStorage.getItem("user");
        $scope.userId = user;
        $scope.getAllBook();
        var url_get_user = "/user/getByUserId/"+ $scope.userId;
        $http({
            method: 'GET',
            url: url_get_user
        }).then(function successCallback(response) {
            var data = response.data;
            $scope.currentUser = data;
            $scope.userInfo = $scope.currentUser["userInfo"];

        });
    };

    $scope.getAllBook = function () {
        var url_get_all = "/book/getAllBook";
        $http({
            method: 'GET',
            url: url_get_all
        }).then(function successCallback(response) {
            var data = response.data;
            $scope.allBook = data;
            $scope.recommendBooks = [];
            for(var i=0;i<5;i++){
                $scope.recommendBooks.push($scope.allBook[i]);
            }
        });

    };
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


    };

    $scope.reviseUserInfo = function () {
        $state.go("userInfo",{cache:false},{reload: true});
    };

    $scope.gotoResetPwd = function(){
        $state.go("resetPwd",{cache:false},{reload: true});
    }

    $scope.gotoAllOrder =function () {
        $state.go("allOrder",{cache:false},{reload: true});
    };

    $scope.gotoToBeDelivered = function () {
        $state.go('ordersByType', {
            TYPE: "TBD",
            USER:"user"
        });
    };
    $scope.gotoToShopCart = function(){
        $state.go('shopCart', {cache:false},{reload: true});
    };

    $scope.gotoAwaitingReceive=function () {
        $state.go('ordersByType', {
            TYPE: "AR",
            USER:"user"
        });
    };
    $scope.gotoWaitingForComment=function () {
        $state.go('ordersByType', {
            TYPE: "WFC",
            USER:"user"
        });
    };

    $scope.gotoReturn=function () {
        $state.go('ordersByType', {
            TYPE: "RETURN",
            USER:"user"
        });
    };

    $scope.enterDetails = function (bookId) {
        $state.go('details', {
            bookID: bookId
        });
    };
    $scope.backToMain = function () {
        sessionStorage.setItem("currentUrl", "main");
        currentUrl = sessionStorage.getItem("currentUrl");
        user = sessionStorage.getItem("user");
        $state.go("main",{cache:false},{reload: true});
    }

}]);
