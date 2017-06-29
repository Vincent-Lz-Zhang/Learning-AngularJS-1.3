/**
 * The entry point of the Javascript part of the whole web app
 * @author Vincent ZHANG
 */

(function() {
	'use strict';

	angular.module("vinceApp", ["ngRoute"]).config(routeConfigurator);

	angular.module("vinceApp").controller("vinceCtrl", vinceController);

	vinceController.$inject = ['$scope', '$location'];

	function vinceController($scope, $location) {
		$scope.displayDefaultContent = false;
		$scope.expressedContent = "property defined in $scope can also be accessed in angular expression, we will cover angularjs expression soon";
		
		function init() {
			$scope.displayDefaultContent = true;
			$location.path("#/routing");	// does not work
		};
		// init actions go here
		init();
	}
	
	routeConfigurator.$inject = ['$routeProvider'];

	function routeConfigurator($routeProvider) {
		$routeProvider
		.when("/startup", {
			templateUrl: "views/startup.html"
		})
		.when("/controller", {
			templateUrl: "views/controller.html"
		})
		.when("/routing", {
			templateUrl: "views/routing.html"
		})
		.otherwise({
			templateUrl: "views/routing.html"
		});
	}

})();