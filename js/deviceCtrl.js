angular.module('deviceCtrl', [])


.controller('deviceCtrl', [
'$rootScope', '$scope', '$state', 'TpmPdaController' , 'util', 'pdaParams', 'gpsService', 'cordovaReady','appService','pushService', 'deviceService', 'network','fullreplication', '$cordovaNetwork',"appConfig",'siteService','$ionicPopup',
function( $rootScope, $scope, $state, TpmPdaController, util, pdaParams, gpsService , cordovaReady ,appService , pushService, deviceService, network, fullreplication, $cordovaNetwork, appConfig, siteService, $ionicPopup) {

	// TODO - maybe have array of key/value pairs - then can simply iterate with ng-repeat on template
	var devicectrl = { };

		devicectrl.title = "Device Details" + " v"+appConfig.version;
		devicectrl.drivernum = pdaParams.getDriverId();
		devicectrl.isGpsWorking = gpsService.getGpsIsWorking();
		devicectrl.isDeviceReady = cordovaReady.isDeviceReady();
		devicectrl.showGpsAlerts = gpsService.getShowGpsAlerts();
		devicectrl.sendGps = gpsService.getSendGps();
		if ( devicectrl.isDeviceReady )
			devicectrl.registeredForPush = pushService.getIsRegistered();

		
	$scope.devicectrl = devicectrl;

	$scope.appConfig = appConfig;
	$scope.clientConfig = siteService.getClientConfig();

	//$scope.version = appConfig.version.toFixed(2);
	$scope.version = appConfig.version;

/*
	// http://www.gajotres.net/retrieving-ip-adress-using-cordova-without-external-service/
	networkinterface.getIPAddress(function(ip) {
		$scope.IPAddress = ip;
	});
*/

	 $scope.showResult = function () {
            return $scope.error == "";
    }

	$scope.updateShowGpsAlerts = function(torf) {
		gpsService.setShowGpsAlerts(torf);
	}

	$scope.updateSendGps = function(torf) {
		gpsService.setSendGps(torf);
	}

	$scope.exitTplusMobile = function() {

		gpsService.setSendGps(false);
		appService.exitTplusMobile();
	}

	$scope.connected = function () {
		return network.isConnected;
	};

	$scope.fullreplication = fullreplication.fullReplication;
	$scope.toggleFullReplication = function () {
		fullreplication.fullReplication = !fullreplication.fullReplication;
	};

	$scope.toggleDesktopBrowserScrolling = function () {
		$rootScope.desktopBrowserScrolling = !$rootScope.desktopBrowserScrolling;
	}

	if ( devicectrl.isDeviceReady ) {
		// device contains all properties
		var device = deviceService.getDevice();
		$scope.device = device;

		// type of network connection
		$scope.networkType = $cordovaNetwork.getNetwork();

		$scope.isOnline = $cordovaNetwork.isOnline();
	}

	$scope.pushDeRegister = function() {
		pushService.unRegister();
	}
	$scope.pushRegister = function() {
		pushService.registerForPush();
	}

	$scope.resetApp = function() {
		var confirmPopup = $ionicPopup.confirm({
			title: 'Reset App',
			template: 'This will delete all data for this app and you will need to login again.  Are you sure you want to do this?'
		});

		confirmPopup.then(function(res) {
			if(res) {
				// confirmed
				localStorage.clear();
				$state.go('login');
			} else {
				// Cancelled
			}
		});
	}

	// need to get these into $scope and onto template
/*
	document.addEventListener("deviceready", function () {
		var device = $cordovaDevice.getDevice();

		// device contains all properties
		$scope.device = device;

		// type of network connection
		$scope.networkType = $cordovaNetwork.getNetwork();

	}, false);
*/

	$scope.usedStorage = Math.round(JSON.stringify(localStorage).length / 1024) + " KB";

}]);
