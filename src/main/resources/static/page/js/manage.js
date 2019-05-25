var INDEX = angular.module("jianshuApp");
// 主页控制器
INDEX.controller("manageCtrl", ['$scope', '$http', '$state','$stateParams', function ($scope, $http, $state,$stateParams) {


    $scope.initManage = function () {
        $scope.getAllUser();
        $scope.getAllShop();
        $scope.getAllBook();
    };

    $scope.getAllUser = function () {
        var url_get_user = "/user/getAll";
        $http({
            method: 'GET',
            url: url_get_user
        }).then(function successCallback(response) {
            var data = response.data;
            $scope.allUser = data;
        });
    };

    $scope.getAllShop = function () {
        var url_get_shop = "/shop/getAll";
        $http({
            method: 'GET',
            url: url_get_shop
        }).then(function successCallback(response) {
            var data = response.data;
            $scope.allShop = data;

        });
    };

    $scope.getAllBook = function () {
        var url_get_book = "/book/getAll";
        $http({
            method: 'GET',
            url: url_get_book
        }).then(function successCallback(response) {
            var data = response.data;
            $scope.allBook = data;

        });
    };

    $scope.deleteUser = function (userId) {
        var url_delete_user = "/user/delete/"+userId;
        $http({
            method: 'DELETE',
            url: url_delete_user
        }).then(function successCallback(response) {
            layui.use('layer', function(){
                var layer = layui.layer;
                layer.alert('删除成功');
                $scope.initManage();
            });

        });
    };

    $scope.deleteShop = function (shopId) {
        var url_delete_shop = "/book/delete/"+shopId;
        $http({
            method: 'DELETE',
            url: url_delete_shop
        }).then(function successCallback(response) {
            layui.use('layer', function(){
                var layer = layui.layer;
                layer.alert('删除成功');
                $scope.initManage();
            });

        });
    };


    $scope.deleteBook = function (bookId) {
        var url_delete_book = "/book/offShelf/"+bookId;
        $http({
            method: 'get',
            url: url_delete_book
        }).then(function successCallback(response) {
            layui.use('layer', function(){
                var layer = layui.layer;
                layer.alert('删除成功');
                $scope.initManage();
            });

        });
    };


}]);
