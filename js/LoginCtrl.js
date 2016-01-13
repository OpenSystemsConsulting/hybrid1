angular.module('LoginCtrl', [])

.controller('LoginCtrl', function( $scope, LoginService, $ionicPopup, $state, pdaParams, eventService, messageService) {
	$scope.data = {};

	$scope.login = function() {
		LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
			if(pdaParams.getDriverId() <= 0) {
				$state.go('tab.pda');			// configure driver no. here
			} else {
				// configure user specific data e.g. urls, REST endpoints
				//pdaParams.setSiteData($scope.data.username);			// TODO - maybe future use

				// send logon event
				if(pdaParams.getDriverId() > 0) {
					eventService.sendMsg('LOGON');

					// Dump local storage at logon time - debug aid
					messageService.dumpLocalStorage();

					// Clear obsolete replication data - start with a clean slate
					// (NOTE: will also dump latest version of local storage)
					messageService.clearChangeData();

				}

				$state.go('tab.job-index');		// list jobs
			}
		}).error(function(data) {
			var alertPopup = $ionicPopup.alert({
				title: 'Login failed!',
				template: 'Please check your credentials!'
			});
		});
	}

});
