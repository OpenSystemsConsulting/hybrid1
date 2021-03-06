angular.module('services', [])

.service('LoginService', function($q) {
	return {
		loginUser: function(name, pw) {
			var deferred = $q.defer();
			var promise = deferred.promise;

/*
			if (name == 'user' && pw == 'secret') {
				deferred.resolve('Welcome ' + name + '!');
			}
*/
			// Added by OSC ---------------------------------------
			// All sites hardcoded for now until we get an authorisation service running
			//else
			if (name == 'oscvtest' && pw == 'oscvtest') {
				deferred.resolve(name);
			} else if (name == 'osctest' && pw == 'osctest') {
				deferred.resolve(name);
			} else if (name == 'hybrid64' && pw == 'hybrid64') {
				deferred.resolve(name);
			} else if (name == 'scope' && pw == 'scope') {
				deferred.resolve(name);
			} else if (name == 'swift1' && pw == 'swift1') {
				deferred.resolve(name);
			} else if (name == 'wpe' && pw == 'wpe') {
				deferred.resolve(name);
			} else if (name == 'aptold' && pw == 'aptold') {
				deferred.resolve(name);
			} else if (name == 'apt' && pw == 'apt') {
				deferred.resolve(name);
			} else if (name == 'ces' && pw == 'ces') {
				deferred.resolve(name);
			} else if (name == 'redback' && pw == 'redback') {
				deferred.resolve(name);
			} else if (name == 'rback' && pw == 'rback') {			// Redback's new server 2018
				deferred.resolve(name);
			} else if (name == 'swift2' && pw == 'swift2') {
				deferred.resolve(name);
			} else if (name == 'cct' && pw == 'cct') {				// City Crane
				deferred.resolve(name);
			} else if (name == 'itd' && pw == 'itd') {				// Intime
				deferred.resolve(name);
			} else if (name == 'glc' && pw == 'glc') {				// Greenlight
				deferred.resolve(name);
			} else if (name == 'ace' && pw == 'ace') {				// Ace
				deferred.resolve(name);
			} else if (name == 'pam' && pw == 'pam') {				// P and M
				deferred.resolve(name);
			} else if (name == 'flg' && pw == 'flg') {				// Fair Logistics
				deferred.resolve(name);
			} else if (name == 'transit' && pw == 'transit') {		// Transit
				deferred.resolve(name);
			} else if (name == 'wads' && pw == 'wads') {			// WADS
				deferred.resolve(name);
			} else if (name == 'univ' && pw == 'univ') {			// Universal
				deferred.resolve(name);
			} else if (name == 'rawroad' && pw == 'rawroad') {		// Raw Road
				deferred.resolve(name);
			// ----------------------------------------------------
			} else {
				deferred.reject('Wrong credentials.');
			}
			promise.success = function(fn) {
				promise.then(fn);
				return promise;
			}
			promise.error = function(fn) {
				promise.then(null, fn);
				return promise;
			}
			return promise;
		}
	}
});
