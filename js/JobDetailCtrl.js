angular.module('JobDetailCtrl', [])

.filter('debug', function() {
  return function(input) {
    if (input === '') return 'empty string';
    return input ? input : ('' + input);
  };
})

// For the View which is Displaying and Editing a Job or for the Creation of a new Job...
.controller('JobDetailCtrl', ['$rootScope', '$scope', '$state', 'Job', 'util', 'pdaParams','Logger','jobChangedService','$ionicPopup','siteConfig','jseaService','$ionicModal','LocalNote','job_note_sync','gpsAudit','$ionicPopup','imageService','imageFileService','navigationService','attachService','siteService',
	function($rootScope, $scope, $state, Job, util,pdaParams,Logger,jobChangedService,$ionicPopup,siteConfig,jseaService, $ionicModal,LocalNote,job_note_sync, gpsAudit, $ionicPopup, imageService, imageFileService,navigationService, attachService,siteService) {

	var logParams = { site: pdaParams.getSiteId(), driver: pdaParams.getDriverId(), fn: 'JobDetailCtrl'};
	var log = Logger.getInstance(logParams);
	var mystr;
	var basejob;
	var basejobDate;

	var testing = 0;

	// for button to take photos
	$scope.pdaImages = (pdaParams.pda_images || (siteConfig.getSiteConfigValue('PDA_IMAGES') == 'Y'));

	$scope.pdaNotes = (pdaParams.pda_notes || (siteConfig.getSiteConfigValue('PDA_NOTES') == 'Y'));

	// The following two are mutually exclusive so should never be set together - if they are we use depart pickup
	// signature on pickup
	$scope.pdaSignatOnPU = (pdaParams.pda_signat_on_pu || (siteConfig.getSiteConfigValue('PDA_SIGNATURE_PUP') == 'Y'));
	// signature on depart pickup
	$scope.pdaSignatOnDepPU = (pdaParams.pda_signat_on_dpu || (siteConfig.getSiteConfigValue('PDA_SIGNATURE_DPUP') == 'Y'));
	if($scope.pdaSignatOnDepPU && $scope.pdaSignatOnPU) {
		$scope.pdaSignatOnPU = false;
	}

	$scope.pdaAttachedDocs = (pdaParams.pda_attached_docs || (siteConfig.getSiteConfigValue('PDA_ATTACHED_DOCS') == 'Y'));
	$scope.serverIP = siteService.getServerIP();

	// separate delivery signature and delivery event
	$scope.pdaDiscreteDelSignat = (pdaParams.pda_discrete_del_signat || (siteConfig.getSiteConfigValue('PDA_DISCRETE_DEL_SIGNAT') == 'Y'));

	var multidelText = siteConfig.getSiteConfigValue('PDA_MULTIDEL_NOTE_TEXT');
	
	jobChangedService.setlastjobedited(false);

	$scope.bNewItem = false;		// Just looking at an existing Job by default


	/*
	 * New functionality to get arrive/depart pickup/delivery times
	 */
	$scope.fullStatuses = (pdaParams.pda_full_statuses || (siteConfig.getSiteConfigValue('PDA_FULL_STATUSES') == 'Y'));

	$scope.jseaPerJob = (jseaService.getJseaConfig() == 'PJB_CHECK' );			// CCT

	$scope.reqsNavigation = navigationService.reqNavigation;

	// Mandatory photos
	$scope.pdaMandatoryPhotos = pdaMandatoryPhotos = (pdaParams.pda_mandatory_photos || (siteConfig.getSiteConfigValue('PDA_MANDATORY_PHOTOS') == 'Y'));

	// Mandatory notes
	$scope.pdaMandatoryNotes = pdaMandatoryNotes = (pdaParams.pda_mandatory_notes || (siteConfig.getSiteConfigValue('PDA_MANDATORY_NOTES') == 'Y'));

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
				var jobDate = Math.floor($state.params.jobId / 100000000);		// e.g. 20160502
				var year = Math.round(jobDate/10000);
				var mon = Math.round((jobDate % 10000) / 100);
				var day = Math.round((jobDate % 100));


				var jobDateFilter = new Date(Date.UTC(year, mon-1, day, 0, 0, 0, 0));

				//Old code which we think is buggy
				// Caused a problem on 1st September 2016 prior to 10:00am AEST !!!
				// So the find did not return the job and so it went straight back to the jobs screen
				// Something to do with the way we create first then set?
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

			if(err) {
				log.error('Job.find:'+JSON.stringify(err));
				// back to main job tab
        		window.location.href = "#/tab/jobs";
        		return;
			}

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
			$scope.legs = results.length;
			$scope.jobs = results;

			// Check if last leg is at 'PC' status for discrete signature before delivery
			if( $scope.jobs[$scope.legs-1].mobjobStatus == 'PC')
				$scope.discreteDelSignat = true;
			else
				$scope.discreteDelSignat = false;

			if( $scope.discreteDelSignat && $scope.pdaDiscreteDelSignat) {
				$scope.showDelButtonNoSignat = true;			// used on template in ng-if
			}
		  
			//$scope.data = results;
			  $rootScope.job = $scope.job =  $scope.base.currentItem = results;
				// Isolate the Single Job and set the CurrentItem in the Base Class...

			  $scope.data = $scope.base.currentData = $scope.combineValuesAndLabels($scope.job, $rootScope.jobMetadata);
								// Set up the Metadata to control the Display of this Job...
								// Set base.currentData so Edits can be sensed...

				//var idscode = util.findArrayItemByKey($scope.data, "property", "mobjobServiceCode");
			//	console.log("Found Service code [" + JSON.stringify(idscode) + "]");

			  $scope.base.bDataChanged = false;  
					// No Data changed at this point...
          	$rootScope.tabHeader = $scope.generateJobHeader($scope.job);
          		// Generate a meaningful Header Title...

			// attachments
			if( $scope.pdaAttachedDocs) {
				attachService.getAttachments(results[0])
					.success(function(data) {
					$scope.attachments = data["filelist"];			// array of filenames
				})
				.error(function(err) {
					log.error('getAttachments: failed:'+JSON.stringify(err));
				});
			}
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


	$scope.doJseaSubType = function(formtype) {

			var job = $scope.job[0];
			var jobStatus;
			
			//formtype is MDEL or ODIM or JSEA

			basejob = job.mobjobNumber;
		 	basejobDate = job.mobjobBookingDay;
		
			if ( job.mobjobStatus == 'PU' || job.mobjobStatus == 'Dp')
				jobStatus = 'PICKUP';

			if ( $scope.job[0].mobjobStatus == 'Ad' )
				jobStatus = 'DELIVER';
				
			jseaService.setJobJseaDetails( basejob,basejobDate,'N',jobStatus,formtype,2);

			// if MULTIDEL prompt for notes prior to entering jsea details
			// designed to allow operator to enter address/suburb details
			// which will then appear on CCT's invoices to clients
			if(formtype == 'MULTIDEL') {
				// wait for the modal form to be closed before going to the next page
				$scope.$on('modal.hidden', function(event, modal) {
					// check if modal is defined - can get here on hide AND destroy events

					// TODO - if mandatory photos required need to take a photo here also
					if(pdaMandatoryPhotos && modal.id === 'enterNotes' && !modal._fromRemove) {
						// Photo button is currently a directive, uses imageService and imageFileService
						// puts takephoto() into scope so can call from here
						//$scope.takephoto(job.mobjobSeq);		// doesn't work
						//$scope.$broadcast('takePhoto',job.mobjobSeq);

						// Don't use directive but call a function here that uses the imageService
						takePhoto(job.mobjobSeq, job.mobjobNumber, job.mobjobStatus);
					}

					// Now get jsea details
					window.location.href = "#/tab/jseas";
				});
				$scope.enterNotes(job.mobjobSeq, multidelText, formtype);	// shows modal window
			}
			else {
				window.location.href = "#/tab/jseas";
			}
	}



    $scope.handleNavigation = function (legnum) {
        var job = $scope.job[legnum];

		// button is always visible - popup "not installed" message here if not configured
		if(!$scope.reqsNavigation) {
			var alertPopup = $ionicPopup.alert({
				title: 'Module not installed',
				template: 'This module is not installed, please contact your office'
			});
			alertPopup.then(function(res) {
				return;
			});

		} else {
	
			//var myaddr = job.mobjobClientName + ' ' + job.mobjobAddress1 + ' ' + job.mobjobSuburb;
			var myaddr = job.mobjobAddress2 + ' ' + job.mobjobSuburb;

			navigationService.registerJobDetails(job.mobjobNumber,job.mobjobBookingDay,myaddr);

			navigationService.navigate(myaddr);
		}
    }

	//The func below should only be called when a button is clicked EG 
	// Accept / Pickup / Tap to Sign 

	$scope.handleJobStatusChange = function(seqid,signat,podname) {

		// seqid id the mobjobSeq of the job that's just changed e.g. 2015123103038500
		mystr = 'handleJobStatusChange:seqid:'+seqid;
		log.debug(mystr);

		var jseaMaybeRequired = false;
		var wasPickup = false;
		var wasArriveDeliver = false;

		var dateTime = new Date().getTime();
		var timestamp = Math.floor(dateTime / 1000);

		// Loop thru this array and update the status on all legs of the job
		// $scope.jobs at this point contains all legs for one basejob
		
		var podCount = 0;
		var legCount = $scope.jobs.length;
//TESTING
		if(jseaService.getJseaConfig() == 'PJB_CHECK' )
		{
			basejob = $scope.job[0].mobjobNumber;
		 	basejobDate = $scope.job[0].mobjobBookingDay;
			jseaMaybeRequired = true;
		}
///END TESTING

		// If mandatory photos required check all legs to make sure at least one 
		// photo has been taken for the current status (anything > NJ)
		// NOTE - the image could be attached to any leg
		if(pdaMandatoryPhotos && window.cordova) {
			var found = false;
			// It's possible to have e.g. leg 0 @ Ad and leg 1 @ PC where the Ad photo
			// was taken on leg 1 so get status from 1st leg ( leg 0 PU)
			var jobStatus = $scope.jobs[0].mobjobStatus;	// get status from 1st leg (PU)
			for(var i = 0; i < legCount; i++) {
				var job = $scope.jobs[i];

				// long status text is stored in $scope.data
				statusString = getStatusString(seqid);

				if(job.mobjobStatus === 'NJ') {
					found = true;			// don't care about NJ
					break;
				}

				// [ v2.58.39 CCT test code - needs to be enabled when confirmed OK by CCT
				// Maybe the "don't care" statuses should be configurable?
				if(job.mobjobStatus === 'AC') {
					found = true;			// CCT don't care about AC
					break;
				}

				if(job.mobjobStatus === 'Dp') {
					found = true;			// CCT don't care about Dp
					break;
				}
				// ] v2.58.39 CCT test code end

				if( typeof job.imageCount !== 'undefined') {

					// We have some images - check if some for this status
					var obj = getCurrentStatusObj(jobStatus, job.imageCount) || {};
					if(obj.count > 0) {
						found = true;
						break;				// have at least one image
					}
				}
			}

			log.info('pdaMandatoryPhotos: seqid:'+seqid+', jobStatus:'+jobStatus+', found:'+found);
			
			if( !found) {
				// no images found - don't allow operator to continue
				var alertPopup = $ionicPopup.alert({
					title: 'No photos yet at '+statusString,
					template: "Please take at least one photo at this status before updating the job status"
				});
				alertPopup.then(function(res) {
					return;
				});

				return;		// the alert is async - return here while popup does its job
			}

		}

/*
		if($scope.jseaPerJob) {
			var job = $scope.jobs[0];
			var hasJsea = checkJseaForJob(job);
			if( !hasJsea) {
				return;
			}
		}
*/

		for( var iac = 0; iac < legCount; iac++)  
		{
			var job = $scope.jobs[iac];
			var oldStatus = job.mobjobStatus;
			
			// Don't need to match seqid just have this there for later when
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

					var lgps = gpsAudit.getLastGPS();
					if(lgps) {
						job.gpsLatPU = lgps.gps_latitude;
						job.gpsLongPU = lgps.gps_longitude;
					}

					if( job.mobjobLegNumber == 0) {
						// Possible signature on pickup
						job.mobjobSignat = signat || "";

						if(podname) {
							job.mobjobPodName = podname;
							job.mobjobPodTime = new Date().toISOString();
						}
					}
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
					wasPickup = true;

					job.mobjobStatus = 'PU';
					job.mobjobTimePU = Date.now();

					var lgps = gpsAudit.getLastGPS();
					if(lgps) {
						job.gpsLatPU = lgps.gps_latitude;
						job.gpsLongPU = lgps.gps_longitude;
					}

					if( job.mobjobLegNumber == 0) {
						// Possible signature on pickup
						job.mobjobSignat = signat || "";

						if(podname) {
							job.mobjobPodName = podname;
							job.mobjobPodTime = new Date().toISOString();
						}
					}
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

					if( job.mobjobLegNumber == 0) {
						// Possible signature on depart pickup
						job.mobjobSignat = signat || "";

						if(podname) {
							job.mobjobPodName = podname;
							job.mobjobPodTime = new Date().toISOString();
						}
					}
				}
				if ( oldStatus == 'Dp')
				{
					wasArriveDeliver = true;
					job.mobjobStatus = 'Ad';
					job.mobjobTimeAd = Date.now();
				}
				if ( oldStatus == 'Ad')
				{
					// PC processing - no direct route to DL now - will either be PU or PC until all pods captured
					if(!pdaParams.multileg)
					{
							// TODO - get GPS
						job.mobjobStatus = 'DL';

						var lgps = gpsAudit.getLastGPS();
						if(lgps) {
							job.gpsLatDL = lgps.gps_latitude;
							job.gpsLongDL = lgps.gps_longitude;
						}

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
					// if oldStatus is PC it means we've just captured a POD or, if there is 
					// a separate signature capture, it means we've just had a deliver event

					// If we want a separate PC (signature capture) and then a discrete DEL deliver event
					// don't increment podCount as we don't want to complete at this stage

					// If we were at 'PC' AND we have site config set AND discreteDelSignat is set
					// (last leg is at 'PC' status)
					// we do want to increment podCount because we do want to complete the job now
					if( $scope.pdaDiscreteDelSignat && !$scope.discreteDelSignat) {
						// do nothing
					}
					else
					if( $scope.showDelButtonNoSignat) {
						// CCT - we have a pod and have shown a discrete DELIVER button
						podCount++;
					}
					else {
						podCount++;			// normal default behaviour
					}
					log.debug('handleJobStatusChange: ' +job.mobjobSeq+ ' oldStatus:'+oldStatus+' showDelButtonNoSignat:'+$scope.showDelButtonNoSignat + ' podCount:' + podCount);
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
			// check for mandatory notes here before marking job DL
			if(pdaMandatoryNotes) {
				$scope.enterMandatoryNotes($scope.jobs[0].mobjobNumber, $scope.jobs[0].mobjobSeq);
			}

			for( var iac = 0; iac < legCount; iac++)
			{
				var job = $scope.jobs[iac];
				var oldStatus = job.mobjobStatus;
				// TODO - do we need this test?  or just update every leg regardless?
				if ( job.mobjobStatus == 'PU' || job.mobjobStatus == 'PC' || job.mobjobStatus == 'Ad')
				{
							// TODO - get GPS
					job.mobjobStatus = 'DL';

					var lgps = gpsAudit.getLastGPS();
					if(lgps) {
						job.gpsLatDL = lgps.gps_latitude;
						job.gpsLongDL = lgps.gps_longitude;
					}

					job.save();		// save leg

					mystr = 'handleJobStatusChange:DL' + job.mobjobSeq + ' updated from ' + oldStatus + ' -> ' + job.mobjobStatus;
					log.info(mystr);
					jobChangedService.setlastjobedited(true);
				}
			}
		}

		//If we are here then a Jsea Form is required for a job Pu and Del
		// So now check if is a pickup etc
		if(jseaMaybeRequired && (wasPickup || wasArriveDeliver))
		{
			var lstr;
			if(wasPickup)
				lstr = 'PICKUP';
			else
				lstr = 'DELIVER';
				
			jseaService.setJobJseaDetails( basejob,basejobDate,'N',lstr,'JSEA',1);

			window.location.href = "#/tab/jseas";
			return;
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

		// This is the "main" function that runs which will het the metadata for 'Job'
		// and then call getJob() in the callback which will retrieve the job leg details
		$scope.getModelMetadata(Job, "jobMetadata", function(metadata) {

			mystr = 'getModelMetadata';
			//log.debug(mystr);

			// Don't move forward until we get the Metadata...
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

		// ---------- text box for job notes -----------------
		function jnSyncCallback(err,conflicts) {
			if(err)
				log.error('jnSyncCallback: err:'+err);
			if(conflicts.length)
				log.error('jnSyncCallback: conflicts:'+conflicts);
		};

		$ionicModal.fromTemplateUrl('templates/notes.html', {
			scope: $scope,
			id: 'enterNotes'
		}).then(function(modal) {
			$scope.modal = modal;
			$scope.note = {};
			$scope.note.text = "";
		});

		$scope.clear = function () {
			$scope.note.text = "";
			//$scope.$apply();
		};

		//Cleanup the modal when we're done with it!
		$scope.$on('$destroy', function() {
			if(typeof $scope.note !== "undefined")
				$scope.note.text = "";
			if(typeof $scope.modal !== "undefined") {
				$scope.modal._fromRemove = true;
				$scope.modal.remove();
			}
		});

		$scope.enterNotes = function(seqid, placeholder, formtype) {
			// TODO - do we need to save seqid?  Should all be in $scope.job[0]
			$scope.note.seqid = seqid;
			$scope.placeholderText = placeholder || "Enter job notes here";
			$scope.note.formtype = formtype || "";
			$scope.modal.show();
		};

		$scope.save = function () {

			var seqid = $scope.note.seqid;
			var note = $scope.note.text;
			var ln = new LocalNote();

			ln.jnJobNum = $scope.job[0].mobjobNumber;
		 	ln.jnJobBday = $scope.job[0].mobjobBookingDay;
			// prepend formtype if set e.g. "MULTIDEL:...."
			if($scope.note.formtype)
				ln.jnText = $scope.note.formtype + ':' + $scope.note.text;
			else
				ln.jnText = $scope.note.text;
			ln.jnDriver = pdaParams.getDriverId();
			ln.jnCreateTime = Date.now();

			ln.save();
			
			job_note_sync(jnSyncCallback);

			$scope.note.text = "";
			$scope.modal.hide();
		};
		// ---------- text box for job notes -----------------

		// [ ---------- mandatory notes via popup --------------
		$scope.enterMandatoryNotes = function(jobNum, seqid) {
			// Had to create new scope to pass in to get this to work consistently
			var scope = $rootScope.$new(); scope.data = {};

			//return $ionicPopup.show({
			var myPopup = $ionicPopup.show({
				//template: '<textarea rows="4" cols="50" expanding-textarea ng-model="data.text" autofocus ></textarea>',
				templateUrl: 'templates/mandatory_notes.html',
				title: 'Enter job notes',
				subTitle: 'Job #'+jobNum,
				scope: scope,
				buttons: [
					{
						text: '<b>Save</b>',
						type: 'button-positive',
						onTap: function(e) {
							if (!scope.data.text) {
								//don't allow the user to close unless they enter something
								e.preventDefault();
							} else {
								return scope.data.text;
							}
						}
					}
				]
			});

			myPopup.then(function(res) {
				// this is where the notes come through when popup is closed
				// popup can only be closed if something has been entered
				//console.log('Tapped!', res);
				if(res) {
					var ln = new LocalNote();

					ln.jnJobNum = $scope.job[0].mobjobNumber;
					ln.jnJobBday = $scope.job[0].mobjobBookingDay;
					ln.jnText = res;
					ln.jnDriver = pdaParams.getDriverId();
					ln.jnCreateTime = Date.now();

					ln.save();
					
					job_note_sync(jnSyncCallback);

					$scope.note.text = "";
				}
			});
		}
		// ] ---------- mandatory notes via popup --------------

		// If we receive a cancel event for this job then inform operator
		// Already have event handler - see above (CANCEL)
/*
		$scope.$on('CANCEL', function(event, payload) {
			log.info(payload.platform+":"+event+':'+JSON.stringify(payload));

			// Check For Cancellation and then delete job 
			if(typeof payload.data != "undefined") {

				// Belt and braces - we shouldn't get to the event handler if it's not a cancel
				if(payload.data.type == "CANCEL") {
					var baseJobNo = payload.data.baseJob;
					var bookingDay = payload.data.bookingDay || 0;

					if( $scope.job[0].mobjobNumber === baseJobNo && $scope.job[0].mobjobBookingDay === bookingDay) {
						var alertPopup = $ionicPopup.alert({
							title: 'Job cancelled by base',
							template: 'Please do not make any changes.  Go to the main jobs screen for any updates'
						});
					}
				}
			}
		});
*/

		$scope.$on('imageSaved', function imageSaved(event,fileData) {
			// fileData contains image name and metadata with job no, legid, status
			log.debug('imageSaved:' + JSON.stringify(fileData));

			if(pdaMandatoryPhotos) {
				var legid = fileData.metadata.legid;		// id of leg of saved image
				var legStatus = fileData.metadata.legStatus;
				var jobs = event.currentScope.jobs;			// this scope's list of jobs (legs)
				var legCount = event.currentScope.jobs.length;

				// find our leg and update the image status count
				for(var i = 0; i < legCount; i++) {
				var job = jobs[i];

					if( legid == job.mobjobSeq) {
						if( typeof job.imageCount === 'undefined') {
							job.imageCount = [];		// create property if it doesn't exist yet (array of objects)
						}
						var obj = getCurrentStatusObj(legStatus, job.imageCount) || {};

						if(obj.count === 0)
							job.imageCount.push(obj);			// new array element
						obj.count ++;

						job.save();
					}
				}

			}
		});

		function getCurrentStatusObj(legStatus,imageCountArr){
			for(var i = 0; i < imageCountArr.length; i++) {
				if(imageCountArr[i].jobStatus === legStatus) {
					return imageCountArr[i];
				}
			}
			return {"jobStatus": legStatus, "count": 0};
		}

		function getStatusString(seqid) {
			var len = $scope.data.length;
			for(var i = 0; i < len; i++) {
				if($scope.data[i].legid === seqid && $scope.data[i].property === 'mobjobStatus') {
					return($scope.data[i].enumValue.label);
				}
			}
			return "";
		}

		$scope.checkOkForSignat = function (seqid) {
			// check if images taken at this status to allow signature to go ahead
			// This function is called from the signature pad directive and is therefore
			// in an isolate scope which means we don't have access to the local scope
			// in this controller.  We do have access to rootScope via this.$root

			var retval = true;			// default behaviour

			if(pdaMandatoryPhotos && window.cordova) {
				// this.$root.job contains the list of legs - 1st should match seqid
				log.debug("checkOkForSignat:pdaMandatoryPhotos: leg 0:"+this.$root.job[0].mobjobSeq+", seqid:"+seqid);
				if(this.$root.job[0].mobjobSeq === seqid) {

					retval = false;
					var jobStatus;
					var legCount = this.$root.job.length;

					for(var i = 0; i < legCount; i++) {
						var job = this.$root.job[i];

						jobStatus = job.mobjobStatus;
						// long status text is stored in $scope.data
						statusString = getStatusString(seqid);

						if(job.mobjobStatus === 'NJ') {
							retval = true;			// don't care about NJ
							break;
						}

						if( typeof job.imageCount !== 'undefined') {

							// We have some images - check if some for this status
							var obj = getCurrentStatusObj(job.mobjobStatus, job.imageCount) || {};
							if(obj.count > 0) {
								retval = true;
								break;				// have at least one image
							}
						}
					}
				}
				if( !retval) {
					// no images found - don't allow operator to continue
					var alertPopup = $ionicPopup.alert({
						title: 'No photos yet for '+statusString,
						template: "Please take at least one photo at this status before updating the job status"
					});
					alertPopup.then(function(res) {
						return retval;			// where will this return to?
					});

					return retval;		// the alert is async - return here while popup does its job
				}
			}

/*
			if($scope.jseaPerJob) {
				var job = $scope.jobs[0];
				var hasJsea = checkJseaForJob(job);
				if( !hasJsea) {
					retval = false;
				}
			}
*/

			return retval;
		};

		function checkJseaForJob(job) {
			var oldStatus = job.mobjobStatus;
			var key;
			var statusString;
			var retval = false;

			// If per job jseas make sure we have PICKUP/DELIVER jseas as appropriate
			if(oldStatus == 'PU' || oldStatus == 'Ad') {
				if(oldStatus == 'PU')
					statusString = 'PICKUP';
				else
					statusString = 'DELIVER';

				key = job.mobjobNumber + '-' + statusString;
				var lstr = localStorage.getItem(key);
				log.info('jseaPerJob: key:' + key + ', val:' +lstr);

				if( lstr && lstr === 'Y')
					retval = true;
				else
					retval = false;
			}
			else
				retval = true;			// jseas not required at other statuses
				
			if( !retval) {
				jseaService.setJobJseaDetails( job.mobjobNumber, job.mobjobBookingDay,'N',statusString,'JSEA',1);
				// no jsea found - don't allow operator to continue
				var alertPopup = $ionicPopup.alert({
					title: 'No JSEA for '+statusString,
					template: "Please enter JSEA before updating the job status"
				});
				alertPopup.then(function(res) {
					window.location.href = "#/tab/jseas";
					return retval;			// where will this return to?
				});

				return retval;		// the alert is async - return here while popup does its job
			}

			return retval;
		};

		function takePhoto(legid, basejob, jobstatus) {

			// function similar to that in imageCapture directive to take and store a photo
			// note that this is only for CCT atm and they don't require notes for photos
			imageService.takePhoto(legid).then(function(imageURI) {
				// image successfully captured by device

				// create metadata object with at least legid, basejob and legStatus properties
				// which are used on the remote endpoint for reference in job_mobile_events table
				var metadata = {
					legid : legid,
					basejob : basejob,
					legStatus : jobstatus
				};

				imageService.storeImageURI(legid, imageURI, metadata).then(function(fileData) {
					// image moved to app storage
					imageFileService.set(fileData.newFileName, 'notes', 'MULTIDEL');
					imageFileService.set(fileData.newFileName, 'readyForUpload', true);

					$scope.$emit('imageSaved',fileData);

				}, function (err) {
					alert(JSON.stringify(err));
				});

			}, function (err) {
				alert(JSON.stringify(err));
			});
		}
	}
])

