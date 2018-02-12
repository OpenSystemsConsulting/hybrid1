angular.module('navigationService', [])

.factory('navigationService',['$cordovaLaunchNavigator','Logger' , 'cordovaReady','pdaParams', 'siteConfig', function ($cordovaLaunchNavigator,Logger,cordovaReady,pdaParams,siteConfig) {

	var logParams = { site: pdaParams.getSiteId(), driver: pdaParams.getDriverId(), fn: 'navigationServer'};
	var log = Logger.getInstance(logParams);
	var navigatorService = { };
	var retval;
	var navigationServAllowed = siteConfig.getSiteConfigValue('PDA_REQ_NAVIGATION') == 'Y';
	var myNotReadyErr = "Sorry Cordova Is Not ready, until this occurs cannot use Navigator Plugin";
	var myNotModuleInstalled = "Sorry this module is not installed, please contact your office";

	var mystr = "Constructor called";
	log.debug(mystr);

	navigatorService.isReady = cordovaReady.isDeviceReady();
	navigatorService.reqNavigation = navigationServAllowed;
	navigatorService.JobNumber = 0;
	navigatorService.JobDate = 0;
	navigatorService.myaddress = '';


	navigatorService.registerJobDetails = function (jobnum,jobdate,address){
		log.debug("Registering jobDetails num " +  jobnum + " Date " + jobdate + ' Address = ' + address);
	    navigatorService.JobNumber = jobnum;
    	navigatorService.JobDate = jobdate;
    	navigatorService.myaddress = address;
	};

	navigatorService.onSuccess = function (){
		//navigator.notification.alert("Successfully launched navigator");
		log.debug("Successfully launched navigator for ");
	};

	navigatorService.onError = function (errMsg){
		alert("Failed to  launch navigator error ="+errMsg);
		log.debug("Failed to  launch navigator error = " + errMsg);
	};
	

	navigatorService.clearUserChoice = function () {

    	log.debug("User wants Wants to clear preferred app");
		if ( !navigatorService.isReady)
		{	
			alert(myNotReadyErr);
			log.debug(myNotReadyErr);
			return;
		}
		if ( !navigationServAllowed)
		{	
			alert(myNotModuleInstalled);
			log.debug(myNotModuleInstalled);
			return;
		}

		launchnavigator.appSelection.userChoice.get(function(app){
    		log.debug("User preferred app currently is: " + launchnavigator.getAppDisplayName(app));
		});
		
		
		launchnavigator.appSelection.userChoice.clear(function(){
    		log.debug("Wants to clear app ,so now preferred app is cleared");
		});

		alert("Your navigator choice has been cleared, you will be prompted the next time you decide to navigate");
	};
	
	navigatorService.navigate = function(deststr){

		//DesStr should be a normal single line of address

		//Original was to get it from a form
		//var dest = $('#dest input').val(),
			//start = $('#start input').val();
		if ( !navigatorService.isReady)
		{	
			alert(myNotReadyErr);
			log.debug(myNotReadyErr);
			return;
		}

		if(!deststr){
			//navigator.notification. alert("A destination must be specified");
			alert("A destination must be specified");
			log.debug("A destination must be specified");
			return;
		}

		if(cordovaReady.isDeviceReady())
		{
			$cordovaLaunchNavigator.navigate(deststr, {
				start: null,
				enableDebug: true,
				successCallback: this.onSuccess,
				errorCallback: this.onError
			});
		}
		else
		{
			alert("cordovaReady.isDeviceReady = false, cant use Navigator Plugin");
			log.debug("cordovaReady.isDeviceReady = false, cant use Navigator Plugin");
		}
	};

	return navigatorService;
}]);
