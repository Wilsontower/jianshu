// 根据ng-app的值新建一个模块
var INDEX = angular.module("jianshuApp", ['ui.router','treeGrid']);
var currentUrl;//储存当前url
var user;//储存当前用户
var crumb;//储存当前面包屑导航

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

    $scope.gotoUserCenter = function () {
        $state.go("userCenter",{cache:false},{reload: true});
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
       url: '/details/:bookID',
       cache: false,
       templateUrl: '/page/details.html'
   }).state('myDetails', {
           url: '/myDetails/:bookID',
           cache: false,
           templateUrl: '/page/myDetails.html'
   }).state('buy', {
       url: '/buy/:bookID',
       cache: false,
       templateUrl: '/page/buy.html'
   }).state('userCenter', {
       url: '/userCenter',
       cache: false,
       templateUrl: '/page/userCenter.html'
   }).state('userInfo',{
       url: '/userInfo',
       cache: false,
       templateUrl: '/page/userInfo.html'
   }).state('resetPwd',{
       url: '/resetPwd',
       cache: false,
       templateUrl: '/page/resetPwd.html'
   }).state('userShop', {
       url: '/userShop',
       cache: false,
       templateUrl: '/page/userShop.html'
   }).state('createShop', {
       url: '/createShop',
       cache: false,
       templateUrl: '/page/createShop.html'
   }).state('uploadBook', {
       url: '/uploadBook',
       cache: false,
       templateUrl: '/page/uploadBook.html'
   }).state('allOrder', {
       url: '/allOrder',
       cache: false,
       templateUrl: '/page/allOrder.html'
   }).state('otherShop', {
       url: '/buy/:shopID',
       cache: false,
       templateUrl: '/page/otherShop.html'
   }).state('errorPage', {
       url: '/errorPage',
       cache: false,
       templateUrl: '/page/errorPage.html'
   });


}]);
