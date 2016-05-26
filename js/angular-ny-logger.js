//https://github.com/naorye/angular-ny-logger
// TODO - LT - need to implement the ability to disable/enable log levels, info, debug etc.
angular.module('ny.logger', []).provider('Logger', [function () {
    var isEnabled = true;
    this.enabled = function(_isEnabled) {
        isEnabled = !!_isEnabled;
    };
    this.$get = ['$log','appConfig','pdaParams', function($log,appConfig,pdaParams) {
        var Logger = function(context) {
			context.ver = appConfig.version;
            this.context = context;
			this.pdaParams = pdaParams;
        };
        Logger.getInstance = function(context) {
            return new Logger(context);
        };
		Logger.setContext = function(context) {
			this.context = context;
		}
        Logger.supplant = function(str, o) {
            return str.replace(
                /\{([^{}]*)\}/g,
                function (a, b) {
                    var r = o[b];
                    return typeof r === 'string' || typeof r === 'number' ? r : a;
                }
            );
        };
        Logger.getFormattedTimestamp = function(date) {
           return Logger.supplant('{0}:{1}:{2}:{3}', [
                date.getHours(),
                date.getMinutes(),
                date.getSeconds(),
                date.getMilliseconds()
            ]);
        };
        Logger.getLogTimestamp = function(date) {
			return( date.toISOString());
        };
		Logger.getlogServerIP = function() {
			return(appConfig.logServerIP);
		};
		Logger.getlogServerPort = function() {
			return(appConfig.logServerPort);
		};
        Logger.prototype = {
            _log: function(originalFn, args) {
                if (!isEnabled) {
                    return;
                }
                
				var contentType = 'application/json; charset=UTF-8';
                var now  = Logger.getFormattedTimestamp(new Date());
                var message = '', supplantData = [];
				var logstring = '';


				// LT - BAD - check driver id and if zero update context
				// Logger function should not know details of context or what a driver id is!!!!
				if( this.context.driver == 0)
					this.context.driver = this.pdaParams.getDriverId();

				// LT - for our OSC PDA app context is a JSON object so need to convert to string
				var lcontext = JSON.stringify(this.context);
                switch (args.length) {
                    case 1:
                        message = Logger.supplant("{0} - {1}: {2}", [ now, lcontext, args[0] ]);
						logstring = args[0];
                        break;
                    case 3:
                        supplantData = args[2];
                        message = Logger.supplant("{0} - {1}::{2}(\'{3}\')", [ now, lcontext, args[0], args[1] ]);
						logtype = args[0];
						logstring = Logger.supplant(args[1], supplantData);
                        break;
                    case 2:
                        if (typeof args[1] === 'string') {
                            message = Logger.supplant("{0} - {1}::{2}(\'{3}\')", [ now, lcontext, args[0], args[1] ]);
							logtype = args[0];
							logstring = args[1];
                        } else {
                            supplantData = args[1];
                            message = Logger.supplant("{0} - {1}: {2}", [ now, lcontext, args[0] ]);
							logstring =  Logger.supplant(args[0], supplantData);
                        }
                        break;
                }

                $log[originalFn].call(null, Logger.supplant(message, supplantData));

				// LT - POST to log server
				/* The angular $http service cannot be used in the $log
				 * decorator because it will cause a circular dependecy.
				 * To overcome this  a direct ajax call should be made.
				 * TODO - maybe use "request" https://github.com/request/request/blob/master/README.md instead of jQuery to reduce footprint
				 */
				var OSC_log = {
					time:		Logger.getLogTimestamp(new Date()),
					logtype:	originalFn,
					context:	this.context,
					message:	logstring
				}
				$.ajax({
					type: 'POST',
					url: 'http://'+Logger.getlogServerIP()+':'+Logger.getlogServerPort(),
					contentType: contentType,
					data: JSON.stringify({
						pdalog: OSC_log
					})
				});

            },
            log: function() {
                this._log('log', arguments);
            },
            info: function() {
                this._log('info', arguments);
            },
            warn: function() {
                this._log('warn', arguments);
            },
            debug: function() {
                this._log('debug', arguments);
            },
            error: function() {
                this._log('error', arguments);
            }
        };
        return Logger;
    }];
}]);
