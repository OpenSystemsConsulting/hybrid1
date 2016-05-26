angular.module('LoginCtrl', [])

.controller('LoginCtrl', function( $scope, LoginService, $ionicPopup, $state, pdaParams, eventService, messageService, $window, siteService, $location) {
	$scope.data = {};

	$scope.login = function() {
		LoginService.loginUser($scope.data.username, $scope.data.password).success(function(name) {


			// Retrieve current login details
			var loginDetails = JSON.parse(localStorage.getItem('login'));

			// If no login details assume new installation or reset
			if(!loginDetails) {

				// 1st time ever logged in on PDA
				loginDetails = {
					name:	name,
					time:	new Date().toISOString()
				};

				// Store details in local storage
				// TODO - need to reset timestamp or blank details on logout
				localStorage.setItem('login', JSON.stringify(loginDetails));

				// Store API url based on login name
				siteService.setSiteDetails(name);
				siteService.setClientConfig(name);

				// reload app based on new stored urls
				// TODO - need a please wait initialiasing app... type message
				$scope.firstTimeLoad = true;
				
				// Store 1st time loaded to avoid double login when restarting
				//localStorage.setItem('firstTimeLoad', true);

				var alertPopup = $ionicPopup.alert({
					title: 'First time initialisation',
					template: 'Please wait while we configure the device.  You may need to log in again.'
				});

				// Default username/password
				$scope.data.username = 'First time initialisation, restarting app...';
				//$scope.data.password = 'Please wait, restarting app...';
				$scope.data.password = '';
				//$scope.apply();

				alertPopup.then(function(res) {
					// maybe $location.path or $state.go()
					// (http://stackoverflow.com/questions/22843371/how-to-restart-angularjs-app)
					$location.path('/');
					//$window.location.href = '/';		// no 2nd login - doesn't work on android device though
					$window.location.reload();		// reloads app completely - have to login 2nd time
				});
			}
			else {

				// update last login time
				loginDetails.time = new Date().toISOString();
				localStorage.setItem('login', JSON.stringify(loginDetails));

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
			}
		}).error(function(name) {
			var alertPopup = $ionicPopup.alert({
				title: 'Login failed!',
				template: 'Please check your credentials!'
			});
		});
	}

});
