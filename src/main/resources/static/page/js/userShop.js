var INDEX = angular.module("jianshuApp");
// 主页控制器
INDEX.controller("shopCtrl", ['$scope', '$http', '$state', function ($scope, $http, $state) {

    $scope.allBooks = [];
    $scope.initShop = function () {
        user = sessionStorage.getItem("user");
        $scope.userId = user;
        $scope.getShop();
        $scope.getAllBooks();
        $scope.imageSrc = "unSet";
    };

    $scope.getAllBooks = function () {
        var url_get_allBooks = "/book/getAll/"+$scope.userId;
        $http({
            method: 'GET',
            url: url_get_allBooks
        }).then(function successCallback(response) {
            var data = response.data;
            $scope.allBooks = data;

        });

    };

    $scope.createShop = function () {
        var url_find_shop = "/shop/findByUserId/"+$scope.userId;
        $http({
            method: 'GET',
            url: url_find_shop
        }).then(function successCallback(response) {
            var findUserResult = response.data;
            if(findUserResult){
                alert("您已经开通过店铺，无法再次开通");
                user = sessionStorage.getItem("user");
                $scope.userId = user;
                $state.go("userShop",{cache:false},{reload: true});
            }
            else{
                if($scope.shopName&&$scope.shopInfo){
                    var userId  = sessionStorage.getItem("user");
                    var url_get_type = "/user/getType/"+userId;
                    $http({
                        method: 'GET',
                        url: url_get_type
                    }).then(function successCallback(response) {
                        var tmp = response.data;
                        $scope.userType = tmp["userType"];
                        var data = [];
                        data.push($scope.shopName);
                        data.push($scope.shopInfo);
                        data.push($scope.userId);
                        data.push($scope.userType);
                        var url_create_shop = "/shop/create";
                        $http({
                            method: 'POST',
                            url: url_create_shop,
                            data:data
                        }).then(function successCallback(response) {
                            var url_get_shop = "/shop/getByUserId/"+$scope.userId;
                            $http({
                                method: 'GET',
                                url: url_get_shop
                            }).then(function successCallback(response) {
                                var data = response.data;
                                $scope.shopId = data["shopID"];
                                $scope.addShopId($scope.shopId);
                                alert("开通成功");
                                $scope.gotoShop();
                            });

                        });
                    });

                }else {
                    alert("请完整填写所需内容");
                }
            }
        });
    };

    $scope.getShop = function () {
        var url_get_shop = "/shop/getByUserId/"+$scope.userId;
        $http({
            method: 'GET',
            url: url_get_shop
        }).then(function successCallback(response) {
         var data = response.data;
         $scope.shopname = data["shopName"];
         $scope.shopinfo = data["shopInfo"];
         $scope.shopId = data["shopID"];
        });
    };

    $scope.gotoShop =function () {
        //先通过用户ID检测是否已经创建过店铺，没有就创建
        var url_find_shop = "/shop/findByUserId/"+$scope.userId;
        $http({
            method: 'GET',
            url: url_find_shop
        }).then(function successCallback(response) {
            var findUserResult = response.data;
            if(findUserResult){
                user = sessionStorage.getItem("user");
                $scope.userId = user;
                $state.go("userShop",{cache:false},{reload: true});
            }
            else{
                $state.go("createShop",{cache:false},{reload: true});
            }
        });
    };

    $scope.addShopId = function (shopId) {
        var data = [];
        data.push(shopId);
        data.push($scope.userId);
        var url_add_shopId = "/user/addShopId";
        $http({
            method: 'POST',
            url: url_add_shopId,
            data:data
        }).then(function successCallback(response) {
            //do nothing
        });
    };

    var formData = new FormData();
    $scope.setImagePreview = function (files) {
        var imgFile = files[0];
        formData.append('file', imgFile);
        var fileName = imgFile.name;
        var fileType = fileName.substring(fileName.lastIndexOf(".") + 1).toLowerCase();
        $scope.imageSrc = window.URL.createObjectURL(imgFile);
        if(fileType!=='jpg'){
            alert("请选择正确格式的图片");
        }
        $scope.$apply();
    };

    $scope.loadBook = function () {
        var url_get_shop = "/shop/getByUserId/"+$scope.userId;
        $http({
            method: 'GET',
            url: url_get_shop
        }).then(function successCallback(response) {
            var data = response.data;
            $scope.shopId = data["shopID"];
            //存入Book
            var bookId='';
            var bookData = [];
            bookData.push($scope.bookName);
            bookData.push($scope.bookInfo);
            bookData.push($scope.bookPrice);
            bookData.push($scope.userId);
            bookData.push($scope.shopId);

            var url_add_book = "/book/add";
            $http({
                method: 'POST',
                url: url_add_book,
                data:bookData
            }).then(function successCallback(response) {
                var tmp = response.data;
                bookId = tmp["bookId"];
                //把图片写入
                var url_add_image = "/book/addImage/"+bookId;
                $http({
                    method: 'POST',
                    url: url_add_image,
                    data: formData,
                    headers: {'Content-Type':undefined},
                    transformRequest: angular.identity
                }).then(function successCallback(response) {
                    alert("上传成功");
                    $state.go("userShop",{cache:false},{reload: true});
                });
            });
        });


    };

    $scope.gotoUserCenter = function () {
        $state.go("userCenter",{cache:false},{reload: true});
    };

    $scope.gotoUploadBook = function () {
        $state.go("uploadBook",{cache:false},{reload: true});
    }

    $scope.backToMain = function () {
        sessionStorage.setItem("currentUrl", "main");
        currentUrl = sessionStorage.getItem("currentUrl");
        user = sessionStorage.getItem("user");
        $state.go("main",{cache:false},{reload: true});
    }

    $scope.enterMyDetails = function (bookId) {
        $state.go('details', {
            bookID: bookId
        })
    }

}]);
