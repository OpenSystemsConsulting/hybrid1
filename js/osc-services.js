/*
 * A file for OSC services
 * Should they all be in here or individual files?
 */
angular.module('osc-services', [])

	//var showConflicts = false;
	//
	//$scope.setShowSyncConflicts = function(torf) {
		//showConflicts = torf;
	//}

	//$scope.getshowSyncConflicts = function()
	//{
		//return showConflicts;
	//}

.factory( 'pdaParams', ['appConfig', function(appConfig) {

/*
 * pdaParams
 *
 * Get driver ID from local storage
 * If no driver ID then this must be first time setup so prompt for it (IMEI as well?)
 *
 * Can then retrieve rest of driver details from tpm_pda_controller table
 */
	var pda_params = { };

	// TODO - siteId needs to be in a config file somewhere
	var localdriver = {
					driverId		: 0,
					accessAllowed	: false,
					loggedOn		: false,
					lastUpdate		: 0,
					debugMode		: false
				};

	function getParams() {
		
		localdriver = JSON.parse(localStorage.getItem('osc-driver-info')) || localdriver;

		return localdriver;
	};

	pda_params.getAppVersion = function() {
		//return appConfig.version.toFixed(2);
		return appConfig.version;
	};

	pda_params.getDriverId = function() {
		
		localdriver = getParams();

		pda_params.driverId = localdriver.driverId;

		return localdriver.driverId;
	};

	pda_params.getSiteId = function() {
/*
		localdriver = getParams();
		pda_params.siteId = localdriver.siteId;
		return localdriver.siteId;
*/
		// NOTE - should be in service but got circular dependancy when injecting siteService
		pda_params.siteId = localStorage.getItem('clientId');
		return pda_params.siteId;
	};

	pda_params.clearDriverInfo = function() {
		localStorage.removeItem('osc-driver-info');
	};

	pda_params.setDriverInfo = function(driverId) {
		localdriver.driverId = driverId;
		pda_params.driverId = driverId;
		localStorage.setItem('osc-driver-info', JSON.stringify(localdriver));
	}

	pda_params.setDebugMode = function(value) {
		localdriver.debugMode = value || false;
		localStorage.setItem('osc-driver-info', JSON.stringify(localdriver));
	}

	pda_params.logonDriver = function() {
        localdriver = getParams();
        localdriver.loggedOn = true;
        localdriver.lastUpdate = Date.now();
        localStorage.setItem('osc-driver-info', JSON.stringify(localdriver));
    }
    pda_params.logoffDriver = function() {
        localdriver = getParams();
        localdriver.loggedOn = false;
        localdriver.lastUpdate = Date.now();
        localStorage.setItem('osc-driver-info', JSON.stringify(localdriver));
    }
	pda_params.isDrvLoggedOff = function() {
        localdriver = getParams();
        if ( localdriver.loggedOn ) {
            return false;
        }
        else {
            return true;
        }
    }
    pda_params.isDrvLoggedOn = function() {
        localdriver = getParams();
        if ( localdriver.loggedOn ) {
            return true;
        }
        else {
            return false;
        }
    }

	pda_params.checkDriverStatus = function() {
		// If device is resumed first time on a date after last login then auto logoff the driver
		// which will ensure he has to login in again before processing any work
		// (so in effect an auto logout overnight)

		// TODO - need a date check etc.
		//this.logoffDriver();
	}

	pda_params.driverId = pda_params.getDriverId();
	pda_params.debugMode = localdriver.debugMode;
	
	pda_params.experimental = false;		// enable any experimental features

	pda_params.multileg = true;				// enable separate pods for multileg jobs

	// v2.37 - defaulted to false while we work out best way to sync when multiple jobs updated quickly within local storage
	// which in turn trigger multiple replication processes which caused some changes to be missed
	pda_params.jobdisplay = false;			// jobs tab does a quick display from local storage while sync takes place

	pda_params.multiSelect = true;			// Allow multi job select for Accept, Pickup etc.

	pda_params.GPSInterval = 60000;			// 1 minute default to grab GPS data (milliseconds)
	
	pda_params.alwaysGetGPS = false;

	pda_params.setParameter = function(params, cb) {
		// params is object of (maybe array) of key/value pair(s) for us to set
		// e.g. { "experimental":false}
		for( var key in params) {
			if( pda_params.hasOwnProperty(key)) {
				pda_params[key] = params[key];
			}
		}
		
		if( cb)
			cb();
	};

	pda_params.jobDetailOneDayOnly = true;

	return pda_params;
}])

