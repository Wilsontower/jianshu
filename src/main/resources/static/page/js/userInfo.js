var INDEX = angular.module("jianshuApp");
// 主页控制器
INDEX.controller("userInfoCtrl", ['$scope', '$http', '$state', function ($scope, $http, $state) {
    var data;
    $scope.initUserInfo = function () {
        user = sessionStorage.getItem("user");
        $scope.userId = user;
        var url_get_user = "/user/get/" + user;
        $http({
            method: 'GET',
            url: url_get_user
        }).then( function successCallback(response) {
            data = response.data;

            if(data[1]!=null)
                $scope.userAge = data[1];
            else
                $scope.userAge = "设置您的年龄"
            if(data[2]!=null)
                $scope.userSchool = data[2];
            else
                $scope.userSchool = "设置您的学校"
            if(data[3]!=null)
                $scope.userAddress = data[3];
            else
                $scope.userAddress = "设置收货地址";
            if(data[4]!=null)
                $scope.userPhone = data[4];
            else
                $scope.userPhone = "设置您的电话";
            if(data[5]!=null)
                $scope.userReceiver = data[5];
            else
                $scope.userReceiver = "设置收货人";
            if(data[6]!=null)
                $scope.userINFO = data[6];
            else
                $scope.userINFO = "设置您的签名- ( ゜- ゜)つロ";
            }
        )
    };
    $scope.submit = function(){
        age=document.getElementById("userinfo_age").value;
        school=document.getElementById("userinfo_school").value;
        address=document.getElementById("userinfo_address").value;
        phone=document.getElementById("userinfo_phone").value;
        receiver=document.getElementById("userinfo_receiver").value;
        info=document.getElementById("userinfo_info").value;
        if(age=="")age = data[1];
        if(school=="")school = data[2];
        if(address=="")address = data[3];
        if(phone=="")phone = data[4];
        if(receiver=="")receiver = data[5];
        if(info=="")info = data[6];
        newdata = [sessionStorage.getItem("user"),data[0],age,school,address,phone,receiver,info];
        var update_user = "/user/update";
        $http({
            method: 'POST',
            url: update_user,
            data:newdata
        }).then( function successCallback(response) {
            layui.use('layer', function(){
                var layer = layui.layer;
                layer.alert('修改成功');
            });
        });
    };
    $scope.gotoUserCenter = function () {
        $state.go("userCenter",{cache:false},{reload: true});
    };
    $scope.backToMain = function () {
        sessionStorage.setItem("currentUrl", "main");
        currentUrl = sessionStorage.getItem("currentUrl");
        user = sessionStorage.getItem("user");
        $state.go("main",{cache:false},{reload: true});
    }
}]);