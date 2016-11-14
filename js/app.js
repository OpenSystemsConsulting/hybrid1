// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 
                            'util', 
                            'lbServices', 
                            'osc-services', 
                            'AboutCtrl', 
                            'HistoryIndexCtrl',
                            'HistoryDetailCtrl',
                            'JobsIndexCtrl',
                            'JobDetailCtrl',
							'LoginCtrl',
							'ChangeCtrl',
							'MainCtrl',
							'MessageCtrl',
							'services',
							'tnf.IonicUtils',
							'TpmPdaControllerCtrl',
                            'BaseController',
							'ngCordova',
							'geoCtrl',
							'cordovaReady',
							'gpsService',
							'deviceCtrl',
							'applications',
							'installations',
							'pushService',
							'ny.logger',
							'fqueue',
							'config',
							'ngIdle',
							'BarcodeCtrl',
							'TabCtrl',
							'JseaCtrl',
							'imageCapture',
							'ImageCtrl'
							])

// default client config values - will be populated correctly after login
.provider('clientConfig', function() {
	var _clientId = 'clientId';
	var _serverIP = 'serverIP.opensyscon.com.au';
	var _serverPort = 3000;

	var _clientConfig = JSON.parse(localStorage.getItem('clientConfig'));
	if( _clientConfig) {
		_clientId = _clientConfig.clientId;
		_serverIP = _clientConfig.serverIP;
		_serverPort = _clientConfig.serverPort;
	}

	return {
		clientId : function() {
			return _clientId;
		},
		serverIP : function() {
			return _serverIP;
		},
		serverPort : function() {
			return _serverPort;
		},
		$get: function() {
			return {
				clientId: _clientId,
				serverIP: _serverIP,
				serverPort: _serverPort
			};
		}
	}
})
.provider('$exceptionHandler', {
	// http://www.bennadel.com/blog/2542-logging-client-side-errors-with-angularjs-and-stacktrace-js.htm
	// By default, AngularJS will catch errors and log them to
	// the Console. We want to keep that behavior; however, we
	// want to intercept it so that we can also log the errors
	// to the server for later analysis.
	$get: function( errorLogService ) {
		return( errorLogService );
	}
})
.provider('apiURLFetcher', function apiURLFetcherProvider(){
	if(!localStorage.getItem('apiURL')){ // if there is no apiURL in localStorage, set a default value
		localStorage.setItem('apiURL', "http://opensyscon.com.au:3000/api");
	}
	this.getURL = function(){ // fetches apiURL from localStorage
		//return JSON.parse(localStorage.getItem('apiURL'));
		return localStorage.getItem('apiURL');
	};
	this.$get = function(){
		//return JSON.parse(localStorage.getItem('apiURL'));
		return localStorage.getItem('apiURL');
	}
})

