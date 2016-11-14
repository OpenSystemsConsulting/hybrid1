angular.module('JobDetailCtrl', [])

.filter('debug', function() {
  return function(input) {
    if (input === '') return 'empty string';
    return input ? input : ('' + input);
  };
})

// For the View which is Displaying and Editing a Job or for the Creation of a new Job...
.controller('JobDetailCtrl', ['$rootScope', '$scope', '$state', 'Job', 'util', 'pdaParams','Logger','jobChangedService','$ionicPopup','siteConfig','jseaService',
	function($rootScope, $scope, $state, Job, util,pdaParams,Logger,jobChangedService,$ionicPopup,siteConfig,jseaService) {

	var logParams = { site: pdaParams.getSiteId(), driver: pdaParams.getDriverId(), fn: 'JobDetailCtrl'};
	var log = Logger.getInstance(logParams);
	var mystr;

	var testing = 0;

	// for button to take photos
	$scope.pdaImages = (pdaParams.pda_images || (siteConfig.getSiteConfigValue('PDA_IMAGES') == 'Y'));

	jobChangedService.setlastjobedited(false);

	$scope.bNewItem = false;		// Just looking at an existing Job by default


	/*
	 * New functionality to get arrive/depart pickup/delivery times
	 */
	$scope.fullStatuses = (pdaParams.pda_full_statuses || (siteConfig.getSiteConfigValue('PDA_FULL_STATUSES') == 'Y'));

	function getJob() {
			mystr = 'getJob';

			if(pdaParams.debug)
				log.debug(mystr);

		if ($state.params.jobId === 'new') {
			// The Route URL for a new Job looks like: 'tab/jobs/new'
			return newJob();
		}


		var njobId;
		var legnum;
		var jobId;

		//var jobId = $state.params.jobId;	// A single Job to Display
		// e.g. 2015090900584500
		//njobId = $state.params.jobId % 10000000;	//Modulus 10 Million gives job num and leg num
		njobId = $state.params.jobId % 100000000;	//Modulus 100 Million gives job num and leg num - need to account for modded jobs

		legnum = njobId % 100;                   //Modulus 100 give leg num

        jobId = njobId / 100;                   //Divide by 100 gives job number taking off the leg number

		//var jobId = $state.params.jobId;


			// console.log("Steve Is Here  jobId = " + jobId + "]");
			//console.log("Dumping state.params [" +  JSON.stringify($state.params) + "]");
			var idProperty = util.findArrayItemByKey($rootScope.jobMetadata.properties, "id", true);
				// This is the Property tagged in the Metadata as being the "id" for a Job Item...


			/// Filter Was                    "where": {"mobjobSeq": jobId}
				//	"order": 'mobjobLegNumber ASC' 
                    //"where": {"mobjobBasejobNum": jobId}

			var filter = {"filter":
                  {
			        "where": {"mobjobBasejobNum": jobId},
					"order": 'mobjobLegNumber ASC' 
                  }
                };
			var localfilter = 
                  {
			        "where": {"mobjobBasejobNum": jobId},
					"order": 'mobjobLegNumber ASC' 
                };
      		// We are looking at ONE specific Job with id = jobId...

			/* LT - 02/09/2015 - NOTE - TODO - filter for multiple perm jobs
				This filter is not necessarily correct - e.g. in the case of permanent jobs
				it's possible to have 2 or more jobs with the same BasejobNum but for different
				days on the device.
				This should be fixed before production release
				NOTE - LT - 23/05/2016 - fixed - query one day only for job details is now default
			*/
			if(pdaParams.jobDetailOneDayOnly) {
				// convoluted (maybe) way to get job date with no hh/mm/ss into date object
				var jobDate = Math.round($state.params.jobId / 100000000);		// e.g. 20160502
				var year = Math.round(jobDate/10000);
				var mon = Math.round((jobDate % 10000) / 100);
				var day = Math.round((jobDate % 100));


				var jobDateFilter = new Date(Date.UTC(year, mon-1, day, 0, 0, 0, 0));

				//Old code which we think is buggy
				// Caused a problem on 1st September 2016 prior to 10:00am AEST !!!
				// So the find did not return the job and so it went straight back to the jobs screen
				// Something to do with the way we create then set?
				//var jobDateFilter = new Date();
				//jobDateFilter.setUTCFullYear(year);
				//jobDateFilter.setUTCMonth(mon-1);			// 0 - 11
				//jobDateFilter.setUTCDate(day);
				// Dates are stored UTC so h/m/s all zero
				//jobDateFilter.setUTCHours(0);
				//jobDateFilter.setUTCMinutes(0);
				//jobDateFilter.setUTCSeconds(0);
				//jobDateFilter.setUTCMilliseconds(0);

				var localfilter = 
					  {
						"where": {"mobjobBasejobNum": jobId, "mobjobBookingDay": jobDateFilter},
						"order": 'mobjobLegNumber ASC' 
					};
			}

/*
      Job.find(filter) 	// Method generated by the LoopBack Angular SDK
        .$promise
        .then(function(results)
*/
		Job.find(localfilter, function (err, results) {

        	if (results.length === 0) {
        		window.location.href = "#/tab/jobs";
        			// If no Jobs found, show them all...
        		return;
        	}
			if(pdaParams.isDrvLoggedOff())
			{
				window.location.href = "#/tab/jobs";                                                                                             
                    // If no Jobs found, show them all...                                                                                        
				 var alertPopup = $ionicPopup.alert({
                            title: 'Log On/Off Issue',
                            template: "Please Log on to action jobs"
                        });
                return;  
			}

	 		//console.log("Found " + results.length + " job legs");

		  //for(var i=0; i<results.length; i++)
		  
			$scope.jobs = results;
			//$scope.data = results;
			  $rootScope.job = $scope.job =  $scope.base.currentItem = results;
				// Isolate the Single Job and set the CurrentItem in the Base Class...

			

			if(jseaService.getJseaConfig() == 'PJB_CHECK' )
			{
				var ljob = $scope.jobs[0];
				
				if ( ljob.jseaCaptured == "N" || !ljob.jseaCaptured )
				{
					var ljobDate = Math.round($state.params.jobId / 100000000);
					
					log.debug('Perjob Jsea Check , job: ' + jobId + ' Date: ' + ljobDate + ' Captured = false');
					

					/*------------- ATTENTION ------------------*/

					//If first time into this job detail
					// then the service wont have the captured = True/Y so it will push the 
					// user to the Jsea Form
					// subsequent time the service will have been updated from the form submit
					// and we will save the job with a Y so no more checking


					/*---------- So DONT GET CONFUSED when you have just submitted a JSEA form --
					  -----------AND you have clicked the same job again and it stll has jseaCaptured == "N"
					  ----------- because it needs to check the service and then change to Y and save */

					if (jseaService.checkJobDateJseaCaptured(jobId,ljobDate) == true)
					{
						ljob.jseaCaptured = "Y";
						ljob.save();
					}
					else
					{
						jseaService.setJobJseaDetails( jobId,ljobDate,ljob.jseaCaptured);
						window.location.href = "#/tab/jseas";
						return;
					}
				}
			}

			  $scope.data = $scope.base.currentData = $scope.combineValuesAndLabels($scope.job, $rootScope.jobMetadata);
								// Set up the Metadata to control the Display of this Job...
								// Set base.currentData so Edits can be sensed...

			//	console.log("Steve Is Here [" + JSON.stringify($scope.data) + "]");

				//var idscode = util.findArrayItemByKey($scope.data, "property", "mobjobServiceCode");
			//	console.log("Found Service code [" + JSON.stringify(idscode) + "]");

			  $scope.base.bDataChanged = false;  
					// No Data changed at this point...
          	$rootScope.tabHeader = $scope.generateJobHeader($scope.job);
          		// Generate a meaningful Header Title...

			// LT - added to see if fixes slowness when retrieving job details
			//$scope.$apply();

        });
	  }

	  function newJob() {
			mystr = 'newJob';
			//log.debug(mystr);
  		$scope.bNewItem = true;	
  				// So the Save Button will ALWAYS Show

			//console.log("In New Job ");
			$scope.job = {};
			$scope.data = $scope.createNewItem($scope.job, $rootScope.jobMetadata);
					// An Empty Job with Defaults...

	  }


	//The func below should only be called when a button is clicked EG 
	// Accept / Pickup / Tap to Sign 

	$scope.handleJobStatusChange = function(seqid,signat,podname) {

			// seqid id the mobjobSeq of the job that's just changed e.g. 2015123103038500
			mystr = 'handleJobStatusChange:seqid:'+seqid;
			log.debug(mystr);

			//console.log("In handleJobStatusChange ");
			//console.log("In job =  ",seqid);
		
		var dateTime = new Date().getTime();
		var timestamp = Math.floor(dateTime / 1000);

		// Loop thru this array and update the status on all legs of the job
		// $scope.jobs at this point contains all legs for one basejob
		
		var podCount = 0;
		var legCount = $scope.jobs.length;
		for( var iac = 0; iac < legCount; iac++)  
		{
			var job = $scope.jobs[iac];
			var oldStatus = job.mobjobStatus;
			
			//DOnt need to match seqid just have this there for later when
			// we want to have individual signatures for each leg

			// we need to change PU to PC (pod captured) for each leg of a multi leg
			// job, and once all legs are PC we can the update all legs to DL

			if(pdaParams.multileg)
			{
				// Pod captured (PC) processing
				if (
					(! $scope.fullStatuses && job.mobjobStatus == 'PU')			// Std statuses -  NJ->AC->PU->DL
					||
					( $scope.fullStatuses && job.mobjobStatus == 'Ad')			// Full statuses - NJ->AC->PU->Dp->Ad->DL
				)
				{
					// Set pickup leg status only - don't store signature etc. on this leg
					// Can't let this fall thru below otherwise will become DL and not visible
/*
					if( job.mobjobLegNumber == 0)
						job.mobjobStatus = 'PC';		// pod captured
*/
					// If at least one POD mark leg 0 for access by templates etc. where we only have leg 0
					if( job.mobjobLegNumber == 0)
						job.mobjobHasPod = true;

					// Add POD for current leg only (not pickup leg 0)
					if (job.mobjobSeq == seqid && job.mobjobLegNumber > 0)
					{
						job.mobjobStatus = 'PC';		// pod captured
						job.mobjobSignat = signat || "";

						if(podname) {
							job.mobjobPodName = podname;
							job.mobjobPodTime = new Date().toISOString();
						}
					}

					// Single leg jobs do have a pod capture on leg 0 though - need to add signat to leg 1
					if (job.mobjobTotalLegs == 1 && job.mobjobLegNumber == 1)
					{
						job.mobjobStatus = 'PC';		// pod captured
						job.mobjobSignat = signat || "";

						if(podname) {
							job.mobjobPodName = podname;
							job.mobjobPodTime = new Date().toISOString();
						}
					}
				}
			}

			// Following block is for all legs
			// TODO - should this be a switch/case?
			var oldStatus = job.mobjobStatus;
			if( ! $scope.fullStatuses)			// Original Carry way NJ->AC->PU->DL
			{
				if ( oldStatus == 'NJ')
				{
					job.mobjobStatus = 'AC';
					job.mobjobTimeAC = Date.now();
				}
				else
				if ( oldStatus == 'AC')
				{
					job.mobjobStatus = 'PU';
					job.mobjobTimePU = Date.now();
				}
				else
				if ( oldStatus == 'PU')
				{
					// PC processing - no direct route to DL now - will either be PU or PC until all pods captured
					if(!pdaParams.multileg)
					{
						job.mobjobStatus = 'DL';

						// why did we store signature on pickup leg (leg 0)?
						if( job.mobjobLegNumber > 0)
						{
							job.mobjobSignat = signat || "";

							if(podname) {
								job.mobjobPodName = podname;
								job.mobjobPodTime = new Date().toISOString();
							}
						}
					}
				}
				else
				if ( oldStatus == 'PC')
				{
					podCount++;
				}
			}
			else			// $scope.fullStatuses - additional status steps NJ->AC->PU->Dp->Ad->DL
			{
/*
					// LT - trying to implement an associative array of timestamps so we don't have
					// to worry about adding new ones or changing them - we simply store all timestamps
					// in an array indexed by the status
					// Unfortunately this does not work with loopback/mongo after the first update
					// as we end up with a server error
					// {"error":{"name":"MongoError","status":500,"message":"unknown operator: $AC","index":0,"code":2,"errmsg":"unknown operator: $AC","stack":"MongoError: unknown operator: $AC\n    at toError (/app/strongloop/OSC-API/node_modules/loopback-connector-mongodb/node_modules/mongodb/lib/utils.js:113:11)\n    at /app/strongloop/OSC-API/node_modules/loopback-connector-mongodb/node_modules/mongodb/lib/collection.js:664:67\n    at /app/strongloop/OSC-API/node_modules/loopback-connector-mongodb/node_modules/mongodb/node_modules/mongodb-core/lib/topologies/server.js:795:13\n    at /app/strongloop/OSC-API/node_modules/loopback/node_modules/continuation-local-storage/context.js:76:17\n    at b (domain.js:184:18)\n    at Callbacks.emit (/app/strongloop/OSC-API/node_modules/loopback-connector-mongodb/node_modules/mongodb/node_modules/mongodb-core/lib/topologies/server.js:94:3)\n    at null.messageHandler (/app/strongloop/OSC-API/node_modules/loopback-connector-mongodb/node_modules/mongodb/node_modules/mongodb-core/lib/topologies/server.js:235:23)\n    at Socket.<anonymous> (/app/strongloop/OSC-API/node_modules/loopback-connector-mongodb/node_modules/mongodb/node_modules/mongodb-core/lib/connection/connection.js:259:22)\n    at Socket.emit (events.js:95:17)\n    at Socket.<anonymous> (_stream_readable.js:765:14)"}}
					// "mobjobStatusTstamp":{"AC":1470289287, "PU":1470289678}
					// I believe we may need to implement loopback's "embedsMany" concept to the models to get this to work
					// https://github.com/strongloop/loopback-example-relations
					// https://docs.strongloop.com/display/APIC/Embedded+models+and+relations#Embeddedmodelsandrelations-EmbedsMany
					if( ! job.mobjobStatusTstamp)
						job.mobjobStatusTstamp = {};
					job.mobjobStatusTstamp[job.mobjobStatus] = timestamp;
*/
/*
					var jobstatus = { status: job.mobjobStatus, tstamp: timestamp };
					job.mobjobStatusTstamp.create(jobstatus, function(err, jobstatus) {
						if(err)
							log.err("err:"+err);
					});
*/
				if ( oldStatus == 'NJ')
				{
					job.mobjobStatus = 'AC';
					job.mobjobTimeAC = Date.now();
				}
				else
/*
				if ( oldStatus == 'AC')
				{
					job.mobjobStatus = 'Ap';
					job.mobjobTimeAp = Date.now();
				}
				else
*/
				if ( oldStatus == 'AC')
				{
					job.mobjobStatus = 'PU';
					job.mobjobTimePU = Date.now();
				}
				else
				// Arrive pickup - not used atm
/*
				if ( oldStatus == 'Ap')
				{
					job.mobjobStatus = 'PU';
					job.mobjobTimePU = Date.now();
				}
				else
*/
				if ( oldStatus == 'PU')
				{
					job.mobjobStatus = 'Dp';
					job.mobjobTimeDp = Date.now();
				}
				if ( oldStatus == 'Dp')
				{
					job.mobjobStatus = 'Ad';
					job.mobjobTimeAd = Date.now();
				}
				if ( oldStatus == 'Ad')
				{
					// PC processing - no direct route to DL now - will either be PU or PC until all pods captured
					if(!pdaParams.multileg)
					{
						job.mobjobStatus = 'DL';

						// why did we store signature on pickup leg (leg 0)?
						if( job.mobjobLegNumber > 0)
						{
							job.mobjobSignat = signat || "";

							if(podname) {
								job.mobjobPodName = podname;
								job.mobjobPodTime = new Date().toISOString();
							}
						}
					}
				}
				else
				if ( oldStatus == 'PC')
				{
					podCount++;
				}
			}

			job.save();		// save leg

			mystr = 'handleJobStatusChange:' + job.mobjobSeq + ' updated from ' + oldStatus + ' -> ' + job.mobjobStatus;
			log.info(mystr);

			jobChangedService.setlastjobedited(true);
		}

		// NOTE - because we don't replicate between the very last PC and setting all to DL the last PC leg goes
		// direct from PU -> DL and therefore does NOT trigger a POD_INFORMATION event on the server

		// TODO - what is best test for all PODs captured?
		// if all PODs now captured update job to DL (all delivery legs have status PC so now job fully completed)
		if( podCount >= (legCount-1))
		{
			for( var iac = 0; iac < legCount; iac++)
			{
				var job = $scope.jobs[iac];
				var oldStatus = job.mobjobStatus;
				// TODO - do we need this test?  or just update every leg regardless?
				if ( job.mobjobStatus == 'PU' || job.mobjobStatus == 'PC' || job.mobjobStatus == 'Ad')
				{
					job.mobjobStatus = 'DL';
					job.save();		// save leg

					mystr = 'handleJobStatusChange:DL' + job.mobjobSeq + ' updated from ' + oldStatus + ' -> ' + job.mobjobStatus;
					log.info(mystr);
					jobChangedService.setlastjobedited(true);
				}
			}
		}

		// After save go back to job list
		window.location.href = "#/tab/jobs";
		return;
	 }
	
	$scope.deleteJob = function(seqid) {
		mystr = 'deleteJob';
		//log.debug(mystr);

		//console.log("deleteJob: seqid:", seqid);
		
		// delete all legs of current job
		for( var leg = 0; leg < $scope.jobs.length; leg++)  
		{
			var job = $scope.jobs[leg];
			job.delete();
		}
	}

		// LT - don't require this functionality atm
/*
	  var defaultActionButtons = [];
	  		// No Default Actions...

		$scope.showActionSheet = function() {
			var buttons = util.copyObject(defaultActionButtons);
			if (!$scope.bNewItem) {
		  	buttons.push({ text: 'Create a New Job', command: 'create'});
			}
			  	// You can add another Job from within the Context of another
			  	// Job...

			if ($scope.base.bDataChanged) {
				buttons.push({ text: "Save this Job", command: 'save' });
				buttons.push({ text: "Reverse Changes", command: 'reverse' });
					// Save or Reverse Changes if Changes have been made...
			}
			else {
				if ($scope.bNewItem) {
					buttons.push({ text: "Save this Job", command: 'save' });
						// Can always Save a New Job
				}
			}
			$scope.showActionSheetBase("Actions for this Job", buttons, function(command) {
			 		var idProperty = util.findArrayItemByKey($scope.data, "id", true);
				 	switch (command) {
				 		case "save":
				 			$scope.saveJob();
				 			break;
				 		case "create":
				 			window.location.href = "#/tab/jobs/new";
				 				// This same controller will do the right thing for a New Job
				 			break;
				 		case "reverse":
							$scope.data = $scope.combineValuesAndLabels($scope.job, $rootScope.jobMetadata);
							$scope.base.bDataChanged = false;
								// Just Prime the Metadata with the original loaded Job and mark it clean...
				 			break;
				 		case "delete":
					 		if (idProperty) {
					 			$scope.deleteItem(idProperty.value, Job, function(results) {
					 				window.location.href = "#/tab/jobs";
					 						// Show ALL Jobs after deleting one...
					 			})
					 		}
				 			break;
				 	}
			}, !$scope.bNewItem);
		}
*/

		$scope.addEvent = function() {

			mystr = 'addEvent';
			log.debug(mystr);

	 		var idProperty = util.findArrayItemByKey($scope.data, "id", true);
	 		if (idProperty) {
 				window.location.href = '#/tab/history/-1/' + idProperty.value + '-New';
 						// Just navigating to the route: "history/-1/{jobId}-New"
 						// will allow adding a new Event in this Job's Context...
	 		}
		}

		$scope.saveJob = function() {

			mystr = 'saveJob';
			log.debug(mystr);

 			$scope.updateItem($scope.job, $scope.data, Job, function(results) {
 				$scope.job = $scope.base.currentItem = results;
 					// The updated (or created) Job is in results...
 				$scope.base.bDataChanged = $scope.bNewItem = false;
 					// Can't be a New Item anymore and nothing has been changed as yet...

  			$scope.data = $scope.base.currentData = $scope.combineValuesAndLabels($scope.job, $rootScope.jobMetadata);
  				// Set up the Metadata and the Form will show the current state...
 			}, $scope.bNewItem)
		}

	  $scope.generateJobHeader = function(item) {
			mystr = 'generateJobHeader';
			
			if(pdaParams.debug)
				log.debug(mystr);

		    var interimitem = item[0];
			return $scope.generateHeaderForModelInstance(interimitem, $rootScope.jobMetadata);
	  		// A meaningful Header Title is generated...
	  }

  	$scope.getModelMetadata(Job, "jobMetadata", function(metadata) {

		mystr = 'getModelMetadata';
		//log.debug(mystr);

  		// Don't move forward until we get the Metadata...
	 	//console.log("Steve Is Here ");
		if(testing < 1)
			getJob();
  	});

	$scope.$on('CANCEL', function(event, payload) {

		log.info('Received a CANCEL event');
		log.info(payload.platform+":"+event+':'+JSON.stringify(payload));

		if(typeof payload.data != "undefined") {

			if(payload.data.type == "CANCEL") {
				var alertPopup = $ionicPopup.alert({
					title: 'Job Cancellation',
					template: 'A Job has Been Cancelled by Base - resyncing.'
				});

				alertPopup.then(function(res) {
					window.location.href = "#/tab/jobs"
				});
				
			}
			else
				log.info('payload.data.type <> Cancel, help !!!!');
		}
		else {
			log.info('payload.data = undefined, help !!!!');
		}
	});



	}
])

