'use strict';

angular.module('JseaCtrl', [])
	.controller('JseaCtrl', [ '$rootScope', '$scope', 'siteConfig','JseaDriverQuestions','pdaParams','Logger','pda_jsea_on','$ionicPopup','$window','jseaService',
		function ($rootScope, $scope, siteConfig,JseaDriverQuestions,pdaParams,Logger,pda_jsea_on,$ionicPopup,$window,jseaService) {

	var logParams = { site: pdaParams.getSiteId(), driver: pdaParams.getDriverId(), fn: 'JseaCtrl'};
	var log = Logger.getInstance(logParams);

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
