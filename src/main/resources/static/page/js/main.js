var INDEX = angular.module("jianshuApp");
// 主页控制器
INDEX.controller("mainCtrl", ['$scope', '$http', '$state', function ($scope, $http, $state) {

    $scope.initMain = function () {
        //获取主页上各种类型的书籍
        $scope.getAllBook();
    };

    $scope.getAllBook = function () {
        var url_get_all = "/book/getAllBook";
        $http({
            method: 'GET',
            url: url_get_all
        }).then(function successCallback(response) {
            var data = response.data;
            $scope.allBook = data;
            $scope.recommendBooks = [];
            for(var i=0;i<5;i++){
                $scope.recommendBooks.push($scope.allBook[i]);
            }
            $scope.kaoyanBooks = [];
            var count=0;
            for(key in $scope.allBook){
                var bookName =$scope.allBook[key].bookName;
                if(bookName.indexOf("考研")>=0&&count<5){
                    $scope.kaoyanBooks.push($scope.allBook[key]);
                    count++;
                }
            }

            $scope.rightBook1= null;
            $scope.rightBook2= null;
            $scope.rightBook1=$scope.allBook[0];
            $scope.rightBook2=$scope.allBook[1];
        });

    };




    $scope.enterDetails = function (bookId) {
        $state.go('details', {
            bookID: bookId
        });
    };

}]);