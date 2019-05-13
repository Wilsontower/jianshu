var INDEX = angular.module("jianshuApp");
// 主页控制器
INDEX.controller("resetPwdCtrl", ['$scope', '$http', '$state', function ($scope, $http, $state) {
    var data;
    $scope.initResetPwd = function () {
        user = sessionStorage.getItem("user");
        $scope.userId = user;
        var url_get_user = "/user/get/" + user;
        $http({
            method: 'GET',
            url: url_get_user
        }).then( function successCallback(response) {
                data = response.data;
            }
        )
    };
    $scope.resetPwd = function(){
        originPwd = document.getElementById("origin_pwd").value;
        newPwd = document.getElementById("new_pwd").value;
        newPwdAgain = document.getElementById("new_pwd_again").value;
        if(originPwd == data[0]){
            if(newPwd != ""){
                if(newPwd == newPwdAgain){
                    newdata = [sessionStorage.getItem("user"),newPwd,data[1],data[2],data[3],data[4],data[5],data[6]];
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
                }else{
                    layui.use('layer', function(){
                        var layer = layui.layer;
                        layer.alert('两次密码不一致!');
                    });
                }
            }else{
                layui.use('layer', function(){
                    var layer = layui.layer;
                    layer.alert('请输入新密码!');
                });
            }
        }else{
            layui.use('layer', function(){
                var layer = layui.layer;
                layer.alert('原密码错误!');
            });
        }
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