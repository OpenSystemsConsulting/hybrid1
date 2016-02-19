'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('MainCtrl', [])
    .controller('MainCtrl', [ '$rootScope', '$scope', '$filter', 'Job', '$location', 'sync', 'network',
		function ($rootScope, $scope, $filter, Job, $location, sync, network) {

		var testfilter =
			{
				"where": {"mobjobLegNumber": 0}
			};

        function onChange() {
            Job.find( {},
				function (err, jobs) {
					console.log(err);
					console.log(jobs);
					$scope.jobs = jobs;
					$scope.$apply();
				});
        }

        function error(err) {
            //TODO error handling
            throw err;
        }

        function errorCallback(err) {
            if (err) error(err);
        }

        function refreshConflicts() {
            $scope.localConflicts = [];
            $scope.$apply();
            sync();
        }

        $scope.jobs = [];

        $scope.newJob = '';
        $scope.editedJob = null;

        // sync the initial data
		// LT - this does something only if connected (obviously), so if we get here when disconnected
		// we get an empty page as we don't read from local storage
        sync(onChange);

        // the location service
        $scope.loc = $location;

        Job.on('changed', onChange);
        Job.on('deleted', onChange);

        // Monitor the current route for changes and adjust the filter accordingly.
        $scope.$on('$routeChangeSuccess', function () {
            var status = $scope.status = $routeParams.status || '';
            $scope.statusFilter = (status === 'active') ?
            { completed: false } : (status === 'completed') ?
            { completed: true } : {};
        });

        $scope.reload = function () {
			onChange();
        };

        $scope.addJob = function () {
            //var job = new Job({mobjobMobilinkUser: $scope.newJob});
            var job = new Job({mobjobStatus: $scope.newJob});
            job.save();
            $scope.newJob = '';
        };

        $scope.editJob = function (job) {
            $scope.editedJob = job;
        };

        $scope.jobCompleted = function (job) {
            job.completed = true;
            job.save();
        };

        $scope.doneEditing = function (job) {
            $scope.editedJob = null;
/*
            job.title = job.title.trim();

            if (!job.title) {
                $scope.removeJob(job);
            } else {
                job.save();
            }
*/
            job.mobjobStatus = job.mobjobStatus.trim();

            if (!job.mobjobStatus) {
                $scope.removeJob(job);
            } else {
				// deep copy to remove $$hashkey
				job.data = angular.copy(job.data);
                job.save();
            }
        };

        $scope.removeJob = function (job) {
            job.remove(errorCallback);
        };

        $scope.clearCompletedJobs = function () {
            Job.destroyAll({completed: true}, onChange);
        };

        $scope.markAll = function (completed) {
            Job.find(function (err, jobs) {
                if (err) return errorCallback(err);
               jobs.forEach(function (job) {
                    job.completed = completed;
                    job.save(errorCallback);
                });
            });
        };

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

        Job.on('conflicts', function (conflicts) {
            $scope.localConflicts = conflicts;
            conflicts.forEach(function (conflict) {
                conflict.type(function (err, type) {
                    conflict.type = type;
                    conflict.models(function (err, source, target) {
                        conflict.source = source;
                        conflict.target = target;
                        conflict.manual = new conflict.SourceModel(source || target);
                        $scope.$apply();
                    });
                    conflict.changes(function (err, source, target) {
                        conflict.sourceChange = source;
                        conflict.targetChange = target;
                        $scope.$apply();
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
			sync();
		};

		$scope.clearLocalStorage = function() {
			localStorage.removeItem('osc-local-db');
		};

		$scope.generateJobHeader = function(item) {
			return $scope.generateHeaderForModelInstance(item, $rootScope.jobMetadata);
		};

		$scope.getModelMetadata(Job, "jobMetadata", function(metadata) {
			//getJobs();
			onChange();
		});

    }
])
