angular.module('cordovaReady', [])

/**
 * A simple example service that returns some data.
 */
.factory('cordovaReady',['$cordovaInsomnia', 'Logger', 'pdaParams', function($cordovaInsomnia,Logger,pdaParams) {

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

		/*================================================ */
		/* Background GEO Location                         */
		/*================================================ */

		/**
		* This callback will be executed every time a geolocation is recorded in the background.
		*/
/*************
		var callbackFn = function(location) {
			console.log('[js] BackgroundGeoLocation callback:  ' + location.latitude + ',' + location.longitude);

			log.debug('onDeviceReady:BackgroundGeoLocation callbackFn:' + location.latitude + ',' + location.longitude);
			// Do your HTTP request here to POST location to your server.
			// jQuery.post(url, JSON.stringify(location));
*************/

			/*
			IMPORTANT:  You must execute the finish method here to inform the native plugin that you're finished,
			and the background-task may be completed.  You must do this regardless if your HTTP request is successful or not.
			IF YOU DON'T, ios will CRASH YOUR APP for spending too much time in the background.
			*/
/*************
			backgroundGeoLocation.finish();
		};

		var failureFn = function(error) {
			console.log('BackgroundGeoLocation error');
			log.debug('onDeviceReady:BackgroundGeoLocation failuerFn:' + error);
		};

		// BackgroundGeoLocation is highly configurable. See platform specific configuration options
		backgroundGeoLocation.configure(callbackFn, failureFn, {
			desiredAccuracy: 10,
			stationaryRadius: 20,
			distanceFilter: 30,
			debug: true, // <-- enable this hear sounds for background-geolocation life-cycle.
			stopOnTerminate: false, // <-- enable this to clear background location settings when the app terminates
		});

		// Turn ON the background-geolocation system.  The user will be tracked whenever they suspend the app.
		console.log('[js] BackgroundGeoLocation about to call BG.start');
		log.debug('[js] BackgroundGeoLocation about to call BG.start');
		backgroundGeoLocation.start();

		// If you wish to turn OFF background-tracking, call the #stop method.
		// backgroundGeoLocation.stop();
*************/

	}

	cordova_ready.isDeviceReady = function isDeviceReady()
	{
		return isready;
	}

	function onPause() {
		log.debug('onPause');
	}

	function onResume() {
		log.debug('onresume');
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
