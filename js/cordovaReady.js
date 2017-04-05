angular.module('cordovaReady', [])

/**
 * A simple example service that returns some data.
 */
.factory('cordovaReady',['$rootScope','$cordovaInsomnia', 'Logger', 'pdaParams','BackgroundGeolocationService','$cordovaDevice',function($rootScope,$cordovaInsomnia,Logger,pdaParams,BackgroundGeolocationService,$cordovaDevice) {

	var isready;

	var logOb;

	var logParams = { site: pdaParams.getSiteId(), driver: pdaParams.getDriverId(), fn: 'cordovaReady'};
	var log = Logger.getInstance(logParams);

	var cordova_ready = { };

	var location_allowed = false;

	isready = false;

	cordova_ready.isready = false;

    document.addEventListener("deviceready", onDeviceReady, false);

	function onDeviceReady() {
		// Now safe to use device APIs

		log.debug('onDeviceReady');

/*		// LT - I don't think we should clear cache/localstorage here on startup as e.g.
		// if a driver completes jobs when offline and starts up next day we need those
		// to sync rather than get a new set of data from the server

		// clear webview cache
		var success = function(status) {
			alert('Message: ' + status);
		}

		var error = function(status) {
			alert('Error: ' + status);
		}
		localStorage.removeItem('osc-local-db');
		window.cache.clear( success, error );
*/

		cordova_ready.isready = true;
		isready = true;

		//alert(' CordovaIsready = ' + cordova_ready.isready);

		// LT - TODO - set up log writing - gave an error on android device
/*
		window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function(dir) {
			console.log("got main dir",dir);
			dir.getFile("log.txt", {create:true}, function(file) {
				console.log("got the file", file);
				logOb = file;
				writeLog("App started");			
			});
		});
*/

		// https://github.com/driftyco/ng-cordova/blob/master/src/plugins/insomnia.js
		// Keep screen on for our app
		$cordovaInsomnia.keepAwake();


		document.addEventListener("pause", onPause, false);
		document.addEventListener("resume", onResume, false);

		var model =  $cordovaDevice.getModel();
		var platform =  $cordovaDevice.getPlatform();
		var version = $cordovaDevice.getVersion();
		log.debug("Device Model:" + model + ", platform:" + platform + ", OS ver:" + version);

		if( model == 'CipherLab RS30')
		{
			log.debug("Device is a CipherLab RS30 " + model);
		}
		else
		{
			log.debug("Device is NOT !!!! a CipherLab RS30 HEAD scanning NOT Available " + model);
		}

		/* ----------------------------------------------------------------------------------- */
		// new Android permissions methodology - done at runtime not on install
		// check/set we have the permissions for our app
		// https://github.com/dpa99c/cordova-diagnostic-plugin
		// https://github.com/dpa99c/cordova-diagnostic-plugin-example
		if( platform == "Android" && parseInt(version) >= 6) {
			var oscPermissions = [
				cordova.plugins.diagnostic.permission.ACCESS_FINE_LOCATION,
				cordova.plugins.diagnostic.permission.ACCESS_COARSE_LOCATION,
				cordova.plugins.diagnostic.permission.CAMERA
			];

/*
 * This can crash the app on startup but is the recommended way
 * https://github.com/dpa99c/cordova-diagnostic-plugin/issues/154
 * This is because Android puts app into background to get perms
 */
			cordova.plugins.diagnostic.requestRuntimePermissions(onRequestPermissions, onRequestPermissionsError, oscPermissions);

			function onRequestPermissions(statuses){
				for(var permission in statuses){
					status = statuses[permission];
					log.debug("onRequestPermissions: permission:"+permission+", status:"+status);

					switch(status) {
						case "GRANTED":
							// All good
							if(permission == cordova.plugins.diagnostic.permission.ACCESS_FINE_LOCATION
									|| permission == cordova.plugins.diagnostic.permission.ACCESS_COARSE_LOCATION) {
								location_allowed = true;
							}
							break;
						case "DENIED_ALWAYS":
							// User denied access to this permission and checked "Never Ask Again" box.
							// Can't do anything here - TODO - maybe alert box for user to change manually?
							break;
						case "DENIED":
							// Has been turned off in settings without checking "Never Ask Again"
							// so request again
							break;
						case "NOT_REQUESTED":
							// Never been requested so ask for permission
							break;
					}
				}
			};

			function onRequestPermissionsError(error){
				log.error("onRequestPermissionsError:"+error);
			};
		}
		else {
			// We are on iOS or an older version of Android
			location_allowed = true;
		}
		/* ----------------------------------------------------------------------------------- */
	}

	cordova_ready.isDeviceReady = function isDeviceReady()
	{
		return isready;
	}

	function onPause() {
		log.debug('onPause About to call BGGS.start(), location_allowed:'+location_allowed);

		if(location_allowed)
			BackgroundGeolocationService.start();	

		$rootScope.$broadcast('PAUSE');
	}

	function onResume() {
		log.debug('onresume: about to broadcast: RESUME event');
		$rootScope.$broadcast('RESUME');
	}

	/*
	 * For future use - maybe write to log file on device that can be send to OSC
	 * or maybe viewed on a tab on the device

	function writeLog(str) {
		if(!logOb) return;
		var log = str + " [" + (new Date()) + "]\n";
		console.log("going to log "+log);
		logOb.createWriter(function(fileWriter) {

			fileWriter.seek(fileWriter.length);

			var blob = new Blob([log], {type:'text/plain'});
			fileWriter.write(blob);
			console.log("ok, in theory i worked");
		}, fail);
	}
	*/

	return cordova_ready;

}]);
