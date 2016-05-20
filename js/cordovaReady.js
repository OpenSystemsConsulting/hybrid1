angular.module('cordovaReady', [])

/**
 * A simple example service that returns some data.
 */
.factory('cordovaReady',['$rootScope','$cordovaInsomnia', 'Logger', 'pdaParams','BackgroundGeolocationService','cipherlabScannerService','$cordovaDevice',function($rootScope,$cordovaInsomnia,Logger,pdaParams,BackgroundGeolocationService,cipherlabScannerService,$cordovaDevice) {

	var isready;

	var logOb;

	var logParams = { site: pdaParams.getSiteId(), driver: pdaParams.getDriverId(), fn: 'cordovaReady'};
	var log = Logger.getInstance(logParams);

	var cordova_ready = { };

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
		log.debug("Device Model = " + model);
		if( model == 'CipherLab RS30')
		{
			log.debug("Device is a CipherLab RS30 " + model);
			cipherlabScannerService.initScanner();
		}
		else
		{
			log.debug("Device is NOT !!!! a CipherLab RS30 HEAD scanning NOT Available " + model);
		}

	}

	cordova_ready.isDeviceReady = function isDeviceReady()
	{
		return isready;
	}

	function onPause() {
		log.debug('onPause About to call BGGS.start()');
		BackgroundGeolocationService.start();	

		$rootScope.$broadcast('PAUSE');
	}

	function onResume() {
		log.debug('onresume: about to broadcast: RESUME event');
		$rootScope.$broadcast('RESUME');
	}

	/*
	 * For future use - maybe write to log file on device that can be send to OSX
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
