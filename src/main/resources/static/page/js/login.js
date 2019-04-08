var INDEX = angular.module("jianshuApp");
// 主页控制器
INDEX.controller("loginCtrl", ['$scope', '$http', '$state', function ($scope, $http, $state) {


    $scope.userLogin = function () {
        if(null == $scope.username) {
            alert("请输入用户名");
        }
        else if(null == $scope.password){
            alert("请输入密码")
        }
        else{
            var url_check_user = "/user/find/"+$scope.username;
            $http({
                method: 'GET',
                url: url_check_user
            }).then(function successCallback(response) {
                var findUserResult = response.data;
                if (findUserResult) {
                    var data = [];
                    data.push($scope.username);
                    data.push($scope.password);
                    var url_check_pwd = "/user/checkPassword";
                    $http({
                        method: 'POST',
                        url: url_check_pwd,
                        data:data
                    }).then(function successCallback(response) {
                        var checkResult = response.data;
                        if (checkResult) {
                            alert("登录成功");
                            $scope.loginMain($scope.username);
                        }
                        else{
                            alert("密码错误");
                        }

                    });


                }
                else{
                    alert("用户不存在");
                }

            });
        }

    }

    $scope.loginMain = function (userId) {
        sessionStorage.setItem("currentUrl", "main");
        sessionStorage.setItem("user", userId);
        currentUrl = sessionStorage.getItem("currentUrl");
        user = sessionStorage.getItem("user");
        $state.go("main",{cache:false},{reload: true});
    }

}]);
