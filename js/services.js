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
			} else if (name == 'scope' && pw == 'scope') {
				deferred.resolve(name);
			} else if (name == 'swift1' && pw == 'swift1') {
				deferred.resolve(name);
			} else if (name == 'wpe' && pw == 'wpe') {
				deferred.resolve(name);
			} else if (name == 'apt' && pw == 'apt') {
				deferred.resolve(name);
			} else if (name == 'ces' && pw == 'ces') {
				deferred.resolve(name);
			} else if (name == 'redback' && pw == 'redback') {
				deferred.resolve(name);
			} else if (name == 'swift2' && pw == 'swift2') {
				deferred.resolve(name);
			} else if (name == 'cct' && pw == 'cct') {
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
