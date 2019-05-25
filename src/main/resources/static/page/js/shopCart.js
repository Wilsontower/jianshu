var INDEX = angular.module("jianshuApp");
// 主页控制器
INDEX.controller("shopCartCtrl", ['$scope', '$http', '$state', function ($scope, $http, $state) {
    $scope.initShopCart = function () {
        var userId = sessionStorage.getItem("user")
        var url_get_cart = "/cart/getAllByUserID/"+userId;
        var Data;
        $http({
            method: 'GET',
            url: url_get_cart
        }).then(function successCallback(response) {
            Data = response.data;
            $scope.allInfos = Data;
            $scope.PriceSum  = 0;
            for(var i in Data){
                $scope.PriceSum  += parseInt(Data[i]["bookPrice"]);
            }
        });
    };

    $scope.deleteThis = function (cartId) {
        var url_delete = "/cart/delete/" + cartId;
        $http({
            method: 'DELETE',
            url: url_delete
        }).then(function successCallback(response) {
            layui.use('layer', function(){
                var layer = layui.layer;
                layer.alert('删除成功');
            });
            $state.reload();
        });
    };

    $scope.buyAll = function () {
        if($scope.allInfos.length == 0)
            return;
        var allID = [];
        for(var i in $scope.allInfos){
            allID.push($scope.allInfos[i]["cartID"])
        }
        var url_delete_all = "/cart/deleteAll";

        $http({
            method: 'POST',
            url: url_delete_all,
            data:allID
        }).then(function successCallback(response) {
            layui.use('layer', function(){
                var layer = layui.layer;
                layer.alert('购买成功');
            });
            $state.reload();
        });
    };
}]);