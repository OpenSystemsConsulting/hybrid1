angular.module('geoCtrl', [])

.controller('geoCtrl',['$scope', '$cordovaGeolocation', 
  function($scope,$cordovaGeolocation) {


var gpsIsWorking;

	gpsIsWorking = false;

  var posOptions = {timeout: 10000, enableHighAccuracy: false};


	$scope.error = "";



  	$cordovaGeolocation
	.getCurrentPosition(posOptions)
	.then(function (position) {
	//alert('Latitude: '          + position.coords.latitude          + '\n' +
    //      'Longitude: '         + position.coords.longitude         + '\n' +
          //'Altitude: '          + position.coords.altitude          + '\n' +
          //'Accuracy: '          + position.coords.accuracy          + '\n' +
          //'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          //'Heading: '           + position.coords.heading           + '\n' +
          //'Speed: '             + position.coords.speed             + '\n' +
          //'Timestamp: '         + position.timestamp                + '\n');
      var lat  = position.coords.latitude
      var long = position.coords.longitude

		
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
		
	//	return $scope.error
      // error
    });

	function getGPSIsworking()
	{
		return gpsIsWorking;
	}


	$scope.showResult = function () {
            return $scope.error == "";
    }

 }

]); 
