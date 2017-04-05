/*
You can find the code sample below Miroslav was talking about as well. Also, he found that bulkUpdate (the method called to apply changes during synchronisation) triggers rectifyAll when a model was updated or deleted. This could explain the low performance you are observing when the number of jobs and/or change-records is high. He created a GitHub issue to track the work needed to fix this, which can be found here: https://github.com/strongloop/loopback/issues/1893
*/

'use strict';

// path to OSC-API (when on the server),
// or "lbclient" directory in the browser bundle
var app = require('./');

// change to Job or LocalJob - the change-tracked model you would like to clean
var Model = app.models.Todo;

var Change = Model.getChangeModel();
var Checkpoint = Change.getCheckpointModel();

Change.deleteAll({ rev: null }, function(err, info) {
  if (err) return console.error('Cannot delete old changes:', err);
  console.log('Deleted %s old changes.', info.count);

  Checkpoint.current(function(err, cp) {
    if (err) return console.error('Cannot obtain current checkpoint:', err);
    console.log('Current checkpoint:', cp);

    Checkpoint.deleteAll({ seq: { lt: cp } }, function(err, info) {
      if (err) return console.error('Cannot delete old checkpoints:', err);
      console.log('Deleted %s old checkpoints', info.count);

      // The MongoDB connection pool is blocking exit,
      // we need to exit explicitely
      process.exit(0);
    });
  });
});





//----------------------------
filter: {
                "fields": {
                    "rqst_id": true
                },
                "order": "insrt_dt DESC",
                "limit": 1,
                "where": {
                    "rqst_stat_cd": "DRAFT",
                    "insrt_user_id": "xyz123"
                }
            }



//------------------------------------------------
//Checking permissions

			// TODO - this has issues when a request is already in progress
			// so maybe need to use isRequestingPermission
			cordova.plugins.diagnostic.getPermissionsAuthorizationStatus(onCheckPermissions, onCheckPermissionsError, oscPermissions);

			function onCheckPermissions(statuses){
				for(var permission in statuses){
					status = statuses[permission];
					log.debug("permission:"+permission+", status:"+status);

					switch(status) {
						case "GRANTED":
							// All good
							break;
						case "DENIED_ALWAYS":
							// User denied access to this permission and checked "Never Ask Again" box.
							// Can't do anything here - TODO - maybe alert box for user to change manually?
							break;
						case "DENIED":
							// Has been turned off in settings without checking "Never Ask Again"
							// so request again
							requestPermission(permission);
							break;
						case "NOT_REQUESTED":
							// Never been requested so ask for permission
							requestPermission(permission);
							break;
					}
				}
			};

			function onCheckPermissionsError(error){
				alert("Failed retrieving permissions");
			};

			function requestPermission(permission){
				// Camera
				if(permission == cordova.plugins.diagnostic.permission.CAMERA) {
					cordova.plugins.diagnostic.requestCameraAuthorization(function(status){
						log.info("CAMERA:"+status);
					}, function(error){
						log.error(error);
					});
				};

				// Location services
				if(permission == cordova.plugins.diagnostic.permission.ACCESS_FINE_LOCATION
						|| permission == cordova.plugins.diagnostic.permission.ACCESS_COARSE_LOCATION) {
					cordova.plugins.diagnostic.requestLocationAuthorization(function(status){
							log.info("LOCATION:"+status);
						}, function(error){
							log.error(error);
						});

				};
			};
