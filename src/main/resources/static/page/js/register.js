var INDEX = angular.module("jianshuApp");
// 主页控制器
INDEX.controller("registerCtrl", ['$scope', '$http', '$state', function ($scope, $http, $state) {


    $scope.registerUser = function () {
        if($scope.password!==$scope.checkPassword){
            alert("两次密码输入不一致")
        }
        else{
            var data = [];
            data.push($scope.username);
            data.push($scope.password);
            var userId = $scope.username;
            var url_find_user = "/user/find/"+userId;
            $http({
                method: 'GET',
                url: url_find_user
            }).then(function successCallback(response) {
                var findUserResult = response.data;
                if(findUserResult){
                    alert("用户名已被使用，请重新输入")
                }
                else{
                    var url_add_user = "/user/add"
                    $http({
                        method: 'POST',
                        url: url_add_user,
                        data:data
                    }).then(function successCallback(response) {
                        alert("注册成功");
                        $scope.enterLogin();
                    });
                }
            });


        }
    };


    $scope.enterLogin = function () {

        sessionStorage.setItem("currentUrl", "login");
        $scope.homeNavigator.url = sessionStorage.getItem("currentUrl");
        currentUrl = sessionStorage.getItem("currentUrl");
        $state.go("login",{cache:false},{reload: true});
    }

}]);
