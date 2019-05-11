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
            $scope.userPassword = data[0];
            if(data[1]!=null)
                $scope.userAge = data[1];
            else
                $scope.userAge = "设置您的年龄"
            if(data[2]!=null)
                $scope.userSchool = data[2];
            else
                $scope.userSchool = "设置您的学校"
            if(data[3]!=null)
                $scope.userINFO = data[3];
            else
                $scope.userINFO = "设置您的签名- ( ゜- ゜)つロ";
            }
        )
    };
    $scope.submit = function(){
        password=document.getElementById("userinfo_password").value;
        age=document.getElementById("userinfo_age").value;
        school=document.getElementById("userinfo_school").value;
        info=document.getElementById("userinfo_info").value;
        if(password=="")password = data[0];
        if(age=="")age = data[1];
        if(school=="")school = data[2];
        if(info=="")info = data[3];
        newdata = [sessionStorage.getItem("user"),password,age,school,info];
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