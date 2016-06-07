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
							'BarcodeCtrl'
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
    //LoopBackResourceProvider.setUrlBase('http://58.108.229.60:3001/api');
	// Use 3000 for the OSC-API offline sync server process
	var myPort = 3000;
	var myIpaddress = 'opensyscon.com.au';
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
      templateUrl: 'templates/tabs.html'
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
		  templateUrl: 'templates/jobDetail.html'
		}
	  }
	})

    .state('tab.barcodes', {
      url: '/barcodes',
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
.run(function($rootScope,$cordovaPush,$http,ConnectivityMonitor,Logger,pdaParams,messageService,Idle,$animate,$state) {

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
		if(toState.name === "login") {
			if( localStorage.getItem('clientId')) {
				event.preventDefault();
				if( pdaParams.getDriverId() > 0 )
					$state.go('tab.job-index');
				else
					$state.go('tab.pda');
			}
		}
	});

	$rootScope.$on('$stateChangeError',function(event, toState, toParams, fromState, fromParams, error){
		mystr = '$stateChangeError fired when an error occurs during transition.';
		log.debug(mystr);
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

})