.factory( 'appService',[ 'gpsService','eventService', function(gpsService,eventService) {

/*
 * appService
 *
 */
    var appService = { };

    function listenForExit()
    {
        document.addEventListener("exitButton", function(){
                  navigator.notification.confirm(
                            'Do you want to quit',
                            onConfirmQuit,
                            'QUIT TITLE',
                            'OK,Cancel'
                        );
                }, true);

    };

    appService.exitTplusMobile = function ()
    {
		alert("This will exit the application and stop sending GPS");
		gpsService.setSendGps(false);

		eventService.sendMsg('LOGOFF');

		// NOTE - it is not possible to programatically exit an iOS app see:
		// http://stackoverflow.com/questions/14422908/iphone-does-not-recognize-phonegaps-navigator-app
		// https://groups.google.com/forum/?fromgroups=#!topic/phonegap/XjTm0ua4uOY

		// NOTE - another option: ionic.Platform.exitApp()

		// LT - TODO - NOTE - this does NOT close/exit the app on an android device
		// LT - further note - it puts the app into background which apparently is the
		// appropriate thing to do.  However this means that our GPS etc. updates keep
		// going???.
        navigator.app.exitApp();
    };

    function onConfirmQuit(button){
           if(button == "1"){
            navigator.app.exitApp();
		}
    };


    return appService;
}])

.factory( 'syncService',[ 'Logger', 'pdaParams','sync', function(Logger,pdaParams,sync) {

/*
 * syncService
 *
 */
    var syncService = { };
	var mystr;
	var lcallingfunc;

	var logParams = { site: pdaParams.getSiteId(), driver: pdaParams.getDriverId(), fn: 'syncService'};
	var log = Logger.getInstance(logParams);

	syncService.hybridSync = function(callback,filter) {

		mystr = 'syncService: About to sync SyncInprogress = ' + syncService.isSyncing + " Called from (last value set =) [" + lcallingfunc + "]";
		log.debug(mystr);

		if( ! syncService.isSyncing)
		{
			syncService.isSyncing = true;

			mystr = 'syncService: isSyncInprogress is off so turn it on before Replication sync call ';
			log.debug(mystr);
			log.debug("SYNC: START");
			sync(callback,filter);
		}
	}	

	syncService.getSyncInProgress = function() {
		
		mystr = 'syncService: In getSyncInProgress ret value = ' + syncService.isSyncing;
		log.debug(mystr);

		return syncService.isSyncing;
	};

	syncService.setCallingFunc = function(callingfunc) {
		
		mystr = 'syncService: In setCallingFunc value = ' + callingfunc;
		log.debug(mystr);

		lcallingfunc = callingfunc;
	};

	syncService.setSyncInProgress = function(torf) {
		
		syncService.isSyncing = torf;
		mystr = 'syncService: In setSyncInprogress setting value = ' + syncService.isSyncing;
		log.debug(mystr);
	};

    return syncService;
}])

