angular.module('geoCtrl', [])

.controller('geoCtrl',['$scope', '$cordovaGeolocation', 'pdaParams','gpsAudit',
  function($scope,$cordovaGeolocation,pdaParams,gpsAudit) {


var gpsIsWorking;

	gpsIsWorking = false;

  var posOptions = {timeout: 10000, enableHighAccuracy: false};


	$scope.error = "";

	$scope.debug = pdaParams.debugMode;

  	$cordovaGeolocation
	.getCurrentPosition(posOptions)
	.then(function (position) {
		
		$scope.position = position;
		$scope.success = 'YES';
		gpsIsWorking = true;
		$scope.gpsIsWorking = gpsIsWorking;
		
	   
    }, function(err) {
		  alert('code: '    + err.code    + '\n' + 'message: ' + err.message + '\n');
		
		$scope.success = 'FAIL';
		gpsIsWorking = false;
		$scope.gpsIsWorking = gpsIsWorking;
		$scope.gpsErrorMess = err.message;
		
		$scope.error = "Failed";
		$scope.err = err;
    });

	function getGPSIsworking()
	{
		return gpsIsWorking;
	}


	$scope.showResult = function () {
            return $scope.error == "";
    }

	$scope.gpshistory = gpsAudit.getHistory();
 }

]); 
