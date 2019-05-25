var INDEX = angular.module("jianshuApp");
// 主页控制器
INDEX.controller("manageCtrl", ['$scope', '$http', '$state','$stateParams', function ($scope, $http, $state,$stateParams) {


    $scope.initManage = function () {
        var bookID = $stateParams.bookID;
        var url_get_book = "/book/getByBookId/"+bookID;
        $http({
            method: 'GET',
            url: url_get_book
        }).then(function successCallback(response) {
            var data = response.data;
            $scope.currentBook = data;

        });
    };




}]);
