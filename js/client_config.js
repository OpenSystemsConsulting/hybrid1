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
// clientConfig object contains the client specific data, name REST endpoint etc.
.constant('clientConfig', {
	'clientID;':	'OSCVTEST',
	'serverIP': 	'opensyscon.com.au',
	'serverPort':	3000
})
