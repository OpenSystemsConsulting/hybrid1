angular.module('JobsIndexCtrl', [])

.filter('displayStatusDetail', function() {
  return function(input) {
    input = input || '';
    var out = "";


	if ( input == "IP" )
		return "IN PROGRESS";
	if ( input == "DN" )
		return "PICKED UP";

    return "ALLOCATED" ;
  };
})
.filter('changeDisplayFrom', function() {
	return function(input, job) {

		if( job.displayFrom)
			return job.displayFrom;
		return input;
	};
})
.filter('changeDisplayTo', function() {
	return function(input, job) {

		if( job.displayTo)
			return job.displayTo;
		return input;
	};
})
.filter('changeDisplaySvc', function() {
	return function(input, pdaParams) {
		var output = "("+input+")";

		if(pdaParams.siteId === 'WADS')
			return "";

		return output;
	};
})

// A simple controller that fetches a list of data from a service
.controller('JobsIndexCtrl', ['$rootScope', '$scope', '$window', '$state', 'Job', 'RemoteJob', 'util', 'sync', 'network', 'pdaParams','appService','pushService', '$ionicPopup','Logger','syncService','messageService','Idle','deleteJobChangeData', '$cordovaMedia','jobChangedService','eventService','BackgroundGeolocationService','cordovaReady','sodService','siteConfig', 'jseaService','gpsAudit','conflicts',
	function($rootScope, $scope, $window , $state, Job, RemoteJob, util, sync, network, pdaParams,appService,pushService, $ionicPopup, Logger, syncService, messageService,Idle,deleteJobChangeData, $cordovaMedia,jobChangedService,eventService,BackgroundGeolocationService, cordovaReady, sodService, siteConfig, jseaService, gpsAudit, conflicts) { 
	$scope.jobs = [];
	$scope.jobStatuses = {};

	var logParams = { site: pdaParams.getSiteId(), driver: pdaParams.getDriverId(), fn: 'JobsIndexCtrl'};
	var log = Logger.getInstance(logParams);

	var mystr;

	var notificationCount = 0;
	//Idle.watch();						// TODO - idle - check if idle and maybe auto refresh

	log.debug("syncInProgress:"+syncService.getSyncInProgress());		// log current sync status

	$rootScope.syncInProgress = false;
	syncService.setSyncInProgress(false);		// not syncing now


				
	//When this is called at present it can 1 of 2 situations
	// A SOD JSEA is required or a per job SOD is required.
	// The service knows which one. 
	// if its a per job one then 

	var jsea_retval = jseaService.getJseaConfig();
	log.info('jsea_retval = ' + jsea_retval);

	if( jsea_retval == 'SOD_NO')
	{
		$state.go('tab.jseas');
	}
	

	$scope.showDetail = function(mobjobSeq) {
		$state.go('tab.job-detail', {jobId: mobjobSeq});
	}

	// pickup all button 
	$scope.pda_pickup_all = (siteConfig.getSiteConfigValue('PDA_PICKUP_ALL') == 'Y');

	/*
	 * New functionality to get arrive/depart pickup/delivery times
	 */
	$scope.fullStatuses = (pdaParams.pda_full_statuses || (siteConfig.getSiteConfigValue('PDA_FULL_STATUSES') == 'Y'));

	$scope.pda_depart_all = (pdaParams.pda_depart_all || (siteConfig.getSiteConfigValue('PDA_DEPART_ALL') == 'Y'));
	$scope.pda_deliver_all = (pdaParams.pda_deliver_all || (siteConfig.getSiteConfigValue('PDA_DELIVER_ALL') == 'Y'));

	/*
	 * resolveConflictsInClient here refers to the loopback client portion of the code NOT
	 * the client app.  We don't want to process conflicts automatically in the loopback
	 * code as we have an event handler in this controller which takes care of things
	 */
	conflicts.resolveConflictsInClient = (pdaParams.pda_client_conflicts || (siteConfig.getSiteConfigValue('PDA_CLIENT_CONFLICTS') == 'Y'));

	var sortKey = siteConfig.getSiteConfigValue('PDA_SORT_COL1') || 'mobjobBookingDay';
	var displayDate = siteConfig.getSiteConfigValue('PDA_DISPLAY_DATE') || 'mobjobBookingDay';
	var displayFrom = siteConfig.getSiteConfigValue('PDA_DISPLAY_FROM') || 'mobjobSuburb';
	var displayTo = siteConfig.getSiteConfigValue('PDA_DISPLAY_TO') || 'mobjobToSuburb';
	$scope.fontSize = siteConfig.getSiteConfigValue('PDA_ROW1_FONT_SIZE') || '18px';

	// New functionality to show client name ON by default - can be hidden with new key set explicitly to 'N'
	$scope.showClientName = true;
	if( siteConfig.getSiteConfigValue('PDA_SHOW_CLIENT_NAME') == 'N')
		$scope.showClientName = false;

	function sortFunction(a,b) {
		if (a[sortKey] > b[sortKey])
			return 1;
		if (a[sortKey] < b[sortKey])
			return -1;
		return 0;
	}
/*
	function sortByEtaTime(a,b) {
		if (a.mobjobEtaTime > b.mobjobEtaTime)
			return 1;
		if (a.mobjobEtaTime < b.mobjobEtaTime)
			return -1;
		return 0;
	}
*/

	// initialise the current new message count in this scope
	$scope.newMessageCount = messageService.getNewMesssageCount();
	// and then monitor for any new messages coming in
	$scope.$on('messageToDriver', function(event, payload){
		$scope.newMessageCount = messageService.getNewMesssageCount();
		$scope.$apply();
	});


	$scope.logonDriver = function() {
		pdaParams.logonDriver();
		eventService.sendMsg('LOGON'); 
	
		// Clear obsolete change data - used to be done at main login but that doesn't happen in this generic version
		//messageService.clearChangeData();

		sodService.checkDoSodAction('FIRST_RESUME');				// check if first for the day

		// Dump local storage at logon time - debug aid
		messageService.dumpLocalStorage();

		if(cordovaReady.isready) {
			BackgroundGeolocationService.start();
		}
	}
	$scope.logoffDriver = function() {
		pdaParams.logoffDriver();
		eventService.sendMsg('LOGOFF');
		
		if(cordovaReady.isready) {
			BackgroundGeolocationService.stop();
		}
	}
	$scope.isDrvLoggedOff = function() {
		return pdaParams.isDrvLoggedOff();
	}
	$scope.isDrvLoggedOn = function() {
		return pdaParams.isDrvLoggedOn();
	}

	// LT - 31/08/2015 - I couldn't get the "inq" filter working for sync - it would get an error 400
	// from the REST server - 
	// "The mobjobStatus property has invalid clause {\"inq\":{\"[0]\":\"NJ\",\"[1]\":\"AC\",\"[2]\":\"PU\"}}"
	// The not equal DL appears to cause issues when trying to save a completed job (status "DL")
	//var syncfilter = { "where": { and: [{"mobjobDriver": pdaParams.getDriverId()},{"mobjobStatus": { "neq": "DL"}} ] }};

	// syncfilter was getting changed in PersistedModel.changes during the replication process, presumably
	// by design, so keep a safe copy and deep copy it prior to use

	// NOTE - LT - 31/12/2015 - the syncfilter is used during the replication FROM the remote server
	// only - so we don't retrieve any DL status jobs, but is NOT used during the replication TO the
	// remote server so that we DO send any completed (DL) jobs

	//var _syncfilter = { "where": {"mobjobDriver": pdaParams.getDriverId()} };
	var _syncfilter =	{
						"where": {
							"and": [
									{"mobjobDriver": pdaParams.getDriverId()},
									/*{"mobjobStatus": { "inq": [ "NJ","AC","PU"] } }*/
									{"mobjobStatus": { "neq": "DL"}}
								]
							}
						};

	if( pdaParams.syncDL) {
		_syncfilter = { "where":{"mobjobDriver": pdaParams.getDriverId()}};
	}

	var syncfilter = angular.copy(_syncfilter);


/*
	  var filter = {"filter":
                  {
                    "where": {and: [{"mobjobDriver": 1}, {"mobjobLegNumber": 0}]}
                  }
                };
*/
/*
	  var _localfilter = 
                  {
                    "where": {and: [{"mobjobDriver": pdaParams.getDriverId()}, {"mobjobLegNumber": 0},{"mobjobStatus": { "inq": ["UJ","NJ","AC","PU"] } } ]},
					"order": 'mobjobStatus DESC'
                  };
*/
	  var _localfilter = 
                  {
                    "where": {and: [{"mobjobDriver": pdaParams.getDriverId()}, {"mobjobLegNumber": 0},{"mobjobStatus": { "neq": "DL"}} ]},
					"order": 'mobjobStatus DESC'
                  };
	var filter = angular.copy(_localfilter);

	var _allfilter =		// same as localfilter but get ALL legs for a job - used for bulk updating
			  {
				"where": {and: [{"mobjobDriver": pdaParams.getDriverId()}, {"mobjobStatus": { "neq": "DL"}} ]},
				"order": 'mobjobStatus DESC'
			  };
/*
	  function getJobs() {
		
		  filter = angular.copy(_localfilter);
		  Job.find(filter)	// Method generated by the LoopBack Angular SDK
		    .$promise
		    .then(function(results) {
		      $scope.jobs = results;
		      		// An Array of All of the History Event...
		      		// TODO:  Add "skip", and "limit" filters

		      $scope.jobs.sort(sortByLastModifiedTime).reverse();
			    function sortByLastModifiedTime(a,b) {
			    	if (a.lastModified > b.lastModified)
			    		return 1;
			    	if (a.lastModified < b.lastModified)
			    		return -1;
			    	return 0;
			    }
			    	// Sort from most Recent Edit on down...

		      for (var i = 0; i < $scope.jobs.length; i++) {
		      	$scope.convertDates($scope.jobs[i], $rootScope.jobMetadata);
		      }
		      		// Show Dates in a shortened format...

		      $scope.titleWithTotal = "Jobs " + " (" + $scope.jobs.length + ")";
		    });
	  }
*/

	//This is from LOCAL STORAGE

	function getJobs() {
		$scope.jobStatuses = {};
		filter = angular.copy(_localfilter);
		Job.find(filter, function (err, jobs) {
			//console.log(err);
			//console.log(jobs);

			// TODO - need to check error and only show jobs if no error
			$scope.jobs = jobs;

			if( sortKey && sortKey != '')
				$scope.jobs.sort(sortFunction);

			for (var i = 0; i < $scope.jobs.length; i++) {
				$scope.convertDates($scope.jobs[i], $rootScope.jobMetadata);

				// Add checked property for possible multi delivery
				$scope.jobs[i].checked = false;

				var job = $scope.jobs[i];
				job.displayDate = job[displayDate];
				job.displayFrom = job[displayFrom];

				if( job.mobjobStatus == 'UJ') {
					job.mobjobStatus = 'NJ';
					job.onDeviceTime = new Date().toISOString();

					mystr = 'getJobs:' + job.mobjobSeq + ' updated from ' + 'UJ' + ' -> ' + job.mobjobStatus;
					log.info(mystr);

					job.save();
				}

				// keep a count of the various job statuses
				if($scope.jobStatuses[job.mobjobStatus])
					$scope.jobStatuses[job.mobjobStatus] += 1;
				else
					$scope.jobStatuses[job.mobjobStatus] = 1;
			}

			$scope.titleWithTotal = "Jobs " + " (" + $scope.jobs.length + ")";

			//$scope.$apply();
		});
	}

	// [ START - New code for syncing

	function onChange(err, conflicts) {
		if(err) 
			log.error('onChange:err:'+JSON.stringify(err));
		if(conflicts && conflicts.length)
			log.debug('onChange:conflicts:'+JSON.stringify(conflicts));

		// TODO - should this be here?
		pushService.registerForPush();


		$rootScope.syncInProgress = false;
		syncService.setSyncInProgress(false);		// not syncing now
		log.debug("SYNC: FINISH");

		$scope.jobStatuses = {};

		// We were getting the following error.  Where does the order come from?  reset filter here for now
		// Error: The order {"key":"mobjobSeq","reverse":1} is not valid
		filter = angular.copy(_localfilter);

		// Job.find() retrieves from LocalJob - only leg zeroes so as to display a job list (not all legs)
		Job.find(filter, function (err, jobs) {
			//console.log(err);
			//console.log(jobs);

			syncService.setSyncInProgress(false);		// not syncing now

			// TODO - maybe need to check error and only show jobs if no error
			$scope.jobs = jobs;

			if( sortKey && sortKey != '')
				$scope.jobs.sort(sortFunction);

			var syncRequired = 0;

			for (var i = 0; i < $scope.jobs.length; i++) {
		      	$scope.convertDates($scope.jobs[i], $rootScope.jobMetadata);

				var job = $scope.jobs[i];

				job.displayDate = job[displayDate];
				job.displayFrom = job[displayFrom];

				// ACK the job - notifies despatch job received by pda
				if( job.mobjobStatus == 'UJ') {
					job.mobjobStatus = 'NJ';
					job.onDeviceTime = new Date().toISOString();

					mystr = 'onChange:' + job.mobjobSeq + ' updated from ' + 'UJ' + ' -> ' + job.mobjobStatus;
					log.info(mystr);

					job.save();
					syncRequired++;
				}

				// keep a count of the various job statuses
				if($scope.jobStatuses[job.mobjobStatus])
					$scope.jobStatuses[job.mobjobStatus] += 1;
				else
					$scope.jobStatuses[job.mobjobStatus] = 1;
			}
			if(syncRequired) {
				$rootScope.syncInProgress = true;
				syncfilter = angular.copy(_syncfilter);
				syncService.setCallingFunc("JobsIndexCtrl->Job.find");
				syncService.hybridSync(onChange,syncfilter);
			}

			$scope.titleWithTotal = "Jobs " + " (" + $scope.jobs.length + ")";

			$scope.$apply();
		});
	}



	//THIS IS THE FIRST BIT OF CODE THAT RUNS IN THIS FUNC
	// WE CALL The original loopback sync process which will call back to the onchange
	// above and we then set hybrid sync in progress

	// sync the initial data
	if(network.isConnected) {
		// getJobs() will load from local storage while we wait for the sync to happen
		// Should improve perceived response times when server/network is slow to return
		if(pdaParams.jobdisplay)
			getJobs();

		//Here someone has either changes a status on the job detail or just looked or its a straight upload
		if(jobChangedService.getlastjobedited() == false)
			getJobs();
		else
			jobChangedService.setlastjobedited(false);

		// if we are connected to the network then this will sync and the callback will load the jobs after sync
		log.debug("MAIN PAGE SYNC: START (will give a log in hybrid sync to say SYNC:START as well eg 2) ");
		$rootScope.syncInProgress = true;
		syncfilter = angular.copy(_syncfilter);

		//Use hybrid Sync
		//sync(onChange,syncfilter);

        syncService.setCallingFunc("JobsIndexCtrl->MAIN PAGE SYNC");                                                                  
		syncService.hybridSync(onChange,syncfilter);
	} else {
		// If we are not connected to the network just load jobs from local storage
		getJobs();
	}


/*
	$scope.$on('IdleStart', function() {
		//var now = new Date().toISOString();
		//console.log('IdleStart: ' + now );
      });

      $scope.$on('IdleEnd', function() {
		//var now = new Date().toISOString();
		//console.log('IdleEnd: ' + now );
      });

      $scope.$on('IdleTimeout', function() {
		//var now = new Date().toISOString();
		//console.log('IdleTimeout: ' + now );
		syncfilter = angular.copy(_syncfilter);                                                                                                 
        syncService.setCallingFunc("JobsIndexCtrl->IdleTimeout");                                                                  
        syncService.hybridSync(onChange,syncfilter);     

		log.debug("IdleTimeout: syncService.hybridSync Called");

		//Reset the watch manually
		Idle.watch();
      });
*/

	// Original event handler - TODO remove once all events handled elswehere
	$scope.$on('pushNotificationReceived', function(event, notification) {
		notificationCount++;

		// TODO - we should store messages (maybe last x) to be viewed by driver

		// GCM messages come in with an event property set to 'message' with the message itself in the message property
		// APN messages come in without an event type property so we need to simply reference the message 
		// pushService will add the platform to the notification so we can appropriate action
		var platform = notification.platform;
		log.info(platform+":pushNotificationReceived:"+notification.event);

		switch(platform) {
			case 'Android':
				switch(notification.event) {
					case 'message':
						// notification.message is a string
						// notification.payload is a JSON object - not always supplied

						var message = notification.message;
						// TODO - double payload - one added by GCM?  can we make this more logical?
						var payload = notification.payload.payload || {};

						// Check For Cancellation and then delete job 
						if(typeof payload.data != "undefined") {

							// if we have a payload then do something with it
							if(payload.data.type == "CANCEL") {
								var baseJobNo = payload.data.baseJob;
								var bookingDay = payload.data.bookingDay || 0;

								// delete from local storage and resync - if we don't do this we get a conflict - don't know why
								deleteLegs(baseJobNo, bookingDay);
							}
							else {
								// unknown payload type - just refresh
								refresh();
							}
						}
						else {
							// No specific payload data - just refresh
							refresh();
						}
						break;

					default:
						log.info(platform+":Unhandled notification.event:"+notification.event);
						break;
					}
				break;

			case 'iOS':
					// TODO - we need to check the correct property - notification.type?
					switch(message.type) {
						case 'CANCEL':
							var baseJobNo = message.baseJob;
							var bookingDay = message.bookingDay || 0;
							deleteLegs(baseJobNo, bookingDay);
							break;
						default:
							// Probably new work - refresh
							log.info(platform+":Unhandled message.type:"+message.type);
							refresh();
							break;
					}
				break;

			// TODO - windows mobile?
			default:
				log.info(platform+":Unhandled platform:"+platform);
				break;
		};


	});

	// TODO - move sound handling to function or other service maybe - do we need different sounds for different events?
	$scope.$on('NEWJOB', function(event, payload) {
		// Nothing much to do here other than make a noise and refresh the jobs list
		notificationCount++;
		log.info(payload.platform+":"+event+':'+JSON.stringify(payload));

		refresh();

		// NOTE - not intuitive - if app is asked to play sound it has been done by the notification service
		// already so DO NOT do it again here
		if( !payload.playsound) {
			var notificationSnd = getSoundForPayload(payload);
			notificationSnd.play();
		}
	});

	$scope.$on('CANCEL', function(event, payload) {
		notificationCount++;
		log.info(payload.platform+":"+event+':'+JSON.stringify(payload));

		// Check For Cancellation and then delete job 
		if(typeof payload.data != "undefined") {

			// Belt and braces - we shouldn't get to the event handler if it's not a cancel
			if(payload.data.type == "CANCEL") {
				var baseJobNo = payload.data.baseJob;
				var bookingDay = payload.data.bookingDay || 0;

				// delete from local storage and resync - if we don't do this we get a conflict - don't know why
				deleteLegs(baseJobNo, bookingDay);

				if( !payload.playsound) {
					var notificationSnd = getSoundForPayload(payload);
					notificationSnd.play();
				}
			}
			else {
				// unknown payload type - just refresh
				refresh();
			}
		}
		else {
			// No specific payload data - just refresh
			refresh();
		}
	});

	function refresh() {
		syncfilter = angular.copy(_syncfilter);
		syncService.setCallingFunc("JobsIndexCtrl->PushNotificationReceived");
		syncService.hybridSync(onChange,syncfilter);
	}

	$scope.$on('RESUME', function(event) {
		// Nothing much to do here other than refresh the jobs list
		notificationCount++;

		$rootScope.syncInProgress = false;	// TODO - template buttons use this - should be checking syncService

		// In testing we managed to do a sync start, pause app, resume without sync finish
		// which then caused all buttons to be disabled and no more syncs to happen
		syncService.setSyncInProgress(false);		// not syncing now

		log.info("Received event:"+event.name+': calling refresh function');
		refresh();
	});

	function deleteLegs(baseJobNo, bookingDay) {
		var delfilter = {};

		if(pdaParams.jobDetailOneDayOnly && bookingDay > 0) {
			// convoluted (maybe) way to get job date with no hh/mm/ss into date object
			var year = Math.round(bookingDay/10000);
			var mon = Math.round((bookingDay % 10000) / 100);
			var day = Math.round((bookingDay % 100));

			var jobDateFilter = new Date();
			jobDateFilter.setUTCFullYear(year);
			jobDateFilter.setUTCMonth(mon-1);			// 0 - 11
			jobDateFilter.setUTCDate(day);
			// Dates are stored UTC so h/m/s all zero
			jobDateFilter.setUTCHours(0);
			jobDateFilter.setUTCMinutes(0);
			jobDateFilter.setUTCSeconds(0);
			jobDateFilter.setUTCMilliseconds(0);

			delfilter = { "where": {"mobjobBasejobNum": baseJobNo, "mobjobBookingDay": jobDateFilter} };
		}
		else {
			delfilter = { "where": {"mobjobBasejobNum": baseJobNo} };
		}
		log.debug("About to delete legs delfilter:"+JSON.stringify(delfilter));
		Job.find(delfilter, function (err, jobs) {

			var len = jobs.length;

			log.debug("deleting:"+len+" legs");

			for( var leg = 0; leg < len; leg++) {
				var job = jobs[leg];
				//console.log("delete job:" + job.mobjobSeq);
				log.debug("delete leg:"+leg+" job:" + job.mobjobSeq);
				job.delete();
			}

			// reset total and apply changes (no onChange function so not auto)
			getJobs();
		});
	}

	function getSoundForPayload(payload) {
		var platform = payload.platform;
		var evtype = payload.type;
		var sound = "";
		var notificationSnd = {};

		switch(platform) {
			case 'Android':
				sound = "/android_asset/www/audio/notification.mp3";
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
		};

		log.debug(platform+":"+evtype+":sound now:["+sound+"]");

		if( sound != "") {
			log.debug('sound:['+sound+']');
			notificationSnd = $cordovaMedia.newMedia(sound);
		}
		return notificationSnd;
	}

	$scope.sync = function () {

		//x=y;		// LOGTEST - testing - needs to be removed - let's cause an error - test new $log service functionality

		syncfilter = angular.copy(_syncfilter);
		if(pdaParams.jobdisplay)
			sync(syncfilter);
		else {
			syncService.setCallingFunc("JobsIndexCtrl->sync func");
			syncService.hybridSync(syncfilter);
		}
	};

	$scope.getwork = function () {
		//$window.location.reload();
		syncfilter = angular.copy(_syncfilter);
		sync(syncfilter);
	};

	$scope.connected = function () {
		return network.isConnected;
	};

	//$scope.syncing = function () {
		//return syncstatus.syncInProgress;
	//};

	//$scope.syncstatus = syncstatus.syncInProgress;

	$scope.connect = function () {
		network.isConnected = true;
		syncfilter = angular.copy(_syncfilter);
		sync(syncfilter);
	};

	$scope.disconnect = function () {
		network.isConnected = false;
	};

	$scope.reload = function () {

		// LOGTEST - testing logging
/*
		log.log('log - one parm');
		log.info('info', 'two parms');
		log.warn('warn - About to call getJobs()');
		log.debug('debug', 'This is a debug for line {0}', [ 8 ]);
		log.error('This is a {0} error! {1}', [ 'big', 'just kidding' ]);
*/

		getJobs(); //onChange();
	};

	$scope.clearLocalStorage = function() {
		localStorage.removeItem('osc-local-db');
	};

	function resolveCallBack(err) 
	{
		if(err)	
			log.debug('resolveCallBackErr:['+err+']');
		
	}

	// ] END - New code for syncing

	// removeDuplicates from: https://gist.github.com/lmfresneda/9158e06a93a819a78b30cc175573a8d3
	/**
	 * Remove duplicates from an array of objects in javascript
	 * @param arr - Array of objects
	 * @param prop - Property of each object to compare
	 * @returns {Array}
	 */
	function removeDuplicates( arr, prop ) {
	  var obj = {};
	  for ( var i = 0, len = arr.length; i < len; i++ ){
		if(!obj[arr[i][prop]]) obj[arr[i][prop]] = arr[i];
	  }
	  var newArr = [];
	  for ( var key in obj ) newArr.push(obj[key]);
	  return newArr;
	};

	// [ Conflict resolution 
	// We have to remove the 'conflicts' event listener when we leave this controller
	// otherwise the listener array will keep building up and trigger multiple times
	$scope.$on('$destroy', function() {
		Job.removeAllListeners('conflicts');
	});

	Job.on('conflicts', function (conflicts) {
		$scope.localConflicts = conflicts;

		log.error(conflicts.length+" conflicts:"+JSON.stringify(conflicts));

		var uconflicts = removeDuplicates( conflicts, 'modelId');
		log.debug(uconflicts.length+" uconflicts:"+JSON.stringify(uconflicts));

		conflicts.forEach(function (conflict) {

			conflict.type(function (err, type) {
				conflict.type = type;
				// This function appears to give us the model data (i.e. the Job) for the conflict
				conflict.models(function (err, source, target) {
					conflict.source = source;
					conflict.target = target;
					conflict.manual = new conflict.SourceModel(source || target);
					$scope.$apply();

					// log the conflict details
					log.error("conflicts: source:"+JSON.stringify(conflict.source));
					log.error("conflicts: target:"+JSON.stringify(conflict.target));

					// Maybe simply clobber the remote end with the local data
					// as resolveUsingSource doesn't appear to do what we want
					if(conflict.source) {
						log.error("conflicts: NOW CALLING RemoteJob.upsert()");
						RemoteJob.upsert(conflict.source, function(err,model) {
							if(err)
								log.error("upsert:error:"+JSON.stringify(err));
							if(model)
								log.info("upsert: model:"+JSON.stringify(model));
						});
					}

				});

				// This functions gives us change model data for the conflict e.g. prev/rev etc
				conflict.changes(function (err, source, target) {
					conflict.sourceChange = source;
					conflict.targetChange = target;

					var sourceType = conflict.sourceChange.type();
					var targetType = conflict.targetChange.type();

					// log the conflict details
					log.error("conflicts: source type:" +sourceType + ", sourceChange:"+JSON.stringify(conflict.sourceChange));
					log.error("conflicts: target type:" +targetType + ", targetChange:"+JSON.stringify(conflict.targetChange));

					// automatically resolve conflicts
					// If source is update and target is delete then a job has been completed
					// on the server and should no longer be on the client so auto resolve this
					// (we still don't know why this happens though, probably bad design on our part)
					if( sourceType == 'update' && targetType == 'delete') {
						//$scope.resolveUsingTarget(conflict);
						conflict.resolveUsingTarget(refreshConflicts);
					}
					else {
						//Override with what client has done
						log.error("conflicts: used to NOW CALLING RESOLVE USING SOURCE");
						//conflict.resolveUsingSource(refreshConflicts);

						//Redraw the screen
						//$scope.$apply();
					}
				});

			});

		});
	});

	$scope.resolveUsingSource = function (conflict) {
		//conflict.resolve(refreshConflicts);
		conflict.resolveUsingSource(refreshConflicts);
	};

	$scope.resolveUsingTarget = function (conflict) {
		if (conflict.targetChange.type() === 'delete') {
			conflict.SourceModel.deleteById(conflict.modelId, refreshConflicts);
		} else {
			var m = new conflict.SourceModel(conflict.target);
			m.save(refreshConflicts);
		}
	};

	$scope.resolveManually = function (conflict) {
		conflict.manual.save(function (err) {
			if (err) return errorCallback(err);
			conflict.resolve(refreshConflicts);
		});
	};

	function refreshConflicts(err) {
		if(err) {
			log.error("refreshConflicts:"+err);
		}
		$scope.localConflicts = [];
		$scope.$apply();
		syncfilter = angular.copy(_syncfilter);
		syncService.setCallingFunc("JobsIndexCtrl->refreshConflicts");
		syncService.hybridSync(onChange,syncfilter);
		//sync(syncfilter);
	};
	// ] Conflict resolution end

	$scope.full_sync_and_load = function() {
		localStorage.removeItem('osc-local-db');
		syncfilter = angular.copy(_syncfilter);
		sync(onChange,syncfilter);
	}


	$scope.multiAccept = function() {
		updateSelectedJobs('NJ');
	}

	$scope.multiPickup = function() {
		updateSelectedJobs('AC');
	}

	$scope.multiDepartPickup = function() {
		updateSelectedJobs('PU');				// PDA_FULL_STATUSES
	}

	function updateSelectedJobs(oldstatus) {
		var newstatus = 'XX';
		var syncRequired = 0;

		if(pdaParams.isDrvLoggedOff())
		{
			 var alertPopup = $ionicPopup.alert({
						title: 'Log On/Off Issue',
						template: "Please Log on to action jobs"
					});
			return;
		}
		// read all legs for this driver's jobs (no need to put into scope though?)
		var all_legs_filter = angular.copy(_allfilter);

		$rootScope.syncInProgress = syncService.getSyncInProgress();	// TODO - template buttons use this - should be checking syncService

		if(oldstatus === 'NJ')
			newstatus = 'AC';
		if(oldstatus === 'AC')
			newstatus = 'PU';
		if(oldstatus === 'PU')					// PDA_FULL_STATUSES
			newstatus = 'Dp';

		// This is async - TODO should we block?  how to handle this?
		Job.find(all_legs_filter, function (err, jobs) {
			var len = jobs.length;
			var logstr = '';

			// update many jobs at once from e.g. NJ -> AC, or AC -> PU
			// TODO - will need to only update selected jobs rather than all at a particular status
			// TODO - cater for multi leg jobs when selecting by click rather than all
		
			for (var i = 0; i < len; i++) {

				// TODO - check if specific job is selected via checkbox on screen
				var job = jobs[i];
				if( job.mobjobStatus === oldstatus && newstatus != 'XX') {
					job.mobjobStatus = newstatus;

					// Also set appropriate timestamp
					switch(job.mobjobStatus) {
						case 'AC':
							job.mobjobTimeAC = Date.now();
							break;
						case 'PU':
							job.mobjobTimePU = Date.now();
							var lgps = gpsAudit.getLastGPS();
							if(lgps) {
								job.gpsLatPU = lgps.gps_latitude;
								job.gpsLongPU = lgps.gps_longitude;
							}
							break;
						case 'Dp':
							job.mobjobTimeDp = Date.now();
							break;
					}

					job.save();

					logstr = 'updateSelectedJobs:' + job.mobjobSeq + ' updated from ' + oldstatus + ' -> ' + job.mobjobStatus;
					log.info(logstr);
					syncRequired++;
				}
			}

			// resync if required - updates server with status changes
			if(syncRequired) {
				syncfilter = angular.copy(_syncfilter);
				syncService.setCallingFunc("JobsIndexCtrl->updateSelectedJobs");
				syncService.hybridSync(onChange,syncfilter);
			}
			//$scope.$apply();
		});
	}

	/*
	 ***************************************************************
	 * Multiple deliveries with one signature
	 */
	$scope.accessor = {};			// empty object on scope to access signature directive
	$scope.checkedJobs = {};

	$scope.multiDeliver = function() {
		deliverSelectedJobs();
	}
	function deliverSelectedJobs() {
		$scope.checkedJobs = [];
		var len = $scope.jobs.length;
		if(pdaParams.isDrvLoggedOff())
		{
			 var alertPopup = $ionicPopup.alert({
						title: 'Log On/Off Issue',
						template: "Please Log on to action jobs"
					});
			return;
		}
		for (var i = 0; i < len; i++) {
			var job = $scope.jobs[i];
			log.debug("job:"+job.mobjobSeq+", checked:"+job.checked);
			if(job.checked) {
				$scope.checkedJobs.push({
										mobjobBasejobNum: job.mobjobBasejobNum,
										mobjobBookingDay: job.mobjobBookingDay,
										mobjobSeq: job.mobjobSeq
										});
			}
		}

		if( $scope.checkedJobs.length > 0) {
			// at least one job selected
			if($scope.accessor.openSignatureModal) {
				$scope.accessor.openSignatureModal();
			}
		}
	}
	$scope.signatureCallback = function(signat,podname) {

		if( $scope.checkedJobs.length > 0) {

			// So at this point we have a signature, a podname, and an array of 1 or more basejob numbers
			log.info("podname:"+podname);

			// get array of basejob no.s from object
			var baseJobs = $scope.checkedJobs.map(function(a) { return a.mobjobBasejobNum;});

			var basejobfilter =
				{
					"where": {and: 
								[
									{"mobjobDriver": pdaParams.getDriverId()},
									{"mobjobStatus": { "neq": "DL"}} ,
									{"mobjobBasejobNum": { "inq": baseJobs } }
								]
							},
					"order": 'mobjobSeq ASC'
				};

			Job.find(basejobfilter, function (err, jobs) {

				if(err) {
					log.error(err);
					return;
				}

				var len = jobs.length;
				var syncRequired = 0;
				var oldstatus = "";
				var checkedJobs = $scope.checkedJobs;

				var found = false;

				// so we have ALL jobs that matched base jobs selected - need to ensure date is valid selection too
				// for permaanent jobs can have same job no but different dates on device simultaneously
				for (var i = 0; i < len; i++) {
					var job = jobs[i];

					found = false;
					for( var j = 0; j < checkedJobs.length; j++) {
						if( checkedJobs[j].mobjobBasejobNum == job.mobjobBasejobNum &&
							checkedJobs[j].mobjobBookingDay.getTime() == job.mobjobBookingDay.getTime()) {
							found = true;	
							break;
						}
					}
					
					if( ! found) {
						continue;
					}

					oldstatus = job.mobjobStatus;

					job.mobjobStatus = 'DL';

					var lgps = gpsAudit.getLastGPS();
					if(lgps) {
						job.gpsLatDL = lgps.gps_latitude;
						job.gpsLongDL = lgps.gps_longitude;
					}

					if( job.mobjobLegNumber > 0)
					{
						job.mobjobSignat = signat || "";

						if(podname) {
							job.mobjobPodName = podname;
							job.mobjobPodTime = new Date().toISOString();
						}
					}

					job.save();

					logstr = 'deliverSelectedJobs:' + job.mobjobSeq + ' updated from ' + oldstatus + ' -> ' + job.mobjobStatus;
					log.info(logstr);

					syncRequired++;
				}

				if(syncRequired) {
					$rootScope.syncInProgress = true;
					syncService.setSyncInProgress(false);		// not syncing now
					syncfilter = angular.copy(_syncfilter);
					syncService.setCallingFunc("JobsIndexCtrl->deliverSelectedJobs");
					syncService.hybridSync(onChange,syncfilter);
				}
			});
		}
	}
	/*
	 ***************************************************************
	 */


		// LT - don't require this functionality atm
/*
	  var defaultActionButtons = [
	  	{ text: 'Show Event History', command: 'events'},
	  	{ text: 'Create a New Job', command: 'create'}
	  ];

		$scope.showActionSheet = function() {
			var buttons = util.copyObject(defaultActionButtons);
			$scope.showActionSheetBase("Actions from this Job List", buttons, function(command) {
				 	switch (command) {
				 		case "create":
				 			window.location.href = "#/tab/jobs/new";
				 			break;
				 		case "events":
				 			window.location.href = "#/tab/history";
				 			break;
				 	}
			}, false);
		};
*/
	  $scope.generateWadsHeader = function(job) {
		var output = 'WADS';

		output = 'Inv: '+ job.mobjobClientRef2 + ' - ' + job.mobjobJobPieces + ' ' + job.mobjobServiceCode ;
		return output;
	  };

	  $scope.generateJobHeader = function(item) {
			mystr = 'generateJobHeader';
			//log.debug(mystr);

			return $scope.generateHeaderForModelInstance(item, $rootScope.jobMetadata);
	  };

	  $scope.getModelMetadata(Job, "jobMetadata", function(metadata) {
	  	//onChange();
	  });

      $scope.exitTplusMobile = function() {

		  pushService.unRegister();
	      appService.exitTplusMobile();
      }

		$scope.clearReplicationData = function() {
			deleteJobChangeData( function( err, changeData) {
				if(err)
					log.error(err);
				if(changeData)
					log.debug(changeData);
			});
		}

	}
]);

