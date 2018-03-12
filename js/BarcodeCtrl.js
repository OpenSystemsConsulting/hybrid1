'use strict';

angular.module('BarcodeCtrl', [])
.controller('BarcodeCtrl', [ '$rootScope', '$scope', '$cordovaBarcodeScanner', 'cordovaReady', 'Logger', 'pdaParams', '$ionicPopup','BarcodeHist','LocalBarcodeHist','barcode_sync', 'Job', '$cordovaDevice','barcodeService','siteConfig','pda_barcodes','$window',
	function ($rootScope, $scope, $cordovaBarcodeScanner, cordovaReady, Logger, pdaParams,$ionicPopup,BarcodeHist,LocalBarcodeHist,barcode_sync, Job, $cordovaDevice, barcodeService,siteConfig,pda_barcodes,$window ) {

		var logParams = { site: pdaParams.getSiteId(), driver: pdaParams.getDriverId(), fn: 'BarcodeCtrl'};
		var log = Logger.getInstance(logParams);
		var saveok = false;
		var bcode;
		var useCamera = true;
		var useCipherlab = false;

		var myBcodeIsjobNum = false;
		var my_scan_session_type;
		var my_is_scan_on = true;
		var matchedJobsPieces = 0;

		if(pda_barcodes != 'Y') {
            var alertPopup = $ionicPopup.alert({
                title: 'Module not installed',
                template: 'This module is not installed.'
            });

            alertPopup.then(function(res) {
				$window.history.back();
				//window.location.href = "#/tab/jobs"
            });
        } else {

			// TEST - check site config
			siteConfig.getSiteConfigYN('BARCODE_SUPP_BCODEISJOBNUM').then(function(YN) {
				if ( YN === "Y" )
				{
					myBcodeIsjobNum = true;
				}
				else
				{
					myBcodeIsjobNum = false;
				}


				if( pdaParams.isDrvLoggedOn() == false )
				{
					var ltitle = 'ERROR';
					var lmes = 'You are not logged in please do so first from the jobs screen';
							
					//alert(lmes);

					var alertPopup = $ionicPopup.alert({
						title: ltitle,
						template: lmes
					});

					alertPopup.then(function(res) {
						window.location.href = "#/tab/jobs"
					});
					return;
				}


				matchedJobsPieces = 0;
				$scope.jobsPieces = matchedJobsPieces;
				var myPopup = $ionicPopup.show({
					title: 'Determine SCAN Type',
					subTitle: 'Please choose what SCAN type you are performing',
					scope: $scope,
					buttons: [
					  { 
						text: 'SCAN ON', 
						type: 'button-balanced',
						onTap: function(e) {
							log.debug("Choosing Scan type: Chose SCAN ON !!!");
							my_scan_session_type = 'SCAN ON SESSION';
							$scope.scan_session_id = my_scan_session_type;
							my_is_scan_on = true;
						}
					  },
					  {
						text: 'SCAN OFF',
						type: 'button-positive',
						onTap: function(e) {
							log.debug("Choosing Scan type: Chose SCAN OFF !!!");
							my_scan_session_type = 'SCAN OFF SESSION';
							$scope.scan_session_id = my_scan_session_type;
							my_is_scan_on = false;
						}
					  }
					]
				});

	/**
				function strncmp(a, b, length) {
					a = a.substring(0, length);
					b = b.substring(0, length);
					return a == b;
				}
	**/
				function strncmp(str1, str2, n) {
					str1 = str1.substring(0, n);
					str2 = str2.substring(0, n);
					return ( ( str1 == str2 ) ? 0 :
								  (( str1 > str2 ) ? 1 : -1 ));
				}


				var barcodes = [];

				$scope.barcodes = barcodes ;

				if( cordovaReady.isready) {
					var model =  $cordovaDevice.getModel();
					log.debug("Device Model = " + model);
					if( model == 'CipherLab RS30')
					{
						log.debug("Device is a CipherLab RS30 " + model);
						useCamera = false;
						useCipherlab = true;
					}
					else
					{
						log.debug("Device is NOT !!!! a CipherLab RS30 HEAD scanning NOT Available " + model);
						useCamera = true;
					}
				}

				/*========================================*/
				/*        CAMMERA SCAN                    */
				/*========================================*/
				$scope.scan = function () {

					if( cordovaReady.isready) {

						useCamera = true;
						useCipherlab = false;
						$cordovaBarcodeScanner
						  .scan()
						  .then(function(barcodeData) {
							// Success! Barcode data is here
							// Returns object e.g.: {text: "053329109558", format: "UPC_A", cancelled: false}
							barcodes.push(barcodeData.text);

							log.debug('CAMERA scanned OK: barcodeData:'+barcodeData);
							
						  }, function(error) {
							// An error occurred
							log.debug('CAMERA BAD scan : error:'+ error);
						  })

					}
					else {
						var ltitle = 'ERROR';
						var lmes = 'CAMERA: cordova NOT ready';
								
						//alert(lmes);

						var alertPopup = $ionicPopup.alert({
							title: ltitle,
							template: lmes
						});
						return;
					}
					
				};



				/*========================================*/
				/*         Init and Set callback */
				/*========================================*/

			  
				if( cordovaReady.isready) {
					if( useCipherlab )
					{
						cordova.plugins.CipherlabRS30CordovaPlugin.initialise(function () {
					
						   // append("init done");
																																											  
							cordova.plugins.CipherlabRS30CordovaPlugin.setReceiveScanCallback(function (data) {                                                               
								//append("scan received: " + data);                                                                                                             
								log.debug("Cipherlab Callback called scanned = [" + data + "]");
								barcodes.push(data);
								$scope.$apply();
							});                                                                                                                                               
						});                                                                                                                                                   
					}
				}

				window.onbeforeunload = function () {                                                                                                                 
					log.debug('BarcodeCtrl: onBeforeUnload');
				}                                                                                                                                                     
																																									  

				/*========================================*/
				/*        SCAN SESSION CANCEL   */
				/*========================================*/
				$scope.scanCancel = function () {

					var confirmPopup = $ionicPopup.confirm({
					title: 'CANCEL Scan Session',
					template: 'Are you sure you want to CANCEL this scan session (You will lose all data scanned)?'
					});

					confirmPopup.then(function(res) {
						if(res) {
							log.debug('User has Cancelled the scan session');

							if( cordovaReady.isready) {
								if( useCipherlab )
								{
									cordova.plugins.CipherlabRS30CordovaPlugin.destroy(function () { }); 
								}
							}
							barcodes = [];
							//$scope.apply();

							// go back to job list
							window.location.href = "#/tab/jobs";
							return; 
							
						} else {
							log.debug('User has CANCELLED out of a Scan session CANCEL');
						}
					});
					
				}


				$scope.barcodeSigSaveCallback = function(seqid,signat,podname) {

					// seqid id the mobjobSeq of the job that's just changed e.g. 2015123103038500
					var mystr = 'barcodeSigSaveCallback';
					log.debug(mystr);

					confirmscanSubmit(signat,podname);
					
				};

				var finishSubmit = function(foundJob,syncRequired)
				{

					if ( foundJob == false )
					{
						log.info("Been through all barcodes and Jobs and NOT FOUND CONNOTE ON ANY JOB ");
					}
					if(syncRequired)
					{
						barcode_sync();
						barcodeService.setSyncRequired(true);
						barcodes = [];
					}

					if( cordovaReady.isready) {
						if( useCipherlab )
						{
							cordova.plugins.CipherlabRS30CordovaPlugin.destroy(function () { }); 
						}
					}

					window.location.href = "#/tab/jobs";
				}

				var doSubmitWork = function(jobs,signat,podname)
				{
					var syncRequired = 0;
					var foundJob = false;
					var foundIdx = 0;
					var foundJobNum;
					var foundJobDate;
					var fjobarr = new Array();

					matchedJobsPieces = 0;
					//var bchSession = new BarcodeHist();
					//This is where we will do a new of barcode_hist
					// then fill in the details of the Barcode
					// then do a create

					//Need to do a barcode_hist.save method so we use the sync service.	
						
					//barcodes.push('0116061500202001');
					//barcodes.push('0116061500202002');
					//barcodes.push('0djkhaskdjhaskd');

					// A confirm dialog
					var len = barcodes.length;

					log.debug("Searching on " + len + " Barcodes across all Jobs");

					for( var i = 0 ; i < len; i++)
					{
						//Set up a unique number
						var d = new Date(); 
						var uniqId = d.getTime();
						var bchSession = new LocalBarcodeHist();

						bchSession.bchSeq = uniqId % 1000000;
						bchSession.driver =  pdaParams.getDriverId();

						/*
						 * NOTE - BEWARE - TODO - needs checking on latest loopback
						 * There appears to be a bug somewhere in loopback and/or strong-remoting
						 * which causes a long numeric only string to be rounded on the remote end
						 * (i.e. it's being treated as a number even though the data type is defined as a string)
						 * So barcode: "5318723999092380192" within the app local storage
						 * becomes:    "5318723999092381000" on the remote end
						 */
						bchSession.bchBarcode = barcodes[i]; 
						bcode = bchSession.bchBarcode;
				
						log.debug("Looking for BCODE [" + bcode + "] across all Jobs");
						
						bchSession.bchTimestamp = d;
						var oset = d.getTimezoneOffset();

						bchSession.bchTimestamp += (oset * -1)  * 60  * 1000;
						//Always Zero for a Scan on 
						bchSession.bchTimestamp = new Date().toISOString();


						if ( my_is_scan_on )
						{
							bchSession.bchJobno = 0;
							bchSession.bchJobdate = new Date().toISOString();
							bchSession.bchEvent = 'SCAN ON';
						}
						else
						{
							//We need to get these from a Job
							bchSession.bchEvent = 'SCAN OFF';

							/****************************************************************/
							/* Go Thru the list of jobs that are Picked up and comare their */
							/* connote number against the barcode and when matches thats the*/
							/* Job to finish off                                            */
							/****************************************************************/

							log.debug("Looking across " + jobs.length + " JOBS");
							for (var x = 0; x < jobs.length; x++) {
									var job = jobs[x];
									var dstring;
									var myconnote_num;

									

									//Only do this for the first leg as the others are not usefull
									if(job.mobjobLegNumber == 0 )
									{	
										var jn = job.mobjobNumber;

										if(myBcodeIsjobNum)
										{
											//==== DATE HANDLING to get the connotenum to something like
											//============= 1160615002020 ===========================

											var fy = job.mobjobBookingDay.getFullYear() % 100;	
											var dm = job.mobjobBookingDay.getDate() * 1;	
											var mi = job.mobjobBookingDay.getMonth() + 1;
											
											//The  leading zero is due to the barcode that gets generate dneeding to
											//Be an even number
											dstring = "01" + fy + ((mi < 10) ? ("0" + mi) : mi)  + ((dm < 10) ? ("0" + dm) : dm);	
											
											jn = (jn < 100000 && jn > 9999) ? ("0" + jn) : jn;
											jn = (jn < 10000) ? ("00" + jn) : jn;
											myconnote_num = dstring + jn;
										}
										else
										{
											//Connote num stored here
											myconnote_num = job.mobjobAddrExtras;
										}

										bchSession.bchEventSubtype  = 'N/A';

										log.debug("Before checking Barcode against Job: " + job.mobjobNumber + " JobsConnoteNumber: "+  myconnote_num + ' Barcode: ' + bcode);

										if( typeof myconnote_num !== 'undefined') {
											//Only Compare the length of myconnote_num eg so if Bcode was WXLGHHH01 and myconn is WXLGHHH then OK
											if( myconnote_num.length > 1 && strncmp(myconnote_num,bcode,myconnote_num.length) == 0)
											{
												log.debug('Scan OFF FOUND Barcode on Job:'+ jn + " On Date " + myconnote_num);
												//window.location.href = '#/tab/jobs/' + job.mobjobSeq ;

												foundJob = true;
												//Should store the Pickup Leg of the Found Job
												foundIdx = x;
												foundJobNum = job.mobjobNumber;
												foundJobDate = job.mobjobBookingDay;
												matchedJobsPieces += job.mobjobJobPieces;
												$scope.JobsPieces = matchedJobsPieces;

												bchSession.bchJobno = foundJobNum;
												bchSession.bchJobdate = foundJobDate;
												log.debug('Scan OFF recording JOb Index ' + foundIdx  + 'Pieces now = ' + matchedJobsPieces);

												fjobarr.push(foundIdx);
												break; // No need to keep looking we have found the job for this barcode

		/***
												if( false)  //job.mobjobJobPieces != len )
												{
										
													var OverUnderPopup = $ionicPopup.confirm({
													title: 'Overs/Unders',
													template: 'The Job you have scanned off has a different number of items (' + job.mobjobPieces + ')  to the number you scanned (' + len  + '), Ignore ?'
													});

													OverUnderPopup.then(function(res) {

													if(res) {
														log.debug('User has chosen to ignore the scan diff Scanned (' + len + ') Job Pieces (' + job.mobjobPieces + ') Will save and Sync regardless');
													} else {                                                                                                                                                                    
														log.debug('User has chosen to NOT ACCEPT the scan diff Scanned (' + len + ') Job Pieces (' + job.mobjobPieces + ') No Save !!  No Sync');                                                                                             
														return;                                                                                                                                                                 
													}                                                                                                                                                                           
													});                          
												}
		***/

											}
										}
										else {
											log.error("Error: myconnote_num:"+myconnote_num);
										}
									}
							}

							if ( foundJob == false )
							{
								bchSession.bchEventSubtype  = 'ORPHAN';
							}

						}
						log.info("About to save Barcode Hist Session for barcode " + JSON.stringify(bchSession));
						bchSession.save();				
						syncRequired++;
					 }

			
					 //Go through Jobs and attach signat and PODNAME where required

					 if( my_is_scan_on == false )  //ONLY FOR SCAN OFF
					 {
						 log.debug('Doing Job update for SCAN OFF Job foundJob = ' + foundJob);
						 if( foundJob )
						 {
							var fjobnum = 0;
							//Should Do the 
							
							//The list can array may have matched the same job number multiple times
							var uniquearr = fjobarr.filter(function(item, i, ar){ return ar.indexOf(item) === i; });

							//Go Thru the found Job Array
							for(var li = 0; li < uniquearr.length; li++)	
							{	
								var lfidx = uniquearr[li];

								for (var x = 0; x < 2; x++) {
								
									log.debug('In Job loop: x = ' + x);
									var job = jobs[lfidx + x];

									if (x == 0 )
										fjobnum = job.mobjobNumber;
									
									log.debug('In Job loop: x = ' + x + ' jobnum = ' + job.mobjobNumber);

									if( x == 1 )
									{	

										if ( fjobnum != job.mobjobNumber)
										{
											log.debug('!!!!!!!!! JOb Number Mismatch Pup JOb ' + fjobnum + ' Del job ' +  job.mobjobNumber);
										}
										else
										{	
											log.debug('In Job loop: x + 1 = ' + x + ' jobnum = ' + job.mobjobNumber);
											job.mobjobSignat = signat || "";

											if(podname) {                                                                                       
												job.mobjobPodName = podname;                                                                    
												job.mobjobPodTime = new Date().toISOString();                                                   
											}              
										}
									}

									job.mobjobStatus = 'DL';
									job.save();     // save leg
								}
							}
						 }
						 else
						{
							var ltitle = 'ERROR';
							var lmes = 'The Scan Off could not find a job that matched your barcodes';
							
							//alert(lmes);

							var alertPopup = $ionicPopup.alert({
								title: ltitle,
								template: lmes
							});
						}
					 }

					 finishSubmit(foundJob,syncRequired);
				}
				/*========================================*/
				/*       SCAN SESSION SUBMIT   */
				/*========================================*/
				var confirmscanSubmit = function (signat,podname) {

				//	"where": {and: [{"mobjobDriver": pdaParams.getDriverId()}, {"mobjobLegNumber": 1},{"mobjobStatus": { "neq": "DL"}} ]},
					var save_status = 'FAILED';
					var _filter = 
							  {
								"where": {and: [{"mobjobDriver": pdaParams.getDriverId()}, {"mobjobStatus": { "neq": "DL"}} ]},
								"order": [ 'mobjobNumber ASC','mobjobLegNumber ASC' ] 
							  };
					var filter = angular.copy(_filter);

					/////// FIND a list of JOBS and then Check Barcodes against them 
					/////// ALL in doSubmitWork
			
					Job.find(filter, function (err, jobs) {

						doSubmitWork(jobs,signat,podname);

					});

				}


				
				$scope.scanSubmit = function()
				{
					useCipherlab = true;			
					if(barcodes.length == 0 )
					{
						return;
					}
					var subconfirmPopup = $ionicPopup.confirm({
					title: 'Scan Session Confirm',
					template: 'Are you sure you want to submit your Scan session to the database ?'
					});

					subconfirmPopup.then(function(res) {
						if(res) {
							log.debug('User has Submitted the scan session');

							if( my_is_scan_on == false ) /// SCAN OFF
							{
								$rootScope.$broadcast('BarcodeScanOff');
							}
							else                         /// SCAN ON
							{
								// NO SIGNAT and PODname as this is a SCAN ON
								confirmscanSubmit();
							}
								
						} else {

							log.debug('User has CANCELLED out of a Scan session SUBMIT Doing nothing');
							return; 
						}
					});
				}

				$scope.showTab = function() {
							return true;
		/*
					siteConfig.getSiteConfigYN("BARCODES").then(function(YN) {
						if(YN == "Y")
							return true;
						else
							return false;
					});
		*/
				}

			});
		}
	}
])
