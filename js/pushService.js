angular.module('pushService', [])

.factory('pushService',[ '$rootScope','$ionicPlatform','$cordovaPush','$http','pdaParams', 'cordovaReady','$ionicPopup','$cordovaMedia','siteService','Logger','$cordovaDevice','$cordovaPushV5',
function ( $rootScope, $ionicPlatform, $cordovaPush, $http , pdaParams, cordovaReady, $ionicPopup, $cordovaMedia, siteService, Logger, $cordovaDevice, $cordovaPushV5) {

	// "senderID" is "Project Number" from Google Developers Console (https://console.developers.google.com)
	// NOTE that there is also a server component involved - see API key in /app/strongloop/OSC-API/server/gcm_config.js
	// and the Strongloop/Google documentation for further details
	// 1069582465668 is Project ID  carbide-primer-104106 (Push test)

	// options for push plugin -------------------------------------
	var androidConfig = {
		senderID: "1069582465668",
	};

	var iosConfig = {
		badge: true,
		sound: true,
		alert: true,
	};

	var winConfig = {};

	var pushOptions = {
		android: androidConfig,
		ios: iosConfig,
		windows: winConfig
	};
	//---------------------------------------------------------------

	var push_service = { };

	var already_registered = false;

	push_service.registered = false;
	
	var notificationSnd;
	var lastSoundTime = Math.round(new Date().getTime()/1000);		// init when service instantiates
	var newSoundTime;

	var logParams = { site: pdaParams.getSiteId(), driver: pdaParams.getDriverId(), fn: 'pushService'};
	var log = Logger.getInstance(logParams);

	push_service.registerForPush = function () {

		var openPopup = true;

		log.debug('registerForPush: isready:' + cordovaReady.isready + ', driverId:' + pdaParams.driverId + ', registered:'+push_service.registered);
		//If Device ready , driver > 0 and we are not already registered then do it
		if (cordovaReady.isready && pdaParams.driverId > 0 && push_service.registered == false )
		{
			// Determine platform e.g. 'Android', 'iOS'

			var platform = $cordovaDevice.getPlatform();
			var deviceType = platform.toLowerCase();			// lowercase for loopback installations collection

			push_service.mycurrent_drivernum = pdaParams.driverId;

			// initialise the push plugin - phonegap-plugin-push
			$cordovaPushV5.initialize(pushOptions).then(function(result) {
				log.info(platform+':$cordovaPushV5.initialize: Success:'+result);
			}, function(err) {
				log.error(platform+':$cordovaPushV5.initialize: Error:'+err);
			});

			// register with message service
			log.debug(platform+': About to $cordovaPush.register: driver:' + push_service.mycurrent_drivernum);
			$cordovaPushV5.register().then(function(token) {

				// Success - register for notifications
				$cordovaPushV5.onError();				// send $cordovaPushV5:errorOccurred event on error
				$cordovaPushV5.onNotification();		// send $cordovaPushV5:notificationReceived on notification

				var msg = '$cordovaPushV5.register for Driver ' + push_service.mycurrent_drivernum + ' : token:'+ token;
				log.info(msg);

				var installation_object = {
					"appId"			: "osc-push-demo",
					"userId"		: push_service.mycurrent_drivernum,
					"deviceToken"	: token,
					"deviceType"	: deviceType,
					"pdaVersion"	: pdaParams.getAppVersion()
				};
				var filter = { "where": { "deviceToken": token }};
				log.debug(platform+':$cordovaPushV5.register: check for current registration, filter:'+JSON.stringify(filter));

				var serverIP = siteService.getServerIP();
				var serverPort = siteService.getServerPort();

				// LT - 30/11/2015 - TODO - http.get.success has been deprecated use .then instead
				// see https://docs.angularjs.org/api/ng/service/$http
				$http.get('http://'+ serverIP + ':' + serverPort + '/api/installations'+'?filter='+encodeURIComponent(JSON.stringify(filter))).success(function (data) {
					//console.log(data);			// this works

					// Try and ensure that there only ever one row for a driver or a token
					// TODO - remove any registrations for this token but NOT for this driver
					// TODO - remove any registrations for this driver but NOT for this token
					// Then register current token for current driver

					if( data.length == 0) {		// no current registration found

						log.info(platform+':$cordovaPush.register: no current registration found in installations');

						//This registers the Google Token with Strongloop and our Database
						$http.post('http://' + serverIP + ':' + serverPort + '/api/installations', installation_object);

						// Save data to local storage (it also gets put into $rootScope below)
						localStorage.setItem('osc-push-credentials', JSON.stringify(installation_object));

						var alertPopup = $ionicPopup.alert({
							title: 'Device registered',
							template: token
						});
					}
					else {
						log.info(platform+':$cordovaPush.register: current registration already found in installations');
						log.debug(platform+':$cordovaPush.register: data:'+JSON.stringify(data));
					}

					push_service.registered = true;		// we've either just registered or we were already registered

				});
				// TODO - do we need an 'error' function for the get? - NO - see above - .error now deprecated - needs updating
			}, function(err) {
				// Error
				log.error(platform+':$cordovaPush.register: Error:'+err);
			});

			// Event handler for notifications
			$rootScope.$on('$cordovaPushV5:notificationReceived', function(event, notification) {
				log.debug(platform+':$cordovaPushV5:notificationReceived:' + JSON.stringify(notification));
				// notification object will at least have "message" string and "additionalData" object

				// If there is a payload type we use that as the broadcast event with the supplied payload
				var payload = notification.additionalData.payload || {};
				if( payload.type ) {
					// Add platform to payload
					payload.platform = platform;			// event handler may need to know this

					// If a sound has been provided add to payload (normally iOS)
					if( notification.sound)
						payload.sound = notification.sound;

					// If server requests we play the sound do it here
					if( payload.playsound) {
						var sound;

						switch(payload.platform) {
							case 'Android':
								sound = payload.sound || "/android_asset/www/audio/notification.mp3";
								break;
							case 'iOS':
								if( payload.hasOwnProperty('sound')) {
									sound = payload.sound;
								}
								else {
									// NOTE - this does not appear to work - ensure we send correct sound property for iOS
									sound = "file://www/audio/notification.aiff";
								}
								break;
							default:
								sound = 'default';
								break;
						}

						log.debug(platform+':$cordovaPushV5:notificationReceived:sound now:['+sound+']');

						if( sound != "") {

							// Had issues when processing lots of notifications with soumds in quick succession
							// So only do this if no sound received within last 10 seconds
							newSoundTime = Math.round(new Date().getTime()/1000);

							if((newSoundTime - lastSoundTime) > 10) {			// TODO - should be a param
								lastSoundTime = Math.round(new Date().getTime()/1000);

								notificationSnd = $cordovaMedia.newMedia(sound);
								// Maybe turn up the volume?	(0.0 - 1.0)
								//notificationSnd.setVolume(1.0);

								notificationSnd.play().then(function() {
									notificationSnd.release();
								}, function(err) {
									log.error(platform+':$cordovaPushV5:notificationReceived:play error:['+sound+']['+JSON.stringify(err)+']');
									notificationSnd.release();
								});
							}
						}
					}

					log.debug(platform+':$cordovaPushV5:about to broadcast:' + payload.type + ':payload:'+JSON.stringify(payload));
					$rootScope.$broadcast(payload.type, payload);
				}
				else {
					// no payload type provided simply broadcast a received event with the full notification
					// add platform to notification so we can check in the event handler
					notification.platform = platform;

					log.debug(platform+':$cordovaPushV5:about to broadcast:' + 'pushNotificationReceived');
					$rootScope.$broadcast('pushNotificationReceived', notification);	// broadcast to the world
				}
				
			});

			// Event handler for errors
			$rootScope.$on('$cordovaPushV5:errorOccurred', function(event, error) {
				log.error(platform+':$cordovaPushV5:errorOccurred:' + JSON.stringify(error));
				// TODO - need an alert?
			});
		}
	  }

	push_service.unRegister = function() {
			var options = {};
			if (cordovaReady.isready && pdaParams.driverId > 0) {
				var platform = $cordovaDevice.getPlatform();

				log.info(platform+':unRegister: isready:' + cordovaReady.isready + ', driverId:' + pdaParams.driverId);

				// WARNING: dangerous to unregister (results in loss of tokenID)
				$cordovaPushV5.unregister(function() {
				  // Success!
					log.info(platform+':sunregister:success');
					push_service.registered = false;
					var alertPopup = $ionicPopup.alert({
						title: 'Messaging',
						template: 'Device successfully de-registered'
					});
				}, function(err) {
				  // Error
					log.error(platform+':unregister:error:'+err);
				})
			}
	}

	push_service.getIsRegistered = function() {
		return push_service.registered;
	}

	return push_service;
}]);
