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

.factory( 'pdaParams', ['appConfig','clientConfig', function(appConfig, clientConfig) {

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
					siteId			: clientConfig.clientID,
					driverId		: 0,
					accessAllowed	: false,
					debugMode		: false
				};

	// TODO - site params into a config file - maybe a different service?
	// NOTE - LT - future use - as at 08/20/2015 these are NOT used yet
/*
	var siteParams = [
					{
						user		: 'opensys',
						siteId		: 'OSCVTEST',
						urlBase		: 'scope.opensyscon.com.au/scope/',
						urlPort		: 3000,
						logBase		: '58.108.229.60',
						logPort		: 5678
					},
					{
						user		: 'user',
						siteId		: 'SWIFT',
						urlBase		: 'swiftt1.lnk.telstra.net',
						urlPort		: 3000,
						logBase		: '58.108.229.60',
						logPort		: 5678
					}
				];
*/

	function getParams() {
		
		localdriver = JSON.parse(localStorage.getItem('osc-driver-info')) || localdriver;

		return localdriver;
	};

	pda_params.getAppVersion = function() {
		return appConfig.version.toFixed(2);
	};

	pda_params.getDriverId = function() {
		
		localdriver = getParams();

		pda_params.driverId = localdriver.driverId;

		return localdriver.driverId;
	};

	pda_params.getSiteId = function() {
		localdriver = getParams();
		pda_params.siteId = localdriver.siteId;
		return localdriver.siteId;
	};

/*
	pda_params.setSiteData = function( username) {
		// TODO - set site specific date e.g. REST endpoints
		siteParams[0].user = username;
	};
*/

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

	pda_params.driverId = pda_params.getDriverId();
	pda_params.debugMode = localdriver.debugMode;
	
	pda_params.experimental = false;		// enable any experimental features

	pda_params.multileg = true;				// enable separate pods for multileg jobs

	pda_params.jobdisplay = true;			// jobs tab does a quick display from local storage while sync takes place

	pda_params.GPSInterval = 60000;			// 1 minute default to grab GPS data (milliseconds)
	
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
.factory( 'eventService', function( $window, $http, clientConfig, pdaParams, Logger ) {

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

		$http.get('http://'+ clientConfig.serverIP + ':' + clientConfig.serverPort + '/api/mobile_event'+'?payload='+encodeURIComponent(JSON.stringify(message))).success(function (data) {
				//console.log("sendMsg:"+JSON.stringify(data));
				log.info('mobile_event:'+JSON.stringify(message));
			});

/*
		// TODO - implement POST method
		$http.post('http://'+ clientConfig.serverIP + ':' + clientConfig.serverPort + '/api/mobile_event',
				encodeURIComponent(JSON.stringify(message))) {
				console.log("sendMsg:"+JSON.stringify(data));
			});
*/
	}

	return( eventSvc );

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

	var messageService = {


		dumpLocalStorage: function() {
			var logmsg = {};
			var dblist = [ 'osc-local-db', 'osc-driver-info', 'osc-push-credentials' ];
			var len = dblist.length;

			for(var i=0; i < len; i++) {
				logmsg.type = 'dumpLocalStorage:'+dblist[i];
				//logmsg.data = JSON.parse(localStorage.getItem('osc-local-db'));
				logmsg.data = JSON.parse(localStorage.getItem(dblist[i]));
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
;
