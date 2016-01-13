angular.module('geoService', [])

.factory('geoService',[ '$cordovaGeolocation','cordovaReady', function (cordovaGeolocation,cordovaReady) {


  var posOptions = {timeout: 10000, enableHighAccuracy: false};


	var ret = cordovaReady();

  //$scope.$on('$destroy', function () {
    //clearInterval(intervalId);
  //});
  var watchOptions = {
    frequency : 1000,
    timeout : 3000,
    enableHighAccuracy: false // may cause errors if true
  };

  var watch = cordovaGeolocation.watchPosition(watchOptions)
  .then(
    null,
    function(err) {
      // error
		alert('Watch Location error err = ' + err.message);
    },
    function(position) {
      var lat  = position.coords.latitude
      var long = position.coords.longitude
		
	  alert('Position has changed Lat = ' + position.coords.latitude + 'Lng = ' + position.coords.longitude + '\n');
  });


	alert('About to clearwatch');
  cordovaGeolocation.clearWatch(watch);


	function getPos()
	{
		cordovaGeolocation
		.getCurrentPosition(posOptions)
		.then(function (position) {
		  var lat  = position.coords.latitude
		  var long = position.coords.longitude
		  alert('Promise GeoService init  Lat = ' + position.coords.latitude + 'Lng = ' + position.coords.longitude + '\n');

		}, function(err) {
			  //alert('GeoService Error code: '    + err.code    + '\n' + 'message: ' + err.message + '\n');
			
		  // error
		});
		


	}

	var intervalId = setInterval(function () {

	},10000);




//	$scope.showResult = function () {
     //       return $scope.error == "";
    //}
}]);

//'use strict';

//angular.module('geolocation',[]).constant('geolocation_msgs', {
        //'errors.location.unsupportedBrowser':'Browser does not support location services',
        //'errors.location.permissionDenied':'You have rejected access to your location',
        //'errors.location.positionUnavailable':'Unable to determine your location',
        //'errors.location.timeout':'Service timeout has been reached'
//});
//
//angular.module('geolocation')
  //.factory('geolocation', ['$q','$rootScope','$window','geolocation_msgs',function ($q,$rootScope,$window,geolocation_msgs) {
    //return {
      //getLocation: function (opts) {
        //var deferred = $q.defer();
        //if ($window.navigator && $window.navigator.geolocation) {
          //$window.navigator.geolocation.getCurrentPosition(function(position){
            //$rootScope.$apply(function(){deferred.resolve(position);});
          //}, function(error) {
            //switch (error.code) {
              //case 1:
                //$rootScope.$broadcast('error',geolocation_msgs['errors.location.permissionDenied']);
                //$rootScope.$apply(function() {
                  //deferred.reject(geolocation_msgs['errors.location.permissionDenied']);
                //});
                //break;
              //case 2:
                //$rootScope.$broadcast('error',geolocation_msgs['errors.location.positionUnavailable']);
                //$rootScope.$apply(function() {
                  //deferred.reject(geolocation_msgs['errors.location.positionUnavailable']);
                //});
                //break;
              //case 3:
                //$rootScope.$broadcast('error',geolocation_msgs['errors.location.timeout']);
                //$rootScope.$apply(function() {
                  //deferred.reject(geolocation_msgs['errors.location.timeout']);
                //});
                //break;
            //}
          //}, opts);
        //}
        //else
        //{
          //$rootScope.$broadcast('error',geolocation_msgs['errors.location.unsupportedBrowser']);
          //$rootScope.$apply(function(){deferred.reject(geolocation_msgs['errors.location.unsupportedBrowser']);});
        //}
        //return deferred.promise;
      //}
    //};
//}]);
