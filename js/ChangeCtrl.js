'use strict';

/**
 * @ngdoc function
 * @name loopbackExampleFullStackApp.controller:ChangeCtrl
 * @description
 * # ChangeCtrl
 * Controller of the loopbackExampleFullStackApp
 */
angular.module('ChangeCtrl', [])
  .controller('ChangeCtrl', ['$scope', '$filter', 'Job', 'RemoteJob', 'sync', 'network', 'pdaParams','Logger',
	function ($scope, $filter, Job, RemoteJob, sync, network, pdaParams,Logger) {

	var logParams = { site: pdaParams.getSiteId(), driver: pdaParams.getDriverId(), fn: 'ChangeCtrl'};
	var log = Logger.getInstance(logParams);

	//console.log('In ChangeCtrl');

	Job.getChangeModel().find(function(err, changes) {
	  $scope.changes = changes;
	  $scope.$apply();

	  RemoteJob.diff(0, changes, function(err, diff) {
		$scope.diff = diff;
		$scope.$apply();
	  });
	});

	$scope.clearLocalStorage = function() {
	  localStorage.removeItem('osc-local-db');

		$scope.jobs = {};
	};

	$scope.logLocalStorage = function() {
		var logmsg = {};
		logmsg.type = 'logLocalStorage';
		logmsg.data = JSON.parse(localStorage.getItem('osc-local-db'));
		log.info(logmsg);
	};

	Job.find(function(err, jobs) {
	  $scope.jobs = jobs;
	  $scope.$apply();
	});

	$scope.sync = function () {
		sync();
	};

	$scope.connected = function () {
		return network.isConnected;
	};

	$scope.connect = function () {
		network.isConnected = true;
		sync();
	};

	$scope.disconnect = function () {
		network.isConnected = false;
	};

  }
]);
