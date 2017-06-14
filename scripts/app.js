/**
 * The entry point of the Javascript part of the whole web app
 * @author Vincent ZHANG
 */

(function() {
	'use strict';

	angular.module("vinceApp", []);

	angular.module("vinceApp").controller("vinceCtrl", vinceController);

	vinceController.$inject = ['$scope'];

	function vinceController($scope) {
		$scope.displayDefaultContent = true;
		$scope.expressedContent = "property defined in $scope can also be accessed in angular expression, we will cover angularjs expression soon";
		$scope.toggleDefaultContent = function () {
			$scope.displayDefaultContent = !$scope.displayDefaultContent;
		};
		function init() {
			$scope.displayDefaultContent = false;
		};
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