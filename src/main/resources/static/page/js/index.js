// 根据ng-app的值新建一个模块
var INDEX = angular.module("jianshuApp", ['ui.router','treeGrid']);


INDEX.controller("indexCtrl", ['$scope', '$state', function ($scope, $state) {
    $state.go('main');
    if (!sessionStorage.getItem("currentUrl")) {
        sessionStorage.setItem("currentUrl", "main");
    }
    $scope.homeNavigator = {
        url: sessionStorage.getItem("currentUrl"),
    };
}]);


INDEX.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
   $urlRouterProvider
       .when('', '/main');
   $stateProvider.state('main', {
       url: '/main',
       cache: false,
       templateUrl: '/page/main.html',
   });


}]);