// When the application is being bootstrapped, it runs the configuration phase
// first. During this phase, we have access to all the Providers, but NOT to the
// actual service objects that will be created.
.config(function( apiURLFetcherProvider, $stateProvider, $urlRouterProvider, LoopBackResourceProvider, KeepaliveProvider, IdleProvider) {

	// Change the URL where to access the LoopBack REST API server
	LoopBackResourceProvider.setUrlBase(apiURLFetcherProvider.getURL());

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider


    // setup an abstract state for the tabs directive
    .state('tab', {
      url: '/tab',
      abstract: true,
	  resolve: {
		config:
			// Ensure site config loaded before we can do pretty much anything else in the app
			// e.g. http://www.jvandemo.com/how-to-resolve-application-wide-resources-centrally-in-angularjs-with-ui-router/
			// This returns a promise that will be esolved before you can transition to any other state.
			// Because getAllConfigsFromServer() populates local storage this means that controllers will have
			// any local storage parameters available to them at time of invocation
			function(siteConfig) {
				return siteConfig.getAllConfigsFromServer();
			}
      },
      templateUrl: 'templates/tabs.html',
	  controller: 'TabCtrl'
    })

	.state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
	  controller: 'LoginCtrl'
	})

	.state('test', {
      url: '/test',
      templateUrl: 'templates/main.html',
      controller: 'MainCtrl'
    })

    .state('tab.job-index', {
      url: '/jobs',
      views: {
        'jobs-tab': {
          templateUrl: 'templates/jobIndex.html',
          controller: 'JobsIndexCtrl'
        }
      }
    })

    .state('tab.history-index', {
      url: '/history',
      views: {
        'history-tab': {
          templateUrl: 'templates/historyIndex.html',
          controller: 'HistoryIndexCtrl'
        }
      }
    })

	.state('tab.job-detail', {
	  url: '/jobs/:jobId',
	  views: {
		'job-edit': {
		  templateUrl: 'templates/jobDetail.html',
		controller: 'JobDetailCtrl'
		}
	  }
	})

    .state('tab.barcodes', {
      url: '/barcodes',
	  resolve: {
        pda_barcodes:
            // This will only load the tab once the config has been retrieved
            // and the value is made available to the controlller in the injectable variable pda_barcodes
            function(siteConfig) {
                return siteConfig.getSiteConfigYN('PDA_BARCODES');
            }
      },
      views: {
        'barcodes-tab': {
          templateUrl: 'templates/barcodes.html',
          controller: 'BarcodeCtrl'
        }
      }
    })

    .state('tab.device-detail', {
      url: '/device',
      views: {
        'device-tab': {
          templateUrl: 'templates/deviceDetail.html',
          controller: 'deviceCtrl'
        }
      }
    })

    .state('tab.debug', {
      url: '/debug',
      views: {
        'debug-tab': {
          templateUrl: 'templates/gpsDetail.html',
          controller: 'geoCtrl'
        }
      }
    })

    .state('tab.pda', {
      url: '/tpmPdaControllers',
      views: {
        'pda-tab': {
          templateUrl: 'templates/tpmPdaController.html',
          controller: 'TpmPdaControllerCtrl'
        }
      }
    })

    .state('tab.about', {
      url: '/about',
      views: {
        'about-tab': {
          templateUrl: 'templates/about.html',
          controller: 'AboutCtrl'
        }
      }
    })

	.state('tab.test', {
	  url: '/test',
	  views: {
		'test-tab': {
		  templateUrl: 'templates/main.html',
		  controller: 'MainCtrl'
		}
	  }
	})

	.state('tab.change', {
	  url: '/change',
	  views: {
		'change-tab': {
		  templateUrl: 'templates/changes.html',
		  controller: 'ChangeCtrl'
		}
	  }
	})

/*
    .state('tab.cpushc', {
      url: '/cpushc',
      views: {
        'cpushc-tab': {
          templateUrl: 'templates/clientpush-create.html',
          controller: 'applications'
        }
      }
    })

    .state('tab.cpushl', {
      url: '/cpushl',
      views: {
        'cpushl-tab': {
          templateUrl: 'templates/clientpush-list.html',
          controller: 'applications'
        }
      }
    })

    .state('tab.cpushi', {
      url: '/cpushi',
      views: {
        'cpushi-tab': {
          templateUrl: 'templates/clientpush-idx.html',
          controller: 'installations'
        }
      }
    })
*/

    .state('tab.messages', {
      url: '/messages',
      views: {
        'messages-tab': {
          templateUrl: 'templates/messages.html',
          controller: 'MessageCtrl'
        }
      }
    })

    .state('tab.jseas', {
      url: '/jseas',
      views: {
        'jsea-tab': {
          templateUrl: 'templates/jseaQuestions.html',
          controller: 'JseaCtrl'
        }
      }
    })

	.state('tab.images', {
      url: '/images',
      resolve: {
        pda_images:
            // This will only load images tab once the config has been retrieved
            // and the value is made available to the controlller in the injectable variable pda_images
            function(siteConfig) {
                return siteConfig.getSiteConfigYN('PDA_IMAGES');
            }
      },
      views: {
        'images-tab': {
          templateUrl: 'templates/images.html',
          controller: 'ImageCtrl'
        }
      }
    })

	;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

	// TODO - idle processing
  //4 Minutes
  //IdleProvider.idle(240);
  //IdleProvider.timeout(5);

  //KeepaliveProvider.interval(10);

})


