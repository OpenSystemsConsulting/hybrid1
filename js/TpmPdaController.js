angular.module('TpmPdaControllerCtrl', [])

.controller('TpmPdaControllerCtrl', ['$rootScope', '$scope', '$state', 'TpmPdaController' , 'util', 'pdaParams', '$ionicModal','Logger','clientlog','eventService','messageService','pushService',
	function($rootScope, $scope, $state, TpmPdaController, util, pdaParams, $ionicModal, Logger, clientlog, eventService, messageService, pushService) {
		$scope.TpmPdaControllers = [];
		$scope.TpmRowCount = 0;

	var logParams = { site: pdaParams.getSiteId(), driver: pdaParams.getDriverId(), fn: 'TpmPdaControllerCtrl'};
	var log = Logger.getInstance(logParams);

		//$scope.driverId = pdaParams.getDriverId();
		$scope.pdaParams = pdaParams;



		// NOTE - "filter" keyword appears to be required for Oracle queries
		// but NOT mongodb queries.  Are we doing it correctly?
		var _filter = { "filter":
				{
					"where": { and: [{ "tpmpc_driver_id": pdaParams.driverId, "tpmpc_access_allowed": 'Y', "tpmpc_access_registered": 'Y' }] }
				}
		};

		var _newfilter = { "filter":
				{
					"where": { and: [{ "tpmpc_driver_id": pdaParams.driverId, "tpmpc_access_allowed": 'Y', "tpmpc_access_registered": {neq: "Y"} }] }
				}
			};

		var filter = _newfilter;		// default filter

		function getTpmPdaControllers(filter) {

			TpmPdaController.find(filter)
				.$promise
				.then(function(results) {

					$scope.TpmPdaControllers = results;

					$scope.TpmRowCount = results.length;

					// If no rows returned reset driver no entered by user
					if(results.length == 0) {
						pdaParams.setDriverInfo(0);
					}

					/*
					var len = results.length;
					for(var i=0; i<len; i++) {
						console.log($scope.TpmPdaControllers[i]);				
					}
					*/

			// TODO - need to ensure we have updated scope so in promise somewhere in TpmPdaController.find ??
			var TpmPdaController = $scope.TpmPdaControllers[0];		// should only ever be one
			if( TpmPdaController) {
					if( TpmPdaController.tpmpc_access_registered == 'N') {		// not yet registered
					TpmPdaController.tpmpc_access_registered = 'Y';
					TpmPdaController.tpmpc_last_update_time = new Date().toISOString();		// TODO - ok for oracle?
					TpmPdaController.$save();
				}
			}

				});
		};



		// Do we need to get metadata?  I'm still unsure about the whole concept
		//$scope.getModelMetadata(TpmPdaController, "tmppdacontrollerMetadata", function(metadata) {
			// default "get" when we land on this tab - retrieve existing driver details
			filter = _filter;
			getTpmPdaControllers(filter);
		//});

		// we don't want full on 2 way data binding - should only refresh when save button clicked
/*
		$scope.$watch('pdaParams.driverId', function(newDriver) {
			
			if( newDriver == "")
				return;

			filter = { "filter":
					{
						"where": { and: [{ "tpmpc_driver_id": pdaParams.driverId, "tpmpc_access_allowed": 'Y' }] }
					}
				};
			getTpmPdaControllers();
		});
*/

		// modal window to update driver no
		$ionicModal.fromTemplateUrl('templates/modal.html', {
			scope: $scope
		}).then(function(modal) {
			$scope.modal = modal;
		});

		// function to open the modal
		$scope.openModal = function () {
			$scope.modal.show();
		};

		// function to close the modal
		$scope.closeModal = function () {
			$scope.modal.hide();
		};

		//Cleanup the modal when we're done with it!
		$scope.$on('$destroy', function() {
			$scope.modal.remove();
		});

		$scope.updateDriver = function( driverId) {
			//Get rid of all stuff related to the driver so we dont get wrong data.
			localStorage.clear();	

			// TODO - remove any leading 0s
			pdaParams.setDriverInfo( driverId);
			$scope.closeModal();

			// TODO - we need to unregister from push services and reregister with new driver id

			//$scope.$apply();

			// reset _newfilter as driver id has changed
			_newfilter = { "filter":
				{
					"where": { and: [{ "tpmpc_driver_id": pdaParams.driverId, "tpmpc_access_allowed": 'Y', "tpmpc_access_registered": {neq: "Y"} }] }
				}
			};
			filter = _newfilter;
			getTpmPdaControllers(filter);

			clientlog.info("About to call getTpmPdaControllers with filter:" + JSON.stringify(filter));
			log.info("About to call getTpmPdaControllers with filter:" + JSON.stringify(filter));

			// Send LOGON event
			if(driverId>0) {
				eventService.sendMsg('LOGON');

				// Dump local storage at logon time - debug aid
				messageService.dumpLocalStorage();
			}

		};

		$scope.pushDeRegister = function() {
			pushService.unRegister();
		}
		$scope.pushRegister = function() {
			pushService.registerForPush();
		}
	}
])
