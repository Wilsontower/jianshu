// 根据ng-app的值新建一个模块
var INDEX = angular.module("jianshuApp", ['ui.router','treeGrid']);


INDEX.controller("indexCtrl", ['$scope', '$state', function ($scope, $state) {

    $state.go('main');
    if (!sessionStorage.getItem("currentUrl")) {
        sessionStorage.setItem("currentUrl", "main");
        $scope.currentUrl = sessionStorage.getItem("currentUrl");
    }else {
        $scope.currentUrl = sessionStorage.getItem("currentUrl");
    }
    $scope.homeNavigator = {
        url: sessionStorage.getItem("currentUrl"),
    };

    $scope.enterLogin = function () {

        sessionStorage.setItem("currentUrl", "login");
        $scope.homeNavigator.url = sessionStorage.getItem("currentUrl");
        $scope.currentUrl = sessionStorage.getItem("currentUrl");
        $state.go("login",{cache:true},{reload: true});
    }

    $scope.enterMain = function () {

        sessionStorage.setItem("currentUrl", "main");
        $scope.homeNavigator.url = sessionStorage.getItem("currentUrl");
        $scope.currentUrl = sessionStorage.getItem("currentUrl");
        $state.go("main",{cache:true},{reload: true});
    }

    $scope.enterRegister = function () {

        sessionStorage.setItem("currentUrl", "register");
        $scope.homeNavigator.url = sessionStorage.getItem("currentUrl");
        $scope.currentUrl = sessionStorage.getItem("currentUrl");
        $state.go("register",{cache:false},{reload: true});
    }
}]);


INDEX.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
   $urlRouterProvider
       .when('', '/main');
   $stateProvider.state('main', {
       url: '/main',
       cache: false,
       templateUrl: '/page/main.html'
   }).state('login', {
       url: '/login',
       cache: false,
       templateUrl: '/page/login.html'
   }).state('register', {
       url: '/register',
       cache: false,
       templateUrl: '/page/register.html'
   });


}]);
