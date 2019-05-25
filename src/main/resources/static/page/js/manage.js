var INDEX = angular.module("jianshuApp");
// 主页控制器
INDEX.controller("manageCtrl", ['$scope', '$http', '$state','$stateParams', function ($scope, $http, $state,$stateParams) {


    $scope.initManage = function () {
        $scope.getAllUser();
        $scope.getAllShop();
        $scope.getAllBook();
    };

    $scope.getAllUser = function () {
        var url_get_user = "/user/getAll";
        $http({
            method: 'GET',
            url: url_get_user
        }).then(function successCallback(response) {
            var data = response.data;
            $scope.allUser = data;
            $http.setPage(data);
        });
    };

    $scope.getAllShop = function () {
        var url_get_shop = "/shop/getAll";
        $http({
            method: 'GET',
            url: url_get_shop
        }).then(function successCallback(response) {
            var data = response.data;
            $scope.allShop = data;
            $http.setPage(data);

        });
    };

    $scope.getAllBook = function () {
        var url_get_book = "/book/getAll";
        $http({
            method: 'GET',
            url: url_get_book
        }).then(function successCallback(response) {
            var data = response.data;
            $scope.allBook = data;
            $http.setPage(data);

        });
    };

    $scope.deleteUser = function (userId) {
        var url_delete_user = "/user/delete/"+userId;
        $http({
            method: 'DELETE',
            url: url_delete_user
        }).then(function successCallback(response) {
            layui.use('layer', function(){
                var layer = layui.layer;
                layer.alert('删除成功');
                $scope.initManage();
            });

        });
    };

    $scope.deleteShop = function (shopId) {
        var url_delete_shop = "/book/delete/"+shopId;
        $http({
            method: 'DELETE',
            url: url_delete_shop
        }).then(function successCallback(response) {
            layui.use('layer', function(){
                var layer = layui.layer;
                layer.alert('删除成功');
                $scope.initManage();
            });

        });
    };


    $scope.deleteBook = function (bookId) {
        var url_delete_book = "/book/offShelf/"+bookId;
        $http({
            method: 'get',
            url: url_delete_book
        }).then(function successCallback(response) {
            layui.use('layer', function(){
                var layer = layui.layer;
                layer.alert('删除成功');
                $scope.initManage();
            });

        });
    };

    $http.setPage = function (data) {
        //数据源
        $scope.data = data;
        //分页总数
        $scope.pageSize = 10;
        $scope.pages = Math.ceil($scope.data.length / $scope.pageSize); //分页数
        $scope.newPages = $scope.pages > 5 ? 5 : $scope.pages;
        $scope.pageList = [];
        $scope.selPage = 1;
        //设置表格数据源(分页)
        $scope.setData = function () {
            $scope.items = $scope.data.slice(($scope.pageSize * ($scope.selPage - 1)), ($scope.selPage * $scope.pageSize));//通过当前页数筛选出表格当前显示数据
        }
        $scope.items = $scope.data.slice(0, $scope.pageSize);
        //分页要repeat的数组
        for (var i = 0; i < $scope.newPages; i++) {
            $scope.pageList.push(i + 1);
        }
        //打印当前选中页索引
        $scope.selectPage = function (page) {
            //不能小于1大于最大
            if (page < 1 || page > $scope.pages) return;
            //最多显示分页数5
            if (page > 2) {
                //因为只显示5个页数，大于2页开始分页转换
                var newpageList = [];
                for (var i = (page - 3) ; i < ((page + 2) > $scope.pages ? $scope.pages : (page + 2)) ; i++) {
                    newpageList.push(i + 1);
                }
                $scope.pageList = newpageList;
            }
            $scope.selPage = page;
            $scope.setData();
            $scope.isActivePage(page);
            console.log("选择的页：" + page);
        };
        //设置当前选中页样式
        $scope.isActivePage = function (page) {
            return $scope.selPage === page;
        };
        //上一页
        $scope.Previous = function () {
            $scope.selectPage($scope.selPage - 1);
        };
        //下一页
        $scope.Next = function () {
            $scope.selectPage($scope.selPage + 1);
        };
    };


}]);
