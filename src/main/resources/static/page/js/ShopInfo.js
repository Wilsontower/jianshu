var INDEX = angular.module("jianshuApp");
// 主页控制器
INDEX.controller("shopInfoCtrl", ['$scope', '$http', '$state', function ($scope, $http, $state) {
    $scope.initShopInfo = function () {
        user = sessionStorage.getItem("user");
        $scope.userId = user;
        var url_get_shop = "/shop/getByUserId/"+user;
        var then = $http({
            method: 'GET',
            url: url_get_shop
        }).then(function successCallback(response) {
            shop = response.data;
            $scope.shopName = shop["shopName"];
            $scope.CreateTimeInfo = shop["createTime"];
            $scope.shopType = shop["shopType"];
            $scope.shopStatus = shop["status"];
            if( shop["address"] != null)
                $scope.shopAddress = shop["address"];
            else
                $scope.shopAddress = "请设置店铺地址"
            if( shop["phone"] != null)
                $scope.shopPhone = shop["phone"];
            else
                $scope.shopPhone = "请设置店铺电话"
            $scope.shopINFO = shop["shopInfo"];
        });
    };
    $scope.shopSubmit = function () {
        s_name = document.getElementById("shopinfo_name").value;
        if(s_name == "")s_name = shop["shopName"];
        s_type = document.getElementById("shopinfo_type").value;
        if(s_type == "")s_type = shop["shopType"];
        s_status = document.getElementById("shopinfo_status").value;
        if(s_status == "")s_status = shop["status"];
        s_address = document.getElementById("shopinfo_address").value;
        if(s_address == "")s_address = shop["address"];
        s_phone = document.getElementById("shopinfo_phone").value;
        if(s_phone == "")s_phone = shop["phone"];
        s_info = document.getElementById("shopinfo_info").value;
        if(s_info == "")s_info = shop["shopInfo"];

        newdata = [user,s_name,s_info,s_type,s_status,s_address,s_phone];
        var update_shop = "/shop/update";
        $http({
            method: 'POST',
            url: update_shop,
            data:newdata
        }).then( function successCallback(response) {
            layui.use('layer', function(){
                var layer = layui.layer;
                layer.alert('修改成功');
            });
        });
    }
    $scope.gotoUserCenter = function () {
        $state.go("userCenter",{cache:false},{reload: true});
    };
    $scope.gotoUserShop = function () {
        $state.go("userShop",{cache:false},{reload: true});
    };
    $scope.backToMain = function () {
        sessionStorage.setItem("currentUrl", "main");
        currentUrl = sessionStorage.getItem("currentUrl");
        user = sessionStorage.getItem("user");
        $state.go("main",{cache:false},{reload: true});
    }
}]);