// 根据ng-app的值新建一个模块
var INDEX = angular.module("jianshuApp", ['ui.router','treeGrid']);
var currentUrl;
var user;

INDEX.controller("indexCtrl", ['$scope', '$state', function ($scope, $state) {

    $state.go('main');
    if (!sessionStorage.getItem("currentUrl")&&!sessionStorage.getItem("user")) {
        sessionStorage.setItem("currentUrl", "main");
        sessionStorage.setItem("user", "tourist");
        currentUrl = sessionStorage.getItem("currentUrl");
        user = sessionStorage.getItem("user");
        $scope.userId = user;
    }else {
        currentUrl = sessionStorage.getItem("currentUrl");
        user = sessionStorage.getItem("user");
        $scope.userId = user;
    }
    $scope.homeNavigator = {
        url: sessionStorage.getItem("currentUrl"),
    };

    $scope.enterLogin = function () {
        sessionStorage.setItem("user", "tourist");
        user = sessionStorage.getItem("user");
        $scope.userId = user;
        sessionStorage.setItem("currentUrl", "login");
        $scope.homeNavigator.url = sessionStorage.getItem("currentUrl");
        currentUrl = sessionStorage.getItem("currentUrl");
        $state.go("login",{cache:false},{reload: true});
    }

    $scope.enterMain = function () {

        sessionStorage.setItem("currentUrl", "main");
        $scope.homeNavigator.url = sessionStorage.getItem("currentUrl");
        currentUrl = sessionStorage.getItem("currentUrl");
        user = sessionStorage.getItem("user");
        $scope.userId = user;
        $state.go("main",{cache:false},{reload: true});
    }

    $scope.enterRegister = function () {

        sessionStorage.setItem("currentUrl", "register");
        $scope.homeNavigator.url = sessionStorage.getItem("currentUrl");
        currentUrl = sessionStorage.getItem("currentUrl");
        $state.go("register",{cache:false},{reload: true});
    }

    $scope.getCurrentUrl = function () {
        return currentUrl;
    }

    $scope.getUser = function () {
        $scope.userId = user;
        return user;
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
   }).state('details', {
       url: '/details',
       cache: false,
       templateUrl: '/page/details.html'
   });


}]);
