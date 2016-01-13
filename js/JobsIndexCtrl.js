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

// A simple controller that fetches a list of data from a service
.controller('JobsIndexCtrl', ['$rootScope', '$scope', '$window', '$state', 'Job', 'util', 'sync', 'network', 'pdaParams','appService','pushService', '$ionicPopup','Logger','syncService','messageService','Idle','deleteChangeData',
	function($rootScope, $scope, $window , $state, Job, util, sync, network, pdaParams,appService,pushService, $ionicPopup, Logger, syncService, messageService,Idle,deleteChangeData) {

	$scope.jobs = [];

	var logParams = { site: pdaParams.getSiteId(), driver: pdaParams.getDriverId(), fn: 'JobsIndexCtrl'};
	var log = Logger.getInstance(logParams);

	var notificationCount = 0;
	//Idle.watch();						// TODO - idle - check if idle and maybe auto refresh
	$rootScope.syncInProgress = false;

	// initialise the current new message count in this scope
	$scope.newMessageCount = messageService.getNewMesssageCount();
	// and then monitor for any new messages coming in
	$rootScope.$on('messageToDriver', function(event, payload){
		$scope.newMessageCount = messageService.getNewMesssageCount();
	});

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
	var syncfilter = angular.copy(_syncfilter);


/*
	  var filter = {"filter":
                  {
                    "where": {and: [{"mobjobDriver": 1}, {"mobjobLegNumber": 0}]}
                  }
                };
*/
/*
	  var _filter = 
                  {
                    "where": {and: [{"mobjobDriver": pdaParams.getDriverId()}, {"mobjobLegNumber": 0},{"mobjobStatus": { "inq": ["UJ","NJ","AC","PU"] } } ]},
					"order": 'mobjobStatus DESC'
                  };
*/
	  var _filter = 
                  {
                    "where": {and: [{"mobjobDriver": pdaParams.getDriverId()}, {"mobjobLegNumber": 0},{"mobjobStatus": { "neq": "DL"}} ]},
					"order": 'mobjobStatus DESC'
                  };
	var filter = angular.copy(_filter);

/*
	  function getJobs() {
		
		  filter = angular.copy(_filter);
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
		filter = angular.copy(_filter);
		Job.find(filter, function (err, jobs) {
			//console.log(err);
			//console.log(jobs);

			// TODO - need to check error and only show jobs if no error
			$scope.jobs = jobs;

			for (var i = 0; i < $scope.jobs.length; i++) {
				$scope.convertDates($scope.jobs[i], $rootScope.jobMetadata);

					var job = $scope.jobs[i];
					if( job.mobjobStatus == 'UJ') {
						job.mobjobStatus = 'NJ';
						job.onDeviceTime = new Date().toISOString();
						job.save();
					}
			}

			$scope.titleWithTotal = "Jobs " + " (" + $scope.jobs.length + ")";

			$scope.$apply();
		});
	}

	// [ START - New code for syncing

	function onChange(err, conflicts) {
		if(err)
			console.log(err);
		if(conflicts)
			console.log(conflicts);

		$rootScope.syncInProgress = false;
		log.debug("SYNC: FINISH");

		// We were getting the following error.  Where does the order come from?  reset filter here for now
		// Error: The order {"key":"mobjobSeq","reverse":1} is not valid
		filter = angular.copy(_filter);

		// Job.find() retrieves from LocalJob
		Job.find(filter, function (err, jobs) {
			//console.log(err);
			//console.log(jobs);


			syncService.setSyncInProgress(false);

			// TODO - should this be here?
			pushService.registerForPush();

			// TODO - need to check error and only show jobs if no error
			$scope.jobs = jobs;

			var syncRequired = 0;

		      for (var i = 0; i < $scope.jobs.length; i++) {
		      	$scope.convertDates($scope.jobs[i], $rootScope.jobMetadata);

					var job = $scope.jobs[i];
					if( job.mobjobStatus == 'UJ') {
						job.mobjobStatus = 'NJ';
						job.onDeviceTime = new Date().toISOString();
						job.save();
						syncRequired++;
					}
			}
			if(syncRequired) {
				syncfilter = angular.copy(_syncfilter);
				if(pdaParams.jobdisplay)
					sync(syncfilter);
				else {
					syncService.setCallingFunc("JobsIndexCtrl->Job.find");
					syncService.hybridSync(onChange,syncfilter);
				}
			}

		      		// Show Dates in a shortened format...

		      $scope.titleWithTotal = "Jobs " + " (" + $scope.jobs.length + ")";

			$scope.$apply();
		});
	}

	// sync the initial data
	if(network.isConnected) {
		// maybe getJobs() which will load from local storage while we wait for the sync to happen
		// Should improve perceived response times when server/network is slow to return
		if(pdaParams.jobdisplay)
			getJobs();

		// if we are connected to the network then this will sync and the callback will load the jobs after sync
		log.debug("SYNC: START");
		$rootScope.syncInProgress = true;
		syncfilter = angular.copy(_syncfilter);
		sync(onChange,syncfilter);
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


	$scope.$on('pushNotificationReceived', function(event, notification) {
		notificationCount++;

		switch(notification.event) {
		case 'message':
			//console.log('JobsIndexCtrl:notificationCount:'+notificationCount+', notification.message:' + notification.message );

			// notification.message is a string
			// notification.payload is a JSON object - not always supplied

			var message = notification.message;
			// TODO - double payload - can we make this more logical?
			var payload = notification.payload.payload || {};

			// TODO - If payload is an empty object this causes an exception (so no data or type)

			// TODO - we should store messages (maybe last x) to be viewed by driver

			// Check For Cancellation and then delete job 
			if(typeof payload.data != "undefined") {

				// if we have a payload then do something with it
				if(payload.data.type == "CANCEL") {
					var baseJobNo = payload.data.baseJob;
					var msgText = message;
					//console.log('type:' + payload.data.type + ', baseJobNo:' + baseJobNo + ', msgText:' + msgText );

					// delete from local storage and resync - if we don't do this we get a conflict - don't know why
/*
					var delfilter = 
						{ "filter":
							{ "where": {and: [{"mobjobDriver": pdaParams.getDriverId()}, {"mobjobBasejobNum": baseJobNo}] } }
						};
*/
					var delfilter = { "where": {"mobjobBasejobNum": baseJobNo} };
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
				else {
					syncfilter = angular.copy(_syncfilter);
					if(pdaParams.jobdisplay)
						sync(onChange,syncfilter);
					else {
						syncService.setCallingFunc("JobsIndexCtrl->PushNotificationReceived");
						syncService.hybridSync(onChange,syncfilter);
					}
				}
			}
			else {
				// No specific payload data - just refresh
				syncfilter = angular.copy(_syncfilter);
				if(pdaParams.jobdisplay)
					sync(onChange,syncfilter);
				else {
					syncService.setCallingFunc("JobsIndexCtrl->PushNotificationReceived");
					syncService.hybridSync(onChange,syncfilter);
				}
			}
		    break;

		default:
			log.info("Unhandled notification.event:"+notification.event);
			break;
		}
	});

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

	// [ Conflict resolution 
	Job.on('conflicts', function (conflicts) {
		$scope.localConflicts = conflicts;

		log.error("conflicts:"+JSON.stringify(conflicts));

		conflicts.forEach(function (conflict) {

			conflict.type(function (err, type) {
				conflict.type = type;
				conflict.models(function (err, source, target) {
					conflict.source = source;
					conflict.target = target;
					conflict.manual = new conflict.SourceModel(source || target);
					$scope.$apply();

					// log the conflict details
					log.error("conflicts: source:"+JSON.stringify(conflict.source));
					log.error("conflicts: target:"+JSON.stringify(conflict.target));

				});
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
						$scope.resolveUsingTarget(conflict);
					}
					else {
						// For now still show these ones
						$scope.$apply();
					}
				});

			});

		});
	});

	$scope.resolveUsingSource = function (conflict) {
		conflict.resolve(refreshConflicts);
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

	function refreshConflicts() {
		$scope.localConflicts = [];
		$scope.$apply();
		syncfilter = angular.copy(_syncfilter);
		sync(syncfilter);
	};
	// ] Conflict resolution end

	$scope.clearLocalStorage = function() {
		localStorage.removeItem('osc-local-db');
	};

	// ] END - New code for syncing

	$scope.full_sync_and_load = function() {
		localStorage.removeItem('osc-local-db');
		syncfilter = angular.copy(_syncfilter);
		sync(onChange,syncfilter);
	}

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
			deleteChangeData( function( err, changeData) {
				if(err)
					log.error(err);
				if(changeData)
					log.debug(changeData);
			});
		}
	}
]);

