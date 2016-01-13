// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 
                            'util', 
                            'lbServices', 
                            'AboutCtrl', 
                            'HistoryIndexCtrl',
                            'HistoryDetailCtrl',
                            'JobsIndexCtrl',
                            'JobDetailCtrl',
							'LoginCtrl',
							'ChangeCtrl',
							'MainCtrl',
							'services',
							'tnf.IonicUtils',
							'TpmPdaControllerCtrl',
							'osc-services',
                            'BaseController',
							'ngCordova',
							'geoCtrl',
							'geoService',
							'cordovaReady'])



.config(function($stateProvider, $urlRouterProvider, LoopBackResourceProvider) {

	// Change the URL where to access the LoopBack REST API server
    //LoopBackResourceProvider.setUrlBase('http://58.108.229.60:3001/api');
	// Use 3000 for the OSC-API offline sync server process
    LoopBackResourceProvider.setUrlBase('http://58.108.229.60:3000/api');

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

	;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
  //$urlRouterProvider.otherwise('/login');

});

