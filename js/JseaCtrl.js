'use strict';

angular.module('JseaCtrl', [])
	.controller('JseaCtrl', [ '$rootScope', '$scope', 'siteConfig','JseaDriverQuestions','pdaParams','Logger','$ionicPopup','$window','jseaService','LocalJseaDriverAnswers','jseaAnswers_sync',
		function ($rootScope, $scope, siteConfig,JseaDriverQuestions,pdaParams,Logger,$ionicPopup,$window,jseaService,LocalJseaDriverAnswers,jseaAnswers_sync) {

	var logParams = { site: pdaParams.getSiteId(), driver: pdaParams.getDriverId(), fn: 'JseaCtrl'};
	var log = Logger.getInstance(logParams);

		var pda_jsea_on = siteConfig.getSiteConfigValue('PDA_JSEA_ON');

		if(pda_jsea_on != 'Y') {
            var alertPopup = $ionicPopup.alert({
                title: 'Module not installed',
                template: 'This module is not installed.'
            });

            alertPopup.then(function(res) {

				$window.history.back();
				//window.location.href = "#/tab/jobs"
            });
        } else {

		$scope.jseaQuestions = [];


		var doSubmitWork = function()
		{
			var li;
			var llen;
			//They Have Submited a list of Ticks Y/N and
			// we now have to create an array of answers
			// one row for each answer	
			var ljobnum = jseaService.getServiceJobNum();
			var ljobdate = jseaService.getServiceJobDate();

			llen = $scope.jseaQuestions.length;

			for(li = 0; li < llen; li++)
			{
				
				var AnswerSession = new LocalJseaDriverAnswers();
				AnswerSession.jdaSeqnum = 0;
				AnswerSession.jdaJobNum = ljobnum;

                var year = Math.round(ljobdate/10000);
                var mon = Math.round((ljobdate % 10000) / 100);
                var day = Math.round((ljobdate % 100));


                var njobDate = new Date(Date.UTC(year, mon-1, day, 0, 0, 0, 0));

				AnswerSession.jdaJobBday = njobDate;

				AnswerSession.jdaDriverId = pdaParams.getDriverId();
				AnswerSession.jdaiFormType = $scope.jseaQuestions[li].jdqType ;
				AnswerSession.jdaFormLeg = 1;
				AnswerSession.jdaOrder = 1;
				AnswerSession.jdaCheckBox = $scope.jseaQuestions[li].jdqCbox;
				AnswerSession.save();
			}

			jseaAnswers_sync();
		}


		var _allfilter =	
			  {
				"where": {"jdq_type": "JSEA"},
				"order": 'jdq_order ASC'
			  };

		var filter = angular.copy(_allfilter);

		JseaDriverQuestions.find(filter) 
				.$promise
				.then(function(questsarr) {

			// TODO - need to check error and only show jobs if no error
			$scope.jseaQuestions = questsarr;

				/**
					//var job = $scope.jobs[i];
					//if( job.mobjobStatus == 'UJ') {
						//job.mobjobStatus = 'NJ';
						//job.onDeviceTime = new Date().toISOString();
						//job.save();
					//}

					// keep a count of the various job statuses
					//if($scope.jobStatuses[job.mobjobStatus])
						//$scope.jobStatuses[job.mobjobStatus] += 1;
					//else
						//$scope.jobStatuses[job.mobjobStatus] = 1;
				**/

			//$scope.titleWithTotal = "Jobs " + " (" + $scope.jobs.length + ")";

		});
			/*========================================*/
			/*      JSEA SUBMIT   */
			/*========================================*/
			$scope.jseaSubmit = function()
			{
				var subconfirmPopup = $ionicPopup.confirm({
				title: 'Jsea Session Confirm',
				template: 'Are you sure you want to submit your Answers session to the database ?'
				});

				subconfirmPopup.then(function(res) {
					if(res) {
						log.debug('User has Submitted the Jsea session');

						jseaService.setJseaIsCaptured("Y");
						//Handle Answers
						doSubmitWork();
						window.location.href = "#/tab/jobs";
						return; 
							
					} else {

						log.debug('User has CANCELLED out of a Jsea session SUBMIT Doing nothing');
						return; 
					}
				});
			}

			/*========================================*/
			/*        SCAN SESSION CANCEL   */
			/*========================================*/
			$scope.jseaCancel = function () {

				var confirmPopup = $ionicPopup.confirm({
				title: 'CANCEL Jsea Session',
				template: 'Are you sure you want to CANCEL this jsea session (You will lose all data )?'
				});

				confirmPopup.then(function(res) {
					if(res) {
						log.debug('User has Cancelled the jsea session');

						// go back to job list
						window.location.href = "#/tab/jobs";
						return; 
						
					} else {
						log.debug('User has CANCELLED out of a Jsea session CANCEL');
					}
				});
				
			}

		}
	  }
])
