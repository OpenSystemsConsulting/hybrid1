angular.module('gpsService', [])

.factory('gpsService',[ 'gpsHistory','$cordovaGeolocation','pdaParams','Logger',
function (gpsHistory,$cordovaGeolocation,pdaParams,Logger) {

	var logParams = { site: pdaParams.getSiteId(), driver: pdaParams.getDriverId(), fn: 'gpsService'};
	var log = Logger.getInstance(logParams);

	// TODO - set high accuracy with a toggle parameter
	// TODO - set maximumAge to 0?  Apparently Samsing Galaxy phone have issues caching the gps location
	// (see http://stackoverflow.com/questions/16262878/phonegap-geolocation-code-3-timeout-expired-keeps-popping-up-on-some-android)
	// Apparently a reboot can fix Android gps timeouts

	// example here: http://www.gajotres.net/using-cordova-geoloacation-api-with-google-maps-in-ionic-framework/

	//HIGH ACCURACY may be problematic

  //var posOptions = {timeout: 1000, frequency : 1000, enableHighAccuracy: true };
  var posOptions = {timeout: 10000, enableHighAccuracy: false};

	var gpsIsWorking = false;
	var numsaves = 0;
	var lastsecs = 0;

	var showGpsAlerts;
	var sendGps;

	// TODO - background GPS
	var bg_GPSWatchId = null;		// background gps

	var bg_gpsOptions = {
		enableHighAccuracy : true,
		timeout : 1000 * 60 * 4,
		maximumAge : 1 * 1000
	};

	var gpsService = { };

	showGpsAlerts = false; //By Default true , get them to turn it off if they dont want it
	sendGps = true;


	function getPos()
	{
		$cordovaGeolocation
		.getCurrentPosition(posOptions)
		.then(function (position) {
			if ( showGpsAlerts ) 
			{
				alert (' GPSService: Position returned ' );

			}
			
			saveGpsToDB(pdaParams.getDriverId(),position);
			/****
			var lgps = new gpsHistory();

			lgps.gps_driver_id = pdaParams.getDriverId();
			lgps.gps_timestamp = position.timestamp;

			var ldate = new Date(position.timestamp);
			var oset = ldate.getTimezoneOffset();
										
			lgps.gps_timestamp += (oset * -1)  * 60  * 1000;


			//parseFloat("123.456").toFixed(2);

			lgps.gps_latitude = position.coords.latitude.toFixed(6);
			lgps.gps_longitude = position.coords.longitude.toFixed(6);
			lgps.gps_quality = position.coords.accuracy;
			lgps.gps_heading = 0; // position.coords.heading;

			lgps.gps_speed = 0; //position.coords.speed;

			lgps.gps_time = 0 ; //new Date(position.timestamp).getTime();

			//sendGps = true;			// DEBUG
			log.debug("getCurrentPosition OK: sendGps:"+sendGps+", lgps:"+ JSON.stringify(lgps));

			// TODO - do we need any more criteria to create history record?  if connected?
			if( sendGps && lgps.gps_driver_id > 0)
			{
				log.info("About to save GPS");
				lgps.$create(lgps, function success( obj) {
					if( obj) {
						log.debug("lgps.$create success: obj:"+JSON.stringify(obj));
						//console.log(obj);
					}
				}, function error(err) {
					if( err) {
						log.error("lgps.$create failed: err:"+JSON.stringify(err));
						//console.log(err);
					}
				});
			}
			***/

			gpsIsWorking = true;

/*
			if( ! bg_GPSWatchId) {
				bg_GPSWatchId = $cordovaGeolocation.watchPosition(bg_onSuccess, bg_onError, bg_gpsOptions);
			}
*/

		}, function(err) {
			if ( showGpsAlerts ) 
			{
				  alert('GPsService Error code: '    + err.code    + '\n' + 'message: ' + err.message + '\n');
			}
			
		  // error
			gpsIsWorking = false;
			log.error("getCurrentPosition failed, err:"+JSON.stringify(err));
		});
	}
	
	function saveGpsToDB(drvid,position)
	{
		var lgps = new gpsHistory();

		lgps.gps_driver_id = drvid;
		lgps.gps_timestamp = position.timestamp;

		var ldate = new Date(position.timestamp);
		var oset = ldate.getTimezoneOffset();
									
		lgps.gps_timestamp += (oset * -1)  * 60  * 1000;


		//parseFloat("123.456").toFixed(2);

		lgps.gps_latitude = position.coords.latitude.toFixed(6);
		lgps.gps_longitude = position.coords.longitude.toFixed(6);
		lgps.gps_quality = position.coords.accuracy;
		lgps.gps_heading = 0; // position.coords.heading;

		lgps.gps_speed = 0; //position.coords.speed;

		lgps.gps_time = 0 ; //new Date(position.timestamp).getTime();

		//sendGps = true;			// DEBUG
		log.debug("getCurrentPosition OK: sendGps:"+sendGps+", lgps:"+ JSON.stringify(lgps));

		// TODO - do we need any more criteria to create history record?  if connected?
		if( sendGps && lgps.gps_driver_id > 0)
		{
			log.info("About to save GPS");
			lgps.$create(lgps, function success( obj) {
				if( obj) {
					log.debug("lgps.$create success: obj:"+JSON.stringify(obj));
					//console.log(obj);
				}
			}, function error(err) {
				if( err) {
					log.error("lgps.$create failed: err:"+JSON.stringify(err));
					//console.log(err);
				}
			});
		}
	}

	function bg_onSuccess(position) {
		if ( showGpsAlerts ){
    		alert('bg_onSuccess:%j \n',position);
		}
	}
	function bg_onError(error) {
	}

	function onSuccess(position) {
		gpsIsWorking = true;
	}
	function onError(error) {
		if ( showGpsAlerts ) 
		{
    		alert('GPSservice OnOFFPos  Error code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
		}
		gpsIsWorking = false;
	}
	function getOneoFFPos()
	{
		$cordovaGeolocation.getCurrentPosition(posOptionsOneOff);
	}

	//Every 60 Seconds
	var intervalId = setInterval( getPos,60000);

	gpsService.getGpsIsWorking = function getGpsIsWorking()
	{
		//getOneoFFPos();
		return gpsIsWorking;
	}

	gpsService.getShowGpsAlerts = function getShowGpsAlerts()
	{
		//getOneoFFPos();
		return showGpsAlerts;
	}

	gpsService.getSendGps = function getSendGps()
	{
		//getOneoFFPos();
		return sendGps;
	}

	gpsService.setShowGpsAlerts = function(torf) 
	{
		showGpsAlerts = torf;
		localStorage.setItem('showGpsAlerts', JSON.stringify(showGpsAlerts));
	}

	gpsService.setSendGps = function(torf) 
	{
		sendGps = torf;
		localStorage.setItem('sendGps', JSON.stringify(sendGps));
		log.debug("setSendGps now:"+sendGps);
	}

	gpsService.toggleShowGpsAlerts = function() 
	{
		showGpsAlerts = !showGpsAlerts;
		localStorage.setItem('showGpsAlerts', JSON.stringify(showGpsAlerts));
	}

	// LT - code added for background geolocation processing

	return gpsService;

}]);
