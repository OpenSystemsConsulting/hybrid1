'use strict';

angular.module('JseaCtrl', [])
	.controller('JseaCtrl', [ '$rootScope', '$scope', 'siteConfig','JseaDriverQuestions','pdaParams','Logger','$ionicPopup','$window','jseaService','LocalJseaDriverAnswers','jseaAnswers_sync','jobService',
		function ($rootScope, $scope, siteConfig,JseaDriverQuestions,pdaParams,Logger,$ionicPopup,$window,jseaService,LocalJseaDriverAnswers,jseaAnswers_sync, jobService) {

	var logParams = { site: pdaParams.getSiteId(), driver: pdaParams.getDriverId(), fn: 'JseaCtrl'};
	var log = Logger.getInstance(logParams);

	var pda_jsea_on = siteConfig.getSiteConfigValue('PDA_JSEA_ON');
	var lpda_jsea_on = pdaParams.pda_jsea_on ? 'Y' : 'N';

	var pda_jsea_both_yn = siteConfig.getSiteConfigValue('PDA_JSEA_BOTH_YN') === 'Y';			// CCT
	$scope.pda_jsea_both_yn = pda_jsea_both_yn;

	if(pda_jsea_on != 'Y' && lpda_jsea_on != 'Y') {
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
		var formType = jseaService.getServiceFormType();

		var _allfilter = { "filter":
			  {
				"where": {"jdqType": formType },
				"order": "jdqOrder ASC"
			  }
			};

		var filter = angular.copy(_allfilter);

		JseaDriverQuestions.find(filter) 
				.$promise
				.then(function(questsarr) {

			// TODO - need to check error and only show jobs if no error
			$scope.jseaQuestions = questsarr;

		});


		$scope.checkJdqResponse = function( jdqCbox,jdqType,jdqOrder,jdqNewForm,jdqNewFormType) {
			// check response when items are changed in case we need to do
			// any additional work e.g. load some more questions
			var here_to_enable_breakpoint_in_debugger = 0;

			if(pda_jsea_both_yn) {
				if( jdqCbox === 'Y')
					jdqCbox = true;
				else
					jdqCbox = false;
			}
			
			if(jdqCbox) {				// box has been ticked
				if(jdqNewForm) {		// new form required
					// jdqNewFormType has the type we need

					var filter = { "filter":
						  {
							"where": {"jdqType": jdqNewFormType },
							"order": "jdqOrder ASC"
						  }
						};

					JseaDriverQuestions.find(filter) 
							.$promise
							.then(function(questsarr) {

							var len = questsarr.length;

/*
							// TODO - Attempt to maybe add a divider in between each set of questions
							var divider = {};

							divider.jdqQuestionText = jdqNewFormType;
							divider.jdqDivider = true;
							$scope.jseaQuestions.push(divider);
*/

							for(var i = 0; i < len; i++) {
								$scope.jseaQuestions.push(questsarr[i]);
							}

					});
				}
			}
			else {		// box unticked - might need to remove additional form data
				if(jdqNewForm) {		// new form required
					for (var i=$scope.jseaQuestions.length-1; i>=0; i--) {
						if ($scope.jseaQuestions[i].jdqType === jdqNewFormType) {
							$scope.jseaQuestions.splice(i, 1);
							// break;       //<-- Uncomment  if only the first term has to be removed
						}
					}
				}
			}
		};

		var doSubmitWork = function()
		{
			var li;
			var llen;
			var jseaObj = {};

			//They Have Submited a list of Ticks Y/N and
			// we now have to create an array of answers
			// one row for each answer	
			var ljobnum = jseaObj.jobNumber = jseaService.getServiceJobNum();
			var ljobdate = jseaObj.jobBookingDay = jseaService.getServiceJobDate();
			var jobStatusType = jseaObj.jobStatusType = jseaService.getServiceStatusType();
			var formLeg = jseaObj.formLeg = jseaService.getServiceFormLeg();
			var submitTime = Date.now();

			llen = $scope.jseaQuestions.length;

			for(li = 0; li < llen; li++)
			{
				
				var AnswerSession = new LocalJseaDriverAnswers();
				AnswerSession.jdaSeqnum = 0;
				AnswerSession.jdaJobNum = ljobnum;

/*
                var year = Math.round(ljobdate/10000);
                var mon = Math.round((ljobdate % 10000) / 100);
                var day = Math.round((ljobdate % 100));


                var njobDate = new Date(Date.UTC(year, mon-1, day, 0, 0, 0, 0));

				AnswerSession.jdaJobBday = njobDate;
*/
				AnswerSession.jdaJobBday = ljobdate;		// is a date object already 

				AnswerSession.jdaDriverId = pdaParams.getDriverId();
				AnswerSession.jdaFormType = $scope.jseaQuestions[li].jdqType ;
				AnswerSession.jdaFormLeg = formLeg;
				AnswerSession.jdaOrder = $scope.jseaQuestions[li].jdqOrder;

				if(pda_jsea_both_yn) {
					// When both buttons present they are Y/N - convert to boolean
					if($scope.jseaQuestions[li].jdqCbox === 'Y')
						AnswerSession.jdaCheckBox = true;
					else
						AnswerSession.jdaCheckBox = false;
				}
				else
					AnswerSession.jdaCheckBox = $scope.jseaQuestions[li].jdqCbox;

				AnswerSession.jdaJobStatusType = jobStatusType;

				// store a timestamp of when answer saved
				AnswerSession.jdaSubmitTime = submitTime;

				AnswerSession.save();
			}

			if(jobStatusType == 'PICKUP' || jobStatusType == 'DELIVER') {
				$scope.$emit('jseaSaved',jseaObj);
				var key = jseaObj.jobNumber + '-' + jseaObj.jobStatusType;
				localStorage.setItem(key, 'Y');
			}

			jseaAnswers_sync();
		}

		/*========================================*/
		/*      JSEA SUBMIT   */
		/*========================================*/
		$scope.jseaSubmit = function()
		{
			// check all questions have a Y or N answer before allowing submission
			if( ! validateJseaAnswers()) {
				return;
			}

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

	// check all questions have either a Y or N answer before allowing submission
	function validateJseaAnswers() {
		var retval = true;
		var llen = $scope.jseaQuestions.length;

		var checked;
		if( !pda_jsea_both_yn)			// not checking both Y/N - old single radio button
			return true;

		// jdqCbox is a boolean and comes in by default as either true or more normally false
		// The form will set the value to either 'Y' or 'N' once a radio button has been checked
		for(var li = 0; li < llen; li++) {
			checked = $scope.jseaQuestions[li].jdqCbox;

			if(checked !== 'N' && checked !== 'Y') {
				// nothing explicitly checked so alert that all questions must be answered
				var alertPopup = $ionicPopup.alert({
					title: 'You must answer all questions',
					template: $scope.jseaQuestions[li].jdqQuestionText
				});
				alertPopup.then(function(res) {
					return false;
				});
				return false;
			}
		}

		for(var li = 0; li < llen; li++) {
			var checked = $scope.jseaQuestions[li].jdqCbox;
			if(checked === 'N' && ! $scope.jseaQuestions[li].jdqAllowNo) {
				// 'N" has been checked on a question that does not allow it - alert
				var confirmPopup = $ionicPopup.confirm({
					title: 'Have you filled in a full paper JSEA?',
					template: 'You have answered no to 1 or more questions that are not allowed to be no.  By clicking OK you are confirming that you have filled out a full PAPER JSEA'
				});
				confirmPopup.then(function(res) {
					if(res) {
						log.info('User has been warned and confirmed OK to submit');
						jseaService.setJseaIsCaptured("Y");
						//Handle Answers
						doSubmitWork();
						window.location.href = "#/tab/jobs";
						return true;
					} else {
						log.debug('User has CANCELLED out of a Jsea session warning doing nothing');
						return false;
					}
				});

				return false;
			}
		}

		return retval;
	}
  }
])
