angular.module('AboutCtrl', [])


// A simple controller that fetches a list of data from a service
.controller('AboutCtrl', ['$rootScope', '$scope', '$state', 'Job', 'util',
	function($rootScope, $scope, $state, Job, util) {
		$scope.toggleDesktopBrowserScrolling = function () {
			$rootScope.desktopBrowserScrolling = !$rootScope.desktopBrowserScrolling;
		}
	}
])