.factory( 'stacktraceService', function() {
	
	// "printStackTrace" is a global object.
	return({
		print: printStackTrace
	});
})
// http://www.bennadel.com/blog/2542-logging-client-side-errors-with-angularjs-and-stacktrace-js.htm
// The error log service is our wrapper around the core error
// handling ability of AngularJS. Notice that we pass off to
// the native "$log" method and then handle our additional
// server-side logging.
// TODO - LT - need to implement the debouncing logic - also need a version no. of our app so stacktrace makes sense
.factory( 'errorLogService', function( $log, $window, stacktraceService, pdaParams, appConfig ) {

		// I log the given error to the remote server.
		function log( exception, cause ) {

			// Pass off the error to the default error handler
			// on the AngualrJS logger. This will output the
			// error to the console (and let the application
			// keep running normally for the user).
			$log.error.apply( $log, arguments );

			// Now, we need to try and log the error the server.
			// --
			// NOTE: In production, I have some debouncing
			// logic here to prevent the same client from
			// logging the same error over and over again! All
			// that would do is add noise to the log.
			try {

				var errorMessage = exception.toString();
				var stackTrace = stacktraceService.print({ e: exception });

				// Log the JavaScript error to the server.
				// --
				// NOTE: In this demo, the POST URL doesn't
				// exists and will simply return a 404.
				var context = { site: pdaParams.getSiteId(), driver: pdaParams.getDriverId(), fn: 'errorLogService'};

				var OSC_log = {
					time:       new Date().toISOString(),
					logtype:    "stacktrace",
					context:    context
				}

				// TODO - LT - this relies on jquery - need to reorganise - can't use angular $http though
				$.ajax({
					type: "POST",
					url: "http://"+appConfig.logServerIP+":"+appConfig.logServerPort,
					contentType: "application/json",
					data: angular.toJson({
						pdalog: OSC_log,
						errorUrl: $window.location.href,
						errorMessage: errorMessage,
						stackTrace: stackTrace,
						cause: ( cause || "" )
					})
				});

			} catch ( loggingError ) {

				// For Developers - log the log-failure.
				$log.warn( "Error logging failed" );
				$log.log( loggingError );

			}

		}


		// Return the logging function.
		return( log );

})
.factory( 'eventService', function( $window, $http, siteService, pdaParams, Logger ) {

	// Send a message to the mobile_event REST API
	// Used for e.g. LOGON, LOGOFF, maybe sending a message etc.
	var logParams = { site: pdaParams.getSiteId(), driver: pdaParams.getDriverId(), fn: 'eventService'};
	var log = Logger.getInstance(logParams);

	var eventSvc = { };
	
	eventSvc.sendMsg = function( msgType, msgData) {

		var message = {};
		var data = msgData || '';

		if(typeof(data) === 'object') {
			message.data = data;		// put object in as is
		}
		else {
			message.data = {
				driverId: pdaParams.getDriverId(),
				messageText: data,
				deviceHost: $window.location.host			// NOTE - this works in a browser only
			};
		}

		message.event = msgType;

		var serverIP = siteService.getServerIP();
		var serverPort = siteService.getServerPort();

		// TODO - implement POST method - should be POST as we are creating
		$http.get('http://'+ serverIP + ':' + serverPort + '/api/mobile_event'+'?payload='+encodeURIComponent(JSON.stringify(message))).success(function (data) {
				log.info('mobile_event:'+JSON.stringify(message));
			});
	}

	return( eventSvc );

})
.factory( 'jobChangedService', function( ) {

	var jobreclocal = { };

	jobreclocal.lastjobedited = false ;
	//Set this in JobsDetailCtrl

	jobreclocal.setlastjobedited = function ( arg_tf )
	{
		jobreclocal.lastjobedited = arg_tf ;
	}	

	//Get this in JobsIndexCtrl
	jobreclocal.getlastjobedited = function ()
	{
		return jobreclocal.lastjobedited ;
	}	

	return( jobreclocal );
})
.factory('ConnectivityMonitor', function($rootScope, $cordovaNetwork, pdaParams, Logger){
 
	var logParams = { site: pdaParams.getSiteId(), driver: pdaParams.getDriverId(), fn: 'ConnectivityMonitor'};
	var log = Logger.getInstance(logParams);

  return {
	isOnline: function(){
	  if(ionic.Platform.isWebView()){
		return $cordovaNetwork.isOnline();	  
	  } else {
		return navigator.onLine;
	  }
	},
	ifOffline: function(){
	  if(ionic.Platform.isWebView()){
		return !$cordovaNetwork.isOnline();    
	  } else {
		return !navigator.onLine;
	  }
	},
	startWatching: function(){
		if(ionic.Platform.isWebView()){
 
		  $rootScope.$on('$cordovaNetwork:online', function(event, networkState){
			//console.log("went online:"+networkState);
			log.info("went online:"+networkState);
		  });
 
		  $rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
			//console.log("went offline:"+networkState);
			log.info("went offline:"+networkState);
		  });
 
		}
		else {
 
		  window.addEventListener("online", function(e) {
			console.log("went online");
		  }, false);	
 
		  window.addEventListener("offline", function(e) {
			console.log("went offline");
		  }, false);  
		}		
	}
  }
})
.factory('messageService', function($rootScope, pdaParams, Logger, FixedQueue, deleteChangeData, Job, deviceService){
 
	// Service to handle incoming PDA messages 

	var logParams = { site: pdaParams.getSiteId(), driver: pdaParams.getDriverId(), fn: 'messageService'};
	var log = Logger.getInstance(logParams);
	var msgQ = FixedQueue(50);		// Store last x no. driver messages
	var newMsgCount = 0;			// keep a count of new messages - will reset once driver has seen them

	function isJson(str) {
		try {
			JSON.parse(str);
		} catch (e) {
			return false;
		}
		return true;
	}

	var messageService = {


		dumpLocalStorage: function() {
			var logmsg = {};
			var dblist = [ 'osc-local-db', 'osc-driver-info', 'osc-push-credentials' ];
			var len = dblist.length;

			// dump ALL items, not just out predefined ones
			len = localStorage.length;

			for(var i=0; i < len; i++) {
				var key = localStorage.key(i);
				var value = localStorage[key];

				logmsg.type = 'dumpLocalStorage:'+key;
				if(isJson(value))
					logmsg.data = JSON.parse(value);
				else
					logmsg.data = value;

				log.info(logmsg);
			}
		},

		clearLocalStorage: function() {
			var logmsg = {};
			logmsg.type = 'clearLocalStorage';
			// clear local storage then log contents - should be empty
			localStorage.removeItem('osc-local-db');
			logmsg.data = JSON.parse(localStorage.getItem('osc-local-db'));
			log.info(logmsg);
		},

		clearChangeData: function() {
			var logmsg = {};
			logmsg.type = 'clearChangeData';
			// clear job-change and checkpoint data from local storage then log contents
			deleteChangeData( function( err, changeData) {
				if(err)
					log.error(err);
				if(changeData)
					log.debug(changeData);
				logmsg.data = JSON.parse(localStorage.getItem('osc-local-db'));
				log.info(logmsg);
			});
		},

		dumpDeviceInfo: function() {
			var logmsg = {};
			logmsg.type = 'dumpDeviceInfo';

			var deviceData = deviceService.getDevice();
			logmsg.data = JSON.stringify(deviceData);
			log.info(logmsg);
		},

		setPdaParam: function(params) {
			var logmsg = {};
			logmsg.type = 'setPdaParam';
			pdaParams.setParameter( params, function( err) {
				if(err)
					log.error(err);
				log.info(logmsg);
			});
		},

		deleteJobs: function(params) {
			var logmsg = {};
			logmsg.type = 'deleteJobs';

			var delfilter = params;
			log.info('filter:'+JSON.stringify(delfilter));	

			// must supply where filter
			if(delfilter.where) {

				Job.find(delfilter, function (err, jobs) {
					var len = jobs.length;
					log.info("deleting:"+len+" legs");

					for( var leg = 0; leg < len; leg++) {
						var job = jobs[leg];
						log.info("delete leg:"+leg+" job:" + job.mobjobSeq);
						job.delete();
					}
				});
			}
			else {
				log.debug('No where filter provided');
			}
		},

		startWatching: function(){

			// PDA commands 
			// From REST endpoint /TpmPdaControllers/sendCommandToPDA/{driver}
			$rootScope.$on('commandToPDA', function(event, payload){

				log.debug('commandToPDA:received:'+JSON.stringify(payload));
				switch(payload.command) {
					case 'dumpLocalStorage':
						messageService.dumpLocalStorage();
						break;

					case 'clearLocalStorage':
						messageService.clearLocalStorage();
						break;

					case 'clearChangeData':
						messageService.clearChangeData();
						break;

					case 'setPdaParam':
						messageService.setPdaParam(payload.params);
						break;

					case 'deleteJobs':
						messageService.deleteJobs(payload.params);
						break;

					default:
						var logmsg = {};
						logmsg.type = 'commandToPDA';
						log.error('unknown command:' +payload.command);
						break;
				}
				// LT - added after cordova/push upgrades - we didn't seem to get immediate updates afterwards
				$rootScope.$apply();
			})

			// Message to driver
			$rootScope.$on('messageToDriver', function(event, payload){
				// payload.message has the message text
				msgQ.push(payload.message);
				newMsgCount++;
				// LT - added after cordova/push upgrades - we didn't seem to get immediate updates afterwards
				$rootScope.$apply();
			})

			// more watchers if required
		},

		getMessages: function(){
			// get all messages
			return(msgQ);
		},

		getNewMesssageCount: function(){
			return(newMsgCount);
		},

		resetNewMessageCount: function(){
			newMsgCount = 0;
		}

	}

	return messageService;
})
.factory('siteService', function( clientConfig, dataSources){

	// dataSources are loopback generated datasource objects created during the loopback boot phase
	var siteService = {

		setSiteDetails: function(name){
			var siteDetails = dataSources[name];
			localStorage.setItem('apiURL', siteDetails.connector.url);
			localStorage.setItem('apiDSName', name);		// IMPORTANT - used by model js code for connector

			localStorage.setItem('clientId', siteDetails.settings.clientId);
			//localStorage.setItem('serverIP', siteDetails.settings.serverIP);
			//localStorage.setItem('serverPort', siteDetails.settings.serverPort);

			//clientConfig.clientId = siteDetails.settings.clientId;
			//clientConfig.serverIP = siteDetails.settings.serverIP;
			//clientConfig.serverPort = siteDetails.settings.serverPort;

		},

		setClientConfig: function(name){
			var siteDetails = dataSources[name];

			clientConfig.clientId = siteDetails.settings.clientId;
			clientConfig.serverIP = siteDetails.settings.serverIP;
			clientConfig.serverPort = siteDetails.settings.serverPort;

			localStorage.setItem('clientConfig', JSON.stringify(clientConfig));
		},

		getSiteId: function(){
			return localStorage.getItem('clientId');
		},

		getClientConfig: function(){
			return JSON.parse(localStorage.getItem('clientConfig'));
		},

		getServerIP: function() {
			return clientConfig.serverIP;
		},

		getServerPort: function() {
			return clientConfig.serverPort;
		}
	}

	return siteService;
})
.factory('deviceService', function(cordovaReady,$cordovaDevice){

	var deviceService = {
		getDevice: function() {
			var device = {"browser": true} ;			//TODO - get error in browser // default
			if(cordovaReady.isready) {
				device = $cordovaDevice.getDevice();
			}
			return device;
		}
	}

	return deviceService;
})
.factory('BackgroundGeolocationService',['Logger','pdaParams','gpsHistory','$cordovaDevice',function (Logger,pdaParams,gpsHistory,$cordovaDevice) {

	// background gps plugin from: https://github.com/mauron85/cordova-plugin-background-geolocation
	// GPS timestamps are in milliseconds since epoch - iOS also has a fractional part
	// e.g. iOS:		1463707063130.011
	// e.g. Android:	1463707069003
	// Site for millisecond calcs and conversions: http://currentmillis.com/
	var logParams = { site: pdaParams.getSiteId(), driver: pdaParams.getDriverId(), fn: 'BackgroundGeoLocationService'};
	var log = Logger.getInstance(logParams);
	var backgroundGeoService = { };
	var lastGPSsecs = 0;		// last timestamp in seconds
	var thisGPSsecs = 0;		// this timestamp in seconds
	var diffGPSsecs = 0;
	var threshold = 1;			// diff between gps must be greater than this to save
	
	var saveGpsToDb = function(drvid,location) {

		var lgps = new gpsHistory();

		lgps.gps_driver_id = drvid;

		var platform = $cordovaDevice.getPlatform();

		log.debug("BGGS platform:" + platform + ", location:"+ JSON.stringify(location));
		// LT - 06/07/2016 - with 2.52 release iOS devices do not appear to have a location.timestamp property
		// but do have the location.time property - check for both
		if ( platform == 'iOS' ) 
		{
			if(location.timestamp) {
				lgps.gps_timestamp = location.timestamp;
			}
			else if(location.time) {
				lgps.gps_timestamp = location.time;
			}
			else {
				lgps.gps_timestamp = Date.now();
				log.error("BGGS: no time provided so use now:"+lgps.gps_timestamp);
			}

			lgps.gps_heading = 0; // IOS Has a heading if u want to use it later
		}
		else
		{
			lgps.gps_timestamp = location.time;
			lgps.gps_heading = 0; // Android has a bearing if u want to use it later
		}

		//log.debug("BGGS platform is:" + platform + ", gpstimestamp:"+ lgps.gps_timestamp); // combine into 1 log below

		// check last GPS and only update if diff is greater than x seconds
		thisGPSsecs = lgps.gps_timestamp/1000;				// current GPS time in seconds
		diffGPSsecs = thisGPSsecs-lastGPSsecs;
		log.debug("BGGS: platform:" + platform + ", gpstimestamp:"+ lgps.gps_timestamp + ", lastGPSsecs:"+lastGPSsecs+", thisGPSsecs:"+thisGPSsecs+", diff:"+diffGPSsecs + ", threshold:"+threshold);

		lastGPSsecs = lgps.gps_timestamp/1000;				// store last GPS time in seconds for next time

		var ldate = new Date(lgps.gps_timestamp);

		var oset = ldate.getTimezoneOffset();
		//log.debug("BGGS new date: " + ldate + ", oset: " + oset );
									
		lgps.gps_timestamp += (oset * -1)  * 60  * 1000;
		//log.debug("BGGS gps_timestamp: now:" + lgps.gps_timestamp );

		lgps.gps_latitude = location.latitude.toFixed(6);
		lgps.gps_longitude = location.longitude.toFixed(6);
		lgps.gps_quality = location.accuracy;

		lgps.gps_speed = 0; //location.coords.speed;

		lgps.gps_time = 0 ; //new Date(location.timestamp).getTime();

		// TODO - need to NOT rely on log - need our own access to this function
		var loggedOn = log.pdaParams.isDrvLoggedOn();

		log.debug("BGGS driver:" + lgps.gps_driver_id + ", loggedOn:" + loggedOn + ", lgps:"+ JSON.stringify(lgps));

		// TODO - do we need any more criteria to create history record?  if connected?
		if( lgps.gps_driver_id > 0 && diffGPSsecs > threshold && loggedOn)
		{
			log.info("About to save GPS for driver:"+ lgps.gps_driver_id + ", lgps:"+ JSON.stringify(lgps));
			lgps.$create(lgps, function success( obj) {
				if( obj) {
					log.debug("lgps.$create success: obj:"+JSON.stringify(obj));
					//console.log(obj);
				}
			}, function error(err) {
				if( err) {
					log.error("lgps.$create failed: err:"+JSON.stringify(err));
					//console.log(err);
				}
			});
		}
	}
	/*=====================================================*/
	/*             CALLBACK FROM PLUGIN                    */
	/*=====================================================*/
	var callbackFn = function(location) {

		//$http({
			//request options to send data to server
		//});

		log.debug('BGGS callbackFn: calling saveGpsToDb: location:' + JSON.stringify(location));

		//log.debug('BGGS callbackFn: calling saveGpsToDb:' + location.latitude + ',' + location.longitude);
		saveGpsToDb(pdaParams.getDriverId(),location);
		backgroundGeoLocation.finish();
	};

	var failureFn = function(error) {
		log.debug('BGGS failureFn: error:' + JSON.stringify(error) ); 
	};


	/*=====================================================*/
	/*             START METHOD                            */
	/*=====================================================*/
		// stationaryRadius: 20,
		//distanceFilter: 30,
	//Enable background geolocation
	backgroundGeoService.start = function () {

		var platform = $cordovaDevice.getPlatform();
		var bgOptions = {
			desiredAccuracy: 10,
			stationaryRadius: 20,
			distanceFilter: 30,
			locationTimeout: 60,			// Android - The minimum time interval between location updates in seconds
			activityType: 'AutomotiveNavigation',			// iOS hint
			debug: false,					// <-- enable this hear sounds for background-geolocation life-cycle
			stopOnTerminate: true			// <-- enable this to clear background location settings when the app terminates
		};


		log.debug('BGGS START: configure with:'+JSON.stringify(bgOptions)); 
		backgroundGeoLocation.configure(callbackFn, failureFn, bgOptions);
		backgroundGeoLocation.start();
	}

	/*=====================================================*/
	/*             STOP METHOD                            */
	/*=====================================================*/

	backgroundGeoService.stop = function () {
		log.debug('BGGS STOP Method called:'); 
		backgroundGeoLocation.stop();
	}

	return backgroundGeoService;
}])
.factory('cipherlabScannerService',['Logger','pdaParams',function (Logger,pdaParams) {

	// background gps plugin from: https://github.com/mauron85/cordova-plugin-background-geolocation
	var logParams = { site: pdaParams.getSiteId(), driver: pdaParams.getDriverId(), fn: 'cipherlabScannerService'};
	var log = Logger.getInstance(logParams);
	var cipherlabScannerService = { };


	function append(message) {
        var node = document.createElement("p");
        node.appendChild(document.createTextNode(message));
        document.body.appendChild(node);
    }

	cipherlabScannerService.initScanner = function() {

		log.debug('initScanner: called:');
		document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener('resume', onResume.bind(this), false);

        document.getElementById("scan_button").addEventListener('click', function () {
            cordova.plugins.CipherlabRS30CordovaPlugin.requestScan(function () {
                // MDR 30/11/2015 - This is just a placeholder callback. Results will be handled by setReceiveScanCallback() parameter below
            });
        });
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        cordova.plugins.CipherlabRS30CordovaPlugin.initialise(function () {

            append("init done");
            
            cordova.plugins.CipherlabRS30CordovaPlugin.setReceiveScanCallback(function (data) {
                append("scan received: " + data);
            });

        });

        window.onbeforeunload = function () {
            cordova.plugins.CipherlabRS30CordovaPlugin.destroy(function () { });
        }

        append("setup done");
	};

	function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
	}

	return cipherlabScannerService;
}])
.factory('sodService', function($rootScope,pdaParams,Logger,eventService,messageService){

	//Start of Day Service
	var logParams = { site: pdaParams.getSiteId(), driver: pdaParams.getDriverId(), fn: 'sodService'};
	var log = Logger.getInstance(logParams);
	var mycurday;
	var today; 
	var now;
	var type;

	//When App starts Get from localstorage


	//Logic is everytime the app resumes we check the resume datetime
    // and if its a new day the update the time in local storage
    // and do a logoff and clear local storage
	today = new Date();

	mycurday = today.getDate();

	log.debug('Instantiating mycurday = :' + mycurday); 


	var sodService = {
			
	  checkDoSodAction: function(type){
	
			//Get What is stored from last initial resum on a day in past
			var prevResumeDateStr = localStorage.getItem('FIRST_RESUME_DATE');

			if( type = 'FIRST_RESUME')
			{
				today = new Date();
    			mycurday = today.getDate();

				if (prevResumeDateStr)
				{
					var prevResumeDate = new Date(prevResumeDateStr);

					var prevResumeDay = prevResumeDate.getDate();
					log.debug('On Resume prevResumeDate from localstorage = :' + prevResumeDateStr + ' Str convertTodate = ' + prevResumeDate + ' prevResumeDay = ' + prevResumeDay + ' mycurday = ' + mycurday); 

					//Resume on different day
					//if( prevResumeDay == mycurday )
					if( prevResumeDay != mycurday )
					{
						//Do some shit and store
						now = new Date();
						localStorage.setItem('FIRST_RESUME_DATE',now );
						pdaParams.logoffDriver();
						eventService.sendMsg('LOGOFF');
						messageService.clearChangeData();
						log.debug(" prevResumeDay != mycurday mycurday = " + mycurday);
					}
					else {
						log.debug('Not new date');
					}
				}
				else //Never Stored so Do the shit
				{
					now = new Date();
					localStorage.setItem('FIRST_RESUME_DATE',now );
					log.debug('On Resume prevResumeDate is NULL date = ' + now  + ' Will clearChange Data' );
					pdaParams.logoffDriver();
					eventService.sendMsg('LOGOFF');
					messageService.clearChangeData();
				}
			}
		}
	}

   $rootScope.$on('RESUME', function(event) {

		log.debug('RESUME detected');
		sodService.checkDoSodAction('FIRST_RESUME');
	});                      


	//This will happen the first time they resume the app on a day

	//For testing, however JobsIndexCtrl wont see this as this service is initialised before JObsIndexCtrl is
	//$rootScope.$broadcast('RESUME');

	return sodService;
})
;
