var INDEX = angular.module("jianshuApp");
// 主页控制器
INDEX.controller("obtCtrl", ['$scope', '$http', '$state','$stateParams', function ($scope, $http, $state,$stateParams) {

    $scope.initOrdersByType = function () {
        var userId = sessionStorage.getItem("user")
        var type  = $stateParams.TYPE;
        var userType  = $stateParams.USER;

       if(type ==="TBD" ){
           $scope.theType = "待发货";
       }
       else if(type ==="AR"){
           $scope.theType = "待收货";
       }
       else if(type ==="WFC"){
           $scope.theType = "待评价";
       }
       else if(type ==="RETURN"){
           $scope.theType = "退货";
       }

        $scope.thisOrders = [];
       if(userType==='user'){
           //获取用户的所以订单
           var url_get_allOrder = "/order/getAllByUserID/"+userId;
           $http({
               method: 'GET',
               url: url_get_allOrder
           }).then(function successCallback(response) {
               var data = response.data;
               $scope.myOrders = data;
               for(i in $scope.myOrders){
                   if($scope.myOrders[i].orderStatus===type){
                       $scope.thisOrders.push($scope.myOrders[i]);
                   }
               }
           });

       }

        if(userType==='shop'){
            //获取店铺的所有订单
            var url_get_shop = "/shop/getByUserId/"+userId;
            $http({
                method: 'GET',
                url: url_get_shop
            }).then(function successCallback(response) {
                var data = response.data;
               var shopId = data["shopID"];
                var url_get_allOrderShop = "/order/getAllByShopID/"+shopId ;
                $http({
                    method: 'GET',
                    url: url_get_allOrderShop
                }).then(function successCallback(response) {
                    var data = response.data;
                    $scope.myOrders = data;
                    for(i in $scope.myOrders){
                        if($scope.myOrders[i].orderStatus===type){
                            $scope.thisOrders.push($scope.myOrders[i]);
                        }
                    }
                });

            });

        }

    };

    $scope.backToMain = function () {
        sessionStorage.setItem("currentUrl", "main");
        currentUrl = sessionStorage.getItem("currentUrl");
        user = sessionStorage.getItem("user");
        $state.go("main",{cache:false},{reload: true});
    }


}]);