// When the application is being bootstrapped, it will run the configuration
// phase first and then it will execute the "Run" phase. At that point, all of
// the run() blocks are executed. During this phase, we no longer have access
// to any of the providers but we can finally access the services.
.run(function($rootScope,$cordovaPush,$http,ConnectivityMonitor,Logger,pdaParams,messageService,Idle,$animate,$state,sodService,jseaService,siteConfig,imageService,$ionicPopup) {

/* NOTE: the run function gets called at app startup so any services injected here
 * will be instantiated at that time
 */
	var logParams = { site: pdaParams.getSiteId(), driver: pdaParams.getDriverId(), fn: 'appServRun'};
	var log = Logger.getInstance(logParams);
	var mystr;

	// Assist debugging angular ui router
	$rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
		mystr = '$stateChangeStart: from:' + fromState.name + ' to:'+toState.name+' (fired when the transition begins)';
		log.debug(mystr);

		// If going to login screen and already have client and driver set up go to jobs
		// otherwise go to pda controller to configure driver
		// This means that the driver doesn't need to keep logging in to the app with user/password
		// So in effect this is the app starting up from being closed (not a resume from background)
		if(toState.name === "login") {
			if( localStorage.getItem('clientId')) {
				event.preventDefault();
				//messageService.clearChangeData();		// clear any obsolete change data
				sodService.checkDoSodAction('FIRST_RESUME');	// check if this is first start for the day
				if( pdaParams.getDriverId() > 0 )
					$state.go('tab.job-index');
				else
					$state.go('tab.pda');
			}
		}
	});

	$rootScope.$on('$stateChangeError',function(event, toState, toParams, fromState, fromParams, error){
		mystr = '$stateChangeError:to:'+ toState.name + ':' + JSON.stringify(error);
		log.debug(mystr);

/*
		// This will popup a message on error and then retry loading the tab
		// TODO - maybe have to check for certain errors only?  for resolve?
		// TODO - maybe always try and reload job index tab?
		var myPopup = $ionicPopup.show({
			title: 'Error',
			subTitle: JSON.stringify(error),
		 	buttons:
			[
				{
					text: 'Try again',
					onTap: function(e) {
						$state.go(toState.name);
					}
				}
			]
		});
*/
	});

	$rootScope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams){
		mystr = '$stateChangeSuccess: to:' + toState.name + ' from:'+fromState.name+' (fired once the transition completes)';
		log.debug(mystr);
	});


	$rootScope.$on('$viewContentLoaded',function(event){
		mystr = '$viewContentLoaded - fired after dom rendered' + event;
		log.debug(mystr);
	});

	$rootScope.$on('$stateNotFound',function(event, unfoundState, fromState, fromParams){
		mystr = '$stateNotFound '+unfoundState.name+'  - fired when a state cannot be found by its name.';
		log.debug(mystr);
	});

	// Start monitoring network connectivity
	ConnectivityMonitor.startWatching();

	// Start monitoring for messages
	messageService.startWatching();
	jseaService.startWatching();

	// Start monitoring images for auto upload
	//imageService.startWatching();			// TODO - enable

	//This should potentially be called once a day from SOD service
	// TODO - should naybe put this into the service and have a startWatching() function
	// to listen for the event and do what's necessary

/*
 * LT - commented out after adding the resolve to the abstract state which ensures site config
 * is loaded before we go to any state.  Caused an infinite loop for jsea sites where the abstract
 * state loaded config, emitted SITE_CONFIG_LOADED event, which was caught here which then did
 * $state.go() which triggered the resolve of the abstract state
 *
	$rootScope.$on('SITE_CONFIG_LOADED', function(event){
		if(pdaParams.getDriverId() <= 0 )
		{
			mystr = "Site config is LOADED but Driver is <= 0" ;
			log.debug(mystr);
		}
		else
		{
		    //This assumes that sod service has emitted the Event
			mystr = "Site config is LOADED";
			log.debug(mystr);
			siteConfig.getSiteConfigYN('PDA_JSEA_ON').then(function(YN) {
				//Returns value of Param in YN
				if(YN == 'Y') {
					//Now get the type value
					siteConfig.getSiteConfig('PDA_JSEA_TYPE').then(function(value) {

						if(value != '')
						{
							mystr = "getSiteConfig returned  " + value;
							log.debug(mystr);
							//Set the TYpe in the service
							jseaService.setJseaType(value);

							//If its a start of day then goto the Jsea Controller
							if(jseaService.isJseaStartOfDay())
							{
								//Let the service know 
								$rootScope.$broadcast('SOD_IS_NEW_DAY');
								$state.go('tab.jseas');
							}
						}
						else
						{
							mystr = "getSiteConfig returned nothing !!!!";
							log.debug(mystr);
						}
					});
				}
			});
		}
	});
*/

})
