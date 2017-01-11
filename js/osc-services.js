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

/*	// Injecting $q in this serverice causes a circular dependancy
	pda_params.getDriverIdPromise = function() {
		var deferred = $q.defer();
		deferred.resolve(getDriverId());
		return deferred.promise;
	};
*/

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

	pda_params.imagePollTime = 60000 * 5;			// 5 minute default

	pda_params.imageUpload = true;

	pda_params.syncDL = false;						// sync DL jobs as well

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
				appVersion: pdaParams.getAppVersion(),
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
.factory('ConnectivityMonitor', function($rootScope, $cordovaNetwork, pdaParams, Logger, network){
 
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
 
			// NOTE - this doesn't always seem reliable - can get an offline event while
			// still being online - e.g. wifi->4g can trigger offline with no online
		  $rootScope.$on('$cordovaNetwork:online', function(event, networkState){
			//console.log("went online:"+networkState);
			//network.isConnected = true;
			log.info("went online:"+networkState);
		  });
 
		  $rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
			//console.log("went offline:"+networkState);
			log.info("went offline:"+networkState);
			//network.isConnected = false;
		  });
 
		}
		else {
 
		  window.addEventListener("online", function(e) {
			//network.isConnected = true;
			console.log("went online");
		  }, false);	
 
		  window.addEventListener("offline", function(e) {
			console.log("went offline");
			//network.isConnected = false;
		  }, false);  
		}		
	}
  }
})
.factory('messageService', function($rootScope, pdaParams, Logger, FixedQueue, deleteChangeData, Job, deviceService, jobService){
 
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

		deleteOldJobs: function(params) {
			// REST API params object e.g.  { "daysback": 14 }
			var daysback = params.daysback || 7;		// default to 7 days
			jobService.deleteOldJobs(daysback);
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

					case 'deleteOldJobs':
						messageService.deleteOldJobs(payload.params);
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
.factory('jseaService', function(pdaParams, Logger,$rootScope,siteConfig ){

	var logParams = { site: pdaParams.getSiteId(), driver: pdaParams.getDriverId(), fn: 'jseaService'};
	var log = Logger.getInstance(logParams);

	 //STARTOFDAY is for Start of Day agreements, PERJOB is for Job agreements
	var jseaServiceTypes = new Array();
	jseaServiceTypes["SOD"] = "STARTOFDAY";
	jseaServiceTypes["PJB"] = "PERJOB";
	var myConfiguredForJsea = false;
	
	var myDetailJobnum = 0;
	var myDetailJobdate ;
	var myDetailJobJseaCaptured =false;
	var myJobStatusType = 'N/A';
	var myFormType = 'JSEA';
	var myFormLeg = 0;



	var jseaServiceType = jseaServiceTypes["SOD"]; //Default

	myDetailJobdate = new Date();				//Default to current day
	myDetailJobdate.setHours(0,0,0,0);			//remove time portion

	var jseaService = {

		setJseaIsCaptured: function(YN){   
			if(jseaServiceType == jseaServiceTypes["SOD"] )
			{
				localStorage.setItem('JSEA_SOD_CAPTURED',YN);
			}
			if(jseaServiceType == jseaServiceTypes["PJB"] )
			{
				myDetailJobJseaCaptured = (YN == "Y");
			}
		},


		setJseaType: function(larg) {
			var match = false;
			log.debug('Setting JseaType passed ' + larg);

			for (var key in jseaServiceTypes) {
    			var lvalue = jseaServiceTypes[key];
				log.debug(' lvalue : ' + lvalue);
				if(larg == lvalue)
				{
				    match = true;
                    jseaServiceType = jseaServiceTypes[key];
                    log.debug('Setting JseaType got a match on ' + lvalue + " To " + jseaServiceTypes[key]);
                    myConfiguredForJsea = true;

				}
			}

			if( match == false)
			{
				log.debug('Setting JseaType NO MATCH on ' + larg + ' Will be Set to default: ' + jseaServiceType);
			}
		},
		setJseaTypePerJob: function(){
			log.debug('Setting JseaType to Per Job');
			jseaServiceType = jseaServiceTypes["PJB"];
		},
		setJseaTypeStartOfDay: function(){
			log.debug('Setting JseaType to StartOfDay');
			jseaServiceType = jseaServiceTypes["SOD"];
		},

		getJseaType: function() {
			return jseaServiceType;
		},
		isJseaStartOfDay: function() {
			return (jseaServiceType == jseaServiceTypes["SOD"]);
		},
		getJseaConfig: function() {
			log.debug('Getting JseaIsCaptured');

			//If we havn't been configured then don't stop the person doing things in the app
			if ( myConfiguredForJsea == false )
			{
				log.debug('myConfiguredForJsea = ' + myConfiguredForJsea + ' So will return true');
				return 'NA';
			}

			if(this.isJseaStartOfDay())
			{
				var lstr;
				log.debug('Getting JseaIsCaptured jseaServiceType = ' + jseaServiceType + ' From Local storage');
				lstr = localStorage.getItem('JSEA_SOD_CAPTURED');
				if (lstr == 'Y')
				{
					return 'SOD_YES'
				}
				else
				{
					return 'SOD_NO'
				}
			}
			else
			{
				return 'PJB_CHECK';
			}
			
		},
		startWatching: function(){

			$rootScope.$on('SODSERVICE_IS_NEW_DAY', function(event){

				log.debug('SODSERVICE_IS_NEW_DAY Event triggered');
				if(jseaService.isJseaStartOfDay())
				{
					log.debug('SODSERVICE_IS_NEW_DAY isJseaStartOfDay is TRUE ');
					//Update the value to be No and then when the guy uses the ctrler this will make it Yes
					localStorage.setItem('JSEA_SOD_CAPTURED','N');
				}
				else
				{
					log.debug('SODSERVICE_IS_NEW_DAY isJseaStartOfDay is NOT TRUE assume PER JOB');
				}
			});

			$rootScope.$on('SITE_CONFIG_LOADED', function(event){
				log.debug('SITE_CONFIG_LOADED Event triggered');
				if(siteConfig.getSiteConfigValue('PDA_JSEA_ON') == 'Y' || pdaParams.pda_jsea_on)
				{
                    //Now get the type value
                    var lvar = siteConfig.getSiteConfigValue('PDA_JSEA_TYPE');
					if(lvar != '')
					{
						mystr = "getSiteConfig returned  " + lvar;
						log.debug(mystr);
						//Set the TYpe in the service
						jseaService.setJseaType(lvar);
					}
					else
					{
						mystr = "getSiteConfig returned nothing !!!!";
						log.debug(mystr);
					}
				}
			});
			
			// more watchers if required
		},
		setJobJseaDetails: function(jobnum,jobdate,iscaptured,statusType,formType,formLeg) {
			log.debug('setJobJseaDetails' +  ' Jobnum: ' + jobnum + ' Jobdate ' + jobdate + ' IsCaptured ' + iscaptured,' StatusTYpe' + statusType , ' FormType ' + formType, ' FormLeg' + formLeg);
			myDetailJobnum = jobnum;
    		myDetailJobdate = jobdate;
    		myDetailJobJseaCaptured = (iscaptured == 'Y');
			myJobStatusType = statusType;
			myFormType = formType;
			myFormLeg = formLeg
		},
		getServiceJobNum: function() {
			return myDetailJobnum;
		},
		getServiceJobDate: function() {
			return myDetailJobdate;
		},
		getServiceStatusType: function() {
			return myJobStatusType;
		},
		getServiceFormType: function() {
			return myFormType;
		},
		getServiceFormLeg: function() {
			return myFormLeg;
		},
		checkJobDateJseaCaptured: function(jobnum,jobdate) {
			log.debug('checkJobDate' +  ' Passed Jobnum: ' + jobnum + ' Passed Jobdate ' + jobdate );
            if ( jobnum == myDetailJobnum && jobdate == myDetailJobdate )
            {
                log.debug('updateJobIsCaptured' +  ' Svc Jobnum: ' + jobnum + ' Svc Jobdate ' + jobdate );
                return (myDetailJobJseaCaptured);
            }   
			return false;
		}
	}

	return jseaService;
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
.factory('barcodeService', function($rootScope,barcode_sync,pdaParams,Logger){

	var logParams = { site: pdaParams.getSiteId(), driver: pdaParams.getDriverId(), fn: 'barcodeService'};
	var log = Logger.getInstance(logParams);
	var	apponline = true; 


	//When App starts Get from localstorage
	var syncrequired = localStorage.getItem('BARCODES_SYNC_REQD');
	syncrequired = (syncrequired == "true");


	var barcodeService = {

		//This is called from BarcodeCtrl and will update Local Storage
		setSyncRequired: function(val)
		{
			localStorage.setItem('BARCODES_SYNC_REQD', val);
			log.debug(" setSyncRequired:" + val);
			syncrequired = val;	
		}
	}

	$rootScope.$on('APP_ON_LINE', function(event){
	
		syncrequired = localStorage.getItem('BARCODES_SYNC_REQD');
		syncrequired = (syncrequired == "true");

		apponline = localStorage.getItem('APP_CONECTIVITY');
		apponline = (apponline == "true");

		log.debug(" APP_ON_LINE: Syncrequired = " + syncrequired + " AppOnline From LocaStorage = " + apponline);
		

		//If the last state from localstorage was offline the sync if required

		if(syncrequired  && apponline == false)
		{
			log.debug(" SYNC Required and apponline from LStorage is FALSE so will barcode_sync:" + event);
			barcode_sync();
			localStorage.setItem('BARCODES_SYNC_REQD', 'false');
		
		}

		//Now Update Local Storage
		apponline = true;
		localStorage.setItem('APP_CONECTIVITY', apponline);
	});

	$rootScope.$on('APP_OFF_LINE', function(event){
		apponline = false;
		localStorage.setItem('APP_CONECTIVITY', apponline);
	});

	return barcodeService;
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
.factory('sodService', function($rootScope,pdaParams,Logger,eventService,messageService,siteConfig,jobService){

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

						$rootScope.$broadcast('SODSERVICE_IS_NEW_DAY');
						// Get site config parameters from server
						siteConfig.getAllConfigsFromServer();

						jobService.deleteOldJobs();
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

					// Get site config parameters from server
					siteConfig.getAllConfigsFromServer();

				}

				// TODO - maybe get site config parameters from server here?
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
.factory('siteConfig', function(pdaParams,Logger,SiteConfig,$q,$rootScope){

	var logParams = { site: pdaParams.getSiteId(), driver: pdaParams.getDriverId(), fn: 'siteConfig'};
	var log = Logger.getInstance(logParams);

	var keylist = [
				'BARCODE_SUPP_BCODEISJOBNUM',
				'PDA_BARCODES',
				'PDA_JSEA_ON',
				'PDA_JSEA_TYPE',
				'PDA_PICKUP_ALL',
				'PDA_DELIVER_ALL',
				'PDA_FULL_STATUSES',
				'PDA_IMAGES',
				'PDA_IMAGES_URL',
				'PDA_NOTES',
				'PDA_DEL_DAYSBACK'
			];

	var g_siteconfigs = null;

	var siteConfig = {
		getAllConfigsFromServer: function() {
			var deferred = $q.defer();
			var filter = { "filter": 
							{ "where": 
								{ and:	[
											{ "confActive": true },
											{ "confKey": { "inq": keylist } }
										] 
								} 
							}
						};

			// TODO - MAYBE - if already have site configs don't do http call again
/*
			var loaded = localStorage.getItem('SITE_CONFIG_LOADED');
			if (loaded) {
				return( $q.when(g_siteconfigs));
			}
*/

			SiteConfig.find(filter)
				.$promise
				.then(function(siteconfigs) {
					log.info("Retrieved:"+JSON.stringify(siteconfigs));

					g_siteconfigs = siteconfigs;

					var len = siteconfigs.length;
					if(len == 0) {		// not found
						log.error("No site config values found");
					} else {

						for(var i=0; i < len; i++) {

							// store in local storage for future use
							// TODO - store in individual keys or as a site_config key for an object with all keys?
							localStorage.setItem( siteconfigs[i].confKey, siteconfigs[i].confValue);
						}
						localStorage.setItem('SITE_CONFIG_LOADED',true );
						$rootScope.$broadcast('SITE_CONFIG_LOADED');

					}
					deferred.resolve(siteconfigs);
				}, function(error) {
					deferred.reject(error);
				});

			return deferred.promise;
		},
		deleteLocalConfigs: function() {
			// Remove all config key/value pairs from local storage
			// NOTE this should in general ALWAYS be followed by a getAllConfigsFromServer() call to repopulate
			var len = keylist.length;
			for(var i=0; i < len; i++) {
				if(localStorage.getItem(keylist[i]) !== null) {
					localStorage.removeItem(keylist[i]);
				}
			}
		},
		// returns a promise as we are using it in app.js to resolve routes
		getSiteConfigYN: function(key) {
			var retval = localStorage.getItem(key);
			if(!retval) {
				retval = 'N';
			}
			return( $q.when(retval));
		},
		getSiteConfig: function(key) {
			var retval = localStorage.getItem(key);
			if(!retval) {
				retval = '';
			}
			return( $q.when(retval));
		},
		getSiteConfigInt: function(key) {
			var retval = +localStorage.getItem(key);		// the "+" causes a cast to an integer
			if(!retval) {
				retval = 0;
			}
			return( $q.when(retval));
		},
		// no promise on this one so it can be used in inline synchronous code
		getSiteConfigValue: function(key) {
			var retval = localStorage.getItem(key);
			if(!retval) {
				retval = 'N';
			}
			return(retval);
		},
			
	}

	return siteConfig;
})
.service('fileUpload',['$http','imageFileService', function($http,imageFileService){

	this.uploadFileToUrl = function(file, uploadUrl, successCallback, errorCallback){
		var fd = new FormData();

		window.resolveLocalFileSystemURL(file.nativeURL, function( fileEntry) {

			fileEntry.file(function(file) {

				// file is in scope here - save the file name
				var filename = file.name;
				var imagedata = imageFileService.image(file.name) || {};

				var reader = new FileReader();

				reader.onloadend = function(e) {

					// Add the file to the form data
					var imgBlob = new Blob([ this.result ], { type: "image/jpeg" } );
					fd.append('file', imgBlob, filename);		// file name is 3rd arg

					// Add any file notes and/or metadata
					fd.append('notes', imagedata.notes);
					var metadata = imagedata.metadata || {};
					for( var property in metadata) {
						if (metadata.hasOwnProperty(property)) {
							fd.append(property, metadata[property]);
						}
					}

					// Now post it to the files endpoint
					// TODO - return promise?
					$http.post(uploadUrl, fd, { transformRequest: angular.identity, headers: {'Content-Type': undefined } })
					.success(function(data){
						console.log("Succeeded to fileUpload:"+data.fileName + ", url:" + uploadUrl);
						if(successCallback) successCallback(data);
					})
					.error(function(err){
						console.log("Failed to fileUpload:"+JSON.stringify(err));
						if(errorCallback) errorCallback(err);
					});
				};

				reader.readAsArrayBuffer(file);

			}, function(err) {
				console.log("resolveLocalFileSystemURL failed:"+ err);
				if(errorCallback) errorCallback(err);
			});

		}, function(err) {
			console.log("resolveLocalFileSystemURL failed:"+ err);
			if(errorCallback) errorCallback(err);
		});

	}
}])

.factory('imageService',['$rootScope', '$timeout', 'cordovaReady', '$cordovaFile', '$q', 'pdaParams', '$cordovaFileTransfer', 'Logger','$cordovaCamera','imageFileService','siteConfig','fileUpload','Job',
	function($rootScope, $timeout, cordovaReady, $cordovaFile, $q, pdaParams, $cordovaFileTransfer, Logger, $cordovaCamera, imageFileService,siteConfig,fileUpload,Job){
 
	// Service to handle image files

	var logParams = { site: pdaParams.getSiteId(), driver: pdaParams.getDriverId(), fn: 'imageService'};
	var log = Logger.getInstance(logParams);

	var fileList = [];
	var calls = 0;
	var pollTime = pdaParams.imagePollTime || (60000 * 5);			// 30000 = 30 secs
	//var uploadUrl = "http://opensyscon.com.au:5679/images";
	var uploadUrl = "";

	imageFileService.images();			// retrieve any image meta data from local storage

	var poller = function pollDir() {
		// read through image dir and grab any files

		if(uploadUrl == "") {
			var val = siteConfig.getSiteConfigValue('PDA_IMAGES_URL');
			uploadUrl = val;
			log.info('uploadUrl set to:['+uploadUrl+']');
		}

		log.debug('poller: cordovaReady.isready:'+cordovaReady.isready+', uploadUrl:'+uploadUrl);
		if( cordovaReady.isready) {
			uploadAllImages();
			deleteObsoleteImages();
		}

		calls++;

		// TODO - maybe use idle service?  Not sure what it's called
		// TODO - maybe have site config for this?
		pollTime = pdaParams.imagePollTime || (60000 * 5);			// re-read from pda params

		if( pollTime < 10000)
			pollTime = 10000;					// min allowed 10 seconds

		$timeout(poller, pollTime);
	};

	var uploadAllImages = function() {
		log.info('uploadAllImages: checking...');
		getImageList().then(function uploadImages(images) {

			log.debug('uploadAllImages: found '+images.length+' images, check if ready for upload');
			images.forEach(function(image) {
				// if already uploaded don't do it again
				var uploaded = imageFileService.get(image.name, 'uploaded');
				var readyForUpload = imageFileService.get(image.name, 'readyForUpload');

				log.debug('uploadAllImages: image:'+image.name+', readyForUpload:'+readyForUpload+', uploaded:'+uploaded+', pdaParams.imageUpload:'+pdaParams.imageUpload);

				// if not ready don't upload - e.g. maybe still adding notes
				if( readyForUpload == null || readyForUpload == false)
					return;			// stop processing this iteration


				if( uploaded != null && !uploaded && pdaParams.imageUpload) {
					uploadImage(image);
				}
			});
		});
	};

	var uploadImage = function(image, callback) {
		//var notes = imageFileService.get(image.name, 'notes');
		var imagedata = imageFileService.image(image.name) || {};

		var cb = callback;

		var options = new FileUploadOptions();
		options.fileKey = "file";
		options.fileName = image.name;
		options.mimeType = "image/jpeg";

		// Whatever you populate options.params with, will be available in req.body at the server-side.
		options.params = {
			"description": "Image from PDA",
			"notes": imagedata.notes
		};

		// If we have a metadata object retrieve each property and add to options.params
		var metadata = imagedata.metadata || {};
		for( var property in metadata) {
			if (metadata.hasOwnProperty(property)) {
				options.params[property] = metadata[property];
			}
		}

		if(uploadUrl != "") {
			log.info('About to upload:'+image.nativeURL+' to: '+uploadUrl);
			fileUpload.uploadFileToUrl(image, uploadUrl, function(result) {
				log.info('uploadFileToUrl OK to:' + uploadUrl + ', result:'+JSON.stringify(result));

				imageFileService.set(image.name, 'uploaded', true);		// mark as uploaded on success

				if(cb) cb(result);

			}, function (error) {
				log.error('uploadFileToUrl failed to:' + uploadUrl + ', error:'+JSON.stringify(error));
			});
		} else {
			log.info('uploadUrl:['+uploadUrl+'], so getSiteConfig');
			var val = siteConfig.getSiteConfigValue('PDA_IMAGES_URL');
			uploadUrl = val;
			log.info('uploadUrl set to:['+uploadUrl+']');
		}
	};

	var getImageList = function(imageId) {
			if( cordovaReady.isready) {
				var deferred = $q.defer();
				var prefix = imageId || "";			// optional image name to search for (first x chars no suffix)

				window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function( fileSystem) {
					var directoryReader = fileSystem.createReader();
					directoryReader.readEntries( function( entries) {

						var numFilesAndDirs = entries.length;
						fileList = [];
						for( i=0; i<numFilesAndDirs; i++) {
							
							var fileEntry = entries[i];

							if( fileEntry.isFile) {
								var imgfile = {};

								var isImage = (/\.(gif|jpg|jpeg|tiff|png)$/i).test(fileEntry.name);
								var isMatch = true;		// TODO - is this the correct default value?  Maybe false?
								if(prefix) {
									//(/^20160229067395.*_.*$/i).test(fileEntry.name)
									var re = new RegExp('^'+prefix+'.*_.*$','i');
									isMatch = re.test(fileEntry.name);
								}

								if( isImage && isMatch) {
									imgfile.nativeURL = fileEntry.nativeURL;
									imgfile.name = fileEntry.name;
									fileList.push(imgfile);
								}
							}
						}
						deferred.resolve(fileList);
						
					}, function (error) {
							deferred.reject(error);
					})
					
				}, function (error) {
						deferred.reject(error);
				})
				return deferred.promise;
			}
			else {
				return $q.when( [] );		// empty list if no cordova
			}
		};

	var deleteImagesForPrefix = function(imageId) {
			if( cordovaReady.isready) {
				var deferred = $q.defer();
				var prefix = imageId || "";			//if supplied - all up to '_'

				window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function( fileSystem) {
					// TODO - log here
					var directoryReader = fileSystem.createReader();
					directoryReader.readEntries( function( entries) {

						var numFilesAndDirs = entries.length;
						fileList = [];
						for( i=0; i<numFilesAndDirs; i++) {
							
							var fileEntry = entries[i];

							if( fileEntry.isFile) {
								var imgfile = {};

								var isImage = (/\.(gif|jpg|jpeg|tiff|png)$/i).test(fileEntry.name);
								var isMatch = true;		// TODO - is this the correct default value?  Maybe false?
								if(prefix) {
									//(/^20160229067395.*_.*$/i).test(fileEntry.name)
									var re = new RegExp('^'+prefix+'.*_.*$','i');
									isMatch = re.test(fileEntry.name);
								}

								log.debug('deleteImagesForPrefix: prefix:['+prefix+'], file:'+fileEntry.name+', isIamge:'+isImage, +', isMatch:'+isMatch);
								if( isImage && isMatch) {
									imgfile.nativeURL = fileEntry.nativeURL;
									imgfile.name = fileEntry.name;

									// delete image and add to list of deleted files
									$cordovaFile.removeFile(cordova.file.dataDirectory, imgfile.name).then(function(success) {
										fileList.push(imgfile);
									});
								}
							}
						}
						deferred.resolve(fileList);
						
					}, function (error) {
							deferred.reject(error);
					})
					
				}, function (error) {
						deferred.reject(error);
				})
				return deferred.promise;
			}
			else {
				return $q.when( [] );
			}
		};

	var deleteSingleImage = function(imageId) {
			if( cordovaReady.isready) {
				var deferred = $q.defer();

				if( !imageId) {
					deferred.reject('imageId must be supplied');
				}

				var isImage = (/\.(gif|jpg|jpeg|tiff|png)$/i).test(imageId);

				if( isImage) {
					//deferred.resolve($cordovaFile.removeFile(cordova.file.dataDirectory, imageId));
					$cordovaFile.removeFile(cordova.file.dataDirectory, imageId).then(function(result) {

						imageFileService.removeImage(imageId);
						log.info('deleteSingleImage:'+JSON.stringify(result));

						deferred.resolve(result);
					});
				}
				else {
					deferred.reject('Not an image file:'+imageId);
				}
				return deferred.promise;
			}
		};

	var takePhoto = function(photoId) {
		console.log(new Date().toISOString()+': imageService.takePhoto: starts');		//DEBUG

			// See: https://devdactic.com/complete-image-guide-ionic/
			// and use promises? : https://docs.angularjs.org/api/ng/service/$q
			var deferred = $q.defer();
		//return $q(function(resolve, reject) {
			var options = {
					quality: pdaParams.imageQuality || 50,
					destinationType: Camera.DestinationType.FILE_URI,
					sourceType: Camera.PictureSourceType.CAMERA,
					encodingType: Camera.EncodingType.JPEG,
					cameraDirection: 1,
					saveToPhotoAlbum: true
			};

			$cordovaCamera.getPicture(options).then(function(imageURI) {
				// TODO - place picture on form
				// TODO - get some optional notes
				// TODO - get confirmation all ok
				// TODO - save the picture

				//storeImageURI(photoId, imageURI);			// image successfully captured by device so store it

				console.log(new Date().toISOString()+': imageService.takePhoto: resolved');		//DEBUG
				deferred.resolve(imageURI);
			}, function (err) {
				//alert(err);
				console.log(new Date().toISOString()+': imageService.takePhoto: rejected');		//DEBUG
				deferred.reject(err);
			});

			//$cordovaCamera.cleanup() 			// TODO - required for iOS - see docs for details.

			return deferred.promise;
		//});
		console.log(new Date().toISOString()+': imageService.takePhoto: ends');		//DEBUG
	};

	function dirname(path) {
		return path.replace(/\/[^\/]*$/,'');
	}

	var storeImageURI = function(photoId, imageURI, metadata) {

		console.log(new Date().toISOString()+': camera.storeImageURI: starts');		//DEBUG
		var deferred = $q.defer();

		//Grab the file name of the photo in the temporary directory
		var currentName = imageURI.replace(/^.*[\\\/]/, '');

		//Create a new name for the photo
		var d = new Date(),
			n = d.getTime(),
			baseFileName = photoId + "_" + n;
			newFileName = baseFileName+".jpg";

		var currentDirectory = dirname(imageURI);

		// moves file from temp camera area on device to the app's local file system
		$cordovaFile.moveFile(currentDirectory, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
			// success
			var data = {};
			data.savedImageURI = cordova.file.dataDirectory+newFileName;
			data.baseFileName = baseFileName;
			data.newFileName = newFileName;
			//deferred.resolve(cordova.file.dataDirectory+newFileName, baseFileName);		// can only resolve one value

			var imageData = {
				fileName: newFileName,
				uploaded: false,
				readyForUpload: false
			};

			// If metadata object supplied add properties to imageData
			if( metadata) {
				/*
				for( var property in metadata) {
					if (metadata.hasOwnProperty(property)) {
						imageData[property] = metadata[property];
					}
				}
				*/
				imageData.metadata = metadata;
			}

			imageFileService.storeImage(imageData);			// store name/status in local storage

			deferred.resolve(data);

		}, function (error) {
			deferred.reject(err);
		});

		return deferred.promise;
	};

	var deleteObsoleteImages = function() {
		/*
		 * For each image file check if there is still a job (jobSeq) for it
		 * and if not then delete the image from the file system and any metadata
		 * from local storage
		 */
		var promises = [];			// array of promises for $q.all
		var deferredAllImages = $q.defer();
		var result = {};
		result.numImages = 0;
		result.delImages = 0;
		result.errImages = 0;
		result.failed = [];			// array of filename/errors on error

		getImageList().then(function(images) {

			result.numImages = images.length;
			log.info('deleteObsoleteImages: images found to check:'+result.numImages);

			images.forEach(function (image) {

				var deferredImage = $q.defer();

				var name = image.name;
				var jobSeq = name.substring(0, name.indexOf('_'));
				var filter = { "where": {"mobjobSeq": jobSeq} };

				log.debug('deleteObsoleteImages: check name:'+name+', jobSeq:'+jobSeq);

				Job.find(filter).then(function(jobs) {

					if( jobs.length == 0) {		// no job found

						deleteSingleImage(name).then(function(success) {
							result.delImages += 1;
							log.info("deleteObsoleteImages: deleted:"+success.fileRemoved.name);
						}, function(err) {
							log.error('deleteObsoleteImages: failed to delete:'+name+', err:'+err);
							result.errImages += 1;
							var failed = {};
							failed.name = name;
							failed.err = err;
							result.failed.push(failed);
						});
						deferredImage.resolve();
					}
					else {
						deferredImage.resolve();
					}
				});

				promises.push(deferredImage.promise);

			});

			$q.all(promises).then( function() {
				deferredAllImages.resolve(result);
			});

		});

		return deferredAllImages.promise;
	};

	var imageService = {

		startWatching: function(){
			// Wait for site config to load and then start polling service if required
			var poller_started = false;
			$rootScope.$on('SITE_CONFIG_LOADED', function(event){

				var YN = siteConfig.getSiteConfigValue('PDA_IMAGES');
				log.info('startWatching: PDA_IMAGES:'+YN+', poll_started:'+poller_started);
				if(YN === 'Y' && !poller_started) {
					log.info('startWatching: PDA_IMAGES:'+YN+', calling poller()');
					poller_started = true;
					poller();
				}
				else {
					log.info('startWatching: PDA_IMAGES:'+YN+', NO polling or already started');
				}

			});
		},

		getCount: function() { return(calls) },

		getImageList: getImageList,
		deleteImagesForPrefix: deleteImagesForPrefix,
		deleteSingleImage: deleteSingleImage,
		uploadImage: uploadImage,
		takePhoto: takePhoto,
		storeImageURI: storeImageURI,
		deleteObsoleteImages: deleteObsoleteImages
	};

	return imageService;
}])

.factory('imageFileService', function() {
	// see: https://devdactic.com/complete-image-guide-ionic/
  var images;
  var IMAGE_STORAGE_KEY = 'images';
 
  // Gets a list of image names from local storage - not the file system
  function getImages() {
    var img = window.localStorage.getItem(IMAGE_STORAGE_KEY);
    if (img) {
      images = JSON.parse(img);
    } else {
      images = [];
    }
    return images;
  };
 
  function addImage(img) {
    images.push(img);
    window.localStorage.setItem(IMAGE_STORAGE_KEY, JSON.stringify(images));
  };

  function deleteImage(imageId) {
	var i = images.length;
	while(i--) {
		if( images[i].fileName === imageId) {
			images.splice(i,1);
			window.localStorage.setItem(IMAGE_STORAGE_KEY, JSON.stringify(images));
			break;
		}
	}
  };
 
  function setImageProperty(imageId, key, value) {
	var i = images.length;
	while(i--) {
		if( images[i].fileName === imageId) {
			images[i][key] = value;
			window.localStorage.setItem(IMAGE_STORAGE_KEY, JSON.stringify(images));
			break;
		}
	}
  };

  function getImageProperty(imageId, key) {
	var i = images.length;
	while(i--) {
		if( images[i].fileName === imageId) {
			return(images[i][key]);
		}
	}
	return null;		// didn't find what we were looking for
  };

  function getImage(imageId) {
	var i = images.length;
	while(i--) {
		if( images[i].fileName === imageId) {
			return(images[i]);
		}
	}
	return null;		// didn't find what we were looking for
  };

  return {
    storeImage: addImage,
    removeImage: deleteImage,
    set: setImageProperty,
    get: getImageProperty,
    image: getImage,
    images: getImages
  }
})
.factory('driverMessageService', function(DespatchToDriverMessages) {

	function getMessages(driverId) {
		// TODO - limit shoud be a config or pda parameter

		// This works in the REST API:
		// {"where" : { "drvmDriverId": 999}, "order": "drvmSeqid DESC", "limit":2}

		var filter = { "filter": {
							"where": { "drvmDriverId": driverId },
							"order": 'drvmSeqid DESC',
							"limit": 20
						}
					};

		// {limit: 50}

		return(DespatchToDriverMessages.find(filter));
	};

	function addMessage(driverId,message,cb) {
		var driverMsg = {};
		//var now = new Date();
		var now = new Date().toISOString();

		driverMsg.drvmDriverId = driverId;
		driverMsg.drvmDate = now;
		driverMsg.drvmTimestamp = now;
		driverMsg.drvmMessage = message;		// TODO - should make sure <=512 chars
		driverMsg.drvmSender = driverId;
		driverMsg.drvmRecipient = "DESPATCH";	// for now will always be DESPATCH until we maybe have a reply concept

		DespatchToDriverMessages.create(driverMsg,cb);
	};

  return {
	getMessages: getMessages,
	addMessage: addMessage
  }
})
.factory('jobService', function(Job, pdaParams, Logger, siteConfig ){

	var logParams = { site: pdaParams.getSiteId(), driver: pdaParams.getDriverId(), fn: 'jobService'};
	var log = Logger.getInstance(logParams);

	function deleteOldJobs(daysback) {
		// delete old jobs
		// if daysback parameter provided use it otherwise use site config value
		siteConfig.getSiteConfigInt('PDA_DEL_DAYSBACK').then(function(val) {
			daysback = daysback || val;

			var queryDate = new Date();
			queryDate.setDate(queryDate.getDate() - daysback);

			log.info("deleteOldJobs: daysback:" + daysback + ", queryDate:" + queryDate);

			if( daysback > 1) {
				var delfilter = { "where": {"mobjobBookingDay": {"lt":queryDate} } };
				log.info("deleteOldJobs: delfilter:"+JSON.stringify(delfilter));

				Job.find(delfilter, function (err, jobs) {
					var len = jobs.length;
					log.info("deleteOldJobs: deleting:"+len+" job legs");

					for( var leg = 0; leg < len; leg++) {
						var job = jobs[leg];
						log.info("deleteOldJobs: delete leg:"+leg+" job:" + job.mobjobSeq);
						job.delete();
					}
				});
			}
		});
	}

	return {
		deleteOldJobs: deleteOldJobs
	}
})
.factory('errorModalService', function( $ionicPopup, pdaParams, Logger){

	var logParams = { site: pdaParams.getSiteId(), driver: pdaParams.getDriverId(), fn: 'errorModalService'};
	var log = Logger.getInstance(logParams);

	function showModal(modalOptions) {
		var errortext = "Status:"+modalOptions.error.status + " url:" + modalOptions.error.config.url;

		// TODO popup or modal?
		var alertPopup = $ionicPopup.alert({
				title: pdaParams.getAppVersion,
				subTitle: modalOptions.headerText,
				template: errortext
			});
		log.error('Error:'+JSON.stringify(modalOptions.error));
	};

	return {
		showModal: showModal
	}
})
;
