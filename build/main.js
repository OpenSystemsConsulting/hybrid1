webpackJsonp([15],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GpsHistoryApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_error_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__ = __webpack_require__(20);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `GpsHistory` model.
 *
 * **Details**
 *
 * Controlling Pda Device Management
 */
var GpsHistoryApi = /** @class */ (function (_super) {
    __extends(GpsHistoryApi, _super);
    function GpsHistoryApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `GpsHistory` object.)
     * </em>
     */
    GpsHistoryApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/gpsHistorys";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id gpsHistory id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `GpsHistory` object.)
     * </em>
     */
    GpsHistoryApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/gpsHistorys/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `GpsHistory`.
     */
    GpsHistoryApi.prototype.getModelName = function () {
        return "GpsHistory";
    };
    GpsHistoryApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */]])
    ], GpsHistoryApi);
    return GpsHistoryApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));

//# sourceMappingURL=GpsHistory.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_sdk_services__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fixed_queue_service_fixed_queue_service__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__device_service_device_service__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__log_service_log_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pdaparams_service_pdaparams_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__job_service_job_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_service_shared_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util_service_util_service__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/*
  Generated class for the MessageServiceProvider provider.

  A Service to handle incoming PDA messages

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
/*   interface payload {
    command:string,
    params:{}
   } */
var MessageServiceProvider = /** @class */ (function () {
    function MessageServiceProvider(fixedQueue, logger, pdaParams, deviceService, jobApi, jobService, sharedService, utilService) {
        this.fixedQueue = fixedQueue;
        this.logger = logger;
        this.pdaParams = pdaParams;
        this.deviceService = deviceService;
        this.jobApi = jobApi;
        this.jobService = jobService;
        this.sharedService = sharedService;
        this.utilService = utilService;
        this.logParams = { site: this.pdaParams.getSiteId(), driver: this.pdaParams.getDriverId(), fn: 'MessageServiceProvider' };
        this.log = this.logger.getInstance(this.logParams);
        /* Riyaz: fixedQueue is no longer imported as an npm library.
        It is now rewritten as an angular2 service within our codebase */
        this.msgQ = this.fixedQueue.create(50); // Store last x no. driver messages  	
        //newMsgCount = 0;			// keep a count of new messages - will reset once driver has seen them
        this.deleteJobChangeData = lbclient.deleteJobChangeData;
        this.deleteJseaChangeData = lbclient.deleteJseaChangeData;
        // console.log('Hello MessageServiceProvider Provider');
        this.sharedService.newMsgCount = 0;
    }
    MessageServiceProvider.prototype.isJson = function (str) {
        try {
            JSON.parse(str);
        }
        catch (e) {
            return false;
        }
        return true;
    };
    MessageServiceProvider.prototype.dumpLocalStorage = function () {
        this.log.info("DUMPING LOCAL STORAGE --STARTS");
        var logmsg = {};
        var dblist = ['osc-local-db', 'osc-driver-info', 'osc-push-credentials'];
        var len = dblist.length;
        // dump ALL items, not just out predefined ones
        len = localStorage.length;
        this.log.info("Dumping localstorage...");
        for (var i = 0; i < len; i++) {
            var key = localStorage.key(i);
            var value = localStorage[key];
            if (key != 'jobMetadata') {
                logmsg.type = 'dumpLocalStorage:' + key;
                if (this.isJson(value))
                    logmsg.data = JSON.parse(value);
                else
                    logmsg.data = value;
                this.log.info(logmsg);
            }
        }
        this.log.info("DUMPING LOCAL STORAGE --ENDS");
    };
    MessageServiceProvider.prototype.clearLocalStorage = function () {
        var logmsg = {};
        logmsg.type = 'clearLocalStorage';
        // clear local storage then log contents - should be empty
        localStorage.removeItem('osc-local-db');
        logmsg.data = JSON.parse(localStorage.getItem('osc-local-db'));
        this.log.info(logmsg);
    };
    MessageServiceProvider.prototype.setLocalStorage = function (params) {
        var logmsg = {};
        logmsg.type = 'setLocalStorage';
        for (var key in params) {
            var value = params[key];
            localStorage.setItem(key, value);
            logmsg.type = 'setLocalStorage:' + key;
            logmsg.data = localStorage.getItem(key);
            this.log.info(logmsg);
        }
    };
    MessageServiceProvider.prototype.clearChangeData = function () {
        var _this = this;
        var logmsg = {};
        logmsg.type = 'clearChangeData';
        // clear job-change and checkpoint data from local storage then log contents
        this.deleteJobChangeData = function (err, changeData) {
            if (err)
                _this.log.error(err);
            if (changeData)
                _this.log.debug(changeData);
            logmsg.data = JSON.parse(localStorage.getItem('osc-local-db'));
            _this.log.info(logmsg);
        };
        // clear jsea change data
        this.deleteJseaChangeData = function (err, changeData) {
            if (err)
                _this.log.error(err);
            if (changeData)
                _this.log.debug(changeData);
            logmsg.data = JSON.parse(localStorage.getItem('osc-local-db'));
            _this.log.info(logmsg);
        };
    };
    MessageServiceProvider.prototype.dumpDeviceInfo = function () {
        var logmsg = {};
        logmsg.type = 'Dumping Device Info..';
        var deviceData = this.deviceService.getDevice();
        //var i = this.deviceService.getDevice()
        logmsg.data = JSON.stringify(deviceData);
        this.log.info(logmsg);
    };
    MessageServiceProvider.prototype.setPdaParam = function (params) {
        var _this = this;
        var logmsg = {};
        logmsg.type = 'setPdaParam';
        this.pdaParams.setParameter(params, function (err) {
            if (err)
                _this.log.error(err);
            _this.log.info(logmsg);
        });
    };
    MessageServiceProvider.prototype.deleteJobs = function (params) {
        var _this = this;
        var logmsg = {};
        logmsg.type = 'deleteJobs';
        var delfilter = params;
        this.log.info('filter:' + JSON.stringify(delfilter));
        // must supply where filter
        if (delfilter.where) {
            this.jobApi.find(delfilter, function (err, jobs) {
                var len = jobs.length;
                _this.log.info("deleting:" + len + " legs");
                for (var leg = 0; leg < len; leg++) {
                    var job = jobs[leg];
                    _this.log.info("delete leg:" + leg + " job:" + job.mobjobSeq);
                    job.delete();
                }
            });
        }
        else {
            this.log.debug('No where filter provided');
        }
    };
    MessageServiceProvider.prototype.deleteOldJobs = function (params) {
        // REST API params object e.g.  { "daysback": 14 }
        var daysback = params.daysback || 7; // default to 7 days
        this.jobService.deleteOldJobs(daysback);
    };
    MessageServiceProvider.prototype.deleteJseaStatuses = function (params) {
        // REST API params object e.g.  { "jobNum": 12345 }
        this.jobService.deleteJseaStatuses(params.jobNum);
    };
    MessageServiceProvider.prototype.startWatching = function () {
        var _this = this;
        // PDA commands 
        // From REST endpoint /TpmPdaControllers/sendCommandToPDA/{driver}
        this.sharedService.commandToPDA.subscribe(function (payload) {
            _this.log.debug('commandToPDA:received:' + JSON.stringify(payload));
            //console.log('commandToPDA:received 1:' + JSON.stringify(payload));
            switch (payload.command) {
                case 'dumpLocalStorage':
                    _this.dumpLocalStorage();
                    break;
                case 'clearLocalStorage':
                    _this.clearLocalStorage();
                    break;
                case 'setLocalStorage':
                    _this.setLocalStorage(payload.params);
                    break;
                case 'clearChangeData':
                    _this.clearChangeData();
                    break;
                case 'setPdaParam':
                    _this.setPdaParam(payload.params);
                    break;
                case 'deleteJobs':
                    _this.deleteJobs(payload.params);
                    break;
                case 'deleteOldJobs':
                    _this.deleteOldJobs(payload.params);
                    break;
                case 'deleteJseaStatuses':
                    _this.deleteJseaStatuses(payload.params);
                    break;
                default:
                    var logmsg = {};
                    logmsg.type = 'commandToPDA';
                    _this.log.error('unknown command:' + payload.command);
                    //console.log('unknown command:' + payload.command);
                    break;
            }
        });
        // Message to driver
        //$rootScope.$on('messageToDriver', function (event, payload) {
        this.sharedService.messageToDriver.subscribe(function (payload) {
            //console.log('messageToDriver:received 1:' + JSON.stringify(payload));
            // payload.message has the message text
            //if (payload !== null) {
            if (!_this.utilService.isEmpty(payload)) {
                //console.log('messageToDriver:received 2:' + JSON.stringify(payload));
                _this.msgQ.push(payload.message);
                _this.sharedService.newMsgCount++;
            }
        });
        // more watchers if required
    };
    MessageServiceProvider.prototype.getMessages = function () {
        // get all messages
        return (this.msgQ);
    };
    MessageServiceProvider.prototype.getNewMesssageCount = function () {
        return (this.sharedService.newMsgCount);
    };
    MessageServiceProvider.prototype.resetNewMessageCount = function () {
        this.sharedService.newMsgCount = 0;
        //this.sharedService.messageToDriver.next({message:''});
    };
    MessageServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__fixed_queue_service_fixed_queue_service__["a" /* FixedQueueServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__log_service_log_service__["a" /* LogServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__device_service_device_service__["a" /* DeviceServiceProvider */], __WEBPACK_IMPORTED_MODULE_1__shared_sdk_services__["c" /* JobApi */],
            __WEBPACK_IMPORTED_MODULE_6__job_service_job_service__["a" /* JobServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_7__shared_service_shared_service__["a" /* SharedServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_8__util_service_util_service__["a" /* UtilServiceProvider */]])
    ], MessageServiceProvider);
    return MessageServiceProvider;
}());

//# sourceMappingURL=message-service.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SqliteServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_shared_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pdaparams_service_pdaparams_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_log_service_log_service__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the SqliteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SqliteServiceProvider = /** @class */ (function () {
    function SqliteServiceProvider(http, sharedService, pdaParams, logger) {
        var _this = this;
        this.http = http;
        this.sharedService = sharedService;
        this.pdaParams = pdaParams;
        this.logger = logger;
        this.db = null;
        this.dbname = 'tplus.db';
        // (<any>window).
        this.logParams = { site: this.pdaParams.getSiteId(), driver: this.pdaParams.getDriverId(), fn: 'SqliteServiceProvider' };
        this.log = this.logger.getInstance(this.logParams);
        this.opendbOnDeviceReady = function () {
            //this.db = (<any>window).sqlitePlugin.openDatabase({ name: 'test.db', location: 'default' });
            _this.db = window.sqlitePlugin.openDatabase({ name: _this.dbname, location: 'default' }, function (db) {
                // Here, you might create or open the table.
                db.transaction(function (tx) {
                    // ...
                    tx.executeSql('CREATE TABLE IF NOT EXISTS tplusStorage (item,itemvalue)', function (tx, res) {
                        _this.log.info("tplusStorage table created -- " + res);
                    });
                }, function (error) {
                    _this.log.error('Create transaction error: ' + error.message);
                }, function () {
                    _this.log.info('Create transaction ok');
                });
                _this.isOpen = true;
            }, function (error) {
                _this.log.error('Open database ERROR: ' + JSON.stringify(error));
            });
        };
        this.set = function (item, itemvalue) {
            //  let itemvalue = JSON.stringify(itemval);
            if (_this.db == null || _this.db === 'undefined') {
                _this.log.error("set: Db is undefined.");
                return;
            }
            _this.db.transaction(function (tx) {
                var query = "INSERT OR REPLACE INTO tplusStorage (item,itemvalue) VALUES (?,?)";
                tx.executeSql(query, [item, itemvalue], function (tx, res) {
                    // this.log.info("Sqlite Storage : Inserted item is :" + item + " for itemvalue:" + itemvalue);
                    //this.log.info("insertId: " + res.insertId + " -- probably 1");
                    //this.log.info("rowsAffected: " + res.rowsAffected + " -- should be 1");
                }, function (tx, error) {
                    _this.log.error('INSERT | UPDATE error: ' + error.message);
                });
            }, function (error) {
                _this.log.error('Insert | update transaction error: ' + error.message);
            }, function () {
                _this.log.info('Insert | update transaction ok');
            });
        };
        this.get = function (item) {
            if (_this.db == null || _this.db === 'undefined') {
                _this.log.error("get: Db is undefined.");
                return;
            }
            return new Promise(function (resolve, reject) {
                _this.db.transaction(function (tx) {
                    var query = "SELECT itemvalue FROM tplusStorage WHERE item = ?";
                    tx.executeSql(query, [item], function (tx, resultSet) {
                        /*   for(var x = 0; x < resultSet.rows.length; x++) {
                              this.log.info("First name: " + resultSet.rows.item(x).firstname +
                                  ", Acct: " + resultSet.rows.item(x).acctNo);
                          } */
                        _this.log.info('Select query item is :' + item);
                        // this.log.info('Select query execution result is :' + resultSet.rows.item(0).itemvalue);
                        //this.log.info('Select query execution result is :' + JSON.parse(resultSet.rows.item(0)));
                        if (resultSet.rows.item(0).itemvalue)
                            resolve(resultSet.rows.item(0).itemvalue);
                        else
                            resolve(0);
                    }, function (tx, error) {
                        //reject(error);
                        resolve(0);
                        _this.log.error('SELECT error: ' + error.message);
                    });
                }, function (error) {
                    //reject(false);
                    _this.log.error('Select transaction error: ' + error.message);
                }, function () {
                    _this.log.info('Select transaction ok');
                });
            });
        };
        this.getAndSetToLocalStorage = function () {
            if (_this.db == null || _this.db === 'undefined') {
                _this.log.error("getAndSetToLocalStorage: Db is undefined.");
                return;
            }
            return new Promise(function (resolve, reject) {
                _this.db.transaction(function (tx) {
                    var query = "SELECT item,itemvalue FROM tplusStorage";
                    tx.executeSql(query, [], function (tx, resultSet) {
                        for (var x = 0; x < resultSet.rows.length; x++) {
                            _this.log.info("item: " + resultSet.rows.item(x).item + ", ItemValue: " + resultSet.rows.item(x).itemvalue);
                            localStorage.setItem(resultSet.rows.item(x).item, resultSet.rows.item(x).itemvalue);
                            if (resultSet.rows.item(x).item == 'driverId') {
                                _this.pdaParams.setDriverInfo(resultSet.rows.item(x).itemvalue);
                                _this.pdaParams.logoffDriver();
                            }
                        }
                        resolve(true);
                    }, function (tx, error) {
                        //reject(error);
                        resolve(false);
                        _this.log.error('SELECT error: ' + error.message);
                    });
                }, function (error) {
                    reject(error);
                    //reject(false);
                    _this.log.error('Select transaction error: ' + error.message);
                }, function () {
                    _this.log.info('getAndSetToLocalStorage transaction ok');
                });
            });
        };
        this.clear = function () {
            if (_this.db == null || _this.db === 'undefined') {
                _this.log.error("clear: Db is undefined.");
                return;
            }
            return new Promise(function (resolve, reject) {
                _this.db.transaction(function (tx) {
                    var query = "DELETE FROM tplusStorage";
                    tx.executeSql(query, [], function (tx, res) {
                        _this.log.info("rowsAffected: " + res.rowsAffected);
                        resolve(true);
                    }, function (tx, error) {
                        reject(error);
                        _this.log.error('DELETE error: ' + error.message);
                    });
                }, function (error) {
                    resolve(false);
                    _this.log.error('Delete transaction error: ' + error.message);
                }, function () {
                    _this.log.info('Delete transaction ok');
                });
            });
        };
        this.printAll = function () {
            _this.db.transaction(function (tx) {
                var query = "SELECT item, itemvalue FROM tplusStorage";
                tx.executeSql(query, [], function (tx, resultSet) {
                    _this.log.info("----------START PRINTING VALUES---------------");
                    for (var x = 0; x < resultSet.rows.length; x++) {
                        _this.log.info("Item: " + resultSet.rows.item(x).item +
                            ", Value: " + resultSet.rows.item(x).itemvalue);
                        _this.log.info("-------------------------");
                    }
                    _this.log.info("---------END PRINTING VALUES----------------");
                }, function (tx, error) {
                    _this.log.error('printAll error: ' + error.message);
                });
            }, function (error) {
                //reject(false);
                _this.log.error('PRINTALL transaction error: ' + error.message);
            }, function () {
                _this.log.info('PRINTALL transaction ok');
            });
        };
        this.sqliteStorageList = function () {
            return new Promise(function (resolve, reject) {
                _this.db.transaction(function (tx) {
                    var query = "SELECT item,itemvalue FROM tplusStorage";
                    tx.executeSql(query, [], function (tx, resultSet) {
                        /*   for (var x = 0; x < resultSet.rows.length; x++) {
                            this.log.info("item: " + resultSet.rows.item(x).item + ", ItemValue: " + resultSet.rows.item(x).itemvalue);
                            localStorage.setItem(resultSet.rows.item(x).item, resultSet.rows.item(x).itemvalue);
                          } */
                        resolve(resultSet.rows.item);
                    }, function (tx, error) {
                        //reject(error);
                        resolve(false);
                        //this.log.info('SELECT error: ' + error.message);
                    });
                }, function (error) {
                    reject(error);
                    //reject(false);
                    //this.log.info('Select transaction error: ' + error.message);
                }, function () {
                    _this.log.info('getAndSetToLocalStorage transaction ok');
                });
            });
        };
        ////////////////////////////////////////////////////////////////////////
        this.echoTest = function () {
            document.addEventListener('deviceready', function () {
                window.sqlitePlugin.echoTest(function () {
                    _this.log.info('ECHO test OK');
                });
            });
        };
        this.selfTest = function () {
            document.addEventListener('deviceready', function () {
                window.sqlitePlugin.selfTest(function () {
                    _this.log.info('SELF test OK');
                });
            });
        };
        this.sqlStringTest = function () {
            document.addEventListener('deviceready', function () {
                var db = window.sqlitePlugin.openDatabase({ name: _this.dbname, location: 'default' });
                db.transaction(function (tr) {
                    tr.executeSql("SELECT upper('Test string') AS upperString", [], function (tr, rs) {
                        _this.log.info('Got upperString result: ' + rs.rows.item(0).upperString);
                    });
                });
            });
        }; //sqlStringTest ends
        this.closeDB = function () {
            _this.db.close(function () {
                _this.log.info("DB closed!");
            }, function (error) {
                _this.log.error("Error closing DB:" + error.message);
            });
        };
        this.log.info('Hello SqliteServiceProvider Provider');
        if (!this.isOpen) {
            document.addEventListener('deviceready', this.opendbOnDeviceReady, false);
        }
    } //constructor ends
    SqliteServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__shared_service_shared_service__["a" /* SharedServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_log_service_log_service__["a" /* LogServiceProvider */]])
    ], SqliteServiceProvider);
    return SqliteServiceProvider;
}());

//# sourceMappingURL=sqlite-service.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JseaServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pdaparams_service_pdaparams_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__siteconfig_service_siteconfig_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_shared_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__log_service_log_service__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the JseaServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var JseaServiceProvider = /** @class */ (function () {
    function JseaServiceProvider(pdaParams, logger, siteConfig, sharedService) {
        // console.log('Hello JseaServiceProvider Provider');
        var _this = this;
        this.pdaParams = pdaParams;
        this.logger = logger;
        this.siteConfig = siteConfig;
        this.sharedService = sharedService;
        //STARTOFDAY is for Start of Day agreements, PERJOB is for Job agreements
        this.jseaServiceTypes = new Array();
        //myConfiguredForJsea: boolean = false;
        this.SODSERVICE_IS_NEW_DAY = false;
        this.SITE_CONFIG_LOADED = false;
        this.myDetailJobnum = 0;
        this.myDetailJobJseaCaptured = false;
        this.myJobStatusType = 'N/A';
        this.myFormType = 'JSEA';
        this.myFormLeg = 0;
        this.deleteJseaChangeData = lbclient.deleteJseaChangeData;
        this.LocalJseaDriverAnswers = lbclient.models.LocalJseaDriverAnswers;
        this.logParams = { site: this.pdaParams.getSiteId(), driver: this.pdaParams.getDriverId(), fn: 'JseaServiceProvider' };
        this.log = this.logger.getInstance(this.logParams);
        this.deleteOldData = function (daysback) {
            // delete old data
            // if daysback parameter provided use it otherwise use site config value
            var val = _this.siteConfig.getSiteConfigInt('PDA_DEL_DAYSBACK');
            daysback = daysback || val;
            var queryDate = new Date();
            queryDate.setDate(queryDate.getDate() - daysback);
            _this.log.info("deleteOldData: daysback:" + daysback + ", queryDate:" + queryDate);
            if (daysback > 1) {
                var delfilter = { "where": { "jdaJobBday": { "lt": queryDate } } };
                _this.log.info("deleteOldData: delfilter:" + JSON.stringify(delfilter));
                _this.LocalJseaDriverAnswers.find(delfilter, function (err, answers) {
                    var len = answers.length;
                    _this.log.info("deleteOldData: deleting:" + len + " answers");
                    for (var i = 0; i < len; i++) {
                        var answer = answers[i];
                        _this.log.info("deleteOldData: delete answer:" + i + " job:" + answer.jdaJobNum + " date:" + answer.jdaJobBday + " order:" + answer.jdaOrder);
                        answer.delete();
                    }
                    // clear jsea change data if we've deleted any old answers
                    if (len > 1) {
                        _this.deleteJseaChangeData(function (err, changeData) {
                            if (err)
                                _this.log.error(err);
                            if (changeData)
                                _this.log.info(changeData);
                        });
                    }
                });
            }
        }; //deleteOldData ends here
        //Subscribe to the SODSERVICE_IS_NEW_DAY subject.
        this.sharedService.SODSERVICE_IS_NEW_DAY.subscribe(function (SODSERVICE_IS_NEW_DAY) {
            _this.SODSERVICE_IS_NEW_DAY = SODSERVICE_IS_NEW_DAY;
        });
        //Subscribe to the SITE_CONFIG_LOADED subject.
        this.sharedService.SITE_CONFIG_LOADED.subscribe(function (SITE_CONFIG_LOADED) {
            _this.SITE_CONFIG_LOADED = SITE_CONFIG_LOADED;
        });
        this.jseaServiceTypes["SOD"] = "STARTOFDAY";
        this.jseaServiceTypes["PJB"] = "PERJOB";
        this.myDetailJobdate = new Date(); //Default to current day
        this.myDetailJobdate.setHours(0, 0, 0, 0); //remove time portion
        if (localStorage.getItem('PDA_JSEA_TYPE')) {
            this.jseaServiceType = localStorage.getItem('PDA_JSEA_TYPE');
        }
        else {
            this.jseaServiceType = this.jseaServiceTypes["SOD"]; //Default
        }
    }
    JseaServiceProvider.prototype.setJseaIsCaptured = function (val) {
        if (this.jseaServiceType == this.jseaServiceTypes["SOD"]) {
            localStorage.setItem('JSEA_SOD_CAPTURED', val);
        }
        if (this.jseaServiceType == this.jseaServiceTypes["PJB"]) {
            this.myDetailJobJseaCaptured = (val == "Y");
        }
    };
    JseaServiceProvider.prototype.setJseaType = function (larg) {
        var match = false;
        //this.log.info('Setting JseaType passed ' + larg);
        for (var key in this.jseaServiceTypes) {
            var lvalue = this.jseaServiceTypes[key];
            //this.log.info(' lvalue : ' + lvalue);
            if (larg == lvalue) {
                match = true;
                this.jseaServiceType = this.jseaServiceTypes[key];
                this.log.info('Setting JseaType got a match on ' + lvalue + " To " + this.jseaServiceTypes[key]);
                //this.myConfiguredForJsea = true;
                this.sharedService.setMyConfiguredForJsea(true);
            }
        }
        if (match == false) {
            this.log.info('Setting JseaType NO MATCH on ' + larg + ' Will be Set to default: ' + this.jseaServiceType);
        }
    };
    JseaServiceProvider.prototype.setJseaTypePerJob = function () {
        this.log.info('Setting JseaType to Per Job');
        this.jseaServiceType = this.jseaServiceTypes["PJB"];
    };
    JseaServiceProvider.prototype.setJseaTypeStartOfDay = function () {
        this.log.info('Setting JseaType to StartOfDay');
        this.jseaServiceType = this.jseaServiceTypes["SOD"];
    };
    JseaServiceProvider.prototype.getJseaType = function () {
        return this.jseaServiceType;
    };
    JseaServiceProvider.prototype.isJseaStartOfDay = function () {
        return (this.jseaServiceType == this.jseaServiceTypes["SOD"]);
    };
    JseaServiceProvider.prototype.getJseaConfig = function () {
        //this.log.info('Getting JseaIsCaptured');
        //If we havn't been configured then don't stop the person doing things in the app
        //if (this.myConfiguredForJsea == false) {
        if (this.sharedService.getMyConfiguredForJsea() == false) {
            this.log.info('this.myConfiguredForJsea = ' + this.sharedService.getMyConfiguredForJsea() + ' So will return true');
            return 'NA';
        }
        if (this.isJseaStartOfDay()) {
            var lstr;
            this.log.info('Getting JseaIsCaptured this.jseaServiceType = ' + this.jseaServiceType + ' From Local storage');
            lstr = localStorage.getItem('JSEA_SOD_CAPTURED');
            if (lstr == 'Y') {
                return 'SOD_YES';
            }
            else {
                return 'SOD_NO';
            }
        }
        else {
            return 'PJB_CHECK';
        }
    };
    JseaServiceProvider.prototype.startWatching = function () {
        var _this = this;
        //if (this.SODSERVICE_IS_NEW_DAY || localStorage.getItem('SODSERVICE_IS_NEW_DAY')) {
        this.sharedService.SODSERVICE_IS_NEW_DAY.subscribe(function (SODSERVICE_IS_NEW_DAY) {
            //this.log.info('SODSERVICE_IS_NEW_DAY Event triggered');
            if (_this.isJseaStartOfDay()) {
                _this.log.info('SODSERVICE_IS_NEW_DAY isJseaStartOfDay is TRUE ');
                //Update the value to be No and then when the guy uses the ctrler this will make it Yes
                localStorage.setItem('JSEA_SOD_CAPTURED', 'N');
            }
            else {
                _this.log.info('SODSERVICE_IS_NEW_DAY isJseaStartOfDay is NOT TRUE assume PER JOB');
            }
        });
        // if (this.SITE_CONFIG_LOADED || localStorage.getItem('SITE_CONFIG_LOADED')) {
        this.sharedService.SITE_CONFIG_LOADED.subscribe(function (SITE_CONFIG_LOADED) {
            //console.log("Hi from jsea-service.ts");
            // this.log.info('SITE_CONFIG_LOADED Event triggered');
            if (_this.siteConfig.getSiteConfigValue('PDA_JSEA_ON') === 'Y' || _this.pdaParams.pda_jsea_on) {
                //Now get the type value
                var lvar = _this.siteConfig.getSiteConfigValue('PDA_JSEA_TYPE');
                if (lvar != '') {
                    _this.mystr = "getSiteConfig returned  " + lvar;
                    _this.log.info(_this.mystr);
                    //Set the TYpe in the service
                    _this.setJseaType(lvar);
                }
                else {
                    _this.mystr = "getSiteConfig returned nothing !!!!";
                    _this.log.info(_this.mystr);
                }
            }
        });
    }; //startWatching() ends here
    JseaServiceProvider.prototype.setJobJseaDetails = function (jobnum, jobdate, iscaptured, statusType, formType, formLeg) {
        this.log.info('setJobJseaDetails' + ' Jobnum: ' + jobnum + ' Jobdate ' + jobdate + ' IsCaptured '
            + iscaptured, ' StatusTYpe' + statusType, ' FormType ' + formType, ' FormLeg' + formLeg);
        this.myDetailJobnum = jobnum;
        this.myDetailJobdate = jobdate;
        this.myDetailJobJseaCaptured = (iscaptured == 'Y');
        this.myJobStatusType = statusType;
        this.myFormType = formType;
        this.myFormLeg = formLeg;
    };
    JseaServiceProvider.prototype.getServiceJobNum = function () {
        return this.myDetailJobnum;
    };
    JseaServiceProvider.prototype.getServiceJobDate = function () {
        return this.myDetailJobdate;
    };
    JseaServiceProvider.prototype.getServiceStatusType = function () {
        return this.myJobStatusType;
    };
    JseaServiceProvider.prototype.getServiceFormType = function () {
        return this.myFormType;
    };
    JseaServiceProvider.prototype.getServiceFormLeg = function () {
        return this.myFormLeg;
    };
    JseaServiceProvider.prototype.checkJobDateJseaCaptured = function (jobnum, jobdate) {
        this.log.info('checkJobDate' + ' Passed Jobnum: ' + jobnum + ' Passed Jobdate ' + jobdate);
        if (jobnum == this.myDetailJobnum && jobdate == this.myDetailJobdate) {
            this.log.info('updateJobIsCaptured' + ' Svc Jobnum: ' + jobnum + ' Svc Jobdate ' + jobdate);
            return (this.myDetailJobJseaCaptured);
        }
        return false;
    };
    JseaServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__log_service_log_service__["a" /* LogServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__siteconfig_service_siteconfig_service__["a" /* SiteconfigServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__shared_service_shared_service__["a" /* SharedServiceProvider */]])
    ], JseaServiceProvider);
    return JseaServiceProvider;
}());

//# sourceMappingURL=jsea-service.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GpsAuditServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__log_service_log_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pdaparams_service_pdaparams_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fixed_queue_service_fixed_queue_service__ = __webpack_require__(177);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the GpsAuditServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var GpsAuditServiceProvider = /** @class */ (function () {
    function GpsAuditServiceProvider(fixedQueue, pdaParams, logger) {
        //console.log('Hello GpsAuditServiceProvider Provider');
        this.fixedQueue = fixedQueue;
        this.pdaParams = pdaParams;
        this.logger = logger;
        this.logParams = { site: this.pdaParams.getSiteId(), driver: this.pdaParams.getDriverId(), fn: 'GpsAuditServiceProvider' };
        this.log = this.logger.getInstance(this.logParams);
        // Store last x no. of gps locations while tracking so we can display for audit purposes
        /* Riyaz: fixedQueue is no longer imported as an npm library.
           It is now rewritten as an angular2 service within our codebase */
        this.gpsHistory = this.fixedQueue.create(1000);
        this.lastGps = { gps_latitude: 0, gps_longitude: 0 };
    }
    GpsAuditServiceProvider.prototype.saveGps = function (gpsData) {
        // gpsData is an object of gpsHistory
        this.gpsHistory.push(gpsData);
        //this.lastGps = angular.copy(gpsData);
        this.lastGps = Object.assign({}, gpsData);
    };
    GpsAuditServiceProvider.prototype.getHistory = function () {
        return (this.gpsHistory.reverse());
    };
    GpsAuditServiceProvider.prototype.getLastGPS = function () {
        // TODO - maybe have arg for time so only return GPS if within last x secs
        return (this.lastGps);
    };
    GpsAuditServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__fixed_queue_service_fixed_queue_service__["a" /* FixedQueueServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1__log_service_log_service__["a" /* LogServiceProvider */]])
    ], GpsAuditServiceProvider);
    return GpsAuditServiceProvider;
}());

//# sourceMappingURL=gps-audit-service.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectivityMonitorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_service_util_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pdaparams_service_pdaparams_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__log_service_log_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_service_shared_service__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*
  Generated class for the ConnectivityMonitorProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var ConnectivityMonitorProvider = /** @class */ (function () {
    function ConnectivityMonitorProvider(pdaParams, utilService, logger, platform, network, sharedService) {
        var _this = this;
        this.pdaParams = pdaParams;
        this.utilService = utilService;
        this.logger = logger;
        this.platform = platform;
        this.network = network;
        this.sharedService = sharedService;
        this.logParams = { site: this.pdaParams.getSiteId(), driver: this.pdaParams.getDriverId(), fn: 'ConnectivityMonitorProvider' };
        this.log = this.logger.getInstance(this.logParams);
        this.isConnected = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](true);
        this.networkType = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"]('');
        this.startWatching = function () {
            _this.disConnectSubscribe();
            _this.connectSubscribe();
        }; //startWatching ends here
        this.log.info('Hello ConnectivityMonitorProvider Provider');
        this.sharedService.networkType = network.type;
        //this.monitorOnline = siteConfig.getSiteConfigValue('PDA_MONITOR_ONLINE') == 'Y';
        //this.monitorOnline = true;
    }
    ConnectivityMonitorProvider.prototype.disConnectSubscribe = function () {
        var _this = this;
        // watch network for a disconnection
        this.disconnectSubscription = this.network.onDisconnect().subscribe(function () {
            _this.log.info('network was disconnected :-(');
            var d = new Date();
            localStorage.setItem("OfflineTimeStamp", _this.utilService.getLocalTimestamp(d));
            //alert("Disconnected!!");
            _this.sharedService.isOnline = false;
            _this.isConnected.next(false);
            _this.networkType.next(_this.network.type);
        });
    };
    ConnectivityMonitorProvider.prototype.connectSubscribe = function () {
        var _this = this;
        // watch network for a connection
        this.connectSubscription = this.network.onConnect().subscribe(function () {
            _this.log.info('network connected!');
            //alert("Connected!!");
            if (localStorage.getItem('OfflineTimeStamp')) {
                _this.log.info('Device went offline at :' + localStorage.getItem('OfflineTimeStamp'));
                localStorage.removeItem('OfflineTimeStamp');
            }
            //Riyaz - iOS Hack: Set the full replication for syncing to true, when the device gets reconnected.
            _this.pdaParams.fullReplication = true;
            _this.sharedService.isOnline = true;
            _this.isConnected.next(true);
            // We just got a connection but we need to wait briefly
            // before we determine the connection type. Might need to wait.
            // prior to doing any api requests as well.
            setTimeout(function () {
                _this.sharedService.networkType = _this.network.type;
                _this.networkType.next(_this.network.type);
            }, 2000);
        });
    };
    ConnectivityMonitorProvider.prototype.ngOnDestroy = function () {
        this.disconnectSubscription.unsubscribe();
        this.connectSubscription.unsubscribe();
    };
    ConnectivityMonitorProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__util_service_util_service__["a" /* UtilServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__log_service_log_service__["a" /* LogServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_7__shared_service_shared_service__["a" /* SharedServiceProvider */]])
    ], ConnectivityMonitorProvider);
    return ConnectivityMonitorProvider;
}());

//# sourceMappingURL=connectivity-monitor.js.map

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PdaparamsServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_service_config_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_shared_service__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the PdaparamsServiceProvider provider.

  Get driver ID from local storage
     If no driver ID then this must be first time setup so prompt for it (IMEI as well?)
     Can then retrieve rest of driver details from tpm_pda_controller table

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var PdaparamsServiceProvider = /** @class */ (function () {
    function PdaparamsServiceProvider(configService, sharedService) {
        this.configService = configService;
        this.sharedService = sharedService;
        this.pda_image_notes = true;
        this.fullReplication = false;
        // TODO - siteId needs to be in a config file somewhere
        this.localdriver = {
            driverId: 0,
            accessAllowed: false,
            loggedOn: false,
            lastUpdate: 0,
            debugMode: false
        };
        this.debugMode = this.localdriver.debugMode;
        this.experimental = true; // enable any experimental features
        this.multileg = true; // enable separate pods for multileg jobs
        this.jobdisplay = false; // jobs tab does a quick display from local storage while sync takes place
        this.multiSelect = true; // Allow multi job select for Accept; Pickup etc.
        this.GPSInterval = 60000; // 1 minute default to grab GPS data (milliseconds)
        this.alwaysGetGPS = false;
        this.pda_jsea_on = false;
        this.imagePollTime = 60000 * 5; // 5 minute default
        this.imageUpload = true;
        this.syncDL = false; // sync DL jobs as well
        this.getAppBuild = function () {
            return this.configService.appConfig.build;
        };
        //console.log('Hello PdaparamsServiceProvider Provider');
        this.driverId = this.getDriverId();
        if (this.sharedService.testing)
            this.jobDetailOneDayOnly = false;
        else
            this.jobDetailOneDayOnly = true;
        //this.pda_disable_diagnostics_bgps_on_logoff = (this.siteConfig.getSiteConfigValue('PDA_DISABLE_DIAGNOSTICS_BGPS_ON_LOGOFF') == 'Y');
    } //Constructor ends
    PdaparamsServiceProvider.prototype.getParams = function () {
        this.localdriver = JSON.parse(localStorage.getItem('osc-driver-info')) || this.localdriver;
        return this.localdriver;
    };
    ;
    PdaparamsServiceProvider.prototype.getAppVersion = function () {
        return this.configService.appConfig.version;
    };
    ;
    PdaparamsServiceProvider.prototype.getDriverId = function () {
        this.localdriver = this.getParams();
        this.driverId = this.localdriver.driverId;
        return this.localdriver.driverId;
    };
    ;
    PdaparamsServiceProvider.prototype.getSiteId = function () {
        // NOTE - should be in service but got circular dependancy when injecting siteService
        var siteId = localStorage.getItem('clientId');
        return siteId;
    };
    ;
    PdaparamsServiceProvider.prototype.clearDriverInfo = function () {
        localStorage.removeItem('osc-driver-info');
    };
    ;
    PdaparamsServiceProvider.prototype.setDriverInfo = function (driverId) {
        this.localdriver.driverId = driverId;
        this.driverId = driverId;
        localStorage.setItem('osc-driver-info', JSON.stringify(this.localdriver));
    };
    ;
    PdaparamsServiceProvider.prototype.setDebugMode = function (value) {
        this.localdriver.debugMode = value || false;
        localStorage.setItem('osc-driver-info', JSON.stringify(this.localdriver));
    };
    ;
    PdaparamsServiceProvider.prototype.logonDriver = function () {
        this.localdriver = this.getParams();
        this.localdriver.loggedOn = true;
        this.localdriver.lastUpdate = Date.now();
        this.sharedService.loginFlag = true;
        localStorage.setItem('osc-driver-info', JSON.stringify(this.localdriver));
    };
    ;
    PdaparamsServiceProvider.prototype.logoffDriver = function () {
        this.localdriver = this.getParams();
        this.localdriver.loggedOn = false;
        this.localdriver.lastUpdate = Date.now();
        this.sharedService.loginFlag = false;
        localStorage.setItem('osc-driver-info', JSON.stringify(this.localdriver));
    };
    ;
    PdaparamsServiceProvider.prototype.isDrvLoggedOff = function () {
        this.localdriver = this.getParams();
        if (this.localdriver.loggedOn) {
            return false;
        }
        else {
            return true;
        }
    };
    ;
    PdaparamsServiceProvider.prototype.isDrvLoggedOn = function () {
        this.localdriver = this.getParams();
        if (this.localdriver.loggedOn) {
            return true;
        }
        else {
            return false;
        }
    };
    ;
    PdaparamsServiceProvider.prototype.checkDriverStatus = function () {
        // If device is resumed first time on a date after last login then auto logoff the driver
        // which will ensure he has to login in again before processing any work
        // (so in effect an auto logout overnight)
        // TODO - need a date check etc.
        //this.logoffDriver();
    };
    ;
    PdaparamsServiceProvider.prototype.setParameter = function (params, cb) {
        // params is object of (maybe array) of key/value pair(s) for us to set
        // e.g. { "experimental":false}
        for (var key in params) {
            if (this.hasOwnProperty(key)) {
                this[key] = params[key];
            }
        }
        if (cb)
            cb();
    };
    ;
    PdaparamsServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__config_service_config_service__["a" /* ConfigServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__shared_service_shared_service__["a" /* SharedServiceProvider */]])
    ], PdaparamsServiceProvider);
    return PdaparamsServiceProvider;
}());

//# sourceMappingURL=pdaparams-service.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackgroundGeolocationServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_sdk_models_GpsHistory__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_sdk_services_custom_GpsHistory__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gps_audit_service_gps_audit_service__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pdaparams_service_pdaparams_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__log_service_log_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_device__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation';







/*
  Generated class for the BackgroundGeolocationServiceProvider provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var BackgroundGeolocationServiceProvider = /** @class */ (function () {
    function BackgroundGeolocationServiceProvider(pdaParams, logger, gpsAudit, gpsHistApi, platform, device) {
        var _this = this;
        this.pdaParams = pdaParams;
        this.logger = logger;
        this.gpsAudit = gpsAudit;
        this.gpsHistApi = gpsHistApi;
        this.platform = platform;
        this.device = device;
        // GPS timestamps are in milliseconds since epoch - iOS also has a fractional part
        // e.g. iOS:		1463707063130.011
        // e.g. Android:	1463707069003
        // Site for millisecond calcs and conversions: http://currentmillis.com/
        this.logParams = { site: this.pdaParams.getSiteId(), driver: this.pdaParams.getDriverId(), fn: 'BackgroundGeolocationServiceProvider' };
        this.log = this.logger.getInstance(this.logParams);
        this.lastGPSsecs = 0; // last timestamp in seconds
        this.thisGPSsecs = 0; // this timestamp in seconds
        this.diffGPSsecs = 0;
        this.threshold = 1; // diff between gps must be greater than this to save
        this.setEvents = function () {
            _this.configureBggs();
            _this.plt.ready().then(function (readySource) {
                _this.osplatform = _this.device.platform;
                if (_this.osplatform != null) {
                    _this.osplatform = _this.osplatform.toLowerCase();
                    window.BackgroundGeolocation.on('location', function (location) {
                        // handle your locations here 
                        // to perform long running operation on iOS
                        // you need to create background task
                        if (_this.osplatform.localeCompare('ios') == 0) {
                            window.BackgroundGeolocation.startTask(function (taskKey) {
                                // execute long running task
                                //this.log.info('Calling saveGpsToDb: location:' + JSON.stringify(location));
                                _this.saveGpsToDb(_this.pdaParams.getDriverId(), location);
                                // eg. ajax post location
                                // IMPORTANT: task has to be ended by endTask
                                window.BackgroundGeolocation.endTask(taskKey);
                            });
                        }
                        else {
                            //this.log.info('Calling saveGpsToDb: location:' + JSON.stringify(location));
                            _this.log.info("BGGS: Calling saveGpsToDb.");
                            _this.saveGpsToDb(_this.pdaParams.getDriverId(), location);
                        }
                    });
                    window.BackgroundGeolocation.on('stationary', function (stationaryLocation) {
                        // handle stationary locations here
                        _this.log.info('  BackgroundGeolocation location is stationary.');
                    });
                    window.BackgroundGeolocation.on('error', function (error) {
                        _this.log.debug('  BackgroundGeolocation error:' + error.code + " ,error message:" + error.message);
                    });
                    window.BackgroundGeolocation.on('start', function () {
                        _this.log.info('  BackgroundGeolocation service has been started');
                    });
                    window.BackgroundGeolocation.on('stop', function () {
                        _this.log.info('  BackgroundGeolocation service has been stopped');
                    });
                    window.BackgroundGeolocation.on('background', function () {
                        _this.log.info('  App is in background');
                        // you can also reconfigure service (changes will be applied immediately)
                        //  (<any>window).BackgroundGeolocation.configure({ debug: true });
                    });
                    window.BackgroundGeolocation.on('foreground', function () {
                        _this.log.info('  App is in foreground');
                        // (<any>window).BackgroundGeolocation.configure({ debug: false });
                    });
                }
            }); //End of platformReady fn  
        }; //setEvents() ends
        this.configureBggs = function () {
            // defaults for background gps   
            _this.pdaParams.gps_stopOnTerminate = true;
            _this.pdaParams.gps_debug = false;
            _this.pdaParams.gps_desiredAccuracy = 10;
            _this.pdaParams.gps_stationaryRadius = 20;
            _this.pdaParams.gps_activityType = 'AutomotiveNavigation';
            _this.pdaParams.gps_distanceFilter = 30;
            _this.pdaParams.gps_interval = 60000; // use this in milliseconds instead   
            _this.pdaParams.gps_fastestInterval = 30000;
            _this.pdaParams.gps_activitiesInterval = 60000;
            _this.pdaParams.gps_stopOnStillActivity = false;
            _this.plt.ready().then(function (readySource) {
                _this.osplatform = _this.device.platform;
                if (_this.osplatform != null) {
                    _this.osplatform = _this.osplatform.toLowerCase();
                    if (_this.osplatform.localeCompare('ios') == 0) {
                        window.BackgroundGeolocation.configure({
                            locationProvider: window.BackgroundGeolocation.DISTANCE_FILTER_PROVIDER,
                            desiredAccuracy: _this.pdaParams.gps_desiredAccuracy,
                            distanceFilter: _this.pdaParams.gps_distanceFilter,
                            stationaryRadius: _this.pdaParams.gps_stationaryRadius,
                            activityType: _this.pdaParams.gps_activityType,
                            debug: _this.pdaParams.gps_debug,
                            stopOnTerminate: _this.pdaParams.gps_stopOnTerminate // <-- enable this to clear background location settings when the app terminates
                        });
                    }
                    else {
                        window.BackgroundGeolocation.configure({
                            locationProvider: window.BackgroundGeolocation.ACTIVITY_PROVIDER,
                            desiredAccuracy: _this.pdaParams.gps_desiredAccuracy,
                            stationaryRadius: _this.pdaParams.gps_stationaryRadius,
                            distanceFilter: _this.pdaParams.gps_distanceFilter,
                            interval: _this.pdaParams.gps_interval,
                            debug: _this.pdaParams.gps_debug,
                            stopOnTerminate: _this.pdaParams.gps_stopOnTerminate,
                            fastestInterval: _this.pdaParams.gps_fastestInterval,
                            activitiesInterval: _this.pdaParams.gps_activitiesInterval,
                            stopOnStillActivity: _this.pdaParams.gps_stopOnStillActivity //ANDROID ONLY--stop() is forced, when the STILL activity is detected (default is true)
                        });
                    }
                }
            });
        };
        this.saveGpsToDb = function (drvid, location) {
            //GpsHistory() is a call to the GpsHistory model
            var lgps = new __WEBPACK_IMPORTED_MODULE_2__shared_sdk_models_GpsHistory__["a" /* GpsHistory */]();
            lgps.gps_driver_id = drvid;
            //var platform = $cordovaDevice.getPlatform();
            //this.log.info("BGGS platform:" + this.device_platform + ", location:" + JSON.stringify(location));
            // LT - 06/07/2016 - with 2.52 release iOS devices do not appear to have a location.timestamp property
            // but do have the location.time property - check for both
            if (_this.osplatform.localeCompare('ios') == 0) {
                if (location.timestamp) {
                    lgps.gps_timestamp = location.timestamp;
                }
                else if (location.time) {
                    lgps.gps_timestamp = location.time;
                }
                else {
                    // lgps.gps_timestamp = Date.now();
                    lgps.gps_timestamp = new Date();
                    _this.log.error("BGGS: no time provided so use now:" + lgps.gps_timestamp);
                }
                lgps.gps_heading = 0; // IOS Has a heading if u want to use it later
            }
            else {
                lgps.gps_timestamp = location.time;
                lgps.gps_heading = 0; // Android has a bearing if u want to use it later
            }
            //this.log.info("lgps.gps_timestamp:: " + lgps.gps_timestamp);
            _this.ltimestamp = new Date(lgps.gps_timestamp);
            //this.log.info("this.ltimestamp:: " + this.ltimestamp);
            // check last GPS and only update if diff is greater than x seconds
            _this.thisGPSsecs = _this.ltimestamp.getTime() / 1000; // current GPS time in seconds
            _this.diffGPSsecs = _this.thisGPSsecs - _this.lastGPSsecs;
            _this.lastGPSsecs = _this.ltimestamp.getTime() / 1000;
            // lgps.gps_timestamp is UTC at this point
            //var ldate = new Date(lgps.gps_timestamp);
            //var oset = ldate.getTimezoneOffset();
            // lgps.gps_timestamp converted to local time - no timezone now
            //var temp: any = this.ltimestamp.getTime() + (oset * -1) * 60 * 1000;
            //this.log.info("temp:::" + temp);
            //this.log.info("temp with offset::" + this.ltimestamp.getTime() + (oset * -1) * 60 * 1000);
            if (location.speed !== null && location.speed !== undefined)
                lgps.gps_speed = location.speed;
            else
                lgps.gps_speed = 0;
            lgps.gps_timestamp = _this.ltimestamp;
            lgps.gps_latitude = location.latitude;
            lgps.gps_longitude = location.longitude;
            lgps.gps_quality = location.accuracy;
            lgps.gps_time = 0; //location.time;
            // TODO - need to NOT rely on log - need our own access to this function
            var loggedOn = _this.log.pdaParams.isDrvLoggedOn();
            //this.log.info("BGGS driver:" + lgps.gps_driver_id + ", loggedOn:" + loggedOn + ", lgps:" + JSON.stringify(lgps));
            _this.gpsAudit.saveGps(lgps);
            //Riyaz:Now change the lgps.timestamp to oracle date, before saving it to the oracle DB.
            //lgps.gps_timestamp = new Date(lgps.gps_timestamp.valueOf());
            // TODO - do we need any more criteria to create history record?  if connected?
            if (lgps.gps_driver_id > 0 && _this.diffGPSsecs > _this.threshold && loggedOn) {
                // this.log.info("About to save BGGS GPS for driver:" + lgps.gps_driver_id + ", lgps:" + JSON.stringify(lgps));
                _this.gpsHistApi.create(lgps).subscribe(function (obj) {
                    _this.log.info("gpsHistApi.create success for BGGS: obj:" + JSON.stringify(obj));
                }, function (err) {
                    _this.log.error("gpsHistApi.create failed for BGGS: err:" + JSON.stringify(err));
                });
            }
        }; //saveGpsToDb() ends here
        /*=====================================================*/
        /*             START METHOD                            */
        /*=====================================================*/
        this.start = function () {
            _this.configureBggs();
            // start recording location
            _this.log.info("BGGS about to start...");
            window.BackgroundGeolocation.start();
        };
        /*=====================================================*/
        /*             STOP METHOD                            */
        /*=====================================================*/
        this.stop = function () {
            // If we wish to turn OFF background-tracking, we can call the #stop method.
            _this.log.info('BGGS STOP Method called:');
            window.BackgroundGeolocation.stop();
        };
        this.bggs_print_configuration = function () {
            _this.log.info("=====================================================================");
            _this.log.info("this.pdaParams.gps_locationProvider::" + _this.pdaParams.gps_locationProvider);
            _this.log.info("this.pdaParams.gps_activityType::" + _this.pdaParams.gps_activityType);
            _this.log.info("this.pdaParams.gps_debug::" + _this.pdaParams.gps_debug);
            //this.log.info("this.pdaParams.gps_desiredAccuracy::" + this.pdaParams.gps_desiredAccuracy);
            _this.log.info("this.pdaParams.gps_distanceFilter::" + _this.pdaParams.gps_distanceFilter);
            _this.log.info("this.pdaParams.gps_interval::" + _this.pdaParams.gps_interval);
            _this.log.info("this.pdaParams.gps_stationaryRadius::" + _this.pdaParams.gps_stationaryRadius);
            _this.log.info("this.pdaParams.gps_stopOnTerminate::" + _this.pdaParams.gps_stopOnTerminate);
            _this.log.info("=====================================================================");
        };
        this.plt = platform;
        //console.log('Hello BackgroundGeolocationServiceProvider Provider');
        //Configure BackgroundGeolocation and set events
        this.setEvents();
    } //End of constructor
    BackgroundGeolocationServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__log_service_log_service__["a" /* LogServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__gps_audit_service_gps_audit_service__["a" /* GpsAuditServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__shared_sdk_services_custom_GpsHistory__["a" /* GpsHistoryApi */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_device__["a" /* Device */]])
    ], BackgroundGeolocationServiceProvider);
    return BackgroundGeolocationServiceProvider;
}());

//# sourceMappingURL=background-geolocation-service.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__log_service_log_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pdaparams_service_pdaparams_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__siteconfig_service_siteconfig_service__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the JobServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var JobServiceProvider = /** @class */ (function () {
    function JobServiceProvider(logger, pdaParams, siteConfig) {
        this.logger = logger;
        this.pdaParams = pdaParams;
        this.siteConfig = siteConfig;
        this.logParams = { site: this.pdaParams.getSiteId(), driver: this.pdaParams.getDriverId(), fn: 'JobServiceProvider' };
        this.log = this.logger.getInstance(this.logParams);
        this.jobs = [];
        this.Job = lbclient.models.LocalJob;
        //console.log('Hello JobServiceProvider Provider');
    }
    JobServiceProvider.prototype.deleteOldJobs = function (daysback) {
        var _this = this;
        // delete old jobs
        // if daysback parameter provided use it otherwise use site config value
        var val = this.siteConfig.getSiteConfigInt('PDA_DEL_DAYSBACK'); //then(function (val) {
        daysback = daysback || val;
        var queryDate = new Date();
        queryDate.setDate(queryDate.getDate() - daysback);
        this.log.info("deleteOldJobs: daysback:" + daysback + ", queryDate:" + queryDate);
        //console.log("deleteOldJobs: daysback:" + daysback + ", queryDate:" + queryDate);
        if (daysback > 1) {
            var delfilter = { "where": { "mobjobBookingDay": { "lt": queryDate } } };
            this.log.info("deleteOldJobs: delfilter:" + JSON.stringify(delfilter));
            this.Job.find(delfilter, function (err, jobs) {
                _this.jobs = jobs;
                var len = _this.jobs.length;
                _this.log.info("deleteOldJobs: deleting:" + len + " job legs");
                //console.log("deleteOldJobs: deleting:" + len + " job legs");
                for (var leg = 0; leg < len; leg++) {
                    _this.job = _this.jobs[leg];
                    _this.log.info("deleteOldJobs: delete leg:" + leg + " job:" + _this.job.mobjobSeq + " with job number:" + _this.job.mobjobNumber);
                    //Riyaz: Deletes jobs from the local storage. 
                    _this.job.delete();
                    _this.deleteJseaStatuses(_this.job.mobjobNumber);
                }
            });
        }
    };
    JobServiceProvider.prototype.deleteJseaStatuses = function (jobNumber) {
        // check local storage for PICKUP and DELIVER statuses for this job and delete if found
        var key;
        var statuses = ['PICKUP', 'DELIVER'];
        var len = statuses.length;
        for (var i = 0; i < len; i++) {
            key = jobNumber + '-' + statuses[i];
            var lstr = localStorage.getItem(key);
            if (lstr) {
                localStorage.removeItem(key);
            }
        }
    };
    JobServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__log_service_log_service__["a" /* LogServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__siteconfig_service_siteconfig_service__["a" /* SiteconfigServiceProvider */]])
    ], JobServiceProvider);
    return JobServiceProvider;
}());

//# sourceMappingURL=job-service.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__log_service_log_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pdaparams_service_pdaparams_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_service_config_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__window_ref_service_window_ref_service__ = __webpack_require__(414);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the EventServiceProvider provider.

  Send a message to the mobile_event REST API.Used for e.g. LOGON, LOGOFF, maybe sending a message etc.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var EventServiceProvider = /** @class */ (function () {
    function EventServiceProvider(http, logger, pdaParams, configService, windowRef) {
        var _this = this;
        this.http = http;
        this.logger = logger;
        this.pdaParams = pdaParams;
        this.configService = configService;
        this.windowRef = windowRef;
        this.logParams = { site: this.pdaParams.getSiteId(), driver: this.pdaParams.getDriverId(), fn: 'EventServiceProvider' };
        this.log = this.logger.getInstance(this.logParams);
        this.sendMsg = function (msgType, msgData) {
            var message = {};
            var data = msgData || '';
            if (typeof (data) === 'object') {
                message.data = data; // put object in as is
            }
            else {
                message.data = {
                    driverId: _this.pdaParams.getDriverId(),
                    appVersion: _this.pdaParams.getAppVersion(),
                    messageText: data,
                    deviceHost: _this.windowRef.nativeWindow.location.host // NOTE - this works in a browser only
                };
            }
            message.event = msgType;
            // var serverIP = this.configService.getServerIP();
            //var serverPort = this.configService.getServerPort();
            var apiURL = _this.configService.getBaseUrl();
            _this.log.info(JSON.stringify(message));
            var compURL = apiURL + '/api/mobile_event' + '?payload=' + encodeURIComponent(JSON.stringify(message));
            _this.http.get(compURL).map(function (res) { return res.json(); }).subscribe(function (data) {
                //console.log("Data = " + data);
            });
        };
        //console.log('Hello EventServiceProvider Provider');
    }
    EventServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__log_service_log_service__["a" /* LogServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__config_service_config_service__["a" /* ConfigServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__window_ref_service_window_ref_service__["a" /* WindowRefServiceProvider */]])
    ], EventServiceProvider);
    return EventServiceProvider;
}());

//# sourceMappingURL=event-service.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceDiagnosticServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_diagnostic__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_sdk_models_DeviceDiagnostics__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_sdk_services_custom_DeviceDiagnostics__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pdaparams_service_pdaparams_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__log_service_log_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__siteconfig_service_siteconfig_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_service_shared_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_device__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/*
  Generated class for the DeviceDiagnosticServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DeviceDiagnosticServiceProvider = /** @class */ (function () {
    function DeviceDiagnosticServiceProvider(pdaParams, logger, diagnostic, siteConfig, deviceDiagnosticsApi, platform, device, sharedService) {
        var _this = this;
        this.pdaParams = pdaParams;
        this.logger = logger;
        this.diagnostic = diagnostic;
        this.siteConfig = siteConfig;
        this.deviceDiagnosticsApi = deviceDiagnosticsApi;
        this.platform = platform;
        this.device = device;
        this.sharedService = sharedService;
        this.logParams = { site: this.pdaParams.getSiteId(), driver: this.pdaParams.getDriverId(), fn: 'DeviceDiagnosticServiceProvider' };
        this.log = this.logger.getInstance(this.logParams);
        this.driverId = 0;
        this.lastPingTimestamp = new Date();
        this.isLocationAvailable = false;
        this.isLocationEnabled = false;
        this.isGpsLocationAvailable = false;
        this.isGpsLocationEnabled = false;
        this.isNetworkLocationAvailable = false;
        this.isNetworkLocationEnabled = false;
        this.getLocationMode = "Location off";
        this.isLocationAuthorized = false;
        this.isWifiAvailable = false;
        this.isWifiEnabled = false;
        this.runDiagnostics = function () {
            _this.platform.ready().then(function (readySource) {
                if (_this.platform.is('cordova')) {
                    var errorCallback = function (diagFn) { return _this.log.error(diagFn + " : failed to diagnose from the device."); };
                    _this.diagnostic.isLocationAvailable().then(function (val) { _this.isLocationAvailable = val; }, function () { });
                    _this.diagnostic.isLocationEnabled().then(function (val) { _this.isLocationEnabled = val; }, function () { });
                    _this.diagnostic.isGpsLocationAvailable().then(function (val) { _this.isGpsLocationAvailable = val; }, function () { });
                    _this.diagnostic.isGpsLocationEnabled().then(function (val) { _this.isGpsLocationEnabled = val; }, function () { });
                    _this.diagnostic.isNetworkLocationAvailable().then(function (val) { _this.isNetworkLocationAvailable = val; }, function () { });
                    _this.diagnostic.isNetworkLocationEnabled().then(function (val) { _this.isNetworkLocationEnabled = val; }, function () { });
                    _this.diagnostic.isLocationAuthorized().then(function (val) { _this.isLocationAuthorized = val; }, function () { });
                    _this.diagnostic.isWifiAvailable().then(function (val) { _this.isWifiAvailable = val; }, function () { });
                    _this.diagnostic.isWifiEnabled().then(function (val) { _this.isWifiEnabled = val; }, function () { });
                    if (!_this.platform.is('ios')) {
                        _this.diagnostic.getLocationMode()
                            .then(function (locationMode) {
                            switch (locationMode) {
                                case _this.diagnostic.locationMode.HIGH_ACCURACY:
                                    _this.getLocationMode = "High accuracy";
                                    // console.log("High accuracy");
                                    break;
                                case _this.diagnostic.locationMode.BATTERY_SAVING:
                                    _this.getLocationMode = "Battery saving";
                                    //console.log("Battery saving");
                                    break;
                                case _this.diagnostic.locationMode.DEVICE_ONLY:
                                    _this.getLocationMode = "Device only";
                                    //console.log("Device only");
                                    break;
                                case _this.diagnostic.locationMode.LOCATION_OFF:
                                    _this.getLocationMode = "Location off";
                                    //console.log("Location off");
                                    break;
                            }
                        }).catch(function (e) { return console.error(e); });
                    }
                    else
                        _this.getLocationMode = "Not Available";
                }
            });
        };
        this.diagnosticPoller = function () {
            _this.runDiagnostics();
            var dd = new __WEBPACK_IMPORTED_MODULE_3__shared_sdk_models_DeviceDiagnostics__["a" /* DeviceDiagnostics */]();
            dd.driverId = _this.pdaParams.getDriverId();
            var lastPingDate = new Date();
            _this.lastPingTimestamp = new Date(lastPingDate.getTime());
            dd.lastPingTimestamp = _this.lastPingTimestamp;
            dd.getLocationMode = _this.getLocationMode;
            dd.isGpsLocationAvailable = _this.isGpsLocationAvailable;
            dd.isGpsLocationEnabled = _this.isGpsLocationEnabled;
            dd.isLocationAuthorized = _this.isLocationAuthorized;
            dd.isLocationAvailable = _this.isLocationAvailable;
            dd.isLocationEnabled = _this.isLocationEnabled;
            dd.isNetworkLocationAvailable = _this.isNetworkLocationAvailable;
            dd.isNetworkLocationEnabled = _this.isNetworkLocationEnabled;
            dd.isWifiAvailable = _this.isWifiAvailable;
            dd.isWifiEnabled = _this.isWifiEnabled;
            _this.localStorageUsage();
            _this.deviceDiagnosticsApi.upsert(dd).subscribe(function (obj) {
                _this.log.info("deviceDiagnosticsApi.create success : " + JSON.stringify(obj));
            }, function (err) {
                _this.log.error("deviceDiagnosticsApi.create failed : " + JSON.stringify(err));
            });
        };
        console.log('Hello DeviceDiagnosticServiceProvider Provider');
        this.pda_disable_device_diagnostics = (this.pdaParams.pda_disable_device_diagnostics || (this.siteConfig.getSiteConfigValue('PDA_DISABLE_DEVICE_DIAGNOSTICS') == 'Y'));
        if (!this.pda_disable_device_diagnostics)
            this.runDiagnostics();
    }
    DeviceDiagnosticServiceProvider.prototype.localStorageUsage = function () {
        var x, xLen, usage = 0;
        for (x in localStorage) {
            if (!localStorage.hasOwnProperty(x)) {
                continue;
            }
            xLen = ((localStorage[x].length * 2 + x.length * 2) / 1024);
            usage += xLen;
        }
        ;
        if (usage > 1024) {
            this.log.info("LocalStorage used by the app is ::" + (usage / 1024).toFixed(2) + " MB");
        }
        else {
            this.log.info("LocalStorage used by the app is ::" + usage.toFixed(2) + " KB");
        }
        ;
    };
    DeviceDiagnosticServiceProvider.prototype.stopDiagnostics = function () {
        this.log.info("Stopping device diagnostics...");
        //if (!this.pda_disable_device_diagnostics) {
        this.sharedService.isDiagnosticsRunning = false;
        clearInterval(this.intrval);
        //}
    };
    DeviceDiagnosticServiceProvider.prototype.startWatching = function () {
        //Call the Poller every minute
        this.pda_disable_device_diagnostics = (this.pdaParams.pda_disable_device_diagnostics || (this.siteConfig.getSiteConfigValue('PDA_DISABLE_DEVICE_DIAGNOSTICS') == 'Y'));
        if (!this.pda_disable_device_diagnostics) {
            this.sharedService.isDiagnosticsRunning = true;
            this.intrval = setInterval(this.diagnosticPoller, 60000);
        }
    };
    DeviceDiagnosticServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__log_service_log_service__["a" /* LogServiceProvider */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_diagnostic__["a" /* Diagnostic */],
            __WEBPACK_IMPORTED_MODULE_7__siteconfig_service_siteconfig_service__["a" /* SiteconfigServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__shared_sdk_services_custom_DeviceDiagnostics__["a" /* DeviceDiagnosticsApi */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_8__shared_service_shared_service__["a" /* SharedServiceProvider */]])
    ], DeviceDiagnosticServiceProvider);
    return DeviceDiagnosticServiceProvider;
}());

//# sourceMappingURL=device-diagnostic-service.js.map

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoopBackConfig; });
/* tslint:disable */
/**
* @module LoopBackConfig
* @description
*
* The LoopBackConfig module help developers to externally
* configure the base url and api version for loopback.io
*
* Example
*
* import { LoopBackConfig } from './sdk';
*
* @Component() // No metadata needed for this module
*
* export class MyApp {
*   constructor() {
*     LoopBackConfig.setBaseURL('http://localhost:3000');
*     LoopBackConfig.setApiVersion('api');
*   }
* }
**/
var LoopBackConfig = /** @class */ (function () {
    function LoopBackConfig() {
    }
    LoopBackConfig.setApiVersion = function (version) {
        if (version === void 0) { version = 'api'; }
        LoopBackConfig.version = version;
    };
    LoopBackConfig.getApiVersion = function () {
        return LoopBackConfig.version;
    };
    LoopBackConfig.setBaseURL = function (url) {
        if (url === void 0) { url = '/'; }
        LoopBackConfig.path = url;
    };
    LoopBackConfig.getPath = function () {
        return LoopBackConfig.path;
    };
    LoopBackConfig.setAuthPrefix = function (authPrefix) {
        if (authPrefix === void 0) { authPrefix = ''; }
        LoopBackConfig.authPrefix = authPrefix;
    };
    LoopBackConfig.getAuthPrefix = function () {
        return LoopBackConfig.authPrefix;
    };
    LoopBackConfig.setDebugMode = function (isEnabled) {
        LoopBackConfig.debug = isEnabled;
    };
    LoopBackConfig.debuggable = function () {
        return LoopBackConfig.debug;
    };
    LoopBackConfig.filterOnUrl = function () {
        LoopBackConfig.filterOn = 'url';
    };
    LoopBackConfig.filterOnHeaders = function () {
        LoopBackConfig.filterOn = 'headers';
    };
    LoopBackConfig.whereOnUrl = function () {
        LoopBackConfig.whereOn = 'url';
    };
    LoopBackConfig.whereOnHeaders = function () {
        LoopBackConfig.whereOn = 'headers';
    };
    LoopBackConfig.isHeadersFilteringSet = function () {
        return (LoopBackConfig.filterOn === 'headers');
    };
    LoopBackConfig.isHeadersWhereSet = function () {
        return (LoopBackConfig.whereOn === 'headers');
    };
    LoopBackConfig.setSecureWebSockets = function () {
        LoopBackConfig.secure = true;
    };
    LoopBackConfig.unsetSecureWebSockets = function () {
        LoopBackConfig.secure = false;
    };
    LoopBackConfig.isSecureWebSocketsSet = function () {
        return LoopBackConfig.secure;
    };
    LoopBackConfig.setRequestOptionsCredentials = function (withCredentials) {
        if (withCredentials === void 0) { withCredentials = false; }
        LoopBackConfig.withCredentials = withCredentials;
    };
    LoopBackConfig.getRequestOptionsCredentials = function () {
        return LoopBackConfig.withCredentials;
    };
    LoopBackConfig.path = '//192.168.160.132:3001';
    LoopBackConfig.version = 'api';
    LoopBackConfig.authPrefix = '';
    LoopBackConfig.debug = true;
    LoopBackConfig.filterOn = 'headers';
    LoopBackConfig.whereOn = 'headers';
    LoopBackConfig.secure = false;
    LoopBackConfig.withCredentials = false;
    return LoopBackConfig;
}());

//# sourceMappingURL=lb.config.js.map

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoopBackAuth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storage_storage_swaps__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_BaseModels__ = __webpack_require__(269);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module SocketConnection
* @license MIT
* @description
* This module handle socket connections and return singleton instances for each
* connection, it will use the SDK Socket Driver Available currently supporting
* Angular 2 for web, NativeScript 2 and Angular Universal.
**/
var LoopBackAuth = /** @class */ (function () {
    /**
     * @method constructor
     * @param {InternalStorage} storage Internal Storage Driver
     * @description
     * The constructor will initialize the token loading data from storage
     **/
    function LoopBackAuth(storage) {
        this.storage = storage;
        /**
         * @type {SDKToken}
         **/
        this.token = new __WEBPACK_IMPORTED_MODULE_2__models_BaseModels__["a" /* SDKToken */]();
        /**
         * @type {string}
         **/
        this.prefix = '$LoopBackSDK$';
        this.token.id = this.load('id');
        this.token.user = this.load('user');
        this.token.userId = this.load('userId');
        this.token.created = this.load('created');
        this.token.ttl = this.load('ttl');
        this.token.rememberMe = this.load('rememberMe');
    }
    /**
     * @method setRememberMe
     * @param {boolean} value Flag to remember credentials
     * @return {void}
     * @description
     * This method will set a flag in order to remember the current credentials
     **/
    LoopBackAuth.prototype.setRememberMe = function (value) {
        this.token.rememberMe = value;
    };
    /**
     * @method setUser
     * @param {any} user Any type of user model
     * @return {void}
     * @description
     * This method will update the user information and persist it if the
     * rememberMe flag is set.
     **/
    LoopBackAuth.prototype.setUser = function (user) {
        this.token.user = user;
        this.save();
    };
    /**
     * @method setToken
     * @param {SDKToken} token SDKToken or casted AccessToken instance
     * @return {void}
     * @description
     * This method will set a flag in order to remember the current credentials
     **/
    LoopBackAuth.prototype.setToken = function (token) {
        this.token = Object.assign({}, this.token, token);
        this.save();
    };
    /**
     * @method getToken
     * @return {void}
     * @description
     * This method will set a flag in order to remember the current credentials.
     **/
    LoopBackAuth.prototype.getToken = function () {
        return this.token;
    };
    /**
     * @method getAccessTokenId
     * @return {string}
     * @description
     * This method will return the actual token string, not the object instance.
     **/
    LoopBackAuth.prototype.getAccessTokenId = function () {
        return this.token.id;
    };
    /**
     * @method getCurrentUserId
     * @return {any}
     * @description
     * This method will return the current user id, it can be number or string.
     **/
    LoopBackAuth.prototype.getCurrentUserId = function () {
        return this.token.userId;
    };
    /**
     * @method getCurrentUserData
     * @return {any}
     * @description
     * This method will return the current user instance.
     **/
    LoopBackAuth.prototype.getCurrentUserData = function () {
        return (typeof this.token.user === 'string') ? JSON.parse(this.token.user) : this.token.user;
    };
    /**
     * @method save
     * @return {boolean} Whether or not the information was saved
     * @description
     * This method will save in either local storage or cookies the current credentials.
     * But only if rememberMe is enabled.
     **/
    LoopBackAuth.prototype.save = function () {
        var today = new Date();
        var expires = new Date(today.getTime() + (this.token.ttl * 1000));
        this.persist('id', this.token.id, expires);
        this.persist('user', this.token.user, expires);
        this.persist('userId', this.token.userId, expires);
        this.persist('created', this.token.created, expires);
        this.persist('ttl', this.token.ttl, expires);
        this.persist('rememberMe', this.token.rememberMe, expires);
        return true;
    };
    ;
    /**
     * @method load
     * @param {string} prop Property name
     * @return {any} Any information persisted in storage
     * @description
     * This method will load either from local storage or cookies the provided property.
     **/
    LoopBackAuth.prototype.load = function (prop) {
        return this.storage.get("" + this.prefix + prop);
    };
    /**
     * @method clear
     * @return {void}
     * @description
     * This method will clear cookies or the local storage.
     **/
    LoopBackAuth.prototype.clear = function () {
        var _this = this;
        Object.keys(this.token).forEach(function (prop) { return _this.storage.remove("" + _this.prefix + prop); });
        this.token = new __WEBPACK_IMPORTED_MODULE_2__models_BaseModels__["a" /* SDKToken */]();
    };
    /**
     * @method persist
     * @return {void}
     * @description
     * This method saves values to storage
     **/
    LoopBackAuth.prototype.persist = function (prop, value, expires) {
        try {
            this.storage.set("" + this.prefix + prop, (typeof value === 'object') ? JSON.stringify(value) : value, this.token.rememberMe ? expires : null);
        }
        catch (err) {
            console.error('Cannot access local/session storage:', err);
        }
    };
    LoopBackAuth = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__storage_storage_swaps__["a" /* InternalStorage */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__storage_storage_swaps__["a" /* InternalStorage */]])
    ], LoopBackAuth);
    return LoopBackAuth;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SDKModels; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Job__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_JobChange__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_TpmPdaController__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_GpsHistory__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_Application__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_Installation__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_Notification__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_Push__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_Mobile_event__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_SiteConfig__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_DespatchToDriverMessages__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__models_JseaDriverQuestions__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__models_JseaDriverAnswers__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__models_JseaDriverAnswersChange__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__models_Photocontainer__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__models_Image__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__models_BarcodeHist__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__models_BarcodeHistChange__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__models_DeviceDiagnostics__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */




















var SDKModels = /** @class */ (function () {
    function SDKModels() {
        this.models = {
            Job: __WEBPACK_IMPORTED_MODULE_1__models_Job__["a" /* Job */],
            JobChange: __WEBPACK_IMPORTED_MODULE_2__models_JobChange__["a" /* JobChange */],
            TpmPdaController: __WEBPACK_IMPORTED_MODULE_3__models_TpmPdaController__["a" /* TpmPdaController */],
            GpsHistory: __WEBPACK_IMPORTED_MODULE_4__models_GpsHistory__["a" /* GpsHistory */],
            Application: __WEBPACK_IMPORTED_MODULE_5__models_Application__["a" /* Application */],
            Installation: __WEBPACK_IMPORTED_MODULE_6__models_Installation__["a" /* Installation */],
            Notification: __WEBPACK_IMPORTED_MODULE_7__models_Notification__["a" /* Notification */],
            Push: __WEBPACK_IMPORTED_MODULE_8__models_Push__["a" /* Push */],
            Mobile_event: __WEBPACK_IMPORTED_MODULE_9__models_Mobile_event__["a" /* Mobile_event */],
            SiteConfig: __WEBPACK_IMPORTED_MODULE_10__models_SiteConfig__["a" /* SiteConfig */],
            DespatchToDriverMessages: __WEBPACK_IMPORTED_MODULE_11__models_DespatchToDriverMessages__["a" /* DespatchToDriverMessages */],
            JseaDriverQuestions: __WEBPACK_IMPORTED_MODULE_12__models_JseaDriverQuestions__["a" /* JseaDriverQuestions */],
            JseaDriverAnswers: __WEBPACK_IMPORTED_MODULE_13__models_JseaDriverAnswers__["a" /* JseaDriverAnswers */],
            JseaDriverAnswersChange: __WEBPACK_IMPORTED_MODULE_14__models_JseaDriverAnswersChange__["a" /* JseaDriverAnswersChange */],
            Photocontainer: __WEBPACK_IMPORTED_MODULE_15__models_Photocontainer__["a" /* Photocontainer */],
            Image: __WEBPACK_IMPORTED_MODULE_16__models_Image__["a" /* Image */],
            BarcodeHist: __WEBPACK_IMPORTED_MODULE_17__models_BarcodeHist__["a" /* BarcodeHist */],
            BarcodeHistChange: __WEBPACK_IMPORTED_MODULE_18__models_BarcodeHistChange__["a" /* BarcodeHistChange */],
            DeviceDiagnostics: __WEBPACK_IMPORTED_MODULE_19__models_DeviceDiagnostics__["a" /* DeviceDiagnostics */],
        };
    }
    SDKModels.prototype.get = function (modelName) {
        return this.models[modelName];
    };
    SDKModels.prototype.getAll = function () {
        return this.models;
    };
    SDKModels.prototype.getModelNames = function () {
        return Object.keys(this.models);
    };
    SDKModels = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], SDKModels);
    return SDKModels;
}());

//# sourceMappingURL=SDKModels.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BaseStorage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InternalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SDKStorage; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* tslint:disable */
/**
 * @module Storage
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * The InternalStorage class is used for dependency injection swapping.
 * It will be provided using factory method from different sources.
 **/
var BaseStorage = /** @class */ (function () {
    function BaseStorage() {
    }
    /**
     * @method get
     * @param {string} key Storage key name
     * @return {any}
     * @description
     * The getter will return any type of data persisted in storage.
     **/
    BaseStorage.prototype.get = function (key) { };
    /**
     * @method set
     * @param {string} key Storage key name
     * @param {any} value Any value
     * @return {void}
     * @description
     * The setter will return any type of data persisted in localStorage.
     **/
    BaseStorage.prototype.set = function (key, value, expires) { };
    /**
     * @method remove
     * @param {string} key Storage key name
     * @return {void}
     * @description
     * This method will remove a localStorage item from the client.
     **/
    BaseStorage.prototype.remove = function (key) { };
    return BaseStorage;
}());

/**
 * @module InternalStorage
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * The InternalStorage class is used for dependency injection swapping.
 * It will be provided using factory method from different sources.
 * This is mainly required because Angular Universal integration.
 * It does inject a CookieStorage instead of LocalStorage.
 **/
var InternalStorage = /** @class */ (function (_super) {
    __extends(InternalStorage, _super);
    function InternalStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InternalStorage;
}(BaseStorage));

/**
 * @module SDKStorage
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * The SDKStorage class is used for dependency injection swapping.
 * It will be provided using factory method according the right environment.
 * This is created for public usage, to allow persisting custom data
 * Into the local storage API.
 **/
var SDKStorage = /** @class */ (function (_super) {
    __extends(SDKStorage, _super);
    function SDKStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SDKStorage;
}(BaseStorage));

//# sourceMappingURL=storage.swaps.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Job; });
/* tslint:disable */
var Job = /** @class */ (function () {
    function Job(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `Job`.
     */
    Job.getModelName = function () {
        return "Job";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of Job for dynamic purposes.
    **/
    Job.factory = function (data) {
        return new Job(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    Job.getModelDefinition = function () {
        return {
            name: 'Job',
            plural: 'Jobs',
            path: 'Jobs',
            idName: 'mobjobuid',
            properties: {
                "mobjobuid": {
                    name: 'mobjobuid',
                    type: 'string'
                },
                "mobjobSeq": {
                    name: 'mobjobSeq',
                    type: 'number'
                },
                "mobjobNumber": {
                    name: 'mobjobNumber',
                    type: 'number'
                },
                "mobjobBookingDay": {
                    name: 'mobjobBookingDay',
                    type: 'Date'
                },
                "mobjobBasejobNum": {
                    name: 'mobjobBasejobNum',
                    type: 'number'
                },
                "mobjobLegNumber": {
                    name: 'mobjobLegNumber',
                    type: 'number'
                },
                "mobjobTotalLegs": {
                    name: 'mobjobTotalLegs',
                    type: 'number'
                },
                "mobjobStatus": {
                    name: 'mobjobStatus',
                    type: 'string',
                    default: 'IP'
                },
                "mobjobServiceCode": {
                    name: 'mobjobServiceCode',
                    type: 'string'
                },
                "mobjobReturnCode": {
                    name: 'mobjobReturnCode',
                    type: 'boolean'
                },
                "mobjobWhichCompany": {
                    name: 'mobjobWhichCompany',
                    type: 'string'
                },
                "mobjobClientCode": {
                    name: 'mobjobClientCode',
                    type: 'string',
                    default: 'A+'
                },
                "mobjobClientName": {
                    name: 'mobjobClientName',
                    type: 'string'
                },
                "mobjobClientRef": {
                    name: 'mobjobClientRef',
                    type: 'string'
                },
                "mobjobClientRef2": {
                    name: 'mobjobClientRef2',
                    type: 'string'
                },
                "mobjobCallersName": {
                    name: 'mobjobCallersName',
                    type: 'string'
                },
                "mobjobExtraPhone": {
                    name: 'mobjobExtraPhone',
                    type: 'string'
                },
                "mobjobAddress1": {
                    name: 'mobjobAddress1',
                    type: 'string'
                },
                "mobjobAddress2": {
                    name: 'mobjobAddress2',
                    type: 'string'
                },
                "mobjobAddress3": {
                    name: 'mobjobAddress3',
                    type: 'string'
                },
                "mobjobAddress4": {
                    name: 'mobjobAddress4',
                    type: 'string'
                },
                "mobjobAddress5": {
                    name: 'mobjobAddress5',
                    type: 'string'
                },
                "mobjobToAddress1": {
                    name: 'mobjobToAddress1',
                    type: 'string'
                },
                "mobjobToSuburb": {
                    name: 'mobjobToSuburb',
                    type: 'string'
                },
                "mobjobAddrExtas": {
                    name: 'mobjobAddrExtas',
                    type: 'string'
                },
                "mobjobEtaTime": {
                    name: 'mobjobEtaTime',
                    type: 'Date'
                },
                "mobjobIsCashJob": {
                    name: 'mobjobIsCashJob',
                    type: 'boolean'
                },
                "mobjobDriver": {
                    name: 'mobjobDriver',
                    type: 'number'
                },
                "mobjobNeededPod": {
                    name: 'mobjobNeededPod',
                    type: 'string'
                },
                "mobjobPodTime": {
                    name: 'mobjobPodTime',
                    type: 'Date'
                },
                "mobjobPodName": {
                    name: 'mobjobPodName',
                    type: 'string'
                },
                "mobjobJobType": {
                    name: 'mobjobJobType',
                    type: 'number'
                },
                "mobjobJobPieces": {
                    name: 'mobjobJobPieces',
                    type: 'number'
                },
                "mobjobJobDrops": {
                    name: 'mobjobJobDrops',
                    type: 'number'
                },
                "mobjobWeight": {
                    name: 'mobjobWeight',
                    type: 'number'
                },
                "mobjobSignat": {
                    name: 'mobjobSignat',
                    type: 'string'
                },
                "mobjobTimeAC": {
                    name: 'mobjobTimeAC',
                    type: 'Date'
                },
                "mobjobTimePU": {
                    name: 'mobjobTimePU',
                    type: 'Date'
                },
                "mobjobTimeAp": {
                    name: 'mobjobTimeAp',
                    type: 'Date'
                },
                "mobjobTimeAd": {
                    name: 'mobjobTimeAd',
                    type: 'Date'
                },
                "onDeviceTime": {
                    name: 'onDeviceTime',
                    type: 'Date'
                },
                "gpsLatPU": {
                    name: 'gpsLatPU',
                    type: 'number'
                },
                "gpsLongPU": {
                    name: 'gpsLongPU',
                    type: 'number'
                },
                "gpsLatDL": {
                    name: 'gpsLatDL',
                    type: 'number'
                },
                "gpsLongDL": {
                    name: 'gpsLongDL',
                    type: 'number'
                },
                "isClientUpsert": {
                    name: 'isClientUpsert',
                    type: 'boolean',
                    default: false
                },
                "lastModified": {
                    name: 'lastModified',
                    type: 'Date'
                },
                "addrLatPU": {
                    name: 'addrLatPU',
                    type: 'number',
                    default: 0
                },
                "addrLongPU": {
                    name: 'addrLongPU',
                    type: 'number',
                    default: 0
                },
                "addrLatDL": {
                    name: 'addrLatDL',
                    type: 'number',
                    default: 0
                },
                "addrLongDL": {
                    name: 'addrLongDL',
                    type: 'number',
                    default: 0
                },
                "photoLinkFname": {
                    name: 'photoLinkFname',
                    type: 'string',
                    default: '0'
                },
            },
            relations: {}
        };
    };
    return Job;
}());

//# sourceMappingURL=Job.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Installation; });
/* tslint:disable */
var Installation = /** @class */ (function () {
    function Installation(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `Installation`.
     */
    Installation.getModelName = function () {
        return "Installation";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of Installation for dynamic purposes.
    **/
    Installation.factory = function (data) {
        return new Installation(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    Installation.getModelDefinition = function () {
        return {
            name: 'Installation',
            plural: 'Installations',
            path: 'Installations',
            idName: 'id',
            properties: {
                "appId": {
                    name: 'appId',
                    type: 'string'
                },
                "appVersion": {
                    name: 'appVersion',
                    type: 'string'
                },
                "badge": {
                    name: 'badge',
                    type: 'number'
                },
                "created": {
                    name: 'created',
                    type: 'Date'
                },
                "deviceToken": {
                    name: 'deviceToken',
                    type: 'string'
                },
                "deviceType": {
                    name: 'deviceType',
                    type: 'string'
                },
                "modified": {
                    name: 'modified',
                    type: 'Date'
                },
                "status": {
                    name: 'status',
                    type: 'string'
                },
                "subscriptions": {
                    name: 'subscriptions',
                    type: 'Array&lt;any&gt;'
                },
                "timeZone": {
                    name: 'timeZone',
                    type: 'string'
                },
                "userId": {
                    name: 'userId',
                    type: 'string'
                },
                "id": {
                    name: 'id',
                    type: 'any'
                },
            },
            relations: {}
        };
    };
    return Installation;
}());

//# sourceMappingURL=Installation.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JseaDriverAnswers; });
/* tslint:disable */
var JseaDriverAnswers = /** @class */ (function () {
    function JseaDriverAnswers(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `JseaDriverAnswers`.
     */
    JseaDriverAnswers.getModelName = function () {
        return "JseaDriverAnswers";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of JseaDriverAnswers for dynamic purposes.
    **/
    JseaDriverAnswers.factory = function (data) {
        return new JseaDriverAnswers(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    JseaDriverAnswers.getModelDefinition = function () {
        return {
            name: 'JseaDriverAnswers',
            plural: 'JseaDriverAnswers',
            path: 'JseaDriverAnswers',
            idName: 'jdauid',
            properties: {
                "jdauid": {
                    name: 'jdauid',
                    type: 'string'
                },
                "jdaSeqnum": {
                    name: 'jdaSeqnum',
                    type: 'number'
                },
                "jdaJobNum": {
                    name: 'jdaJobNum',
                    type: 'number'
                },
                "jdaJobBday": {
                    name: 'jdaJobBday',
                    type: 'Date'
                },
                "jdaDriverId": {
                    name: 'jdaDriverId',
                    type: 'number'
                },
                "jdaFormType": {
                    name: 'jdaFormType',
                    type: 'string'
                },
                "jdaFormLeg": {
                    name: 'jdaFormLeg',
                    type: 'number'
                },
                "jdaOrder": {
                    name: 'jdaOrder',
                    type: 'number'
                },
                "jdaCheckBox": {
                    name: 'jdaCheckBox',
                    type: 'boolean'
                },
                "jdaJobStatusType": {
                    name: 'jdaJobStatusType',
                    type: 'string'
                },
            },
            relations: {}
        };
    };
    return JseaDriverAnswers;
}());

//# sourceMappingURL=JseaDriverAnswers.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarcodeHist; });
/* tslint:disable */
var BarcodeHist = /** @class */ (function () {
    function BarcodeHist(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `BarcodeHist`.
     */
    BarcodeHist.getModelName = function () {
        return "BarcodeHist";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of BarcodeHist for dynamic purposes.
    **/
    BarcodeHist.factory = function (data) {
        return new BarcodeHist(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    BarcodeHist.getModelDefinition = function () {
        return {
            name: 'BarcodeHist',
            plural: 'BarcodeHists',
            path: 'BarcodeHists',
            idName: 'bchuid',
            properties: {
                "bchuid": {
                    name: 'bchuid',
                    type: 'string'
                },
                "bchSeq": {
                    name: 'bchSeq',
                    type: 'number'
                },
                "bchBarcode": {
                    name: 'bchBarcode',
                    type: 'string'
                },
                "bchTimestamp": {
                    name: 'bchTimestamp',
                    type: 'string'
                },
                "bchJobno": {
                    name: 'bchJobno',
                    type: 'number'
                },
                "bchJobdate": {
                    name: 'bchJobdate',
                    type: 'Date'
                },
                "bchDriver": {
                    name: 'bchDriver',
                    type: 'number'
                },
                "bchEvent": {
                    name: 'bchEvent',
                    type: 'string'
                },
                "bchEventSubtype": {
                    name: 'bchEventSubtype',
                    type: 'string'
                },
            },
            relations: {}
        };
    };
    return BarcodeHist;
}());

//# sourceMappingURL=BarcodeHist.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceDiagnostics; });
/* tslint:disable */
var DeviceDiagnostics = /** @class */ (function () {
    function DeviceDiagnostics(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `DeviceDiagnostics`.
     */
    DeviceDiagnostics.getModelName = function () {
        return "DeviceDiagnostics";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of DeviceDiagnostics for dynamic purposes.
    **/
    DeviceDiagnostics.factory = function (data) {
        return new DeviceDiagnostics(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    DeviceDiagnostics.getModelDefinition = function () {
        return {
            name: 'DeviceDiagnostics',
            plural: 'DeviceDiagnostics',
            path: 'DeviceDiagnostics',
            idName: 'driverId',
            properties: {
                "driverId": {
                    name: 'driverId',
                    type: 'number'
                },
                "lastPingTimestamp": {
                    name: 'lastPingTimestamp',
                    type: 'Date'
                },
                "isLocationAvailable": {
                    name: 'isLocationAvailable',
                    type: 'boolean'
                },
                "isLocationEnabled": {
                    name: 'isLocationEnabled',
                    type: 'boolean'
                },
                "isGpsLocationAvailable": {
                    name: 'isGpsLocationAvailable',
                    type: 'boolean'
                },
                "isGpsLocationEnabled": {
                    name: 'isGpsLocationEnabled',
                    type: 'boolean'
                },
                "isNetworkLocationAvailable": {
                    name: 'isNetworkLocationAvailable',
                    type: 'boolean'
                },
                "isNetworkLocationEnabled": {
                    name: 'isNetworkLocationEnabled',
                    type: 'boolean'
                },
                "getLocationMode": {
                    name: 'getLocationMode',
                    type: 'string'
                },
                "isLocationAuthorized": {
                    name: 'isLocationAuthorized',
                    type: 'boolean'
                },
                "isWifiAvailable": {
                    name: 'isWifiAvailable',
                    type: 'boolean'
                },
                "isWifiEnabled": {
                    name: 'isWifiEnabled',
                    type: 'boolean'
                },
            },
            relations: {}
        };
    };
    return DeviceDiagnostics;
}());

//# sourceMappingURL=DeviceDiagnostics.js.map

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service_config_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_shared_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pdaparams_service_pdaparams_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_service_util_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_sdk_services_custom_logger_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__log_service_instance__ = __webpack_require__(811);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { Injectable, ReflectiveInjector } from '@angular/core';


//import 'reflect-metadata';







/*
  Generated class for the LogServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var LogServiceProvider = /** @class */ (function (_super) {
    __extends(LogServiceProvider, _super);
    /*  private pdaParamService;
     private configService;
     private loggerService;
     //public http; */
    function LogServiceProvider(pdaParamService, configService, http, sharedService, platform, utilService) {
        var _this = _super.call(this) || this;
        _this.pdaParamService = pdaParamService;
        _this.configService = configService;
        _this.http = http;
        _this.sharedService = sharedService;
        _this.platform = platform;
        _this.utilService = utilService;
        return _this;
    }
    /*  enabled(_isEnabled) {
       this.isEnabled = !!_isEnabled;
     }; */
    LogServiceProvider.prototype.logInstance = function (context) {
        //console.log("=========The Driver ID in the logService.ts is ::============" + context.driver);
        context.ver = this.configService.appConfig.version;
        this.context = context;
        this.pdaParams = this.pdaParamService;
        //context, driverId, logServerIP, logServerPort
        return new __WEBPACK_IMPORTED_MODULE_8__log_service_instance__["a" /* LogServiceInstance */](this.http, this.context, this.pdaParamService.getDriverId(), this.getlogServerIP(), this.getlogServerPort(), this.pdaParams, this.sharedService, this.platform, this.utilService);
    };
    ;
    LogServiceProvider.prototype.getInstance = function (context) {
        //return new Logger(context);
        return this.logInstance(context);
    };
    ;
    LogServiceProvider.prototype.setContext = function (context) {
        this.context = context;
    };
    LogServiceProvider.prototype.getlogServerIP = function () {
        return (this.configService.appConfig.logServerIP);
    };
    ;
    LogServiceProvider.prototype.getlogServerPort = function () {
        return (this.configService.appConfig.logServerPort);
    };
    ;
    LogServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__config_service_config_service__["a" /* ConfigServiceProvider */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__shared_service_shared_service__["a" /* SharedServiceProvider */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__util_service_util_service__["a" /* UtilServiceProvider */]])
    ], LogServiceProvider);
    return LogServiceProvider;
}(__WEBPACK_IMPORTED_MODULE_6__shared_sdk_services_custom_logger_service__["a" /* LoggerService */]));

//# sourceMappingURL=log-service.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceDiagnosticsApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_error_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__ = __webpack_require__(20);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `DeviceDiagnostics` model.
 */
var DeviceDiagnosticsApi = /** @class */ (function (_super) {
    __extends(DeviceDiagnosticsApi, _super);
    function DeviceDiagnosticsApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `DeviceDiagnostics` object.)
     * </em>
     */
    DeviceDiagnosticsApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/DeviceDiagnostics";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id DeviceDiagnostics id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `DeviceDiagnostics` object.)
     * </em>
     */
    DeviceDiagnosticsApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/DeviceDiagnostics/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `DeviceDiagnostics`.
     */
    DeviceDiagnosticsApi.prototype.getModelName = function () {
        return "DeviceDiagnostics";
    };
    DeviceDiagnosticsApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */]])
    ], DeviceDiagnosticsApi);
    return DeviceDiagnosticsApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));

//# sourceMappingURL=DeviceDiagnostics.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerconnServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import 'reflect-metadata';
/*
  Generated class for the CustomerconnServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var CustomerconnServiceProvider = /** @class */ (function () {
    function CustomerconnServiceProvider() {
        var _this = this;
        this.customerConns = {
            "remote": {
                "connector": "remote",
                "debug": "true"
            },
            "local": {
                "connector": "memory",
                "debug": "true",
                "localStorage": "osc-local-db"
            },
            "scope": {
                "connector": "remote",
                "debug": "true",
                "clientId": "SCOPE",
                "serverIP": "scope.opensyscon.com.au",
                "serverPort": 3112,
                "url": "http://scope.opensyscon.com.au:3112"
            },
            "swift1": {
                "connector": "remote",
                "debug": "true",
                "clientId": "SWIFT1",
                "serverIP": "booking.swifttransport.com.au",
                "serverPort": 3001,
                "url": "http://booking.swifttransport.com.au:3001"
            },
            "oscvtest": {
                "connector": "remote",
                "debug": "true",
                "clientId": "OSCVTEST",
                "serverIP": "opensyscon.com.au",
                "serverPort": 3000,
                "url": "http://opensyscon.com.au:3000"
            },
            "wpe": {
                "connector": "remote",
                "debug": "true",
                "clientId": "WPE",
                "serverIP": "remote.wpedubbo.com.au",
                "serverPort": 3115,
                "url": "http://remote.wpedubbo.com.au:3115"
            },
            "aptold": {
                "connector": "remote",
                "debug": "true",
                "clientId": "APT",
                "serverIP": "allpur2.lnk.telstra.net",
                "serverPort": 3000,
                "url": "http://allpur2.lnk.telstra.net:3000"
            },
            "apt": {
                "connector": "remote",
                "debug": "true",
                "clientId": "APT",
                "serverIP": "tplus.allpurpose.com.au",
                "serverPort": 3001,
                "url": "http://tplus.allpurpose.com.au:3001"
            },
            "ces": {
                "connector": "remote",
                "debug": "true",
                "clientId": "CES",
                "serverIP": "couriers-express.com.au",
                "serverPort": 3001,
                "url": "http://couriers-express.com.au:3001"
            },
            "itd": {
                "connector": "remote",
                "debug": "true",
                "clientId": "ITD",
                "serverIP": "carry.intime-distribution.com.au",
                "serverPort": 3001,
                "url": "http://carry.intime-distribution.com.au:3001"
            },
            "glc": {
                "connector": "remote",
                "debug": "true",
                "clientId": "GLC",
                "serverIP": "glcouriers.com.au",
                "serverPort": 3001,
                "url": "http://glcouriers.com.au:3001"
            },
            "ace": {
                "connector": "remote",
                "debug": "true",
                "clientId": "ACE",
                "serverIP": "acecouriers.com.au",
                "serverPort": 3001,
                "url": "http://acecouriers.com.au:3001"
            },
            "pam": {
                "connector": "remote",
                "debug": "true",
                "clientId": "PAM",
                "serverIP": "logist14.lnk.telstra.net",
                "serverPort": 3001,
                "url": "http://logist14.lnk.telstra.net:3001"
            },
            "flg": {
                "connector": "remote",
                "debug": "true",
                "clientId": "FLG",
                "serverIP": "opensyscon.com.au",
                "serverPort": 3133,
                "url": "http://opensyscon.com.au:3133"
            },
            "cct": {
                "connector": "remote",
                "debug": "true",
                "clientId": "CITYCRANE",
                "serverIP": "remote.citycranetrucks.com.au",
                "serverPort": 3001,
                "url": "http://remote.citycranetrucks.com.au:3001"
            },
            "swift2": {
                "connector": "remote",
                "debug": "true",
                "clientId": "SWIFT2",
                "serverIP": "roy1220545.lnk.telstra.net",
                "serverPort": 3001,
                "url": "http://roy1220545.lnk.telstra.net:3001"
            },
            "wads": {
                "connector": "remote",
                "debug": "true",
                "clientId": "WADS",
                "serverIP": "wads.opensyscon.com.au",
                "serverPort": 3161,
                "url": "http://wads.opensyscon.com.au:3161"
            },
            "univ": {
                "connector": "remote",
                "debug": "true",
                "clientId": "UNIVERSAL",
                "serverIP": "universal.opensyscon.com.au",
                "serverPort": 3162,
                "url": "http://universal.opensyscon.com.au:3162"
            },
            "gempost": {
                "connector": "remote",
                "debug": "true",
                "clientId": "GEMPOST",
                "serverIP": "gempost.opensyscon.com.au",
                "serverPort": 3002,
                "url": "https://gempost.opensyscon.com.au:3002"
            },
            "rback1": {
                "connector": "remote",
                "debug": "true",
                "clientId": "REDBACK",
                "serverIP": "103.25.182.105",
                "serverPort": 3001,
                "url": "http://103.25.182.105:3001"
            },
            "adlx": {
                "connector": "remote",
                "debug": "true",
                "clientId": "ADLX",
                "serverIP": "adlx.opensyscon.com.au",
                "serverPort": 3174,
                "url": "http://adlx.opensyscon.com.au:3174"
            },
            "transit": {
                "connector": "remote",
                "debug": "true",
                "clientId": "TRANSIT",
                "serverIP": "transit.opensyscon.com.au",
                "serverPort": 3172,
                "url": "http://transit.opensyscon.com.au:3172"
            },
            "sgs": {
                "connector": "remote",
                "debug": "true",
                "clientId": "SGS",
                "serverIP": "sgs.opensyscon.com.au",
                "serverPort": 3171,
                "url": "http://sgs.opensyscon.com.au:3171"
            },
            "rawroad": {
                "connector": "remote",
                "debug": "true",
                "clientId": "RAWROAD",
                "serverIP": "rawroad.opensyscon.com.au",
                "serverPort": 3182,
                "url": "http://rawroad.opensyscon.com.au:3182"
            },
            "capmel": {
                "connector": "remote",
                "debug": "true",
                "clientId": "CAPMEL",
                "serverIP": "tplusmobile-mel.capitaltransport.com.au",
                "serverPort": 3001,
                "url": "http://tplusmobile-mel.capitaltransport.com.au:3001"
            },
            "capsyd": {
                "connector": "remote",
                "debug": "true",
                "clientId": "CAPSYD",
                "serverIP": "tplusmobile-syd.capitaltransport.com.au",
                "serverPort": 3001,
                "url": "http://tplusmobile-syd.capitaltransport.com.au:3001"
            },
            "capper": {
                "connector": "remote",
                "debug": "true",
                "clientId": "CAPPER",
                "serverIP": "tplusmobile-per.capitaltransport.com.au",
                "serverPort": 3001,
                "url": "http://tplusmobile-per.capitaltransport.com.au:3001"
            },
            "capadl": {
                "connector": "remote",
                "debug": "true",
                "clientId": "CAPADL",
                "serverIP": "tplusmobile-adl.capitaltransport.com.au",
                "serverPort": 3001,
                "url": "http://tplusmobile-adl.capitaltransport.com.au:3001"
            },
            "capbne": {
                "connector": "remote",
                "debug": "true",
                "clientId": "CAPBNE",
                "serverIP": "tplusmobile-bne.capitaltransport.com.au",
                "serverPort": 3001,
                "url": "http://tplusmobile-bne.capitaltransport.com.au:3001"
            },
            "oth": {
                "connector": "remote",
                "debug": "true",
                "clientId": "OTH",
                "serverIP": "oth.opensyscon.com.au",
                "serverPort": 3176,
                "url": "http://oth.opensyscon.com.au:3176"
            }
        };
        this.getConnectionDetails = function (customer) {
            return _this.customerConns[customer];
        };
        //console.log('Hello CustomerconnServiceProvider Provider');
    }
    CustomerconnServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CustomerconnServiceProvider);
    return CustomerconnServiceProvider;
}());

//# sourceMappingURL=customerconn-service.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FixedQueueServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the FixedQueueServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var FixedQueueServiceProvider = /** @class */ (function () {
    function FixedQueueServiceProvider() {
        //console.log('Hello FixedQueueServiceProvider Provider');
        this.push = this.wrapMethod("push", this.trimHead);
        this.splice = this.wrapMethod("splice", this.trimTail);
        this.unshift = this.wrapMethod('unshift', this.trimTail);
    }
    FixedQueueServiceProvider.prototype.create = function (size) {
        var initialValues = (initialValues || []);
        // Create the fixed queue array value.
        this.queue = Array.apply(null, initialValues);
        // Store the fixed size in the queue.
        this.queue.fixedSize = size;
        // Add the class methods to the queue. Some of these have
        // to override the native Array methods in order to make
        // sure the queue length is maintained.
        this.queue.push = this.push;
        this.queue.splice = this.splice;
        this.queue.unshift = this.unshift;
        // Trim any initial excess from the queue.
        if (this.queue != "")
            this.trimTail.call(this.queue);
        // Return the new queue.
        return this.queue;
    };
    // Trims the queue down to the appropriate size, removing
    // items from the beginning of the internal array.
    FixedQueueServiceProvider.prototype.trimHead = function () {
        if (this.length <= this.fixedSize) {
            return;
        }
        Array.prototype.splice.call(this, 0, (this.length - this.fixedSize));
    };
    // Trims the queue down to the appropriate size, removing
    // items from the end of the internal array.
    FixedQueueServiceProvider.prototype.trimTail = function () {
        if (this.length <= this.fixedSize) {
            return;
        }
        Array.prototype.splice.call(this, this.fixedSize, (this.length - this.fixedSize));
    };
    // Calls the native Array methods followed by a trimming method.
    FixedQueueServiceProvider.prototype.wrapMethod = function (methodName, trimMethod) {
        // Create a wrapper that calls the given method.
        function wrapper() {
            // Get the native Array method.
            var method = Array.prototype[methodName];
            // Call the native method first.
            var result = method.apply(this, arguments);
            // Trim the queue now that it's been augmented.
            trimMethod.call(this);
            // Return the original value.
            return result;
        }
        // Return the wrapper method.
        return wrapper;
    };
    FixedQueueServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FixedQueueServiceProvider);
    return FixedQueueServiceProvider;
}());

//# sourceMappingURL=fixed-queue-service.js.map

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */


//import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

/**
 * Default error handler
 */
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler() {
    }
    // ErrorObservable when rxjs version < rc.5
    // ErrorObservable<string> when rxjs version = rc.5
    // I'm leaving any for now to avoid breaking apps using both versions
    ErrorHandler.prototype.handleError = function (errorResponse) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(errorResponse.error.error || 'Server error');
    };
    ErrorHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], ErrorHandler);
    return ErrorHandler;
}());

//# sourceMappingURL=error.service.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_service_util_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pdaparams_service_pdaparams_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service_shared_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__log_service_log_service__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BaseServiceProvider = /** @class */ (function () {
    function BaseServiceProvider(pdaParams, utilService, logger, alertCtrl, sharedService, actionSheetCtrl) {
        var _this = this;
        this.pdaParams = pdaParams;
        this.utilService = utilService;
        this.logger = logger;
        this.alertCtrl = alertCtrl;
        this.sharedService = sharedService;
        this.actionSheetCtrl = actionSheetCtrl;
        this.logParams = { site: this.pdaParams.getSiteId(), driver: this.pdaParams.getDriverId(), fn: 'BaseServiceProvider' };
        this.log = this.logger.getInstance(this.logParams);
        this.errorMessages = [];
        this.errorObj = {};
        this.bNewItem = false;
        this.base = {
            "bDataChanged": false,
            // For Edit Forms, this could be used to display/hide a "Save" Button
            "currentItem": null,
            "currentData": null // Set by derived Class
        };
        this.bDataChanged = false;
        // For Edit Forms, this could be used to display/hide a "Save" Button
        this.currentItem = null; // Set by derived Class
        this.currentData = null; // Set by derived Class
        //	The Forms in this App are controlled by extra Attributes defined
        //	within the LoopBack Data Model Properties and control the display
        //	of these Properties within their Display and Edit Forms  
        this.getModelMetadata = function (model, rootScopeProperty) {
            if (rootScopeProperty === "jobMetadata" && _this.sharedService.getJobMetaData() != null) {
                _this.sharedService.jobMetaDataLoadedSubject.next(true);
                return _this.sharedService.getJobMetaData();
            }
            else if (rootScopeProperty === "historyMetadata" && !_this.sharedService.getHistoryMetadata() === undefined) {
                return _this.sharedService.getHistoryMetadata();
            }
            if (model.metadata)
                model.metadata(function (dummy, results) {
                    _this.results = results;
                    // "index" will be used for Property Display Order
                    for (var property in _this.results.properties) {
                        _this.results.properties[property].index =
                            _this.results.properties[property].index || 1000000000; // sets index if currently no value
                    } //end of for
                    // Sort the Properties by "index"
                    _this.results.properties.sort(sortByindex);
                    function sortByindex(a, b) {
                        return a.index - b.index;
                    }
                    if (rootScopeProperty === "jobMetadata") {
                        _this.sharedService.setJobMetaData(_this.results);
                    }
                    else if (rootScopeProperty === "historyMetadata")
                        _this.sharedService.setHistoryMetaData(_this.results);
                    _this.sharedService.jobMetaDataLoadedSubject.next(true);
                }, function (error) { _this.log.debug(error); });
        }; //getModelMetadata(model, rootScopeProperty, cb) ends here.
        // If some Properties within the Model have "includeInHeader" attributes,
        // the Labels and Values will be concatanated into a meaningful description
        // of the Entity...
        this.generateHeaderForModelInstance = function (item, metadata, bLabels) {
            if (!metadata || !item) {
                return '';
            }
            var header = '';
            if (Object.keys(metadata.properties).length > 0) {
                header = (metadata.properties[0].label || '') + ' : ' + //PROBLEM HERE
                    item[metadata.properties[0].name];
            }
            var headerProperties = _this.utilService.findArrayItemsByKey(metadata.properties, "includeInHeader", true);
            if (headerProperties.length > 0) {
                header = '';
                for (var i = 0; i < headerProperties.length; i++) {
                    if (i > 0) {
                        header += ' ';
                    }
                    if (bLabels !== false) {
                        header += (headerProperties[i].label || '') + ':' + item[headerProperties[i].name];
                    }
                    else {
                        header += item[headerProperties[i].name];
                    }
                }
            }
            else {
                var headerProperty = _this.utilService.findArrayItemByKey(metadata.properties, "defaultHeader", true);
                if (headerProperty) {
                    header = (headerProperty.label || '') + ' : ' + item[headerProperty.name];
                }
            }
            return header;
        }; //End of generateHeaderForModelInstance()
        // The "item" argument represents the Raw Data Values for the Entity
        // The "metadata" argument represents the Rules of how to Render the Values
        // The "bNew" argument directs us to created a new Default Entity
        this.combineValuesAndLabels = function (item, metadata, bNew) {
            var data = [];
            var mystr = 'combineValuesAndLabels';
            //Will register if not already registered
            _this.convertDates(item, metadata);
            var curProp;
            for (var iac = 0; iac < item.length; iac++) {
                var interimitem = item[iac]; //Just Get one of the Jobs/Leg
                for (var i = 0; i < Object.keys(metadata.properties).length; i++) {
                    if (i === 0) {
                        metadata.properties[i].index = 1;
                        // Give the First Property a predictable Index Value
                    }
                    curProp = metadata.properties[i];
                    //Riyaz:We do NOT go ahead if this property is not to be shown on the job details page.
                    if (curProp.omitFromForm)
                        continue;
                    var property = interimitem[curProp.name];
                    if (property !== undefined) {
                        // These properties are referenced in the jobDetail template as e.g. property.legid
                        _this.addProp = {
                            label: (curProp.label || curProp.name),
                            value: property,
                            id: curProp.id,
                            index: curProp.index,
                            linkPattern: curProp.linkPattern,
                            required: curProp.required,
                            property: curProp.name,
                            centered: curProp.centered || false,
                            strong: curProp.strong || false,
                            type: (curProp.inputType || ''),
                            numlegs: interimitem.mobjobTotalLegs,
                            legid: interimitem.mobjobSeq,
                            legStatus: interimitem.mobjobStatus,
                            basejob: interimitem.mobjobBasejobNum
                        };
                        // Ionic / Angular now have Data and Metadata combined for rendering...
                        if (curProp.generateNewID) {
                            _this.addProp.generateNewID = curProp.generateNewID;
                            // Some Database Tables may not be set up to auto-generate
                            // new Primary Keys, so this will do it for them.
                            // NOTE:  THIS IS A HACK THAT USING THE CURRENT Date/Time...
                        }
                        if (curProp.omitFromForm) {
                            _this.addProp.omitFromForm = curProp.omitFromForm;
                            // This can be used to leave a Property off specific forms
                            // based on Logic within the Template
                        }
                        if (curProp.lastModified) {
                            _this.addProp.lastModified = curProp.lastModified;
                            // To make sure we update the lastModified on upsert...
                        }
                        if (curProp.inputType === 'enum') {
                            //console.log("curProp.inputType is enum for curProp::" + JSON.stringify(curProp));
                            _this.addProp.enum = curProp.enum;
                            var currentEnumValue = _this.utilService.findArrayItemByKey(_this.addProp.enum, "value", property);
                            if (!currentEnumValue) {
                                currentEnumValue = _this.addProp.enum[0];
                            }
                            _this.addProp.enumValue = currentEnumValue;
                            _this.addProp.enumValue = Object.assign({}, currentEnumValue);
                        }
                        data.push(_this.addProp);
                    }
                } // Metadata End FOR
            } //Item/Job END FOR   
            return data;
        }; //combineValuesAndLabels ends here
        // Generate a Primary Key for the new Entity Instance if necessary
        // and then create a new Instance with Default Values if provided.
        this.createNewItem = function (item, metadata) {
            var idProperty = _this.utilService.findArrayItemByKey(metadata.properties, "id", true);
            if (idProperty && (idProperty.generateNewID)) {
                var newID = new Date().getTime().toString();
                newID = (new Date().getTime() % 2) + newID.substr(newID.length - 8) + (new Date().getTime() % 2);
                item[idProperty.name] = newID;
                // This is a HACK to generate an almost certain Unique Key...
            }
            else {
                item[idProperty.name] = 'New';
            }
            var data = _this.combineValuesAndLabels(item, metadata, true);
            return data;
        }; //createNewItem() ends here
        // Ionic Date Input will ONLY take the "YYYY-MM-DD"
        this.convertDates = function (item, metadata) {
            for (var property in item) {
                var metaProperty = _this.utilService.findArrayItemByKey(metadata.properties, "name", property);
                if ((item[property]) && (metaProperty) && (metaProperty.type === 'Date')) {
                    item[property] = _this.convertDate(item[property]);
                }
            }
        };
        // Assume an ISO Date Format is passed in...
        this.convertDate = function (dateTime) {
            //console.log("Start date:"+dateTime);
            var dateTimeString = dateTime.toString();
            var tnum = dateTimeString.indexOf('T');
            if (tnum > 0) {
                dateTime = dateTimeString.substring(0, tnum + 1);
            }
            return dateTime;
        };
        // Return a Boolean if any Data Item in the Form differs from the
        // Data originally loaded.  This is called from "onChanged" Events
        this.checkIfDataChanged = function (item, data) {
            if (!item || !data) {
                return false;
            }
            for (var property in item) {
                var metaProperty = _this.utilService.findArrayItemByKey(data, "property", property);
                if (metaProperty && (item[property] !== metaProperty.value)) {
                    return true;
                }
            }
            return false;
        };
        // If some operation, typically Creates or Updates, fails,
        // This will let the User know what happened.
        // This is CURRENTLY displaying the Raw Error Messages
        // TODO: Map known errors to more User Friendly Messages.
        this.ErrorPopup = function (err, title, data) {
            var messages = err.data.error.details;
            if (messages) {
                messages = messages.messages;
            }
            else {
                messages = { "Error": err.data.error.message };
                if (!messages) {
                    messages = { "Error": err.data.error };
                }
                else {
                    messages = { "Error": "Unknown Failure" };
                }
            }
            for (var message in messages) {
                _this.errorObj = { name: message, message: messages[message], label: message };
                var metaProperty = _this.utilService.findArrayItemByKey(data, "property", message);
                if (metaProperty) {
                    _this.errorObj.label = metaProperty.label || _this.errorObj.label;
                }
                _this.errorMessages.push(_this.errorObj);
            }
            var myPopup = {};
            myPopup = _this.alertCtrl.create({});
            myPopup.setTitle(title);
            for (var _i = 0, _a = _this.errorMessages; _i < _a.length; _i++) {
                var mesg = _a[_i];
                myPopup.setSubtitle(mesg.label);
                myPopup.message(mesg.message);
                myPopup.addButton({
                    text: 'OK'
                });
            } //End of for loop
            myPopup.present();
        }; //ErrorPopup ends here
        // "updateItem" will handle both Inserts and Updates
        this.updateItem = function (item, data, model, cb, bNew) {
            // If we didn't have to generate a Primary Key for a New Entity,
            // we delete the "id" property to ensure the DB Generates it as needed.
            if (bNew) {
                var idProperty = _this.utilService.findArrayItemByKey(data, "id", true);
                if (idProperty) {
                    if (!idProperty.generateNewID) {
                        delete item[idProperty.property];
                    }
                }
            }
            // Because the UX displayed the Values controlled with the Metadata,
            // Let's extract the Values back into a Clean Item Object...
            for (var property in item) {
                var metaProperty = _this.utilService.findArrayItemByKey(data, "property", property);
                if (metaProperty && (item[property] !== metaProperty.value)) {
                    item[property] = metaProperty.value;
                }
            }
            // If there is a "lastModified" Property, update it to "NOW"...
            var lastModified = _this.utilService.findArrayItemByKey(data, "lastModified", true);
            if (lastModified) {
                item[lastModified.property] = new Date().toISOString();
            }
            // Insert or Update
            model.upsert(item) // Method generated by the LoopBack Angular SDK
                .$promise
                .then(function (results) {
                cb(results);
                // The Callback will usually do something like refresh the View
            }, function (err) {
                this.ErrorPopup(err, 'Save Error(s)', data);
                // Display the Error(s)
            });
        }; //updateItem ends here
        // Delete an Entity
        this.deleteItem = function (id, model, cb) {
            model.deleteById({ "id": id }) // Method generated by the LoopBack Angular SDK
                .$promise
                .then(function (results) {
                cb(results);
            }, function (err) {
                this.ErrorPopup(err, 'Deletion Error(s)', this.data);
                // Display the Error(s)
            });
        }; //deleteItem 
        // Most Views will have to Display some sort of Context Menu and
        // this is the Base Helper Function which uses $ionicActionSheet
        // to reveal this Context Menu from the Bottom of the Screen.
        this.showActionSheetBase = function (label, buttons, cb, bDelete) {
            // Show the action sheet
            var sheetParams = {
                buttons: buttons,
                destructiveText: 'Delete',
                titleText: label,
                cancelText: 'Hide Menu',
                cancel: function () { },
                buttonClicked: function (index) {
                    var command = buttons[index].command;
                    if (cb) {
                        cb(command); // Just let the View know the chosen
                    } // Action to perform...
                    return true;
                },
                destructiveButtonClicked: function () {
                    if (cb) {
                        cb("delete"); // "delete" is the Action for "Delete"
                    }
                    return true;
                }
            }; //End of sheetParams
            var actionSheet = _this.actionSheetCtrl.create(sheetParams);
            if (bDelete === false) {
                delete sheetParams.destructiveText;
                // if "delete" doesn't mean anything in this Context
            }
            // Let Ionic display the Menu
            actionSheet.present();
            //$ionicActionSheet.show(sheetParams);
        }; //showActionSheetBase ends here
        // Enum Selects need special Handling onChange
        // Since their Label may not be equivalent to the mapped Value
        // and the Enum Array Objects cannot serve as the actual Property Value
        this.multiSelectChange = function (property) {
            if (_this.bNewItem) {
                _this.base.bDataChanged = true; // New Entities should always allow "save"
                return;
            }
            property.value = property.enumValue.value;
            // Set the Actual Property Value from the Chosen Enum Label...
            _this.base.bDataChanged = _this.checkIfDataChanged(_this.base.currentItem, _this.base.currentData);
            // Check if anything has changed from the currentItem...
        };
        // This is actually done on keyup for standard Input Fields
        // Since onChange only triggers when the New Value differs 
        // from the Original Value.
        this.dataChanged = function (evt, property) {
            if (_this.bNewItem) {
                _this.base.bDataChanged = true; // New Entities should always allow "save"
                return;
            }
            _this.base.bDataChanged = _this.checkIfDataChanged(_this.base.currentItem, _this.base.currentData);
            // Check if anything has changed from the currentItem...
        };
        console.log('Hello BaseServiceProvider Provider');
        this.bNewItem = this.sharedService.getBNewItem();
        this.sharedService.setDesktopBrowserScrolling(true);
    }
    BaseServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__util_service_util_service__["a" /* UtilServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__log_service_log_service__["a" /* LogServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__shared_service_shared_service__["a" /* SharedServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], BaseServiceProvider);
    return BaseServiceProvider;
}());

//# sourceMappingURL=base-service.js.map

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketConnection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_driver__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */





/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module SocketConnection
* @license MIT
* @description
* This module handle socket connections and return singleton instances for each
* connection, it will use the SDK Socket Driver Available currently supporting
* Angular 2 for web, NativeScript 2 and Angular Universal.
**/
var SocketConnection = /** @class */ (function () {
    /**
     * @method constructor
     * @param {SocketDriver} driver Socket IO Driver
     * @param {NgZone} zone Angular 2 Zone
     * @description
     * The constructor will set references for the shared hot observables from
     * the class subjects. Then it will subscribe each of these observables
     * that will create a channel that later will be shared between subscribers.
     **/
    function SocketConnection(driver, zone) {
        this.driver = driver;
        this.zone = zone;
        this.subjects = {
            onConnect: new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"](),
            onDisconnect: new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"](),
            onAuthenticated: new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"](),
            onUnAuthorized: new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]()
        };
        this.sharedObservables = {};
        this.authenticated = false;
        this.sharedObservables = {
            sharedOnConnect: this.subjects.onConnect.asObservable().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["share"])()),
            sharedOnDisconnect: this.subjects.onDisconnect.asObservable().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["share"])()),
            sharedOnAuthenticated: this.subjects.onAuthenticated.asObservable().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["share"])()),
            sharedOnUnAuthorized: this.subjects.onUnAuthorized.asObservable().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["share"])())
        };
        // This is needed to create the first channel, subsequents will share the connection
        // We are using Hot Observables to avoid duplicating connection status events.
        this.sharedObservables.sharedOnConnect.subscribe();
        this.sharedObservables.sharedOnDisconnect.subscribe();
        this.sharedObservables.sharedOnAuthenticated.subscribe();
        this.sharedObservables.sharedOnUnAuthorized.subscribe();
    }
    /**
     * @method connect
     * @param {AccessToken} token AccesToken instance
     * @return {void}
     * @description
     * This method will create a new socket connection when not previously established.
     * If there is a broken connection it will reConnect.
     **/
    SocketConnection.prototype.connect = function (token) {
        var _this = this;
        if (token === void 0) { token = null; }
        if (!this.socket) {
            console.info('Creating a new connection with: ', __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath());
            // Create new socket connection
            this.socket = this.driver.connect(__WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(), {
                log: false,
                secure: __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].isSecureWebSocketsSet(),
                forceNew: true,
                forceWebsockets: true,
                transports: ['websocket']
            });
            // Listen for connection
            this.on('connect', function () {
                _this.subjects.onConnect.next('connected');
                // Authenticate or start heartbeat now    
                _this.emit('authentication', token);
            });
            // Listen for authentication
            this.on('authenticated', function () {
                _this.authenticated = true;
                _this.subjects.onAuthenticated.next();
                _this.heartbeater();
            });
            // Listen for authentication
            this.on('unauthorized', function (err) {
                _this.authenticated = false;
                _this.subjects.onUnAuthorized.next(err);
            });
            // Listen for disconnections
            this.on('disconnect', function (status) { return _this.subjects.onDisconnect.next(status); });
        }
        else if (this.socket && !this.socket.connected) {
            if (typeof this.socket.off === 'function') {
                this.socket.off();
            }
            if (typeof this.socket.destroy === 'function') {
                this.socket.destroy();
            }
            delete this.socket;
            this.connect(token);
        }
    };
    /**
     * @method isConnected
     * @return {boolean}
     * @description
     * This method will return true or false depending on established connections
     **/
    SocketConnection.prototype.isConnected = function () {
        return (this.socket && this.socket.connected);
    };
    /**
     * @method on
     * @param {string} event Event name
     * @param {Function} handler Event listener handler
     * @return {void}
     * @description
     * This method listen for server events from the current WebSocket connection.
     * This method is a facade that will wrap the original "on" method and run it
     * within the Angular Zone to avoid update issues.
     **/
    SocketConnection.prototype.on = function (event, handler) {
        var _this = this;
        this.socket.on(event, function (data) { return _this.zone.run(function () { return handler(data); }); });
    };
    /**
     * @method emit
     * @param {string} event Event name
     * @param {any=} data Any type of data
     * @return {void}
     * @description
     * This method will send any type of data to the server according the event set.
     **/
    SocketConnection.prototype.emit = function (event, data) {
        if (data) {
            this.socket.emit(event, data);
        }
        else {
            this.socket.emit(event);
        }
    };
    /**
     * @method removeListener
     * @param {string} event Event name
     * @param {Function} handler Event listener handler
     * @return {void}
     * @description
     * This method will wrap the original "on" method and run it within the Angular Zone
     * Note: off is being used since the nativescript socket io client does not provide
     * removeListener method, but only provides with off which is provided in any platform.
     **/
    SocketConnection.prototype.removeListener = function (event, handler) {
        if (typeof this.socket.off === 'function') {
            this.socket.off(event, handler);
        }
    };
    /**
     * @method removeAllListeners
     * @param {string} event Event name
     * @param {Function} handler Event listener handler
     * @return {void}
     * @description
     * This method will wrap the original "on" method and run it within the Angular Zone
     * Note: off is being used since the nativescript socket io client does not provide
     * removeListener method, but only provides with off which is provided in any platform.
     **/
    SocketConnection.prototype.removeAllListeners = function (event) {
        if (typeof this.socket.removeAllListeners === 'function') {
            this.socket.removeAllListeners(event);
        }
    };
    /**
     * @method disconnect
     * @return {void}
     * @description
     * This will disconnect the client from the server
     **/
    SocketConnection.prototype.disconnect = function () {
        this.socket.disconnect();
    };
    /**
     * @method heartbeater
     * @return {void}
     * @description
     * This will keep the connection as active, even when users are not sending
     * data, this avoids disconnection because of a connection not being used.
     **/
    SocketConnection.prototype.heartbeater = function () {
        var _this = this;
        var heartbeater = setInterval(function () {
            if (_this.isConnected()) {
                _this.socket.emit('lb-ping');
            }
            else {
                _this.socket.removeAllListeners('lb-pong');
                clearInterval(heartbeater);
            }
        }, 15000);
        this.socket.on('lb-pong', function (data) { return console.info('Heartbeat: ', data); });
    };
    SocketConnection = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__socket_driver__["a" /* SocketDriver */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__socket_driver__["a" /* SocketDriver */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], SocketConnection);
    return SocketConnection;
}());

//# sourceMappingURL=socket.connections.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__log_service_log_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pdaparams_service_pdaparams_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__image_file_service_image_file_service__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__siteconfig_service_siteconfig_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__platform_ready_service_platform_ready_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_service_shared_service__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












;
/*
  Generated class for the ImageServiceProvider provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
  // Service to handle image files
*/
var ImageServiceProvider = /** @class */ (function () {
    function ImageServiceProvider(pdaParams, alertCtrl, logger, imageFileService, siteConfig, platformReady, file, transfer, camera, sharedService, loadingCtrl, toastCtrl) {
        var _this = this;
        this.pdaParams = pdaParams;
        this.alertCtrl = alertCtrl;
        this.logger = logger;
        this.imageFileService = imageFileService;
        this.siteConfig = siteConfig;
        this.platformReady = platformReady;
        this.file = file;
        this.transfer = transfer;
        this.camera = camera;
        this.sharedService = sharedService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.calls = 0;
        this.uploadUrl = "";
        this.SITE_CONFIG_LOADED = false;
        this.Job = lbclient.models.LocalJob;
        this.poller = function () {
            // read through image dir and grab any files
            //console.log("Running poller...")
            _this.uploadUrl = localStorage.getItem('apiURL') + "/api/images/upload";
            if (_this.uploadUrl == "") {
                var val = _this.siteConfig.getSiteConfigValue('PDA_IMAGES_URL');
                _this.uploadUrl = val;
                _this.log.debug('this.uploadUrl set to:[' + _this.uploadUrl + ']');
            }
            if (_this.platformReady.isPlatformReady()) {
                _this.uploadAllImages();
                _this.deleteObsoleteImages().subscribe(function () {
                    _this.sharedService.imageRefresh.next(true);
                });
            }
            _this.calls++;
            _this.pollTime = _this.pdaParams.imagePollTime || (60000 * 5);
            //console.log("pollTime is ::" + this.pollTime);
            // re-read from pda params
            if (_this.pollTime < 10000)
                _this.pollTime = 10000; // min allowed 10 seconds
            setTimeout(_this.poller, _this.pollTime);
        }; //poller fn ends here
        this.uploadAllImages = function () {
            _this.log.debug('uploadAllImages: checking..');
            _this.getImageList().subscribe(function (images) {
                _this.log.debug('uploadAllImages: found ' + images.length + ' images, check if ready for upload');
                images.forEach(function (image) {
                    // if already uploaded don't do it again
                    var uploaded = _this.imageFileService.getImageProperty(image.name, 'uploaded');
                    var readyForUpload = _this.imageFileService.getImageProperty(image.name, 'readyForUpload');
                    _this.log.debug('uploadAllImages: image:' + image.name + ', readyForUpload:' + readyForUpload + ', uploaded:' + uploaded + ', pdaParams.imageUpload:' + _this.pdaParams.imageUpload);
                    // if not ready don't upload - e.g. maybe still adding notes
                    if (readyForUpload == null || readyForUpload == 'false')
                        return; // stop processing this iteration
                    if (uploaded != null && !uploaded && _this.pdaParams.imageUpload) {
                        _this.uploadImage(image);
                    }
                });
            });
        };
        this.uploadImage = function (image, callback) {
            var imagedata = _this.imageFileService.getImage(image.name) || {};
            var cb = callback;
            var fileTransfer = _this.transfer.create();
            var options = {
                fileKey: "file",
                fileName: image.name,
                mimeType: "image/jpeg",
                chunkedMode: false,
                params: {
                    "description": "Image from PDA",
                    "notes": imagedata.notes
                },
                headers: {
                    'Accept': 'application/json',
                    Connection: "close"
                },
                httpMethod: 'POST'
            };
            // If we have a metadata object retrieve each property and add to options.params
            var metadata = imagedata.metadata || {};
            for (var property in metadata) {
                if (metadata.hasOwnProperty(property)) {
                    options.params[property] = metadata[property];
                }
            }
            _this.uploadUrl = localStorage.getItem('apiURL') + "/api/images/upload";
            if (_this.uploadUrl != "") {
                //Riyaz: https://github.com/justinwoodcock/Loopback-Upload
                fileTransfer.upload(image.nativeURL, _this.uploadUrl, options).then(function (result) {
                    _this.imageFileService.setImageProperty(image.name, 'uploaded', true); // mark as uploaded on success   
                    //loader.dismiss();
                    _this.log.debug("Image :: " + image.nativeURL + " uploaded successfully.");
                    _this.presentToast("Image uploaded successfully");
                    if (cb)
                        cb(result);
                }, function (err) {
                    //loader.dismiss();
                    _this.log.error(JSON.stringify(err));
                });
            }
            else {
                _this.log.debug('this.uploadUrl:[' + _this.uploadUrl + '], so getSiteConfig');
                var val = _this.siteConfig.getSiteConfigValue('PDA_IMAGES_URL');
                _this.uploadUrl = val;
            }
        };
        this.getImageList = function (imageId) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].create(function (observer) {
                var prefix = imageId || ""; // optional image name to search for (first x chars no suffix)  
                if (_this.platformReady.isPlatformReady()) {
                    _this.file.resolveLocalFilesystemUrl(_this.file.dataDirectory).then(function (fileSystem) {
                        var directoryReader = fileSystem.createReader();
                        directoryReader.readEntries(function (entries) {
                            var numFilesAndDirs = entries.length;
                            _this.fileList = [];
                            for (var i = 0; i < numFilesAndDirs; i++) {
                                var fileEntry = entries[i];
                                if (fileEntry.isFile) {
                                    var imgfile = {
                                        nativeURL: '',
                                        name: '',
                                        uploaded: false,
                                        readyForUpload: '',
                                        metadata: {},
                                        notes: ''
                                    };
                                    var isImage = (/\.(gif|jpg|jpeg|tiff|png)$/i).test(fileEntry.name);
                                    var isMatch = true; // TODO - is this the correct default value?  Maybe false?
                                    if (prefix) {
                                        var re = new RegExp('^' + prefix + '.*_.*$', 'i');
                                        isMatch = re.test(fileEntry.name);
                                    }
                                    if (isImage && isMatch) {
                                        imgfile.nativeURL = fileEntry.nativeURL;
                                        imgfile.name = fileEntry.name;
                                        imgfile.uploaded = _this.imageFileService.getImageProperty(fileEntry.name, 'uploaded');
                                        imgfile.notes = _this.imageFileService.getImageProperty(fileEntry.name, 'notes');
                                        imgfile.readyForUpload = _this.imageFileService.getImageProperty(fileEntry.name, 'readyForUpload');
                                        _this.fileList.push(imgfile);
                                    }
                                } //End of if
                            } //end of for loop
                            observer.next(_this.fileList);
                        }, function (error) {
                            _this.log.error(error);
                            __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(error);
                        }); //End of readentries()
                    }, function (error) {
                        _this.log.error(error);
                        __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(error);
                    });
                }
                else {
                    observer.next(_this.fileList); // empty list if no cordova
                }
            }, function (error) {
                _this.log.error(error);
                __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(error);
            });
        };
        this.takePhoto = function (photoId) {
            var result;
            var options = {
                quality: _this.pdaParams.imageQuality || 50,
                destinationType: _this.camera.DestinationType.FILE_URI,
                sourceType: _this.camera.PictureSourceType.CAMERA,
                encodingType: _this.camera.EncodingType.JPEG,
                cameraDirection: 0,
                saveToPhotoAlbum: false
            };
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].create(function (observer) {
                _this.camera.getPicture(options).then(function (imageURI) {
                    observer.next(imageURI);
                }, function (err) {
                    __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(err);
                });
            });
        }; //takePhoto function ends here
        this.deleteSingleImage = function (imageId) {
            if (_this.platformReady.isPlatformReady()) {
                return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].create(function (observer) {
                    if (!imageId) {
                        observer.throw("imageId must be supplied");
                    }
                    var isImage = (/\.(gif|jpg|jpeg|tiff|png)$/i).test(imageId);
                    if (isImage) {
                        _this.file.removeFile(_this.file.dataDirectory, imageId).then(function (result) {
                            _this.imageFileService.deleteImage(imageId);
                            _this.log.debug('deleteSingleImage:' + JSON.stringify(result));
                            observer.next(result);
                        });
                    }
                    else {
                        observer.throw('Not an image file:' + imageId);
                    }
                    //return deferred.promise;
                });
            }
        };
        this.deleteObsoleteImages = function () {
            //var promises = [];			// array of promises for $q.all
            var observablesArray = []; // array of observables for Observable.forkJoin  
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].create(function (deferredAllImages) {
                var result = {
                    numImages: 0,
                    delImages: 0,
                    errImages: 0,
                    failed: [] // array of filename/errors on error
                };
                _this.getImageList().subscribe(function (images) {
                    result.numImages = images.length;
                    _this.log.debug('deleteObsoleteImages: images found to check:' + result.numImages);
                    //console.log('deleteObsoleteImages: images found to check:' + result.numImages);
                    /*
                        * For each image file check if there is still a job (jobSeq) for it
                        * and if not then delete the image from the file system and any metadata
                        * from local storage
                        */
                    images.forEach(function (image) {
                        //console.log("In foreach of deleteObsoleteImages with image as:" + image.name);
                        var deferredImage = __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].create(function (observer) {
                            //console.log("Inside deferredImage observable creation!! ");
                            var name = image.name;
                            var jobSeq = name.substring(0, name.indexOf('_'));
                            var filter = { "where": { "mobjobSeq": jobSeq } };
                            // Check image has been uploaded and that the job no longer exists
                            var uploaded = _this.imageFileService.getImageProperty(image.name, 'uploaded');
                            //image.uploaded;
                            _this.log.debug('deleteObsoleteImages: check name:' + name + ', uploaded:' + uploaded + ', jobSeq:' + jobSeq);
                            //console.log('deleteObsoleteImages: check name:' + name + ', uploaded:' + uploaded + ', jobSeq:' + jobSeq);
                            if (uploaded) {
                                _this.Job.find(filter).then(function (jobs) {
                                    _this.log.debug('deleteObsoleteImages: found:' + jobs.length + ' job legs');
                                    //console.log('deleteObsoleteImages: found:' + jobs.length + ' job legs');
                                    if (jobs.length == 0) {
                                        _this.deleteSingleImage(name).subscribe(function (success) {
                                            result.delImages += 1;
                                            _this.log.debug("deleteObsoleteImages: deleted:" + success.fileRemoved.name);
                                        }, function (err) {
                                            this.log.error('deleteObsoleteImages: failed to delete:' + name + ', err:' + err);
                                            result.errImages += 1;
                                            var failed = {
                                                name: name,
                                                err: err
                                            };
                                            result.failed.push(failed);
                                        });
                                        observer.next();
                                    } //jobs.length===0
                                    else {
                                        //console.log("deleteObsoleteImages: in the else.")
                                        observer.next();
                                    }
                                }); //jobApi.find() ends here
                            } //if uploaded check ends here
                            else {
                                observer.next();
                            } // if (uploaded) check ends here
                        });
                        deferredImage.subscribe();
                        //console.log("deleteObsoleteImages:Pushing the observables into array");
                        observablesArray.push(deferredImage);
                    }); //images.forEach closes here       
                }); //getImageList() subscription ends here.
                __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].forkJoin(observablesArray).subscribe(function (result) {
                    //console.log("deleteObsoleteImages:Inside forkjoin");
                    deferredAllImages.next(result);
                });
            }); //Observable for deferredAllImages ends here
        }; //End of deleteObsoleteImages();
        this.startWatching = function () {
            // Wait for site config to load and then start polling service if required
            var poller_started = false;
            //console.log("startWatching:SITE_CONFIG_LOADED value:" + this.SITE_CONFIG_LOADED);
            if (_this.SITE_CONFIG_LOADED || localStorage.getItem('SITE_CONFIG_LOADED')) {
                var YN = _this.siteConfig.getSiteConfigValue('PDA_IMAGES');
                _this.log.debug('startWatching: PDA_IMAGES:' + YN + ', poll_started:' + poller_started);
                if (YN === 'Y' && !poller_started) {
                    _this.log.debug('startWatching: PDA_IMAGES:' + YN + ', calling poller()');
                    poller_started = true;
                    _this.poller();
                }
                else {
                    _this.log.debug('startWatching: PDA_IMAGES:' + YN + ', NO polling or already started');
                }
            }
        };
        this.getCount = function () { return (_this.calls); };
        //console.log('Hello ImageServiceProvider Provider');
        this.logParams = { site: this.pdaParams.getSiteId(), driver: this.pdaParams.getDriverId(), fn: 'ImageServiceProvider' };
        this.log = this.logger.getInstance(this.logParams);
        //Subscribe to the SITE_CONFIG_LOADED subject.
        this.sharedService.SITE_CONFIG_LOADED.subscribe(function (SITE_CONFIG_LOADED) {
            _this.SITE_CONFIG_LOADED = SITE_CONFIG_LOADED;
        });
        this.logParams = { site: this.pdaParams.getSiteId(), driver: this.pdaParams.getDriverId(), fn: 'ImageServiceProvider' };
        this.log = this.logger.getInstance(this.logParams);
        this.pollTime = this.pdaParams.imagePollTime || (60000 * 5); // 30000 = 30 secs   
    }
    ImageServiceProvider.prototype.dirname = function (path) {
        return path.replace(/\/[^\/]*$/, '');
    };
    ImageServiceProvider.prototype.storeImageURI = function (photoId, imageURI, metadata) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].create(function (observer) {
            //Grab the file name of the photo in the temporary directory
            var currentName = imageURI.replace(/^.*[\\\/]/, '');
            //Create a new name for the photo
            var d = new Date(), n = d.getTime(), baseFileName = photoId + "_" + n;
            var newFileName = baseFileName + ".jpg";
            var currentDirectory = _this.dirname(imageURI);
            // moves file from temp camera area on device to the app's local file system
            _this.file.moveFile(currentDirectory, currentName, _this.file.dataDirectory, newFileName).then(function (success) {
                var data = {
                    savedImageURI: _this.file.dataDirectory + newFileName,
                    baseFileName: baseFileName,
                    newFileName: newFileName,
                    metadata: metadata
                };
                var imageData = {
                    name: newFileName,
                    uploaded: false,
                    readyForUpload: 'false',
                    metadata: metadata,
                    notes: ''
                };
                _this.imageFileService.addImage(imageData); // store name/status in local storage           
                observer.next(data);
            }, function (error) {
                __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(error);
            });
        });
    };
    ; // storeImageURI ends here
    ImageServiceProvider.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            //console.log('Dismissed toast');
        });
        toast.present();
    };
    ImageServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__log_service_log_service__["a" /* LogServiceProvider */], __WEBPACK_IMPORTED_MODULE_8__image_file_service_image_file_service__["a" /* ImageFileServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_9__siteconfig_service_siteconfig_service__["a" /* SiteconfigServiceProvider */], __WEBPACK_IMPORTED_MODULE_10__platform_ready_service_platform_ready_service__["a" /* PlatformReadyServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_11__shared_service_shared_service__["a" /* SharedServiceProvider */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* ToastController */]])
    ], ImageServiceProvider);
    return ImageServiceProvider;
}());

//# sourceMappingURL=image-service.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageFileServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__log_service_log_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pdaparams_service_pdaparams_service__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ImageFileServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.

   // see: https://devdactic.com/complete-image-guide-ionic/
*/
var ImageFileServiceProvider = /** @class */ (function () {
    function ImageFileServiceProvider(pdaParams, logger) {
        //console.log('Hello ImageFileServiceProvider Provider');
        var _this = this;
        this.pdaParams = pdaParams;
        this.logger = logger;
        this.images = [];
        this.IMAGE_STORAGE_KEY = 'images';
        this.addImage = function (imageData) {
            _this.images.push(imageData);
            localStorage.setItem(_this.IMAGE_STORAGE_KEY, JSON.stringify(_this.images));
        };
        this.deleteImage = function (imageId) {
            _this.images = _this.getImages();
            var i = _this.images.length;
            while (i--) {
                if (_this.images[i].name === imageId) {
                    _this.images.splice(i, 1);
                    localStorage.setItem(_this.IMAGE_STORAGE_KEY, JSON.stringify(_this.images));
                    break;
                }
            }
        };
        this.setImageProperty = function (imageId, key, value) {
            _this.images = _this.getImages();
            var i = _this.images.length;
            while (i--) {
                if (_this.images[i].name === imageId) {
                    _this.images[i][key] = value;
                    localStorage.setItem(_this.IMAGE_STORAGE_KEY, JSON.stringify(_this.images));
                    break;
                }
            }
        };
        this.getImageProperty = function (imageId, key) {
            _this.images = _this.getImages();
            var i = _this.images.length;
            while (i--) {
                if (_this.images[i].name === imageId) {
                    return (_this.images[i][key]);
                }
            }
            return null; // didn't find what we were looking for
        };
        this.getImage = function (imageId) {
            _this.images = _this.getImages();
            var i = _this.images.length;
            while (i--) {
                if (_this.images[i].name === imageId) {
                    return (_this.images[i]);
                }
            }
            return null; // didn't find what we were looking for
        };
        this.logParams = { site: this.pdaParams.getSiteId(), driver: this.pdaParams.getDriverId(), fn: 'ImageFileServiceProvider' };
        this.log = this.logger.getInstance(this.logParams);
        this.storeImage = this.addImage;
        this.removeImage = this.deleteImage;
        this.set = this.setImageProperty;
        this.get = this.getImageProperty;
        this.images = this.getImages();
    }
    // Gets a list of image names from local storage - not the file system
    ImageFileServiceProvider.prototype.getImages = function () {
        var img = localStorage.getItem(this.IMAGE_STORAGE_KEY);
        if (img) {
            this.images = JSON.parse(img);
        }
        else {
            this.images = [];
        }
        return this.images;
    };
    ImageFileServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1__log_service_log_service__["a" /* LogServiceProvider */]])
    ], ImageFileServiceProvider);
    return ImageFileServiceProvider;
}());

//# sourceMappingURL=image-file-service.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GpsServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_sdk_models_GpsHistory__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_sdk_services_custom_GpsHistory__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gps_audit_service_gps_audit_service__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pdaparams_service_pdaparams_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_service_shared_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__log_service_log_service__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/*
  Generated class for the GpsServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.

  Refer: https://ionicframework.com/docs/native/geolocation/
*/
var GpsServiceProvider = /** @class */ (function () {
    function GpsServiceProvider(pdaParams, logger, gpsAudit, gpsHistApi, geolocation, device, sharedService) {
        var _this = this;
        this.pdaParams = pdaParams;
        this.logger = logger;
        this.gpsAudit = gpsAudit;
        this.gpsHistApi = gpsHistApi;
        this.geolocation = geolocation;
        this.device = device;
        this.sharedService = sharedService;
        // TODO - set high accuracy with a toggle parameter
        // TODO - set maximumAge to 0?  Apparently Samsung Galaxy phone have issues caching the gps location
        // (see http://stackoverflow.com/questions/16262878/phonegap-geolocation-code-3-timeout-expired-keeps-popping-up-on-some-android)
        // Apparently a reboot can fix Android gps timeouts
        // example here: http://www.gajotres.net/using-cordova-geoloacation-api-with-google-maps-in-ionic-framework/
        //HIGH ACCURACY may be problematic
        //var posOptions = {timeout: 1000, frequency : 1000, enableHighAccuracy: true };
        this.posOptions = { timeout: 10000, enableHighAccuracy: false };
        this.gpsIsWorking = false;
        this.numsaves = 0;
        this.lastGPSsecs = 0; // last timestamp in seconds
        this.thisGPSsecs = 0; // this timestamp in seconds
        this.diffGPSsecs = 0;
        this.getGps = true;
        this.showGpsAlerts = false;
        this.sendGps = true;
        this.gpsData = {};
        this.threshold = 1; // diff between gps must be greater than this to save
        this.logParams = {
            site: this.pdaParams.getSiteId(),
            driver: this.pdaParams.getDriverId(), fn: 'GpsServiceProvider'
        };
        this.log = this.logger.getInstance(this.logParams);
        this.getPos = function () {
            if (_this.getGps) {
                if (_this.log.context.driver == 0) {
                    _this.log.context.driver = _this.pdaParams.getDriverId();
                }
                if (!_this.pdaParams.alwaysGetGPS) {
                    // If driver logged off or app in background don't bother with any of this
                    if (_this.pdaParams.isDrvLoggedOff()) {
                        _this.log.info('Driver logged off, no foreground GPS attempted');
                        return;
                    }
                }
                //Riyaz: Using ionic native's geolocation plugin here
                _this.geolocation.getCurrentPosition(_this.posOptions).then(function (position) {
                    if (_this.showGpsAlerts) {
                        _this.log.debug(' GPSService: Position returned ');
                    }
                    //this.gpsData = angular.copy(position);
                    _this.gpsData = Object.assign({}, position);
                    _this.log.debug("position:" + JSON.stringify(_this.gpsData));
                    _this.saveGpsToDb(_this.pdaParams.getDriverId(), position);
                    _this.gpsIsWorking = true;
                }).catch(function (err) {
                    if (_this.showGpsAlerts) {
                        _this.log.debug('GPsService Error code: ' + err.code + '\n' + 'message: ' + err.message + '\n');
                    }
                    // error
                    _this.gpsIsWorking = false;
                    var error = _this.getGPSErrors(err);
                    _this.log.error("getCurrentPosition failed with error :" + error);
                });
            }
        }; //getPos() ends here
        this.saveGpsToDb = function (drvid, position) {
            //GpsHistory() is a call to the GpsHistory model
            var lgps = new __WEBPACK_IMPORTED_MODULE_3__shared_sdk_models_GpsHistory__["a" /* GpsHistory */]();
            lgps.gps_driver_id = drvid;
            //lgps.gps_timestamp = new Date(position.timestamp);
            lgps.gps_timestamp = position.timestamp;
            if (position.speed !== null && position.speed !== undefined)
                lgps.gps_speed = position.speed;
            else
                lgps.gps_speed = 0;
            lgps.gps_latitude = position.coords.latitude.toFixed(6);
            lgps.gps_longitude = position.coords.longitude.toFixed(6);
            lgps.gps_quality = position.coords.accuracy;
            lgps.gps_heading = 0; // position.coords.heading;   
            lgps.gps_time = 0; //new Date(location.timestamp).getTime();
            //this.log.debug("getCurrentPosition OK: sendGps:" + this.sendGps + ", lgps:" + JSON.stringify(lgps));
            _this.gpsAudit.saveGps(lgps);
            //lgps.gps_timestamp = position.timestamp;
            // TODO - do we need any more criteria to create history record?  if connected?
            if (_this.sendGps && lgps.gps_driver_id > 0) {
                _this.log.info("About to save Foreground GPS");
                _this.gpsHistApi.create(lgps).subscribe(function (obj) {
                    _this.log.info("gpsHistApi.create success for Foreground GPS: obj:" + JSON.stringify(lgps));
                }, function (err) {
                    _this.log.error("gpsHistApi.create failed for Foreground GPS: err:" + JSON.stringify(err));
                });
            }
        }; //saveGpsToDB(drvid, position) ends here
        //Every 60 Seconds
        this.intervalId = setInterval(this.getPos, 60000);
        this.platform = this.device.platform;
        //console.log('Hello GpsServiceProvider Provider');
        this.sharedService.RESUME.subscribe(function (val) {
            // foreground
            _this.log.info("RESUME event fired: ForeGround GPS about to START.");
            _this.getGps = true;
            _this.getPos();
        });
        this.sharedService.PAUSE.subscribe(function (val) {
            // background
            _this.log.info("PAUSE event fired: ForeGround GPS about to STOP.");
            _this.getGps = false;
        });
    } //Constructor ends here
    GpsServiceProvider.prototype.onSuccess = function (position) {
        this.gpsIsWorking = true;
    };
    GpsServiceProvider.prototype.onError = function (error) {
        if (this.showGpsAlerts) {
            this.log.error('GPSservice OnOFFPos  Error code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
        }
        this.gpsIsWorking = false;
    };
    GpsServiceProvider.prototype.getGpsIsWorking = function () {
        //getOneoFFPos();
        return this.gpsIsWorking;
    };
    GpsServiceProvider.prototype.getShowGpsAlerts = function () {
        //getOneoFFPos();
        return this.showGpsAlerts;
    };
    GpsServiceProvider.prototype.getSendGps = function () {
        //getOneoFFPos();
        return this.sendGps;
    };
    GpsServiceProvider.prototype.setShowGpsAlerts = function (torf) {
        this.showGpsAlerts = torf;
        localStorage.setItem('showGpsAlerts', JSON.stringify(this.showGpsAlerts));
    };
    GpsServiceProvider.prototype.setSendGps = function (torf) {
        this.sendGps = torf;
        localStorage.setItem('sendGps', JSON.stringify(this.sendGps));
        this.log.debug("setSendGps now:" + this.sendGps);
    };
    GpsServiceProvider.prototype.toggleShowGpsAlerts = function () {
        this.showGpsAlerts = !this.showGpsAlerts;
        localStorage.setItem('showGpsAlerts', JSON.stringify(this.showGpsAlerts));
    };
    // LT - code added for background geolocation processing
    GpsServiceProvider.prototype.getCurrentPos = function (cb) {
        this.geolocation.getCurrentPosition(this.posOptions).then(function (position) {
            cb(null, position);
        }).catch(function (err) {
            cb(err, null);
        });
    }; //getCurrentPos(cb) ends here
    GpsServiceProvider.prototype.getGPSErrors = function (err) {
        var error;
        switch (err.code) {
            case err.PERMISSION_DENIED:
                error = "Failed to retrieve the location of the device because the application does not have permission to use the Location Service.";
                break;
            case err.POSITION_UNAVAILABLE:
                error = "The location of the device could not be determined.";
                break;
            case err.TIMEOUT:
                error = "Unable to retrieve the location information within the specified maximum timeout interval.";
                break;
            case err.UNKNOWN_ERROR:
                error = "Failed to retrieve the location of the device due to an unknown error.";
                break;
        }
        return error;
    };
    GpsServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_8__log_service_log_service__["a" /* LogServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__gps_audit_service_gps_audit_service__["a" /* GpsAuditServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__shared_sdk_services_custom_GpsHistory__["a" /* GpsHistoryApi */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_7__shared_service_shared_service__["a" /* SharedServiceProvider */]])
    ], GpsServiceProvider);
    return GpsServiceProvider;
}());

//# sourceMappingURL=gps-service.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SodServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__log_service_log_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pdaparams_service_pdaparams_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__siteconfig_service_siteconfig_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service_shared_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__jsea_service_jsea_service__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__message_service_message_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__event_service_event_service__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__job_service_job_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__background_geolocation_service_background_geolocation_service__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__platform_ready_service_platform_ready_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__device_diagnostic_service_device_diagnostic_service__ = __webpack_require__(123);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













/*
  Generated class for the SodServiceProvider provider.

  Start of Day Service

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var SodServiceProvider = /** @class */ (function () {
    function SodServiceProvider(jobService, pdaParams, siteConfig, logger, sharedService, jseaService, messageService, alertCtrl, eventService, platformReady, backgroundGeolocationService, deviceDiagnosticServiceProvider) {
        var _this = this;
        this.jobService = jobService;
        this.pdaParams = pdaParams;
        this.siteConfig = siteConfig;
        this.logger = logger;
        this.sharedService = sharedService;
        this.jseaService = jseaService;
        this.messageService = messageService;
        this.alertCtrl = alertCtrl;
        this.eventService = eventService;
        this.platformReady = platformReady;
        this.backgroundGeolocationService = backgroundGeolocationService;
        this.deviceDiagnosticServiceProvider = deviceDiagnosticServiceProvider;
        this.logParams = { site: this.pdaParams.getSiteId(), driver: this.pdaParams.getDriverId(), fn: 'SodServiceProvider' };
        this.log = this.logger.getInstance(this.logParams);
        //When App starts Get from localstorage
        //Logic is everytime the app resumes we check the resume datetime
        // and if its a new day the update the time in local storage
        // and do a logoff and clear local storage
        this.today = new Date();
        this.mycurday = this.today.getDate();
        //console.log('Hello SodServiceProvider Provider');
        this.sharedService.RESUME.subscribe(function (val) {
            _this.log.debug('RESUME detected');
            _this.checkDoSodAction('FIRST_RESUME');
        });
    }
    //this.log.debug('Instantiating mycurday = :' + mycurday);
    SodServiceProvider.prototype.checkDoSodAction = function (type) {
        var _this = this;
        this.pda_disable_diagnostics_bgps_on_logoff = (this.pdaParams.pda_disable_diagnostics_bgps_on_logoff || (this.siteConfig.getSiteConfigValue('PDA_DISABLE_DIAGNOSTICS_BGPS_ON_LOGOFF') == 'Y'));
        //Get What is stored from last initial resum on a day in past
        var prevResumeDateStr = localStorage.getItem('FIRST_RESUME_DATE');
        if (type == 'FIRST_RESUME') {
            this.today = new Date();
            this.mycurday = this.today.getDate();
            if (prevResumeDateStr) {
                var prevResumeDate = new Date(prevResumeDateStr);
                var prevResumeDay = prevResumeDate.getDate();
                this.log.debug('On Resume prevResumeDate from localstorage = :' + prevResumeDateStr + ' Str convertTodate = ' + prevResumeDate + ' prevResumeDay = ' + prevResumeDay + ' mycurday = ' + this.mycurday);
                //Resume on different day
                //if( prevResumeDay == mycurday )
                if (prevResumeDay != this.mycurday) {
                    //Do some shit and store
                    this.now = new Date();
                    localStorage.setItem('FIRST_RESUME_DATE', this.now);
                    this.pdaParams.logoffDriver();
                    if (this.platformReady.isPlatformReady() && this.pda_disable_diagnostics_bgps_on_logoff) {
                        this.backgroundGeolocationService.stop();
                        this.deviceDiagnosticServiceProvider.stopDiagnostics();
                    }
                    this.eventService.sendMsg('LOGOFF', '');
                    this.log.debug(" prevResumeDay != mycurday mycurday = " + this.mycurday);
                    //Set the routed & map jobs to null
                    localStorage.setItem('routedJobs', '');
                    localStorage.setItem('mapJobs', '');
                    //$rootScope.$broadcast('SODSERVICE_IS_NEW_DAY');
                    this.sharedService.SODSERVICE_IS_NEW_DAY.next(true);
                    localStorage.setItem('SODSERVICE_IS_NEW_DAY', 'true');
                    //Dump Device Info
                    this.messageService.dumpDeviceInfo();
                    // Get site config parameters from server
                    var result$ = this.siteConfig
                        .loadAllConfigsFromServer()
                        .subscribe(function (result) {
                        //console.log("Site Config Reloaded!");
                        _this.log.info("Site Config Reloaded for prevResumeDateStr=true from sod-service.ts --> checkDoSodAction()");
                        _this.jobService.deleteOldJobs('');
                        _this.jseaService.deleteOldData();
                        // NOTE - should really be done only after we've deleted data
                        // so perhaps in a callback wrapper?
                        _this.messageService.clearChangeData();
                        _this.messageService.dumpLocalStorage();
                    }, function (error) {
                        _this.showError("Unable to load Site Configs.Please check your connection.");
                        _this.messageService.dumpLocalStorage();
                        return;
                    });
                }
                else {
                    this.log.debug('Not new date');
                    // this.messageService.dumpLocalStorage();
                    //Dump Device Info
                    this.messageService.dumpDeviceInfo();
                }
            }
            else {
                this.now = new Date();
                localStorage.setItem('FIRST_RESUME_DATE', this.now);
                this.log.debug('On Resume prevResumeDate is NULL date = ' + this.now + ' Will clearChange Data');
                //Riyaz: No need to logoff the driver, if he logs in for the first time.The config data is loaded dynamically
                //this.pdaParams.logoffDriver();
                //this.eventService.sendMsg('LOGOFF', '');
                this.messageService.clearChangeData();
                //Dump Device Info
                this.messageService.dumpDeviceInfo();
                // Get site config parameters from server
                var result$ = this.siteConfig
                    .loadAllConfigsFromServer()
                    .subscribe(function (result) {
                    //console.log("Site Config Reloaded!");
                    _this.log.info("Site Config Reloaded for prevResumeDateStr=false from sod-service.ts --> checkDoSodAction()");
                    _this.messageService.dumpLocalStorage();
                }, function (error) {
                    _this.showError("Unable to load Site Configs.Please check your connection.");
                    _this.messageService.dumpLocalStorage();
                    return;
                });
            }
            // TODO - maybe get site config parameters from server here?
        }
        else {
            this.log.error('unknown type:' + type);
        }
    }; //checkDoSodAction(type) ends here
    SodServiceProvider.prototype.showError = function (text) {
        //this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: text,
            buttons: ['OK'],
            enableBackdropDismiss: false
        });
        alert.present();
    };
    SodServiceProvider.prototype.clearSODDate = function () {
        // This will force an initial start of day
        localStorage.removeItem('FIRST_RESUME_DATE');
    };
    SodServiceProvider.prototype.setSODDate = function () {
        // This will force a start of day by setting date to yesterday
        this.d = new Date();
        this.d.setDate(this.d.getDate() - 1);
        localStorage.setItem('FIRST_RESUME_DATE', this.d);
    };
    SodServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__job_service_job_service__["a" /* JobServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__siteconfig_service_siteconfig_service__["a" /* SiteconfigServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__log_service_log_service__["a" /* LogServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__shared_service_shared_service__["a" /* SharedServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__jsea_service_jsea_service__["a" /* JseaServiceProvider */], __WEBPACK_IMPORTED_MODULE_7__message_service_message_service__["a" /* MessageServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_8__event_service_event_service__["a" /* EventServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_11__platform_ready_service_platform_ready_service__["a" /* PlatformReadyServiceProvider */], __WEBPACK_IMPORTED_MODULE_10__background_geolocation_service_background_geolocation_service__["a" /* BackgroundGeolocationServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_12__device_diagnostic_service_device_diagnostic_service__["a" /* DeviceDiagnosticServiceProvider */]])
    ], SodServiceProvider);
    return SodServiceProvider;
}());

//# sourceMappingURL=sod-service.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JseaDriverQuestionsApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_error_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__ = __webpack_require__(20);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `JseaDriverQuestions` model.
 */
var JseaDriverQuestionsApi = /** @class */ (function (_super) {
    __extends(JseaDriverQuestionsApi, _super);
    function JseaDriverQuestionsApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `JseaDriverQuestions` object.)
     * </em>
     */
    JseaDriverQuestionsApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/JseaDriverQuestions";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id JseaDriverQuestions id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `JseaDriverQuestions` object.)
     * </em>
     */
    JseaDriverQuestionsApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/JseaDriverQuestions/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `JseaDriverQuestions`.
     */
    JseaDriverQuestionsApi.prototype.getModelName = function () {
        return "JseaDriverQuestions";
    };
    JseaDriverQuestionsApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */]])
    ], JseaDriverQuestionsApi);
    return JseaDriverQuestionsApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));

//# sourceMappingURL=JseaDriverQuestions.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__platform_ready_service_platform_ready_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the DeviceServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var DeviceServiceProvider = /** @class */ (function () {
    function DeviceServiceProvider(platformReady, cdevice) {
        this.platformReady = platformReady;
        this.cdevice = cdevice;
        this.device = {};
        //console.log('Hello DeviceServiceProvider Provider');
    }
    DeviceServiceProvider.prototype.getDevice = function () {
        this.device = { "browser": true }; //TODO - get error in browser // default
        // cordova, model, platform, UUID, and version information
        if (this.platformReady.isPlatformReady()) {
            //this.device.cordova = this.cdevice.cordova;
            this.device.model = this.cdevice.model;
            this.device.platform = this.cdevice.platform;
            this.device.uuid = this.cdevice.uuid;
            this.device.version = this.cdevice.version;
            //this.device.test = this.cdevice.
        }
        return this.device;
    }; //getDevice() ends here
    DeviceServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__platform_ready_service_platform_ready_service__["a" /* PlatformReadyServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__["a" /* Device */]])
    ], DeviceServiceProvider);
    return DeviceServiceProvider;
}());

//# sourceMappingURL=device-service.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobReplicationServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__connectivity_monitor_connectivity_monitor__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_service_util_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__log_service_log_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pdaparams_service_pdaparams_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service_shared_service__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






;
/*
  Generated class for the JobReplicationServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var JobReplicationServiceProvider = /** @class */ (function () {
    function JobReplicationServiceProvider(conMonService, utilService, logger, pdaParams, sharedService) {
        var _this = this;
        this.conMonService = conMonService;
        this.utilService = utilService;
        this.logger = logger;
        this.pdaParams = pdaParams;
        this.sharedService = sharedService;
        this.LocalJob = lbclient.models.LocalJob;
        this.RemoteJob = lbclient.models.Job;
        this.models = lbclient.models;
        this.lastFilter = {};
        this.d = new Date();
        this.since = { push: -1, pull: -1 };
        this.logParams = { site: this.pdaParams.getSiteId(), driver: this.pdaParams.getDriverId(), fn: 'JobReplicationServiceProvider' };
        this.log = this.logger.getInstance(this.logParams);
        this.syncstatus = {
            _syncInProgress: false,
            get syncInProgress() {
                //this.log.info('syncInProgress?', this._syncInProgress);
                return this._syncInProgress;
            },
            set syncInProgress(value) {
                this._syncInProgress = value;
            }
        };
        /*   fullreplication = {
            _fullReplication: false,
            get fullReplication() {
              //this.log.info('syncInProgress?', this._syncInProgress);
              return this._fullReplication;
            },
            set fullReplication(value) {
              this._fullReplication = value;
            }
          };
         */
        this.conflicts = {
            _resolveConflicts: false,
            get resolveConflictsInClient() {
                //this.log.info('isConnected?', this._isConnected);
                return this._resolveConflicts;
            },
            set resolveConflictsInClient(value) {
                this._resolveConflicts = value;
            }
        };
        this.sync = function (callback, filter) {
            var options = { filter: '', lastFilter: '' };
            var cb = null;
            cb = callback;
            options.filter = filter;
            options.lastFilter = filter;
            _this.lastFilter = filter;
            var counter = 0;
            //this.log.info("isOnline status before replication:" + this.sharedService.isOnline);
            /* var temp = [];
            temp.push('this.sharedService.isOnline:'+this.sharedService.isOnline); */
            if (_this.sharedService.isOnline) {
                if (_this.pdaParams.fullReplication) {
                    _this.since = { push: -1, pull: -1 };
                    _this.log.info('Fullreplication set for the syncing process.');
                }
                else
                    _this.log.info('Fullreplication NOT set for the syncing process.');
                // Remote job first
                //temp.push('Calling: RemoteJob.replicate(), since:' + JSON.stringify(this.since));
                // this.log.info('Calling: RemoteJob.replicate(), since:' + JSON.stringify(this.since));
                _this.RemoteJob.replicate(_this.since.pull, _this.LocalJob, options, function (err, conflicts, cps) {
                    _this.log.info("RemoteJob Replication completed.");
                    options.filter = "";
                    _this.since.pull = cps;
                    //temp.push('Calling: LocalJob.replicate(), since:' + JSON.stringify(this.since));
                    //this.log.info('Calling: LocalJob.replicate(), since:' + JSON.stringify(this.since));
                    _this.LocalJob.replicate(_this.since.push, _this.RemoteJob, options, function (err, conflicts, cps) {
                        _this.log.info("LocalJob Replication completed.");
                        //temp.push("LocalJob Replication completed.");
                        _this.since.push = cps;
                        if (conflicts != undefined) {
                            //temp.push(' finished JOB replication, conflicts:' + conflicts.length);
                            _this.log.info(' finished JOB replication, conflicts:' + conflicts.length);
                        }
                        else {
                            _this.log.info(' finished JOB replication, conflicts ARE UNDEFINED');
                            //temp.push(' finished JOB replication, conflicts ARE UNDEFINED');
                        }
                        if (conflicts != undefined && conflicts.length > 0) {
                            //this.log.info("The number of conflicts detected:" + conflicts.length);
                            // this.log.info('sync: JOB conflicts:' + JSON.stringify(conflicts));
                            conflicts.forEach(function (conflict) {
                                conflict.type(function (err, type) {
                                    conflict.type = type;
                                    conflict.models(function (err, source, target) {
                                        conflict.source = source;
                                        conflict.target = target;
                                        conflict.manual = new conflict.SourceModel(source || target);
                                    });
                                    conflict.changes(function (err, source, target) {
                                        conflict.sourceChange = source;
                                        conflict.targetChange = target;
                                        var sourceType = conflict.sourceChange.type();
                                        var targetType = conflict.targetChange.type();
                                        if (conflicts.resolveConflictsInClient) {
                                            // automatically resolve conflicts
                                            if (sourceType == 'update' && targetType == 'delete') {
                                                conflict.resolveUsingTarget(this.refreshConflicts);
                                            }
                                            else {
                                                conflict.resolveUsingSource(this.refreshConflicts);
                                            }
                                        }
                                    });
                                });
                            });
                        }
                        cb && cb(err, conflicts);
                    });
                });
                //Set the full replication to false
                _this.pdaParams.fullReplication = false;
            }
            else {
                // not connected to network
                // if callback supplied call it 
                cb && cb();
            }
            //this.sharedService.temp = [...temp];
        };
        this.callback = function (err) {
            _this.log.info('Error returned is :' + err);
        };
        this.refreshConflicts = function () {
            _this.sync(_this.callback, _this.lastFilter);
        };
        this.driverId = this.pdaParams.getDriverId();
        // LT - don't work with our current loopback version - use observe ?  Maybe need filter (and callback?)
        this.LocalJob.on('before save', function (ctx, next) {
            next();
        });
        // sync local changes if connected
        this.LocalJob.on('after save', function (ctx, next) {
            next();
            this.sync();
        });
        this.LocalJob.on('after delete', function (ctx, next) {
            next();
            this.sync();
        });
        this.conMonService.isConnected.subscribe(function (res) {
            _this.sharedService.isOnline = res;
        });
    }
    JobReplicationServiceProvider.prototype.sleep = function (milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 10000000000; i++) {
            if ((new Date().getTime() - start) > milliseconds) {
                break;
            }
        }
    };
    // LT - 22/12/2015 - added per Strongloop support to remove now
    // obsolete job-change and checkpoint records
    // TODO - maybe extend to do all?  Using async?
    JobReplicationServiceProvider.prototype.deleteJobChangeData = function (callback) {
        var Model = this.models.LocalJob;
        var Change = Model.getChangeModel();
        var Checkpoint = Change.getCheckpointModel();
        var changeData;
        Change.deleteAll({ rev: null }, function (err, info) {
            if (err)
                return this.log.error('Cannot delete old changes:', err);
            this.log.info('Deleted %s old changes.', info.count);
            changeData.changes = info;
            Checkpoint.current(function (err, cp) {
                if (err)
                    return this.log.error('Cannot obtain current checkpoint:', err);
                this.log.info('Current checkpoint:', cp);
                Checkpoint.deleteAll({ seq: { lt: cp } }, function (err, info) {
                    if (err)
                        return this.log.error('Cannot delete old checkpoints:', err);
                    this.log.info('Deleted %s old checkpoints', info.count);
                    changeData.checkpoints = info;
                    // The MongoDB connection pool is blocking exit,
                    // we need to exit explicitely
                    //process.exit(0);
                    callback && callback(err, changeData);
                });
            });
        });
    };
    // Copy of above but for JSEA
    // TODO - this should be refactored to avoid all of this duplicate code
    JobReplicationServiceProvider.prototype.deleteJseaChangeData = function (callback) {
        var Model = this.models.LocalJseaDriverAnswers;
        var Change = Model.getChangeModel();
        var Checkpoint = Change.getCheckpointModel();
        var changeData;
        Change.deleteAll({ rev: null }, function (err, info) {
            if (err)
                return this.log.error('Cannot delete old changes:', err);
            this.log.info('Deleted %s old changes.', info.count);
            changeData.changes = info;
            Checkpoint.current(function (err, cp) {
                if (err)
                    return this.log.error('Cannot obtain current checkpoint:', err);
                this.log.info('Current checkpoint:', cp);
                Checkpoint.deleteAll({ seq: { lt: cp } }, function (err, info) {
                    if (err)
                        return this.log.error('Cannot delete old checkpoints:', err);
                    this.log.info('Deleted %s old checkpoints', info.count);
                    changeData.checkpoints = info;
                    // The MongoDB connection pool is blocking exit,
                    // we need to exit explicitely
                    //process.exit(0);
                    callback && callback(err, changeData);
                });
            });
        });
    };
    JobReplicationServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__connectivity_monitor_connectivity_monitor__["a" /* ConnectivityMonitorProvider */], __WEBPACK_IMPORTED_MODULE_2__util_service_util_service__["a" /* UtilServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__log_service_log_service__["a" /* LogServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__shared_service_shared_service__["a" /* SharedServiceProvider */]])
    ], JobReplicationServiceProvider);
    return JobReplicationServiceProvider;
}());

//# sourceMappingURL=job-replication-service.js.map

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SharedServiceProvider = /** @class */ (function () {
    function SharedServiceProvider(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
        //Riyaz: Events are implemented using Subjects & BehaviorSubjects
        this.SITE_CONFIG_LOADED = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.SODSERVICE_IS_NEW_DAY = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.APP_ON_LINE = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](false);
        this.APP_OFF_LINE = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](false);
        this.commandToPDA = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.messageToDriver = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.pushNotificationReceived = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.jobMetaDataLoadedSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.tpmPdaCtlsLoadedSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.PAUSE = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.RESUME = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.DESTROY = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.NEWJOB = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.JOBUPDATE = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.CANCEL = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.imageSaved = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.imageRefresh = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.testing = false;
        this.isOnline = false;
        this.seqno = 0;
        this.tab = "";
        this.isAppinBackground = false;
        this.isDiagnosticsRunning = false;
        this.newMsgCount = 0;
        this.temp = [];
        this.multidel_phototaken = false;
        //Riyaz: Global variables are implemented using getter & setter methods
        //See https://ionicallyspeaking.com/2016/03/10/global-variables-in-ionic-2/
        this.props = new Map();
        this.setMyConfiguredForJsea(false);
        this.tabLoading = this.loadingCtrl.create({});
        //console.log('Hello SharedServiceProvider Provider');
    }
    SharedServiceProvider.prototype.setJobId = function (value) {
        this.props.set('jobid', value);
    };
    SharedServiceProvider.prototype.getJobId = function () {
        return this.props.get('jobid');
    };
    SharedServiceProvider.prototype.setJobMetaData = function (value) {
        //console.log("3.5 Jobmetadata in shared-service.ts set to==" + value);
        localStorage.setItem('jobMetadata', '');
        localStorage.setItem('jobMetadata', JSON.stringify(value));
        //alert("Jobmetadata set!!");
    };
    SharedServiceProvider.prototype.getJobMetaData = function () {
        return JSON.parse(localStorage.getItem('jobMetadata'));
    };
    SharedServiceProvider.prototype.setHistoryMetaData = function (value) {
        this.props.set('historyMetadata', value);
    };
    SharedServiceProvider.prototype.getHistoryMetadata = function () {
        return this.props.get('historyMetadata');
    };
    SharedServiceProvider.prototype.setBNewItem = function (value) {
        this.props.set('bNewItem', value);
    };
    SharedServiceProvider.prototype.getBNewItem = function () {
        return this.props.get('bNewItem');
    };
    SharedServiceProvider.prototype.setDesktopBrowserScrolling = function (value) {
        this.props.set('desktopBrowserScrolling', value);
    };
    SharedServiceProvider.prototype.getDesktopBrowserScrolling = function () {
        return this.props.get('desktopBrowserScrolling');
    };
    SharedServiceProvider.prototype.setSyncInProgress = function (value) {
        this.props.set('syncInProgress', value);
    };
    SharedServiceProvider.prototype.getSyncInProgress = function () {
        return this.props.get('syncInProgress');
    };
    SharedServiceProvider.prototype.setFirstTimeLoad = function (value) {
        this.props.set('firstTimeLoad', value);
    };
    SharedServiceProvider.prototype.getFirstTimeLoad = function () {
        return this.props.get('firstTimeLoad');
    };
    SharedServiceProvider.prototype.setMyConfiguredForJsea = function (value) {
        this.props.set('myConfiguredForJsea', value);
    };
    SharedServiceProvider.prototype.getMyConfiguredForJsea = function () {
        return this.props.get('myConfiguredForJsea');
    };
    SharedServiceProvider.prototype.setCancelNotif = function (value) {
        this.props.set('CancelNotif', value);
    };
    SharedServiceProvider.prototype.getCancelNotif = function () {
        return this.props.get('CancelNotif');
    };
    SharedServiceProvider.prototype.showSpinner = function () {
        var _this = this;
        this.tabLoading = this.loadingCtrl.create({
            cssClass: 'transparent'
        });
        this.tabLoading.present().then(function () {
            _this.tabLoading.dismiss();
        });
    };
    SharedServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */]])
    ], SharedServiceProvider);
    return SharedServiceProvider;
}());

//# sourceMappingURL=shared-service.js.map

/***/ }),

/***/ 220:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 220;

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseLoopBackApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__custom_SDKModels__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */









var CustomQueryEncoderHelper = /** @class */ (function () {
    function CustomQueryEncoderHelper() {
    }
    CustomQueryEncoderHelper.prototype.encodeKey = function (k) {
        return encodeURIComponent(k);
    };
    CustomQueryEncoderHelper.prototype.encodeValue = function (v) {
        return encodeURIComponent(v);
    };
    CustomQueryEncoderHelper.prototype.decodeKey = function (k) {
        return decodeURIComponent(k);
    };
    CustomQueryEncoderHelper.prototype.decodeValue = function (v) {
        return decodeURIComponent(v);
    };
    return CustomQueryEncoderHelper;
}());
/**
* @module BaseLoopBackApi
* @author Jonathan Casarrubias <@johncasarrubias> <github:jonathanCasarrubias>
* @author Nikolay Matiushenkov <https://github.com/mnvx>
* @license MIT
* @description
* Abstract class that will be implemented in every custom service automatically built
* by the sdk builder.
* It provides the core functionallity for every API call, either by HTTP Calls or by
* WebSockets.
**/
var BaseLoopBackApi = /** @class */ (function () {
    function BaseLoopBackApi(http, connection, models, auth, errorHandler) {
        this.http = http;
        this.connection = connection;
        this.models = models;
        this.auth = auth;
        this.errorHandler = errorHandler;
        this.model = this.models.get(this.getModelName());
    }
    /**
     * @method request
     * @param {string}  method      Request method (GET, POST, PUT)
     * @param {string}  url         Request url (my-host/my-url/:id)
     * @param {any}     routeParams Values of url parameters
     * @param {any}     urlParams   Parameters for building url (filter and other)
     * @param {any}     postBody    Request postBody
     * @return {Observable<any>}
     * @description
     * This is a core method, every HTTP Call will be done from here, every API Service will
     * extend this class and use this method to get RESTful communication.
     **/
    BaseLoopBackApi.prototype.request = function (method, url, routeParams, urlParams, postBody, pubsub, customHeaders) {
        var _this = this;
        if (routeParams === void 0) { routeParams = {}; }
        if (urlParams === void 0) { urlParams = {}; }
        if (postBody === void 0) { postBody = {}; }
        if (pubsub === void 0) { pubsub = false; }
        // Transpile route variables to the actual request Values
        Object.keys(routeParams).forEach(function (key) {
            url = url.replace(new RegExp(":" + key + "(\/|$)", "g"), routeParams[key] + "$1");
        });
        if (pubsub) {
            if (url.match(/fk/)) {
                var arr = url.split('/');
                arr.pop();
                url = arr.join('/');
            }
            var event_1 = ("[" + method + "]" + url).replace(/\?/, '');
            var subject_1 = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["Subject"]();
            this.connection.on(event_1, function (res) { return subject_1.next(res); });
            return subject_1.asObservable();
        }
        else {
            var httpParams_1 = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]({ encoder: new CustomQueryEncoderHelper() });
            // Headers to be sent
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
            headers = headers.append('Content-Type', 'application/json');
            // Authenticate request
            headers = this.authenticate(url, headers);
            // Body fix for built in remote methods using "data", "options" or "credentials
            // that are the actual body, Custom remote method properties are different and need
            // to be wrapped into a body object
            var body = void 0;
            var postBodyKeys = typeof postBody === 'object' ? Object.keys(postBody) : [];
            if (postBodyKeys.length === 1) {
                body = postBody[postBodyKeys.shift()];
            }
            else {
                body = postBody;
            }
            var queryString = '';
            // Separate filter object from url params and add to search query
            if (urlParams.filter) {
                if (__WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].isHeadersFilteringSet()) {
                    headers = headers.append('filter', JSON.stringify(urlParams.filter));
                }
                else {
                    queryString = "?filter=" + encodeURIComponent(JSON.stringify(urlParams.filter));
                }
                delete urlParams.filter;
            }
            // Separate where object from url params and add to search query
            if (urlParams.where) {
                if (__WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].isHeadersWhereSet()) {
                    /**
                    CODE BELOW WILL GENERATE THE FOLLOWING ISSUES:
                    - https://github.com/mean-expert-official/loopback-sdk-builder/issues/356
                    - https://github.com/mean-expert-official/loopback-sdk-builder/issues/328
                    **/
                    headers = headers.append('where', JSON.stringify(urlParams.where));
                }
                else {
                    queryString = "?where=" + encodeURIComponent(JSON.stringify(urlParams.where));
                }
                delete urlParams.where;
            }
            if (typeof customHeaders === 'function') {
                headers = customHeaders(headers);
            }
            /* enhancement/configure-where-headers
                  this.searchParams.setJSON(urlParams);
                  let request: Request = new Request(
                    new RequestOptions({
                      headers        : headers,
                      method         : method,
                      url            : `${url}${queryString}`,
                      search         : Object.keys(urlParams).length > 0 ? this.searchParams.getURLSearchParams() : null,
                      body           : body ? JSON.stringify(body) : undefined,
                      withCredentials: LoopBackConfig.getRequestOptionsCredentials()
                    })
                  );
            TODO Fix Merge Conflict */
            Object.keys(urlParams).forEach(function (paramKey) {
                var paramValue = urlParams[paramKey];
                paramValue = typeof paramValue === 'object' ? JSON.stringify(paramValue) : paramValue;
                httpParams_1 = httpParams_1.append(paramKey, paramValue);
            });
            var request = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpRequest */](method, "" + url + queryString, body, {
                headers: headers,
                params: httpParams_1,
                withCredentials: __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getRequestOptionsCredentials()
            });
            return this.http.request(request).pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["filter"])(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["f" /* HttpResponse */]; }), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (res) { return res.body; }), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["catchError"])(function (e) { return _this.errorHandler.handleError(e); }));
        }
    };
    /**
     * @method authenticate
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {string} url Server URL
     * @param {Headers} headers HTTP Headers
     * @return {void}
     * @description
     * This method will try to authenticate using either an access_token or basic http auth
     */
    BaseLoopBackApi.prototype.authenticate = function (url, headers) {
        if (this.auth.getAccessTokenId()) {
            headers = headers.append('Authorization', __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getAuthPrefix() + this.auth.getAccessTokenId());
        }
        return headers;
    };
    /**
     * @method create
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {T} data Generic data type
     * @return {Observable<T>}
     * @description
     * Generic create method
     */
    BaseLoopBackApi.prototype.create = function (data, customHeaders) {
        var _this = this;
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onCreate
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {T[]} data Generic data type array
     * @return {Observable<T[]>}
     * @description
     * Generic pubsub oncreate many method
     */
    BaseLoopBackApi.prototype.onCreate = function (data) {
        var _this = this;
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, undefined, { data: data }, true)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (datum) { return datum.map(function (data) { return _this.model.factory(data); }); }));
    };
    /**
     * @method createMany
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {T[]} data Generic data type array
     * @return {Observable<T[]>}
     * @description
     * Generic create many method
     */
    BaseLoopBackApi.prototype.createMany = function (data, customHeaders) {
        var _this = this;
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (datum) { return datum.map(function (data) { return _this.model.factory(data); }); }));
    };
    /**
     * @method onCreateMany
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {T[]} data Generic data type array
     * @return {Observable<T[]>}
     * @description
     * Generic create many method
     */
    BaseLoopBackApi.prototype.onCreateMany = function (data) {
        var _this = this;
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, undefined, { data: data }, true)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (datum) { return datum.map(function (data) { return _this.model.factory(data); }); }));
    };
    /**
     * @method findById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {any} data Generic data type
     * @return {Observable<T>}
     * @description
     * Generic findById method
     */
    BaseLoopBackApi.prototype.findById = function (id, filter, customHeaders) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        var _urlParams = {};
        if (filter)
            _urlParams.filter = filter;
        return this.request('GET', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, _urlParams, undefined, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method find
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T[+>}
     * @description
     * Generic find method
     */
    BaseLoopBackApi.prototype.find = function (filter, customHeaders) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        return this.request('GET', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, { filter: filter }, undefined, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (datum) { return datum.map(function (data) { return _this.model.factory(data); }); }));
    };
    /**
     * @method exists
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T[]>}
     * @description
     * Generic exists method
     */
    BaseLoopBackApi.prototype.exists = function (id, customHeaders) {
        return this.request('GET', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id/exists'
        ].join('/'), { id: id }, undefined, undefined, null, customHeaders);
    };
    /**
     * @method findOne
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic findOne method
     */
    BaseLoopBackApi.prototype.findOne = function (filter, customHeaders) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        return this.request('GET', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'findOne'
        ].join('/'), undefined, { filter: filter }, undefined, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method updateAll
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T[]>}
     * @description
     * Generic updateAll method
     */
    BaseLoopBackApi.prototype.updateAll = function (where, data, customHeaders) {
        if (where === void 0) { where = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'update'
        ].join('/'), undefined, _urlParams, { data: data }, null, customHeaders);
    };
    /**
     * @method onUpdateAll
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T[]>}
     * @description
     * Generic pubsub onUpdateAll method
     */
    BaseLoopBackApi.prototype.onUpdateAll = function (where, data) {
        if (where === void 0) { where = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'update'
        ].join('/'), undefined, _urlParams, { data: data }, true);
    };
    /**
     * @method deleteById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic deleteById method
     */
    BaseLoopBackApi.prototype.deleteById = function (id, customHeaders) {
        var _this = this;
        return this.request('DELETE', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, undefined, undefined, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onDeleteById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic pubsub onDeleteById method
     */
    BaseLoopBackApi.prototype.onDeleteById = function (id) {
        var _this = this;
        return this.request('DELETE', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, undefined, undefined, true)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method count
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<{ count: number }>}
     * @description
     * Generic count method
     */
    BaseLoopBackApi.prototype.count = function (where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('GET', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'count'
        ].join('/'), undefined, _urlParams, undefined, null, customHeaders);
    };
    /**
     * @method updateAttributes
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic updateAttributes method
     */
    BaseLoopBackApi.prototype.updateAttributes = function (id, data, customHeaders) {
        var _this = this;
        return this.request('PUT', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, undefined, { data: data }, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onUpdateAttributes
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic onUpdateAttributes method
     */
    BaseLoopBackApi.prototype.onUpdateAttributes = function (id, data) {
        var _this = this;
        return this.request('PUT', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, undefined, { data: data }, true)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method upsert
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic upsert method
     */
    BaseLoopBackApi.prototype.upsert = function (data, customHeaders) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('PUT', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onUpsert
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic pubsub onUpsert method
     */
    BaseLoopBackApi.prototype.onUpsert = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('PUT', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
        ].join('/'), undefined, undefined, { data: data }, true)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method upsertPatch
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic upsert method using patch http method
     */
    BaseLoopBackApi.prototype.upsertPatch = function (data, customHeaders) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('PATCH', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onUpsertPatch
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic pubsub onUpsertPatch method using patch http method
     */
    BaseLoopBackApi.prototype.onUpsertPatch = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('PATCH', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
        ].join('/'), undefined, undefined, { data: data }, true)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method upsertWithWhere
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic upsertWithWhere method
     */
    BaseLoopBackApi.prototype.upsertWithWhere = function (where, data, customHeaders) {
        var _this = this;
        if (where === void 0) { where = {}; }
        if (data === void 0) { data = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'upsertWithWhere'
        ].join('/'), undefined, _urlParams, { data: data }, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onUpsertWithWhere
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic pubsub onUpsertWithWhere method
     */
    BaseLoopBackApi.prototype.onUpsertWithWhere = function (where, data) {
        var _this = this;
        if (where === void 0) { where = {}; }
        if (data === void 0) { data = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'upsertWithWhere'
        ].join('/'), undefined, _urlParams, { data: data }, true)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method replaceOrCreate
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic replaceOrCreate method
     */
    BaseLoopBackApi.prototype.replaceOrCreate = function (data, customHeaders) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'replaceOrCreate'
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onReplaceOrCreate
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic onReplaceOrCreate method
     */
    BaseLoopBackApi.prototype.onReplaceOrCreate = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'replaceOrCreate'
        ].join('/'), undefined, undefined, { data: data }, true)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method replaceById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic replaceById method
     */
    BaseLoopBackApi.prototype.replaceById = function (id, data, customHeaders) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id', 'replace'
        ].join('/'), { id: id }, undefined, { data: data }, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onReplaceById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic onReplaceById method
     */
    BaseLoopBackApi.prototype.onReplaceById = function (id, data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id', 'replace'
        ].join('/'), { id: id }, undefined, { data: data }, true)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method createChangeStream
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<any>}
     * @description
     * Generic createChangeStream method
     */
    BaseLoopBackApi.prototype.createChangeStream = function () {
        var subject = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["Subject"]();
        if (typeof EventSource !== 'undefined') {
            var emit = function (msg) { return subject.next(JSON.parse(msg.data)); };
            var source = new EventSource([
                __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
                __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
                this.model.getModelDefinition().path,
                'change-stream'
            ].join('/'));
            source.addEventListener('data', emit);
            source.onerror = emit;
        }
        else {
            console.warn('SDK Builder: EventSource is not supported');
        }
        return subject.asObservable();
    };
    BaseLoopBackApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__custom_SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_5__custom_SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_2__error_service__["a" /* ErrorHandler */]])
    ], BaseLoopBackApi);
    return BaseLoopBackApi;
}());

//# sourceMappingURL=base.service.js.map

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/barcode/barcode.module": [
		833,
		14
	],
	"../pages/change/change.module": [
		834,
		13
	],
	"../pages/device/device.module": [
		835,
		2
	],
	"../pages/gps/gps.module": [
		836,
		1
	],
	"../pages/home/home.module": [
		837,
		0
	],
	"../pages/image-text/image-text.module": [
		838,
		12
	],
	"../pages/images/images.module": [
		839,
		11
	],
	"../pages/job-detail-notes/job-detail-notes.module": [
		840,
		10
	],
	"../pages/job-details/job-details.module": [
		841,
		4
	],
	"../pages/jsea/jsea.module": [
		842,
		9
	],
	"../pages/login/login.module": [
		843,
		8
	],
	"../pages/msgs/msgs.module": [
		844,
		7
	],
	"../pages/pda/pda.module": [
		845,
		6
	],
	"../pages/signature/signature.module": [
		846,
		3
	],
	"../pages/tabs/tabs.module": [
		847,
		5
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 264;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AccessToken */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SDKToken; });
/* tslint:disable */
var AccessToken = /** @class */ (function () {
    function AccessToken(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `AccessToken`.
     */
    AccessToken.getModelName = function () {
        return "AccessToken";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of AccessToken for dynamic purposes.
    **/
    AccessToken.factory = function (data) {
        return new AccessToken(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    AccessToken.getModelDefinition = function () {
        return {
            name: 'AccessToken',
            plural: 'AccessTokens',
            properties: {
                "id": {
                    name: 'id',
                    type: 'string'
                },
                "ttl": {
                    name: 'ttl',
                    type: 'number',
                    default: 1209600
                },
                "scopes": {
                    name: 'scopes',
                    type: '["string"]'
                },
                "created": {
                    name: 'created',
                    type: 'Date'
                },
                "userId": {
                    name: 'userId',
                    type: 'string'
                },
            },
            relations: {
                user: {
                    name: 'user',
                    type: 'User',
                    model: 'User'
                },
            }
        };
    };
    return AccessToken;
}());

var SDKToken = /** @class */ (function () {
    function SDKToken(data) {
        this.id = null;
        this.ttl = null;
        this.scopes = null;
        this.created = null;
        this.userId = null;
        this.user = null;
        this.rememberMe = null;
        Object.assign(this, data);
    }
    return SDKToken;
}());

//# sourceMappingURL=BaseModels.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobChange; });
/* tslint:disable */
var JobChange = /** @class */ (function () {
    function JobChange(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `JobChange`.
     */
    JobChange.getModelName = function () {
        return "JobChange";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of JobChange for dynamic purposes.
    **/
    JobChange.factory = function (data) {
        return new JobChange(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    JobChange.getModelDefinition = function () {
        return {
            name: 'JobChange',
            plural: 'JobChanges',
            path: 'JobChanges',
            idName: 'id',
            properties: {
                "id": {
                    name: 'id',
                    type: 'string'
                },
                "rev": {
                    name: 'rev',
                    type: 'string'
                },
                "prev": {
                    name: 'prev',
                    type: 'string'
                },
                "checkpoint": {
                    name: 'checkpoint',
                    type: 'number'
                },
                "modelName": {
                    name: 'modelName',
                    type: 'string'
                },
                "modelId": {
                    name: 'modelId',
                    type: 'string'
                },
            },
            relations: {}
        };
    };
    return JobChange;
}());

//# sourceMappingURL=JobChange.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TpmPdaController; });
/* tslint:disable */
var TpmPdaController = /** @class */ (function () {
    function TpmPdaController(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `TpmPdaController`.
     */
    TpmPdaController.getModelName = function () {
        return "TpmPdaController";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of TpmPdaController for dynamic purposes.
    **/
    TpmPdaController.factory = function (data) {
        return new TpmPdaController(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    TpmPdaController.getModelDefinition = function () {
        return {
            name: 'TpmPdaController',
            plural: 'TpmPdaControllers',
            path: 'TpmPdaControllers',
            idName: 'tpmpc_imei_id',
            properties: {
                "tpmpc_imei_id": {
                    name: 'tpmpc_imei_id',
                    type: 'string'
                },
                "tpmpc_phone_num": {
                    name: 'tpmpc_phone_num',
                    type: 'string'
                },
                "tpmpc_driver_id": {
                    name: 'tpmpc_driver_id',
                    type: 'number'
                },
                "tpmpc_driver_name": {
                    name: 'tpmpc_driver_name',
                    type: 'string'
                },
                "tpmpc_access_allowed": {
                    name: 'tpmpc_access_allowed',
                    type: 'string'
                },
                "tpmpc_access_registered": {
                    name: 'tpmpc_access_registered',
                    type: 'string'
                },
                "tpmpc_last_update_time": {
                    name: 'tpmpc_last_update_time',
                    type: 'Date'
                },
                "tpmpc_driver_home_lat": {
                    name: 'tpmpc_driver_home_lat',
                    type: 'number'
                },
                "tpmpc_driver_home_lng": {
                    name: 'tpmpc_driver_home_lng',
                    type: 'number'
                },
            },
            relations: {}
        };
    };
    return TpmPdaController;
}());

//# sourceMappingURL=TpmPdaController.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Application; });
/* tslint:disable */
var Application = /** @class */ (function () {
    function Application(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `Application`.
     */
    Application.getModelName = function () {
        return "Application";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of Application for dynamic purposes.
    **/
    Application.factory = function (data) {
        return new Application(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    Application.getModelDefinition = function () {
        return {
            name: 'Application',
            plural: 'Applications',
            path: 'Applications',
            idName: 'id',
            properties: {
                "id": {
                    name: 'id',
                    type: 'string'
                },
                "realm": {
                    name: 'realm',
                    type: 'string'
                },
                "name": {
                    name: 'name',
                    type: 'string'
                },
                "description": {
                    name: 'description',
                    type: 'string'
                },
                "icon": {
                    name: 'icon',
                    type: 'string'
                },
                "owner": {
                    name: 'owner',
                    type: 'string'
                },
                "collaborators": {
                    name: 'collaborators',
                    type: 'Array&lt;any&gt;'
                },
                "email": {
                    name: 'email',
                    type: 'string'
                },
                "emailVerified": {
                    name: 'emailVerified',
                    type: 'boolean'
                },
                "url": {
                    name: 'url',
                    type: 'string'
                },
                "callbackUrls": {
                    name: 'callbackUrls',
                    type: 'Array&lt;any&gt;'
                },
                "permissions": {
                    name: 'permissions',
                    type: 'Array&lt;any&gt;'
                },
                "clientKey": {
                    name: 'clientKey',
                    type: 'string'
                },
                "javaScriptKey": {
                    name: 'javaScriptKey',
                    type: 'string'
                },
                "restApiKey": {
                    name: 'restApiKey',
                    type: 'string'
                },
                "windowsKey": {
                    name: 'windowsKey',
                    type: 'string'
                },
                "masterKey": {
                    name: 'masterKey',
                    type: 'string'
                },
                "pushSettings": {
                    name: 'pushSettings',
                    type: 'any'
                },
                "authenticationEnabled": {
                    name: 'authenticationEnabled',
                    type: 'boolean',
                    default: true
                },
                "anonymousAllowed": {
                    name: 'anonymousAllowed',
                    type: 'boolean',
                    default: true
                },
                "authenticationSchemes": {
                    name: 'authenticationSchemes',
                    type: 'Array&lt;any&gt;'
                },
                "status": {
                    name: 'status',
                    type: 'string',
                    default: 'sandbox'
                },
                "created": {
                    name: 'created',
                    type: 'Date'
                },
                "modified": {
                    name: 'modified',
                    type: 'Date'
                },
            },
            relations: {}
        };
    };
    return Application;
}());

//# sourceMappingURL=Application.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Notification; });
/* tslint:disable */
var Notification = /** @class */ (function () {
    function Notification(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `Notification`.
     */
    Notification.getModelName = function () {
        return "Notification";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of Notification for dynamic purposes.
    **/
    Notification.factory = function (data) {
        return new Notification(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    Notification.getModelDefinition = function () {
        return {
            name: 'Notification',
            plural: 'Notifications',
            path: 'Notifications',
            idName: 'id',
            properties: {
                "alert": {
                    name: 'alert',
                    type: 'any'
                },
                "badge": {
                    name: 'badge',
                    type: 'number'
                },
                "category": {
                    name: 'category',
                    type: 'string'
                },
                "collapseKey": {
                    name: 'collapseKey',
                    type: 'string'
                },
                "contentAvailable": {
                    name: 'contentAvailable',
                    type: 'boolean'
                },
                "created": {
                    name: 'created',
                    type: 'Date'
                },
                "delayWhileIdle": {
                    name: 'delayWhileIdle',
                    type: 'boolean'
                },
                "deviceToken": {
                    name: 'deviceToken',
                    type: 'string'
                },
                "deviceType": {
                    name: 'deviceType',
                    type: 'string'
                },
                "expirationInterval": {
                    name: 'expirationInterval',
                    type: 'number'
                },
                "expirationTime": {
                    name: 'expirationTime',
                    type: 'Date'
                },
                "modified": {
                    name: 'modified',
                    type: 'Date'
                },
                "scheduledTime": {
                    name: 'scheduledTime',
                    type: 'Date'
                },
                "sound": {
                    name: 'sound',
                    type: 'string'
                },
                "status": {
                    name: 'status',
                    type: 'string'
                },
                "urlArgs": {
                    name: 'urlArgs',
                    type: 'Array&lt;any&gt;'
                },
                "id": {
                    name: 'id',
                    type: 'any'
                },
            },
            relations: {}
        };
    };
    return Notification;
}());

//# sourceMappingURL=Notification.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Push; });
/* tslint:disable */
var Push = /** @class */ (function () {
    function Push(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `Push`.
     */
    Push.getModelName = function () {
        return "Push";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of Push for dynamic purposes.
    **/
    Push.factory = function (data) {
        return new Push(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    Push.getModelDefinition = function () {
        return {
            name: 'Push',
            plural: 'Push',
            path: 'Push',
            idName: 'id',
            properties: {
                "id": {
                    name: 'id',
                    type: 'number'
                },
            },
            relations: {}
        };
    };
    return Push;
}());

//# sourceMappingURL=Push.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mobile_event; });
/* tslint:disable */
var Mobile_event = /** @class */ (function () {
    function Mobile_event(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `Mobile_event`.
     */
    Mobile_event.getModelName = function () {
        return "Mobile_event";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of Mobile_event for dynamic purposes.
    **/
    Mobile_event.factory = function (data) {
        return new Mobile_event(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    Mobile_event.getModelDefinition = function () {
        return {
            name: 'Mobile_event',
            plural: 'mobile_event',
            path: 'mobile_event',
            idName: 'id',
            properties: {
                "id": {
                    name: 'id',
                    type: 'any'
                },
            },
            relations: {}
        };
    };
    return Mobile_event;
}());

//# sourceMappingURL=Mobile_event.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteConfig; });
/* tslint:disable */
var SiteConfig = /** @class */ (function () {
    function SiteConfig(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `SiteConfig`.
     */
    SiteConfig.getModelName = function () {
        return "SiteConfig";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of SiteConfig for dynamic purposes.
    **/
    SiteConfig.factory = function (data) {
        return new SiteConfig(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    SiteConfig.getModelDefinition = function () {
        return {
            name: 'SiteConfig',
            plural: 'SiteConfigs',
            path: 'SiteConfigs',
            idName: 'confKey',
            properties: {
                "confKey": {
                    name: 'confKey',
                    type: 'string'
                },
                "confActive": {
                    name: 'confActive',
                    type: 'boolean'
                },
                "confValue": {
                    name: 'confValue',
                    type: 'string'
                },
                "confDesc": {
                    name: 'confDesc',
                    type: 'string'
                },
            },
            relations: {}
        };
    };
    return SiteConfig;
}());

//# sourceMappingURL=SiteConfig.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DespatchToDriverMessages; });
/* tslint:disable */
var DespatchToDriverMessages = /** @class */ (function () {
    function DespatchToDriverMessages(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `DespatchToDriverMessages`.
     */
    DespatchToDriverMessages.getModelName = function () {
        return "DespatchToDriverMessages";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of DespatchToDriverMessages for dynamic purposes.
    **/
    DespatchToDriverMessages.factory = function (data) {
        return new DespatchToDriverMessages(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    DespatchToDriverMessages.getModelDefinition = function () {
        return {
            name: 'DespatchToDriverMessages',
            plural: 'DespatchToDriverMessages',
            path: 'DespatchToDriverMessages',
            idName: 'drvmSeqid',
            properties: {
                "drvmSeqid": {
                    name: 'drvmSeqid',
                    type: 'number'
                },
                "drvmDriverId": {
                    name: 'drvmDriverId',
                    type: 'number'
                },
                "drvmDate": {
                    name: 'drvmDate',
                    type: 'Date'
                },
                "drvmTimestamp": {
                    name: 'drvmTimestamp',
                    type: 'Date'
                },
                "drvmMessage": {
                    name: 'drvmMessage',
                    type: 'string'
                },
                "drvmSender": {
                    name: 'drvmSender',
                    type: 'string'
                },
                "drvmRecipient": {
                    name: 'drvmRecipient',
                    type: 'string'
                },
                "drvmSpare": {
                    name: 'drvmSpare',
                    type: 'string'
                },
            },
            relations: {}
        };
    };
    return DespatchToDriverMessages;
}());

//# sourceMappingURL=DespatchToDriverMessages.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JseaDriverQuestions; });
/* tslint:disable */
var JseaDriverQuestions = /** @class */ (function () {
    function JseaDriverQuestions(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `JseaDriverQuestions`.
     */
    JseaDriverQuestions.getModelName = function () {
        return "JseaDriverQuestions";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of JseaDriverQuestions for dynamic purposes.
    **/
    JseaDriverQuestions.factory = function (data) {
        return new JseaDriverQuestions(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    JseaDriverQuestions.getModelDefinition = function () {
        return {
            name: 'JseaDriverQuestions',
            plural: 'JseaDriverQuestions',
            path: 'JseaDriverQuestions',
            idName: 'jdqType',
            properties: {
                "jdqQuestionText": {
                    name: 'jdqQuestionText',
                    type: 'string'
                },
                "jdqType": {
                    name: 'jdqType',
                    type: 'string'
                },
                "jdqCbox": {
                    name: 'jdqCbox',
                    type: 'boolean'
                },
                "jdqOrder": {
                    name: 'jdqOrder',
                    type: 'number'
                },
                "jdqNewForm": {
                    name: 'jdqNewForm',
                    type: 'boolean'
                },
                "jdqNewFormType": {
                    name: 'jdqNewFormType',
                    type: 'string'
                },
            },
            relations: {}
        };
    };
    return JseaDriverQuestions;
}());

//# sourceMappingURL=JseaDriverQuestions.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JseaDriverAnswersChange; });
/* tslint:disable */
var JseaDriverAnswersChange = /** @class */ (function () {
    function JseaDriverAnswersChange(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `JseaDriverAnswersChange`.
     */
    JseaDriverAnswersChange.getModelName = function () {
        return "JseaDriverAnswersChange";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of JseaDriverAnswersChange for dynamic purposes.
    **/
    JseaDriverAnswersChange.factory = function (data) {
        return new JseaDriverAnswersChange(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    JseaDriverAnswersChange.getModelDefinition = function () {
        return {
            name: 'JseaDriverAnswersChange',
            plural: 'JseaDriverAnswersChanges',
            path: 'JseaDriverAnswersChanges',
            idName: 'id',
            properties: {
                "id": {
                    name: 'id',
                    type: 'string'
                },
                "rev": {
                    name: 'rev',
                    type: 'string'
                },
                "prev": {
                    name: 'prev',
                    type: 'string'
                },
                "checkpoint": {
                    name: 'checkpoint',
                    type: 'number'
                },
                "modelName": {
                    name: 'modelName',
                    type: 'string'
                },
                "modelId": {
                    name: 'modelId',
                    type: 'string'
                },
            },
            relations: {}
        };
    };
    return JseaDriverAnswersChange;
}());

//# sourceMappingURL=JseaDriverAnswersChange.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Photocontainer; });
/* tslint:disable */
var Photocontainer = /** @class */ (function () {
    function Photocontainer(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `Photocontainer`.
     */
    Photocontainer.getModelName = function () {
        return "Photocontainer";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of Photocontainer for dynamic purposes.
    **/
    Photocontainer.factory = function (data) {
        return new Photocontainer(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    Photocontainer.getModelDefinition = function () {
        return {
            name: 'Photocontainer',
            plural: 'Photocontainers',
            path: 'Photocontainers',
            idName: 'id',
            properties: {
                "id": {
                    name: 'id',
                    type: 'number'
                },
            },
            relations: {}
        };
    };
    return Photocontainer;
}());

//# sourceMappingURL=Photocontainer.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Image; });
/* tslint:disable */
var Image = /** @class */ (function () {
    function Image(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `Image`.
     */
    Image.getModelName = function () {
        return "Image";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of Image for dynamic purposes.
    **/
    Image.factory = function (data) {
        return new Image(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    Image.getModelDefinition = function () {
        return {
            name: 'Image',
            plural: 'Images',
            path: 'Images',
            idName: 'id',
            properties: {
                "name": {
                    name: 'name',
                    type: 'string'
                },
                "type": {
                    name: 'type',
                    type: 'string'
                },
                "url": {
                    name: 'url',
                    type: 'string'
                },
                "id": {
                    name: 'id',
                    type: 'any'
                },
            },
            relations: {}
        };
    };
    return Image;
}());

//# sourceMappingURL=Image.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarcodeHistChange; });
/* tslint:disable */
var BarcodeHistChange = /** @class */ (function () {
    function BarcodeHistChange(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `BarcodeHistChange`.
     */
    BarcodeHistChange.getModelName = function () {
        return "BarcodeHistChange";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of BarcodeHistChange for dynamic purposes.
    **/
    BarcodeHistChange.factory = function (data) {
        return new BarcodeHistChange(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    BarcodeHistChange.getModelDefinition = function () {
        return {
            name: 'BarcodeHistChange',
            plural: 'BarcodeHistChanges',
            path: 'BarcodeHistChanges',
            idName: 'id',
            properties: {
                "id": {
                    name: 'id',
                    type: 'string'
                },
                "rev": {
                    name: 'rev',
                    type: 'string'
                },
                "prev": {
                    name: 'prev',
                    type: 'string'
                },
                "checkpoint": {
                    name: 'checkpoint',
                    type: 'number'
                },
                "modelName": {
                    name: 'modelName',
                    type: 'string'
                },
                "modelId": {
                    name: 'modelId',
                    type: 'string'
                },
            },
            relations: {}
        };
    };
    return BarcodeHistChange;
}());

//# sourceMappingURL=BarcodeHistChange.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CookieBrowser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */

/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module CookieBrowser
* @license MIT
* @description
* This module handle cookies, it will be provided using DI Swapping according the
* SDK Socket Driver Available currently supporting Angular 2 for web and NativeScript 2.
**/
var CookieBrowser = /** @class */ (function () {
    function CookieBrowser() {
        /**
         * @type {CookieInterface}
         **/
        this.cookies = {};
    }
    /**
     * @method get
     * @param {string} key Cookie key name
     * @return {any}
     * @description
     * The getter will return any type of data persisted in cookies.
     **/
    CookieBrowser.prototype.get = function (key) {
        if (!this.cookies[key]) {
            var cookie = window.document
                .cookie.split('; ')
                .filter(function (item) { return item.split('=')[0] === key; }).pop();
            if (!cookie) {
                return null;
            }
            this.cookies[key] = this.parse(cookie.split('=').slice(1).join('='));
        }
        return this.cookies[key];
    };
    /**
     * @method set
     * @param {string} key Cookie key name
     * @param {any} value Any value
     * @param {Date=} expires The date of expiration (Optional)
     * @return {void}
     * @description
     * The setter will return any type of data persisted in cookies.
     **/
    CookieBrowser.prototype.set = function (key, value, expires) {
        this.cookies[key] = value;
        var cookie = key + "=" + encodeURI(value) + "; path=/" + (expires ? "; expires=" + expires.toUTCString() : '');
        window.document.cookie = cookie;
    };
    /**
     * @method remove
     * @param {string} key Cookie key name
     * @return {void}
     * @description
     * This method will remove a cookie from the client.
     **/
    CookieBrowser.prototype.remove = function (key) {
        document.cookie = key + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        delete this.cookies[key];
    };
    /**
     * @method parse
     * @param {any} value Input data expected to be JSON
     * @return {void}
     * @description
     * This method will parse the string as JSON if possible, otherwise will
     * return the value itself.
     **/
    CookieBrowser.prototype.parse = function (value) {
        try {
            return JSON.parse(decodeURI(value));
        }
        catch (e) {
            return value;
        }
    };
    CookieBrowser = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], CookieBrowser);
    return CookieBrowser;
}());

//# sourceMappingURL=cookie.browser.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageBrowser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */

/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module StorageBrowser
* @license MIT
* @description
* This module handle localStorage, it will be provided using DI Swapping according the
* SDK Socket Driver Available currently supporting Angular 2 for web and NativeScript 2.
**/
var StorageBrowser = /** @class */ (function () {
    function StorageBrowser() {
    }
    /**
     * @method get
     * @param {string} key Storage key name
     * @return {any}
     * @description
     * The getter will return any type of data persisted in localStorage.
     **/
    StorageBrowser.prototype.get = function (key) {
        var data = localStorage.getItem(key);
        return this.parse(data);
    };
    /**
     * @method set
     * @param {string} key Storage key name
     * @param {any} value Any value
     * @return {void}
     * @description
     * The setter will return any type of data persisted in localStorage.
     **/
    StorageBrowser.prototype.set = function (key, value, expires) {
        localStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : value);
    };
    /**
     * @method remove
     * @param {string} key Storage key name
     * @return {void}
     * @description
     * This method will remove a localStorage item from the client.
     **/
    StorageBrowser.prototype.remove = function (key) {
        if (localStorage[key]) {
            localStorage.removeItem(key);
        }
        else {
            console.log('Trying to remove unexisting key: ', key);
        }
    };
    /**
     * @method parse
     * @param {any} value Input data expected to be JSON
     * @return {void}
     * @description
     * This method will parse the string as JSON if possible, otherwise will
     * return the value itself.
     **/
    StorageBrowser.prototype.parse = function (value) {
        try {
            return JSON.parse(value);
        }
        catch (e) {
            return value;
        }
    };
    StorageBrowser = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], StorageBrowser);
    return StorageBrowser;
}());

//# sourceMappingURL=storage.browser.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketDriver; });
/* tslint:disable */
/**
 * @module SocketDriver
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * The SocketDriver class is used for dependency injection swapping.
 * It will be provided using factory method from different sources.
 **/
var SocketDriver = /** @class */ (function () {
    function SocketDriver() {
    }
    SocketDriver.prototype.connect = function (url, options) { };
    return SocketDriver;
}());

//# sourceMappingURL=socket.driver.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteconfigServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_sdk_services__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_shared_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pdaparams_service_pdaparams_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__log_service_log_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_sdk__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__customerconn_service_customerconn_service__ = __webpack_require__(176);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*
  Generated class for the SiteconfigServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var SiteconfigServiceProvider = /** @class */ (function () {
    function SiteconfigServiceProvider(pdaParams, siteConfigApi, sharedService, logger, customerConn) {
        this.pdaParams = pdaParams;
        this.siteConfigApi = siteConfigApi;
        this.sharedService = sharedService;
        this.logger = logger;
        this.customerConn = customerConn;
        this.keylist = [
            'BARCODE_SUPP_BCODEISJOBNUM',
            'PDA_BARCODES',
            'PDA_JSEA_ON',
            'PDA_JSEA_TYPE',
            'PDA_PICKUP_ALL',
            'PDA_DEPART_ALL',
            'PDA_DELIVER_ALL',
            'PDA_FULL_STATUSES',
            'PDA_IMAGES',
            'PDA_IMAGES_URL',
            'PDA_NOTES',
            'PDA_DEL_DAYSBACK',
            'PDA_SORT_COL1',
            'PDA_DISPLAY_DATE',
            'PDA_SIGNATURE_PUP',
            'PDA_SIGNATURE_DPUP',
            'PDA_DISCRETE_DEL_SIGNAT',
            'PDA_MULTIDEL_NOTE_TEXT',
            'PDA_DISPLAY_FROM',
            'PDA_DISPLAY_TO',
            'PDA_ROW1_FONT_SIZE',
            'PDA_MONITOR_ONLINE',
            'PDA_CLIENT_CONFLICTS',
            'PDA_MANDATORY_PHOTOS',
            'PDA_IMAGE_NOTES',
            'PDA_NOTIFY_REPEAT',
            'PDA_NOTIFY_INTERVAL',
            'PDA_SENDER_ID',
            'PDA_REQ_NAVIGATION',
            'PDA_SHOW_CLIENT_NAME',
            'PDA_JSEA_BOTH_YN',
            'PDA_MANDATORY_NOTES',
            'PDA_ATTACHED_DOCS',
            'PDA_JOB_ROUTING',
            'PDA_ROUTE_MAP',
            'PDA_DISABLE_BACKGROUND_SYNC',
            'PDA_DISABLE_DEVICE_DIAGNOSTICS',
            'PDA_DISABLE_DIAGNOSTICS_BGPS_ON_LOGOFF'
        ];
        this.siteconfigs = null;
        this.logParams = { site: this.pdaParams.getSiteId(), driver: this.pdaParams.getDriverId(), fn: 'SiteconfigServiceProvider' };
        this.log = this.logger.getInstance(this.logParams);
        console.log('Hello SiteconfigServiceProvider Provider');
    }
    SiteconfigServiceProvider.prototype.loadAllConfigsFromServer = function () {
        var _this = this;
        var filter = {
            "where": {
                and: [{ "confActive": true }, { "confKey": { "inq": this.keylist } }]
            }
        };
        this.userId = localStorage.getItem('userId');
        this.connDetails = this.customerConn.getConnectionDetails(this.userId.toLowerCase());
        __WEBPACK_IMPORTED_MODULE_6__shared_sdk__["b" /* LoopBackConfig */].setBaseURL((this.connDetails.url));
        __WEBPACK_IMPORTED_MODULE_6__shared_sdk__["b" /* LoopBackConfig */].setApiVersion('api');
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].create(function (observer) {
            _this.siteConfigApi.find(filter).subscribe(function (siteconfigs) {
                _this.log.info("Retrieved SiteConfigs from DB:" + JSON.stringify(siteconfigs));
                _this.siteconfigs = siteconfigs;
                var len = _this.siteconfigs.length;
                if (len == 0) {
                    _this.log.error("No site config values found");
                    //console.log("No site config values found");
                }
                else {
                    for (var i = 0; i < len; i++) {
                        // store in local storage for future use
                        // TODO - store in individual keys or as a site_config key for an object with all keys?
                        localStorage.setItem(_this.siteconfigs[i].confKey, _this.siteconfigs[i].confValue);
                    }
                    try {
                        localStorage.setItem('SITE_CONFIG_LOADED', 'true');
                    }
                    catch (domException) {
                        _this.log.error("Unable to store items in local storage::" + JSON.stringify(domException));
                    }
                    _this.sharedService.SITE_CONFIG_LOADED.next(true);
                }
                observer.next("success");
            }, function (error) {
                _this.log.error(error);
                __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].throw(error);
            });
        });
    }; //End of  getAllConfigsFromServer() 
    SiteconfigServiceProvider.prototype.deleteLocalConfigs = function () {
        // Remove all config key/value pairs from local storage
        // NOTE this should in general ALWAYS be followed by a getAllConfigsFromServer() call to repopulate
        var len = this.keylist.length;
        for (var i = 0; i < len; i++) {
            if (localStorage.getItem(this.keylist[i]) !== null) {
                localStorage.removeItem(this.keylist[i]);
            }
        }
        this.sharedService.SITE_CONFIG_LOADED.next(false);
    };
    // returns a promise as we are using it in app.module.js to resolve routes
    SiteconfigServiceProvider.prototype.getSiteConfigYN = function (key) {
        var retval = localStorage.getItem(key);
        if (!retval) {
            retval = 'N';
        }
        return retval;
    };
    SiteconfigServiceProvider.prototype.getSiteConfig = function (key) {
        var retval = localStorage.getItem(key);
        if (!retval) {
            retval = '';
        }
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].of(retval);
    };
    SiteconfigServiceProvider.prototype.getSiteConfigInt = function (key) {
        var retval = +localStorage.getItem(key); // the "+" causes a cast to an integer
        if (!retval) {
            retval = 0;
        }
        return retval;
    };
    // no promise on this one so it can be used in inline synchronous code
    SiteconfigServiceProvider.prototype.getSiteConfigValue = function (key) {
        var retval = localStorage.getItem(key);
        if (!retval) {
            retval = '';
        }
        return (retval);
    };
    SiteconfigServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__shared_sdk_services__["d" /* SiteConfigApi */],
            __WEBPACK_IMPORTED_MODULE_3__shared_service_shared_service__["a" /* SharedServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__log_service_log_service__["a" /* LogServiceProvider */], __WEBPACK_IMPORTED_MODULE_7__customerconn_service_customerconn_service__["a" /* CustomerconnServiceProvider */]])
    ], SiteconfigServiceProvider);
    return SiteconfigServiceProvider;
}());

//# sourceMappingURL=siteconfig-service.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealTime; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__io_service__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_FireLoop__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sockets_socket_connections__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__custom_SDKModels__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@johncasarrubias>
* @module RealTime
* @license MIT
* @description
* This module is a real-time interface for using socket connections, its main purpose
* is to make sure that when there is a valid connection, it will create instances
* of the different real-time functionalities like FireLoop, PubSub and IO.
**/
var RealTime = /** @class */ (function () {
    /**
    * @method constructor
    * @param {SocketConnection} connection WebSocket connection service
    * @param {SDKModels} models Model provider service
    * @param {LoopBackAuth} auth LoopBack authentication service
    * @description
    * It will intialize the shared on ready communication channel.
    **/
    function RealTime(connection, models, auth) {
        this.connection = connection;
        this.models = models;
        this.auth = auth;
        this.connecting = false;
        this.onReadySubject = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["Subject"]();
        this.sharedOnReady = this.onReadySubject.asObservable().pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["share"])());
        this.sharedOnReady.subscribe();
    }
    /**
    * @method onDisconnect
    * @return {Observable<any>}
    * @description
    * Will trigger when Real-Time Service is disconnected from server.
    **/
    RealTime.prototype.onDisconnect = function () {
        return this.connection.sharedObservables.sharedOnDisconnect;
    };
    /**
    * @method onAuthenticated
    * @return {Observable<any>}
    * @description
    * Will trigger when Real-Time Service is authenticated with the server.
    **/
    RealTime.prototype.onAuthenticated = function () {
        return this.connection.sharedObservables.sharedOnAuthenticated;
    };
    /**
    * @method onUnAuthorized
    * @return {Observable<any>}
    * @description
    * Will trigger when Real-Time Service is not authorized to connect with the server.
    **/
    RealTime.prototype.onUnAuthorized = function () {
        return this.connection.sharedObservables.sharedOnUnAuthorized;
    };
    /**
    * @method onReady
    * @return {Observable<any>}
    * @description
    * Will trigger when Real-Time Service is Ready for broadcasting.
    * and will register connection flow events to notify subscribers.
    **/
    RealTime.prototype.onReady = function () {
        var _this = this;
        // If there is a valid connection, then we just send back to the EventLoop
        // Or next will be executed before the actual subscription.
        if (this.connection.isConnected()) {
            var to_1 = setTimeout(function () {
                _this.onReadySubject.next('sharedConnection');
                clearTimeout(to_1);
            });
            // Else if there is a current attempt of connection we wait for the prior
            // process that started the connection flow.
        }
        else if (this.connecting) {
            var ti_1 = setInterval(function () {
                if (_this.connection.isConnected()) {
                    _this.onReadySubject.next('sharedConnection');
                    clearInterval(ti_1);
                }
            }, 500);
            // If there is not valid connection or attempt, then we start the connection flow
            // and make sure we notify all the onReady subscribers when done.
            // Also it will listen for desconnections so we unsubscribe and avoid both:
            // Memory leaks and duplicated triggered events.
        }
        else {
            this.connecting = true;
            this.connection.connect(this.auth.getToken());
            this.IO = new __WEBPACK_IMPORTED_MODULE_1__io_service__["a" /* IO */](this.connection);
            this.FireLoop = new __WEBPACK_IMPORTED_MODULE_3__models_FireLoop__["a" /* FireLoop */](this.connection, this.models);
            // Fire event for those subscribed 
            var s1_1 = this.connection.sharedObservables.sharedOnConnect.subscribe(function () {
                console.log('Real-Time connection has been established');
                _this.connecting = false;
                _this.onReadySubject.next('connected');
                var s2 = _this.connection.sharedObservables.sharedOnDisconnect.subscribe(function () {
                    s1_1.unsubscribe();
                    s2.unsubscribe();
                });
            });
        }
        return this.sharedOnReady;
    };
    RealTime = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__custom_SDKModels__["a" /* SDKModels */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* LoopBackAuth */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_5__custom_SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* LoopBackAuth */]])
    ], RealTime);
    return RealTime;
}());

//# sourceMappingURL=real.time.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Job__ = __webpack_require__(153);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__JobChange__ = __webpack_require__(270);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TpmPdaController__ = __webpack_require__(271);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__GpsHistory__ = __webpack_require__(97);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Application__ = __webpack_require__(272);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Installation__ = __webpack_require__(154);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Notification__ = __webpack_require__(273);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Push__ = __webpack_require__(274);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Mobile_event__ = __webpack_require__(275);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__SiteConfig__ = __webpack_require__(276);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__DespatchToDriverMessages__ = __webpack_require__(277);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__JseaDriverQuestions__ = __webpack_require__(278);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__JseaDriverAnswers__ = __webpack_require__(155);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__JseaDriverAnswersChange__ = __webpack_require__(279);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Photocontainer__ = __webpack_require__(280);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Image__ = __webpack_require__(281);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__BarcodeHist__ = __webpack_require__(156);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__BarcodeHistChange__ = __webpack_require__(282);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__DeviceDiagnostics__ = __webpack_require__(157);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__BaseModels__ = __webpack_require__(269);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__FireLoopRef__ = __webpack_require__(546);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_20__FireLoopRef__["a"]; });
/* tslint:disable */





















//# sourceMappingURL=index.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_error_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_Job__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sockets_socket_connections__ = __webpack_require__(20);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */










/**
 * Api services for the `Job` model.
 *
 * **Details**
 *
 * Logged Jobs
 */
var JobApi = /** @class */ (function (_super) {
    __extends(JobApi, _super);
    function JobApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Job` object.)
     * </em>
     */
    JobApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Jobs";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id Job id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Job` object.)
     * </em>
     */
    JobApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Jobs/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Get a set of deltas and conflicts since the given checkpoint.
     *
     * @param {object} data Request data.
     *
     *  - `since` – `{number}` - Find deltas since this checkpoint
     *
     *  - `remoteChanges` – `{any}` - an array of change objects
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Job` object.)
     * </em>
     */
    JobApi.prototype.diff = function (since, remoteChanges, customHeaders) {
        if (since === void 0) { since = {}; }
        if (remoteChanges === void 0) { remoteChanges = {}; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Jobs/diff";
        var _routeParams = {};
        var _postBody = {
            remoteChanges: remoteChanges
        };
        var _urlParams = {};
        if (typeof since !== 'undefined' && since !== null)
            _urlParams.since = since;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Get the changes to a model since a given checkpoint.Provide a filter object to reduce the number of results returned.
     *
     * @param {number} since Only return changes since this checkpoint
     *
     * @param {object} filter Only include changes that match this filter
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Job` object.)
     * </em>
     */
    JobApi.prototype.changes = function (since, filter, customHeaders) {
        if (since === void 0) { since = {}; }
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Jobs/changes";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        if (typeof since !== 'undefined' && since !== null)
            _urlParams.since = since;
        if (typeof filter !== 'undefined' && filter !== null)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Create a checkpoint.
     *
     * @param {object} data Request data.
     *
     * This method does not accept any data. Supply an empty object.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Job` object.)
     * </em>
     */
    JobApi.prototype.checkpoint = function (customHeaders) {
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Jobs/checkpoint";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Get the current checkpoint.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Job` object.)
     * </em>
     */
    JobApi.prototype.currentCheckpoint = function (customHeaders) {
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Jobs/checkpoint";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Create an update list from a delta list.
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Job` object.)
     * </em>
     */
    JobApi.prototype.createUpdates = function (deltas, customHeaders) {
        if (deltas === void 0) { deltas = {}; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Jobs/create-updates";
        var _routeParams = {};
        var _postBody = {
            deltas: deltas
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Run multiple updates at once. Note: this is not atomic.
     *
     * @param {object} data Request data.
     *
     *  - `updates` – `{any}` -
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    JobApi.prototype.bulkUpdate = function (updates, customHeaders) {
        if (updates === void 0) { updates = {}; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Jobs/bulk-update";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        if (typeof updates !== 'undefined' && updates !== null)
            _urlParams.updates = updates;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Get the most recent change record for this instance.
     *
     * @param {any} id Model id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Job` object.)
     * </em>
     */
    JobApi.prototype.findLastChange = function (id, customHeaders) {
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Jobs/:id/changes/last";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result.pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (instances) {
            return instances.map(function (instance) { return new __WEBPACK_IMPORTED_MODULE_8__models_Job__["a" /* Job */](instance); });
        }));
    };
    /**
     * Update the properties of the most recent change record kept for this instance.
     *
     * @param {any} id Model id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of Change property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Job` object.)
     * </em>
     */
    JobApi.prototype.updateLastChange = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PUT";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Jobs/:id/changes/last";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Get the Metadata for this Model...
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * For things like auto-generated forms...
     */
    JobApi.prototype.metadata = function (customHeaders) {
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Jobs/metadata";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `Job`.
     */
    JobApi.prototype.getModelName = function () {
        return "Job";
    };
    JobApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_9__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_9__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */]])
    ], JobApi);
    return JobApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));

//# sourceMappingURL=Job.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobChangeApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_error_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__ = __webpack_require__(20);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `JobChange` model.
 */
var JobChangeApi = /** @class */ (function (_super) {
    __extends(JobChangeApi, _super);
    function JobChangeApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `JobChange` object.)
     * </em>
     */
    JobChangeApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/JobChanges";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id JobChange id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `JobChange` object.)
     * </em>
     */
    JobChangeApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/JobChanges/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `JobChange`.
     */
    JobChangeApi.prototype.getModelName = function () {
        return "JobChange";
    };
    JobChangeApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */]])
    ], JobChangeApi);
    return JobChangeApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));

//# sourceMappingURL=JobChange.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TpmPdaControllerApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_error_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__ = __webpack_require__(20);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `TpmPdaController` model.
 *
 * **Details**
 *
 * Controlling Pda Device Management
 */
var TpmPdaControllerApi = /** @class */ (function (_super) {
    __extends(TpmPdaControllerApi, _super);
    function TpmPdaControllerApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `TpmPdaController` object.)
     * </em>
     */
    TpmPdaControllerApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/TpmPdaControllers";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id TpmPdaController id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `TpmPdaController` object.)
     * </em>
     */
    TpmPdaControllerApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/TpmPdaControllers/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Sends a command to a PDA
     *
     * @param {object} data Request data.
     *
     *  - `driver` – `{number}` - driver/PDA number
     *
     *  - `command` – `{string}` - the command to send e.g. dumpLocalStorage
     *
     *  - `params` – `{object}` - optional parameter object
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    TpmPdaControllerApi.prototype.sendCommandToPDA = function (driver, command, params, customHeaders) {
        if (params === void 0) { params = {}; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/TpmPdaControllers/sendCommandToPDA/:driver";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        if (typeof driver !== 'undefined' && driver !== null)
            _urlParams.driver = driver;
        if (typeof command !== 'undefined' && command !== null)
            _urlParams.command = command;
        if (typeof params !== 'undefined' && params !== null)
            _urlParams.params = params;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Sends a message to a driver
     *
     * @param {object} data Request data.
     *
     *  - `driver` – `{number}` -
     *
     *  - `message` – `{string}` -
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    TpmPdaControllerApi.prototype.sendMessageToDriver = function (driver, message, customHeaders) {
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/TpmPdaControllers/sendMessageToDriver/:driver";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        if (typeof driver !== 'undefined' && driver !== null)
            _urlParams.driver = driver;
        if (typeof message !== 'undefined' && message !== null)
            _urlParams.message = message;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `TpmPdaController`.
     */
    TpmPdaControllerApi.prototype.getModelName = function () {
        return "TpmPdaController";
    };
    TpmPdaControllerApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */]])
    ], TpmPdaControllerApi);
    return TpmPdaControllerApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));

//# sourceMappingURL=TpmPdaController.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_error_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__ = __webpack_require__(20);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `Application` model.
 */
var ApplicationApi = /** @class */ (function (_super) {
    __extends(ApplicationApi, _super);
    function ApplicationApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Application` object.)
     * </em>
     */
    ApplicationApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/applications";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id application id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Application` object.)
     * </em>
     */
    ApplicationApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/applications/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `Application`.
     */
    ApplicationApi.prototype.getModelName = function () {
        return "Application";
    };
    ApplicationApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */]])
    ], ApplicationApi);
    return ApplicationApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));

//# sourceMappingURL=Application.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstallationApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_error_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_Installation__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sockets_socket_connections__ = __webpack_require__(20);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */










/**
 * Api services for the `Installation` model.
 */
var InstallationApi = /** @class */ (function (_super) {
    __extends(InstallationApi, _super);
    function InstallationApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Find installations by application id
     *
     * @param {string} deviceType Device type
     *
     * @param {string} appId Application id
     *
     * @param {string} appVersion Application version
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Installation` object.)
     * </em>
     */
    InstallationApi.prototype.findByApp = function (deviceType, appId, appVersion, customHeaders) {
        if (deviceType === void 0) { deviceType = {}; }
        if (appId === void 0) { appId = {}; }
        if (appVersion === void 0) { appVersion = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/installations/byApp";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        if (typeof deviceType !== 'undefined' && deviceType !== null)
            _urlParams.deviceType = deviceType;
        if (typeof appId !== 'undefined' && appId !== null)
            _urlParams.appId = appId;
        if (typeof appVersion !== 'undefined' && appVersion !== null)
            _urlParams.appVersion = appVersion;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result.pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (instance) { return new __WEBPACK_IMPORTED_MODULE_8__models_Installation__["a" /* Installation */](instance); }));
    };
    /**
     * Find installations by user id
     *
     * @param {string} deviceType Device type
     *
     * @param {string} userId User id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Installation` object.)
     * </em>
     */
    InstallationApi.prototype.findByUser = function (deviceType, userId, customHeaders) {
        if (deviceType === void 0) { deviceType = {}; }
        if (userId === void 0) { userId = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/installations/byUser";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        if (typeof deviceType !== 'undefined' && deviceType !== null)
            _urlParams.deviceType = deviceType;
        if (typeof userId !== 'undefined' && userId !== null)
            _urlParams.userId = userId;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result.pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (instance) { return new __WEBPACK_IMPORTED_MODULE_8__models_Installation__["a" /* Installation */](instance); }));
    };
    /**
     * Find installations by subscriptions
     *
     * @param {string} deviceType Device type
     *
     * @param {string} subscriptions Subscriptions
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Installation` object.)
     * </em>
     */
    InstallationApi.prototype.findBySubscriptions = function (deviceType, subscriptions, customHeaders) {
        if (deviceType === void 0) { deviceType = {}; }
        if (subscriptions === void 0) { subscriptions = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/installations/bySubscriptions";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        if (typeof deviceType !== 'undefined' && deviceType !== null)
            _urlParams.deviceType = deviceType;
        if (typeof subscriptions !== 'undefined' && subscriptions !== null)
            _urlParams.subscriptions = subscriptions;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result.pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (instance) { return new __WEBPACK_IMPORTED_MODULE_8__models_Installation__["a" /* Installation */](instance); }));
    };
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Installation` object.)
     * </em>
     */
    InstallationApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/installations";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id installation id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Installation` object.)
     * </em>
     */
    InstallationApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/installations/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `Installation`.
     */
    InstallationApi.prototype.getModelName = function () {
        return "Installation";
    };
    InstallationApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_9__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_9__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */]])
    ], InstallationApi);
    return InstallationApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));

//# sourceMappingURL=Installation.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_error_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__ = __webpack_require__(20);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `Notification` model.
 */
var NotificationApi = /** @class */ (function (_super) {
    __extends(NotificationApi, _super);
    function NotificationApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Notification` object.)
     * </em>
     */
    NotificationApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/notifications";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id notification id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Notification` object.)
     * </em>
     */
    NotificationApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/notifications/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `Notification`.
     */
    NotificationApi.prototype.getModelName = function () {
        return "Notification";
    };
    NotificationApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */]])
    ], NotificationApi);
    return NotificationApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));

//# sourceMappingURL=Notification.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PushApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_error_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__ = __webpack_require__(20);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `Push` model.
 */
var PushApi = /** @class */ (function (_super) {
    __extends(PushApi, _super);
    function PushApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Send a push notification by installation query
     *
     * @param {object} deviceQuery Installation query
     *
     * @param {object} data Request data.
     *
     *  - `notification` – `{object}` - Notification
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Push` object.)
     * </em>
     */
    PushApi.prototype.notifyByQuery = function (deviceQuery, notification, customHeaders) {
        if (deviceQuery === void 0) { deviceQuery = {}; }
        if (notification === void 0) { notification = {}; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Push";
        var _routeParams = {};
        var _postBody = {
            notification: notification
        };
        var _urlParams = {};
        if (typeof deviceQuery !== 'undefined' && deviceQuery !== null)
            _urlParams.deviceQuery = deviceQuery;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `Push`.
     */
    PushApi.prototype.getModelName = function () {
        return "Push";
    };
    PushApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */]])
    ], PushApi);
    return PushApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));

//# sourceMappingURL=Push.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mobile_eventApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_error_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__ = __webpack_require__(20);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `Mobile_event` model.
 */
var Mobile_eventApi = /** @class */ (function (_super) {
    __extends(Mobile_eventApi, _super);
    function Mobile_eventApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Send a mobile event to the readPDA server process
     *
     * @param {object} data Request data.
     *
     *  - `payload` – `{object}` - Mobile event payload object
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    Mobile_eventApi.prototype.sendEvent = function (payload, customHeaders) {
        if (payload === void 0) { payload = {}; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/mobile_event";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        if (typeof payload !== 'undefined' && payload !== null)
            _urlParams.payload = payload;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `Mobile_event`.
     */
    Mobile_eventApi.prototype.getModelName = function () {
        return "Mobile_event";
    };
    Mobile_eventApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */]])
    ], Mobile_eventApi);
    return Mobile_eventApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));

//# sourceMappingURL=Mobile_event.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteConfigApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_error_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__ = __webpack_require__(20);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `SiteConfig` model.
 */
var SiteConfigApi = /** @class */ (function (_super) {
    __extends(SiteConfigApi, _super);
    function SiteConfigApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `SiteConfig` object.)
     * </em>
     */
    SiteConfigApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/SiteConfigs";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id SiteConfig id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `SiteConfig` object.)
     * </em>
     */
    SiteConfigApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/SiteConfigs/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `SiteConfig`.
     */
    SiteConfigApi.prototype.getModelName = function () {
        return "SiteConfig";
    };
    SiteConfigApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */]])
    ], SiteConfigApi);
    return SiteConfigApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));

//# sourceMappingURL=SiteConfig.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DespatchToDriverMessagesApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_error_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__ = __webpack_require__(20);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `DespatchToDriverMessages` model.
 */
var DespatchToDriverMessagesApi = /** @class */ (function (_super) {
    __extends(DespatchToDriverMessagesApi, _super);
    function DespatchToDriverMessagesApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `DespatchToDriverMessages` object.)
     * </em>
     */
    DespatchToDriverMessagesApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/DespatchToDriverMessages";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id DespatchToDriverMessages id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `DespatchToDriverMessages` object.)
     * </em>
     */
    DespatchToDriverMessagesApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/DespatchToDriverMessages/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `DespatchToDriverMessages`.
     */
    DespatchToDriverMessagesApi.prototype.getModelName = function () {
        return "DespatchToDriverMessages";
    };
    DespatchToDriverMessagesApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */]])
    ], DespatchToDriverMessagesApi);
    return DespatchToDriverMessagesApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));

//# sourceMappingURL=DespatchToDriverMessages.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JseaDriverAnswersApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_error_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_JseaDriverAnswers__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sockets_socket_connections__ = __webpack_require__(20);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */










/**
 * Api services for the `JseaDriverAnswers` model.
 */
var JseaDriverAnswersApi = /** @class */ (function (_super) {
    __extends(JseaDriverAnswersApi, _super);
    function JseaDriverAnswersApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `JseaDriverAnswers` object.)
     * </em>
     */
    JseaDriverAnswersApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/JseaDriverAnswers";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id JseaDriverAnswers id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `JseaDriverAnswers` object.)
     * </em>
     */
    JseaDriverAnswersApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/JseaDriverAnswers/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Get a set of deltas and conflicts since the given checkpoint.
     *
     * @param {object} data Request data.
     *
     *  - `since` – `{number}` - Find deltas since this checkpoint
     *
     *  - `remoteChanges` – `{any}` - an array of change objects
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `JseaDriverAnswers` object.)
     * </em>
     */
    JseaDriverAnswersApi.prototype.diff = function (since, remoteChanges, customHeaders) {
        if (since === void 0) { since = {}; }
        if (remoteChanges === void 0) { remoteChanges = {}; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/JseaDriverAnswers/diff";
        var _routeParams = {};
        var _postBody = {
            remoteChanges: remoteChanges
        };
        var _urlParams = {};
        if (typeof since !== 'undefined' && since !== null)
            _urlParams.since = since;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Get the changes to a model since a given checkpoint.Provide a filter object to reduce the number of results returned.
     *
     * @param {number} since Only return changes since this checkpoint
     *
     * @param {object} filter Only include changes that match this filter
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `JseaDriverAnswers` object.)
     * </em>
     */
    JseaDriverAnswersApi.prototype.changes = function (since, filter, customHeaders) {
        if (since === void 0) { since = {}; }
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/JseaDriverAnswers/changes";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        if (typeof since !== 'undefined' && since !== null)
            _urlParams.since = since;
        if (typeof filter !== 'undefined' && filter !== null)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Create a checkpoint.
     *
     * @param {object} data Request data.
     *
     * This method does not accept any data. Supply an empty object.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `JseaDriverAnswers` object.)
     * </em>
     */
    JseaDriverAnswersApi.prototype.checkpoint = function (customHeaders) {
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/JseaDriverAnswers/checkpoint";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Get the current checkpoint.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `JseaDriverAnswers` object.)
     * </em>
     */
    JseaDriverAnswersApi.prototype.currentCheckpoint = function (customHeaders) {
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/JseaDriverAnswers/checkpoint";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Create an update list from a delta list.
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `JseaDriverAnswers` object.)
     * </em>
     */
    JseaDriverAnswersApi.prototype.createUpdates = function (deltas, customHeaders) {
        if (deltas === void 0) { deltas = {}; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/JseaDriverAnswers/create-updates";
        var _routeParams = {};
        var _postBody = {
            deltas: deltas
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Run multiple updates at once. Note: this is not atomic.
     *
     * @param {object} data Request data.
     *
     *  - `updates` – `{any}` -
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    JseaDriverAnswersApi.prototype.bulkUpdate = function (updates, customHeaders) {
        if (updates === void 0) { updates = {}; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/JseaDriverAnswers/bulk-update";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        if (typeof updates !== 'undefined' && updates !== null)
            _urlParams.updates = updates;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Get the most recent change record for this instance.
     *
     * @param {any} id Model id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `JseaDriverAnswers` object.)
     * </em>
     */
    JseaDriverAnswersApi.prototype.findLastChange = function (id, customHeaders) {
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/JseaDriverAnswers/:id/changes/last";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result.pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (instances) {
            return instances.map(function (instance) { return new __WEBPACK_IMPORTED_MODULE_8__models_JseaDriverAnswers__["a" /* JseaDriverAnswers */](instance); });
        }));
    };
    /**
     * Update the properties of the most recent change record kept for this instance.
     *
     * @param {any} id Model id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of Change property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `JseaDriverAnswers` object.)
     * </em>
     */
    JseaDriverAnswersApi.prototype.updateLastChange = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PUT";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/JseaDriverAnswers/:id/changes/last";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `JseaDriverAnswers`.
     */
    JseaDriverAnswersApi.prototype.getModelName = function () {
        return "JseaDriverAnswers";
    };
    JseaDriverAnswersApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_9__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_9__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */]])
    ], JseaDriverAnswersApi);
    return JseaDriverAnswersApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));

//# sourceMappingURL=JseaDriverAnswers.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JseaDriverAnswersChangeApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_error_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__ = __webpack_require__(20);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `JseaDriverAnswersChange` model.
 */
var JseaDriverAnswersChangeApi = /** @class */ (function (_super) {
    __extends(JseaDriverAnswersChangeApi, _super);
    function JseaDriverAnswersChangeApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `JseaDriverAnswersChange` object.)
     * </em>
     */
    JseaDriverAnswersChangeApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/JseaDriverAnswersChanges";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id JseaDriverAnswersChange id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `JseaDriverAnswersChange` object.)
     * </em>
     */
    JseaDriverAnswersChangeApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/JseaDriverAnswersChanges/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `JseaDriverAnswersChange`.
     */
    JseaDriverAnswersChangeApi.prototype.getModelName = function () {
        return "JseaDriverAnswersChange";
    };
    JseaDriverAnswersChangeApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */]])
    ], JseaDriverAnswersChangeApi);
    return JseaDriverAnswersChangeApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));

//# sourceMappingURL=JseaDriverAnswersChange.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotocontainerApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_error_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__ = __webpack_require__(20);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `Photocontainer` model.
 */
var PhotocontainerApi = /** @class */ (function (_super) {
    __extends(PhotocontainerApi, _super);
    function PhotocontainerApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Photocontainer` object.)
     * </em>
     */
    PhotocontainerApi.prototype.getContainers = function (customHeaders) {
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/photocontainers";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Photocontainer` object.)
     * </em>
     */
    PhotocontainerApi.prototype.createContainer = function (options, customHeaders) {
        if (options === void 0) { options = {}; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/photocontainers";
        var _routeParams = {};
        var _postBody = {
            options: options
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {string} container
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `` – `{}` -
     */
    PhotocontainerApi.prototype.destroyContainer = function (container, customHeaders) {
        var _method = "DELETE";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/photocontainers/:container";
        var _routeParams = {
            container: container
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {string} container
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Photocontainer` object.)
     * </em>
     */
    PhotocontainerApi.prototype.getContainer = function (container, customHeaders) {
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/photocontainers/:container";
        var _routeParams = {
            container: container
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {string} container
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Photocontainer` object.)
     * </em>
     */
    PhotocontainerApi.prototype.getFiles = function (container, customHeaders) {
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/photocontainers/:container/files";
        var _routeParams = {
            container: container
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {string} container
     *
     * @param {string} file
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Photocontainer` object.)
     * </em>
     */
    PhotocontainerApi.prototype.getFile = function (container, file, customHeaders) {
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/photocontainers/:container/files/:file";
        var _routeParams = {
            container: container,
            file: file
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {string} container
     *
     * @param {string} file
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `` – `{}` -
     */
    PhotocontainerApi.prototype.removeFile = function (container, file, customHeaders) {
        var _method = "DELETE";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/photocontainers/:container/files/:file";
        var _routeParams = {
            container: container,
            file: file
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {string} container
     *
     * @param {object} data Request data.
     *
     *  - `req` – `{object}` -
     *
     *  - `res` – `{object}` -
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `result` – `{object}` -
     */
    PhotocontainerApi.prototype.upload = function (container, req, res, customHeaders) {
        if (req === void 0) { req = {}; }
        if (res === void 0) { res = {}; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/photocontainers/:container/upload";
        var _routeParams = {
            container: container
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param {string} container
     *
     * @param {string} file
     *
     * @param {object} req
     *
     * @param {object} res
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    PhotocontainerApi.prototype.download = function (container, file, req, res, customHeaders) {
        if (req === void 0) { req = {}; }
        if (res === void 0) { res = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/photocontainers/:container/download/:file";
        var _routeParams = {
            container: container,
            file: file
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Photocontainer` object.)
     * </em>
     */
    PhotocontainerApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/photocontainers";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id photocontainer id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Photocontainer` object.)
     * </em>
     */
    PhotocontainerApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/photocontainers/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `Photocontainer`.
     */
    PhotocontainerApi.prototype.getModelName = function () {
        return "Photocontainer";
    };
    PhotocontainerApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */]])
    ], PhotocontainerApi);
    return PhotocontainerApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));

//# sourceMappingURL=Photocontainer.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_error_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__ = __webpack_require__(20);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `Image` model.
 */
var ImageApi = /** @class */ (function (_super) {
    __extends(ImageApi, _super);
    function ImageApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Image` object.)
     * </em>
     */
    ImageApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/images";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id image id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Image` object.)
     * </em>
     */
    ImageApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/images/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `Image`.
     */
    ImageApi.prototype.getModelName = function () {
        return "Image";
    };
    ImageApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */]])
    ], ImageApi);
    return ImageApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));

//# sourceMappingURL=Image.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarcodeHistApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_error_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_BarcodeHist__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sockets_socket_connections__ = __webpack_require__(20);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */










/**
 * Api services for the `BarcodeHist` model.
 */
var BarcodeHistApi = /** @class */ (function (_super) {
    __extends(BarcodeHistApi, _super);
    function BarcodeHistApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `BarcodeHist` object.)
     * </em>
     */
    BarcodeHistApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/BarcodeHists";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id BarcodeHist id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `BarcodeHist` object.)
     * </em>
     */
    BarcodeHistApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/BarcodeHists/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Get a set of deltas and conflicts since the given checkpoint.
     *
     * @param {object} data Request data.
     *
     *  - `since` – `{number}` - Find deltas since this checkpoint
     *
     *  - `remoteChanges` – `{any}` - an array of change objects
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `BarcodeHist` object.)
     * </em>
     */
    BarcodeHistApi.prototype.diff = function (since, remoteChanges, customHeaders) {
        if (since === void 0) { since = {}; }
        if (remoteChanges === void 0) { remoteChanges = {}; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/BarcodeHists/diff";
        var _routeParams = {};
        var _postBody = {
            remoteChanges: remoteChanges
        };
        var _urlParams = {};
        if (typeof since !== 'undefined' && since !== null)
            _urlParams.since = since;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Get the changes to a model since a given checkpoint.Provide a filter object to reduce the number of results returned.
     *
     * @param {number} since Only return changes since this checkpoint
     *
     * @param {object} filter Only include changes that match this filter
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `BarcodeHist` object.)
     * </em>
     */
    BarcodeHistApi.prototype.changes = function (since, filter, customHeaders) {
        if (since === void 0) { since = {}; }
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/BarcodeHists/changes";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        if (typeof since !== 'undefined' && since !== null)
            _urlParams.since = since;
        if (typeof filter !== 'undefined' && filter !== null)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Create a checkpoint.
     *
     * @param {object} data Request data.
     *
     * This method does not accept any data. Supply an empty object.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `BarcodeHist` object.)
     * </em>
     */
    BarcodeHistApi.prototype.checkpoint = function (customHeaders) {
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/BarcodeHists/checkpoint";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Get the current checkpoint.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `BarcodeHist` object.)
     * </em>
     */
    BarcodeHistApi.prototype.currentCheckpoint = function (customHeaders) {
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/BarcodeHists/checkpoint";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Create an update list from a delta list.
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `BarcodeHist` object.)
     * </em>
     */
    BarcodeHistApi.prototype.createUpdates = function (deltas, customHeaders) {
        if (deltas === void 0) { deltas = {}; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/BarcodeHists/create-updates";
        var _routeParams = {};
        var _postBody = {
            deltas: deltas
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Run multiple updates at once. Note: this is not atomic.
     *
     * @param {object} data Request data.
     *
     *  - `updates` – `{any}` -
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    BarcodeHistApi.prototype.bulkUpdate = function (updates, customHeaders) {
        if (updates === void 0) { updates = {}; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/BarcodeHists/bulk-update";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        if (typeof updates !== 'undefined' && updates !== null)
            _urlParams.updates = updates;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Get the most recent change record for this instance.
     *
     * @param {any} id Model id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `BarcodeHist` object.)
     * </em>
     */
    BarcodeHistApi.prototype.findLastChange = function (id, customHeaders) {
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/BarcodeHists/:id/changes/last";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result.pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (instances) {
            return instances.map(function (instance) { return new __WEBPACK_IMPORTED_MODULE_8__models_BarcodeHist__["a" /* BarcodeHist */](instance); });
        }));
    };
    /**
     * Update the properties of the most recent change record kept for this instance.
     *
     * @param {any} id Model id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of Change property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `BarcodeHist` object.)
     * </em>
     */
    BarcodeHistApi.prototype.updateLastChange = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PUT";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/BarcodeHists/:id/changes/last";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `BarcodeHist`.
     */
    BarcodeHistApi.prototype.getModelName = function () {
        return "BarcodeHist";
    };
    BarcodeHistApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_9__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_9__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */]])
    ], BarcodeHistApi);
    return BarcodeHistApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));

//# sourceMappingURL=BarcodeHist.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarcodeHistChangeApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_error_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__ = __webpack_require__(20);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `BarcodeHistChange` model.
 */
var BarcodeHistChangeApi = /** @class */ (function (_super) {
    __extends(BarcodeHistChangeApi, _super);
    function BarcodeHistChangeApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `BarcodeHistChange` object.)
     * </em>
     */
    BarcodeHistChangeApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/BarcodeHistChanges";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id BarcodeHistChange id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `BarcodeHistChange` object.)
     * </em>
     */
    BarcodeHistChangeApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/BarcodeHistChanges/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `BarcodeHistChange`.
     */
    BarcodeHistChangeApi.prototype.getModelName = function () {
        return "BarcodeHistChange";
    };
    BarcodeHistChangeApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */]])
    ], BarcodeHistChangeApi);
    return BarcodeHistChangeApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));

//# sourceMappingURL=BarcodeHistChange.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowRefServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the WindowRefServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.

    REf:https://stackoverflow.com/questions/34177221/angular2-how-to-inject-window-into-an-angular2-service
*/
function getWindow() {
    return window;
}
var WindowRefServiceProvider = /** @class */ (function () {
    function WindowRefServiceProvider() {
        //console.log('Hello WindowRefServiceProvider Provider');
    }
    Object.defineProperty(WindowRefServiceProvider.prototype, "nativeWindow", {
        get: function () {
            return getWindow();
        },
        enumerable: true,
        configurable: true
    });
    WindowRefServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], WindowRefServiceProvider);
    return WindowRefServiceProvider;
}());

//# sourceMappingURL=window-ref-service.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExitServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gps_service_gps_service__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_service_event_service__ = __webpack_require__(122);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the ExitServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.

    Previously Named : appService
*/
var ExitServiceProvider = /** @class */ (function () {
    function ExitServiceProvider(eventService, gpsService, alert, platform) {
        this.eventService = eventService;
        this.gpsService = gpsService;
        this.alert = alert;
        this.platform = platform;
        //console.log('Hello ExitServiceProvider Provider');
    }
    ExitServiceProvider.prototype.exitTplusMobile = function () {
        var _this = this;
        var alert = this.alert.create({
            title: 'Confirm',
            message: 'This will exit the application and stop sending GPS.Do you want to exit?',
            buttons: [{
                    text: "exit?",
                    handler: function () { _this.exitApp(); }
                }, {
                    text: "Cancel",
                    role: 'cancel'
                }]
        });
        alert.present();
    };
    ; //exitTplusMobile() ends here
    ExitServiceProvider.prototype.exitApp = function () {
        this.gpsService.setSendGps(false);
        this.eventService.sendMsg('LOGOFF', '');
        // NOTE - it is not possible to programatically exit an iOS app see:
        // http://stackoverflow.com/questions/14422908/iphone-does-not-recognize-phonegaps-navigator-app
        // https://groups.google.com/forum/?fromgroups=#!topic/phonegap/XjTm0ua4uOY
        // NOTE - another option: ionic.Platform.exitApp()
        // LT - TODO - NOTE - this does NOT close/exit the app on an android device
        // LT - further note - it puts the app into background which apparently is the
        // appropriate thing to do.  However this means that our GPS etc. updates keep
        // going???.
        this.platform.exitApp();
    };
    ExitServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__event_service_event_service__["a" /* EventServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__gps_service_gps_service__["a" /* GpsServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], ExitServiceProvider);
    return ExitServiceProvider;
}());

//# sourceMappingURL=exit-service.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PushServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_push__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__log_service_log_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pdaparams_service_pdaparams_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__platform_ready_service_platform_ready_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_service_shared_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util_service_util_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__siteconfig_service_siteconfig_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_sdk_services__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_sqlite_service_sqlite_service__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










 ///shared/sdk/services';

/*
  Generated class for the PushServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var PushServiceProvider = /** @class */ (function () {
    function PushServiceProvider(pdaParams, storage, logger, platformReady, device, push, installationApi, alertCtrl, sharedService, utilService, siteConfig) {
        this.pdaParams = pdaParams;
        this.storage = storage;
        this.logger = logger;
        this.platformReady = platformReady;
        this.device = device;
        this.push = push;
        this.installationApi = installationApi;
        this.alertCtrl = alertCtrl;
        this.sharedService = sharedService;
        this.utilService = utilService;
        this.siteConfig = siteConfig;
        /* "senderID" is "Project Number" from Google Developers Console (https://console.firebase.google.com)
          NOTE that there is also a server component involved - see API key in /app/strongloop/OSC-API/server/gcm_config.js */
        this.androidConfig = {
            senderID: ""
        };
        this.iosConfig = {
            badge: true,
            sound: true,
            alert: true
        };
        this.browserConfig = {
            pushServiceURL: 'http://push.api.phonegap.com/v1/push'
        };
        this.winConfig = {};
        this.pushOptions = {
            android: this.androidConfig,
            ios: this.iosConfig,
            windows: this.winConfig,
            browser: this.browserConfig
        };
        this.registered = false;
        this.already_registered = false;
        this.already_nagging = false;
        this.lastSoundTime = Math.round(new Date().getTime() / 1000); // init when service instantiates
        this.logParams = { site: this.pdaParams.getSiteId(), driver: this.pdaParams.getDriverId(), fn: 'PushServiceProvider' };
        this.log = this.logger.getInstance(this.logParams);
        //console.log('Hello PushServiceProvider Provider');
    }
    PushServiceProvider.prototype.registerForPush = function () {
        var _this = this;
        //console.log("Register for push called!");
        var pda_sender_id = this.siteConfig.getSiteConfigValue('PDA_SENDER_ID');
        if (pda_sender_id) {
            this.pushOptions.android.senderID = pda_sender_id;
        }
        this.log.debug('registerForPush: isready:' + this.platformReady.isPlatformReady() + ', driverId:' + this.pdaParams.driverId + ', registered:' + this.registered + ', sender id:' + pda_sender_id);
        //If Device ready , driver > 0 and we are not already registered then do it
        if (this.platformReady.isPlatformReady() && this.pdaParams.driverId > 0 && this.registered == false) {
            // Determine platform e.g. 'Android', 'iOS'
            var platform = this.device.platform;
            if (platform != null) {
                var deviceType = platform.toLowerCase(); // lowercase for loopback installations collection
                var mycurrent_drivernum = this.pdaParams.driverId;
                // initialise the push plugin - phonegap-plugin-push
                this.pushObject = this.push.init(this.pushOptions);
                this.pushObject.on('registration').subscribe(function (resdata) {
                    var token = resdata.registrationId;
                    var msg = 'CordovaPushregistered for Driver # : ' + mycurrent_drivernum + ' with token:' + token;
                    _this.log.info(msg);
                    //Init an Object to insert into installation table if our filter below gets empty or filter 
                    // returns not the same as the current token just got from Google
                    var installation_object = {
                        "appId": "osc-push-tpm2",
                        "userId": mycurrent_drivernum,
                        "deviceToken": token,
                        "deviceType": deviceType,
                        "pdaVersion": _this.pdaParams.getAppVersion()
                    };
                    var filter = { "where": { "deviceToken": token } };
                    _this.log.debug(platform + 'CordovaPush.register: check for current registration, filter:' + JSON.stringify(filter));
                    _this.installationApi.find(filter).subscribe(function (data) {
                        // Try and ensure that there only ever one row for a driver or a token
                        // TODO - remove any registrations for this token but NOT for this driver
                        // TODO - remove any registrations for this driver but NOT for this token
                        // Then register current token for current driver
                        if (_this.utilService.isEmpty(data) || data === null) {
                            _this.log.info(platform + 'CordovaPush.register: no current registration found in installations, saving...');
                            //This registers the Google Token with Strongloop and our Database
                            _this.installationApi.create(installation_object).subscribe(function (res) {
                                // Save data to local storage (it also gets put into $rootScope below)
                                localStorage.setItem('osc-push-credentials', JSON.stringify(installation_object));
                                _this.storage.set('osc-push-credentials', JSON.stringify(installation_object));
                                _this.log.info("Sqlite Storage : Setting osc-push-credentials : " + JSON.stringify(installation_object));
                                var alertPopup = _this.alertCtrl.create({
                                    title: 'Device registered',
                                    message: token,
                                    buttons: ['Ok'],
                                    enableBackdropDismiss: false
                                });
                                alertPopup.present();
                            }, function (error) {
                                _this.log.error(platform + 'CordovaPush.register: failed error:' + error);
                            });
                        }
                        else {
                            //Call the createorpatch API
                            /* this.installationApi.patchOrCreate(installation_object).subscribe((data)=>{
                              this.log.debug("The installationApi.patchOrCreate returned:"+data);
                            }); */
                            var id = data[0].id;
                            _this.installationApi.replaceById(id, installation_object).subscribe(function (result) {
                                _this.log.debug("The installationApi.replaceById returned:" + JSON.stringify(result));
                            });
                            _this.log.info(platform + ':CordovaPush.register: current registration already found in installations');
                            _this.log.debug(platform + ':CordovaPush.register: data:' + JSON.stringify(data));
                        }
                        _this.registered = true; // we've either just registered or we were already registered
                    });
                });
                /*Job Cancel notification*/
                this.pushObject.on('notification').subscribe(function (notification) {
                    _this.log.debug(platform + 'CordovaPush:notificationReceived:' + JSON.stringify(notification));
                    var payload = notification.additionalData.payload || {};
                    /**
                     * Riyaz: Store the last 5 UUIDs in the local storage and compare them with the latest UUID.
                     * This solves the issue of duplicate execution of notifications.
                     */
                    //Get the new uuid
                    var new_uuid = payload.uuid;
                    _this.log.debug("New UUID received is:" + new_uuid);
                    _this.log.debug("Contents of the UUID circular array of length 5 is:" + localStorage.getItem('uuid'));
                    var uuid = [];
                    //if uuid is null, store new uuid and continue
                    if (!localStorage.getItem('uuid')) {
                        uuid.push(new_uuid);
                        _this.storage.set('uuid', JSON.stringify(uuid));
                        _this.log.info("Sqlite Storage : Setting UUID : " + JSON.stringify(uuid));
                        localStorage.setItem('uuid', JSON.stringify(uuid));
                    }
                    else {
                        uuid = JSON.parse(localStorage.getItem('uuid'));
                        //if new_uuid has already been processed, exit out...
                        if (uuid.indexOf(new_uuid) != -1) {
                            _this.log.debug(" UUIDs are equal, exiting out ..... :");
                            return;
                        }
                        else {
                            //If the circular array of length 5, is full, chip out the oldest element
                            if ((JSON.parse(localStorage.getItem('uuid'))).length >= 5)
                                uuid.splice(0, 1);
                            //Push the new uuid to the circular array
                            uuid.push(new_uuid);
                            _this.storage.set('uuid', JSON.stringify(uuid));
                            _this.log.info("Sqlite Storage : Setting UUID : " + JSON.stringify(uuid));
                            localStorage.setItem('uuid', JSON.stringify(uuid));
                        }
                    } /*UUID comparison ends*/
                    // If there is a payload type we use that as the broadcast event with the supplied payload
                    if (payload.type) {
                        // Add platform to payload
                        payload.platform = platform; // event handler may need to know this
                        // If a sound has been provided add to payload (normally iOS)
                        if (notification.sound)
                            payload.sound = notification.sound;
                        _this.log.debug(platform + 'CordovaPush:about to broadcast:' + payload.type + ':payload:' + JSON.stringify(payload));
                        //if notification.additionalData.payload.type="CANCEL", then call next on CANCEL subject.
                        if (payload.type === "CANCEL") {
                            _this.sharedService.CANCEL.next(payload);
                        }
                        //if notification.additionalData.payload.type="NEWJOB", then call next on NEWJOB subject.
                        if (payload.type === "NEWJOB") {
                            _this.sharedService.NEWJOB.next(payload);
                        }
                        //if notification.additionalData.payload.type="JOBUPDATE", then call next on JOBUPDATE subject.
                        if (payload.type === "JOBUPDATE") {
                            _this.sharedService.JOBUPDATE.next(payload);
                        }
                        //if notification.additionalData.payload.type="RESUME", then call next on RESUME subject.
                        if (payload.type === "RESUME") {
                            _this.sharedService.RESUME.next(payload);
                        }
                        //if notification.additionalData.payload.type="DESTROY", then call next on DESTROY subject.
                        if (payload.type === "DESTROY") {
                            _this.sharedService.DESTROY.next(payload);
                        }
                        if (payload.type === "messageToDriver") {
                            _this.sharedService.messageToDriver.next(payload);
                        }
                        if (payload.type === "commandToPDA") {
                            _this.sharedService.commandToPDA.next(payload);
                        }
                    }
                    else {
                        // no payload type provided simply broadcast a received event with the full notification
                        // add platform to notification so we can check in the event handler
                        notification.platform = platform;
                        _this.log.debug(platform + 'CordovaPush:about to broadcast:' + 'pushNotificationReceived');
                        // $rootScope.$broadcast('pushNotificationReceived', notification);	// broadcast to the world
                        _this.sharedService.pushNotificationReceived.next(notification);
                    }
                });
                this.pushObject.on('error').subscribe(function (error) {
                    return _this.log.error(platform + ':CordovaPush :errorOccurred:' + JSON.stringify(error));
                });
            } // if (platform != null)  ends here
        } //isPlatformReady() ends here
    }; ///registerForPush() ends here
    PushServiceProvider.prototype.getIsRegistered = function () {
        return this.registered;
    };
    PushServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */], __WEBPACK_IMPORTED_MODULE_11__providers_sqlite_service_sqlite_service__["a" /* SqliteServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__log_service_log_service__["a" /* LogServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__platform_ready_service_platform_ready_service__["a" /* PlatformReadyServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_push__["a" /* Push */], __WEBPACK_IMPORTED_MODULE_10__shared_sdk_services__["b" /* InstallationApi */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7__shared_service_shared_service__["a" /* SharedServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_8__util_service_util_service__["a" /* UtilServiceProvider */], __WEBPACK_IMPORTED_MODULE_9__siteconfig_service_siteconfig_service__["a" /* SiteconfigServiceProvider */]])
    ], PushServiceProvider);
    return PushServiceProvider;
}());

//# sourceMappingURL=push-service.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_launch_navigator__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__log_service_log_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pdaparams_service_pdaparams_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service_shared_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__siteconfig_service_siteconfig_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__platform_ready_service_platform_ready_service__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the NavigationServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var NavigationServiceProvider = /** @class */ (function () {
    function NavigationServiceProvider(logger, pdaParams, platformReadyService, sharedService, siteConfig, navigatorPlugin) {
        var _this = this;
        this.logger = logger;
        this.pdaParams = pdaParams;
        this.platformReadyService = platformReadyService;
        this.sharedService = sharedService;
        this.siteConfig = siteConfig;
        this.navigatorPlugin = navigatorPlugin;
        this.logParams = { site: this.pdaParams.getSiteId(), driver: this.pdaParams.getDriverId(), fn: 'NavigationServiceProvider' };
        this.log = this.logger.getInstance(this.logParams);
        this.isReady = false;
        this.moduleInstalled = false;
        this.SITE_CONFIG_LOADED = false;
        this.navigationServAllowed = false;
        //myNotReadyErr = "Sorry Cordova Is Not ready, until this occurs cannot use Navigator Plugin";
        this.myNotModuleInstalled = "Sorry this module is not installed, please contact your office";
        this.myJobNumber = 0;
        this.myJobDate = 0;
        this.myaddress = '';
        this.prepNavigation = function () {
            if (localStorage.getItem('SITE_CONFIG_LOADED')) {
                //if (localStorage.getItem('SITE_CONFIG_LOADED')) {
                //this.log.debug('NavigationServiceProvider SITE_CONFIG_LOADED Event triggered');
                if (_this.siteConfig.getSiteConfigValue('PDA_REQ_NAVIGATION') == 'Y') {
                    _this.moduleInstalled = true;
                    _this.navigationServAllowed = true;
                    //this.log.debug("navigationServAllowed is NOW TRUE");
                    _this.isReady = true;
                    // }
                }
                else {
                    // this.log.debug("navigationServAllowed:" + this.myNotModuleInstalled);
                    //alert(this.myNotModuleInstalled);
                }
            }
        };
        this.isRequired = function () {
            return this.isReady; //this.myNotModuleInstalled;
        };
        this.isModuleInstalled = function () {
            return this.moduleInstalled;
        };
        this.registerJobDetails = function (jobnum, jobdate, address) {
            //this.log.debug("Registering jobDetails num " + jobnum + " Date " + jobdate + ' Address = ' + address);
            this.JobNumber = jobnum;
            this.JobDate = jobdate;
            this.myaddress = address;
        };
        this.onSuccessCallback = function () {
            //navigator.notification.alert("Successfully launched navigator");
            this.log.debug("Successfully launched navigator for ");
        };
        this.onErrorCallback = function (errMsg) {
            this.log.debug("Failed to  launch navigator error = " + errMsg);
        };
        this.clearUserChoice = function () {
            this.log.debug("User wants Wants to clear preferred app");
            if (!this.navigationServAllowed) {
                //alert(this.myNotModuleInstalled);
                this.log.debug(this.myNotModuleInstalled);
                return;
            }
            this.navigatorPlugin.appSelection.userChoice.get(function (app) {
                this.log.debug("User preferred app currently is: " + this.navigatorPlugin.getAppDisplayName(app));
            });
            this.navigatorPlugin.appSelection.userChoice.clear(function () {
                this.log.debug("Wants to clear app ,so now preferred app is cleared");
            });
            alert("Your navigator choice has been cleared, you will be prompted the next time you decide to navigate");
        };
        this.navigate = function (deststr) {
            this.prepNavigation();
            if (!deststr) {
                //navigator.notification. alert("A destination must be specified");
                // alert("A destination must be specified");
                this.log.debug("A destination must be specified");
                return;
            }
            if (this.isReady) {
                this.navigatorPlugin.navigate(deststr, {
                    start: null,
                    enableDebug: true,
                    successCallback: this.onSuccess,
                    errorCallback: this.onError
                });
            }
            else {
                //alert("cordovaReady.isDeviceReady = false, cant use Navigator Plugin");
                this.log.debug("cordovaReady.isDeviceReady = false, cant use Navigator Plugin");
            }
        };
        var lstr = 'Constructing NavigationServiceProvider Provider';
        // console.log(lstr);
        this.log.debug(lstr);
        //this.sharedService.SITE_CONFIG_LOADED.subscribe(SITE_CONFIG_LOADED => {
        this.prepNavigation();
    }
    NavigationServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__log_service_log_service__["a" /* LogServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__platform_ready_service_platform_ready_service__["a" /* PlatformReadyServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__shared_service_shared_service__["a" /* SharedServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__siteconfig_service_siteconfig_service__["a" /* SiteconfigServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_launch_navigator__["a" /* LaunchNavigator */]])
    ], NavigationServiceProvider);
    return NavigationServiceProvider;
}());

//
//# sourceMappingURL=navigation-service.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_sdk__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_base_service_base_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_siteconfig_service_siteconfig_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_config_service_config_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_shared_service_shared_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_sod_service_sod_service__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_customerconn_service_customerconn_service__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_pdaparams_service_pdaparams_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_connectivity_monitor_connectivity_monitor__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_message_service_message_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_jsea_service_jsea_service__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_image_service_image_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_device_diagnostic_service_device_diagnostic_service__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_sqlite_service_sqlite_service__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


















var MyApp = /** @class */ (function () {
    function MyApp(app, storage, statusBar, alertCtrl, splashScreen, pdaParams, platform, connectivityMonitor, base, sharedService, customerConn, siteConfig, configService, sodService, messageService, jseaService, imageService, deviceDiagnosticService) {
        var _this = this;
        this.app = app;
        this.storage = storage;
        this.statusBar = statusBar;
        this.alertCtrl = alertCtrl;
        this.splashScreen = splashScreen;
        this.pdaParams = pdaParams;
        this.platform = platform;
        this.connectivityMonitor = connectivityMonitor;
        this.base = base;
        this.sharedService = sharedService;
        this.customerConn = customerConn;
        this.siteConfig = siteConfig;
        this.configService = configService;
        this.sodService = sodService;
        this.messageService = messageService;
        this.jseaService = jseaService;
        this.imageService = imageService;
        this.deviceDiagnosticService = deviceDiagnosticService;
        this.allowed = false;
        this.Job = lbclient.models.LocalJob;
        //Shared code which should executes after siteconfigs are loaded.
        this.commonCode = function () {
            _this.platform.ready().then(function () {
                //Riyaz:Take care of the android hardware back button press.
                _this.platform.registerBackButtonAction(function () {
                    // Catches the active view
                    var nav = _this.app.getActiveNavs()[0];
                    var activePage = nav.getActive().name;
                    // Checks if can go back before show up the alert
                    if (nav.canGoBack()) {
                        nav.pop();
                    }
                    else {
                        var alert_1 = _this.alertCtrl.create({
                            title: 'Warning',
                            message: 'This will close the app and disable GPS tracking.  Are you sure you want to exit?',
                            buttons: [{
                                    text: 'Cancel',
                                    role: 'cancel',
                                    handler: function () {
                                        nav.setRoot(activePage);
                                    }
                                }, {
                                    text: 'OK',
                                    handler: function () {
                                        var mystr = 'backbutton: operator selected OK to exit app, tab:' + activePage;
                                        //this.log.info(mystr);
                                        _this.platform.exitApp();
                                    }
                                }],
                            enableBackdropDismiss: false
                        });
                        alert_1.present();
                    }
                });
            });
            //6. Check & set all table metadata
            //6.1 Load the jobs metadata  
            var result = _this.base.getModelMetadata(_this.Job, "jobMetadata");
            _this.sharedService.jobMetaDataLoadedSubject.subscribe();
            //7. Check & set all watchers
            //7.1 Start monitoring network connectivity    
            _this.connectivityMonitor.startWatching();
            //7.2 Start monitoring for JSEA changes.
            _this.jseaService.startWatching();
            //7.3 check if this is first start for the day
            _this.sodService.checkDoSodAction('FIRST_RESUME');
            //7.4  Start monitoring images for auto upload 
            _this.imageService.startWatching();
            _this.platform.ready().then(function () {
                // Okay, so the platform is ready and our plugins are available.
                // Here you can do any higher level native things you might need.        
                //this.statusBar.styleDefault();
                _this.statusBar.overlaysWebView(false);
                //this.statusBar.styleLightContent();
                // set status bar to black
                _this.statusBar.backgroundColorByHexString('#000000');
                // Start monitoring for messages  
                _this.messageService.startWatching();
                //Start monitoring the device diagnostics
                _this.deviceDiagnosticService.startWatching();
                //hide splashscreen
                //this.splashScreen.hide();
            });
            //8. If driverid > 0, redirect to jobs page
            if (_this.pdaParams.getDriverId() > 0) {
                _this.rootPage = "TabsPage";
            }
            else {
                //9. If driverid <=0, redirect him to PDA page.     
                _this.rootPage = "PdaPage";
            }
        }; //commonCode() ends here
        console.log("Hello app.component.ts");
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var loginVar, result$;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.platform.ready().then(function (readySource) {
                            console.log('Platform ready from ::', readySource);
                            // Platform now ready, execute any required native code
                        })];
                    case 1:
                        _a.sent();
                        if (!!(localStorage.getItem('login'))) return [3 /*break*/, 6];
                        console.log('There is no login available in local storage.');
                        //2.1. Check if it is available in the sqlite db        
                        return [4 /*yield*/, this.storage.get("login").then(function (val) {
                                if (val) {
                                    loginVar = val;
                                    console.log('There is a login available in sqlite storage.');
                                }
                                else {
                                    loginVar = null;
                                    console.log('There is NO login available in sqlite storage.');
                                }
                                _this.sharedService.localStorageZapped = loginVar;
                            })];
                    case 2:
                        //2.1. Check if it is available in the sqlite db        
                        _a.sent();
                        if (!this.sharedService.localStorageZapped) return [3 /*break*/, 5];
                        console.log('LocalStorage has been zapped!!');
                        /*
                        * 2.3 If yes,localstorage has been zapped, retrive all variables from sqlite and write to localstorage
                        * */
                        return [4 /*yield*/, localStorage.setItem('login', loginVar)];
                    case 3:
                        /*
                        * 2.3 If yes,localstorage has been zapped, retrive all variables from sqlite and write to localstorage
                        * */
                        _a.sent();
                        console.log('LocalStorage has been zapped, so we copy the contents of SqliteStorage to LocalStorage.');
                        return [4 /*yield*/, this.storage.getAndSetToLocalStorage().then(function (val) {
                                //Also, set firstlogin to false and redirecting to index.html to sync with lbclient
                                localStorage.setItem('firstlogin', 'false');
                                document.location.href = 'index.html';
                                return;
                            })];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        console.log('LocalStorage has NOT been zapped, so we are redirected to the login page.');
                        //clear previous data in the storage, if any.
                        localStorage.clear();
                        this.storage.clear();
                        //Set the firstime login variable
                        localStorage.setItem('firstlogin', 'true');
                        //this.splashScreen.hide();
                        //Direct him to the login page..
                        this.rootPage = "LoginPage";
                        return [2 /*return*/];
                    case 6:
                        //set the tab string in shared-service
                        this.sharedService.tab = "App.Component.ts";
                        //3. Is the Server API Url set?
                        //4. No, the Server API Url is not set. Get & Set the the Server API Url.
                        //Also set the server path for the loopback SDK builder in the ./shared/sdk directory.
                        if (!(localStorage.getItem('apiURL'))) {
                            this.userId = localStorage.getItem('userId');
                            //Hack:Set userid into sqlite as its not being set from login.ts
                            this.storage.set("userId", this.userId);
                            //console.log('userId====' + this.userId);
                            this.connDetails = this.customerConn.getConnectionDetails(this.userId.toLowerCase());
                            this.configService.setSiteDetails(this.connDetails);
                            if (!localStorage.getItem('clientId'))
                                localStorage.setItem('clientId', this.connDetails.clientId);
                            //console.log("================The site id is===================::" + this.pdaParams.getSiteId());
                            //console.log("lbclient.dataSources.adduserid"+lbclient.dataSources.adduserid);
                            //Set the server path for the loopback SDK builder in the ./shared/sdk directory.     
                            __WEBPACK_IMPORTED_MODULE_4__shared_sdk__["b" /* LoopBackConfig */].setBaseURL((this.connDetails.url));
                            __WEBPACK_IMPORTED_MODULE_4__shared_sdk__["b" /* LoopBackConfig */].setApiVersion('api');
                        }
                        //5.Check & set All Config data
                        if (!(localStorage.getItem('SITE_CONFIG_LOADED'))) {
                            //console.log("Getting the siteconfigs!");
                            this.userId = localStorage.getItem('userId');
                            this.connDetails = this.customerConn.getConnectionDetails(this.userId.toLowerCase());
                            __WEBPACK_IMPORTED_MODULE_4__shared_sdk__["b" /* LoopBackConfig */].setBaseURL((this.connDetails.url));
                            __WEBPACK_IMPORTED_MODULE_4__shared_sdk__["b" /* LoopBackConfig */].setApiVersion('api');
                            result$ = this.siteConfig
                                .loadAllConfigsFromServer()
                                .subscribe(function (result) {
                                console.log("Site Config Loaded!");
                                _this.commonCode();
                                //this.sharedService.SITE_CONFIG_LOADED.next(true);
                            }, function (error) {
                                _this.showError("Unable to load Site Configs.Please check your connection.");
                                return;
                            });
                        }
                        else {
                            this.commonCode();
                            //this.sharedService.SITE_CONFIG_LOADED.next(true);
                        }
                        return [2 /*return*/];
                }
            });
        }); })();
    } //constructor ends here
    MyApp.prototype.showError = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: text,
            buttons: ['OK'],
            enableBackdropDismiss: false
        });
        alert.present();
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_17__providers_sqlite_service_sqlite_service__["a" /* SqliteServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_11__providers_pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_12__providers_connectivity_monitor_connectivity_monitor__["a" /* ConnectivityMonitorProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_base_service_base_service__["a" /* BaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_shared_service_shared_service__["a" /* SharedServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_customerconn_service_customerconn_service__["a" /* CustomerconnServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_siteconfig_service_siteconfig_service__["a" /* SiteconfigServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_config_service_config_service__["a" /* ConfigServiceProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_sod_service_sod_service__["a" /* SodServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_13__providers_message_service_message_service__["a" /* MessageServiceProvider */], __WEBPACK_IMPORTED_MODULE_14__providers_jsea_service_jsea_service__["a" /* JseaServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_15__providers_image_service_image_service__["a" /* ImageServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_16__providers_device_diagnostic_service_device_diagnostic_service__["a" /* DeviceDiagnosticServiceProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobChangedServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the JobChangedServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var JobChangedServiceProvider = /** @class */ (function () {
    function JobChangedServiceProvider() {
        this.lastjobedited = false;
        //Set this in JobsDetailCtrl
        this.setlastjobedited = function (arg_tf) {
            this.lastjobedited = arg_tf;
        };
        //Get this in JobsIndexCtrl
        this.getlastjobedited = function () {
            return this.lastjobedited;
        };
        //console.log('Hello JobChangedServiceProvider Provider');
    }
    JobChangedServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], JobChangedServiceProvider);
    return JobChangedServiceProvider;
}());

//# sourceMappingURL=job-changed-service.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.

  See also https://devdactic.com/login-ionic-2/
*/
var User = /** @class */ (function () {
    function User(username) {
        this.username = username;
    }
    return User;
}());

var LoginServiceProvider = /** @class */ (function () {
    function LoginServiceProvider() {
        //console.log('Hello LoginServiceProvider Provider');
    }
    LoginServiceProvider.prototype.login = function (credentials) {
        var _this = this;
        //Empty credential check
        if (credentials.username === null || credentials.password === null) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw("Please insert credentials");
        }
        else {
            //console.log("Logged in with user :"+credentials.username);
            /* A request to the loopback backend could be made here, to check
             the credentials. But for now, we are using the following hardcoded logic. */
            var access_1 = false;
            if (credentials.username == 'oscvtest' && credentials.password == 'oscvtest') {
                access_1 = true;
            }
            else if (credentials.username == 'scope' && credentials.password == 'scope') {
                access_1 = true;
            }
            else if (credentials.username == 'swift1' && credentials.password == 'swift1') {
                access_1 = true;
            }
            else if (credentials.username == 'wpe' && credentials.password == 'wpe') {
                access_1 = true;
            }
            else if (credentials.username == 'aptold' && credentials.password == 'aptold') {
                access_1 = true;
            }
            else if (credentials.username == 'apt' && credentials.password == 'apt') {
                access_1 = true;
            }
            else if (credentials.username == 'ces' && credentials.password == 'ces') {
                access_1 = true;
            }
            else if (credentials.username == 'swift2' && credentials.password == 'swift2') {
                access_1 = true;
            }
            else if (credentials.username == 'cct' && credentials.password == 'cct') {
                access_1 = true;
            }
            else if (credentials.username == 'itd' && credentials.password == 'itd') {
                access_1 = true;
            }
            else if (credentials.username == 'glc' && credentials.password == 'glc') {
                access_1 = true;
            }
            else if (credentials.username == 'ace' && credentials.password == 'ace') {
                access_1 = true;
            }
            else if (credentials.username == 'pam' && credentials.password == 'pam') {
                access_1 = true;
            }
            else if (credentials.username == 'flg' && credentials.password == 'flg') {
                access_1 = true;
            }
            else if (credentials.username == 'wads' && credentials.password == 'wads') {
                access_1 = true;
            }
            else if (credentials.username == 'univ' && credentials.password == 'univ') {
                access_1 = true;
            }
            else if (credentials.username == 'gempost' && credentials.password == 'gempost') {
                access_1 = true;
            }
            else if (credentials.username == 'rback1' && credentials.password == 'rback1') {
                access_1 = true;
            }
            else if (credentials.username == 'adlx' && credentials.password == 'adlx') {
                access_1 = true;
            }
            else if (credentials.username == 'sgs' && credentials.password == 'sgs') {
                access_1 = true;
            }
            else if (credentials.username == 'transit' && credentials.password == 'transit') {
                access_1 = true;
            }
            else if (credentials.username == 'rawroad' && credentials.password == 'rawroad') {
                access_1 = true;
            }
            else if (credentials.username == 'capmel' && credentials.password == 'capmel') {
                access_1 = true;
            }
            else if (credentials.username == 'capsyd' && credentials.password == 'capsyd') {
                access_1 = true;
            }
            else if (credentials.username == 'capper' && credentials.password == 'capper') {
                access_1 = true;
            }
            else if (credentials.username == 'capadl' && credentials.password == 'capadl') {
                access_1 = true;
            }
            else if (credentials.username == 'capbne' && credentials.password == 'capbne') {
                access_1 = true;
            }
            else if (credentials.username == 'oth' && credentials.password == 'oth') {
                access_1 = true;
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw("Wrong credentials!");
            }
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
                _this.currentUser = new User(credentials.username);
                observer.next(access_1);
                observer.complete();
            });
        }
    };
    LoginServiceProvider.prototype.getUserInfo = function () {
        return this.currentUser;
    };
    LoginServiceProvider.prototype.logout = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this.currentUser = null;
            observer.next(true);
            observer.complete();
        });
    };
    LoginServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LoginServiceProvider);
    return LoginServiceProvider;
}());

//# sourceMappingURL=login-service.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SyncServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__log_service_log_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pdaparams_service_pdaparams_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__job_replication_service_job_replication_service__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__siteconfig_service_siteconfig_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service_shared_service__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the SyncServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var SyncServiceProvider = /** @class */ (function () {
    function SyncServiceProvider(logger, siteConfig, pdaParams, sharedService, jobReplicationService) {
        var _this = this;
        this.logger = logger;
        this.siteConfig = siteConfig;
        this.pdaParams = pdaParams;
        this.sharedService = sharedService;
        this.jobReplicationService = jobReplicationService;
        this.isSyncing = false;
        //sync = lbclient.sync(this.arg1,this.arg2);
        this.logParams = { site: this.pdaParams.getSiteId(), driver: this.pdaParams.getDriverId(), fn: 'SyncServiceProvider' };
        this.log = this.logger.getInstance(this.logParams);
        this.hybridSync = function (callback, filter) {
            //this.mystr = 'syncService: About to sync SyncInprogress = ' + this.isSyncing + " Called from (last value set =) [" + this.lcallingfunc + "]";
            //this.log.debug(this.mystr);
            //  if (!this.isSyncing) {
            if (_this.sharedService.getSyncInProgress() == false) {
                //this.mystr = 'syncService: isSyncInprogress is off so turn it on before Replication sync call ';
                //this.log.debug(this.mystr);
                _this.pda_disable_background_sync = (_this.pdaParams.pda_disable_background_sync || (_this.siteConfig.getSiteConfigValue('PDA_DISABLE_BACKGROUND_SYNC') == 'Y'));
                //If the app is in the background and pda_disable_background_sync is true, do not sync
                if (_this.pda_disable_background_sync && _this.sharedService.isAppinBackground)
                    _this.log.info("Since app is the background and pda_disable_background_sync is set to true, replication code will NOT be executed.");
                else {
                    _this.sharedService.setSyncInProgress(true);
                    //var startTime: number = new Date().getTime();
                    //this.log.debug("============SYNC: STARTED AT ============" + startTime);
                    _this.log.debug("============SYNC: STARTED============");
                    //alert("SYNC STARTED");
                    _this.jobReplicationService.sync(callback, filter);
                    _this.log.debug("============SYNC: FINISHED============");
                    _this.sharedService.setSyncInProgress(false);
                    //var endTime: number = new Date().getTime();
                    //this.log.debug("============SYNC: FINISHED AT ============:" + endTime);        
                    //this.log.debug("============SYNC: TOOK ============:" + (endTime - startTime) + " ms");
                }
            }
        };
        this.getSyncInProgress = function () {
            _this.mystr = 'syncService: getSyncInProgress:' + _this.isSyncing;
            _this.log.debug(_this.mystr);
            return _this.isSyncing;
        };
        this.setCallingFunc = function (callingfunc) {
            _this.mystr = 'syncService: In setCallingFunc value = ' + callingfunc;
            _this.log.debug(_this.mystr);
            _this.lcallingfunc = callingfunc;
        };
        this.setSyncInProgress = function (torf) {
            _this.isSyncing = torf;
            _this.mystr = 'syncService: In setSyncInprogress setting value = ' + _this.isSyncing;
            _this.log.debug(_this.mystr);
        };
        //console.log('Hello SyncServiceProvider Provider');
        this.pda_disable_background_sync = (this.pdaParams.pda_disable_background_sync || (this.siteConfig.getSiteConfigValue('PDA_DISABLE_BACKGROUND_SYNC') == 'Y'));
    }
    SyncServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__log_service_log_service__["a" /* LogServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__siteconfig_service_siteconfig_service__["a" /* SiteconfigServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__shared_service_shared_service__["a" /* SharedServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__job_replication_service_job_replication_service__["a" /* JobReplicationServiceProvider */]])
    ], SyncServiceProvider);
    return SyncServiceProvider;
}());

//# sourceMappingURL=sync-service.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobnoteReplicationServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

;
/*
  Generated class for the JobnoteReplicationServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var JobnoteReplicationServiceProvider = /** @class */ (function () {
    function JobnoteReplicationServiceProvider() {
        //console.log('Hello JobnoteReplicationServiceProvider Provider');
        var _this = this;
        this.LocalNote = lbclient.models.LocalNote;
        this.RemoteNote = lbclient.models.RemoteNote;
        this.models = lbclient.models;
        this.lastFilter = {};
        this.d = new Date();
        this.since = { push: -1, pull: -1 };
        this.job_note_sync = function (callback, filter) {
            var options = { filter: '', lastFilter: '' };
            var cb = null;
            cb = callback;
            options.filter = filter;
            options.lastFilter = filter;
            _this.lastFilter = filter;
            var counter = 0;
            //console.log(new Date().toISOString() + ': starting replication');
            // LT - 10/12/2015 - original code - does remote first
            _this.LocalNote.replicate(_this.since.push, _this.RemoteNote, options, function (err, conflicts, cps) {
                _this.since.push = cps;
                _this.LocalNote.replicate(_this.since.push, _this.RemoteNote, options, function (err, conflicts, cps) {
                    _this.since.pull = cps;
                    //console.log(new Date().toISOString() + ': finished replication');
                    cb && cb(err, conflicts);
                });
            });
        };
        // LT - don't work with our current loopback version - use observe ?  Maybe need filter (and callback?)
        this.LocalNote.on('before save', function (ctx, next) {
            next();
        });
        // sync local changes if connected
        this.LocalNote.on('after save', function (ctx, next) {
            next();
            this.job_note_sync();
        });
        this.LocalNote.on('after delete', function (ctx, next) {
            next();
            this.job_note_sync();
        });
    }
    JobnoteReplicationServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], JobnoteReplicationServiceProvider);
    return JobnoteReplicationServiceProvider;
}());

//# sourceMappingURL=jobnote-replication-service.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttachServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service_config_service__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the AttachServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var AttachServiceProvider = /** @class */ (function () {
    function AttachServiceProvider(http, configService) {
        this.http = http;
        this.configService = configService;
        //console.log('Hello AttachServiceProvider Provider');
    }
    AttachServiceProvider.prototype.getAttachments = function (job) {
        // Query server to get list of attachments for this job - return as a promise
        // Initial implementation of API takes job date and no. and is not concerned with legs
        var client = job.mobjobClientCode;
        var jobnum = job.mobjobNumber; // TODO - should this be basejob?
        var jobdate = Math.floor(job.mobjobSeq / 100000000); // e.g. 20160502
        var serverIP = this.configService.getServerIP();
        if (serverIP == '')
            serverIP = JSON.parse(localStorage.getItem('clientConfig')).serverIP;
        //var serverPort = this.configService.getServerPort();
        var compURL = 'http://' + serverIP + '/other-cgi/listfiles.pl?output_type=JSON&client=' + client + '&job_number=' + jobnum + '&job_date=' + jobdate;
        return this.http.get(compURL).map(function (res) { return res.json(); }).catch(function (err) { return err; });
    };
    AttachServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config_service_config_service__["a" /* ConfigServiceProvider */]])
    ], AttachServiceProvider);
    return AttachServiceProvider;
}());

//# sourceMappingURL=attach-service.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JseaAnswersReplicationServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

;
/*
  Generated class for the JseaAnswersReplicationServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var JseaAnswersReplicationServiceProvider = /** @class */ (function () {
    function JseaAnswersReplicationServiceProvider() {
        //console.log('Hello JseaAnswersReplicationServiceProvider Provider');
        var _this = this;
        this.LocalJseaDriverAnswers = lbclient.models.LocalJseaDriverAnswers;
        this.RemoteJseaDriverAnswers = lbclient.models.RemoteJseaDriverAnswers;
        this.models = lbclient.models;
        this.lastFilter = {};
        this.d = new Date();
        this.since = { push: -1, pull: -1 };
        this.jseaAnswers_sync = function (callback, filter) {
            var options = { filter: '', lastFilter: '' };
            var cb = null;
            cb = callback;
            options.filter = filter;
            options.lastFilter = filter;
            _this.lastFilter = filter;
            var counter = 0;
            //console.log(new Date().toISOString() + ': starting replication');
            // LT - 10/12/2015 - original code - does remote first
            _this.LocalJseaDriverAnswers.replicate(_this.since.push, _this.RemoteJseaDriverAnswers, options, function (err, conflicts, cps) {
                _this.since.push = cps;
                /* 	LocalJseaDriverAnswers.replicate(
                        since.push,
                        RemoteJseaDriverAnswers,
                        options,
                        function pulled(err, conflicts, cps) {
                            since.pull = cps; */
                //console.log(new Date().toISOString() + ': finished replication');
                cb && cb(err, conflicts);
                /* }); */
            });
        };
        this.LocalJseaDriverAnswers.on('before save', function (ctx, next) {
            next();
        });
        // sync local changes if connected
        this.LocalJseaDriverAnswers.on('after save', function (ctx, next) {
            next();
            this.jseaAnswers_sync();
        });
        this.LocalJseaDriverAnswers.on('after delete', function (ctx, next) {
            next();
            this.jseaAnswers_sync();
        });
    }
    JseaAnswersReplicationServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], JseaAnswersReplicationServiceProvider);
    return JseaAnswersReplicationServiceProvider;
}());

//# sourceMappingURL=jsea-answers-replication-service.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverMessageServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_sdk__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DriverMessageServiceProvider = /** @class */ (function () {
    function DriverMessageServiceProvider(despatchToDriverMessages) {
        this.despatchToDriverMessages = despatchToDriverMessages;
        //console.log('Hello DriverMessageServiceProvider Provider');
    }
    DriverMessageServiceProvider.prototype.getMessages = function (driverId) {
        // TODO - limit shoud be a config or pda parameter
        var filter = {
            "where": { "drvmDriverId": driverId },
            "order": 'drvmSeqid DESC',
            "limit": 20
        };
        return (this.despatchToDriverMessages.find(filter).subscribe());
    };
    ;
    DriverMessageServiceProvider.prototype.addMessage = function (driverId, message, cb) {
        //console.log("driverId, message, cb" + driverId + "," + message + "," + cb);
        var now = new Date().toISOString();
        this.driverMsg = {
            drvmDriverId: driverId,
            drvmDate: now,
            drvmTimestamp: now,
            drvmMessage: message,
            drvmSender: driverId,
            drvmRecipient: "DESPATCH",
            drvmSpare: ''
        }; // for now will always be DESPATCH until we maybe have a reply concept
        this.despatchToDriverMessages.create(this.driverMsg).subscribe();
        //this.despatchToDriverMessages.upsert(this.driverMsg).subscribe();
    };
    ;
    DriverMessageServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_sdk__["a" /* DespatchToDriverMessagesApi */]])
    ], DriverMessageServiceProvider);
    return DriverMessageServiceProvider;
}());

//# sourceMappingURL=driver-message-service.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(482);



Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(829);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_device__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_insomnia__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_launch_navigator__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_device_feedback__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_transfer__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_camera__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_network__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_barcode_scanner__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_in_app_browser__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_media__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_push__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_background_mode__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_diagnostic__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_sdk__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__shared_sdk_services_custom_logger_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_login_service_login_service__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_config_service_config_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_customerconn_service_customerconn_service__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_pdaparams_service_pdaparams_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_siteconfig_service_siteconfig_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_shared_service_shared_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_base_service_base_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_util_service_util_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_jsea_service_jsea_service__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_message_service_message_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_fixed_queue_service_fixed_queue_service__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_device_service_device_service__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_platform_ready_service_platform_ready_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_background_geolocation_service_background_geolocation_service__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__providers_gps_audit_service_gps_audit_service__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__providers_log_service_log_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_job_service_job_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__providers_event_service_event_service__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__providers_window_ref_service_window_ref_service__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__providers_sod_service_sod_service__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__providers_push_service_push_service__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__providers_exit_service_exit_service__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__providers_gps_service_gps_service__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__providers_job_changed_service_job_changed_service__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__providers_image_service_image_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__providers_image_file_service_image_file_service__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__providers_driver_message_service_driver_message_service__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__providers_connectivity_monitor_connectivity_monitor__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__providers_sync_service_sync_service__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__providers_job_replication_service_job_replication_service__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__providers_barcode_service_barcode_service__ = __webpack_require__(831);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__providers_jobnote_replication_service_jobnote_replication_service__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__providers_barcode_replication_service_barcode_replication_service__ = __webpack_require__(832);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__providers_jsea_answers_replication_service_jsea_answers_replication_service__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__providers_navigation_service_navigation_service__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__providers_attach_service_attach_service__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__providers_device_diagnostic_service_device_diagnostic_service__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__providers_sqlite_service_sqlite_service__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











//import { BackgroundGeolocation } from '@ionic-native/background-geolocation';





















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], { statusbarPadding: true }, {
                    links: [
                        { loadChildren: '../pages/barcode/barcode.module#BarcodePageModule', name: 'BarcodePage', segment: 'barcode', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/change/change.module#ChangePageModule', name: 'ChangePage', segment: 'change', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/device/device.module#DevicePageModule', name: 'DevicePage', segment: 'device', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gps/gps.module#GpsPageModule', name: 'GpsPage', segment: 'gps', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/image-text/image-text.module#ImageTextPageModule', name: 'ImageTextPage', segment: 'image-text', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/images/images.module#ImagesPageModule', name: 'ImagesPage', segment: 'images', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/job-detail-notes/job-detail-notes.module#JobDetailNotesPageModule', name: 'JobDetailNotesPage', segment: 'job-detail-notes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/job-details/job-details.module#JobDetailsPageModule', name: 'JobDetailsPage', segment: 'job-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jsea/jsea.module#JseaPageModule', name: 'JseaPage', segment: 'jsea', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/msgs/msgs.module#MsgsPageModule', name: 'MsgsPage', segment: 'msgs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pda/pda.module#PdaPageModule', name: 'PdaPage', segment: 'pda', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signature/signature.module#SignaturePageModule', name: 'SignaturePage', segment: 'signature', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_24__shared_sdk__["c" /* SDKBrowserModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"],
                    useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicErrorHandler */]
                },
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_diagnostic__["a" /* Diagnostic */],
                __WEBPACK_IMPORTED_MODULE_26__providers_login_service_login_service__["a" /* LoginServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_config_service_config_service__["a" /* ConfigServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_28__providers_customerconn_service_customerconn_service__["a" /* CustomerconnServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_30__providers_siteconfig_service_siteconfig_service__["a" /* SiteconfigServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_31__providers_shared_service_shared_service__["a" /* SharedServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_32__providers_base_service_base_service__["a" /* BaseServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_33__providers_util_service_util_service__["a" /* UtilServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_34__providers_jsea_service_jsea_service__["a" /* JseaServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_35__providers_message_service_message_service__["a" /* MessageServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_36__providers_fixed_queue_service_fixed_queue_service__["a" /* FixedQueueServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_37__providers_device_service_device_service__["a" /* DeviceServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_38__providers_platform_ready_service_platform_ready_service__["a" /* PlatformReadyServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_39__providers_background_geolocation_service_background_geolocation_service__["a" /* BackgroundGeolocationServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_41__providers_log_service_log_service__["a" /* LogServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_25__shared_sdk_services_custom_logger_service__["a" /* LoggerService */],
                __WEBPACK_IMPORTED_MODULE_40__providers_gps_audit_service_gps_audit_service__["a" /* GpsAuditServiceProvider */],
                //BackgroundGeolocation,
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_insomnia__["a" /* Insomnia */],
                __WEBPACK_IMPORTED_MODULE_42__providers_job_service_job_service__["a" /* JobServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_43__providers_event_service_event_service__["a" /* EventServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_44__providers_window_ref_service_window_ref_service__["a" /* WindowRefServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_45__providers_sod_service_sod_service__["a" /* SodServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_46__providers_push_service_push_service__["a" /* PushServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_47__providers_exit_service_exit_service__["a" /* ExitServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_48__providers_gps_service_gps_service__["a" /* GpsServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
                __WEBPACK_IMPORTED_MODULE_49__providers_job_changed_service_job_changed_service__["a" /* JobChangedServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_device_feedback__["a" /* DeviceFeedback */],
                __WEBPACK_IMPORTED_MODULE_50__providers_image_service_image_service__["a" /* ImageServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_51__providers_image_file_service_image_file_service__["a" /* ImageFileServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_52__providers_driver_message_service_driver_message_service__["a" /* DriverMessageServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_transfer__["b" /* FileTransferObject */],
                __WEBPACK_IMPORTED_MODULE_53__providers_connectivity_monitor_connectivity_monitor__["a" /* ConnectivityMonitorProvider */],
                __WEBPACK_IMPORTED_MODULE_54__providers_sync_service_sync_service__["a" /* SyncServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_media__["a" /* Media */],
                __WEBPACK_IMPORTED_MODULE_55__providers_job_replication_service_job_replication_service__["a" /* JobReplicationServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_56__providers_barcode_service_barcode_service__["a" /* BarcodeServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_57__providers_jobnote_replication_service_jobnote_replication_service__["a" /* JobnoteReplicationServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_58__providers_barcode_replication_service_barcode_replication_service__["a" /* BarcodeReplicationServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_59__providers_jsea_answers_replication_service_jsea_answers_replication_service__["a" /* JseaAnswersReplicationServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_60__providers_navigation_service_navigation_service__["a" /* NavigationServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_61__providers_attach_service_attach_service__["a" /* AttachServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_background_mode__["a" /* BackgroundMode */],
                __WEBPACK_IMPORTED_MODULE_62__providers_device_diagnostic_service_device_diagnostic_service__["a" /* DeviceDiagnosticServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_63__providers_sqlite_service_sqlite_service__["a" /* SqliteServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketBrowser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_socket_io_client__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_socket_io_client__);
/* tslint:disable */

/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module SocketBrowser
* @license MIT
* @description
* This module handle socket connections for web browsers, it will be DI Swapped
* depending on the platform environment.
* This module will be generated when the -d ng2web flag is set
**/
var SocketBrowser = /** @class */ (function () {
    function SocketBrowser() {
    }
    /**
     * @method connect
     * @param {string} url URL path to connect with the server.
     * @param {any} options Any socket.io v1 =< valid options
     * @return {any} Not currently a socket.ioClient for web Typings implemented.
     * @description
     * This method will return a valid socket connection.
     **/
    SocketBrowser.prototype.connect = function (url, options) {
        return __WEBPACK_IMPORTED_MODULE_0_socket_io_client__(url, options);
    };
    return SocketBrowser;
}());

//# sourceMappingURL=socket.browser.js.map

/***/ }),

/***/ 529:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IO; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* tslint:disable */

var IO = /** @class */ (function () {
    function IO(socket) {
        this.observables = {};
        this.socket = socket;
    }
    IO.prototype.emit = function (event, data) {
        this.socket.emit('ME:RT:1://event', {
            event: event,
            data: data
        });
    };
    IO.prototype.on = function (event) {
        if (this.observables[event]) {
            return this.observables[event];
        }
        var subject = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this.socket.on(event, function (res) { return subject.next(res); });
        this.observables[event] = subject.asObservable();
        return this.observables[event];
    };
    return IO;
}());

//# sourceMappingURL=io.service.js.map

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FireLoop; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(383);
/* tslint:disable */

var FireLoop = /** @class */ (function () {
    function FireLoop(socket, models) {
        this.socket = socket;
        this.models = models;
        this.references = {};
    }
    FireLoop.prototype.ref = function (model) {
        var name = model.getModelName();
        model.models = this.models;
        this.references[name] = new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* FireLoopRef */](model, this.socket);
        return this.references[name];
    };
    return FireLoop;
}());

//# sourceMappingURL=FireLoop.js.map

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FireLoopRef; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_merge__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_merge__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_merge__);
/* tslint:disable */





/**
 * @class FireLoopRef<T>
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * This class allows to create FireLoop References which will be in sync with
 * Server. It also allows to create FireLoop Reference Childs, that allows to
 * persist data according the generic model relationships.
 **/
var FireLoopRef = /** @class */ (function () {
    /**
    * @method constructor
    * @param {any} model The model we want to create a reference
    * @param {SocketConnection} socket Socket connection to handle events
    * @param {FireLoopRef<any>} parent Parent FireLoop model reference
    * @param {string} relationship The defined model relationship
    * @description
    * The constructor will receive the required parameters and then will register this reference
    * into the server, needed to allow multiple references for the same model.
    * This ids are referenced into this specific client connection and won't have issues
    * with other client ids.
    **/
    function FireLoopRef(model, socket, parent, relationship) {
        if (parent === void 0) { parent = null; }
        if (relationship === void 0) { relationship = null; }
        this.model = model;
        this.socket = socket;
        this.parent = parent;
        this.relationship = relationship;
        // Reference ID
        this.id = this.buildId();
        // Model Childs
        this.childs = {};
        // Disposable Events
        this.disposable = {};
        this.socket.emit("Subscribe." + (!parent ? model.getModelName() : parent.model.getModelName()), { id: this.id, scope: model.getModelName(), relationship: relationship });
        return this;
    }
    /**
    * @method dispose
    * @return {void}
    * @description
    * This method is super important to avoid memory leaks in the server.
    * This method requires to be called on components destroy
    *
    * ngOnDestroy() {
    *  this.someRef.dispose()
    * }
    **/
    FireLoopRef.prototype.dispose = function () {
        var _this = this;
        var subscription = this.operation('dispose', {}).subscribe(function () {
            Object.keys(_this.disposable).forEach(function (channel) {
                _this.socket.removeListener(channel, _this.disposable[channel]);
                _this.socket.removeAllListeners(channel);
            });
            subscription.unsubscribe();
        });
    };
    /**
    * @method upsert
    * @param {T} data Persisted model instance
    * @return {Observable<T>}
    * @description
    * Operation wrapper for upsert function.
    **/
    FireLoopRef.prototype.upsert = function (data) {
        return this.operation('upsert', data);
    };
    /**
    * @method create
    * @param {T} data Persisted model instance
    * @return {Observable<T>}
    * @description
    * Operation wrapper for create function.
    **/
    FireLoopRef.prototype.create = function (data) {
        return this.operation('create', data);
    };
    /**
    * @method remove
    * @param {T} data Persisted model instance
    * @return {Observable<T>}
    * @description
    * Operation wrapper for remove function.
    **/
    FireLoopRef.prototype.remove = function (data) {
        return this.operation('remove', data);
    };
    /**
    * @method remote
    * @param {string} method Remote method name
    * @param {any[]=} params Parameters to be applied into the remote method
    * @param {boolean} broadcast Flag to define if the method results should be broadcasted
    * @return {Observable<any>}
    * @description
    * This method calls for any remote method. It is flexible enough to
    * allow you call either built-in or custom remote methods.
    *
    * FireLoop provides this interface to enable calling remote methods
    * but also to optionally send any defined accept params that will be
    * applied within the server.
    **/
    FireLoopRef.prototype.remote = function (method, params, broadcast) {
        if (broadcast === void 0) { broadcast = false; }
        return this.operation('remote', { method: method, params: params, broadcast: broadcast });
    };
    /**
    * @method onRemote
    * @param {string} method Remote method name
    * @return {Observable<any>}
    * @description
    * This method listen for public broadcasted remote method results. If the remote method
    * execution is not public only the owner will receive the result data.
    **/
    FireLoopRef.prototype.onRemote = function (method) {
        var event = 'remote';
        if (!this.relationship) {
            event = this.model.getModelName() + "." + event;
        }
        else {
            event = this.parent.model.getModelName() + "." + this.relationship + "." + event;
        }
        return this.broadcasts(event, {});
    };
    /**
    * @method on
    * @param {string} event Event name
    * @param {LoopBackFilter} filter LoopBack query filter
    * @return {Observable<T>}
    * @description
    * Listener for different type of events. Valid events are:
    *   - change (Triggers on any model change Create, update, remove-)
    *   - value (Triggers on new entries)
    *   - child_added (Triggers when a child is added)
    *   - child_updated (Triggers when a child is updated)
    *   - child_removed (Triggers when a child is removed)
    **/
    FireLoopRef.prototype.on = function (event, filter) {
        if (filter === void 0) { filter = { limit: 100, order: 'id DESC' }; }
        if (event === 'remote') {
            throw new Error('The "remote" event is not allowed using "on()" method, use "onRemote()" instead');
        }
        var request;
        if (!this.relationship) {
            event = this.model.getModelName() + "." + event;
            request = { filter: filter };
        }
        else {
            event = this.parent.model.getModelName() + "." + this.relationship + "." + event;
            request = { filter: filter, parent: this.parent.instance };
        }
        if (event.match(/(value|change|stats)/)) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].merge(this.pull(event, request), this.broadcasts(event, request));
        }
        else {
            return this.broadcasts(event, request);
        }
    };
    /**
    * @method stats
    * @param {LoopBackFilter=} filter LoopBack query filter
    * @return {Observable<T>}
    * @description
    * Listener for real-time statistics, will trigger on every
    * statistic modification.
    * TIP: You can improve performance by adding memcached to LoopBack models.
    **/
    FireLoopRef.prototype.stats = function (filter) {
        return this.on('stats', filter);
    };
    /**
    * @method make
    * @param {any} instance Persisted model instance reference
    * @return {Observable<T>}
    * @description
    * This method will set a model instance into this a new FireLoop Reference.
    * This allows to persiste parentship when creating related instances.
    *
    * It also allows to have multiple different persisted instance references to same model.
    * otherwise if using singleton will replace a previous instance for a new instance, when
    * we actually want to have more than 1 instance of same model.
    **/
    FireLoopRef.prototype.make = function (instance) {
        var reference = new FireLoopRef(this.model, this.socket);
        reference.instance = instance;
        return reference;
    };
    /**
    * @method child
    * @param {string} relationship A defined model relationship
    * @return {FireLoopRef<T>}
    * @description
    * This method creates child references, which will persist related model
    * instances. e.g. Room.messages, where messages belongs to a specific Room.
    **/
    FireLoopRef.prototype.child = function (relationship) {
        // Return singleton instance
        if (this.childs[relationship]) {
            return this.childs[relationship];
        }
        // Try to get relation settings from current model
        var settings = this.model.getModelDefinition().relations[relationship];
        // Verify the relationship actually exists
        if (!settings) {
            throw new Error("Invalid model relationship " + this.model.getModelName() + " <-> " + relationship + ", verify your model settings.");
        }
        // Verify if the relationship model is public
        if (settings.model === '') {
            throw new Error("Relationship model is private, cam't use " + relationship + " unless you set your model as public.");
        }
        // Lets get a model reference and add a reference for all of the models
        var model = this.model.models.get(settings.model);
        model.models = this.model.models;
        // If everything goes well, we will store a child reference and return it.
        this.childs[relationship] = new FireLoopRef(model, this.socket, this, relationship);
        return this.childs[relationship];
    };
    /**
    * @method pull
    * @param {string} event Event name
    * @param {any} request Type of request, can be LB-only filter or FL+LB filter
    * @return {Observable<T>}
    * @description
    * This method will pull initial data from server
    **/
    FireLoopRef.prototype.pull = function (event, request) {
        var sbj = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        var that = this;
        var nowEvent = event + ".pull.requested." + this.id;
        this.socket.emit(event + ".pull.request." + this.id, request);
        function pullNow(data) {
            if (that.socket.removeListener) {
                that.socket.removeListener(nowEvent, pullNow);
            }
            sbj.next(data);
        }
        ;
        this.socket.on(nowEvent, pullNow);
        return sbj.asObservable();
    };
    /**
    * @method broadcasts
    * @param {string} event Event name
    * @param {any} request Type of request, can be LB-only filter or FL+LB filter
    * @return {Observable<T>}
    * @description
    * This will listen for public broadcasts announces and then request
    * for data according a specific client request, not shared with other clients.
    **/
    FireLoopRef.prototype.broadcasts = function (event, request) {
        var sbj = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        var channels = {
            announce: event + ".broadcast.announce." + this.id,
            broadcast: event + ".broadcast." + this.id
        };
        var that = this;
        // Announces Handler
        this.disposable[channels.announce] = function (res) {
            that.socket.emit(event + ".broadcast.request." + that.id, request);
        };
        // Broadcasts Handler
        this.disposable[channels.broadcast] = function (data) {
            sbj.next(data);
        };
        this.socket.on(channels.announce, this.disposable[channels.announce]);
        this.socket.on(channels.broadcast, this.disposable[channels.broadcast]);
        return sbj.asObservable();
    };
    /**
    * @method operation
    * @param {string} event Event name
    * @param {any} data Any type of data sent to the server
    * @return {Observable<T>}
    * @description
    * This internal method will run operations depending on current context
    **/
    FireLoopRef.prototype.operation = function (event, data) {
        if (!this.relationship) {
            event = this.model.getModelName() + "." + event + "." + this.id;
        }
        else {
            event = this.parent.model.getModelName() + "." + this.relationship + "." + event + "." + this.id;
        }
        var subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        var config = {
            data: data,
            parent: this.parent && this.parent.instance ? this.parent.instance : null
        };
        this.socket.emit(event, config);
        var resultEvent = '';
        if (!this.relationship) {
            resultEvent = this.model.getModelName() + ".value.result." + this.id;
        }
        else {
            resultEvent = this.parent.model.getModelName() + "." + this.relationship + ".value.result." + this.id;
        }
        this.socket.on(resultEvent, function (res) {
            if (res.error) {
                subject.error(res);
            }
            else {
                subject.next(res);
            }
        });
        if (event.match('dispose')) {
            setTimeout(function () { return subject.next(); });
        }
        // This event listener will be wiped within socket.connections
        this.socket.sharedObservables.sharedOnDisconnect.subscribe(function () { return subject.complete(); });
        return subject.asObservable().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error); }));
    };
    /**
    * @method buildId
    * @return {number}
    * @description
    * This internal method build an ID for this reference, this allows to have
    * multiple references for the same model or relationships.
    **/
    FireLoopRef.prototype.buildId = function () {
        return Date.now() + Math.floor(Math.random() * 100800) *
            Math.floor(Math.random() * 100700) *
            Math.floor(Math.random() * 198500);
    };
    return FireLoopRef;
}());

//# sourceMappingURL=FireLoopRef.js.map

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__(14);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error_service__ = __webpack_require__(18);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_service__ = __webpack_require__(23);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__real_time__ = __webpack_require__(382);
/* unused harmony namespace reexport */
/* tslint:disable */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Job__ = __webpack_require__(386);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__Job__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__JobChange__ = __webpack_require__(387);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TpmPdaController__ = __webpack_require__(388);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__TpmPdaController__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__GpsHistory__ = __webpack_require__(109);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Application__ = __webpack_require__(389);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Installation__ = __webpack_require__(390);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__Installation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Notification__ = __webpack_require__(391);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Push__ = __webpack_require__(392);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Mobile_event__ = __webpack_require__(393);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__SiteConfig__ = __webpack_require__(394);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_9__SiteConfig__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__DespatchToDriverMessages__ = __webpack_require__(395);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_10__DespatchToDriverMessages__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__JseaDriverQuestions__ = __webpack_require__(204);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__JseaDriverAnswers__ = __webpack_require__(396);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__JseaDriverAnswersChange__ = __webpack_require__(397);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Photocontainer__ = __webpack_require__(398);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Image__ = __webpack_require__(399);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__BarcodeHist__ = __webpack_require__(400);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__BarcodeHistChange__ = __webpack_require__(401);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__DeviceDiagnostics__ = __webpack_require__(175);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__SDKModels__ = __webpack_require__(15);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__logger_service__ = __webpack_require__(96);
/* unused harmony namespace reexport */
/* tslint:disable */





















//# sourceMappingURL=index.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the UtilServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var UtilServiceProvider = /** @class */ (function () {
    function UtilServiceProvider() {
        var _this = this;
        this.oneDay = 60 * 60 * 24 * 1000;
        this.scrollBarWidth = null;
        this.isEmpty = function (obj) {
            for (var key in obj) {
                if (obj.hasOwnProperty(key))
                    return false;
            }
            return true;
        };
        this.executionTime = function (str) {
            var duration = performance.now() - _this.startTime;
            //console.log(`============executionTime() upto ${str} took ${duration}ms======================`);
        };
        //console.log('Hello UtilServiceProvider Provider');
    }
    UtilServiceProvider.prototype.dateDiff = function (older, newer) {
        var data = {};
        // Elapsed milliseconds
        data.elapsed = newer.getTime() - older.getTime();
        // Elapsed Days
        data.days = Math.round((((data.elapsed / 1000) / 60) / 60) / 24);
        // Elapsed Hours
        data.hours = Math.round(((data.elapsed / 1000) / 60) / 60);
        // Elapsed Months
        var monthDiff = (newer.getMonth() + 1) - (older.getMonth() + 1);
        var yearDiff = newer.getFullYear() - older.getFullYear();
        data.months = monthDiff + (yearDiff * 12);
        // Return data
        return data;
    };
    UtilServiceProvider.prototype.arraysIdentical = function (array1, array2) {
        return (JSON.stringify(array1) === JSON.stringify(array2));
    };
    UtilServiceProvider.prototype.trimLeadingSpaces = function (s) {
        var index = 0;
        var lastLeadingString = -1;
        while (s.charCodeAt(index) < 33) {
            lastLeadingString++;
            index++;
        }
        if (lastLeadingString >= 0) {
            var sTrim = s.substr(lastLeadingString + 1);
            return sTrim;
        }
        else {
            return s;
        }
    };
    UtilServiceProvider.prototype.nameSort = function (a, b) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    };
    UtilServiceProvider.prototype.findArrayIndexByKey = function (data, key, value) {
        for (var i = 0; i < data.length; i++) {
            if (data[i][key] === value) {
                return i;
            }
        }
        return -1;
    };
    UtilServiceProvider.prototype.findArrayItemByKey = function (data, key, value) {
        //console.log("data in findArrayItemByKey::::" + data);
        for (var i = 0; i < data.length; i++) {
            if (data[i][key] === value) {
                return data[i];
            }
        }
        return null;
    };
    UtilServiceProvider.prototype.findArrayItemsByKey = function (data, key, value) {
        var retArray = [];
        for (var i = 0; i < data.length; i++) {
            if (data[i][key] === value) {
                retArray.push(data[i]);
            }
        }
        return retArray;
    };
    UtilServiceProvider.prototype.isNumber = function (n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };
    UtilServiceProvider.prototype.getParamFromURL = function (url, key) {
        var params = url.split("?");
        var value = "";
        if (params.length > 1) {
            params = params[1].split("&");
            for (var i = 0; (i < params.length) && (value === ""); i++) {
                if (params[i].indexOf(key) === 0) {
                    var param = params[i].split("=");
                    if (param.length > 1) {
                        value = param[1];
                    }
                }
            }
        }
        return decodeURIComponent(value);
    };
    UtilServiceProvider.prototype.getScrollbarWidth = function () {
        if (this.scrollBarWidth !== null) {
            return this.scrollBarWidth;
        }
        var outer = document.createElement("div");
        outer.style.visibility = "hidden";
        outer.style.width = "100px";
        outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps
        document.body.appendChild(outer);
        var widthNoScroll = outer.offsetWidth;
        // force scrollbars
        outer.style.overflow = "scroll";
        // add innerdiv
        var inner = document.createElement("div");
        inner.style.width = "100%";
        outer.appendChild(inner);
        var widthWithScroll = inner.offsetWidth;
        // remove divs
        outer.parentNode.removeChild(outer);
        this.scrollBarWidth = widthNoScroll - widthWithScroll;
        return this.scrollBarWidth;
    };
    /*  ShowDataErrorMessage(value, message) {
       if ((value === "Error") || (value === "")) {
         if (message === "") {
           message = "An Error has occured retrieving your data.  Please try again or return to the Previous Page.";
         }
         $(".tabContentContainer").html("");
         $("<div class='dataError'>" + message + "</div>").appendTo($(".tabContentContainer"));
         $(".tabContentContainer")[0].scrollIntoViewIfNeeded(false);
         return true;
       }
       else {
         return false;
       }
   
     } */
    /*  GetResponsiveScreenSize() {
       var visible = false;
       visible = $("#Screen-XS").is(":visible");
       if (visible === true) {
         return "XS";
       }
       visible = $("#Screen-SM").is(":visible");
       if (visible === true) {
         return "SM";
       }
       visible = $("#Screen-MD").is(":visible");
       if (visible === true) {
         return "MD";
       }
       visible = $("#Screen-LG").is(":visible");
       if (visible === true) {
         return "LG";
       }
       return "";
     } */
    UtilServiceProvider.prototype.copyObject = function (obj) {
        return JSON.parse(JSON.stringify(obj));
    };
    UtilServiceProvider.prototype.arrayUnique = function (array, property) {
        var a = array.concat();
        for (var i = 0; i < a.length; ++i) {
            for (var j = i + 1; j < a.length; ++j) {
                if (property === undefined) {
                    if (a[i] === a[j]) {
                        a.splice(j--, 1);
                    }
                }
                else {
                    var x = a[i][property];
                    var x2 = a[j][property];
                    if (x === x2) {
                        a.splice(j--, 1);
                    }
                }
            }
        }
        return a;
    };
    UtilServiceProvider.prototype.supplant = function (str, o) {
        return str.replace(/\{([^{}]*)\}/g, function (a, b) {
            var r = o[b];
            return typeof r === 'string' || typeof r === 'number' ? r : a;
        });
    };
    ;
    UtilServiceProvider.prototype.getFormattedTimestamp = function (date) {
        return this.supplant('{0}:{1}:{2}:{3}', [
            date.getHours(),
            date.getMinutes(),
            date.getSeconds(),
            date.getMilliseconds()
        ]);
    };
    ;
    UtilServiceProvider.prototype.getLogTimestamp = function (date) {
        return (date.toISOString());
    };
    ;
    UtilServiceProvider.prototype.getLocalTimestamp = function (date) {
        var tzo = -date.getTimezoneOffset();
        var dif = tzo >= 0 ? '+' : '-';
        function pad(num) {
            var norm = Math.abs(Math.floor(num));
            return (norm < 10 ? '0' : '') + norm;
        }
        ;
        return date.getFullYear()
            + '-' + pad(date.getMonth() + 1)
            + '-' + pad(date.getDate())
            + 'T' + pad(date.getHours())
            + ':' + pad(date.getMinutes())
            + ':' + pad(date.getSeconds())
            + dif + pad(tzo / 60)
            + ':' + pad(tzo % 60);
    };
    ;
    UtilServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UtilServiceProvider);
    return UtilServiceProvider;
}());

//# sourceMappingURL=util-service.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import 'reflect-metadata';
/*
  Generated class for the ClientConfigProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var ConfigServiceProvider = /** @class */ (function () {
    function ConfigServiceProvider() {
        //console.log('Hello ClientConfigProvider Provider');
        var _this = this;
        this._clientConfig = {
            clientId: '',
            serverIP: '',
            serverPort: 0,
            apiURL: '',
            API_VERSION: ''
        };
        //IMPORTANT Note: if appConfig.version < 2.35, then push notifications won't work properly.
        this.appConfig = {
            'version': '3.1.7',
            'build': 2,
            'logServerIP': 'opensyscon.com.au',
            'logServerPort': 5678
        };
        this.clientId = '';
        this.serverIP = '';
        this.serverPort = 0;
        this.apiURL = '';
        this.API_VERSION = '';
        this.setSiteDetails = function (siteDetails) {
            /*
            https://github.com/mean-expert-official/loopback-sdk-builder/wiki/4.-First-Steps
           */
            //this.apiURL = (siteDetails.url).slice(0, -4);
            _this.apiURL = siteDetails.url;
            //console.log("in setSiteDetails, this.apiURL is:::" + this.apiURL);
            _this.API_VERSION = 'api';
            localStorage.setItem('clientId', siteDetails.clientId);
            console.log("Set the clientId with :" + siteDetails.clientId);
            localStorage.setItem('apiURL', _this.apiURL);
            localStorage.setItem('API_VERSION', _this.API_VERSION);
            _this._clientConfig.clientId = siteDetails.clientId;
            _this._clientConfig.serverIP = siteDetails.serverIP;
            _this._clientConfig.serverPort = siteDetails.serverPort;
            _this._clientConfig.apiURL = _this.apiURL;
            _this._clientConfig.API_VERSION = _this.API_VERSION;
            localStorage.setItem('clientConfig', JSON.stringify(_this._clientConfig));
        };
        if (JSON.parse(localStorage.getItem('clientConfig'))) {
            this._clientConfig = JSON.parse(localStorage.getItem('clientConfig'));
            this.clientId = this._clientConfig.clientId;
            this.serverIP = this._clientConfig.serverIP;
            this.serverPort = this._clientConfig.serverPort;
            this.apiURL = this._clientConfig.apiURL;
            //console.log("this.apiURL is:::" + this.apiURL);
            this.API_VERSION = this._clientConfig.API_VERSION;
        }
        //console.log(' ======this._apiURL in config-service.ts is ::==============' + this.apiURL);
    } //End of the constructor
    ConfigServiceProvider.prototype.getSiteId = function () {
        return localStorage.getItem('clientId');
    };
    ConfigServiceProvider.prototype.getBaseUrl = function () {
        return localStorage.getItem('apiURL');
    };
    ConfigServiceProvider.prototype.getApiVersion = function () {
        return localStorage.getItem('API_VERSION');
    };
    ConfigServiceProvider.prototype.getClientConfig = function () {
        return JSON.parse(localStorage.getItem('clientConfig'));
    };
    ConfigServiceProvider.prototype.getServerIP = function () {
        return this.serverIP;
    };
    ConfigServiceProvider.prototype.getServerPort = function () {
        return this.serverPort;
    };
    ConfigServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ConfigServiceProvider);
    return ConfigServiceProvider;
}());

//# sourceMappingURL=config-service.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlatformReadyServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_device__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_insomnia__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_background_mode__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__log_service_log_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pdaparams_service_pdaparams_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__background_geolocation_service_background_geolocation_service__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_service_shared_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__siteconfig_service_siteconfig_service__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/*
  Generated class for the PlatformReadyServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var PlatformReadyServiceProvider = /** @class */ (function () {
    function PlatformReadyServiceProvider(device, logger, pdaParams, platform, insomnia, backgroundGeolocationService, sharedService, backgroundMode, siteConfig) {
        var _this = this;
        this.device = device;
        this.logger = logger;
        this.pdaParams = pdaParams;
        this.platform = platform;
        this.insomnia = insomnia;
        this.backgroundGeolocationService = backgroundGeolocationService;
        this.sharedService = sharedService;
        this.backgroundMode = backgroundMode;
        this.siteConfig = siteConfig;
        this.logParams = { site: this.pdaParams.getSiteId(), driver: this.pdaParams.getDriverId(), fn: 'PlatformReadyServiceProvider' };
        this.log = this.logger.getInstance(this.logParams);
        this.isready = false;
        this.bgenabled = false;
        //this.log.debug('Hello PlatformReadyServiceProvider Provider');
        this.pda_disable_diagnostics_bgps_on_logoff = (this.pdaParams.pda_disable_diagnostics_bgps_on_logoff || (this.siteConfig.getSiteConfigValue('PDA_DISABLE_DIAGNOSTICS_BGPS_ON_LOGOFF') == 'Y'));
        this.platform.ready().then(function (readySource) {
            var osplatform = _this.device.platform;
            if (osplatform != null) {
                _this.log.debug('Platform ready from :' + readySource);
                // Platform now ready, execute any required native code
                var model = _this.device.model;
                //var platforms = this.platform.platforms();
                var version = _this.device.version;
                var manufacturer = _this.device.manufacturer;
                if (_this.platform.is('cordova')) {
                    _this.isready = true;
                }
                //this.isready = false;
                _this.log.info("Device Model:" + model + ", Manufacturer:" + manufacturer + ", platform:" + osplatform + ", OS ver:" + version);
                if (model == 'CipherLab RS30') {
                    _this.log.debug("Device is a CipherLab RS30 " + model);
                }
                else {
                    _this.log.debug("Device is not a CipherLab RS30 HEAD scanning NOT Available: " + model);
                }
                // Keep screen on for our app
                _this.insomnia.keepAwake();
                _this.backgroundMode.on("enable").subscribe(function () {
                    _this.log.debug("BGMODE:::BGMODE ENABLED");
                });
                _this.backgroundMode.on("deactivate").subscribe(function () {
                    _this.log.debug("BGMODE:::BGMODE DEACTIVATED");
                    _this.bgenabled = false;
                });
                _this.backgroundMode.on("failure").subscribe(function () {
                    _this.log.debug("BGMODE:::BGMODE FAILED");
                });
                _this.backgroundMode.on("activate").subscribe(function () {
                    _this.log.debug("BGMODE:::BGMODE ACTIVATED WITH BGENABLED FLAG AS :" + _this.bgenabled);
                    if (_this.bgenabled == false) {
                        _this.backgroundMode.disableWebViewOptimizations();
                        _this.log.debug("BGMODE:::BG MODE ON EVENT FIRED !! DISABLEWEBVIEWOPTIMIZATIONS() CALLED!!");
                        _this.bgenabled = true;
                    }
                }, function (err) {
                    if (err.error === 'cordova_not_available' || err.error === 'plugin_not_available') {
                        _this.log.debug('activate:plugin not install');
                    }
                });
                _this.backgroundMode.on("disable").subscribe(function () {
                    _this.log.debug("BGMODE:::BGMODE DISABLED");
                    _this.bgenabled = false;
                }, function (err) {
                    _this.log.debug('BG MODE DISABLE: ERR = ' + err);
                });
                _this.backgroundMode.enable();
                _this.backgroundMode.setDefaults({
                    hidden: true, title: 'App is running in the background', text: 'Doing Background GPS...'
                });
                _this.platform.pause.subscribe(function () {
                    _this.pda_disable_diagnostics_bgps_on_logoff = (_this.pdaParams.pda_disable_diagnostics_bgps_on_logoff || (_this.siteConfig.getSiteConfigValue('PDA_DISABLE_DIAGNOSTICS_BGPS_ON_LOGOFF') == 'Y'));
                    _this.log.info("platform.pause: Inside this.platform.pause.subscribe() ");
                    if (!_this.sharedService.loginFlag && _this.pda_disable_diagnostics_bgps_on_logoff)
                        _this.log.info("PAUSE event fired: Background GPS will not fire because pda_disable_diagnostics_bgps_on_logoff is set to TRUE.");
                    else {
                        _this.log.info("PAUSE event fired: Background GPS about to START.");
                        _this.backgroundGeolocationService.start();
                    }
                    _this.sharedService.isAppinBackground = true;
                    _this.sharedService.PAUSE.next(true);
                });
                _this.platform.resume.subscribe(function () {
                    _this.log.info("RESUME event fired: Background GPS about to STOP.");
                    _this.backgroundGeolocationService.stop();
                    _this.sharedService.isAppinBackground = false;
                    _this.sharedService.RESUME.next(true);
                });
            }
        });
    } //constructor ends;
    PlatformReadyServiceProvider.prototype.isPlatformReady = function () {
        return this.isready;
    };
    PlatformReadyServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_5__log_service_log_service__["a" /* LogServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_insomnia__["a" /* Insomnia */], __WEBPACK_IMPORTED_MODULE_7__background_geolocation_service_background_geolocation_service__["a" /* BackgroundGeolocationServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_8__shared_service_shared_service__["a" /* SharedServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_background_mode__["a" /* BackgroundMode */],
            __WEBPACK_IMPORTED_MODULE_9__siteconfig_service_siteconfig_service__["a" /* SiteconfigServiceProvider */]])
    ], PlatformReadyServiceProvider);
    return PlatformReadyServiceProvider;
}());

//# sourceMappingURL=platform-ready-service.js.map

/***/ }),

/***/ 811:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogServiceInstance; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_sdk_lb_config__ = __webpack_require__(13);

var LogServiceInstance = /** @class */ (function () {
    function LogServiceInstance(http, context, driverId, logServerIP, logServerPort, pdaParams, sharedService, platform, utilService) {
        this.isEnabled = true;
        this.OSC_log = {
            Time: '',
            Localtime: '',
            Seq: 0,
            Logtype: '',
            Context: {
                site: '',
                driver: 0,
                fn: ''
            },
            Message: '',
            Tab: ''
        };
        this.http = http;
        this.context = context;
        this.driverId = driverId;
        this.logServerIP = logServerIP;
        this.logServerPort = logServerPort;
        this.pdaParams = pdaParams;
        //this.loggerService = new LoggerService();
        this.sharedService = sharedService;
        this.platform = platform;
        this.utilService = utilService;
        //console.log('Hello LogServiceInstance class');
    }
    LogServiceInstance.prototype.debug = function (arg) {
        if (__WEBPACK_IMPORTED_MODULE_0__shared_sdk_lb_config__["a" /* LoopBackConfig */].debuggable())
            console.debug(arg);
    };
    LogServiceInstance.prototype.warn = function (arg) {
        if (__WEBPACK_IMPORTED_MODULE_0__shared_sdk_lb_config__["a" /* LoopBackConfig */].debuggable())
            console.warn(arg);
    };
    return LogServiceInstance;
}()); //class LogServiceInstance ends here

LogServiceInstance.prototype._log = function (originalFn, args) {
    if (!this.isEnabled) {
        return;
    }
    var contentType = 'application/json; charset=UTF-8';
    var now = this.utilService.getFormattedTimestamp(new Date());
    var message = '', supplantData = [];
    var logstring = '';
    // LT - BAD - HACK - check driver id and if zero update context
    // Logger function should not know details of context or what a driver id is!!!!
    if (this.context.driver == 0 || (typeof this.context.driver == 'undefined'))
        //this.context.driver = this.pdaParamService.getDriverId();
        this.context.driver = Number(this.pdaParams.getDriverId());
    this.context.driver = Number(this.context.driver);
    // LT - for our OSC PDA app context is a JSON object so need to convert to string
    var lcontext = JSON.stringify(this.context);
    switch (args.length) {
        case 1:
            message = this.utilService.supplant("{0} - {1}: {2}", [now, lcontext, args[0]]);
            logstring = args[0];
            break;
        case 3:
            supplantData = args[2];
            message = this.utilService.supplant("{0} - {1}::{2}(\'{3}\')", [now, lcontext, args[0], args[1]]);
            this.logtype = args[0];
            logstring = this.utilService.supplant(args[1], supplantData);
            break;
        case 2:
            if (typeof args[1] === 'string') {
                message = this.utilService.supplant("{0} - {1}::{2}(\'{3}\')", [now, lcontext, args[0], args[1]]);
                this.logtype = args[0];
                logstring = args[1];
            }
            else {
                supplantData = args[1];
                message = this.utilService.supplant("{0} - {1}: {2}", [now, lcontext, args[0]]);
                logstring = this.utilService.supplant(args[0], supplantData);
            }
            break;
    }
    //this.loggerService[originalFn].call(null, this.utilService.supplant(message, supplantData));
    // LT - POST to log server
    /* The angular $http service cannot be used in the $log
     * decorator because it will cause a circular dependecy.
     * To overcome this  a direct ajax call should be made.
     * TODO - maybe use "request" https://github.com/request/request/blob/master/README.md instead of jQuery to reduce footprint
     */
    this.sharedService.seqno++;
    if (this.sharedService.seqno > 999)
        this.sharedService.seqno = 1;
    var d = new Date();
    this.OSC_log = {
        Time: this.utilService.getLogTimestamp(d),
        Localtime: this.utilService.getLocalTimestamp(d),
        Seq: this.sharedService.seqno,
        Logtype: originalFn,
        Context: this.context,
        Message: logstring,
        Tab: this.sharedService.tab
    };
    if (this.sharedService.isAppinBackground)
        this.OSC_log.Tab = "App is in the background.";
    var clientid = localStorage.getItem('clientId');
    if (clientid !== null && clientid !== '')
        this.OSC_log.Context.site = clientid.toUpperCase();
    else
        this.OSC_log.Context.site = 'UNSET';
    this.OSC_log.Context.driver = Number(this.pdaParams.getDriverId());
    var url = 'http://' + this.logServerIP + ':' + this.logServerPort;
    var data = JSON.stringify({
        '[====NewTPLUSMobilelog====]': this.OSC_log
    });
    this.http.post(url, data).subscribe(function (data) {
        //console.log("log test:::" + data);
    }, function (error) {
        //console.log("log test error:::" + error);
    });
    //this.http.open()
}; //LogServiceInstance.prototype._log() ends here
LogServiceInstance.prototype.log = function () {
    this._log('log', arguments);
};
LogServiceInstance.prototype.info = function () {
    this._log('info', arguments);
};
LogServiceInstance.prototype.warn = function () {
    this._log('warn', arguments);
};
LogServiceInstance.prototype.debug = function () {
    this._log('debug', arguments);
};
LogServiceInstance.prototype.error = function () {
    this._log('error', arguments);
};
LogServiceInstance.prototype.context = this.context;
//# sourceMappingURL=log-service-instance.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SDKBrowserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_core_error_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_core_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_custom_logger_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_custom_SDKModels__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__storage_storage_swaps__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__storage_cookie_browser__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__storage_storage_browser__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sockets_socket_browser__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__sockets_socket_driver__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__sockets_socket_connections__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_core_real_time__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_custom_Job__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_custom_JobChange__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_custom_TpmPdaController__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_custom_GpsHistory__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_custom_Application__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_custom_Installation__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_custom_Notification__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_custom_Push__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_custom_Mobile_event__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_custom_SiteConfig__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_custom_DespatchToDriverMessages__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_custom_JseaDriverQuestions__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_custom_JseaDriverAnswers__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_custom_JseaDriverAnswersChange__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_custom_Photocontainer__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_custom_Image__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_custom_BarcodeHist__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_custom_BarcodeHistChange__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_custom_DeviceDiagnostics__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__models_index__ = __webpack_require__(383);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_index__ = __webpack_require__(84);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_34__services_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__lb_config__ = __webpack_require__(13);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_35__lb_config__["a"]; });
/* unused harmony namespace reexport */
/* unused harmony reexport CookieBrowser */
/* unused harmony reexport StorageBrowser */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */
/**
* @module SDKModule
* @author Jonathan Casarrubias <t:@johncasarrubias> <gh:jonathanCasarrubias>
* @license MIT 2016 Jonathan Casarrubias
* @version 2.1.0
* @description
* The SDKModule is a generated Software Development Kit automatically built by
* the LoopBack SDK Builder open source module.
*
* The SDKModule provides Angular 2 >= RC.5 support, which means that NgModules
* can import this Software Development Kit as follows:
*
*
* APP Route Module Context
* ============================================================================
* import { NgModule }       from '@angular/core';
* import { BrowserModule }  from '@angular/platform-browser';
* // App Root
* import { AppComponent }   from './app.component';
* // Feature Modules
* import { SDK[Browser|Node|Native]Module } from './shared/sdk/sdk.module';
* // Import Routing
* import { routing }        from './app.routing';
* @NgModule({
*  imports: [
*    BrowserModule,
*    routing,
*    SDK[Browser|Node|Native]Module.forRoot()
*  ],
*  declarations: [ AppComponent ],
*  bootstrap:    [ AppComponent ]
* })
* export class AppModule { }
*
**/

































/**
* @module SDKBrowserModule
* @description
* This module should be imported when building a Web Application in the following scenarios:
*
*  1.- Regular web application
*  2.- Angular universal application (Browser Portion)
*  3.- Progressive applications (Angular Mobile, Ionic, WebViews, etc)
**/
var SDKBrowserModule = /** @class */ (function () {
    function SDKBrowserModule() {
    }
    SDKBrowserModule_1 = SDKBrowserModule;
    SDKBrowserModule.forRoot = function (internalStorageProvider) {
        if (internalStorageProvider === void 0) { internalStorageProvider = {
            provide: __WEBPACK_IMPORTED_MODULE_4__storage_storage_swaps__["a" /* InternalStorage */],
            useClass: __WEBPACK_IMPORTED_MODULE_8__storage_cookie_browser__["a" /* CookieBrowser */]
        }; }
        return {
            ngModule: SDKBrowserModule_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__services_core_auth_service__["a" /* LoopBackAuth */],
                __WEBPACK_IMPORTED_MODULE_2__services_custom_logger_service__["a" /* LoggerService */],
                __WEBPACK_IMPORTED_MODULE_3__services_custom_SDKModels__["a" /* SDKModels */],
                __WEBPACK_IMPORTED_MODULE_13__services_core_real_time__["a" /* RealTime */],
                __WEBPACK_IMPORTED_MODULE_14__services_custom_Job__["a" /* JobApi */],
                __WEBPACK_IMPORTED_MODULE_15__services_custom_JobChange__["a" /* JobChangeApi */],
                __WEBPACK_IMPORTED_MODULE_16__services_custom_TpmPdaController__["a" /* TpmPdaControllerApi */],
                __WEBPACK_IMPORTED_MODULE_17__services_custom_GpsHistory__["a" /* GpsHistoryApi */],
                __WEBPACK_IMPORTED_MODULE_18__services_custom_Application__["a" /* ApplicationApi */],
                __WEBPACK_IMPORTED_MODULE_19__services_custom_Installation__["a" /* InstallationApi */],
                __WEBPACK_IMPORTED_MODULE_20__services_custom_Notification__["a" /* NotificationApi */],
                __WEBPACK_IMPORTED_MODULE_21__services_custom_Push__["a" /* PushApi */],
                __WEBPACK_IMPORTED_MODULE_22__services_custom_Mobile_event__["a" /* Mobile_eventApi */],
                __WEBPACK_IMPORTED_MODULE_23__services_custom_SiteConfig__["a" /* SiteConfigApi */],
                __WEBPACK_IMPORTED_MODULE_24__services_custom_DespatchToDriverMessages__["a" /* DespatchToDriverMessagesApi */],
                __WEBPACK_IMPORTED_MODULE_25__services_custom_JseaDriverQuestions__["a" /* JseaDriverQuestionsApi */],
                __WEBPACK_IMPORTED_MODULE_26__services_custom_JseaDriverAnswers__["a" /* JseaDriverAnswersApi */],
                __WEBPACK_IMPORTED_MODULE_27__services_custom_JseaDriverAnswersChange__["a" /* JseaDriverAnswersChangeApi */],
                __WEBPACK_IMPORTED_MODULE_28__services_custom_Photocontainer__["a" /* PhotocontainerApi */],
                __WEBPACK_IMPORTED_MODULE_29__services_custom_Image__["a" /* ImageApi */],
                __WEBPACK_IMPORTED_MODULE_30__services_custom_BarcodeHist__["a" /* BarcodeHistApi */],
                __WEBPACK_IMPORTED_MODULE_31__services_custom_BarcodeHistChange__["a" /* BarcodeHistChangeApi */],
                __WEBPACK_IMPORTED_MODULE_32__services_custom_DeviceDiagnostics__["a" /* DeviceDiagnosticsApi */],
                internalStorageProvider,
                { provide: __WEBPACK_IMPORTED_MODULE_4__storage_storage_swaps__["b" /* SDKStorage */], useClass: __WEBPACK_IMPORTED_MODULE_9__storage_storage_browser__["a" /* StorageBrowser */] },
                { provide: __WEBPACK_IMPORTED_MODULE_11__sockets_socket_driver__["a" /* SocketDriver */], useClass: __WEBPACK_IMPORTED_MODULE_10__sockets_socket_browser__["a" /* SocketBrowser */] }
            ]
        };
    };
    SDKBrowserModule = SDKBrowserModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_6__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */]],
            declarations: [],
            exports: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_0__services_core_error_service__["a" /* ErrorHandler */],
                __WEBPACK_IMPORTED_MODULE_12__sockets_socket_connections__["a" /* SocketConnection */]
            ]
        })
    ], SDKBrowserModule);
    return SDKBrowserModule;
    var SDKBrowserModule_1;
}());

/**
* Have Fun!!!
* - Jon
**/






//# sourceMappingURL=index.js.map

/***/ }),

/***/ 831:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarcodeServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pdaparams_service_pdaparams_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__log_service_log_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_shared_service__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the BarcodeServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var BarcodeServiceProvider = /** @class */ (function () {
    function BarcodeServiceProvider(pdaParams, logger, sharedService) {
        var _this = this;
        this.pdaParams = pdaParams;
        this.logger = logger;
        this.sharedService = sharedService;
        //When App starts Get from localstorage
        this.syncrequired = localStorage.getItem('BARCODES_SYNC_REQD');
        this.logParams = { site: this.pdaParams.getSiteId(), driver: this.pdaParams.getDriverId(), fn: 'BackgroundGeolocationServiceProvider' };
        this.log = this.logger.getInstance(this.logParams);
        this.apponline = true;
        this.barcode_sync = lbclient.barcode_sync;
        //This is called from BarcodeCtrl and will update Local Storage
        this.setSyncRequired = function (val) {
            localStorage.setItem('BARCODES_SYNC_REQD', val);
            _this.log.debug(" setSyncRequired:" + val);
            _this.syncrequired = val;
        };
        //console.log('Hello BarcodeServiceProvider Provider');
        this.syncrequired = (this.syncrequired == "true");
        this.sharedService.APP_ON_LINE.subscribe(function (event) {
            _this.syncrequired = localStorage.getItem('BARCODES_SYNC_REQD');
            _this.syncrequired = (_this.syncrequired == "true");
            _this.apponline = localStorage.getItem('APP_CONECTIVITY');
            _this.apponline = (_this.apponline == "true");
            _this.log.debug(" APP_ON_LINE: Syncrequired = " + _this.syncrequired + " AppOnline From LocaStorage = " + _this.apponline);
            //If the last state from localstorage was offline the sync if required
            if (_this.syncrequired && _this.apponline == false) {
                _this.log.debug(" SYNC Required and apponline from LStorage is FALSE so will barcode_sync:" + event);
                _this.barcode_sync();
                localStorage.setItem('BARCODES_SYNC_REQD', 'false');
            }
            //Now Update Local Storage
            _this.apponline = true;
            localStorage.setItem('APP_CONECTIVITY', _this.apponline);
        });
        this.sharedService.APP_OFF_LINE.subscribe(function (event) {
            _this.apponline = false;
            localStorage.setItem('APP_CONECTIVITY', _this.apponline);
        });
    } //End of the constructor.
    BarcodeServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__log_service_log_service__["a" /* LogServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__shared_service_shared_service__["a" /* SharedServiceProvider */]])
    ], BarcodeServiceProvider);
    return BarcodeServiceProvider;
}());

//# sourceMappingURL=barcode-service.js.map

/***/ }),

/***/ 832:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarcodeReplicationServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

;
/*
  Generated class for the BarcodeReplicationServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var BarcodeReplicationServiceProvider = /** @class */ (function () {
    function BarcodeReplicationServiceProvider() {
        //console.log('Hello BarcodeReplicationServiceProvider Provider');
        var _this = this;
        this.LocalBarcodeHist = lbclient.models.LocalBarcodeHist;
        this.RemoteBarcodeHist = lbclient.models.RemoteBarcodeHist;
        this.models = lbclient.models;
        this.lastFilter = {};
        this.d = new Date();
        this.since = { push: -1, pull: -1 };
        this.barcode_sync = function (callback, filter) {
            var options = { filter: '', lastFilter: '' };
            var cb = null;
            cb = callback;
            options.filter = filter;
            options.lastFilter = filter;
            _this.lastFilter = filter;
            var counter = 0;
            //console.log(new Date().toISOString() + ': starting replication');
            // LT - 10/12/2015 - original code - does remote first
            _this.LocalBarcodeHist.replicate(_this.since.push, _this.RemoteBarcodeHist, options, function (err, conflicts, cps) {
                _this.since.push = cps;
                _this.LocalBarcodeHist.replicate(_this.since.push, _this.RemoteBarcodeHist, options, function (err, conflicts, cps) {
                    _this.since.pull = cps;
                    // console.log(new Date().toISOString() + ': finished replication');
                    cb && cb(err, conflicts);
                });
            });
        };
        this.LocalBarcodeHist.on('before save', function (ctx, next) {
            next();
        });
        // sync local changes if connected
        this.LocalBarcodeHist.on('after save', function (ctx, next) {
            next();
            this.barcode_sync();
        });
        this.LocalBarcodeHist.on('after delete', function (ctx, next) {
            next();
            this.barcode_sync();
        });
    }
    BarcodeReplicationServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], BarcodeReplicationServiceProvider);
    return BarcodeReplicationServiceProvider;
}());

//# sourceMappingURL=barcode-replication-service.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_index__ = __webpack_require__(548);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_index__ = __webpack_require__(549);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__custom_index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__custom_index__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__custom_index__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__custom_index__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__custom_index__["e"]; });
/* tslint:disable */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lb_config__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */


/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@johncasarrubias>
* @module LoggerService
* @license MIT
* @description
* Console Log wrapper that can be disabled in production mode
**/
var LoggerService = /** @class */ (function () {
    function LoggerService() {
    }
    LoggerService.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.log.apply(console, args);
    };
    LoggerService.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.info.apply(console, args);
    };
    LoggerService.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.error.apply(console, args);
    };
    LoggerService.prototype.count = function (arg) {
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.count(arg);
    };
    LoggerService.prototype.group = function (arg) {
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.count(arg);
    };
    LoggerService.prototype.groupEnd = function () {
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.groupEnd();
    };
    LoggerService.prototype.profile = function (arg) {
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.count(arg);
    };
    LoggerService.prototype.profileEnd = function () {
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.profileEnd();
    };
    LoggerService.prototype.time = function (arg) {
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.time(arg);
    };
    LoggerService.prototype.timeEnd = function (arg) {
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.timeEnd(arg);
    };
    LoggerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], LoggerService);
    return LoggerService;
}());

//# sourceMappingURL=logger.service.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GpsHistory; });
/* tslint:disable */
var GpsHistory = /** @class */ (function () {
    function GpsHistory(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `GpsHistory`.
     */
    GpsHistory.getModelName = function () {
        return "GpsHistory";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of GpsHistory for dynamic purposes.
    **/
    GpsHistory.factory = function (data) {
        return new GpsHistory(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    GpsHistory.getModelDefinition = function () {
        return {
            name: 'GpsHistory',
            plural: 'gpsHistorys',
            path: 'gpsHistorys',
            idName: 'gps_driver_id',
            properties: {
                "gps_driver_id": {
                    name: 'gps_driver_id',
                    type: 'number'
                },
                "gps_timestamp": {
                    name: 'gps_timestamp',
                    type: 'Date'
                },
                "gps_latitude": {
                    name: 'gps_latitude',
                    type: 'number'
                },
                "gps_longitude": {
                    name: 'gps_longitude',
                    type: 'number'
                },
                "gps_quality": {
                    name: 'gps_quality',
                    type: 'number'
                },
                "gps_time": {
                    name: 'gps_time',
                    type: 'number'
                },
                "gps_heading": {
                    name: 'gps_heading',
                    type: 'number'
                },
                "gps_speed": {
                    name: 'gps_speed',
                    type: 'number'
                },
                "mobjobNumber": {
                    name: 'mobjobNumber',
                    type: 'number'
                },
                "mobjobBookingDay": {
                    name: 'mobjobBookingDay',
                    type: 'Date'
                },
                "mobjobStatus": {
                    name: 'mobjobStatus',
                    type: 'string'
                },
            },
            relations: {}
        };
    };
    return GpsHistory;
}());

//# sourceMappingURL=GpsHistory.js.map

/***/ })

},[477]);
//# sourceMappingURL=main.js.map