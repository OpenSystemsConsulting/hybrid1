/*
 * Define constants for PDA mobile app
 *
 * Stored in sets of JSON objects:
 * 1.  App specific which do not change from client to client
 * 2.  Client specific
 *
 * NOTE: because these are stored in objects, even though they are constants, they
 * can be overwritten within the app
 *
 */
angular.module('config', [])
// appConfig object contains app specific data which will NOT normally change between clients
// e.g. the log server will normally come to OSC so we can monitor for errors etc.
.constant('appConfig', {
	'version':			2.42,
	'logServerIP':		'opensyscon.com.au',
	'logServerPort':	5678
})
// clientConfig object contains the client specific data, name REST endpoint etc.
.constant('clientConfig', {
	'clientID':		'SCOPE',
	'serverIP': 	'scope.opensyscon.com.au',
	'serverPort':	3112
})
