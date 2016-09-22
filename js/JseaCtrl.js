'use strict';

angular.module('JseaCtrl', [])
	.controller('JseaCtrl', [ '$rootScope', '$scope', 'siteConfig','JseaDriverQuestions','pdaParams','Logger','pda_jsea_on','$ionicPopup','$window',
		function ($rootScope, $scope, siteConfig,JseaDriverQuestions,pdaParams,Logger,pda_jsea_on,$ionicPopup,$window) {

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

			// TEST - check site config
			siteConfig.getSiteConfigYN('PAYADVICES_RANGE_PDF').then(function(YN) {
				$scope.test = YN;
			});
		}
	  }
])
