angular.module('pushService', [])

.factory('pushService',[ '$rootScope','$ionicPlatform','$cordovaPush','$http','pdaParams', 'cordovaReady','$ionicPopup','$cordovaMedia','clientConfig','Logger','$cordovaDevice',
function ( $rootScope, $ionicPlatform, $cordovaPush, $http , pdaParams, cordovaReady, $ionicPopup, $cordovaMedia, clientConfig, Logger, $cordovaDevice) {

	// "senderID" is "Project Number" from Google Developers Console (https://console.developers.google.com)
	// NOTE that there is also a server component involved - see API key in /app/strongloop/OSC-API/server/gcm_config.js
	// and the Strongloop/Google documentation for further details
	// 1069582465668 is Project ID  carbide-primer-104106 (Push test)
	var androidConfig = {
		"senderID": "1069582465668",
	};

	var iosConfig = {
		"badge": true,
		"sound": true,
		"alert": true,
	};

	var push_service = { };

	var already_registered = false;

	push_service.registered = false;
	
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

			push_service.mycurrent_drivernum = pdaParams.driverId;

			// ANDROID ----------------------------------------------------------
			if( platform == 'Android') {

				// NOTE - Android specific
				// TODO - IOS - need to get correct path
				// notification sound
				var src = "/android_asset/www/audio/notification.mp3";
				var notificationSnd = $cordovaMedia.newMedia(src);

				//All this does is register the device with GCM (Google Cloud Messaging)
				//Once registered with GCM we store the data against the driver id in our DB
				log.debug('Android: About to $cordovaPush.register: driver:' + push_service.mycurrent_drivernum);
				$cordovaPush.register(androidConfig).then(function(result) {

					// Success
					//console.log('cordovaPush.register: Success:', result);
					//alert('cordovaPush.register for Driver ' + push_service.mycurrent_drivernum + ' : Success:', result);

					var msg = '$cordovaPush.register for Driver ' + push_service.mycurrent_drivernum + ' : Success:'+ result;
					log.info(msg);

				}, function(err) {
					// Error
					//alert('cordovaPush.register: Error:', err);
					//console.log('cordovaPush.register: Error:', err);

					log.error(platform+':$cordovaPush.register: Error:'+err);
				});

				$rootScope.$on('$cordovaPush:notificationReceived', function(event, notification) {
					log.debug(platform+':$cordovaPush.notificationReceived:' + JSON.stringify(notification));
				  switch(notification.event) {
					case 'registered':
						log.debug(platform+':$cordovaPush.notificationReceived: registered:[' + notification.regid + ']');

					  if (notification.regid.length > 0 ) {
						//console.log('registration ID = ' + notification.regid);

						// register with the loopback-component-push installations model
						// TODO - do we do this here or should we trigger an event and do it in a service/controller?

						var installation_object = {
							"appId"			: "osc-push-demo",
							"userId"		: push_service.mycurrent_drivernum,
							"deviceToken"	: notification.regid,
							"deviceType"	: "android"
						};


						// examples from API explorer
						//{"where" : { "deviceToken":  "APA91bGKCkYKtC_Q0qKVEQIlXZRxZS0mOHPHg6dqUtF0shCresjPTnU-2E0T2Khq4pJJapJ8Z54Nr6fpLE96RWnEUbwKWZIEDzeQHxn0dDFU6mpXKDVurkykiZyPJn_Fs6wzSy0l2Ier"}}
						//{ "where": { "deviceToken": "APA91bEseHA5qJt2U5kd42PVnPd3ckpEytZok9xwTU23nbxmLw1Klq8LP7B1Mu0UPrBI-Hmuoxk9kFa-JjiSgqMb1z1KgmISXSzloZCsOUCCm78iNtFr1skaMYVtA_XIQMzHcEm7yKRO","userId": "999"}}
						var filter = { "where": { "deviceToken": notification.regid }};
						// TODO var filter = { "where": { "deviceToken": notification.regid, "userId": push_service.mycurrent_drivernum }};

						log.debug(platform+':$cordovaPush.notificationReceived: check for current registration, filter:'+JSON.stringify(filter));
						
						// LT - 30/11/2015 - TODO - http.get.success has been deprecated use .then instead
						// see https://docs.angularjs.org/api/ng/service/$http
						$http.get('http://'+ clientConfig.serverIP + ':' + clientConfig.serverPort + '/api/installations'+'?filter='+encodeURIComponent(JSON.stringify(filter))).success(function (data) {
							//console.log(data);			// this works

							// Try and ensure that there only ever one row for a driver or a token
							// TODO - remove any registrations for this token but NOT for this driver
							// TODO - remove any registrations for this driver but NOT for this token
							// Then register current token for current driver

							if( data.length == 0) {		// no current registration found

								log.info(platform+':$cordovaPush.notificationReceived: registered: no current registration found in installations');

								//This registers the Google Token with Strongloop and our Database
								$http.post('http://' + clientConfig.serverIP + ':' + clientConfig.serverPort + '/api/installations', installation_object);

								// Save data to local storage (it also gets put into $rootScope below)
								localStorage.setItem('osc-push-credentials', JSON.stringify(installation_object));

								//alert('registration ID = ' + notification.regid);
								var alertPopup = $ionicPopup.alert({
									title: 'Device registered',
								template: notification.regid
								});
							}
							else {
								log.info(platform+':$cordovaPush.notificationReceived: registered: current registration already found in installations');
								log.debug(platform+':$cordovaPush.notificationReceived: registered: data:'+JSON.stringify(data));


							}

							push_service.registered = true;		// we've either just registered or we were already registered

						});
						// TODO - do we need an 'error' function for the get? - NO - see above - .error now deprecated - needs updating

					  }
					  break;

					case 'message':
					  // this is the actual push notification. its format depends on the data model from the push server
					  //console.log('notification.message = ' + notification.message );

						// Message with payload will broadcast payload.type which can be listened for elsewhere in the app
						var payload = notification.payload.payload || {};
						if( payload.type ) {
							$rootScope.$broadcast(payload.type, payload);
						}
						else {
							// Original push notification used for new work and cancels - can be obsoleted if/when we get the above working
							// add platform to notification so we can check in the event handler
							notification.platform = platform;

							$rootScope.$broadcast('pushNotificationReceived', notification);	// broadcast to the world

							// TODO - maybe have a different popup and/or sound for each message type so we don't lose any messages
							notificationSnd.play();				// TODO - should the sound be here?  Or in the broadcast receiver?

		/*	DEBUG - remove popups to try and determine cause of screen hangs
							if( openPopup) {
								openPopup = false;

								notificationSnd.play();

								var message = notification.message;

								// Use ionic popup service for alert box
								var alertPopup = $ionicPopup.alert({
									title: 'Message received',
									template: message
								});
								alertPopup.then(function(res) {
									openPopup = true;			// OK to open popup again
									//console.log('Message acknowledged:',message);
								});
							}
		*/
						}

					  break;

					case 'error':
					  alert('GCM error = ' + notification.msg);
					  //console.log('GCM error = ' + notification.msg);
					  break;

					default:
					  alert('An unknown GCM event has occurred');
					  //console.log('An unknown GCM event has occurred');
					  break;
				  }
				});

			}
			// IOS ----------------------------------------------------------
			else if( platform == 'iOS') {
				log.debug('iOS: About to $cordovaPush.register: driver:' + push_service.mycurrent_drivernum);
				$cordovaPush.register(iosConfig).then(function(deviceToken) {

					// Success
					var installation_object = {
						"appId"			: "osc-push-demo",
						"userId"		: push_service.mycurrent_drivernum,
						"deviceToken"	: deviceToken,
						"deviceType"	: "ios"
					};

					var filter = { "where": { "deviceToken": deviceToken }};
					log.debug(platform+':$cordovaPush.register: check for current registration, filter:'+JSON.stringify(filter));

					$http.get('http://'+ clientConfig.serverIP + ':' + clientConfig.serverPort + '/api/installations'+'?filter='+encodeURIComponent(JSON.stringify(filter))).success(function (data) {

						// Try and ensure that there only ever one row for a driver or a token
						// Then register current token for current driver
						if( data.length == 0) {		// no current registration found

							log.info(platform+':$cordovaPush.register: registered: no current registration found in installations');

							//This registers the Token with Strongloop and our Database
							$http.post('http://' + clientConfig.serverIP + ':' + clientConfig.serverPort + '/api/installations', installation_object);

							// Save data to local storage (it also gets put into $rootScope below)
							localStorage.setItem('osc-push-credentials', JSON.stringify(installation_object));

							var alertPopup = $ionicPopup.alert({
								title: 'Device registered',
								template: deviceToken
								});
							}
							else {
								log.info(platform+':$cordovaPush.register: registered: current registration already found in installations');
								log.debug(platform+':$cordovaPush.register: registered: data:'+JSON.stringify(data));
							}

							push_service.registered = true;		// we've either just registered or we were already registered
					});

					var msg = '$cordovaPush.register for Driver ' + push_service.mycurrent_drivernum + ' : deviceToken:'+ deviceToken;
					log.info(msg);

				}, function(err) {
					// Error
					log.error(platform+':$cordovaPush.register: Error:'+err);
				});

				$rootScope.$on('$cordovaPush:notificationReceived', function(event, notification) {
					log.debug(platform+':$cordovaPush.notificationReceived:' + JSON.stringify(notification));
					var payload = notification.payload || {};
					if( payload.type ) {
						$rootScope.$broadcast(payload.type, payload);
					}
					if (notification.alert) {
						//navigator.notification.alert(notification.alert);
						var alertPopup = $ionicPopup.alert({
							title: 'Notification received',
							template: JSON.stringify(notification)
							});

							// add platform to notification so we can check in the event handler
							notification.platform = platform;

							$rootScope.$broadcast('pushNotificationReceived', notification);	// broadcast to the world
					}

					if (notification.sound) {
						var snd = new Media(event.sound);
						snd.play();
					}

					if (notification.badge) {
						$cordovaPush.setBadgeNumber(notification.badge).then(function(result) {
							// Success!
							log.debug(platform+':$cordovaPush.notificationReceived.setBadgeNumber:success:'+result);
						}, function(err) {
							// An error occurred. Show a message to the user
							log.debug(platform+':$cordovaPush.notificationReceived.setBadgeNumber:error:'+err);
						});
					}
				});
			}
			else {
				log,error(platform+':$cordovaPush.register: unhandled platform:'+platform);
			}


			// TODO - do we need this event handler?  Where did we copy this from?
			// Handles incoming device tokens
			$rootScope.$on('$cordovaPush:tokenReceived', function(event, data) {
				//console.log('$cordovaPush:tokenReceived: Got token ', data.token, data.platform);
				//alert("Successfully registered token " + data.token);
				log.debug(platform+':$cordovaPush:tokenReceived: Got token:' + data.token);
				$rootScope.token = data.token;
			});

		}
	  }

	push_service.unRegister = function() {
			var options = {};
			if (cordovaReady.isready && pdaParams.driverId > 0) {
				var platform = $cordovaDevice.getPlatform();

				log.info(platform+':unRegister: isready:' + cordovaReady.isready + ', driverId:' + pdaParams.driverId);

				// WARNING: dangerous to unregister (results in loss of tokenID)
				$cordovaPush.unregister(options).then(function(result) {
				  // Success!
					log.info(platform+':sunregister:success:'+result);
					push_service.registered = false;
					var alertPopup = $ionicPopup.alert({
						title: 'GCM',
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
