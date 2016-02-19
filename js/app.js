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


// When the application is being bootstrapped, it runs the configuration phase
// first. During this phase, we have access to all the Providers, but NOT to the
// actual service objects that will be created.
.config(function( $stateProvider, $urlRouterProvider, LoopBackResourceProvider, clientConfig, KeepaliveProvider, IdleProvider) {

	// Change the URL where to access the LoopBack REST API server
    //LoopBackResourceProvider.setUrlBase('http://58.108.229.60:3001/api');
	// Use 3000 for the OSC-API offline sync server process
	var myPort = 3000;
	var myIpaddress = 'opensyscon.com.au';
	//var myIpaddress = 'scope.opensyscon.com.au/scope/';
	//var myIpaddress = 'swiftt1.lnk.telstra.net';
    //LoopBackResourceProvider.setUrlBase('http://'+ myIpaddress + ':' + myPort + '/api');
    LoopBackResourceProvider.setUrlBase('http://'+ clientConfig.serverIP + ':' + clientConfig.serverPort + '/api');

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
  //$urlRouterProvider.otherwise('/login');

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
.run(function($rootScope,$cordovaPush,$http,ConnectivityMonitor,Logger,pdaParams,messageService,Idle,$animate) {

/* NOTE: the run function gets called at app startup so any services injected here
 * will be instantiated at that time
 */
	var logParams = { site: pdaParams.getSiteId(), driver: pdaParams.getDriverId(), fn: 'appServRun'};
	var log = Logger.getInstance(logParams);
	var mystr;

// Assist debugging angular ui router
	$rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
  	//console.log('$stateChangeStart to '+toState.to+'- fired when the transition begins. toState,toParams : \n',toState, toParams);

	//mystr = '$stateChangeStart to '+toState.to+' fired when the transition begins. ToState = ' + toState + ' toParams : ' + toParams ;
	mystr = '$stateChangeStart: from:' + fromState.name + ' to:'+toState.name+' (fired when the transition begins)';
	//if(pdaParams.debug)
		log.debug(mystr);

});
	$rootScope.$on('$stateChangeError',function(event, toState, toParams, fromState, fromParams, error){
    //console.log('$stateChangeError - fired when an error occurs during transition.');

	mystr = '$stateChangeError fired when an error occurs during transition.';
	//if(pdaParams.debug)
		log.debug(mystr);

    //console.log(arguments);
});
	$rootScope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams){
  	//console.log('$stateChangeSuccess to '+toState.name+'- fired once the state transition is complete.');

	//mystr = '$stateChangeSuccess to '+toState.name+'- fired once the state transition is complete.';
	mystr = '$stateChangeSuccess: to:' + toState.name + ' from:'+fromState.name+' (fired once the transition completes)';
	//if(pdaParams.debug)
		log.debug(mystr);
});
// $rootScope.$on('$viewContentLoading',function(event, viewConfig){
//   // runs on individual scopes, so putting it in "run" doesn't work.
//   console.log('$viewContentLoading - view begins loading - dom not rendered',viewConfig);
// });
	$rootScope.$on('$viewContentLoaded',function(event){
  	//console.log('$viewContentLoaded - fired after dom rendered',event);

	mystr = '$viewContentLoaded - fired after dom rendered' + event;
	//if(pdaParams.debug)
		log.debug(mystr);
});

	$rootScope.$on('$stateNotFound',function(event, unfoundState, fromState, fromParams){
  	//console.log('$stateNotFound '+unfoundState.to+'  - fired when a state cannot be found by its name.');
  	//console.log(unfoundState, fromState, fromParams);

	mystr = '$stateNotFound '+unfoundState.name+'  - fired when a state cannot be found by its name.';
	//if(pdaParams.debug)
		log.debug(mystr);
});

	// Start monitoring network connectivity
	ConnectivityMonitor.startWatching();

	// Start monitoring for messages
	messageService.startWatching();


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

