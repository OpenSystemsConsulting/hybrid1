angular.module('MenuCtrl', [])

.controller('MenuCtrl', function( $scope,  $ionicSideMenuDelegate, $ionicNavBarDelegate) {

	// Does not do anything yet with OSC sub menu

	$scope.toggleLeftSideMenu = function() {
		$ionicSideMenuDelegate.toggleLeft();
	};

	//$ionicNavBarDelegate.title('Title from comtroller');		// latest ionic
	//$ionicNavBarDelegate.setTitle('Title from controller');		// old version of ionic used by OSC

});
