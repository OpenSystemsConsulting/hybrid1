angular.module('gpsService', [])

.factory('gpsService',[ 'gpsHistory','$cordovaGeolocation','pdaParams','Logger','$rootScope','gpsAudit',
function (gpsHistory,$cordovaGeolocation,pdaParams,Logger,$rootScope,gpsAudit) {

	var logParams = { site: pdaParams.getSiteId(), driver: pdaParams.getDriverId(), fn: 'gpsService'};
	var log = Logger.getInstance(logParams);

	// TODO - set high accuracy with a toggle parameter
	// TODO - set maximumAge to 0?	Apparently Samsing Galaxy phone have issues caching the gps location
	// (see http://stackoverflow.com/questions/16262878/phonegap-geolocation-code-3-timeout-expired-keeps-popping-up-on-some-android)
	// Apparently a reboot can fix Android gps timeouts

	// example here: http://www.gajotres.net/using-cordova-geoloacation-api-with-google-maps-in-ionic-framework/

	//HIGH ACCURACY may be problematic

  //var posOptions = {timeout: 1000, frequency : 1000, enableHighAccuracy: true };
	var posOptions = {timeout: 10000, enableHighAccuracy: false};

	var gpsIsWorking = true;			// assume everything OK to start with
	var numsaves = 0;
	var lastsecs = 0;

	var showGpsAlerts;
	var sendGps;

	var getGps = true;

	var gpsService = { };

	showGpsAlerts = false;
	sendGps = true;
	
	var gpsData = {};
	
	$rootScope.$on('RESUME', function(event) {
		// foreground
		log.info("Received event:"+event.name);
		getGps = true;
		getPos();
	});
	$rootScope.$on('PAUSE', function(event) {
		// background
		log.info("Received event:"+event.name);
		getGps = false;
	});

	function getPos()
	{
		if(!gpsIsWorking) {
			// NOTE - if this is the case we won't set it back to true because we don't attempt to save
			// Use device tab to reset gpsIsWorking
			log.error("getPos: gpsIsWorking:"+gpsIsWorking+", check app location settings");
			return;
		}

		if (log.context.driver == 0) {
			log.context.driver = pdaParams.getDriverId();
		}

		if( !pdaParams.alwaysGetGPS) {
			// If driver logged off or app in background don't bother with any of this
			if(!getGps) {
				log.info('getGps:'+getGps+', no GPS attempted');
				return;
			}
			if(pdaParams.isDrvLoggedOff()) {
				log.info('driver logged off, no GPS attempted');
				return;
			}
		}

		$cordovaGeolocation
		.getCurrentPosition(posOptions)
		.then(function (position) {
			if ( showGpsAlerts ) 
			{
				alert (' GPSService: Position returned ' );

			}
			
			gpsData = angular.copy(position);
			log.debug("position:"+JSON.stringify(gpsData));

			saveGpsToDB(pdaParams.getDriverId(),position);

			gpsIsWorking = true;

		}, function(err) {
			// error
			if ( showGpsAlerts ) 
			{
				  alert('GPsService Error code: '	 + err.code    + '\n' + 'message: ' + err.message + '\n');
			}
			
			// for newer android permissions we will get this if location services disallowed for the app
			// getCurrentPosition failed, err:{"code":1,"message":"Illegal Access"}
			/*
			 * NOTE that this can cause a problem where the user has selected "Deny" and also "Never ask again"
			 * When checking allowed permissions android will emit a pause event followed by a resume event
			 * When never ask again is selected this happens very quickly which means the app spends most
			 * of its time processing those events
			 * Which in turn triggered a getPos call which triggered the error again after pause/resume events
			 */
			// Update - only set gpsIsWorking false on the specific "Illegal Access" error
			if( err.code === 1 && err.message === "Illegal Access")
				gpsIsWorking = false;

			// Apparently it's not possible to stringify an error object so dump code and message separately
			// See https://stackoverflow.com/questions/18391212/is-it-not-possible-to-stringify-an-error-using-json-stringify
			//log.error("getCurrentPosition failed, err:"+JSON.stringify(err));
			//log.error("getCurrentPosition failed, err:"+err);
			log.error("getCurrentPosition failed, err code:"+err.code+", message:"+err.message);
		});
	}
	
	function saveGpsToDB(drvid,position)
	{
		var lgps = new gpsHistory();

		lgps.gps_driver_id = drvid;
		lgps.gps_timestamp = position.timestamp;

		// position.timestamp is UTC
		// We convert to a timestamp at local time so no timezone
		var ldate = new Date(position.timestamp);
		var oset = ldate.getTimezoneOffset();
									
		lgps.gps_timestamp += (oset * -1)  * 60  * 1000;

		lgps.gps_latitude = position.coords.latitude.toFixed(6);
		lgps.gps_longitude = position.coords.longitude.toFixed(6);
		lgps.gps_quality = position.coords.accuracy;
		lgps.gps_heading = 0; // position.coords.heading;

		lgps.gps_speed = 0; //position.coords.speed;

		lgps.gps_time = 0 ; //new Date(position.timestamp).getTime();

		//sendGps = true;			// DEBUG
		log.debug("getCurrentPosition OK: sendGps:"+sendGps+", lgps:"+ JSON.stringify(lgps));

		gpsAudit.saveGps(lgps);

		// TODO - do we need any more criteria to create history record?  if connected?
		if( sendGps && lgps.gps_driver_id > 0)
		{
			log.info("About to save GPS");
			lgps.$create(lgps, function success( obj) {
				if( obj) {
					log.debug("lgps.$create success: obj:"+JSON.stringify(obj));
				}
			}, function error(err) {
				if( err) {
					log.error("lgps.$create failed: err:"+JSON.stringify(err));
				}
			});
		}
	}

	//Every 60 Seconds
	var intervalId = setInterval( getPos,60000);

	gpsService.getGpsIsWorking = function getGpsIsWorking()
	{
		return gpsIsWorking;
	}
	gpsService.setGpsIsWorking = function(torf) 
	{
		gpsIsWorking = torf;
	}

	gpsService.getShowGpsAlerts = function getShowGpsAlerts()
	{
		return showGpsAlerts;
	}

	gpsService.getSendGps = function getSendGps()
	{
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

	gpsService.getCurrentPos = function getCurrentPos(cb) {
		
		$cordovaGeolocation
		.getCurrentPosition(posOptions)
		.then(function (position) {
			cb(null,position);
		},function(err) {
			cb(err, null);
		});
	}

	return gpsService;

}]);
