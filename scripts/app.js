/**
 * The entry point of the Javascript part of the whole web app
 * @author Vincent ZHANG
 */

(function() {
    'use strict';

    angular.module("vinceApp", []);

    angular.module("vinceApp").controller("vinceCtrl", vinceController);

    vinceController.$inject = ['$scope', '$http'];

    function vinceController($scope, $http) {

        $scope.displayDefaultContent = true;

        $scope.toggleDefaultContent = function() {
            $scope.displayDefaultContent = !$scope.displayDefaultContent;
        };

        function init() {
            //$scope.displayDefaultContent = false;
        };

        $scope.loadData = function() {
            $http.get("server/productData.json")
                .success(function(data, status, headers, config) {
                    $scope.products = data;
                    console.log($scope.products.length);
                })
                .error(function(data, status, headers, config) {
                    alert('Something goes wrong.');
                })
                .finally(function() {
                    // it is exposed by the object because $http returns a promise
                });
        };

        $scope.loadDataWithThen = function() {
            $http.get("server/productData.json").then(function(response) {
                console.log("Status: " + response.status);
                console.log("Type: " + response.headers("content-type"));
                console.log("Length: " + response.headers("content-length"));
                $scope.products_then = response.data;
            });
        }

        // init actions go here
        init();


    }



    // a shortcut is, but it is not recommended, for details, refer to https://github.com/mgechev/angularjs-style-guide#controllers
    /*
    angular.module("vinceApp").controller("vinceCtrl", function vinceController($scope) {
    	...
    });
    */
})();
