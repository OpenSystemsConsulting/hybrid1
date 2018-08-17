angular.module('deviceCtrl', [])


.controller('deviceCtrl', [
'$rootScope', '$scope', '$state', 'TpmPdaController' , 'util', 'pdaParams', 'gpsService', 'cordovaReady','appService','pushService', 'deviceService', 'network','fullreplication', '$cordovaNetwork',"appConfig",'siteService','$ionicPopup','siteConfig','messageService','jobService','sodService','jseaService','navigationService','BackgroundGeolocationService',
function( $rootScope, $scope, $state, TpmPdaController, util, pdaParams, gpsService , cordovaReady ,appService , pushService, deviceService, network, fullreplication, $cordovaNetwork, appConfig, siteService, $ionicPopup,siteConfig,messageService, jobService, sodService, jseaService, navigationService, BackgroundGeolocationService) {

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
	$scope.build = appConfig.build;

/*
	// LT - only works on a phone and only for wifi connections
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

/*
	$scope.connected = function () {
		return network.isConnected;
	};
*/

	$scope.isConnected = network.isConnected;
	$scope.toggleNetworkConnection = function () {
		network.isConnected = !network.isConnected;
	}

	$scope.fullreplication = fullreplication.fullReplication;
	$scope.toggleFullReplication = function () {
		fullreplication.fullReplication = !fullreplication.fullReplication;
	};

	$scope.setStatusBarOverlay = function() {
		StatusBar.overlaysWebView(this.checked);
	}

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

    $scope.clearNavUserChoice = function() {

        navigationService.clearUserChoice();
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
				// TODO -  clear images if required - see /app/strongloop/loopback-clientservices-osc-images/client/js/deviceCtrl.js
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

	$scope.reloadSiteConfig = function() {
		siteConfig.deleteLocalConfigs();
		siteConfig.getAllConfigsFromServer().then(function() {
			$scope.localStorageList = localStorageUsage();
		});
	}

	$scope.usedStorage = Math.round(JSON.stringify(localStorage).length / 1024) + " KB";

	$scope.localStorageList = localStorageUsage();

	function localStorageUsage () {
		var len = localStorage.length;
		var localStorageList = {};

		for(var i=0; i < len; i++) {
			var key = localStorage.key(i);
			var value = localStorage[key];
			
			if( key == 'osc-local-db')		// Ignore (potentially very large) list of jobs etc.
				continue;

			localStorageList[key] = value;
		}
		return(localStorageList);
	}

	$scope.clearChangeData = function() {
		messageService.clearChangeData();
	}

	$scope.deleteOldJobs = function() {
		jobService.deleteOldJobs(0);
	}

	$scope.deleteOldJSEA = function() {
		jseaService.deleteOldData(0);
	}

	$scope.viewChangeData = function() {
		$state.go('tab.change');
	}

	$scope.clearSODDate = function() {
		sodService.clearSODDate();
	}

	$scope.setSODDate = function() {
		sodService.setSODDate();
		$scope.localStorageList = localStorageUsage();
	}

	// background GPS
	$scope.showAppSettings = function() {
		BackgroundGeolocationService.showAppSettings();
	}

	$scope.showLocationSettings = function() {
		BackgroundGeolocationService.showLocationSettings();
	}

	$scope.bgGPSstarted = BackgroundGeolocationService.getStarted();
	$scope.toggleBackgroundGPS = function(value) {
		if(value)
			BackgroundGeolocationService.start();
		else
			BackgroundGeolocationService.stop();
	}

	$scope.subRadius = function() {
		if(pdaParams.gps_stationaryRadius > 0)
			pdaParams.gps_stationaryRadius--;
	}

	$scope.addRadius = function() {
		if(pdaParams.gps_stationaryRadius < 1000)
			pdaParams.gps_stationaryRadius++;
	}

	$scope.subDistance = function() {
		if(pdaParams.gps_distanceFilter > 0)
			pdaParams.gps_distanceFilter--;
	}

	$scope.addDistance = function() {
		if(pdaParams.gps_distanceFilter < 1000)
			pdaParams.gps_distanceFilter++;
	}

	$scope.subInterval = function() {
		if(pdaParams.gps_interval > 1000)
			pdaParams.gps_interval-=1000;
	}

	$scope.addInterval = function() {
		if(pdaParams.gps_interval < 300000)
			pdaParams.gps_interval+=1000;
	}

	$scope.zeroInterval = function() {
		pdaParams.gps_interval=1000;		// can't be zero - 1 sec is min (so 1000ms)
	}

	$scope.defaultInterval = function() {
		pdaParams.gps_interval=60000;		// default hardcoded in a couple of places - be careful
	}

	$scope.update_isGpsWorking = function(torf) {
		gpsService.setGpsIsWorking(torf);
	}


}]);
