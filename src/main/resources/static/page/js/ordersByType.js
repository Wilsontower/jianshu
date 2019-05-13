var INDEX = angular.module("jianshuApp");
// 主页控制器
INDEX.controller("obtCtrl", ['$scope', '$http', '$state','$stateParams', function ($scope, $http, $state,$stateParams) {

    $scope.initOrdersByType = function () {
        var userId = sessionStorage.getItem("user")
        var type  = $stateParams.TYPE;
       if(type ==="tbd" ){
           $scope.theType = "待发货";
       }
       else if(type ==="ar"){
           $scope.theType = "待收货";
       }
       else if(type ==="wfc"){
           $scope.theType = "待评价";
       }
       else if(type ==="return"){
           $scope.theType = "退货";
       }

        $scope.thisOrders = [];
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


    };



}]);