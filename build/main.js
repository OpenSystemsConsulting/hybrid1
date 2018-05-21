webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GpsHistory; });
/* tslint:disable */
var GpsHistory = (function () {
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

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gpshistoryapi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_search_params__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_error_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__ = __webpack_require__(29);
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
var gpshistoryapi = (function (_super) {
    __extends(gpshistoryapi, _super);
    function gpshistoryapi(http, connection, models, auth, searchParams, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, searchParams, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.searchParams = searchParams;
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
    gpshistoryapi.prototype.patchOrCreate = function (data, customHeaders) {
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
    gpshistoryapi.prototype.patchAttributes = function (id, data, customHeaders) {
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
    gpshistoryapi.prototype.getModelName = function () {
        return "GpsHistory";
    };
    return gpshistoryapi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));
gpshistoryapi = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */])),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */])),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
    __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
    __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */])),
    __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */])),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */],
        __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
        __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
        __WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */],
        __WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */]])
], gpshistoryapi);

//# sourceMappingURL=GpsHistory.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__log_service_log_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pdaparams_service_pdaparams_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__siteconfig_service_siteconfig_service__ = __webpack_require__(31);
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
var JobServiceProvider = (function () {
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
        daysback = 2;
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
                    _this.log.info("deleteOldJobs: delete leg:" + leg + " job:" + _this.job.mobjobSeq);
                    //Riyaz: Deletes jobs from the local storage. 
                    _this.job.delete();
                }
            });
        }
    };
    return JobServiceProvider;
}());
JobServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__log_service_log_service__["a" /* LogServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_3__pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_4__siteconfig_service_siteconfig_service__["a" /* SiteconfigServiceProvider */]])
], JobServiceProvider);

//# sourceMappingURL=job-service.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SodServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__log_service_log_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pdaparams_service_pdaparams_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__siteconfig_service_siteconfig_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service_shared_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__jsea_service_jsea_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__message_service_message_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__event_service_event_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__job_service_job_service__ = __webpack_require__(110);
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
var SodServiceProvider = (function () {
    function SodServiceProvider(jobService, pdaParams, siteConfig, logger, sharedService, jseaService, messageService, alertCtrl, eventService) {
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
                    this.eventService.sendMsg('LOGOFF', '');
                    this.log.debug(" prevResumeDay != mycurday mycurday = " + this.mycurday);
                    //$rootScope.$broadcast('SODSERVICE_IS_NEW_DAY');
                    this.sharedService.SODSERVICE_IS_NEW_DAY.next(true);
                    localStorage.setItem('SODSERVICE_IS_NEW_DAY', 'true');
                    // Get site config parameters from server
                    var result$ = this.siteConfig
                        .loadAllConfigsFromServer()
                        .subscribe(function (result) {
                        console.log("Site Config Reloaded!");
                    }, function (error) {
                        _this.showError("Unable to load Site Configs.Please check your connection.");
                        return;
                    });
                    this.jobService.deleteOldJobs('');
                    this.jseaService.deleteOldData();
                    // NOTE - should really be done only after we've deleted data
                    // so perhaps in a callback wrapper?
                    this.messageService.clearChangeData();
                }
                else {
                    this.log.debug('Not new date');
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
                // Get site config parameters from server
                var result$ = this.siteConfig
                    .loadAllConfigsFromServer()
                    .subscribe(function (result) {
                    console.log("Site Config Reloaded!");
                }, function (error) {
                    _this.showError("Unable to load Site Configs.Please check your connection.");
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
            buttons: ['OK']
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
    return SodServiceProvider;
}());
SodServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__job_service_job_service__["a" /* JobServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_3__pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__siteconfig_service_siteconfig_service__["a" /* SiteconfigServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_2__log_service_log_service__["a" /* LogServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__shared_service_shared_service__["a" /* SharedServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_6__jsea_service_jsea_service__["a" /* JseaServiceProvider */], __WEBPACK_IMPORTED_MODULE_7__message_service_message_service__["a" /* MessageServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_8__event_service_event_service__["a" /* EventServiceProvider */]])
], SodServiceProvider);

//# sourceMappingURL=sod-service.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExitServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gps_service_gps_service__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__event_service_event_service__ = __webpack_require__(87);
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
var ExitServiceProvider = (function () {
    function ExitServiceProvider(http, eventService, gpsService, alert, platform) {
        this.http = http;
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
        /*alert("This will exit the application and stop sending GPS");
          this.gpsService.setSendGps(false);
          this.eventService.sendMsg('LOGOFF', '');
          navigator.app.exitApp(); */
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
    return ExitServiceProvider;
}());
ExitServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5__event_service_event_service__["a" /* EventServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_4__gps_service_gps_service__["a" /* GpsServiceProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* Platform */]])
], ExitServiceProvider);

//# sourceMappingURL=exit-service.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PushServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_push__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_media__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__config_service_config_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__log_service_log_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pdaparams_service_pdaparams_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__platform_ready_service_platform_ready_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_service_shared_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__util_service_util_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_sdk_services__ = __webpack_require__(69);
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
var PushServiceProvider = (function () {
    function PushServiceProvider(http, pdaParams, logger, platformReady, configService, device, push, media, installationApi, alertCtrl, sharedService, utilService) {
        this.http = http;
        this.pdaParams = pdaParams;
        this.logger = logger;
        this.platformReady = platformReady;
        this.configService = configService;
        this.device = device;
        this.push = push;
        this.media = media;
        this.installationApi = installationApi;
        this.alertCtrl = alertCtrl;
        this.sharedService = sharedService;
        this.utilService = utilService;
        /* "senderID" is "Project Number" from Google Developers Console (https://console.firebase.google.com)
          NOTE that there is also a server component involved - see API key in /app/strongloop/OSC-API/server/gcm_config.js */
        this.androidConfig = {
            senderID: "993694312238",
        };
        this.iosConfig = {
            badge: true,
            sound: true,
            alert: true,
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
        this.lastSoundTime = Math.round(new Date().getTime() / 1000); // init when service instantiates
        this.logParams = { site: this.pdaParams.getSiteId(), driver: this.pdaParams.getDriverId(), fn: 'PushServiceProvider' };
        this.log = this.logger.getInstance(this.logParams);
        //console.log('Hello PushServiceProvider Provider');
    }
    PushServiceProvider.prototype.registerForPush = function () {
        var _this = this;
        //console.log("Register for push called!");
        var openPopup = true;
        this.log.debug('registerForPush: isready:' + this.platformReady.isPlatformReady() + ', driverId:' + this.pdaParams.driverId + ', registered:' + this.registered);
        //If Device ready , driver > 0 and we are not already registered then do it
        if (this.platformReady.isPlatformReady() && this.pdaParams.driverId > 0 && this.registered == false) {
            // Determine platform e.g. 'Android', 'iOS'
            var platform = this.device.platform;
            if (platform != null) {
                var deviceType = platform.toLowerCase(); // lowercase for loopback installations collection
                var mycurrent_drivernum = this.pdaParams.driverId;
                // initialise the push plugin - phonegap-plugin-push
                this.pushObject = this.push.init(this.pushOptions);
                this.pushObject.on('registration').subscribe(function (data) {
                    var token = data.registrationId;
                    var msg = 'Ionic Push register for Driver ' + mycurrent_drivernum + ' : token:' + token;
                    _this.log.info(msg);
                    //Init an Object to insert into installation table if our filter below gets empty or filter 
                    // returns not the same as the current token just got from Google
                    var installation_object = {
                        "appId": "osc-push-demo",
                        "userId": mycurrent_drivernum,
                        "deviceToken": token,
                        "deviceType": deviceType,
                        "pdaVersion": _this.pdaParams.getAppVersion()
                    };
                    var filter = { "where": { "deviceToken": token } };
                    _this.log.debug(platform + 'IonicPush.register: check for current registration, filter:' + JSON.stringify(filter));
                    _this.installationApi.find(filter).subscribe(function (data) {
                        // Try and ensure that there only ever one row for a driver or a token
                        // TODO - remove any registrations for this token but NOT for this driver
                        // TODO - remove any registrations for this driver but NOT for this token
                        // Then register current token for current driver
                        if (_this.utilService.isEmpty(data) || data === null) {
                            _this.log.info(platform + 'IonicPush.register: no current registration found in installations, saving...');
                            //This registers the Google Token with Strongloop and our Database
                            _this.installationApi.create(installation_object).subscribe(function (data) {
                                // Save data to local storage (it also gets put into $rootScope below)
                                localStorage.setItem('osc-push-credentials', JSON.stringify(installation_object));
                                var alertPopup = _this.alertCtrl.create({
                                    title: 'Device registered',
                                    message: token
                                });
                                alertPopup.present();
                            }, function (error) {
                                _this.log.error(platform + 'IonicPush.register: failed error:' + error);
                            });
                        }
                        else {
                            _this.log.info(platform + ':IonicPush.register: current registration already found in installations');
                            _this.log.debug(platform + ':IonicPush.register: data:' + JSON.stringify(data));
                        }
                        _this.registered = true; // we've either just registered or we were already registered
                    });
                });
                /*Job Cancel notification*/
                this.pushObject.on('notification').subscribe(function (notification) {
                    _this.log.debug(platform + 'IonicPush:notificationReceived:' + JSON.stringify(notification));
                    // notification object will at least have "message" string and "additionalData" object
                    /* New possible elements in "additionalData":
                        foreground: true/false 			- sent by phonegap-plugin-push
                        content-available : "1"			- added by OSC-API server to allow background notifications
                    */
                    // If there is a payload type we use that as the broadcast event with the supplied payload
                    var payload = notification.additionalData.payload || {};
                    if (payload.type) {
                        // Add platform to payload
                        payload.platform = platform; // event handler may need to know this
                        // If a sound has been provided add to payload (normally iOS)
                        if (notification.sound)
                            payload.sound = notification.sound;
                        // If server requests we play the sound do it here
                        if (payload.playsound) {
                            var sound;
                            switch (payload.platform) {
                                case 'Android':
                                    sound = payload.sound || "/android_asset/www/assets/audio/notification.mp3";
                                    break;
                                case 'iOS':
                                    if (payload.hasOwnProperty('sound')) {
                                        sound = payload.sound;
                                    }
                                    else {
                                        // NOTE - this does not appear to work - ensure we send correct sound property for iOS
                                        sound = "file://www/assets/audio/notification.aiff";
                                    }
                                    break;
                                default:
                                    sound = 'default';
                                    break;
                            }
                            _this.log.debug(platform + 'IonicPush:notificationReceived:sound now:[' + sound + ']');
                            if (sound != "") {
                                // Had issues when processing lots of notifications with soumds in quick succession
                                // So only do this if no sound received within last 10 seconds
                                _this.newSoundTime = Math.round(new Date().getTime() / 1000);
                                if ((_this.newSoundTime - _this.lastSoundTime) > 10) {
                                    _this.lastSoundTime = Math.round(new Date().getTime() / 1000);
                                    _this.notificationSnd = _this.media.create(sound);
                                    _this.notificationSnd.play();
                                    // Maybe turn up the volume?	(0.0 - 1.0)
                                    //notificationSnd.setVolume(1.0);
                                    _this.notificationSnd.onError.subscribe(function (err) {
                                        _this.log.error(platform + 'IonicPush:notificationReceived:play error:[' + sound + '][' + JSON.stringify(err) + ']');
                                    });
                                }
                            }
                        }
                        _this.log.debug(platform + 'IonicPush:about to broadcast:' + payload.type + ':payload:' + JSON.stringify(payload));
                        //if notification.additionalData.payload.type="CANCEL", then call next on CANCEL subject.
                        if (payload.type === "CANCEL") {
                            _this.sharedService.CANCEL.next(payload);
                        }
                        //if notification.additionalData.payload.type="NEWJOB", then call next on NEWJOB subject.
                        if (payload.type === "NEWJOB") {
                            _this.sharedService.NEWJOB.next(payload);
                        }
                        //if notification.additionalData.payload.type="RESUME", then call next on RESUME subject.
                        if (payload.type === "RESUME") {
                            _this.sharedService.RESUME.next(payload);
                        }
                        //if notification.additionalData.payload.type="DESTROY", then call next on DESTROY subject.
                        if (payload.type === "DESTROY") {
                            _this.sharedService.DESTROY.next(payload);
                        }
                    }
                    else {
                        // no payload type provided simply broadcast a received event with the full notification
                        // add platform to notification so we can check in the event handler
                        notification.platform = platform;
                        _this.log.debug(platform + 'IonicPush:about to broadcast:' + 'pushNotificationReceived');
                        // $rootScope.$broadcast('pushNotificationReceived', notification);	// broadcast to the world
                        _this.sharedService.pushNotificationReceived.next(notification);
                    }
                });
                this.pushObject.on('error').subscribe(function (error) {
                    return _this.log.error(platform + ':Ionic push plugin:errorOccurred:' + JSON.stringify(error));
                });
            } // if (platform != null)  ends here
        } //isPlatformReady() ends here
    }; ///registerForPush() ends here
    // unRegister() {
    //   var options = {};
    //   if (this.platformReady.isPlatformReady() && this.pdaParams.driverId > 0) {
    //     var platform = this.device.platform;
    //     this.log.info(platform + ':unRegister: isready:' + this.platformReady.isPlatformReady() + ', driverId:' + this.pdaParams.driverId);
    //     // WARNING: dangerous to unregister (results in loss of tokenID)
    //     IonicPushV5.unregister(function () {
    //       // Success!
    //       this.log.info(platform + ':sunregister:success');
    //       this.registered = false;
    //       var alertPopup = $ionicPopup.alert({
    //         title: 'Messaging',
    //         template: 'Device successfully de-registered'
    //       });
    //     }, function (err) {
    //       // Error
    //       this.log.error(platform + ':unregister:error:' + err);
    //     })
    //     // LT - unregister appeared to work on testing but I did not receive a popup or any error logging
    //     // Set to false anyway so we can try and get another token
    //     this.registered = false;
    //   }
    // } //unRegister() ends here
    PushServiceProvider.prototype.getIsRegistered = function () {
        return this.registered;
    };
    return PushServiceProvider;
}());
PushServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_9__pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_8__log_service_log_service__["a" /* LogServiceProvider */], __WEBPACK_IMPORTED_MODULE_10__platform_ready_service_platform_ready_service__["a" /* PlatformReadyServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_7__config_service_config_service__["a" /* ConfigServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_push__["a" /* Push */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_media__["a" /* Media */],
        __WEBPACK_IMPORTED_MODULE_13__shared_sdk_services__["b" /* InstallationApi */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_11__shared_service_shared_service__["a" /* SharedServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_12__util_service_util_service__["a" /* UtilServiceProvider */]])
], PushServiceProvider);

//# sourceMappingURL=push-service.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignaturePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_sdk_index__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config_service_config_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_pdaparams_service_pdaparams_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_shared_service_shared_service__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the SignaturePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 *
 * See: http://www.9lessons.info/2017/04/ionic-3-and-angular-4-working-with.html
 */
var SignaturePage = (function () {
    function SignaturePage(navCtrl, navParams, configService, viewCtrl, pdaParams, sharedService) {
        //console.log("SignaturePage loading...");
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.configService = configService;
        this.viewCtrl = viewCtrl;
        this.pdaParams = pdaParams;
        this.sharedService = sharedService;
        this.loginFlag = this.pdaParams.isDrvLoggedOn();
        this.signaturePadModel = {
            'podname': '',
            'signatureConfirm': false
        };
        this.signaturePadOptions = {
            /*  'minWidth': 2,
             'canvasWidth': 340,
             'canvasHeight': 200 */
            'backgroundColor': '#FFF',
            'minWidth': 1,
            'maxWidth': 1.5,
            'dotSize': 3,
            'penColor': 'rgb(66, 133, 244)',
            'onEnd': function () {
                //this.signature.image = this.signaturePad.toDataURL();
                this.signature = this.signaturePad.toDataURL();
            }
        };
        __WEBPACK_IMPORTED_MODULE_3__shared_sdk_index__["b" /* LoopBackConfig */].setBaseURL(configService.apiURL);
        __WEBPACK_IMPORTED_MODULE_3__shared_sdk_index__["b" /* LoopBackConfig */].setApiVersion(configService.API_VERSION);
    }
    SignaturePage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad SignaturePage');
        this.signature = localStorage.getItem("signature");
        if (this.signature)
            this.signaturePad.fromDataURL(this.signature);
        this.signaturePadModel.podname = "";
    };
    //Other Functions
    SignaturePage.prototype.drawCancel = function () {
        this.signaturePadModel.signatureConfirm = false;
        this.signaturePadModel.podname = "";
        this.signaturePad.clear();
        this.signature = null;
        this.navCtrl.pop();
    };
    SignaturePage.prototype.save = function () {
        this.signature = this.signaturePad.toDataURL();
        localStorage.setItem("signature", this.signature);
        this.podname = this.signaturePadModel.podname;
        this.signaturePadModel.podname = '';
        this.signaturePadModel.signatureConfirm = false;
        this.viewCtrl.dismiss({
            podname: this.podname,
            signature: this.signature
        });
    };
    SignaturePage.prototype.clear = function () {
        this.signaturePadModel.signatureConfirm = false;
        this.signaturePad.clear();
        this.signature = null;
        localStorage.removeItem("signature");
        this.signaturePadModel.podname = "";
    };
    SignaturePage.prototype.canvasResize = function () {
        var canvas = document.querySelector('canvas');
        this.signaturePad.set('minWidth', 1);
        this.signaturePad.set('canvasWidth', canvas.offsetWidth);
        this.signaturePad.set('canvasHeight', canvas.offsetHeight);
    };
    SignaturePage.prototype.disableAcceptButton = function () {
        this.signature = this.signaturePad.toDataURL();
        return !(this.signaturePadModel.signatureConfirm && this.signature && this.signaturePadModel.podname);
    };
    return SignaturePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__["SignaturePad"]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__["SignaturePad"])
], SignaturePage.prototype, "signaturePad", void 0);
SignaturePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-signature',template:/*ion-inline-start:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/signature/signature.html"*/'<!--\n\n  Generated template for the SignaturePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n      <ion-buttons left>\n\n          <span [ngSwitch]="this.sharedService.loginFlag">      \n\n            <ion-badge class="common-border"  color="secondary" *ngSwitchCase="true"> Logged In</ion-badge>\n\n            <ion-badge class="common-border"  color="danger" *ngSwitchCase="false"> Logged Off</ion-badge>\n\n          </span>\n\n        </ion-buttons>\n\n    <ion-title>Add Signature</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content scroll="false" padding>\n\n  <div class="card list">\n\n\n\n    <div class="item item-body signature-item-body">\n\n      <ion-label> Enter your POD NAME below: </ion-label>\n\n      <ion-input class="inputbg" type="text" name="podname" [(ngModel)]="signaturePadModel.podname" required>\n\n      </ion-input>\n\n    </div>\n\n\n\n    <div class="item item-body signature-item-body">\n\n      Use finger or stylus to sign below\n\n    </div>\n\n\n\n    <signature-pad [options]="signaturePadOptions" id="signature-canvas" class="padding-horizontal item" style="width: 100%;">\n\n\n\n    </signature-pad>\n\n\n\n    <div class="item item-checkbox">\n\n      <label class="checkbox">\n\n        <input type="checkbox" [(ngModel)]="signaturePadModel.signatureConfirm" />\n\n      </label>\n\n      I accept the signature above\n\n    </div>\n\n  </div>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-4>\n\n        <button ion-button color="secondary" (click)="save()" [disabled]="disableAcceptButton()">\n\n          Accept\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-4>\n\n        <button ion-button color="light" (click)="clear()">Clear</button>\n\n      </ion-col>\n\n      <ion-col col-4>\n\n        <button ion-button color="danger" (click)="drawCancel()">Cancel</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/signature/signature.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_config_service_config_service__["a" /* ConfigServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_shared_service_shared_service__["a" /* SharedServiceProvider */]])
], SignaturePage);

//# sourceMappingURL=signature.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__log_service_log_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pdaparams_service_pdaparams_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__image_file_service_image_file_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__siteconfig_service_siteconfig_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__platform_ready_service_platform_ready_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_service_shared_service__ = __webpack_require__(14);
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
var ImageServiceProvider = (function () {
    function ImageServiceProvider(pdaParams, http, logger, imageFileService, siteConfig, platformReady, file, transfer, camera, sharedService, loadingCtrl, toastCtrl) {
        var _this = this;
        this.pdaParams = pdaParams;
        this.http = http;
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
            console.log("Running poller...");
            _this.uploadUrl = localStorage.getItem('apiURL') + "/api/images/upload";
            if (_this.uploadUrl == "") {
                var val = _this.siteConfig.getSiteConfigValue('PDA_IMAGES_URL');
                _this.uploadUrl = val;
                _this.log.info('this.uploadUrl set to:[' + _this.uploadUrl + ']');
            }
            if (_this.platformReady.isPlatformReady()) {
                _this.uploadAllImages();
                _this.deleteObsoleteImages().subscribe(function () {
                    _this.sharedService.imageRefresh.next(true);
                });
            }
            _this.calls++;
            _this.pollTime = _this.pdaParams.imagePollTime || (60000 * 5);
            console.log("pollTime is ::" + _this.pollTime);
            // re-read from pda params
            if (_this.pollTime < 10000)
                _this.pollTime = 10000; // min allowed 10 seconds
            setTimeout(_this.poller, _this.pollTime);
        }; //poller fn ends here
        this.uploadAllImages = function () {
            _this.log.info('uploadAllImages: checking..');
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
            var loader = _this.loadingCtrl.create({
                content: "Uploading..."
            });
            loader.present();
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
                    loader.dismiss();
                    _this.presentToast("Image uploaded successfully");
                    if (cb)
                        cb(result);
                }, function (err) {
                    loader.dismiss();
                    _this.presentToast(JSON.stringify(err));
                });
            }
            else {
                _this.log.info('this.uploadUrl:[' + _this.uploadUrl + '], so getSiteConfig');
                var val = _this.siteConfig.getSiteConfigValue('PDA_IMAGES_URL');
                _this.uploadUrl = val;
            }
        };
        this.getImageList = function (imageId) {
            if (_this.platformReady.isPlatformReady()) {
                return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].create(function (observer) {
                    var prefix = imageId || ""; // optional image name to search for (first x chars no suffix)  
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
                            __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].throw(error);
                        }); //End of readentries()
                    }, function (error) {
                        _this.log.error(error);
                        __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].throw(error);
                    });
                }, function (error) {
                    _this.log.error(error);
                    __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].throw(error);
                });
            }
            else {
                return _this.fileList; // empty list if no cordova
            }
        };
        this.takePhoto = function (photoId) {
            var result;
            var options = {
                quality: _this.pdaParams.imageQuality || 50,
                destinationType: _this.camera.DestinationType.FILE_URI,
                sourceType: _this.camera.PictureSourceType.CAMERA,
                encodingType: _this.camera.EncodingType.JPEG,
                cameraDirection: 1,
                saveToPhotoAlbum: true
            };
            return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].create(function (observer) {
                _this.camera.getPicture(options).then(function (imageURI) {
                    observer.next(imageURI);
                }, function (err) {
                    __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].throw(err);
                });
            });
        }; //takePhoto function ends here
        this.deleteSingleImage = function (imageId) {
            if (_this.platformReady.isPlatformReady()) {
                return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].create(function (observer) {
                    if (!imageId) {
                        observer.throw("imageId must be supplied");
                    }
                    var isImage = (/\.(gif|jpg|jpeg|tiff|png)$/i).test(imageId);
                    if (isImage) {
                        _this.file.removeFile(_this.file.dataDirectory, imageId).then(function (result) {
                            _this.imageFileService.deleteImage(imageId);
                            _this.log.info('deleteSingleImage:' + JSON.stringify(result));
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
            return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].create(function (deferredAllImages) {
                var result = {
                    numImages: 0,
                    delImages: 0,
                    errImages: 0,
                    failed: [] // array of filename/errors on error
                };
                _this.getImageList().subscribe(function (images) {
                    result.numImages = images.length;
                    _this.log.info('deleteObsoleteImages: images found to check:' + result.numImages);
                    console.log('deleteObsoleteImages: images found to check:' + result.numImages);
                    /*
                        * For each image file check if there is still a job (jobSeq) for it
                        * and if not then delete the image from the file system and any metadata
                        * from local storage
                        */
                    images.forEach(function (image) {
                        console.log("In foreach of deleteObsoleteImages with image as:" + image.name);
                        var deferredImage = __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].create(function (observer) {
                            console.log("Inside deferredImage observable creation!! ");
                            var name = image.name;
                            var jobSeq = name.substring(0, name.indexOf('_'));
                            var filter = { "where": { "mobjobSeq": jobSeq } };
                            // Check image has been uploaded and that the job no longer exists
                            var uploaded = _this.imageFileService.getImageProperty(image.name, 'uploaded');
                            //image.uploaded;
                            _this.log.debug('deleteObsoleteImages: check name:' + name + ', uploaded:' + uploaded + ', jobSeq:' + jobSeq);
                            console.log('deleteObsoleteImages: check name:' + name + ', uploaded:' + uploaded + ', jobSeq:' + jobSeq);
                            if (uploaded) {
                                _this.Job.find(filter).then(function (jobs) {
                                    _this.log.debug('deleteObsoleteImages: found:' + jobs.length + ' job legs');
                                    console.log('deleteObsoleteImages: found:' + jobs.length + ' job legs');
                                    if (jobs.length == 0) {
                                        _this.deleteSingleImage(name).subscribe(function (success) {
                                            result.delImages += 1;
                                            _this.log.info("deleteObsoleteImages: deleted:" + success.fileRemoved.name);
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
                                        console.log("deleteObsoleteImages: in the else.");
                                        observer.next();
                                    }
                                }); //jobApi.find() ends here
                            } //if uploaded check ends here
                            else {
                                observer.next();
                            } // if (uploaded) check ends here
                        });
                        deferredImage.subscribe();
                        console.log("deleteObsoleteImages:Pushing the observables into array");
                        observablesArray.push(deferredImage);
                    }); //images.forEach closes here       
                }); //getImageList() subscription ends here.
                __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].forkJoin(observablesArray).subscribe(function (result) {
                    console.log("deleteObsoleteImages:Inside forkjoin");
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
                _this.log.info('startWatching: PDA_IMAGES:' + YN + ', poll_started:' + poller_started);
                if (YN === 'Y' && !poller_started) {
                    _this.log.info('startWatching: PDA_IMAGES:' + YN + ', calling poller()');
                    poller_started = true;
                    _this.poller();
                }
                else {
                    _this.log.info('startWatching: PDA_IMAGES:' + YN + ', NO polling or already started');
                }
            }
        };
        this.getCount = function () { return (_this.calls); };
        console.log('Hello ImageServiceProvider Provider');
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
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].create(function (observer) {
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
                __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].throw(error);
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
    return ImageServiceProvider;
}());
ImageServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_8__log_service_log_service__["a" /* LogServiceProvider */], __WEBPACK_IMPORTED_MODULE_10__image_file_service_image_file_service__["a" /* ImageFileServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_11__siteconfig_service_siteconfig_service__["a" /* SiteconfigServiceProvider */], __WEBPACK_IMPORTED_MODULE_12__platform_ready_service_platform_ready_service__["a" /* PlatformReadyServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_13__shared_service_shared_service__["a" /* SharedServiceProvider */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* ToastController */]])
], ImageServiceProvider);

//# sourceMappingURL=image-service.js.map

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SharedServiceProvider = (function () {
    function SharedServiceProvider() {
        //Riyaz: Events are implemented using Subjects & BehaviorSubjects
        this.SITE_CONFIG_LOADED = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
        this.SODSERVICE_IS_NEW_DAY = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
        this.APP_ON_LINE = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["BehaviorSubject"](false);
        this.APP_OFF_LINE = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["BehaviorSubject"](false);
        this.commandToPDA = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
        this.messageToDriver = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
        this.pushNotificationReceived = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
        this.jobMetaDataLoadedSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
        this.tpmPdaCtlsLoadedSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
        this.PAUSE = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
        this.RESUME = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
        this.DESTROY = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
        this.NEWJOB = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
        this.CANCEL = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
        this.imageSaved = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
        this.imageRefresh = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
        this.testing = true;
        //Riyaz: Global variables are implemented using getter & setter methods
        //See https://ionicallyspeaking.com/2016/03/10/global-variables-in-ionic-2/
        this.props = new Map();
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
        this.props.set('jobMetadata', value);
    };
    SharedServiceProvider.prototype.getJobMetaData = function () {
        return this.props.get('jobMetadata');
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
    return SharedServiceProvider;
}());
SharedServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], SharedServiceProvider);

//# sourceMappingURL=shared-service.js.map

/***/ }),

/***/ 143:
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
var BaseStorage = (function () {
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
var InternalStorage = (function (_super) {
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
var SDKStorage = (function (_super) {
    __extends(SDKStorage, _super);
    function SDKStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SDKStorage;
}(BaseStorage));

//# sourceMappingURL=storage.swaps.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Job; });
/* tslint:disable */
var Job = (function () {
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
                "mobjobJobPieces": {
                    name: 'mobjobJobPieces',
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
                "mobjobSuburb": {
                    name: 'mobjobSuburb',
                    type: 'string'
                },
                "mobjobAddrExtras": {
                    name: 'mobjobAddrExtras',
                    type: 'string'
                },
                "mobjobEtaTime": {
                    name: 'mobjobEtaTime',
                    type: 'Date'
                },
                "mobjobDriver": {
                    name: 'mobjobDriver',
                    type: 'number'
                },
                "mobjobJobType": {
                    name: 'mobjobJobType',
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
                "mobjobTimeDp": {
                    name: 'mobjobTimeDp',
                    type: 'Date'
                },
                "onDeviceTime": {
                    name: 'onDeviceTime',
                    type: 'Date'
                },
                "jseaCaptured": {
                    name: 'jseaCaptured',
                    type: 'string'
                },
                "mobjobPupInstructions": {
                    name: 'mobjobPupInstructions',
                    type: 'string'
                },
                "mobjobDelInstructions": {
                    name: 'mobjobDelInstructions',
                    type: 'string'
                },
                "mobjobDrvName": {
                    name: 'mobjobDrvName',
                    type: 'string'
                },
                "mobjobDrvSurname": {
                    name: 'mobjobDrvSurname',
                    type: 'string'
                },
                "mobjobTrailerId": {
                    name: 'mobjobTrailerId',
                    type: 'string'
                },
                "mobjobTrailerDesc": {
                    name: 'mobjobTrailerDesc',
                    type: 'string'
                },
                "mobjobTrailerReg": {
                    name: 'mobjobTrailerReg',
                    type: 'string'
                },
                "mobjobVehicleType": {
                    name: 'mobjobVehicleType',
                    type: 'string'
                },
                "mobjobCeta": {
                    name: 'mobjobCeta',
                    type: 'string'
                },
                "mobjobLength": {
                    name: 'mobjobLength',
                    type: 'string'
                },
                "mobjobWidth": {
                    name: 'mobjobWidth',
                    type: 'string'
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
                "lastModified": {
                    name: 'lastModified',
                    type: 'Date'
                },
            },
            relations: {}
        };
    };
    return Job;
}());

//# sourceMappingURL=Job.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Installation; });
/* tslint:disable */
var Installation = (function () {
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

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JseaDriverAnswers; });
/* tslint:disable */
var JseaDriverAnswers = (function () {
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
            },
            relations: {}
        };
    };
    return JseaDriverAnswers;
}());

//# sourceMappingURL=JseaDriverAnswers.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarcodeHist; });
/* tslint:disable */
var BarcodeHist = (function () {
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

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JseaDriverQuestionsApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_search_params__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_error_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__ = __webpack_require__(29);
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
var JseaDriverQuestionsApi = (function (_super) {
    __extends(JseaDriverQuestionsApi, _super);
    function JseaDriverQuestionsApi(http, connection, models, auth, searchParams, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, searchParams, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.searchParams = searchParams;
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
    return JseaDriverQuestionsApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));
JseaDriverQuestionsApi = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */])),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */])),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
    __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
    __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */])),
    __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */])),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */],
        __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
        __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
        __WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */],
        __WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */]])
], JseaDriverQuestionsApi);

//# sourceMappingURL=JseaDriverQuestions.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_sdk_index__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_log_service_log_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_pdaparams_service_pdaparams_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_siteconfig_service_siteconfig_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_base_service_base_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_shared_service_shared_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_jsea_service_jsea_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_config_service_config_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_job_changed_service_job_changed_service__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_util_service_util_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_gps_audit_service_gps_audit_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__job_detail_notes_job_detail_notes__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__jsea_jsea__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__home_home__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__signature_signature__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/* import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject'; */


//import { Observable } from 'rxjs/Observable';












//import { TabsPage } from '../tabs/tabs';


/**
 * Generated class for the JobDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 *
 * Read about how to unsubscribe observables at
 * https://stackoverflow.com/questions/38008334/angular-rxjs-when-should-i-unsubscribe-from-subscription
 *
 */
var JobDetailsPage = (function () {
    function JobDetailsPage(navCtrl, navParams, modalController, pdaParams, siteConfig, logger, base, sharedService, jseaService, alertCtrl, jobChangedService, utilService, gpsAudit, configService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalController = modalController;
        this.pdaParams = pdaParams;
        this.siteConfig = siteConfig;
        this.logger = logger;
        this.base = base;
        this.sharedService = sharedService;
        this.jseaService = jseaService;
        this.alertCtrl = alertCtrl;
        this.jobChangedService = jobChangedService;
        this.utilService = utilService;
        this.gpsAudit = gpsAudit;
        this.configService = configService;
        this.subscriptions = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__["Subscription"]();
        this.t = this.navCtrl.parent;
        this.Job = lbclient.models.LocalJob;
        this.job_note_sync = lbclient.job_note_sync;
        this.LocalNote = lbclient.models.LocalNote;
        this.logParams = { site: this.pdaParams.getSiteId(), driver: this.pdaParams.getDriverId(), fn: 'JobDetailsPage' };
        this.log = this.logger.getInstance(this.logParams);
        this.note = {
            'seqid': '',
            'formtype': '',
            'text': '',
            'placeholderText': ''
        };
        this.isNotesModelClosed = false;
        this.loginFlag = this.pdaParams.isDrvLoggedOn();
        // The following two are mutually exclusive so should never be set together - if they are we use depart pickup
        // signature on pickup
        this.pdaSignatOnPU = (this.pdaParams.pda_signat_on_pu || (this.siteConfig.getSiteConfigValue('PDA_SIGNATURE_PUP') == 'Y'));
        // separate delivery signature and delivery event
        this.pdaDiscreteDelSignat = (this.pdaParams.pda_discrete_del_signat || (this.siteConfig.getSiteConfigValue('PDA_DISCRETE_DEL_SIGNAT') == 'Y'));
        this.multidelText = this.siteConfig.getSiteConfigValue('PDA_MULTIDEL_NOTE_TEXT');
        this.jseaPerJob = (this.jseaService.getJseaConfig() == 'PJB_CHECK');
        this.pdaMandatoryPhotos = (this.pdaParams.pda_mandatory_photos || (this.siteConfig.getSiteConfigValue('PDA_MANDATORY_PHOTOS') == 'Y'));
        this.openSignatureModal = function (legid) {
            var modal = _this.modalController.create(__WEBPACK_IMPORTED_MODULE_17__signature_signature__["a" /* SignaturePage */]);
            modal.onDidDismiss(function (result) {
                if (typeof result !== 'undefined') {
                    _this.podname = result.podname;
                    _this.signature = result.signature;
                    _this.handleJobStatusChange(legid, _this.signature, _this.podname);
                }
            });
            modal.present();
        };
        this.getJob = function () {
            _this.mystr = 'getJob';
            if (_this.pdaParams.debug)
                _this.log.debug(_this.mystr);
            if (_this.jobidparam === 'new') {
                return _this.newJob();
            }
            _this.njobId = (_this.jobidparam) % 100000000; //Modulus 100 Million gives job num and leg num - need to account for modded jobs
            _this.legnum = _this.njobId % 100;
            _this.jobId = _this.njobId / 100; //Divide by 100 gives job number taking off the leg number
            _this.localfilter =
                {
                    "where": { "mobjobBasejobNum": _this.jobId },
                    "order": 'mobjobLegNumber ASC'
                };
            if (_this.pdaParams.jobDetailOneDayOnly) {
                // convoluted (maybe) way to get job date with no hh/mm/ss into date object
                var jobDate = Math.round(_this.jobidparam / 100000000); // e.g. 20160502
                var year = Math.round(jobDate / 10000);
                var mon = Math.round((jobDate % 10000) / 100);
                var day = Math.round((jobDate % 100));
                var jobDateFilter = new Date(Date.UTC(year, mon - 1, day, 0, 0, 0, 0));
                _this.localfilter =
                    {
                        "where": {
                            "mobjobBasejobNum": _this.jobId,
                            "mobjobBookingDay": jobDateFilter
                        },
                        "order": 'mobjobLegNumber ASC'
                    };
            }
            if (_this.pdaParams.isDrvLoggedOff()) {
                var alertPopup_1 = _this.alertCtrl.create({
                    title: 'Log On/Off Issue',
                    subTitle: "Please Log on to action jobs",
                    buttons: [{
                            text: 'OK',
                            handler: function () {
                                var navTransition = alertPopup_1.dismiss();
                                navTransition.then(function () {
                                    _this.navCtrl.pop();
                                });
                                return false;
                            }
                        }]
                });
                alertPopup_1.present();
                return;
            }
            _this.Job.find(_this.localfilter, function (err, results) {
                if (err) {
                    _this.log.error('Job.find:' + JSON.stringify(err));
                }
                _this.results = results;
                if (_this.results.length === 0) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_16__home_home__["a" /* HomePage */]);
                    return;
                }
                _this.legs = _this.results.length;
                _this.jobs = _this.results;
                var lastleg = _this.jobs[_this.legs - 1];
                // Check if last leg is at 'PC' status for discrete signature before delivery
                if (lastleg.mobjobStatus == 'PC')
                    _this.discreteDelSignat = true;
                else
                    _this.discreteDelSignat = false;
                if (_this.discreteDelSignat && _this.pdaDiscreteDelSignat) {
                    _this.showDelButtonNoSignat = true; // used on template in ng-if
                }
                _this.job = _this.base.base.currentItem = _this.results;
                // Isolate the Single Job and set the CurrentItem in the Base Class...     
                _this.data = _this.base.currentData = _this.base.combineValuesAndLabels(_this.job, _this.jobMetadata, "");
                // Set up the Metadata to control the Display of this Job...
                // Set base.currentData so Edits can be sensed...
                _this.base.bDataChanged = false;
                // No Data changed at this point...
                //this.tabHeader = this.generateJobHeader(this.job);
                // Generate a meaningful Header Title...
            });
        }; //GetJob() ends here
        this.newJob = function () {
            _this.mystr = 'newJob';
            //log.debug(mystr);
            _this.bNewItem = true;
            _this.job = {};
            _this.data = _this.base.createNewItem(_this.job, _this.jobMetadata);
            // An Empty Job with Defaults...
        };
        this.doJseaSubType = function (formtype) {
            var job = _this.job[0];
            var jobStatus;
            //formtype is MDEL or ODIM or JSEA
            _this.basejob = job.mobjobNumber;
            _this.basejobDate = job.mobjobBookingDay;
            if (job.mobjobStatus == 'PU' || job.mobjobStatus == 'Dp')
                jobStatus = 'PICKUP';
            if (_this.job[0].mobjobStatus == 'Ad')
                jobStatus = 'DELIVER';
            _this.jseaService.setJobJseaDetails(_this.basejob, _this.basejobDate, 'N', jobStatus, formtype, 2);
            // if MULTIDEL prompt for notes prior to entering jsea details
            // designed to allow operator to enter address/suburb details
            // which will then appear on CCT's invoices to clients
            if (formtype == 'MULTIDEL') {
                // wait for the modal form to be closed before going to the next page
                if (_this.isNotesModelClosed) {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__jsea_jsea__["a" /* JseaPage */]).catch(function (err) {
                        console.log("Error pushing Jseapage:" + err);
                    });
                }
                ;
                _this.enterNotes(job.mobjobSeq, _this.multidelText, formtype);
            }
            else {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__jsea_jsea__["a" /* JseaPage */]).catch(function (err) {
                    console.log("Error pushing Jseapage:" + err);
                });
            }
        }; //doJseaSubType ends here
        //The func below should only be called when a button is clicked EG 
        // Accept / Pickup / Tap to Sign 
        this.handleJobStatusChange = function (seqid, signat, podname) {
            // seqid id the mobjobSeq of the job that's just changed e.g. 2015123103038500
            _this.mystr = 'handleJobStatusChange:seqid:' + seqid;
            _this.log.debug(_this.mystr);
            var jseaMaybeRequired = false;
            var wasPickup = false;
            var wasArriveDeliver = false;
            var dateTime = new Date().getTime();
            var timestamp = Math.floor(dateTime / 1000);
            // Loop thru this array and update the status on all legs of the job
            // jobs at this point contains all legs for one basejob
            var podCount = 0;
            var legCount = _this.jobs.length;
            //TESTING
            if (_this.jseaService.getJseaConfig() == 'PJB_CHECK') {
                _this.basejob = _this.job[0].mobjobNumber;
                _this.basejobDate = _this.job[0].mobjobBookingDay;
                jseaMaybeRequired = true;
            }
            ///END TESTING
            // If mandatory photos required check all legs to make sure at least one 
            // photo has been taken for the current status (anything > NJ)
            // NOTE - the image could be attached to any leg
            if (_this.pdaMandatoryPhotos) {
                var found = false;
                // It's possible to have e.g. leg 0 @ Ad and leg 1 @ PC where the Ad photo
                // was taken on leg 1 so get status from 1st leg ( leg 0 PU)
                var jobStatus = _this.jobs[0].mobjobStatus; // get status from 1st leg (PU)
                for (var i = 0; i < legCount; i++) {
                    var job = _this.jobs[i];
                    // long status text is stored in this.data
                    var statusString = _this.getStatusString(seqid);
                    if (job.mobjobStatus === 'NJ') {
                        found = true; // don't care about NJ
                        break;
                    }
                    if (typeof job.imageCount !== 'undefined') {
                        // We have some images - check if some for this status
                        var obj = _this.getCurrentStatusObj(jobStatus, job.imageCount) || {};
                        if (obj.count > 0) {
                            found = true;
                            break; // have at least one image
                        }
                    }
                }
                _this.log.info('pdaMandatoryPhotos: seqid:' + seqid + ', jobStatus:' + jobStatus + ', found:' + found);
                if (!found) {
                    // no images found - don't allow user to continue
                    var alertPopup = _this.alertCtrl.create({
                        title: 'No photos yet for : ' + statusString,
                        subTitle: "Please take at least one photo at this stage, before updating the job status",
                        buttons: ['Ok']
                    });
                    alertPopup.present();
                    return; // the alert is async - return here while popup does its job
                }
            } //End of pdaMandatoryPhotos check
            for (var iac = 0; iac < legCount; iac++) {
                var job = _this.jobs[iac];
                var oldStatus = job.mobjobStatus;
                // Don't need to match seqid just have this there for later when
                // we want to have individual signatures for each leg
                // we need to change PU to PC (pod captured) for each leg of a multi leg
                // job, and once all legs are PC we can the update all legs to DL
                if (_this.pdaParams.multileg) {
                    // Pod captured (PC) processing
                    if ((!_this.fullStatuses && job.mobjobStatus == 'PU') // Std statuses -  NJ->AC->PU->DL
                        ||
                            (_this.fullStatuses && job.mobjobStatus == 'Ad') // Full statuses - NJ->AC->PU->Dp->Ad->DL
                    ) {
                        // Set pickup leg status only - don't store signature etc. on this leg
                        // Can't let this fall thru below otherwise will become DL and not visible
                        // If at least one POD mark leg 0 for access by templates etc. where we only have leg 0
                        if (job.mobjobLegNumber == 0)
                            job.mobjobHasPod = true;
                        // Add POD for current leg only (not pickup leg 0)
                        if (job.mobjobSeq == seqid && job.mobjobLegNumber > 0) {
                            job.mobjobStatus = 'PC'; // pod captured
                            job.mobjobSignat = signat || "";
                            if (podname) {
                                job.mobjobPodName = podname;
                                job.mobjobPodTime = new Date().toISOString();
                            }
                        }
                        // Single leg jobs do have a pod capture on leg 0 though - need to add signat to leg 1
                        if (job.mobjobTotalLegs == 1 && job.mobjobLegNumber == 1) {
                            job.mobjobStatus = 'PC'; // pod captured
                            job.mobjobSignat = signat || "";
                            if (podname) {
                                job.mobjobPodName = podname;
                                job.mobjobPodTime = new Date().toISOString();
                            }
                        }
                    }
                }
                // Following block is for all legs
                // TODO - should this be a switch/case?
                var oldStatus = job.mobjobStatus;
                if (!_this.fullStatuses) {
                    if (oldStatus == 'NJ') {
                        job.mobjobStatus = 'AC';
                        job.mobjobTimeAC = Date.now();
                    }
                    else if (oldStatus == 'AC') {
                        job.mobjobStatus = 'PU';
                        job.mobjobTimePU = Date.now();
                        var lgps = _this.gpsAudit.getLastGPS();
                        if (lgps) {
                            job.gpsLatPU = lgps.gps_latitude;
                            job.gpsLongPU = lgps.gps_longitude;
                        }
                        if (job.mobjobLegNumber == 0) {
                            // Possible signature on pickup
                            job.mobjobSignat = signat || "";
                            if (podname) {
                                job.mobjobPodName = podname;
                                job.mobjobPodTime = new Date().toISOString();
                            }
                        }
                    }
                    else if (oldStatus == 'PU') {
                        // PC processing - no direct route to DL now - will either be PU or PC until all pods captured
                        if (!_this.pdaParams.multileg) {
                            job.mobjobStatus = 'DL';
                            // why did we store signature on pickup leg (leg 0)?
                            if (job.mobjobLegNumber > 0) {
                                job.mobjobSignat = signat || "";
                                if (podname) {
                                    job.mobjobPodName = podname;
                                    job.mobjobPodTime = new Date().toISOString();
                                }
                            }
                        }
                    }
                    else if (oldStatus == 'PC') {
                        podCount++;
                    }
                }
                else {
                    if (oldStatus == 'NJ') {
                        job.mobjobStatus = 'AC';
                        job.mobjobTimeAC = Date.now();
                    }
                    else if (oldStatus == 'AC') {
                        wasPickup = true;
                        job.mobjobStatus = 'PU';
                        job.mobjobTimePU = Date.now();
                        var lgps = _this.gpsAudit.getLastGPS();
                        if (lgps) {
                            job.gpsLatPU = lgps.gps_latitude;
                            job.gpsLongPU = lgps.gps_longitude;
                        }
                        if (job.mobjobLegNumber == 0) {
                            // Possible signature on pickup
                            job.mobjobSignat = signat || "";
                            if (podname) {
                                job.mobjobPodName = podname;
                                job.mobjobPodTime = new Date().toISOString();
                            }
                        }
                    }
                    else 
                    // Arrive pickup - not used atm
                    if (oldStatus == 'PU') {
                        job.mobjobStatus = 'Dp';
                        job.mobjobTimeDp = Date.now();
                        if (job.mobjobLegNumber == 0) {
                            // Possible signature on depart pickup
                            job.mobjobSignat = signat || "";
                            if (podname) {
                                job.mobjobPodName = podname;
                                job.mobjobPodTime = new Date().toISOString();
                            }
                        }
                    }
                    if (oldStatus == 'Dp') {
                        wasArriveDeliver = true;
                        job.mobjobStatus = 'Ad';
                        job.mobjobTimeAd = Date.now();
                    }
                    if (oldStatus == 'Ad') {
                        // PC processing - no direct route to DL now - will either be PU or PC until all pods captured
                        if (!_this.pdaParams.multileg) {
                            // TODO - get GPS
                            job.mobjobStatus = 'DL';
                            var lgps = _this.gpsAudit.getLastGPS();
                            if (lgps) {
                                job.gpsLatDL = lgps.gps_latitude;
                                job.gpsLongDL = lgps.gps_longitude;
                            }
                            // why did we store signature on pickup leg (leg 0)?
                            if (job.mobjobLegNumber > 0) {
                                job.mobjobSignat = signat || "";
                                if (podname) {
                                    job.mobjobPodName = podname;
                                    job.mobjobPodTime = new Date().toISOString();
                                }
                            }
                        }
                    }
                    else if (oldStatus == 'PC') {
                        // if oldStatus is PC it means we've just captured a POD or, if there is 
                        // a separate signature capture, it means we've just had a deliver event
                        // If we want a separate PC (signature capture) and then a discrete DEL deliver event
                        // don't increment podCount as we don't want to complete at this stage
                        // If we were at 'PC' AND we have site config set AND discreteDelSignat is set
                        // (last leg is at 'PC' status)
                        // we do want to increment podCount because we do want to complete the job now
                        if (_this.pdaDiscreteDelSignat && !_this.discreteDelSignat) {
                            // do nothing
                        }
                        else if (_this.showDelButtonNoSignat) {
                            podCount++;
                        }
                        else {
                            podCount++; // normal default behaviour
                        }
                        _this.log.debug('handleJobStatusChange: ' + job.mobjobSeq + ' oldStatus:' + oldStatus + ' this.showDelButtonNoSignat:' + _this.showDelButtonNoSignat + ' podCount:' + podCount);
                    }
                }
                _this.mystr = 'handleJobStatusChange:' + job.mobjobSeq + ' updated from ' + oldStatus + ' -> ' + job.mobjobStatus;
                _this.log.info(_this.mystr);
                console.log('this.mystr:::::' + _this.mystr);
                job.save(); // save leg  
                _this.jobChangedService.setlastjobedited(true);
            } //For loop for each leg ends here
            // NOTE - because we don't replicate between the very last PC and setting all to DL the last PC leg goes
            // direct from PU -> DL and therefore does NOT trigger a POD_INFORMATION event on the server
            // TODO - what is best test for all PODs captured?
            // if all PODs now captured update job to DL (all delivery legs have status PC so now job fully completed)
            if (podCount >= (legCount - 1)) {
                for (var iac = 0; iac < legCount; iac++) {
                    var job = _this.jobs[iac];
                    var oldStatus = job.mobjobStatus;
                    // TODO - do we need this test?  or just update every leg regardless?
                    if (job.mobjobStatus == 'PU' || job.mobjobStatus == 'PC' || job.mobjobStatus == 'Ad') {
                        // TODO - get GPS
                        job.mobjobStatus = 'DL';
                        var lgps = _this.gpsAudit.getLastGPS();
                        if (lgps) {
                            job.gpsLatDL = lgps.gps_latitude;
                            job.gpsLongDL = lgps.gps_longitude;
                        }
                        job.save(); // save leg         
                        _this.mystr = 'handleJobStatusChange:DL' + job.mobjobSeq + ' updated from ' + oldStatus + ' -> ' + job.mobjobStatus;
                        _this.log.info(_this.mystr);
                        _this.jobChangedService.setlastjobedited(true);
                    }
                }
            }
            //If we are here then a Jsea Form is required for a job Pu and Del
            // So now check if is a pickup etc
            if (jseaMaybeRequired && (wasPickup || wasArriveDeliver)) {
                var lstr;
                if (wasPickup)
                    lstr = 'PICKUP';
                else
                    lstr = 'DELIVER';
                _this.jseaService.setJobJseaDetails(_this.basejob, _this.basejobDate, 'N', lstr, 'JSEA', 1);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_15__jsea_jsea__["a" /* JseaPage */]);
                return;
            }
            // After save go back to job list
            // this.navCtrl.pop();
            //this.navCtrl.setRoot(TabsPage);
            _this.t.select(0);
            return;
        }; //END OF handleJobStatusChange function ends here
        // deleteJob = (seqid) => {
        //   this.mystr = 'deleteJob';
        //   this.log.debug(this.mystr);
        //   // delete all legs of current job
        //   for (var leg = 0; leg < this.jobs.length; leg++) {
        //     var job = this.jobs[leg];
        //     job.delete();
        //   }
        // }
        // addEvent = () => {
        //   this.mystr = 'addEvent';
        //   this.log.debug(this.mystr);
        //   var idProperty = this.utilService.findArrayItemByKey(this.data, "id", true);
        //   if (idProperty) {
        //     window.location.href = '#/tab/history/-1/' + idProperty.value + '-New';
        //     // Just navigating to the route: "history/-1/{jobId}-New"
        //     // will allow adding a new Event in this Job's Context...
        //   }
        // }
        // saveJob = () => {
        //   this.mystr = 'saveJob';
        //   this.log.debug(this.mystr);
        //   this.base.updateItem(this.job, this.data, this.Job, function (results) {
        //     this.job = this.base.currentItem = results;
        //     // The updated (or created) Job is in results...
        //     this.base.bDataChanged = this.bNewItem = false;
        //     // Can't be a New Item anymore and nothing has been changed as yet...
        //     this.data = this.base.currentData = this.combineValuesAndLabels(this.job, this.jobMetadata);
        //     // Set up the Metadata and the Form will show the current state...
        //   }, this.bNewItem)
        // }
        // generateJobHeader = (item) => {
        //   this.mystr = 'generateJobHeader';
        //   if (this.pdaParams.debug)
        //     this.log.debug(this.mystr);
        //   var interimitem = item[0];
        //   return this.base.generateHeaderForModelInstance(interimitem, this.jobMetadata, '');
        //   // A meaningful Header Title is generated...
        // }
        this.jnSyncCallback = function (err, conflicts) {
            if (err)
                _this.log.error('jnSyncCallback: err:' + err);
            if (conflicts)
                _this.log.error('jnSyncCallback: conflicts:' + conflicts);
        };
        this.saveNotes = function (seqid, noteText) {
            var seqid = seqid;
            var note = noteText;
            var ln = new _this.LocalNote();
            ln.jnJobNum = _this.job[0].mobjobNumber;
            ln.jnJobBday = _this.job[0].mobjobBookingDay;
            // prepend formtype if set e.g. "MULTIDEL:...."
            if (note.formtype)
                ln.jnText = note.formtype + ':' + note.text;
            else
                ln.jnText = note.text;
            ln.jnDriver = _this.pdaParams.getDriverId();
            ln.jnCreateTime = Date.now();
            ln.save();
            _this.job_note_sync(_this.jnSyncCallback);
        };
        this.getCurrentStatusObj = function (legStatus, imageCountArr) {
            for (var i = 0; i < imageCountArr.length; i++) {
                if (imageCountArr[i].jobStatus === legStatus) {
                    return imageCountArr[i];
                }
            }
            return { "jobStatus": legStatus, "count": 0 };
        };
        this.getStatusString = function (seqid) {
            var len = _this.data.length;
            for (var i = 0; i < len; i++) {
                if (_this.data[i].legid === seqid && _this.data[i].property === 'mobjobStatus') {
                    return (_this.data[i].enumValue.label);
                }
            }
            return "";
        };
        this.checkOkForSignat = function (seqid) {
            // check if images taken at this status to allow signature to go ahead
            // This function is called from the signature pad directive 
            var retval = true; // default behaviour
            var statusString;
            var legid;
            if (_this.pdaMandatoryPhotos) {
                // this.job contains the list of legs - 1st should match seqid
                _this.log.debug("checkOkForSignat:pdaMandatoryPhotos: leg 0:" + _this.job[0].mobjobSeq + ", seqid:" + seqid);
                if (_this.job[0].mobjobSeq === seqid) {
                    retval = false;
                    var jobStatus;
                    var legCount = _this.job.length;
                    for (var i = 0; i < legCount; i++) {
                        var job = _this.job[i];
                        jobStatus = job.mobjobStatus;
                        legid = job.legid;
                        // long status text is stored in this.data
                        statusString = _this.getStatusString(seqid);
                        if (job.mobjobStatus === 'NJ') {
                            retval = true; // don't care about NJ
                            break;
                        }
                        if (typeof job.imageCount !== 'undefined') {
                            // We have some images - check if some for this status
                            var obj = _this.getCurrentStatusObj(job.mobjobStatus, job.imageCount) || {};
                            if (obj.count > 0) {
                                retval = true;
                                break; // have at least one image
                            }
                        }
                    }
                }
                if (!retval) {
                    // no images found - don't allow operator to continue
                    var alertPopup = _this.alertCtrl.create({
                        title: 'No photos yet for : ' + statusString,
                        subTitle: "Please take at least one photo at this stage, before updating the job status",
                        buttons: ['Ok']
                    });
                    alertPopup.present();
                    return; // the alert is async - return here while popup does its job
                }
            }
            if (retval)
                _this.openSignatureModal(seqid);
        };
        console.log("JobDetailsPage loading...");
        this.username = navParams.data;
        this.jobs = navParams.get('jobs');
        __WEBPACK_IMPORTED_MODULE_3__shared_sdk_index__["b" /* LoopBackConfig */].setBaseURL(configService.apiURL);
        __WEBPACK_IMPORTED_MODULE_3__shared_sdk_index__["b" /* LoopBackConfig */].setApiVersion(configService.API_VERSION);
        if (this.sharedService.testing) {
            this.pdaImages = true;
            this.pdaNotes = true;
            this.fullStatuses = true;
            this.pdaSignatOnDepPU = false;
        }
        else {
            // For button to take photos
            this.pdaImages = (this.pdaParams.pda_images || (this.siteConfig.getSiteConfigValue('PDA_IMAGES') == 'Y'));
            //For button to take notes
            this.pdaNotes = (this.pdaParams.pda_notes || (this.siteConfig.getSiteConfigValue('PDA_NOTES') == 'Y'));
            // New functionality to get arrive/depart pickup/delivery times
            this.fullStatuses = (this.pdaParams.pda_full_statuses || (this.siteConfig.getSiteConfigValue('PDA_FULL_STATUSES') == 'Y'));
            // signature on depart pickup 
            this.pdaSignatOnDepPU = (this.pdaParams.pda_signat_on_dpu || (this.siteConfig.getSiteConfigValue('PDA_SIGNATURE_DPUP') == 'Y'));
        }
        if (this.pdaSignatOnDepPU && this.pdaSignatOnPU) {
            this.pdaSignatOnPU = false;
        }
        this.driverId = this.pdaParams.getDriverId();
        this.jobidparam = this.sharedService.getJobId();
        this.jobMetadata = this.sharedService.getJobMetaData();
        //Monitor job cancellations.
        /*  this.subscriptions.add(this.sharedService.CANCEL.subscribe(cpayload => {
           this.log.info('Received a CANCEL event');
           this.log.info(cpayload.platform + ':' + JSON.stringify(cpayload));
           if (typeof cpayload.data !== "undefined") {
             if (cpayload.data.type === 'CANCEL') {
               let alertPopup = this.alertCtrl.create({
                 title: 'Job Cancellation',
                 subTitle: 'A Job has Been Cancelled by Base - resyncing.',
                 buttons: [{
                   text: 'OK',
                   handler: () => {
                     const navTransition = alertPopup.dismiss();
                     navTransition.then(() => {
                       this.t.select(0);
                     });
                     return false;
                   }
                 }]
               });
               alertPopup.present();
             }//inner if ends
             else
               this.log.info('payload.data.type <> Cancel, help !!!!');
           }//outer if ends
           else {
             this.log.info('payload.data = undefined, help !!!!');
           }
         })); */
        this.jobChangedService.setlastjobedited(false);
        this.bNewItem = false;
        //Monitor Image saves.
        this.sharedService.imageSaved.subscribe(function (fileData) {
            // fileData contains image name and metadata with job no, legid, status
            _this.log.debug('imageSaved:' + JSON.stringify(fileData));
            if (_this.pdaMandatoryPhotos) {
                var legid = fileData.metadata.legid; // id of leg of saved image
                var legStatus = fileData.metadata.legStatus;
                var legCount = _this.jobs.length;
                // find our leg and update the image status count
                for (var i = 0; i < legCount; i++) {
                    var job = _this.jobs[i];
                    if (legid == job.mobjobSeq) {
                        if (typeof job.imageCount === 'undefined') {
                            job.imageCount = []; // create property if it doesn't exist yet (array of objects)
                        }
                        var obj = _this.getCurrentStatusObj(legStatus, job.imageCount) || {};
                        if (obj.count === 0)
                            job.imageCount.push(obj); // new array element
                        obj.count++;
                        job.save();
                    }
                }
            }
        });
        this.getJob();
    } //Constructor ends here
    JobDetailsPage.prototype.openNotesModal = function (note) {
        var _this = this;
        this.notesModal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_14__job_detail_notes_job_detail_notes__["a" /* JobDetailNotesPage */], { 'note': note });
        this.notesModal.onDidDismiss(function (result) {
            if (typeof result !== 'undefined') {
                var seqid = result.seqid;
                var noteText = result.noteText;
                _this.saveNotes(seqid, noteText);
            }
        });
        this.notesModal.present();
    };
    JobDetailsPage.prototype.enterNotes = function (seqid, placeholder, formtype) {
        // TODO - do we need to save seqid?  Should all be in job[0]  
        this.note.seqid = seqid;
        this.note.placeholderText = placeholder || "Enter job notes here";
        this.note.formtype = formtype || "";
        this.openNotesModal(this.note);
    };
    return JobDetailsPage;
}());
JobDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-job-details',template:/*ion-inline-start:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/job-details/job-details.html"*/'<!--\n\n  Generated template for the JobDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-buttons left>\n\n      <span [ngSwitch]="this.sharedService.loginFlag">\n\n        <ion-badge class="common-border" color="secondary" *ngSwitchCase="true"> Logged In</ion-badge>\n\n        <ion-badge class="common-border" color="danger" *ngSwitchCase="false"> Logged Off</ion-badge>\n\n      </span>\n\n    </ion-buttons>\n\n    <ion-title>JOB DETAILS</ion-title>\n\n    <ion-buttons right>\n\n      <ion-badge class="common-border" color="danger" *ngIf="newMessageCount">{{newMessageCount}}</ion-badge>\n\n      <ion-badge class="common-border" color="danger"> Driver # {{driverId}}</ion-badge>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding text-wrap>\n\n\n\n  <div class="common-border && common-bkg">\n\n    <ion-grid no-padding text-wrap *ngFor="let property of data;trackBy:index" [hidden]="!((property.index> 1) && (!property.omitFromForm) && (property.value) && (property.type != \'\') || (property.label === \'Leg\'))">\n\n\n\n      <ion-row *ngIf="(property.label === \'Leg\') && (property.value !== 0)">\n\n        <ion-col>\n\n          <span>&nbsp;</span>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <!--     {{property.label}}=>{{property.type != \'\'}}=>{{property.type != \'toggle\'}}=>{{property.type != \'enum\'}}=>{{!property.omitFromForm}}=>{{property.value}} -->\n\n        <ion-col>\n\n          <ion-list-header class="ion-list-header" color="secondary" *ngIf="(property.label === \'Leg\') && (property.value === 0)">BASE JOB</ion-list-header>\n\n\n\n          <ion-list-header class="ion-list-header" color="secondary" *ngIf="(property.label === \'Leg\') && (property.value !== 0)">DELIVERY LEG</ion-list-header>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row *ngIf="(property.label != \'Leg\')">\n\n        <ion-col class="jobDetail-label">\n\n          <ion-label *ngIf="property.value" class="jobDetails-label" [ngClass]="{ \'alignAlmostRight\': (property.index == 1) }">\n\n            {{ property.label }}\n\n          </ion-label>\n\n        </ion-col>\n\n\n\n        <ion-col *ngIf="(property.type != \'\') && (property.type != \'toggle\') && (property.type != \'enum\')  && (!property.omitFromForm) && property.value ">\n\n          <ion-input [readonly]="true" [ngClass]=" {\n\n        \'jobnumberspan\'	: (property.property == \'mobjobNumber\'),\n\n        \'requiredInput\'	: ((property.required == true) && (property.value == \'\')),\n\n        \'addressfields\'	: ((property.property == \'mobjobAddress1\') || (property.property == \'mobjobAddress2\') || \n\n                    (property.property == \'mobjobAddress3\') || (property.property == \'mobjobAddress4\') || \n\n                    (property.property == \'mobjobAddress5\') || (property.property == \'mobjobClientName\')),\n\n        \'suburbfield\'		: (property.property == \'mobjobSuburb\'), \n\n        \'servicefield\'		: (property.property == \'mobjobServiceCode\'), \n\n        \'centered\'			: property.centered, \n\n        \'strong\'			: property.strong,\n\n        \'jobTotalLegsInput\': ((property.property == \'mobjobTotalLegs\') && jseaPerJob)}" type="{{property.type}}" value="{{property.value}}"\n\n            class="standardInput" text-wrap>\n\n          </ion-input>\n\n        </ion-col>\n\n\n\n\n\n        <!--  Show the Job Status Enum Value   -->\n\n        <ion-col *ngIf="(property.type != \'\') && (property.hasOwnProperty(\'enumValue\'))&& (property.type != \'toggle\') && \n\n        (property.type == \'enum\') \n\n         && (!property.omitFromForm) ">\n\n          <ion-input [readonly]="true" type="{{property.type}}" value="{{property.enumValue.label}}" class="jobStatusInput">\n\n          </ion-input>\n\n        </ion-col>\n\n\n\n\n\n        <!-- ACCEPT JOB -->\n\n        <ion-col *ngIf="(property.hasOwnProperty(\'enumValue\') && property.enumValue.value == \'NJ\' \n\n        && (property.legid % 100 == 0) )">\n\n          <button ion-button color="secondary" (click)="handleJobStatusChange(property.legid)" [disabled]="syncInProgress">\n\n            Accept\n\n          </button>\n\n        </ion-col>\n\n\n\n\n\n        <!--   IMAGE CAPTURE -->\n\n        <!-- the metadata here will be passed into the directive as an object and then stored as part of the image properties -->\n\n        <ion-col *ngIf="( pdaImages && property.property == \'mobjobNumber\' )">\n\n          <camera-button [metadata]="{basejob: property.basejob, legid: property.legid, legStatus: property.legStatus}">\n\n          </camera-button>\n\n        </ion-col>\n\n\n\n        <!-- job notes -->\n\n        <ion-col *ngIf="( pdaNotes && property.property == \'mobjobNumber\' )">\n\n          <button ion-button (click)="enterNotes(property.legid)" [disabled]="syncInProgress">\n\n            Notes\n\n          </button>\n\n        </ion-col>\n\n\n\n        <!--   JSEA PER JOB  -->\n\n        <ion-col *ngIf="(jseaPerJob && property.property == \'mobjobTotalLegs\' && (property.legid % 100 == 0) \n\n        && (property.legStatus != \'NJ\' \n\n        && property.legStatus != \'AC\'))">\n\n          <button ion-button (click)="doJseaSubType(\'MULTIDEL\')" [disabled]="syncInProgress">\n\n            MULTIDEL\n\n          </button>\n\n        </ion-col>\n\n\n\n        <!--   PICKUP  JOB -->\n\n        <!-- possible signature at time of pickup -->\n\n        <ion-col *ngIf="(property.hasOwnProperty(\'enumValue\') && pdaSignatOnPU && property.enumValue.value == \'AC\' && (property.legid % 100 == 0) )">\n\n          <button ion-button color="secondary" (click)="openSignatureModal(property.legid)" [disabled]="syncInProgress">\n\n            Pickup\n\n          </button>\n\n        </ion-col>\n\n\n\n        <ion-col *ngIf="(property.hasOwnProperty(\'enumValue\') && !pdaSignatOnPU && \n\n        property.enumValue.value == \'AC\'  && (property.legid % 100 == 0) )">\n\n          <button ion-button color="secondary" (click)="handleJobStatusChange(property.legid)" [disabled]="syncInProgress">\n\n            Pickup\n\n          </button>\n\n        </ion-col>\n\n\n\n\n\n        <!--   Depart Pup -->\n\n        <!-- possible signature at time of depart pickup -->\n\n        <ion-col *ngIf="(property.hasOwnProperty(\'enumValue\') && pdaSignatOnDepPU && \n\n        fullStatuses && property.enumValue.value == \'PU\' \n\n        && (property.legid % 100 == 0) )">\n\n          <button ion-button color="secondary" (click)="checkOkForSignat(property.legid)" [disabled]="syncInProgress">\n\n            Depart P/up\n\n          </button>\n\n        </ion-col>\n\n\n\n        <!-- \n\n       {{property.hasOwnProperty(\'enumValue\') }}=>{{ !pdaSignatOnDepPU }}=>{{ fullStatuses }}=>{{ (property.legid % 100 == 0) }} -->\n\n\n\n        <ion-col *ngIf="(property.hasOwnProperty(\'enumValue\') && !pdaSignatOnDepPU && \n\n        fullStatuses && property.enumValue.value == \'PU\' \n\n          && (property.legid % 100 == 0) )">\n\n          <button ion-button color="secondary" (click)="handleJobStatusChange(property.legid)" [disabled]="syncInProgress">\n\n            Depart P/up\n\n          </button>\n\n        </ion-col>\n\n\n\n        <!--   Arrive Del -->\n\n        <ion-col *ngIf="(property.hasOwnProperty(\'enumValue\') && fullStatuses && \n\n        property.enumValue.value == \'Dp\' && (property.legid % 100 == 0) )">\n\n          <button ion-button color="secondary" (click)="handleJobStatusChange(property.legid)" [disabled]="syncInProgress">\n\n            Arrive Delv\n\n          </button>\n\n        </ion-col>\n\n\n\n        <!--   COMPLETE JOB -->\n\n        <!-- fullStatuses turned on in site config -->\n\n        <!-- no multileg parameter or single leg job has one "tap to sign" on first leg -->\n\n        <ion-col *ngIf="(property.hasOwnProperty(\'enumValue\') && showDelButtonNoSignat && \n\n        fullStatuses && property.enumValue.value == \'Ad\' && (property.legid % 100 == 0) \n\n          && (!pdaParams.multileg || property.numlegs < 2))">\n\n          <button ion-button color="secondary" (click)="handleJobStatusChange(property.legid)" [disabled]="syncInProgress">\n\n            Deliver\n\n          </button>\n\n        </ion-col>\n\n\n\n        <!-- {{property.hasOwnProperty(\'enumValue\') }}=>{{ showDelButtonNoSignat }}=>{{ fullStatuses }}=>{{ (property.legid % 100 == 0) }} -->\n\n\n\n        <ion-col *ngIf="(property.hasOwnProperty(\'enumValue\') \n\n        && !showDelButtonNoSignat && fullStatuses && property.enumValue.value == \'Ad\' \n\n          && (property.legid % 100 == 0) && (!pdaParams.multileg || property.numlegs < 2))">\n\n          <button ion-button color="secondary" (click)="checkOkForSignat(property.legid)" [disabled]="syncInProgress">\n\n            Deliver\n\n          </button>\n\n        </ion-col>\n\n\n\n        <!-- multileg parameter has individual per leg "tap to sign" -->\n\n        <ion-col *ngIf="(property.hasOwnProperty(\'enumValue\') && fullStatuses && property.enumValue.value == \'Ad\' \n\n        && (property.legid % 100 > 0) \n\n            && (pdaParams.multileg && property.numlegs > 1) )">\n\n          <button ion-button color="secondary" (click)="openSignatureModal(property.legid)" [disabled]="syncInProgress">\n\n            Deliver\n\n          </button>\n\n        </ion-col>\n\n\n\n\n\n        <!-- fullStatuses NOT turned on in site config -->\n\n        <!-- no multileg parameter or single leg job has one "tap to sign" on first leg -->\n\n        <ion-col *ngIf="(property.hasOwnProperty(\'enumValue\') && !fullStatuses && \n\n        property.enumValue.value == \'PU\' && (property.legid % 100 == 0) && (!pdaParams.multileg || property.numlegs < 2))">\n\n          <button ion-button color="secondary" pod-name="podname" my-key="property.legid" (click)="openSignatureModal(property.legid)"\n\n            [disabled]="syncInProgress">\n\n            Deliver\n\n          </button>\n\n        </ion-col>\n\n\n\n        <!-- multileg parameter has individual per leg "tap to sign" -->\n\n        <ion-col *ngIf="(property.hasOwnProperty(\'enumValue\') && !fullStatuses && property.enumValue.value == \'PU\' \n\n        && (property.legid % 100 > 0) \n\n            && (pdaParams.multileg && property.numlegs > 1) )">\n\n          <button ion-button color="secondary" (click)="openSignatureModal(property.legid)" [disabled]="syncInProgress">\n\n            Deliver\n\n          </button>\n\n        </ion-col>\n\n\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/job-details/job-details.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_siteconfig_service_siteconfig_service__["a" /* SiteconfigServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_log_service_log_service__["a" /* LogServiceProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_base_service_base_service__["a" /* BaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_shared_service_shared_service__["a" /* SharedServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_9__providers_jsea_service_jsea_service__["a" /* JseaServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_11__providers_job_changed_service_job_changed_service__["a" /* JobChangedServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_12__providers_util_service_util_service__["a" /* UtilServiceProvider */], __WEBPACK_IMPORTED_MODULE_13__providers_gps_audit_service_gps_audit_service__["a" /* GpsAuditServiceProvider */], __WEBPACK_IMPORTED_MODULE_10__providers_config_service_config_service__["a" /* ConfigServiceProvider */]])
], JobDetailsPage);

//# sourceMappingURL=job-details.js.map

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_service_config_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pdaparams_service_pdaparams_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_sdk_services_custom_logger_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__log_service_instance__ = __webpack_require__(711);
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
var LogServiceProvider = (function (_super) {
    __extends(LogServiceProvider, _super);
    /*  private pdaParamService;
     private configService;
     private loggerService;
     //public http; */
    function LogServiceProvider(loggerService, pdaParamService, configService, http
        //public context: {}
    ) {
        var _this = _super.call(this) || this;
        _this.loggerService = loggerService;
        _this.pdaParamService = pdaParamService;
        _this.configService = configService;
        _this.http = http;
        _this.seqno = 0;
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
        return new __WEBPACK_IMPORTED_MODULE_6__log_service_instance__["a" /* LogServiceInstance */](this.http, this.context, this.pdaParamService.getDriverId(), this.getlogServerIP(), this.getlogServerPort(), this.pdaParams);
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
    /* supplant(str, o) {
      return str.replace(
        /\{([^{}]*)\}/g,
        function (a, b) {
          var r = o[b];
          return typeof r === 'string' || typeof r === 'number' ? r : a;
        }
      );
    };
  
    getFormattedTimestamp(date) {
      return this.supplant('{0}:{1}:{2}:{3}', [
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds()
      ]);
    };
    getLogTimestamp(date) {
      return (date.toISOString());
    };
  
    getLocalTimestamp(date) {
      var tzo = -date.getTimezoneOffset();
      var dif = tzo >= 0 ? '+' : '-';
      function pad(num) {
        var norm = Math.abs(Math.floor(num));
        return (norm < 10 ? '0' : '') + norm;
      };
      return date.getFullYear()
        + '-' + pad(date.getMonth() + 1)
        + '-' + pad(date.getDate())
        + 'T' + pad(date.getHours())
        + ':' + pad(date.getMinutes())
        + ':' + pad(date.getSeconds())
        + dif + pad(tzo / 60)
        + ':' + pad(tzo % 60);
    };
  */
    LogServiceProvider.prototype.getlogServerIP = function () {
        return (this.configService.appConfig.logServerIP);
    };
    ;
    LogServiceProvider.prototype.getlogServerPort = function () {
        return (this.configService.appConfig.logServerPort);
    };
    ;
    return LogServiceProvider;
}(__WEBPACK_IMPORTED_MODULE_5__shared_sdk_services_custom_logger_service__["a" /* LoggerService */]));
LogServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__shared_sdk_services_custom_logger_service__["a" /* LoggerService */],
        __WEBPACK_IMPORTED_MODULE_4__pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_3__config_service_config_service__["a" /* ConfigServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]
        //public context: {}
    ])
], LogServiceProvider);

//# sourceMappingURL=log-service.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobChangedServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
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
var JobChangedServiceProvider = (function () {
    function JobChangedServiceProvider(http) {
        this.http = http;
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
    return JobChangedServiceProvider;
}());
JobChangedServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], JobChangedServiceProvider);

//# sourceMappingURL=job-changed-service.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FixedQueueServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
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
var FixedQueueServiceProvider = (function () {
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
    return FixedQueueServiceProvider;
}());
FixedQueueServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], FixedQueueServiceProvider);

//# sourceMappingURL=fixed-queue-service.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_sdk_index__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_device_feedback__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_media__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_log_service_log_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_pdaparams_service_pdaparams_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_siteconfig_service_siteconfig_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_base_service_base_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_shared_service_shared_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_jsea_service_jsea_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_message_service_message_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_event_service_event_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_sod_service_sod_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_background_geolocation_service_background_geolocation_service__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_platform_ready_service_platform_ready_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_sync_service_sync_service__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_exit_service_exit_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_gps_audit_service_gps_audit_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_config_service_config_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_util_service_util_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_job_changed_service_job_changed_service__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_job_replication_service_job_replication_service__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_connectivity_monitor_connectivity_monitor__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_push_service_push_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__jsea_jsea__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__job_details_job_details__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__signature_signature__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




























var HomePage = (function () {
    function HomePage(navCtrl, navParams, pdaParams, siteConfig, logger, base, sharedService, jseaService, messageService, eventService, sodService, utilService, platformReady, backgroundGeolocationService, alertCtrl, exitService, deviceFeedback, configService, gpsAudit, modalController, syncService, jobChangedService, media, jobReplicationService, cd, conMonService, pushService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.pdaParams = pdaParams;
        this.siteConfig = siteConfig;
        this.logger = logger;
        this.base = base;
        this.sharedService = sharedService;
        this.jseaService = jseaService;
        this.messageService = messageService;
        this.eventService = eventService;
        this.sodService = sodService;
        this.utilService = utilService;
        this.platformReady = platformReady;
        this.backgroundGeolocationService = backgroundGeolocationService;
        this.alertCtrl = alertCtrl;
        this.exitService = exitService;
        this.deviceFeedback = deviceFeedback;
        this.configService = configService;
        this.gpsAudit = gpsAudit;
        this.modalController = modalController;
        this.syncService = syncService;
        this.jobChangedService = jobChangedService;
        this.media = media;
        this.jobReplicationService = jobReplicationService;
        this.cd = cd;
        this.conMonService = conMonService;
        this.pushService = pushService;
        this.t = this.navCtrl.parent;
        this.jobs = [];
        this.tjobs = [];
        this.mystr = '';
        this.notificationCount = 0;
        this.updateStatus = false;
        this.localConflicts = [];
        this.RemoteJob = lbclient.models.Job;
        this.Job = lbclient.models.LocalJob;
        this._localfilter = {
            "where": { and: [{ "mobjobDriver": this.driverId }, { "mobjobLegNumber": 0 }, { "mobjobStatus": { "neq": "DL" } }] },
            "order": 'mobjobStatus DESC'
        };
        this.filter = Object.assign({}, this._localfilter);
        this.logParams = { site: this.pdaParams.getSiteId(), driver: this.driverId, fn: 'HomePage' };
        this.log = this.logger.getInstance(this.logParams);
        this.showDetail = function (mobjobSeq) {
            _this.sharedService.setJobId(mobjobSeq);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_26__job_details_job_details__["a" /* JobDetailsPage */], {
                jobs: _this.jobs
            });
        };
        this.sortFunction = function (a, b) {
            if (a[_this.sortKey] > b[_this.sortKey])
                return 1;
            if (a[_this.sortKey] < b[_this.sortKey])
                return -1;
            return 0;
        };
        this.logonDriver = function () {
            _this.pdaParams.logonDriver();
            _this.eventService.sendMsg('LOGON', '');
            _this.sodService.checkDoSodAction('FIRST_RESUME'); // check if first for the day
            // Dump local storage at logon time - debug aid
            _this.messageService.dumpLocalStorage();
            _this.cd.reattach();
            _this.sharedService.loginFlag = _this.pdaParams.isDrvLoggedOn();
            if (_this.platformReady.isPlatformReady()) {
                _this.backgroundGeolocationService.start();
            }
        };
        this.logoffDriver = function () {
            _this.pdaParams.logoffDriver();
            _this.eventService.sendMsg('LOGOFF', '');
            _this.cd.reattach();
            _this.sharedService.loginFlag = _this.pdaParams.isDrvLoggedOn();
            if (_this.platformReady.isPlatformReady()) {
                _this.backgroundGeolocationService.stop();
            }
        };
        //  START - New code for syncing
        this.onChange = function (err, conflicts) {
            if (err)
                _this.log.error(JSON.stringify(err));
            if (conflicts && conflicts.length)
                _this.log.debug(JSON.stringify(conflicts));
            _this.pushService.registerForPush();
            _this.sharedService.setSyncInProgress(false);
            _this.syncService.setSyncInProgress(false); // not syncing now
            _this.log.debug("SYNC: FINISH");
            _this.jobStatuses = {};
            // We were getting the following error.  Where does the order come from?  reset filter here for now
            // Error: The order {"key":"mobjobSeq","reverse":1} is not valid
            _this.filter = Object.assign({}, _this._localfilter);
            //Job.find() retrieves from LocalJob - only leg zeroes so as to display a job list (not all legs)       
            _this.getJobs();
        }; //onChange() ends here 
        this.deleteLegs = function (baseJobNo, bookingDay) {
            var delfilter = {};
            if (_this.pdaParams.jobDetailOneDayOnly && bookingDay > 0) {
                // convoluted (maybe) way to get job date with no hh/mm/ss into date object
                var year = Math.round(bookingDay / 10000);
                var mon = Math.round((bookingDay % 10000) / 100);
                var day = Math.round((bookingDay % 100));
                var jobDateFilter = new Date();
                jobDateFilter.setUTCFullYear(year);
                jobDateFilter.setUTCMonth(mon - 1); // 0 - 11
                jobDateFilter.setUTCDate(day);
                // Dates are stored UTC so h/m/s all zero
                jobDateFilter.setUTCHours(0);
                jobDateFilter.setUTCMinutes(0);
                jobDateFilter.setUTCSeconds(0);
                jobDateFilter.setUTCMilliseconds(0);
                delfilter = { "where": { "mobjobBasejobNum": baseJobNo, "mobjobBookingDay": jobDateFilter } };
            }
            else {
                delfilter = { "where": { "mobjobBasejobNum": baseJobNo } };
            }
            _this.log.debug("About to delete legs delfilter:" + JSON.stringify(delfilter));
            _this.Job.find(delfilter, function (err, jobs) {
                var len = jobs.length;
                _this.log.debug("deleting:" + len + " legs");
                for (var leg = 0; leg < len; leg++) {
                    var job = jobs[leg];
                    _this.log.debug("delete leg:" + leg + " job:" + job.mobjobSeq);
                    job.delete();
                }
                //this.getJobs();
            });
        }; //deleteLegs() ends
        this.callback = function (err) {
        };
        this.resolveCallBack = function (err) {
            if (err)
                _this.log.debug('resolveCallBackErr:[' + err + ']');
        };
        this.resolveUsingSource = function (conflict) {
            conflict.resolveUsingSource(_this.refreshConflicts);
        };
        this.resolveUsingTarget = function (conflict) {
            if (conflict.targetChange.type() === 'delete') {
                conflict.SourceModel.deleteById(conflict.modelId, _this.refreshConflicts);
            }
            else {
                var m = new conflict.SourceModel(conflict.target);
                m.save(_this.refreshConflicts);
            }
        };
        this.resolveManually = function (conflict) {
            conflict.manual.save(function (err) {
                if (err)
                    return _this.errorCallback(err);
                conflict.resolve(_this.refreshConflicts);
            });
        };
        this.refreshConflicts = function (err) {
            if (err) {
                _this.log.error("refreshConflicts:" + err);
            }
            _this.localConflicts = [];
            _this.syncfilter = Object.assign({}, _this._syncfilter);
            _this.syncService.setCallingFunc("Home.ts->refreshConflicts");
            _this.syncService.hybridSync(_this.onChange, _this.syncfilter);
        };
        this.full_sync_and_load = function () {
            localStorage.removeItem('osc-local-db');
            _this.syncfilter = Object.assign({}, _this._syncfilter);
            _this.jobReplicationService.sync(_this.onChange, _this.syncfilter);
        };
        this.updateSelectedJobs = function (oldstatus) {
            _this.updateStatus = false;
            var newstatus = 'XX';
            var syncRequired = 0;
            if (_this.pdaParams.isDrvLoggedOff()) {
                var alertPopup = _this.alertCtrl.create({
                    title: 'Log On/Off Issue',
                    subTitle: "Please Log on to action jobs",
                    buttons: ['OK']
                });
                alertPopup.present();
                return;
            }
            // read all legs for this driver's jobs (no need to put into scope though?)
            //var all_legs_filter = angular.copy(_allfilter);
            var all_legs_filter = Object.assign({}, _this._allfilter);
            _this.sharedService.setSyncInProgress(_this.syncService.getSyncInProgress());
            // TODO - template buttons use this - should be checking syncService
            if (oldstatus === 'NJ')
                newstatus = 'AC';
            if (oldstatus === 'AC')
                newstatus = 'PU';
            if (oldstatus === 'PU')
                newstatus = 'Dp';
            _this.RemoteJob.find(all_legs_filter, function (err, jobs) {
                var len = jobs.length;
                var logstr = '';
                _this.tjobs = jobs;
                // update many jobs at once from e.g. NJ -> AC, or AC -> PU
                // TODO - will need to only update selected jobs rather than all at a particular status
                // TODO - cater for multi leg jobs when selecting by click rather than all
                var flag = 0;
                ;
                for (var i = 0; i < len; i++) {
                    // TODO - check if specific job is selected via checkbox on screen
                    var job = _this.tjobs[i];
                    if (job.mobjobStatus === oldstatus && newstatus != 'XX') {
                        flag++;
                        job.mobjobStatus = newstatus;
                        // Also set appropriate timestamp
                        switch (job.mobjobStatus) {
                            case 'AC':
                                job.mobjobTimeAC = Date.now();
                                break;
                            case 'PU':
                                job.mobjobTimePU = Date.now();
                                var lgps = _this.gpsAudit.getLastGPS();
                                if (lgps) {
                                    job.gpsLatPU = lgps.gps_latitude;
                                    job.gpsLongPU = lgps.gps_longitude;
                                }
                                break;
                            case 'Dp':
                                job.mobjobTimeDp = Date.now();
                                break;
                        }
                        job.save();
                        logstr = 'updateSelectedJobs:' + job.mobjobSeq + ' updated from ' + oldstatus + ' -> ' + job.mobjobStatus;
                        _this.log.info(logstr);
                        syncRequired++;
                    }
                } //Loop ends;
                // resync if required - updates server with status changes
                if (syncRequired) {
                    _this.syncfilter = Object.assign({}, _this._syncfilter);
                    _this.syncService.setCallingFunc("Home.ts->updateSelectedJobs");
                    _this.syncService.hybridSync(_this.onChange, _this.syncfilter);
                }
            }); //subscribe ends here
        }; //updateSelectedJobs ends here
        /*
        * Multiple deliveries with one signature
      */
        this.checkedJobs = []; //Riyaz: We could be better off using an array here.
        this.deliverSelectedJobs = function () {
            _this.checkedJobs = [];
            var len = _this.jobs.length;
            if (_this.pdaParams.isDrvLoggedOff()) {
                var alertPopup = _this.alertCtrl.create({
                    title: 'Log On/Off Issue',
                    subTitle: "Please Log on to action jobs",
                    buttons: ['OK']
                });
                alertPopup.present();
                return;
            }
            for (var i = 0; i < len; i++) {
                var job = _this.jobs[i];
                _this.log.debug("job:" + job.mobjobSeq + ", checked:" + job.checked);
                if (job.checked) {
                    _this.checkedJobs.push({
                        mobjobBasejobNum: job.mobjobBasejobNum,
                        mobjobBookingDay: job.mobjobBookingDay,
                        mobjobSeq: job.mobjobSeq
                    });
                }
            }
            if (_this.checkedJobs.length > 0) {
                // at least one job selected         
                _this.openSignatureModal();
            }
            else {
                var alertPopup = _this.alertCtrl.create({
                    title: 'Select a Job',
                    subTitle: "Please select a job for delivery.",
                    buttons: ['OK']
                });
                alertPopup.present();
                return;
            }
            _this.updateStatus = true;
        }; //deliverSelectedJobs() ends here
        this.openSignatureModal = function () {
            // this.cd.detach();
            var modal = _this.modalController.create(__WEBPACK_IMPORTED_MODULE_27__signature_signature__["a" /* SignaturePage */]);
            modal.onDidDismiss(function (result) {
                if (typeof result !== 'undefined') {
                    _this.podname = result.podname;
                    _this.signature = result.signature;
                    _this.signatureCallback(_this.signature, _this.podname);
                }
            });
            modal.present();
        };
        this.signatureCallback = function (signat, podname) {
            if (_this.checkedJobs.length > 0) {
                // So at this point we have a signature, a podname, and an array of 1 or more basejob numbers
                _this.log.info(podname);
                // get array of basejob no.s from object
                var baseJobs = _this.checkedJobs.map(function (a) { return a.mobjobBasejobNum; });
                var basejobfilter = {
                    "where": { and: [{ "mobjobDriver": _this.driverId }, { "mobjobStatus": { "neq": "DL" } }, { "mobjobBasejobNum": { "inq": baseJobs } }] },
                    "order": 'mobjobSeq ASC'
                };
                _this.Job.find(basejobfilter, function (err, jobs) {
                    if (err) {
                        _this.log.error(err);
                        return;
                    }
                    var len = jobs.length;
                    var syncRequired = 0;
                    var oldstatus = "";
                    var checkedJobs = _this.checkedJobs;
                    var found = false;
                    // so we have ALL jobs that matched base jobs selected - need to ensure date is valid selection too
                    // for permaanent jobs can have same job no but different dates on device simultaneously
                    for (var i = 0; i < len; i++) {
                        var job = jobs[i];
                        found = false;
                        for (var j = 0; j < checkedJobs.length; j++) {
                            var cjdate = Date.parse(checkedJobs[j].mobjobBookingDay);
                            var jdate = Date.parse(job.mobjobBookingDay);
                            if ((checkedJobs[j].mobjobBasejobNum == job.mobjobBasejobNum) &&
                                (cjdate == jdate)) {
                                found = true;
                                break;
                            }
                        }
                        if (!found) {
                            continue;
                        }
                        oldstatus = job.mobjobStatus;
                        job.mobjobStatus = 'DL';
                        var lgps = _this.gpsAudit.getLastGPS();
                        if (lgps) {
                            job.gpsLatDL = lgps.gps_latitude;
                            job.gpsLongDL = lgps.gps_longitude;
                        }
                        if (job.mobjobLegNumber > 0) {
                            job.mobjobSignat = signat || "";
                            if (podname) {
                                job.mobjobPodName = podname;
                                job.mobjobPodTime = new Date().toISOString();
                            }
                        }
                        job.save();
                        _this.logstr = 'deliverSelectedJobs:' + job.mobjobSeq + ' updated from ' + oldstatus + ' -> ' + job.mobjobStatus;
                        _this.log.info(_this.logstr);
                        syncRequired++;
                    }
                    if (syncRequired) {
                        _this.syncService.setSyncInProgress(false); // not syncing now        
                        _this.syncfilter = Object.assign({}, _this._syncfilter);
                        _this.syncService.setCallingFunc("Home.ts->deliverSelectedJobs");
                        _this.syncService.hybridSync(_this.onChange, _this.syncfilter);
                    }
                });
            }
        }; //signatureCallback(signat, podname) ends here
        this.exitTplusMobile = function () {
            _this.exitService.exitTplusMobile();
        };
        this.clearReplicationData = function () {
            _this.jobReplicationService.deleteJobChangeData(function (err, changeData) {
                if (err)
                    _this.log.error(err);
                if (changeData)
                    _this.log.debug(changeData);
            });
        };
        console.log("HomePage loading...");
        this.driverId = this.pdaParams.getDriverId();
        if (typeof (this.sharedService.loginFlag) == 'undefined')
            this.sharedService.loginFlag = this.pdaParams.isDrvLoggedOn();
        this.log.debug("syncInProgress:" + this.syncService.getSyncInProgress());
        this.syncService.setSyncInProgress(false);
        this.sharedService.setSyncInProgress(false);
        __WEBPACK_IMPORTED_MODULE_2__shared_sdk_index__["b" /* LoopBackConfig */].setBaseURL(configService.apiURL);
        __WEBPACK_IMPORTED_MODULE_2__shared_sdk_index__["b" /* LoopBackConfig */].setApiVersion(configService.API_VERSION);
        this.jobStatuses = {};
        this.podStatuses = true;
        this.jobChecked = 0;
        this.username = navParams.data;
        this.updateStatus = false;
        this.jobStatuses = {};
        this.podStatuses = true;
        this.jobChecked = 0;
        this.jobMetadata = this.sharedService.getJobMetaData();
        this.jsea_retval = this.jseaService.getJseaConfig();
        this.log.info('jsea_retval = ' + this.jsea_retval);
        //When this is called at present it can 1 of 2 situations. A SOD JSEA is required or a per job SOD is required.
        //SOD -- Start of day.The service knows which one. if its a per job one then    
        if (this.jsea_retval === 'SOD_NO') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_25__jsea_jsea__["a" /* JseaPage */]);
        }
        if (this.sharedService.testing) {
            this.pda_pickup_all = true;
            this.fullStatuses = false;
            this.pda_depart_all = true;
            this.pda_deliver_all = true;
        }
        else {
            this.pda_pickup_all = (this.siteConfig.getSiteConfigValue('PDA_PICKUP_ALL') == 'Y');
            //New functionality to get arrive/depart pickup/delivery times      
            this.fullStatuses = (this.pdaParams.pda_full_statuses || (this.siteConfig.getSiteConfigValue('PDA_FULL_STATUSES') == 'Y'));
            this.pda_depart_all = (this.pdaParams.pda_depart_all || (this.siteConfig.getSiteConfigValue('PDA_DEPART_ALL') == 'Y'));
            this.pda_deliver_all = (this.pdaParams.pda_deliver_all || (this.siteConfig.getSiteConfigValue('PDA_DELIVER_ALL') == 'Y'));
        }
        this.sortKey = this.siteConfig.getSiteConfigValue('PDA_SORT_COL1') || 'mobjobBookingDay';
        this.displayDate = this.siteConfig.getSiteConfigValue('PDA_DISPLAY_DATE') || 'mobjobBookingDay';
        this.displayFrom = this.siteConfig.getSiteConfigValue('PDA_DISPLAY_FROM') || 'mobjobSuburb';
        this.displayTo = this.siteConfig.getSiteConfigValue('PDA_DISPLAY_TO') || 'mobjobToSuburb';
        this.fontSize = this.siteConfig.getSiteConfigValue('PDA_ROW1_FONT_SIZE') || '18px';
        // initialise the current new message count in this scope
        this.newMessageCount = this.messageService.getNewMesssageCount();
        this._syncfilter = {
            "where": {
                "and": [
                    { "mobjobDriver": this.driverId },
                    /*{"mobjobStatus": { "inq": [ "NJ","AC","PU"] } }*/
                    { "mobjobStatus": { "neq": "DL" } }
                ]
            }
        };
        if (this.pdaParams.syncDL) {
            this._syncfilter = { "where": { "mobjobDriver": this.driverId } };
        }
        this.syncfilter = Object.assign({}, this._syncfilter);
        this._localfilter =
            {
                "where": { and: [{ "mobjobDriver": this.driverId }, { "mobjobLegNumber": 0 }, { "mobjobStatus": { "neq": "DL" } }] },
                "order": 'mobjobStatus DESC'
            };
        this.filter = Object.assign({}, this._localfilter);
        this._allfilter =
            {
                "where": { and: [{ "mobjobDriver": this.driverId }, { "mobjobStatus": { "neq": "DL" } }] },
                "order": 'mobjobStatus DESC'
            };
        /*  }//End of constructor()
       
         ionViewWillEnter() { */
        this.driverId = this.pdaParams.getDriverId();
        // Monitor for any new messages coming in.
        this.sub1 = this.sharedService.messageToDriver.subscribe(function (payload) {
            _this.newMessageCount = _this.messageService.getNewMesssageCount();
        });
        // Monitor the connection
        this.sub2 = this.conMonService.isConnected.subscribe(function (res) {
            _this.isOnline = res;
        });
        // Monitor the network type
        this.sub3 = this.conMonService.networkType.subscribe(function (res) {
            _this.networkType = res;
        });
        // Monitor NewJob allocations to the driver.
        this.sub4 = this.sharedService.NEWJOB.subscribe(function (payload) {
            // Nothing much to do here other than make a noise and refresh the jobs list
            _this.notificationCount++;
            _this.log.info(payload.platform + ":" + event + ':' + JSON.stringify(payload));
            localStorage.setItem("RefreshPage", 'true');
            _this.refresh();
            // NOTE - not intuitive - if app is asked to play sound it has been done by the notification service 
            // already so DO NOT do it again here
            if (!payload.playsound) {
                var notificationSnd = _this.getSoundForPayload(payload);
                notificationSnd.play();
            }
        });
        // Monitor the Job Cancellations
        this.sub5 = this.sharedService.CANCEL.subscribe(function (payload) {
            _this.notificationCount++;
            _this.log.info(payload.platform + ":" + event + ':' + JSON.stringify(payload));
            // Check For Cancellation and then delete job 
            if (typeof payload.data != "undefined") {
                // Belt and braces - we shouldn't get to the event handler if it's not a cancel
                if (payload.data.type == "CANCEL") {
                    var baseJobNo = payload.data.baseJob;
                    var bookingDay = payload.data.bookingDay || 0;
                    // delete from local storage and resync - if we don't do this we get a conflict - don't know why
                    _this.deleteLegs(baseJobNo, bookingDay);
                    if (!payload.playsound) {
                        var notificationSnd = _this.getSoundForPayload(payload);
                        notificationSnd.play();
                    }
                    //Reload the page to refresh the deleted last remaining job
                    //this.refresh();
                    //this.sharedService.setCancelNotif(true);
                    localStorage.setItem("RefreshPage", 'true');
                    //this.navCtrl.setRoot(this.navCtrl.getActive().component);
                    _this.refresh();
                }
                else {
                    // unknown payload type - just refresh
                    _this.refresh();
                }
            }
            else {
                // No specific payload data - just refresh
                _this.refresh();
            }
        });
        // Monitor the app resumes.
        this.sub6 = this.sharedService.RESUME.subscribe(function (event) {
            // Nothing much to do here other than refresh the jobs list
            _this.notificationCount++;
            // In testing we managed to do a sync start, pause app, resume without sync finish
            // which then caused all buttons to be disabled and no more syncs to happen
            _this.syncService.setSyncInProgress(false); // not syncing now
            _this.log.info("Received event:" + event + ': calling refresh function');
            _this.refresh();
        });
        this.sub7 = this.sharedService.DESTROY.subscribe(function () {
            _this.Job.removeAllListeners('conflicts');
            _this.refresh();
        });
        // TODO - we should store messages (maybe last x) to be viewed by driver
        // GCM messages come in with an event property set to 'message' with the message itself in the message property
        // APN messages come in without an event type property so we need to simply reference the message 
        // pushService will add the platform to the notification so we can appropriate action
        this.sub8 = this.sharedService.pushNotificationReceived.subscribe(function (notification) {
            _this.notificationCount++;
            _this.log.info('notification received in pushNotificationReceived subscription::' + JSON.stringify(notification.payload));
            var platform = notification.platform;
            _this.log.info(platform + ":pushNotificationReceived:" + notification.event);
            var message = notification.message;
            switch (platform) {
                case 'Android':
                    switch (notification.event) {
                        case 'message':
                            // notification.message is a string
                            // notification.payload is a JSON object - not always supplied
                            // TODO - double payload - one added by GCM?  can we make this more logical?
                            var payload = notification.payload.payload;
                            // Check For Cancellation and then delete job 
                            if (typeof payload.data != "undefined") {
                                // if we have a payload then do something with it
                                if (payload.data.type == "CANCEL") {
                                    var baseJobNo = payload.data.baseJob;
                                    var bookingDay = payload.data.bookingDay || 0;
                                    // delete from local storage and resync - if we don't do this we get a conflict - don't know why
                                    _this.deleteLegs(baseJobNo, bookingDay);
                                }
                                else {
                                    // unknown payload type - just refresh
                                    _this.refresh();
                                }
                            }
                            else {
                                // No specific payload data - just refresh
                                _this.refresh();
                            }
                            break;
                        default:
                            _this.log.info(platform + ":Unhandled notification.event:" + notification.event);
                            break;
                    }
                    break;
                case 'iOS':
                    // TODO - we need to check the correct property - notification.type?
                    switch (message.type) {
                        case 'CANCEL':
                            var baseJobNo = message.baseJob;
                            var bookingDay = message.bookingDay || 0;
                            _this.deleteLegs(baseJobNo, bookingDay);
                            break;
                        default:
                            // Probably new work - refresh
                            _this.log.info(platform + ":Unhandled message.type:" + message.type);
                            _this.refresh();
                            break;
                    }
                    break;
                default:
                    _this.log.info(platform + ":Unhandled platform:" + platform);
                    break;
            }
            ;
        });
    } //End of constructor()
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        if (this.isOnline) {
            if (this.pdaParams.jobdisplay) {
                // getJobs() will load from local storage while we wait for the sync to happen
                // this.getJobs();
                this.refresh();
            }
            //Here someone has either changed a status on the job detail or just looked or its a straight upload
            if (this.jobChangedService.getlastjobedited() == false) {
                //this.getJobs();
                this.refresh();
            }
            else {
                this.jobChangedService.setlastjobedited(false);
                this.refresh();
            }
            // if we are connected to the network then this will sync and the callback will load the jobs after sync
            this.log.debug("MAIN PAGE SYNC: START (will give a log in hybrid sync to say SYNC:START as well eg 2) ");
            //console.log("MAIN PAGE SYNC: START (will give a log in hybrid sync to say SYNC:START as well eg 2) ");
            this.sharedService.setSyncInProgress(false);
            this.syncfilter = Object.assign({}, this._syncfilter); //angular.copy(_syncfilter);
            //Use hybrid Sync      
            this.syncService.setCallingFunc("HOME.TS->MAIN PAGE SYNC");
            this.syncService.hybridSync(this.onChange, this.syncfilter);
        }
        else {
            // If we are not connected to the network just load jobs from local storage
            //this.getJobs();
            this.refresh();
        }
        // Conflict resolution 
        this.Job.on('conflicts', function (conflicts) {
            _this.localConflicts = conflicts;
            _this.log.error(conflicts.length + " conflicts:" + JSON.stringify(conflicts));
            var uconflicts = _this.removeDuplicates(conflicts, 'modelId');
            _this.log.debug(uconflicts.length + " uconflicts:" + JSON.stringify(uconflicts));
            conflicts.forEach(function (conflict) {
                conflict.type(function (err, type) {
                    conflict.type = type;
                    // This appears to give us the model data (i.e. the Job) for the conflict
                    conflict.models(function (err, source, target) {
                        conflict.source = source;
                        conflict.target = target;
                        conflict.manual = new conflict.SourceModel(source || target);
                        // log the conflict details
                        _this.log.error("conflicts: source:" + JSON.stringify(conflict.source));
                        _this.log.error("conflicts: target:" + JSON.stringify(conflict.target));
                        // Maybe simply clobber the remote end with the local data
                        // as resolveUsingSource doesn't appear to do what we want
                        if (conflict.source) {
                            _this.log.error("conflicts: NOW CALLING RemoteJob.upsert()");
                            _this.RemoteJob.upsert(conflict.source, function (err, model) {
                                if (err)
                                    _this.log.error("upsert:error:" + JSON.stringify(err));
                                if (model)
                                    _this.log.info("upsert: model:" + JSON.stringify(model));
                            });
                        }
                    });
                    // This functions gives us change model data for the conflict e.g. prev/rev etc
                    conflict.changes(function (err, source, target) {
                        conflict.sourceChange = source;
                        conflict.targetChange = target;
                        var sourceType = conflict.sourceChange.type();
                        var targetType = conflict.targetChange.type();
                        // log the conflict details
                        _this.log.error("conflicts: source type:" + sourceType + ", sourceChange:" + JSON.stringify(conflict.sourceChange));
                        _this.log.error("conflicts: target type:" + targetType + ", targetChange:" + JSON.stringify(conflict.targetChange));
                        // automatically resolve conflicts
                        // If source is update and target is delete, then a job has been completed
                        // on the server and should no longer be on the client so auto resolve this
                        // (we still don't know why this happens though.)
                        if (sourceType == 'update' && targetType == 'delete') {
                            conflict.resolveUsingTarget(_this.refreshConflicts);
                        }
                        else {
                            //Override with what client has done
                            _this.log.error("conflicts: used to NOW CALLING RESOLVE USING SOURCE");
                        }
                    });
                });
            });
        });
        /*
           * resolveConflictsInClient here refers to the loopback client portion of the code NOT
           * the client app.  We don't want to process conflicts austomatically in the loopback
           * code as we have an event handler in this controller which takes care of things
           */
        this.jobReplicationService.conflicts.resolveConflictsInClient =
            (this.pdaParams.pda_client_conflicts || (this.siteConfig.getSiteConfigValue('PDA_CLIENT_CONFLICTS') == 'Y'));
    }; //End of ionViewWillEnter()
    HomePage.prototype.isDrvLoggedOff = function () {
        return !this.sharedService.loginFlag;
    };
    HomePage.prototype.isDrvLoggedOn = function () {
        return this.sharedService.loginFlag;
    };
    //This is from LOCAL STORAGE
    HomePage.prototype.getJobs = function () {
        var _this = this;
        this.jobStatuses = {};
        this.filter = Object.assign({}, this._localfilter);
        this.Job.find(this.filter, function (err, jobs) {
            // not syncing now
            _this.syncService.setSyncInProgress(false);
            // TODO - need to check error and only show jobs if no error
            if (!(_this.utilService.isEmpty(jobs))) {
                _this.jobs = jobs;
                if (_this.sortKey && _this.sortKey != '')
                    _this.jobs.sort(_this.sortFunction);
                var syncRequired = 0;
                for (var i = 0; i < _this.jobs.length; i++) {
                    _this.base.convertDates(_this.jobs[i], _this.jobMetadata);
                    // Add checked property for possible multi delivery
                    _this.jobs[i].checked = false;
                    var job = _this.jobs[i];
                    job.displayDate = job[_this.displayDate];
                    job.displayFrom = job[_this.displayFrom];
                    if (job.mobjobStatus == 'UJ') {
                        job.mobjobStatus = 'NJ';
                        job.onDeviceTime = new Date().toISOString();
                        _this.mystr = 'getJobs:' + job.mobjobSeq + ' updated from ' + 'UJ' + ' -> ' + job.mobjobStatus;
                        _this.log.info(_this.mystr);
                        job.save();
                        syncRequired++;
                    }
                    // keep a count of the various job statuses
                    if (_this.jobStatuses[job.mobjobStatus]) {
                        _this.jobStatuses[job.mobjobStatus] += 1;
                    }
                    else
                        _this.jobStatuses[job.mobjobStatus] = 1;
                    if (!job.mobjobHasPod && (job.mobjobStatus == 'PU' || job.mobjobStatus == 'Ad')) {
                        _this.podStatuses = false;
                    }
                } //end of the for loop
                //Make sure changes in jobs are reflected in the view.      
                if (syncRequired) {
                    _this.sharedService.setSyncInProgress(true);
                    _this.syncfilter = Object.assign({}, _this._syncfilter); //angular.copy(_syncfilter);
                    _this.syncService.setCallingFunc("Home.ts->Job.find");
                    _this.syncService.hybridSync(_this.onChange, _this.syncfilter);
                }
                _this.titleWithTotal = "Jobs: " + " (" + _this.jobs.length + ")";
            }
            /*  if (!this.cd['destroyed']) {
               this.cd.detectChanges();
             } */
            //if (this.sharedService.getCancelNotif()) {
            if (localStorage.getItem('RefreshPage') == 'true') {
                //this.sharedService.setCancelNotif(false);
                localStorage.setItem("RefreshPage", 'false');
                _this.freeupResources();
                _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
            }
        });
    }; //getJobs() ends here
    HomePage.prototype.refresh = function () {
        this.syncfilter = Object.assign({}, this._syncfilter);
        this.syncService.setCallingFunc("Home.ts->PushNotificationReceived");
        this.syncService.hybridSync(this.onChange, this.syncfilter);
    };
    HomePage.prototype.getSoundForPayload = function (payload) {
        var platform = payload.platform;
        var evtype = payload.type;
        var sound = "";
        var notificationSnd = {};
        var file;
        switch (platform) {
            case 'Android':
                sound = "/android_asset/www/assets/audio/notification.mp3";
                break;
            case 'iOS':
                if (payload.hasOwnProperty('sound')) {
                    sound = payload.sound;
                }
                else {
                    // NOTE - this does not appear to work - ensure we send correct sound property for iOS
                    sound = "file://www/audio/notification.aiff";
                }
                break;
            default:
                sound = 'default';
                break;
        }
        ;
        this.log.debug(platform + ":" + evtype + ":sound now:[" + sound + "]");
        if (sound != "") {
            this.log.debug('sound:[' + sound + ']');
            file = this.media.create(sound);
        }
        return file;
    }; //getSoundForPayload ends
    HomePage.prototype.getwork = function () {
        this.syncfilter = Object.assign({}, this._syncfilter);
        this.jobReplicationService.sync(this.callback, this.syncfilter);
    };
    ;
    HomePage.prototype.connected = function () {
        return this.isOnline;
    };
    ;
    HomePage.prototype.reload = function () {
        this.getJobs();
    };
    ;
    HomePage.prototype.clearLocalStorage = function () {
        localStorage.removeItem('osc-local-db');
    };
    ;
    // Remove duplicates from an array of objects in javascript  
    HomePage.prototype.removeDuplicates = function (arr, prop) {
        var obj = {};
        for (var i = 0, len = arr.length; i < len; i++) {
            if (!obj[arr[i][prop]])
                obj[arr[i][prop]] = arr[i];
        }
        var newArr = [];
        for (var key in obj)
            newArr.push(obj[key]);
        return newArr;
    };
    ;
    HomePage.prototype.multiAccept = function () {
        this.updateSelectedJobs('NJ');
    };
    HomePage.prototype.multiPickup = function () {
        this.updateSelectedJobs('AC');
    };
    HomePage.prototype.multiDepartPickup = function () {
        this.updateSelectedJobs('PU'); // PDA_FULL_STATUSES    
    };
    HomePage.prototype.errorCallback = function (err) {
        if (err)
            throw err;
    };
    HomePage.prototype.enableDeliverSelected = function () {
        return this.jobs.some(function (job) { return job.checked; });
    };
    HomePage.prototype.multiDeliver = function () {
        this.deliverSelectedJobs();
    }; //multiDeliver ends here
    HomePage.prototype.generateWadsHeader = function (job) {
        var output = 'WADS';
        output = 'Inv: ' + job.mobjobClientRef2 + ' - ' + job.mobjobJobPieces + ' ' + job.mobjobServiceCode;
        return output;
    };
    ;
    HomePage.prototype.generateJobHeader = function (item) {
        this.mystr = 'generateJobHeader';
        //log.debug(mystr); 
        return this.base.generateHeaderForModelInstance(item, this.jobMetadata, false);
    };
    ;
    HomePage.prototype.trackByFn = function (index, job) {
        return job.id;
    };
    /*   ionViewWillLeave() {
        this.cd.detach();
        this.sub1.unsubscribe();
        this.sub2.unsubscribe();
        this.sub3.unsubscribe();
        this.sub4.unsubscribe();
        this.sub5.unsubscribe();
        this.sub6.unsubscribe();
        this.sub7.unsubscribe();
        this.sub8.unsubscribe();
    
      } */
    HomePage.prototype.freeupResources = function () {
        this.cd.detach();
        this.sub1.unsubscribe();
        this.sub2.unsubscribe();
        this.sub3.unsubscribe();
        this.sub4.unsubscribe();
        this.sub5.unsubscribe();
        this.sub6.unsubscribe();
        this.sub7.unsubscribe();
        this.sub8.unsubscribe();
    };
    HomePage.prototype.handletouch = function () {
        this.deviceFeedback.haptic(0);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/home/home.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-buttons left>\n\n      <span [ngSwitch]="this.sharedService.loginFlag">\n\n        <ion-badge class="common-border" color="secondary" *ngSwitchCase="true"> Logged In</ion-badge>\n\n        <ion-badge class="common-border" color="danger" *ngSwitchCase="false"> Logged Off</ion-badge>\n\n      </span>\n\n    </ion-buttons>\n\n\n\n    <ion-title>JOBS</ion-title>\n\n    <ion-buttons right>\n\n      <ion-badge class="common-border" color="danger" *ngIf="newMessageCount">{{newMessageCount}}</ion-badge>\n\n      <ion-badge class="common-border" color="danger"> Driver # {{driverId}}</ion-badge>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding [ngClass]="{ \'overflow-scroll\': (desktopBrowserScrolling == true) }" text-wrap>\n\n\n\n  <ion-item *ngIf="pdaParams.multiSelect && ( jobStatuses[\'NJ\'] || jobStatuses[\'AC\'] || jobStatuses[\'PU\'] || jobStatuses[\'Ad\'])">\n\n\n\n    <button ion-button class="common-border" color="yel" (click)="multiAccept()" *ngIf="jobStatuses[\'NJ\']" [disabled]="syncService.getSyncInProgress()">\n\n      Accept {{ jobStatuses[\'NJ\'] }}\n\n    </button>\n\n\n\n\n\n    <button ion-button class="common-border" color="secondary" (click)="multiPickup()" *ngIf="pda_pickup_all && jobStatuses[\'AC\']"\n\n      [disabled]="syncService.getSyncInProgress()">\n\n      Pickup {{ jobStatuses[\'AC\'] }}\n\n    </button>\n\n\n\n    <button ion-button class="common-border" color="mag" (click)="multiDepartPickup()" *ngIf="pda_depart_all && jobStatuses[\'PU\']"\n\n      [disabled]="syncService.getSyncInProgress()">\n\n      Depart {{ jobStatuses[\'PU\'] }}\n\n    </button>\n\n\n\n    <button ion-button class="common-border" color="mag" (click)="multiDeliver()" *ngIf="pda_deliver_all && ((jobStatuses[\'PU\'] && !fullStatuses) || (jobStatuses[\'Ad\'] && fullStatuses)) && !podStatuses "\n\n      [disabled]="syncService.getSyncInProgress() && !enableDeliverSelected()">\n\n      Deliver selected\n\n    </button>\n\n\n\n\n\n    <!-- pda_deliver_all : {{pda_deliver_all}}\n\n      <br> (jobStatuses[\'PU\'] && !fullStatuses) : {{(jobStatuses[\'PU\'] && !fullStatuses)}}\n\n      <br> (jobStatuses[\'Ad\'] && fullStatuses) : {{(jobStatuses[\'Ad\'] && fullStatuses)}}\n\n      <br> !podStatuses : {{!podStatuses}}\n\n      <br> syncService.getSyncInProgress() : {{syncService.getSyncInProgress()}} -->\n\n    <!--  <br> enableDeliverSelected() : {{enableDeliverSelected()}} -->\n\n    <br>\n\n\n\n    <!-- <p>pda_deliver_all :{{pda_deliver_all}}</p>\n\n    <p>jobStatuses[\'PU\'] :{{jobStatuses[\'PU\']}}</p>\n\n    <p>!fullStatuses :{{!fullStatuses}}</p>\n\n    <p>!podStatuses :{{!podStatuses}}</p> -->\n\n\n\n  </ion-item>\n\n\n\n\n\n  <ion-card round inset class="ion-card" *ngFor="let job of jobs;trackBy:trackByFn;" type="item-text-wrap" (click)="showDetail(job.mobjobSeq)"\n\n    tappable>\n\n\n\n    <!--\n\n    <div>\n\n        <p> pda_deliver_all : {{pda_deliver_all}} </p>\n\n      <p>(job.mobjobStatus == \'Ad\' && fullStatuses): {{(job.mobjobStatus == \'Ad\' && fullStatuses)}}</p>\n\n      <p>(job.mobjobStatus == \'PU\' && !fullStatuses): {{(job.mobjobStatus == \'PU\' && !fullStatuses)}}</p>\n\n      <p>!job.mobjobHasPod: {{!job.mobjobHasPod}}</p> \n\n    </div> -->\n\n\n\n    <!--  <p>job.checked : {{job.checked}}</p> -->\n\n\n\n    <div class="list">\n\n\n\n      <input type="checkbox" *ngIf="pda_deliver_all && ((job.mobjobStatus == \'Ad\' && fullStatuses) || (job.mobjobStatus == \'PU\' && !fullStatuses))  && !job.mobjobHasPod"\n\n        name="job.mobjobBasejobNum" id="job.mobjobBasejobNum" [(ngModel)]="job.checked" (click)="$event.stopPropagation()"\n\n      />\n\n      <span>&nbsp;</span>\n\n\n\n      <!-- <ion-toggle name="job.mobjobBasejobNum" *ngIf="pda_deliver_all && ((job.mobjobStatus == \'Ad\' && fullStatuses) || (job.mobjobStatus == \'PU\' && !fullStatuses))  && !job.mobjobHasPod"\n\n        [(ngModel)]="job.checked" (click)="$event.stopPropagation()"></ion-toggle>\n\n      <span>&nbsp;</span> -->\n\n\n\n\n\n      <span ngSwitch="{{job.mobjobStatus}}">\n\n        <ion-badge class="common-border" color="secondary" *ngSwitchCase="\'DL\'">DL</ion-badge>\n\n        <ion-badge class="common-border" color="secondary" *ngSwitchCase="\'PU\'">PU</ion-badge>\n\n        <ion-badge class="common-border" color="yel" *ngSwitchCase="\'AC\'">AC</ion-badge>\n\n        <ion-badge class="common-border" color="mag" *ngSwitchCase="\'Ap\'">Ap</ion-badge>\n\n        <ion-badge class="common-border" color="mag" *ngSwitchCase="\'Dp\'">Dp</ion-badge>\n\n        <ion-badge class="common-border" color="mag" *ngSwitchCase="\'Ad\'">Ad</ion-badge>\n\n        <ion-badge class="common-border" color="mag" *ngSwitchCase="\'Dd\'">Dd</ion-badge>\n\n        <ion-badge class="common-border" color="danger" *ngSwitchDefault>NJ</ion-badge>\n\n      </span>\n\n\n\n      <div class="jobdetails">\n\n        <span [ngStyle]="{\'font-size\': fontSize}" class="jobFromSubspan"> {{ job.mobjobSuburb | changeDisplayFrom:job}} </span> -\n\n        <span [ngStyle]="{\'font-size\': fontSize}" class="jobToSubspan"> {{ job.mobjobToSuburb | changeDisplayTo:job}} </span>\n\n        <span class="jobServicespan"> {{job.mobjobServiceCode | changeDisplaySvc:pdaParams}} </span>\n\n\n\n        <div *ngIf="pdaParams.siteId === \'WADS\'">\n\n          {{generateWadsHeader(job)}} {{ job.displayDate | date:\'dd-MM-yyyy\' }}\n\n        </div>\n\n\n\n        <div *ngIf="pdaParams.siteId !== \'WADS\'">\n\n          <h3>{{generateJobHeader(job)}}</h3>\n\n          <div class="rightJobData">\n\n            <span class="jobdatespan"> {{ job.displayDate | date:\'dd-MM-yyyy\' }} </span>\n\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </ion-card>\n\n\n\n  <ion-card round inset class="ion-card" *ngIf="jobs.length ==0">\n\n    <ion-card-content>No jobs assigned!</ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-row>\n\n    <ion-col>\n\n      <button ion-button class="common-border" full round color="secondary" *ngIf="isDrvLoggedOff()" [(ngModel)]="this.sharedService.loginFlag"\n\n        ngDefaultControl (click)="logonDriver()">\n\n        <ion-icon name="log-in" style="font-size:20px;color:white;text-shadow:2px 2px 4px #000000;"> L/ON</ion-icon>\n\n      </button>\n\n\n\n      <button ion-button class="common-border" full round color="danger" *ngIf="isDrvLoggedOn()" [(ngModel)]="this.sharedService.loginFlag"\n\n        ngDefaultControl (click)="logoffDriver()">\n\n        <ion-icon name="log-out" style="font-size:20px;color:white;text-shadow:2px 2px 4px #000000;"> L/OFF</ion-icon>\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <section id="totals" *ngIf="pdaParams.debugMode">\n\n    <strong> {{jobs.length}} job(s) loaded </strong>\n\n  </section>\n\n\n\n  <section id="local-conflicts" class="conflicts" *ngIf="localConflicts.length && pdaParams.debugMode">\n\n    <ion-scroll direction="xy">\n\n      <h1>Local Conflicts</h1>\n\n      <div *ngFor="let conflict of localConflicts">\n\n        <table>\n\n          <tr>\n\n            <th>Local Data</th>\n\n            <th>Remote Data</th>\n\n          </tr>\n\n\n\n          <tr>\n\n            <td>\n\n              <div *ngIf="conflict.sourceChange.type() === \'delete\'">\n\n                <strong>Deleted</strong>\n\n              </div>\n\n\n\n              <table *ngIf="conflict.sourceChange.type() !== \'delete\'">\n\n                <tr>\n\n                  <th>id</th>\n\n                  <th>change</th>\n\n                  <!--<th>data</th>-->\n\n                  <th>status</th>\n\n                  <th>driver</th>\n\n                  <th>job</th>\n\n                  <th>last</th>\n\n                </tr>\n\n\n\n                <tr>\n\n                  <td>{{conflict.sourceChange.modelId}}</td>\n\n                  <td>{{conflict.sourceChange.type()}}</td>\n\n                  <!--\n\n              <td>\n\n                {{conflict.source}}\n\n              </td>\n\n-->\n\n                  <td>\n\n                    {{conflict.source.mobjobStatus}}\n\n                  </td>\n\n                  <td>\n\n                    {{conflict.source.mobjobDriver}}\n\n                  </td>\n\n                  <td>\n\n                    {{conflict.source.mobjobSeq}}\n\n                  </td>\n\n                  <td>\n\n                    {{conflict.source.lastModified}}\n\n                  </td>\n\n                </tr>\n\n\n\n                <tr class="hide">\n\n                  <td>\n\n                    {{conflict}}\n\n                  </td>\n\n                  <td>\n\n                    {{conflict.sourceChange}}\n\n                  </td>\n\n                  <td>\n\n                    {{conflict.source}}\n\n                  </td>\n\n                </tr>\n\n\n\n              </table>\n\n\n\n              <button (click)="resolveUsingSource(conflict)">Use Local Version</button>\n\n            </td>\n\n\n\n            <td>\n\n              <div *ngIf="conflict.targetChange.type() === \'delete\'">\n\n                <strong>Deleted</strong>\n\n              </div>\n\n              <table *ngIf="conflict.targetChange.type() !== \'delete\'">\n\n                <tr>\n\n                  <th>id</th>\n\n                  <th>change</th>\n\n                  <!--<th>data</th>-->\n\n                  <th>status</th>\n\n                  <th>driver</th>\n\n                  <th>job</th>\n\n                  <th>last</th>\n\n                </tr>\n\n\n\n                <tr>\n\n                  <td>{{conflict.targetChange.modelId}}</td>\n\n                  <td>{{conflict.targetChange.type()}}</td>\n\n                  <!--\n\n              <td>\n\n                {{conflict.target}}\n\n              </td>\n\n-->\n\n                  <td>\n\n                    {{conflict.target.mobjobStatus}}\n\n                  </td>\n\n                  <td>\n\n                    {{conflict.target.mobjobDriver}}\n\n                  </td>\n\n                  <td>\n\n                    {{conflict.target.mobjobSeq}}\n\n                  </td>\n\n                  <td>\n\n                    {{conflict.target.lastModified}}\n\n                  </td>\n\n                </tr>\n\n\n\n                <tr class="hide">\n\n                  <td>\n\n                    {{conflict}}\n\n                  </td>\n\n                  <td>\n\n                    {{conflict.targetChange}}\n\n                  </td>\n\n                  <td>\n\n                    {{conflict.target}}\n\n                  </td>\n\n                  <td></td>\n\n                  <td></td>\n\n                  <td></td>\n\n                </tr>\n\n\n\n              </table>\n\n              <button (click)="resolveUsingTarget(conflict)">Use Server Version</button>\n\n            </td>\n\n\n\n          </tr>\n\n\n\n        </table>\n\n        <!--\n\n        <div class="manual-merge">\n\n          <h4>Merge Manually</h4>\n\n          <input class="toggle" type="checkbox" ng-model="conflict.manual.completed">\n\n          <input class="edit" ng-trim="false" ng-model="conflict.manual.title">\n\n          <button (click)="resolveManually(conflict)">Use This Version</button>\n\n        </div>       \n\n        -->\n\n      </div>\n\n    </ion-scroll>\n\n  </section>\n\n\n\n  <section id="debug" class="debug" *ngIf="pdaParams.debugMode">\n\n    <!--\n\n		<button (click)="sync()" [ngClass]="{deltas: needSync}">Sync</button>\n\n		<button (click)="connect()">Connect</button>\n\n		<button (click)="disconnect()">Disconnect</button>\n\n		<button (click)="reload()">Reload jobs</button>\n\n		<button (click)="full_sync_and_load()">Remove/Resync</button>\n\n		<button (click)="clearReplicationData()">Clear local repl</button>\n\n		<button (click)="exitTplusMobile()" >Exit TplusMobile</button>\n\n-->\n\n    <!-- <a href="/debug" target="_blank">Debug</a> -->\n\n    <strong> connected: {{ connected() }} </strong>\n\n    <br>\n\n    <strong> syncing: {{ syncService.getSyncInProgress() }} </strong>\n\n    <br>\n\n    <strong> pda_pickup_all: {{ pda_pickup_all }} </strong>\n\n    <br>\n\n    <strong> pda_deliver_all: {{ pda_deliver_all }} </strong>\n\n    <br>\n\n    <strong> fullStatuses: {{ fullStatuses }} </strong>\n\n    <br>\n\n    <strong> jobStatuses[\'PU\']: {{ jobStatuses[\'PU\'] }} </strong>\n\n    <br>\n\n    <strong> jobStatuses[\'Ad\']: {{ jobStatuses[\'Ad\'] }} </strong>\n\n  </section>\n\n</ion-content>'/*ion-inline-end:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/home/home.html"*/,
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_6__providers_pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_siteconfig_service_siteconfig_service__["a" /* SiteconfigServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_log_service_log_service__["a" /* LogServiceProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_base_service_base_service__["a" /* BaseServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_9__providers_shared_service_shared_service__["a" /* SharedServiceProvider */], __WEBPACK_IMPORTED_MODULE_10__providers_jsea_service_jsea_service__["a" /* JseaServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_11__providers_message_service_message_service__["a" /* MessageServiceProvider */], __WEBPACK_IMPORTED_MODULE_12__providers_event_service_event_service__["a" /* EventServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_13__providers_sod_service_sod_service__["a" /* SodServiceProvider */], __WEBPACK_IMPORTED_MODULE_20__providers_util_service_util_service__["a" /* UtilServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_15__providers_platform_ready_service_platform_ready_service__["a" /* PlatformReadyServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_14__providers_background_geolocation_service_background_geolocation_service__["a" /* BackgroundGeolocationServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_17__providers_exit_service_exit_service__["a" /* ExitServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_device_feedback__["a" /* DeviceFeedback */], __WEBPACK_IMPORTED_MODULE_19__providers_config_service_config_service__["a" /* ConfigServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_18__providers_gps_audit_service_gps_audit_service__["a" /* GpsAuditServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_16__providers_sync_service_sync_service__["a" /* SyncServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_21__providers_job_changed_service_job_changed_service__["a" /* JobChangedServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_media__["a" /* Media */],
        __WEBPACK_IMPORTED_MODULE_22__providers_job_replication_service_job_replication_service__["a" /* JobReplicationServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_23__providers_connectivity_monitor_connectivity_monitor__["a" /* ConnectivityMonitorProvider */],
        __WEBPACK_IMPORTED_MODULE_24__providers_push_service_push_service__["a" /* PushServiceProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__platform_ready_service_platform_ready_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__ = __webpack_require__(71);
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
var DeviceServiceProvider = (function () {
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
            this.device.cordova = this.cdevice.cordova;
            this.device.model = this.cdevice.model;
            this.device.platform = this.cdevice.platform;
            this.device.uuid = this.cdevice.uuid;
            this.device.version = this.cdevice.version;
        }
        return this.device;
    }; //getDevice() ends here
    return DeviceServiceProvider;
}());
DeviceServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__platform_ready_service_platform_ready_service__["a" /* PlatformReadyServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__["a" /* Device */]])
], DeviceServiceProvider);

//# sourceMappingURL=device-service.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackgroundGeolocationServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_background_geolocation__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_sdk_models_GpsHistory__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_sdk_services_custom_GpsHistory__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gps_audit_service_gps_audit_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pdaparams_service_pdaparams_service__ = __webpack_require__(9);
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
  Generated class for the BackgroundGeolocationServiceProvider provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var BackgroundGeolocationServiceProvider = (function () {
    function BackgroundGeolocationServiceProvider(pdaParams, device, logger, gpsAudit, gpsHistApi, backgroundGeolocation) {
        var _this = this;
        this.pdaParams = pdaParams;
        this.device = device;
        this.logger = logger;
        this.gpsAudit = gpsAudit;
        this.gpsHistApi = gpsHistApi;
        this.backgroundGeolocation = backgroundGeolocation;
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
        this.config = {
            desiredAccuracy: 10,
            stationaryRadius: 20,
            distanceFilter: 30,
            interval: 60000,
            //locationTimeout: 60,			
            activityType: 'AutomotiveNavigation',
            debug: false,
            stopOnTerminate: true // <-- enable this to clear background location settings when the app terminates
        };
        this.saveGpsToDb = function (drvid, location) {
            //GpsHistory() is a call to the GpsHistory model
            var lgps = new __WEBPACK_IMPORTED_MODULE_4__shared_sdk_models_GpsHistory__["a" /* GpsHistory */]();
            lgps.gps_driver_id = drvid;
            //var platform = $cordovaDevice.getPlatform();
            _this.platform = _this.device.platform;
            _this.log.info("BGGS platform:" + _this.platform + ", location:" + JSON.stringify(location));
            // LT - 06/07/2016 - with 2.52 release iOS devices do not appear to have a location.timestamp property
            // but do have the location.time property - check for both
            if (_this.platform == 'ios') {
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
            _this.ltimestamp = new Date(lgps.gps_timestamp);
            // check last GPS and only update if diff is greater than x seconds
            _this.thisGPSsecs = _this.ltimestamp.getTime() / 1000; // current GPS time in seconds
            _this.diffGPSsecs = _this.thisGPSsecs - _this.lastGPSsecs;
            _this.log.info("BGGS: platform:" + _this.platform + ", gpstimestamp:" + _this.ltimestamp + ", lastGPSsecs:" + _this.lastGPSsecs + ", thisGPSsecs:"
                + _this.thisGPSsecs + ", diff:" + _this.diffGPSsecs + ", threshold:" + _this.threshold);
            _this.lastGPSsecs = _this.ltimestamp.getTime() / 1000;
            // lgps.gps_timestamp is UTC at this point
            var ldate = new Date(lgps.gps_timestamp);
            var oset = ldate.getTimezoneOffset();
            // lgps.gps_timestamp converted to local time - no timezone now
            var temp = _this.ltimestamp.getTime() + (oset * -1) * 60 * 1000;
            lgps.gps_timestamp = temp;
            lgps.gps_latitude = location.latitude.toFixed(6);
            lgps.gps_longitude = location.longitude.toFixed(6);
            lgps.gps_quality = location.accuracy;
            lgps.gps_speed = 0; //location.coords.speed;
            lgps.gps_time = 0; //new Date(location.timestamp).getTime();
            // TODO - need to NOT rely on log - need our own access to this function
            var loggedOn = _this.log.pdaParams.isDrvLoggedOn();
            _this.log.info("BGGS driver:" + lgps.gps_driver_id + ", loggedOn:" + loggedOn + ", lgps:" + JSON.stringify(lgps));
            _this.gpsAudit.saveGps(lgps);
            // TODO - do we need any more criteria to create history record?  if connected?
            if (lgps.gps_driver_id > 0 && _this.diffGPSsecs > _this.threshold && loggedOn) {
                _this.log.info("About to save GPS for driver:" + lgps.gps_driver_id + ", lgps:" + JSON.stringify(lgps));
                _this.gpsHistApi.create(lgps).subscribe(function (obj) {
                    _this.log.info("gpsHistApi.create success: obj:" + JSON.stringify(obj));
                }, function (err) {
                    _this.log.error("gpsHistApi.create failed: err:" + JSON.stringify(err));
                });
            }
        }; //saveGpsToDb() ends here
        /*=====================================================*/
        /*             CALLBACK FROM PLUGIN                    */
        /*=====================================================*/
        this.callbackFn = function (location) {
            _this.log.info('BGGS callbackFn: calling saveGpsToDb: location:' + JSON.stringify(location));
            _this.saveGpsToDb(_this.pdaParams.getDriverId(), location);
            // IMPORTANT:  We must execute the finish method here to inform the native plugin that we're finished,
            // and the background-task may be completed.  we must do this regardless if our HTTP request is successful or not.
            // IF we DON'T, ios will CRASH our APP for spending too much time in the background.
            if (_this.platform == 'ios')
                _this.backgroundGeolocation.finish();
        };
        this.failureFn = function (error) {
            _this.log.info('BGGS failureFn: error:' + JSON.stringify(error));
        };
        /*=====================================================*/
        /*             START METHOD                            */
        /*=====================================================*/
        this.start = function () {
            _this.backgroundGeolocation.configure(_this.config)
                .subscribe(function (location) {
                _this.callbackFn(location);
            });
            _this.log.info('BGGS START: configure with:' + JSON.stringify(_this.config));
            // start recording location
            _this.backgroundGeolocation.start();
        };
        /*=====================================================*/
        /*             STOP METHOD                            */
        /*=====================================================*/
        this.stop = function () {
            // If we wish to turn OFF background-tracking, we can call the #stop method.
            _this.log.info('BGGS STOP Method called:');
            _this.backgroundGeolocation.stop();
        };
        this.platform = this.device.platform;
        //console.log('Hello BackgroundGeolocationServiceProvider Provider');
    }
    return BackgroundGeolocationServiceProvider;
}());
BackgroundGeolocationServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_8__log_service_log_service__["a" /* LogServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_6__gps_audit_service_gps_audit_service__["a" /* GpsAuditServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__shared_sdk_services_custom_GpsHistory__["a" /* gpshistoryapi */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */]])
], BackgroundGeolocationServiceProvider);

//# sourceMappingURL=background-geolocation-service.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobReplicationServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_connectivity_monitor_connectivity_monitor__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config_service_config_service__ = __webpack_require__(17);
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
var JobReplicationServiceProvider = (function () {
    function JobReplicationServiceProvider(http, conMonService, configService) {
        var _this = this;
        this.http = http;
        this.conMonService = conMonService;
        this.configService = configService;
        this.LocalJob = lbclient.models.LocalJob;
        this.RemoteJob = lbclient.models.Job;
        this.models = lbclient.models;
        this.lastFilter = {};
        this.d = new Date();
        this.since = { push: -1, pull: -1 };
        this.syncstatus = {
            _syncInProgress: false,
            get syncInProgress() {
                //console.log('syncInProgress?', this._syncInProgress);
                return this._syncInProgress;
            },
            set syncInProgress(value) {
                this._syncInProgress = value;
            }
        };
        this.fullreplication = {
            _fullReplication: false,
            get fullReplication() {
                //console.log('syncInProgress?', this._syncInProgress);
                return this._fullReplication;
            },
            set fullReplication(value) {
                this._fullReplication = value;
            }
        };
        this.conflicts = {
            _resolveConflicts: false,
            get resolveConflictsInClient() {
                //console.log('isConnected?', this._isConnected);
                return this._resolveConflicts;
            },
            set resolveConflictsInClient(value) {
                this._resolveConflicts = value;
            }
        };
        this.sync = function (callback, filter) {
            // var numargs = arguments.length;
            var options = { filter: '', lastFilter: '' };
            //var changefilter = {};
            var cb = null;
            // numargs == 0 - no callback or filter
            // numargs == 1 - either callback or filter
            // numargs == 2 - both callback and filter
            /*  if (numargs == 1 && typeof callback === 'function') {
               cb = callback;
             }
             if (numargs == 1 && typeof callback === 'object') {
               options.filter = callback;
             }
             if (numargs == 2) { */
            cb = callback;
            options.filter = filter;
            options.lastFilter = filter;
            _this.lastFilter = filter;
            //lastFilter = filter;
            //}
            var counter = 0;
            //alert('Checking: syncInProgress:'+this.syncstatus.syncInProgress);
            //if (this.network.isConnected && this.syncstatus.syncInProgress == false) 		// now done via syncService
            _this.conMonService.isConnected.subscribe(function (res) {
                _this.isOnline = res;
            });
            if (_this.isOnline) {
                _this.syncstatus.syncInProgress = true;
                // LT - original code from Strongloop sample code
                // NOTE - this does remote changes first - this is as supplied originally from strongloop
                /*
                            RemoteJob.replicate(LocalJob, function () {
                                LocalJob.replicate(RemoteJob, cb);
                            });
                */
                // LT - 11/09/2015 - test replication starting from scratch each time
                // LT - 02/10/2015 - loading jobs still appears slow on the device even
                // after the fix (becuase of?) per https://github.com/strongloop/loopback/pull/1681
                // So leave this uncommented for now - so always go from the beginning
                // LT - 04/12/2015 - Swift were generating very large delta sets after a few days
                // operation - caused by this being uncommented?
                //console.log('sync: JOB fullreplication:' + this.fullreplication.fullReplication);
                if (_this.fullreplication.fullReplication) {
                    _this.since = { push: -1, pull: -1 };
                }
                //console.log('sync: JOB since:', this.since);
                // LT - latest code from github loopback-example-offline-sync
                // Remote job first
                //console.log(new Date().toISOString()+':Calling: RemoteJob.replicate(), since:%j',since);
                //console.log(new Date().toISOString() + ': starting JOB replication');
                // LT - 10/12/2015 - original code - does remote first
                _this.RemoteJob.replicate(_this.since.pull, _this.LocalJob, options, function (err, conflicts, cps) {
                    // LT - 31/12/2015 - the filter we applied (e.g. no DL jobs) when replicating from the remote DB
                    // does not necessarily apply replicating from local DB - we just need everything replicated
                    options.filter = "";
                    _this.since.pull = cps;
                    //console.log(new Date().toISOString()+':Calling: LocalJob.replicate(), since:%j',since);
                    _this.LocalJob.replicate(_this.since.push, _this.RemoteJob, options, function (err, conflicts, cps) {
                        _this.since.push = cps;
                        /*
                                                // LT - artificially slow replication for debug purposes
                                                // NOTE did not work as required - blocked so nothing could be done on device
                                                if(filter.where.mobjobDriver == 999) {
                                                    sleep(30000);
                                                }
                        */
                        // end of replication
                        _this.syncstatus.syncInProgress = false;
                        //console.log('syncInProgress:'+this.syncstatus.syncInProgress);
                        //alert('Finished replicate: syncInProgress:'+this.syncstatus.syncInProgress);
                        /*
                                                if(filter.where.mobjobDriver == 999) {
                                                // LT - artificially slow replication for debug purposes
                                                    setTimeout(function(){
                                                        //console.log(new Date().toISOString()+': finished replication');
                                                        cb && cb(err,conflicts);
                                                    }, 20000);
                                                }
                                                else {
                        */
                        //console.log(new Date().toISOString() + ': finished JOB replication, conflicts:' + conflicts.length);
                        if (conflicts.length > 0) {
                            //console.log('sync: JOB conflicts:' + JSON.stringify(conflicts));
                            conflicts.forEach(function (conflict) {
                                conflict.type(function (err, type) {
                                    conflict.type = type;
                                    conflict.models(function (err, source, target) {
                                        conflict.source = source;
                                        conflict.target = target;
                                        conflict.manual = new conflict.SourceModel(source || target);
                                        // log the conflict details
                                        //console.log("conflicts: source:" + JSON.stringify(conflict.source));
                                        //console.log("conflicts: target:" + JSON.stringify(conflict.target));
                                    });
                                    conflict.changes(function (err, source, target) {
                                        conflict.sourceChange = source;
                                        conflict.targetChange = target;
                                        var sourceType = conflict.sourceChange.type();
                                        var targetType = conflict.targetChange.type();
                                        // log the conflict details
                                        //console.log("conflicts: source type:" + sourceType + ", sourceChange:" + JSON.stringify(conflict.sourceChange));
                                        //console.log("conflicts: target type:" + targetType + ", targetChange:" + JSON.stringify(conflict.targetChange));
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
                        /*}*/
                    });
                });
                /*
                            // LT - 10/12/2015 - updated code - does local first per todo example at:
                            // https://github.com/strongloop/loopback-example-offline-sync/blob/master/client/lbclient/boot/replication.js
                            // Added for v2.23 ------------------------------------------
                            LocalJob.replicate(
                                since.push,
                                RemoteJob,
                                options,
                                function pushed(err, conflicts, cps) {
                                    since.push = cps;
                
                                    RemoteJob.replicate(
                                        since.pull,
                                        LocalJob,
                                        options,
                                        function pulled(err, conflicts, cps) {
                                            since.pull = cps;
                
                                            //console.log(new Date().toISOString()+': finished replication');
                                            cb && cb(err,conflicts);
                                        });
                                });
                            // END: Added for v2.23 ------------------------------------------
                */
                /*
                            // LT - from https://gist.github.com/bajtos/63b415629a341ef5d0c9
                            // It is important to push local changes first,
                            // that way any conflicts are resolved at the client
                            // 02/09/2015 - BUT - this gave a 400 error when replicating (GET):
                //GET http://58.108.229.60:3000/api/Jobs/changes?since=4&filter%5Bwhere%5D%5BmobjobDriver%5D=199&filter%5Bwhere%5D%5Bmobjobuid%5D%5Binq%5D%5B0%5D=825364f0-5138-11e5-92f0-a92cbf3396d1&filter%5Bwhere%5D%5Bmobjobuid%5D%5Binq%5D%5B1%5D=825316d0-5138-11e5-92f0-a92cbf3396d1&filter%5Bfields%5D%5Bmobjobuid%5D=true&filter%5Border%5D%5B0%5D%5Bkey%5D=mobjobuid&filter%5Border%5D%5B0%5D%5Breverse%5D=1&filter%5Border%5D%5B1%5D%5Bkey%5D=mobjobSeq&filter%5Border%5D%5B1%5D%5Breverse%5D=1
                */
                /*
                            // Local job first
                            LocalJob.replicate(
                                since.push,
                                RemoteJob,
                                options,
                                function pushed(err, conflicts, cps) {
                                    since.push = cps;
                                    RemoteJob.replicate(
                                    since.pull,
                                    LocalJob,
                                    options,
                                    function pulled(err, conflicts, cps) {
                                        since.pull = cps;
                                        cb && cb();
                                    });
                            });
                */
            }
            else {
                // not connected to network
                // if callback supplied call it 
                cb && cb();
            }
        };
        this.callback = function (err) {
            //console.log('Error returned is :' + err);
        };
        this.refreshConflicts = function () {
            _this.sync(_this.callback, _this.lastFilter);
        };
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
    }
    JobReplicationServiceProvider.prototype.sleep = function (milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 10000000000; i++) {
            if ((new Date().getTime() - start) > milliseconds) {
                break;
            }
        }
    };
    /*
      // Added for v2.23 ------------------------------------------
      // sync local changes if connected
      LocalJob.observe('after save', function(ctx, next) {
        next();
        sync(lastFilter);
      });
      LocalJob.observe('after delete', function(ctx, next) {
        next();
        sync(lastFilter);
      });
      // END: Added for v2.23 ------------------------------------------
    */
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
                return console.error('Cannot delete old changes:', err);
            //console.log('Deleted %s old changes.', info.count);
            changeData.changes = info;
            Checkpoint.current(function (err, cp) {
                if (err)
                    return console.error('Cannot obtain current checkpoint:', err);
                //console.log('Current checkpoint:', cp);
                Checkpoint.deleteAll({ seq: { lt: cp } }, function (err, info) {
                    if (err)
                        return console.error('Cannot delete old checkpoints:', err);
                    //console.log('Deleted %s old checkpoints', info.count);
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
                return console.error('Cannot delete old changes:', err);
            //console.log('Deleted %s old changes.', info.count);
            changeData.changes = info;
            Checkpoint.current(function (err, cp) {
                if (err)
                    return console.error('Cannot obtain current checkpoint:', err);
                //console.log('Current checkpoint:', cp);
                Checkpoint.deleteAll({ seq: { lt: cp } }, function (err, info) {
                    if (err)
                        return console.error('Cannot delete old checkpoints:', err);
                    //console.log('Deleted %s old checkpoints', info.count);
                    changeData.checkpoints = info;
                    // The MongoDB connection pool is blocking exit,
                    // we need to exit explicitely
                    //process.exit(0);
                    callback && callback(err, changeData);
                });
            });
        });
    };
    return JobReplicationServiceProvider;
}());
JobReplicationServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__providers_connectivity_monitor_connectivity_monitor__["a" /* ConnectivityMonitorProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_config_service_config_service__["a" /* ConfigServiceProvider */]])
], JobReplicationServiceProvider);

//# sourceMappingURL=job-replication-service.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GpsServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_sdk_models_GpsHistory__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_sdk_services_custom_GpsHistory__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__gps_audit_service_gps_audit_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pdaparams_service_pdaparams_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_service_shared_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__log_service_log_service__ = __webpack_require__(16);
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
var GpsServiceProvider = (function () {
    function GpsServiceProvider(pdaParams, logger, gpsAudit, gpsHistApi, geolocation, sharedService) {
        //console.log('Hello GpsServiceProvider Provider');
        var _this = this;
        this.pdaParams = pdaParams;
        this.logger = logger;
        this.gpsAudit = gpsAudit;
        this.gpsHistApi = gpsHistApi;
        this.geolocation = geolocation;
        this.sharedService = sharedService;
        this.ngUnsubscribe = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
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
        this.lastsecs = 0;
        this.getGps = true;
        this.showGpsAlerts = false;
        this.sendGps = true;
        this.gpsData = {};
        this.logParams = {
            site: this.pdaParams.getSiteId(),
            driver: this.pdaParams.getDriverId(), fn: 'GpsServiceProvider'
        };
        this.log = this.logger.getInstance(this.logParams);
        /*   $rootScope.$on('RESUME', function(event) {
            // foreground
            log.info("Received event:" + event.name);
            getGps = true;
            getPos();
          });
          $rootScope.$on('PAUSE', function(event) {
            // background
            log.info("Received event:" + event.name);
            getGps = false;
          }); */
        this.getPos = function () {
            if (_this.log.context.driver == 0) {
                _this.log.context.driver = _this.pdaParams.getDriverId();
            }
            if (!_this.pdaParams.alwaysGetGPS) {
                // If driver logged off or app in background don't bother with any of this
                if (!_this.getGps) {
                    _this.log.info('getGps:' + _this.getGps + ', no GPS attempted');
                    return;
                }
                if (_this.pdaParams.isDrvLoggedOff()) {
                    _this.log.info('driver logged off, no GPS attempted');
                    return;
                }
            }
            //Riyaz: Using ionic native's geolocation plugin here
            _this.geolocation.getCurrentPosition(_this.posOptions).then(function (position) {
                if (_this.showGpsAlerts) {
                    alert(' GPSService: Position returned ');
                }
                //this.gpsData = angular.copy(position);
                _this.gpsData = Object.assign({}, position);
                _this.log.debug("position:" + JSON.stringify(_this.gpsData));
                _this.saveGpsToDB(_this.pdaParams.getDriverId(), position);
                _this.gpsIsWorking = true;
            }).catch(function (err) {
                if (_this.showGpsAlerts) {
                    alert('GPsService Error code: ' + err.code + '\n' + 'message: ' + err.message + '\n');
                }
                // error
                _this.gpsIsWorking = false;
                _this.log.error("getCurrentPosition failed, err:" + JSON.stringify(err));
            });
        }; //getPos() ends here
        this.saveGpsToDB = function (drvid, position) {
            var lgps = new __WEBPACK_IMPORTED_MODULE_5__shared_sdk_models_GpsHistory__["a" /* GpsHistory */]();
            lgps.gps_driver_id = drvid;
            // position.timestamp is UTC
            // We convert to a timestamp at local time so no timezone    
            var ldate = new Date(position.timestamp);
            var oset = ldate.getTimezoneOffset();
            position.timestamp += (oset * -1) * 60 * 1000;
            lgps.gps_timestamp = position.timestamp;
            //parseFloat("123.456").toFixed(2);
            lgps.gps_latitude = position.coords.latitude.toFixed(6);
            lgps.gps_longitude = position.coords.longitude.toFixed(6);
            lgps.gps_quality = position.coords.accuracy;
            lgps.gps_heading = 0; // position.coords.heading;
            lgps.gps_speed = 0; //position.coords.speed;
            lgps.gps_time = 0; //new Date(position.timestamp).getTime();
            //sendGps = true;			// DEBUG
            _this.log.debug("getCurrentPosition OK: sendGps:" + _this.sendGps + ", lgps:" + JSON.stringify(lgps));
            _this.gpsAudit.saveGps(lgps);
            // TODO - do we need any more criteria to create history record?  if connected?
            if (_this.sendGps && lgps.gps_driver_id > 0) {
                _this.log.info("About to save GPS");
                _this.gpsHistApi.create(lgps).subscribe(function (obj) {
                    _this.log.info("gpsHistApi.create success: obj:" + JSON.stringify(obj));
                }, function (err) {
                    _this.log.error("gpsHistApi.create failed: err:" + JSON.stringify(err));
                });
            }
        }; //saveGpsToDB(drvid, position) ends here
        //Every 60 Seconds
        this.intervalId = setInterval(this.getPos(), 60000);
        this.sharedService.RESUME.subscribe(function (val) {
            // foreground
            _this.log.info("Received event:" + val);
            _this.getGps = true;
            _this.getPos();
        });
        this.sharedService.PAUSE.subscribe(function (val) {
            // background
            _this.log.info("Received event:" + val);
            _this.getGps = false;
        });
    } //Constructor ends here
    GpsServiceProvider.prototype.onSuccess = function (position) {
        this.gpsIsWorking = true;
    };
    GpsServiceProvider.prototype.onError = function (error) {
        if (this.showGpsAlerts) {
            alert('GPSservice OnOFFPos  Error code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
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
    return GpsServiceProvider;
}());
GpsServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_10__log_service_log_service__["a" /* LogServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_7__gps_audit_service_gps_audit_service__["a" /* GpsAuditServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_6__shared_sdk_services_custom_GpsHistory__["a" /* gpshistoryapi */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_9__shared_service_shared_service__["a" /* SharedServiceProvider */]])
], GpsServiceProvider);

//# sourceMappingURL=gps-service.js.map

/***/ }),

/***/ 17:
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
var ConfigServiceProvider = (function () {
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
            'version': '3.00',
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
            _this.apiURL = siteDetails.url;
            _this.API_VERSION = 'api';
            //localStorage.setItem('apiURL', siteDetails.url);
            //localStorage.setItem('apiDSName', name);		// IMPORTANT - used by model js code for connector
            localStorage.setItem('clientId', siteDetails.clientId);
            //console.log("Set the clientId with :" + siteDetails.clientId);
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
    return ConfigServiceProvider;
}());
ConfigServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ConfigServiceProvider);

//# sourceMappingURL=config-service.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_sdk_index__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_log_service_log_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_pdaparams_service_pdaparams_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_siteconfig_service_siteconfig_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_config_service_config_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_connectivity_monitor_connectivity_monitor__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_shared_service_shared_service__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the ChangePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ChangePage = (function () {
    function ChangePage(navCtrl, navParams, pdaParams, siteConfig, logger, configService, conMonService, sharedService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pdaParams = pdaParams;
        this.siteConfig = siteConfig;
        this.logger = logger;
        this.configService = configService;
        this.conMonService = conMonService;
        this.sharedService = sharedService;
        this.logParams = { site: this.pdaParams.getSiteId(), driver: this.pdaParams.getDriverId(), fn: 'HomePage' };
        this.log = this.logger.getInstance(this.logParams);
        this.RemoteJob = lbclient.models.Job;
        this.Job = lbclient.models.LocalJob;
        this.changes = 0;
        this.show_this = true;
        this.sync = lbclient.sync;
        this.loginFlag = this.pdaParams.isDrvLoggedOn();
        this.clearLocalStorage = function () {
            localStorage.removeItem('osc-local-db');
            _this.jobs = {};
        };
        this.logLocalStorage = function () {
            var logmsg = { type: '', data: '' };
            logmsg.type = 'logLocalStorage';
            logmsg.data = JSON.parse(localStorage.getItem('osc-local-db'));
            _this.log.info(logmsg);
        };
        this.connected = function () {
            return _this.isOnline;
        };
        __WEBPACK_IMPORTED_MODULE_2__shared_sdk_index__["b" /* LoopBackConfig */].setBaseURL(configService.apiURL);
        __WEBPACK_IMPORTED_MODULE_2__shared_sdk_index__["b" /* LoopBackConfig */].setApiVersion(configService.API_VERSION);
        this.conMonService.isConnected.subscribe(function (res) {
            _this.isOnline = res;
        });
    }
    ChangePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.Job.getChangeModel().find(function (err, changes) {
            _this.changes = changes;
            _this.RemoteJob.diff(0, changes, function (err, diff) {
                _this.diff = diff;
            });
        });
        this.Job.find(function (err, jobs) {
            _this.jobs = jobs;
        });
    };
    return ChangePage;
}());
ChangePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-change',template:/*ion-inline-start:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/change/change.html"*/'<!--\n\n  Generated template for the ChangePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n      <ion-buttons left>\n\n          <span [ngSwitch]="this.sharedService.loginFlag">      \n\n            <ion-badge class="common-border"  color="secondary" *ngSwitchCase="true"> Logged In</ion-badge>\n\n            <ion-badge class="common-border"  color="danger" *ngSwitchCase="false"> Logged Off</ion-badge>\n\n          </span>\n\n        </ion-buttons>\n\n    <ion-title>CHANGE</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding direction="xy" [ngClass]="{ \'overflow-scroll\': (desktopBrowserScrolling == true) }" text-wrap>\n\n\n\n\n\n  <ion-card *ngIf="changes" class="ion-card">\n\n    <ion-card-header text-wrap>\n\n      <h1>Local Change List</h1>\n\n      <p *ngIf="changes.length">\n\n        A list of all changes made to models in local storage.\n\n      </p>\n\n      <strong *ngIf="changes.length === 0">\n\n        No local changes have been made.\n\n      </strong>\n\n    </ion-card-header>\n\n\n\n    <ion-grid *ngIf="changes.length" class="iongrid">\n\n      <ion-row class="ionrowheader">\n\n        <ion-col class="ioncol" col-3>Model ID</ion-col>\n\n        <ion-col class="ioncol" col-2>Type</ion-col>\n\n        <ion-col class="ioncol" col-2>Checkpoint</ion-col>\n\n        <ion-col class="ioncol" col-3>Revision</ion-col>\n\n        <ion-col class="ioncol" col-2>Prev Revision</ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row *ngFor="let change of changes">\n\n        <ion-col class="ioncol" col-3>{{change.modelId}}</ion-col>\n\n        <ion-col class="ioncol" col-2>{{change.type()}}</ion-col>\n\n        <ion-col class="ioncol" col-2>{{change.checkpoint}}</ion-col>\n\n        <ion-col class="ioncol" col-3>{{change.rev}}</ion-col>\n\n        <ion-col class="ioncol" col-2>{{change.prev}}</ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-card>\n\n\n\n  <ion-card *ngIf="diff" class="ion-card">\n\n    <ion-card-header text-wrap>\n\n      <h1>Local to Server Deltas</h1>\n\n      <p *ngIf="diff.deltas.length">\n\n        Below is list of changes required to replicate local data to the server.\n\n      </p>\n\n      <strong *ngIf="diff.deltas.length === 0">No changes required to replicate the local data to the server.</strong>\n\n    </ion-card-header>\n\n\n\n    <ion-grid *ngIf="diff.deltas.length" class="iongrid">\n\n      <ion-row class="ionrowheader">\n\n        <ion-col class="ioncol" col-4>Model ID</ion-col>\n\n        <ion-col class="ioncol" col-4>Revision</ion-col>\n\n        <ion-col class="ioncol" col-4>Prev Revision</ion-col>\n\n      </ion-row>\n\n      <ion-row *ngFor="let delta of diff.deltas">\n\n        <ion-col class="ioncol" col-4>{{delta.modelId}}</ion-col>\n\n        <ion-col class="ioncol" col-4>{{delta.rev}}</ion-col>\n\n        <ion-col class="ioncol" col-4>{{delta.prev}}</ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-card>\n\n\n\n  <ion-card *ngIf="jobs" class="ion-card">\n\n    <ion-card-header text-wrap>\n\n      <h1>Local Storage Data</h1>\n\n      <strong *ngIf="jobs.length === 0">\n\n        There is no data in local storage.\n\n      </strong>\n\n    </ion-card-header>\n\n\n\n    <ion-grid *ngIf="jobs.length" class="iongrid">\n\n      <ion-row class="ionrowheader">\n\n        <ion-col class="ioncol" col-3>Model ID</ion-col>\n\n        <ion-col class="ioncol" col-3>Sequence</ion-col>\n\n        <ion-col class="ioncol" col-2>Client</ion-col>\n\n        <ion-col class="ioncol" col-2>Status</ion-col>\n\n        <ion-col class="ioncol" col-2>Driver</ion-col>\n\n      </ion-row>\n\n      <ion-row *ngFor="let job of jobs">\n\n        <ion-col class="ioncol" col-3>{{job.getId()}}</ion-col>\n\n        <ion-col class="ioncol" col-3>{{job.mobjobSeq}}</ion-col>\n\n        <ion-col class="ioncol" col-2>{{job.mobjobClientCode}}</ion-col>\n\n        <ion-col class="ioncol" col-2>{{job.mobjobStatus}}</ion-col>\n\n        <ion-col class="ioncol" col-2>{{job.mobjobDriver}}</ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-card>\n\n\n\n  <ion-card *ngIf="diff" class="ion-card">\n\n    <ion-card-header text-wrap>\n\n      <h1>Local to Server Conflicts</h1>\n\n      <p *ngIf="diff.conflicts.length">\n\n        Below is list of changes that cannot be replicated to the server.\n\n      </p>\n\n      <strong *ngIf="diff.conflicts.length === 0">No conflicts</strong>\n\n    </ion-card-header>\n\n\n\n    <ion-grid *ngIf="diff.conflicts.length" class="iongrid">\n\n      <ion-row class="ionrowheader">\n\n        <ion-col class="ioncol" col-4>Model ID</ion-col>\n\n        <ion-col class="ioncol" col-2>Checkpoint</ion-col>\n\n        <ion-col class="ioncol" col-3>Revision</ion-col>\n\n        <ion-col class="ioncol" col-3>Prev Revision</ion-col>\n\n      </ion-row>\n\n      <ion-row *ngFor="let conflict of diff.conflicts">\n\n        <ion-col class="ioncol" col-4>{{conflict.modelId}}</ion-col>\n\n        <ion-col class="ioncol" col-2>{{conflict.checkpoint}}</ion-col>\n\n        <ion-col class="ioncol" col-3>{{conflict.rev}}</ion-col>\n\n        <ion-col class="ioncol" col-3>{{conflict.prev}}</ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-card>\n\n\n\n\n\n  <!--  <footer class="debug" *ngIf="pdaParams.debugMode">\n\n    <button (click)="sync()" [ngClass]="{deltas: needSync}">Sync</button>\n\n    <button (click)="connect()">Connect</button>\n\n    <button (click)="disconnect()">Disconnect</button>\n\n    <button (click)="reload()">Reload jobs</button>\n\n    <button (click)="logLocalStorage()">Log local storage</button>\n\n    <button (click)="clearLocalStorage()">Clear local storage</button>   \n\n    <strong> connected: {{ connected() }} </strong>\n\n  </footer> -->\n\n\n\n\n\n  <ion-card class="iongrid" *ngIf="pdaParams.debugMode">\n\n    <ion-list>\n\n      <button ion-item class="item-button-right" (click)="sync()" [ngClass]="{deltas: needSync}">Sync</button>\n\n      <!--    <button ion-item class="item-button-right" (click)="connect()">Connect</button>\n\n      <button ion-item class="item-button-right" (click)="disconnect()">Disconnect</button> -->\n\n     <!--  <button ion-item class="item-button-right" (click)="reload()">Reload jobs</button> -->\n\n      <button ion-item class="item-button-right" (click)="logLocalStorage()">Log local storage</button>\n\n      <button ion-item class="item-button-right" (click)="clearLocalStorage()">Clear local storage</button>\n\n\n\n      <strong> connected: {{ connected() }} </strong>\n\n    </ion-list>\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/change/change.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_siteconfig_service_siteconfig_service__["a" /* SiteconfigServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_log_service_log_service__["a" /* LogServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_6__providers_config_service_config_service__["a" /* ConfigServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_7__providers_connectivity_monitor_connectivity_monitor__["a" /* ConnectivityMonitorProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_shared_service_shared_service__["a" /* SharedServiceProvider */]])
], ChangePage);

//# sourceMappingURL=change.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_sdk_index__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_base_service_base_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_siteconfig_service_siteconfig_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_config_service_config_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_shared_service_shared_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_sod_service_sod_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_customerconn_service_customerconn_service__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_pdaparams_service_pdaparams_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_connectivity_monitor_connectivity_monitor__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_message_service_message_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_jsea_service_jsea_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_image_service_image_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_login_login__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_tabs_tabs__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_pda_pda__ = __webpack_require__(178);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var MyApp = (function () {
    function MyApp(statusBar, alertCtrl, loadingCtrl, splashScreen, siteConfig, configService, base, sharedService, customerConn, sodService, pdaParams, platform, connectivityMonitor, messageService, jseaService, imageService) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.siteConfig = siteConfig;
        this.configService = configService;
        this.base = base;
        this.sharedService = sharedService;
        this.customerConn = customerConn;
        this.sodService = sodService;
        this.pdaParams = pdaParams;
        this.platform = platform;
        this.connectivityMonitor = connectivityMonitor;
        this.messageService = messageService;
        this.jseaService = jseaService;
        this.imageService = imageService;
        this.allowed = false;
        this.Job = lbclient.models.LocalJob;
        //Shared code which should executes after siteconfigs are loaded.
        this.CommonCode = function () {
            //6. Check & set all table metadata
            //6.1 Load the jobs metadata  
            //console.log("Loading job metadata");
            var result = _this.base.getModelMetadata(_this.Job, "jobMetadata");
            _this.sharedService.jobMetaDataLoadedSubject.subscribe();
            //7. Check & set all watchers
            //7.1 Start monitoring network connectivity    
            _this.connectivityMonitor.startWatching();
            //7.2 Start monitoring for messages   
            _this.messageService.startWatching();
            //7.25 check if this is first start for the day
            _this.sodService.checkDoSodAction('FIRST_RESUME');
            //7.3 Start monitoring for JSEA changes.
            _this.jseaService.startWatching();
            //7.4  Start monitoring images for auto upload 
            _this.imageService.startWatching();
            //console.log("pdaParams.getDriverId()==" + pdaParams.getDriverId());
            //8. If driverid > 0, redirect to jobs page
            if (_this.pdaParams.getDriverId() > 0) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_17__pages_tabs_tabs__["a" /* TabsPage */];
            }
            else {
                //9. If driverid <=0, redirect him to PDA page.
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_18__pages_pda_pda__["a" /* PdaPage */];
            }
        }; //CommonCode() ends here
        //1.Is the user logged in?
        //2. No,the user is not logged in. Direct him to the login page.Set the firstime login variable.
        if (!(localStorage.getItem('login'))) {
            localStorage.setItem('firstlogin', 'true');
            this.rootPage = __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */];
            return;
        }
        //3. Is the Server API Url set?
        //4. No, the Server API Url is not set. Get & Set the the Server API Url.
        //Also set the server path for the loopback SDK builder in the ./shared/sdk directory.
        if (!(localStorage.getItem('apiURL'))) {
            this.userId = localStorage.getItem('userId');
            //console.log('userId====' + this.userId);
            this.connDetails = this.customerConn.getConnectionDetails(this.userId.toLowerCase());
            this.configService.setSiteDetails(this.connDetails);
            //Set the server path for the loopback SDK builder in the ./shared/sdk directory.
            __WEBPACK_IMPORTED_MODULE_4__shared_sdk_index__["b" /* LoopBackConfig */].setBaseURL(this.connDetails.url);
            __WEBPACK_IMPORTED_MODULE_4__shared_sdk_index__["b" /* LoopBackConfig */].setApiVersion('api');
        }
        //5.Check & set All Config data
        if (!(localStorage.getItem('SITE_CONFIG_LOADED'))) {
            console.log("Getting the siteconfigs!");
            var result$ = this.siteConfig
                .loadAllConfigsFromServer()
                .subscribe(function (result) {
                console.log("Site Config Loaded!");
                _this.CommonCode();
            }, function (error) {
                _this.showError("Unable to load Site Configs.Please check your connection.");
                return;
            });
        }
        else {
            this.CommonCode();
        }
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    } //constructor ends here
    MyApp.prototype.showError = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_6__providers_siteconfig_service_siteconfig_service__["a" /* SiteconfigServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_7__providers_config_service_config_service__["a" /* ConfigServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_base_service_base_service__["a" /* BaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_shared_service_shared_service__["a" /* SharedServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_10__providers_customerconn_service_customerconn_service__["a" /* CustomerconnServiceProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_sod_service_sod_service__["a" /* SodServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_11__providers_pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_12__providers_connectivity_monitor_connectivity_monitor__["a" /* ConnectivityMonitorProvider */],
        __WEBPACK_IMPORTED_MODULE_13__providers_message_service_message_service__["a" /* MessageServiceProvider */], __WEBPACK_IMPORTED_MODULE_14__providers_jsea_service_jsea_service__["a" /* JseaServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_15__providers_image_service_image_service__["a" /* ImageServiceProvider */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerconnServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
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
var CustomerconnServiceProvider = (function () {
    function CustomerconnServiceProvider(http) {
        this.http = http;
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
                "serverIP": "swiftt1.lnk.telstra.net",
                "serverPort": 3000,
                "url": "http://swiftt1.lnk.telstra.net:3000"
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
                "serverPort": 3000,
                "url": "http://tplus.allpurpose.com.au:3000"
            },
            "ces": {
                "connector": "remote",
                "debug": "true",
                "clientId": "CES",
                "serverIP": "couriers-express.com.au",
                "serverPort": 3000,
                "url": "http://couriers-express.com.au:3000"
            },
            "itd": {
                "connector": "remote",
                "debug": "true",
                "clientId": "ITD",
                "serverIP": "carry.intime-distribution.com.au",
                "serverPort": 3000,
                "url": "http://carry.intime-distribution.com.au:3000"
            },
            "glc": {
                "connector": "remote",
                "debug": "true",
                "clientId": "GLC",
                "serverIP": "glcouriers.com.au",
                "serverPort": 3000,
                "url": "http://glcouriers.com.au:3000"
            },
            "ace": {
                "connector": "remote",
                "debug": "true",
                "clientId": "ACE",
                "serverIP": "CPE-61-9-246-82.static.wa.bigpond.net.au",
                "serverPort": 3000,
                "url": "http://CPE-61-9-246-82.static.wa.bigpond.net.au:3000"
            },
            "pam": {
                "connector": "remote",
                "debug": "true",
                "clientId": "PAM",
                "serverIP": "logist14.lnk.telstra.net",
                "serverPort": 3000,
                "url": "http://logist14.lnk.telstra.net:3000"
            },
            "flg": {
                "connector": "remote",
                "debug": "true",
                "clientId": "FLG",
                "serverIP": "opensyscon.com.au",
                "serverPort": 3133,
                "url": "http://opensyscon.com.au:3133"
            },
            "redback": {
                "connector": "remote",
                "debug": "true",
                "clientId": "REDBACK",
                "serverIP": "opensyscon.com.au",
                "serverPort": 3083,
                "url": "http://opensyscon.com.au:3083"
            },
            "cct": {
                "connector": "remote",
                "debug": "true",
                "clientId": "CITYCRANE",
                "serverIP": "remote.citycranetrucks.com.au",
                "serverPort": 3000,
                "url": "http://remote.citycranetrucks.com.au:3000"
            },
            "swift2": {
                "connector": "remote",
                "debug": "true",
                "clientId": "SWIFT2",
                "serverIP": "roy1220545.lnk.telstra.net",
                "serverPort": 3000,
                "url": "http://roy1220545.lnk.telstra.net:3000"
            },
            /*  "wads": {
               "connector": "remote",
               "debug": "true",
               "clientId": "WADS",
               "serverIP": "wads.opensyscon.com.au",
               "serverPort": 3061,
               "url": "http://wads.opensyscon.com.au:3061"
             }, */
            "wads": {
                "connector": "remote",
                "debug": "true",
                "clientId": "WADS",
                "serverIP": "192.168.160.65",
                "serverPort": 3000,
                "url": "http://192.168.160.65:3000"
            },
            "univ": {
                "connector": "remote",
                "debug": "true",
                "clientId": "UNIVERSAL",
                "serverIP": "universal.opensyscon.com.au",
                "serverPort": 3062,
                "url": "http://universal.opensyscon.com.au:3062"
            }
        };
        //console.log('Hello CustomerconnServiceProvider Provider');
    }
    CustomerconnServiceProvider.prototype.getConnectionDetails = function (customer) {
        return this.customerConns[customer];
        //this.http.get("assets/connection-data/customer-connections.json").map((res: Response) => res.json().customerConns);
        //records in this case
    };
    return CustomerconnServiceProvider;
}());
CustomerconnServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], CustomerconnServiceProvider);

//# sourceMappingURL=customerconn-service.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_login_service_login_service__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_config_service_config_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_customerconn_service_customerconn_service__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_siteconfig_service_siteconfig_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_base_service_base_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_shared_service_shared_service__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(app, navCtrl, loginService, alertCtrl, loadingCtrl, localStorage, configService, siteConfig, base, customerConn, sharedService) {
        //console.log("LoginPage loading...");
        this.app = app;
        this.navCtrl = navCtrl;
        this.loginService = loginService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.localStorage = localStorage;
        this.configService = configService;
        this.siteConfig = siteConfig;
        this.base = base;
        this.customerConn = customerConn;
        this.sharedService = sharedService;
        this.ngUnsubscribe = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.registerCredentials = { username: '', password: '' };
        this.allowed = false;
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        //this.showLoading();
        this.loginService.login(this.registerCredentials)
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (allowed) {
            _this.allowed = allowed;
        }, function (error) {
            _this.showError(error);
        }, function () {
            if (_this.allowed) {
                // Retrieve current login details
                var loginDetails = JSON.parse(localStorage.getItem('login'));
                // If no login details assume new installation or reset
                if (!loginDetails) {
                    // 1st time ever logged in on PDA
                    loginDetails = {
                        username: _this.registerCredentials.username,
                        time: new Date().toISOString()
                    };
                    // Store details in local storage           
                    localStorage.setItem('login', JSON.stringify(loginDetails));
                }
                else {
                    // update last login time
                    loginDetails.time = new Date().toISOString();
                    localStorage.setItem('login', JSON.stringify(loginDetails));
                }
                //Set the clientid         
                localStorage.setItem('userId', _this.registerCredentials.username);
                //Redirect to the root app component.
                document.location.href = 'index.html';
            }
            else {
                _this.showError("Access Denied!");
            }
        }); //login subscription ends here  
    }; //login() ends here
    LoginPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    LoginPage.prototype.showError = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Login failed!',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/login/login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>LOGIN</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<!--https://devdactic.com/login-ionic-2/ -->\n\n\n\n<ion-content padding text-wrap>\n\n  <div>\n\n    <ion-row style="text-align: center">\n\n      <ion-col>\n\n        <img src="/assets/img/OSC_300_150.jpg" />\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <form (ngSubmit)="login()" #registerForm="ngForm">\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-list-header class="login-header" color="secondary">Welcome to the TPLUS Mobile Application.</ion-list-header>\n\n          <ion-list inset no-lines>\n\n            <ion-item>\n\n              <ion-input type="text" placeholder="Username" name="username" [(ngModel)]="registerCredentials.username" required></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n\n            </ion-item>\n\n            <p>Note: Usernames and passwords are case-sensitive.</p>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col>\n\n          <button ion-button color="secondary" full round full type="submit" [disabled]="!registerForm.form.valid">\n\n            <ion-icon name="log-in" style="font-size:20px;color:white;text-shadow:2px 2px 4px #000000;"> L/ON</ion-icon>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </form>\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_login_service_login_service__["a" /* LoginServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__providers_config_service_config_service__["a" /* ConfigServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_8__providers_siteconfig_service_siteconfig_service__["a" /* SiteconfigServiceProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_base_service_base_service__["a" /* BaseServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_7__providers_customerconn_service_customerconn_service__["a" /* CustomerconnServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_10__providers_shared_service_shared_service__["a" /* SharedServiceProvider */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 176:
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
var User = (function () {
    function User(username) {
        this.username = username;
    }
    return User;
}());

var LoginServiceProvider = (function () {
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
            else if (credentials.username == 'redback' && credentials.password == 'redback') {
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
    return LoginServiceProvider;
}());
LoginServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], LoginServiceProvider);

//# sourceMappingURL=login-service.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_sdk_index__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_login_service_login_service__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_config_service_config_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__job_details_job_details__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__device_device__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__gps_gps__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pda_pda__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__jsea_jsea__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__msgs_msgs__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__images_images__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__barcode_barcode__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__change_change__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var TabsPage = (function () {
    function TabsPage(nav, auth, configService) {
        this.nav = nav;
        this.auth = auth;
        this.configService = configService;
        this.ngUnsubscribe = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_8__job_details_job_details__["a" /* JobDetailsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_9__device_device__["a" /* DevicePage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_10__gps_gps__["a" /* GpsPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_11__pda_pda__["a" /* PdaPage */];
        this.tab6Root = __WEBPACK_IMPORTED_MODULE_12__jsea_jsea__["a" /* JseaPage */];
        this.tab7Root = __WEBPACK_IMPORTED_MODULE_13__msgs_msgs__["a" /* MsgsPage */];
        this.tab8Root = __WEBPACK_IMPORTED_MODULE_14__images_images__["a" /* ImagesPage */];
        this.tab9Root = __WEBPACK_IMPORTED_MODULE_15__barcode_barcode__["a" /* BarcodePage */];
        this.tab10Root = __WEBPACK_IMPORTED_MODULE_16__change_change__["a" /* ChangePage */];
        this.username = '';
        var info = this.auth.getUserInfo();
        __WEBPACK_IMPORTED_MODULE_4__shared_sdk_index__["b" /* LoopBackConfig */].setBaseURL(configService.apiURL);
        __WEBPACK_IMPORTED_MODULE_4__shared_sdk_index__["b" /* LoopBackConfig */].setApiVersion(configService.API_VERSION);
    }
    TabsPage.prototype.logout = function () {
        var _this = this;
        this.auth.logout().takeUntil(this.ngUnsubscribe).subscribe(function (success) {
            _this.nav.setRoot('LoginPage');
        });
    };
    TabsPage.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-tabs',template:/*ion-inline-start:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/tabs/tabs.html"*/'<ion-tabs name="myTabsNav" color="primary" >\n\n  <ion-tab [root]="tab1Root" [rootParams]="username" tabTitle="Jobs" tabIcon="home" ></ion-tab>\n\n <!--  <ion-tab [root]="tab2Root" [rootParams]="username" tabTitle="Edit" tabIcon="create"></ion-tab> -->\n\n  <ion-tab [root]="tab3Root" [rootParams]="username" tabTitle="Device" tabIcon="construct"></ion-tab>\n\n\n\n  <ion-tab [root]="tab4Root" [rootParams]="username" tabTitle="GPS" tabIcon="pin"></ion-tab>\n\n  <ion-tab [root]="tab5Root" [rootParams]="username" tabTitle="PDA" tabIcon="cog"></ion-tab>\n\n  <ion-tab [root]="tab6Root" [rootParams]="username" tabTitle="JSEA" tabIcon="book"></ion-tab>\n\n\n\n  <ion-tab [root]="tab7Root" [rootParams]="username" tabTitle="Msgs" tabIcon="mail"></ion-tab>\n\n  <ion-tab [root]="tab8Root" [rootParams]="username" tabTitle="Images" tabIcon="images"></ion-tab>\n\n  <ion-tab [root]="tab9Root" [rootParams]="username" tabTitle="Scan" tabIcon="barcode"></ion-tab>\n\n <!--  <ion-tab [root]="tab10Root" [rootParams]="username" tabTitle="Log" tabIcon="log-in"></ion-tab> -->\n\n</ion-tabs>'/*ion-inline-end:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_login_service_login_service__["a" /* LoginServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_config_service_config_service__["a" /* ConfigServiceProvider */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PdaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_sdk_index__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_sdk_services__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_config_service_config_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_log_service_log_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_pdaparams_service_pdaparams_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_siteconfig_service_siteconfig_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_base_service_base_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_shared_service_shared_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_message_service_message_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_exit_service_exit_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_push_service_push_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_event_service_event_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__tabs_tabs__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_app_component__ = __webpack_require__(173);
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
 * Generated class for the PdaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PdaPage = (function () {
    function PdaPage(navCtrl, navParams, configService, pdaParams, siteConfig, logger, base, sharedService, TpmPdaController, exitService, messageService, alertCtrl, pushService, iab, eventService, app) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.configService = configService;
        this.pdaParams = pdaParams;
        this.siteConfig = siteConfig;
        this.logger = logger;
        this.base = base;
        this.sharedService = sharedService;
        this.TpmPdaController = TpmPdaController;
        this.exitService = exitService;
        this.messageService = messageService;
        this.alertCtrl = alertCtrl;
        this.pushService = pushService;
        this.iab = iab;
        this.eventService = eventService;
        this.app = app;
        this.t = this.navCtrl.parent;
        this.clientlog = lbclient.clientlog;
        this.loginFlag = this.pdaParams.isDrvLoggedOn();
        this.TpmPdaControllers = [];
        this.TpmRowCount = 0;
        this.logParams = { site: this.pdaParams.getSiteId(), driver: this.pdaParams.getDriverId(), fn: 'PdaPage' };
        this.log = this.logger.getInstance(this.logParams);
        this._filter = {
            "where": { and: [{ "tpmpc_driver_id": this.pdaParams.driverId, "tpmpc_access_allowed": 'Y', "tpmpc_access_registered": 'Y' }] }
        };
        this._newfilter = {
            "where": { and: [{ "tpmpc_driver_id": this.pdaParams.driverId, "tpmpc_access_allowed": 'Y', "tpmpc_access_registered": { neq: "Y" } }] }
        };
        this.getTpmPdaControllers = function (filter) {
            _this.TpmPdaController.find(filter).subscribe(function (results) {
                _this.TpmPdaControllers = results;
                _this.TpmRowCount = results.length;
                // If no rows returned reset driver no entered by user
                if (results.length == 0) {
                    _this.pdaParams.setDriverInfo(0);
                    var prevId = _this.pdaParams.getParams().driverId;
                    //Create alert        
                    if (_this.driverId != prevId) {
                        var alert_1 = _this.alertCtrl.create({
                            title: 'Driver',
                            message: 'Driver ID is not set. Please call support and then retry!',
                            buttons: [
                                {
                                    text: 'OK'
                                }
                            ]
                        });
                        alert_1.present();
                    }
                }
                // TODO - need to ensure we have updated scope so in promise somewhere in TpmPdaController.find ??
                var TpmPdaControllerRow = _this.TpmPdaControllers[0]; // should only ever be one
                if (TpmPdaControllerRow) {
                    if (TpmPdaControllerRow.tpmpc_access_registered == 'N') {
                        TpmPdaControllerRow.tpmpc_access_registered = 'Y';
                        TpmPdaControllerRow.tpmpc_last_update_time = new Date().toISOString();
                        _this.TpmPdaController.upsert(TpmPdaControllerRow).subscribe();
                        _this.sharedService.tpmPdaCtlsLoadedSubject.next(true);
                    }
                }
            });
            return 1;
        };
        this.updateDriverPrompt = function () {
            var alert = _this.alertCtrl.create({
                title: 'Driver',
                message: 'Enter the driver number to update',
                inputs: [
                    {
                        name: 'drivernum',
                        placeholder: 'Driver ID'
                    },
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                            return;
                        }
                    },
                    {
                        text: 'Update',
                        handler: function (data) {
                            _this.updateDriver(data.drivernum);
                        }
                    }
                ]
            });
            alert.present();
        }; // updateDriverPrompt() ends here
        this.updateDriver = function (driverId) {
            //Create alert        
            if (isNaN(driverId)) {
                var alert_2 = _this.alertCtrl.create({
                    title: 'Driver',
                    message: 'Please enter correct Driver ID.',
                    buttons: [
                        {
                            text: 'OK'
                        }
                    ]
                });
                alert_2.present();
                return;
            }
            _this.driverId = driverId;
            // TODO - we need to unregister from push services and reregister with new driver id
            // reset _newfilter as driver id has changed
            var _newfilter = {
                "where": { and: [{ "tpmpc_driver_id": _this.driverId, "tpmpc_access_allowed": 'Y', "tpmpc_access_registered": { neq: "Y" } }] }
            };
            _this.filter = Object.assign({}, _newfilter);
            _this.getTpmPdaControllers(_this.filter);
            //Driver number has changed - normally from default of 0 to real driver id when initialising
            //Get rid of all stuff related to the driver so we dont get wrong data.
            if (_this.firstlogin === 'false') {
                localStorage.clear();
                _this.pdaParams.clearDriverInfo();
            }
            _this.clientlog.info("About to call getTpmPdaControllers with filter:" + JSON.stringify(_this.filter));
            _this.log.info("About to call getTpmPdaControllers with filter:" + JSON.stringify(_this.filter));
            // Send LOGON event
            //LOGON is done via a button now
            if (_this.driverId > 0 && _this.firstlogin === 'false') {
                _this.eventService.sendMsg('LOGON');
                // Dump local storage at logon time - debug aid
                _this.messageService.dumpLocalStorage();
            }
            _this.pdaParams.setDriverInfo(_this.driverId);
            _this.pdaParams.logoffDriver();
            //If firsttime login, show the home page
            if (_this.firstlogin === 'true') {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_15__tabs_tabs__["a" /* TabsPage */]);
            }
            else {
                _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_16__app_app_component__["a" /* MyApp */]);
            }
        }; //updateDriver() ends here
        this.pushDeRegister = function () {
            this.pushService.unRegister();
        };
        this.pushRegister = function () {
            this.pushService.registerForPush();
        };
        this.logon = function () {
            this.pdaParams.logonDriver();
            this.eventService.sendMsg('LOGON');
            // Dump local storage at logon time - debug aid
            this.messageService.dumpLocalStorage();
        };
        this.logoff = function () {
            this.pdaParams.logoffDriver();
            this.eventService.sendMsg('LOGOFF');
        };
        this.username = navParams.data;
        __WEBPACK_IMPORTED_MODULE_3__shared_sdk_index__["b" /* LoopBackConfig */].setBaseURL(configService.apiURL);
        __WEBPACK_IMPORTED_MODULE_3__shared_sdk_index__["b" /* LoopBackConfig */].setApiVersion(configService.API_VERSION);
        this.driverId = this.pdaParams.driverId;
        if (typeof (this.sharedService.loginFlag) == 'undefined')
            this.sharedService.loginFlag = this.pdaParams.isDrvLoggedOn();
        this.firstlogin = localStorage.getItem('firstlogin');
        this.result = this.getTpmPdaControllers(this._filter);
    }
    PdaPage.prototype.openPrivacyUrl = function (url) {
        this.iab.create(url, "_self");
    };
    return PdaPage;
}());
PdaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-pda',template:/*ion-inline-start:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/pda/pda.html"*/'<!--\n\n  Generated template for the PdaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n      <ion-buttons left>\n\n          <span [ngSwitch]="this.sharedService.loginFlag">      \n\n            <ion-badge class="common-border"  color="secondary" *ngSwitchCase="true"> Logged In</ion-badge>\n\n            <ion-badge class="common-border"  color="danger" *ngSwitchCase="false"> Logged Off</ion-badge>\n\n          </span>\n\n        </ion-buttons>\n\n    <ion-title>PDA </ion-title>\n\n    <ion-buttons right>\n\n        <ion-badge class="common-border" color="danger" *ngIf="newMessageCount">{{newMessageCount}}</ion-badge>\n\n        <ion-badge class="common-border" color="danger"> Driver #  {{driverId}}</ion-badge>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content [ngClass]="{ \'overflow-scroll\': (desktopBrowserScrolling == true) }" padding text-wrap>\n\n\n\n  <!-- TODO - if no driver no. configured need to get it -->\n\n  <!--\n\n      <div >\n\n        <form name="driverForm">\n\n          Driver: \n\n          <input type="text" name=driverId" ng-model="pdaParams.driverId" ng-model-options="{ updateOn: \'submit\' }" >\n\n    \n\n          <input type="button" value="Save" ng-click="pdaParams.setDriverInfo(pdaParams.driverId);">\n\n        \n\n          <input type="button" value="Reset" ng-click="pdaParams.clearDriverInfo()">\n\n    \n\n    \n\n        </form>\n\n      </div>\n\n    -->\n\n\n\n  <ion-card [hidden]="!TpmRowCount">\n\n    <ion-list *ngFor="let tpmpdacontroller of TpmPdaControllers">\n\n      <!--\n\n        <ion-item>\n\n            <p>Driver</p>\n\n            <input type="text" ng-model="pdaParams.driverId" >\n\n            <ion-option-button ng-click="pdaParams.setDriverInfo(pdaParams.driverId)">\n\n              Save\n\n            </ion-option-button>\n\n        </ion-item>\n\n    -->\n\n\n\n      <!-- This should return one row only in a production environment -->\n\n      <ion-list-header class="ion-list-header" color="secondary">\n\n        Driver # : {{tpmpdacontroller.tpmpc_driver_id}}\n\n      </ion-list-header>\n\n\n\n      <button ion-button icon-start full round (click)="updateDriverPrompt()">\n\n        <ion-icon name="create"></ion-icon>\n\n        Update Driver\n\n      </button>\n\n      <!--   <button ion-button color="primary" block (click)="updateDriverPrompt()">Update Driver</button> -->\n\n\n\n      <ion-item>\n\n        <p>\n\n          <b>IMEI</b>\n\n        </p>\n\n        <p> {{ tpmpdacontroller.tpmpc_imei_id }} </p>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <p>\n\n          <b>Name</b>\n\n        </p>\n\n        <p> {{ tpmpdacontroller.tpmpc_driver_name }} </p>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <p>\n\n          <b>Phone</b>\n\n        </p>\n\n        <p> {{ tpmpdacontroller.tpmpc_phone_num }} </p>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-card>\n\n\n\n\n\n  <ion-card [hidden]="TpmRowCount">\n\n\n\n    <ion-list>\n\n      <!-- <ion-item> <p> TpmRowCount: {{ TpmRowCount }} </p> </ion-item> -->\n\n      <ion-item>\n\n        <p>Driver not configured or not activated or already registered.</p>\n\n        <p>Please contact office BEFORE updating your driverId below</p>\n\n      \n\n        <!-- <button ion-button class="button button-icon ion-compose" (click)="updateDriverPrompt()"> </button> -->\n\n        <button ion-button icon-start full round (click)="updateDriverPrompt()">\n\n          <ion-icon name="create"></ion-icon>\n\n          Update Driver\n\n        </button>\n\n        <!--  <button ion-button color="primary" block (click)="updateDriverPrompt()">Update Driver</button> -->\n\n\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n  </ion-card>\n\n  <!-- </div> -->\n\n\n\n  <!--\n\n      <section id="registration" ng-if="TpmRowCount">\n\n        <button ng-click="pushRegister()">GCM Register</button>\n\n        <button ng-click="pushDeRegister()">GCM Unregister</button>\n\n      </section>\n\n    -->\n\n\n\n\n\n  <ion-card>\n\n    <ion-list>\n\n      <ion-item>\n\n        <p>\n\n          <b>Privacy Policy</b>\n\n        </p>\n\n        <p> Click the button for app privacy details:\n\n          <button ion-button round full (click)="openPrivacyUrl(\'http://oscsoftware.com.au/index.php/spa-privacy-policy.html\')">Privacy policy</button>\n\n        </p>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-card>\n\n\n\n</ion-content>\n\n\n\n\n\n<!-- modal window for driver no. entry/update -->\n\n<!-- <script id="templates/modal.html" type="text/ng-template">\n\n          <ion-modal-view>\n\n            <ion-header-bar class="bar bar-header bar-positive">\n\n              <h1 class="title">Driver</h1>\n\n              <button class="button button-clear button-primary" ng-click="closeModal()">Cancel</button>\n\n            </ion-header-bar>\n\n            <ion-content class="padding">\n\n              <div class="list">\n\n                <label class="item item-input">\n\n                  <span class="input-label">Driver</span>\n\n                  <input ng-model="pdaParams.driverId" type="number">\n\n                </label>\n\n                <button class="button button-full button-positive" ng-click="updateDriver(pdaParams.driverId)">Update</button>\n\n              </div>\n\n            </ion-content>\n\n          </ion-modal-view>\n\n</script> -->'/*ion-inline-end:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/pda/pda.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_5__providers_config_service_config_service__["a" /* ConfigServiceProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_8__providers_siteconfig_service_siteconfig_service__["a" /* SiteconfigServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_log_service_log_service__["a" /* LogServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_9__providers_base_service_base_service__["a" /* BaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_10__providers_shared_service_shared_service__["a" /* SharedServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_4__shared_sdk_services__["f" /* TpmPdaControllerApi */], __WEBPACK_IMPORTED_MODULE_12__providers_exit_service_exit_service__["a" /* ExitServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_11__providers_message_service_message_service__["a" /* MessageServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_13__providers_push_service_push_service__["a" /* PushServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
        __WEBPACK_IMPORTED_MODULE_14__providers_event_service_event_service__["a" /* EventServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
], PdaPage);

//# sourceMappingURL=pda.js.map

/***/ }),

/***/ 20:
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
var LoopBackConfig = (function () {
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
    LoopBackConfig.isHeadersFilteringSet = function () {
        return (LoopBackConfig.filterOn === 'headers');
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
    return LoopBackConfig;
}());

LoopBackConfig.authPrefix = '';
LoopBackConfig.debug = true;
LoopBackConfig.filterOn = 'headers';
LoopBackConfig.secure = false;
LoopBackConfig.withCredentials = false;
//# sourceMappingURL=lb.config.js.map

/***/ }),

/***/ 210:
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
webpackEmptyAsyncContext.id = 210;

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SDKBrowserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_core_search_params__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_core_error_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_core_auth_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_custom_logger_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_custom_SDKModels__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__storage_storage_swaps__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__storage_cookie_browser__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__storage_storage_browser__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__sockets_socket_browser__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__sockets_socket_driver__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__sockets_socket_connections__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_core_real_time__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_custom_Job__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_custom_TpmPdaController__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_custom_GpsHistory__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_custom_Application__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_custom_Installation__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_custom_Notification__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_custom_Push__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_custom_Mobile_event__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_custom_SiteConfig__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_custom_DespatchToDriverMessages__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_custom_JseaDriverQuestions__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_custom_JseaDriverAnswers__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_custom_Photocontainer__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_custom_Image__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_custom_BarcodeHist__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__models_index__ = __webpack_require__(284);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_index__ = __webpack_require__(69);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_31__services_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__lb_config__ = __webpack_require__(20);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_32__lb_config__["a"]; });
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
* @author Jonathan Casarrubias <t:@johncasarrubias> <gh:jonathan-casarrubias>
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
var SDKBrowserModule = SDKBrowserModule_1 = (function () {
    function SDKBrowserModule() {
    }
    SDKBrowserModule.forRoot = function (internalStorageProvider) {
        if (internalStorageProvider === void 0) { internalStorageProvider = {
            provide: __WEBPACK_IMPORTED_MODULE_5__storage_storage_swaps__["a" /* InternalStorage */],
            useClass: __WEBPACK_IMPORTED_MODULE_9__storage_cookie_browser__["a" /* CookieBrowser */]
        }; }
        return {
            ngModule: SDKBrowserModule_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__services_core_auth_service__["a" /* LoopBackAuth */],
                __WEBPACK_IMPORTED_MODULE_3__services_custom_logger_service__["a" /* LoggerService */],
                __WEBPACK_IMPORTED_MODULE_0__services_core_search_params__["a" /* JSONSearchParams */],
                __WEBPACK_IMPORTED_MODULE_4__services_custom_SDKModels__["a" /* SDKModels */],
                __WEBPACK_IMPORTED_MODULE_14__services_core_real_time__["a" /* RealTime */],
                __WEBPACK_IMPORTED_MODULE_15__services_custom_Job__["a" /* JobApi */],
                __WEBPACK_IMPORTED_MODULE_16__services_custom_TpmPdaController__["a" /* TpmPdaControllerApi */],
                __WEBPACK_IMPORTED_MODULE_17__services_custom_GpsHistory__["a" /* gpshistoryapi */],
                __WEBPACK_IMPORTED_MODULE_18__services_custom_Application__["a" /* ApplicationApi */],
                __WEBPACK_IMPORTED_MODULE_19__services_custom_Installation__["a" /* InstallationApi */],
                __WEBPACK_IMPORTED_MODULE_20__services_custom_Notification__["a" /* NotificationApi */],
                __WEBPACK_IMPORTED_MODULE_21__services_custom_Push__["a" /* PushApi */],
                __WEBPACK_IMPORTED_MODULE_22__services_custom_Mobile_event__["a" /* Mobile_eventApi */],
                __WEBPACK_IMPORTED_MODULE_23__services_custom_SiteConfig__["a" /* SiteConfigApi */],
                __WEBPACK_IMPORTED_MODULE_24__services_custom_DespatchToDriverMessages__["a" /* DespatchToDriverMessagesApi */],
                __WEBPACK_IMPORTED_MODULE_25__services_custom_JseaDriverQuestions__["a" /* JseaDriverQuestionsApi */],
                __WEBPACK_IMPORTED_MODULE_26__services_custom_JseaDriverAnswers__["a" /* JseaDriverAnswersApi */],
                __WEBPACK_IMPORTED_MODULE_27__services_custom_Photocontainer__["a" /* PhotocontainerApi */],
                __WEBPACK_IMPORTED_MODULE_28__services_custom_Image__["a" /* ImageApi */],
                __WEBPACK_IMPORTED_MODULE_29__services_custom_BarcodeHist__["a" /* BarcodeHistApi */],
                internalStorageProvider,
                { provide: __WEBPACK_IMPORTED_MODULE_5__storage_storage_swaps__["b" /* SDKStorage */], useClass: __WEBPACK_IMPORTED_MODULE_10__storage_storage_browser__["a" /* StorageBrowser */] },
                { provide: __WEBPACK_IMPORTED_MODULE_12__sockets_socket_driver__["a" /* SocketDriver */], useClass: __WEBPACK_IMPORTED_MODULE_11__sockets_socket_browser__["a" /* SocketBrowser */] }
            ]
        };
    };
    return SDKBrowserModule;
}());
SDKBrowserModule = SDKBrowserModule_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_7__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */]],
        declarations: [],
        exports: [],
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__services_core_error_service__["a" /* ErrorHandler */],
            __WEBPACK_IMPORTED_MODULE_13__sockets_socket_connections__["a" /* SocketConnection */]
        ]
    })
], SDKBrowserModule);

/**
* Have Fun!!!
* - Jon
**/






var SDKBrowserModule_1;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoopBackAuth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storage_storage_swaps__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_BaseModels__ = __webpack_require__(257);
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
var LoopBackAuth = (function () {
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
    return LoopBackAuth;
}());
LoopBackAuth = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__storage_storage_swaps__["a" /* InternalStorage */])),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__storage_storage_swaps__["a" /* InternalStorage */]])
], LoopBackAuth);

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SDKModels; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Job__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_TpmPdaController__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_GpsHistory__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_Application__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_Installation__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_Notification__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_Push__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_Mobile_event__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_SiteConfig__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_DespatchToDriverMessages__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_JseaDriverQuestions__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__models_JseaDriverAnswers__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__models_Photocontainer__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__models_Image__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__models_BarcodeHist__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */
















var SDKModels = (function () {
    function SDKModels() {
        this.models = {
            Job: __WEBPACK_IMPORTED_MODULE_1__models_Job__["a" /* Job */],
            TpmPdaController: __WEBPACK_IMPORTED_MODULE_2__models_TpmPdaController__["a" /* TpmPdaController */],
            GpsHistory: __WEBPACK_IMPORTED_MODULE_3__models_GpsHistory__["a" /* GpsHistory */],
            Application: __WEBPACK_IMPORTED_MODULE_4__models_Application__["a" /* Application */],
            Installation: __WEBPACK_IMPORTED_MODULE_5__models_Installation__["a" /* Installation */],
            Notification: __WEBPACK_IMPORTED_MODULE_6__models_Notification__["a" /* Notification */],
            Push: __WEBPACK_IMPORTED_MODULE_7__models_Push__["a" /* Push */],
            Mobile_event: __WEBPACK_IMPORTED_MODULE_8__models_Mobile_event__["a" /* Mobile_event */],
            SiteConfig: __WEBPACK_IMPORTED_MODULE_9__models_SiteConfig__["a" /* SiteConfig */],
            DespatchToDriverMessages: __WEBPACK_IMPORTED_MODULE_10__models_DespatchToDriverMessages__["a" /* DespatchToDriverMessages */],
            JseaDriverQuestions: __WEBPACK_IMPORTED_MODULE_11__models_JseaDriverQuestions__["a" /* JseaDriverQuestions */],
            JseaDriverAnswers: __WEBPACK_IMPORTED_MODULE_12__models_JseaDriverAnswers__["a" /* JseaDriverAnswers */],
            Photocontainer: __WEBPACK_IMPORTED_MODULE_13__models_Photocontainer__["a" /* Photocontainer */],
            Image: __WEBPACK_IMPORTED_MODULE_14__models_Image__["a" /* Image */],
            BarcodeHist: __WEBPACK_IMPORTED_MODULE_15__models_BarcodeHist__["a" /* BarcodeHist */]
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
    return SDKModels;
}());
SDKModels = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], SDKModels);

//# sourceMappingURL=SDKModels.js.map

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/barcode/barcode.module": [
		358
	],
	"../pages/change/change.module": [
		341
	],
	"../pages/device/device.module": [
		342
	],
	"../pages/gps/gps.module": [
		354
	],
	"../pages/image-text/image-text.module": [
		325
	],
	"../pages/images/images.module": [
		357
	],
	"../pages/job-detail-notes/job-detail-notes.module": [
		327
	],
	"../pages/job-details/job-details.module": [
		329
	],
	"../pages/jsea/jsea.module": [
		254
	],
	"../pages/login/login.module": [
		359
	],
	"../pages/msgs/msgs.module": [
		356
	],
	"../pages/pda/pda.module": [
		355
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 253;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JseaPageModule", function() { return JseaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsea__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var JseaPageModule = (function () {
    function JseaPageModule() {
    }
    return JseaPageModule;
}());
JseaPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__jsea__["a" /* JseaPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__jsea__["a" /* JseaPage */]),
        ],
    })
], JseaPageModule);

//# sourceMappingURL=jsea.module.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AccessToken */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SDKToken; });
/* tslint:disable */
var AccessToken = (function () {
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

var SDKToken = (function () {
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

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TpmPdaController; });
/* tslint:disable */
var TpmPdaController = (function () {
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
            },
            relations: {}
        };
    };
    return TpmPdaController;
}());

//# sourceMappingURL=TpmPdaController.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Application; });
/* tslint:disable */
var Application = (function () {
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

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Notification; });
/* tslint:disable */
var Notification = (function () {
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

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Push; });
/* tslint:disable */
var Push = (function () {
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

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mobile_event; });
/* tslint:disable */
var Mobile_event = (function () {
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

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteConfig; });
/* tslint:disable */
var SiteConfig = (function () {
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

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DespatchToDriverMessages; });
/* tslint:disable */
var DespatchToDriverMessages = (function () {
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

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JseaDriverQuestions; });
/* tslint:disable */
var JseaDriverQuestions = (function () {
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

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Photocontainer; });
/* tslint:disable */
var Photocontainer = (function () {
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

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Image; });
/* tslint:disable */
var Image = (function () {
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

/***/ 268:
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
var CookieBrowser = (function () {
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
        var cookie = key + "=" + value + "; path=/" + (expires ? "; expires=" + expires.toUTCString() : '');
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
            return JSON.parse(value);
        }
        catch (e) {
            return value;
        }
    };
    return CookieBrowser;
}());
CookieBrowser = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], CookieBrowser);

//# sourceMappingURL=cookie.browser.js.map

/***/ }),

/***/ 269:
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
var StorageBrowser = (function () {
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
    return StorageBrowser;
}());
StorageBrowser = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], StorageBrowser);

//# sourceMappingURL=storage.browser.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JSONSearchParams; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */


/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module JSONSearchParams
* @license MIT
* @description
* JSON Parser and Wrapper for the Angular2 URLSearchParams
* This module correctly encodes a json object into a query string and then creates
* an instance of the URLSearchParams component for later use in HTTP Calls
**/
var JSONSearchParams = (function () {
    function JSONSearchParams() {
    }
    JSONSearchParams.prototype.setJSON = function (obj) {
        this._usp = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* URLSearchParams */](this._JSON2URL(obj, false));
    };
    JSONSearchParams.prototype.getURLSearchParams = function () {
        return this._usp;
    };
    JSONSearchParams.prototype._JSON2URL = function (obj, parent) {
        var parts = [];
        for (var key in obj)
            parts.push(this._parseParam(key, obj[key], parent));
        return parts.join('&');
    };
    JSONSearchParams.prototype._parseParam = function (key, value, parent) {
        var processedKey = parent ? parent + '[' + key + ']' : key;
        if (value && ((typeof value) === 'object' || Array.isArray(value))) {
            return this._JSON2URL(value, processedKey);
        }
        return processedKey + '=' + value;
    };
    return JSONSearchParams;
}());
JSONSearchParams = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], JSONSearchParams);

//# sourceMappingURL=search.params.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__(255);
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
var ErrorHandler = (function () {
    function ErrorHandler() {
    }
    // ErrorObservable when rxjs version < rc.5
    // ErrorObservable<string> when rxjs version = rc.5
    // I'm leaving any for now to avoid breaking apps using both versions
    ErrorHandler.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
    };
    return ErrorHandler;
}());
ErrorHandler = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], ErrorHandler);

//# sourceMappingURL=error.service.js.map

/***/ }),

/***/ 282:
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
var SocketDriver = (function () {
    function SocketDriver() {
    }
    SocketDriver.prototype.connect = function (url, options) { };
    return SocketDriver;
}());

//# sourceMappingURL=socket.driver.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealTime; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_share__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__io_service__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_FireLoop__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sockets_socket_connections__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__custom_SDKModels__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__ = __webpack_require__(13);
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
var RealTime = (function () {
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
        this.sharedOnReady = this.onReadySubject.asObservable().share();
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
                _this.onReadySubject.next('shared-connection');
                clearTimeout(to_1);
            });
            // Else if there is a current attempt of connection we wait for the prior
            // process that started the connection flow.
        }
        else if (this.connecting) {
            var ti_1 = setInterval(function () {
                if (_this.connection.isConnected()) {
                    _this.onReadySubject.next('shared-connection');
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
            this.IO = new __WEBPACK_IMPORTED_MODULE_2__io_service__["a" /* IO */](this.connection);
            this.FireLoop = new __WEBPACK_IMPORTED_MODULE_4__models_FireLoop__["a" /* FireLoop */](this.connection, this.models);
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
    return RealTime;
}());
RealTime = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__sockets_socket_connections__["a" /* SocketConnection */])),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__custom_SDKModels__["a" /* SDKModels */])),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* LoopBackAuth */])),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__sockets_socket_connections__["a" /* SocketConnection */],
        __WEBPACK_IMPORTED_MODULE_6__custom_SDKModels__["a" /* SDKModels */],
        __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* LoopBackAuth */]])
], RealTime);

//# sourceMappingURL=real.time.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Job__ = __webpack_require__(144);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TpmPdaController__ = __webpack_require__(258);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GpsHistory__ = __webpack_require__(100);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Application__ = __webpack_require__(259);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Installation__ = __webpack_require__(145);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Notification__ = __webpack_require__(260);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Push__ = __webpack_require__(261);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Mobile_event__ = __webpack_require__(262);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__SiteConfig__ = __webpack_require__(263);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__DespatchToDriverMessages__ = __webpack_require__(264);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__JseaDriverQuestions__ = __webpack_require__(265);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__JseaDriverAnswers__ = __webpack_require__(146);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Photocontainer__ = __webpack_require__(266);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Image__ = __webpack_require__(267);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__BarcodeHist__ = __webpack_require__(147);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__BaseModels__ = __webpack_require__(257);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__FireLoopRef__ = __webpack_require__(449);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_16__FireLoopRef__["a"]; });
/* tslint:disable */

















//# sourceMappingURL=index.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_search_params__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_error_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_Job__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sockets_socket_connections__ = __webpack_require__(29);
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
var JobApi = (function (_super) {
    __extends(JobApi, _super);
    function JobApi(http, connection, models, auth, searchParams, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, searchParams, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.searchParams = searchParams;
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
        return result.map(function (instances) {
            return instances.map(function (instance) { return new __WEBPACK_IMPORTED_MODULE_8__models_Job__["a" /* Job */](instance); });
        });
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
    return JobApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));
JobApi = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */])),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_9__sockets_socket_connections__["a" /* SocketConnection */])),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
    __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
    __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */])),
    __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */])),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_9__sockets_socket_connections__["a" /* SocketConnection */],
        __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
        __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
        __WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */],
        __WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */]])
], JobApi);

//# sourceMappingURL=Job.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TpmPdaControllerApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_search_params__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_error_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__ = __webpack_require__(29);
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
var TpmPdaControllerApi = (function (_super) {
    __extends(TpmPdaControllerApi, _super);
    function TpmPdaControllerApi(http, connection, models, auth, searchParams, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, searchParams, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.searchParams = searchParams;
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
    return TpmPdaControllerApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));
TpmPdaControllerApi = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */])),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */])),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
    __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
    __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */])),
    __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */])),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */],
        __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
        __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
        __WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */],
        __WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */]])
], TpmPdaControllerApi);

//# sourceMappingURL=TpmPdaController.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_search_params__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_error_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__ = __webpack_require__(29);
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
var ApplicationApi = (function (_super) {
    __extends(ApplicationApi, _super);
    function ApplicationApi(http, connection, models, auth, searchParams, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, searchParams, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.searchParams = searchParams;
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
    return ApplicationApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));
ApplicationApi = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */])),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */])),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
    __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
    __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */])),
    __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */])),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */],
        __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
        __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
        __WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */],
        __WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */]])
], ApplicationApi);

//# sourceMappingURL=Application.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketConnection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_driver__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_share__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(20);
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
var SocketConnection = (function () {
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
            sharedOnConnect: this.subjects.onConnect.asObservable().share(),
            sharedOnDisconnect: this.subjects.onDisconnect.asObservable().share(),
            sharedOnAuthenticated: this.subjects.onAuthenticated.asObservable().share(),
            sharedOnUnAuthorized: this.subjects.onUnAuthorized.asObservable().share()
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
     * If there is a broken connection it will re-connect.
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
    return SocketConnection;
}());
SocketConnection = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__socket_driver__["a" /* SocketDriver */])),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"])),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__socket_driver__["a" /* SocketDriver */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
], SocketConnection);

//# sourceMappingURL=socket.connections.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstallationApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_search_params__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_error_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_Installation__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sockets_socket_connections__ = __webpack_require__(29);
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
var InstallationApi = (function (_super) {
    __extends(InstallationApi, _super);
    function InstallationApi(http, connection, models, auth, searchParams, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, searchParams, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.searchParams = searchParams;
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
        return result.map(function (instance) { return new __WEBPACK_IMPORTED_MODULE_8__models_Installation__["a" /* Installation */](instance); });
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
        return result.map(function (instance) { return new __WEBPACK_IMPORTED_MODULE_8__models_Installation__["a" /* Installation */](instance); });
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
        return result.map(function (instance) { return new __WEBPACK_IMPORTED_MODULE_8__models_Installation__["a" /* Installation */](instance); });
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
    return InstallationApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));
InstallationApi = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */])),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_9__sockets_socket_connections__["a" /* SocketConnection */])),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
    __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
    __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */])),
    __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */])),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_9__sockets_socket_connections__["a" /* SocketConnection */],
        __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
        __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
        __WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */],
        __WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */]])
], InstallationApi);

//# sourceMappingURL=Installation.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_search_params__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_error_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__ = __webpack_require__(29);
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
var NotificationApi = (function (_super) {
    __extends(NotificationApi, _super);
    function NotificationApi(http, connection, models, auth, searchParams, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, searchParams, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.searchParams = searchParams;
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
    return NotificationApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));
NotificationApi = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */])),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */])),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
    __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
    __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */])),
    __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */])),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */],
        __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
        __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
        __WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */],
        __WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */]])
], NotificationApi);

//# sourceMappingURL=Notification.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PushApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_search_params__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_error_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__ = __webpack_require__(29);
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
var PushApi = (function (_super) {
    __extends(PushApi, _super);
    function PushApi(http, connection, models, auth, searchParams, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, searchParams, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.searchParams = searchParams;
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
    return PushApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));
PushApi = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */])),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */])),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
    __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
    __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */])),
    __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */])),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */],
        __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
        __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
        __WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */],
        __WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */]])
], PushApi);

//# sourceMappingURL=Push.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mobile_eventApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_search_params__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_error_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__ = __webpack_require__(29);
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
var Mobile_eventApi = (function (_super) {
    __extends(Mobile_eventApi, _super);
    function Mobile_eventApi(http, connection, models, auth, searchParams, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, searchParams, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.searchParams = searchParams;
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
    return Mobile_eventApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));
Mobile_eventApi = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */])),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */])),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
    __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
    __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */])),
    __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */])),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */],
        __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
        __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
        __WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */],
        __WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */]])
], Mobile_eventApi);

//# sourceMappingURL=Mobile_event.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteConfigApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_search_params__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_error_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__ = __webpack_require__(29);
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
var SiteConfigApi = (function (_super) {
    __extends(SiteConfigApi, _super);
    function SiteConfigApi(http, connection, models, auth, searchParams, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, searchParams, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.searchParams = searchParams;
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
    return SiteConfigApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));
SiteConfigApi = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */])),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */])),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
    __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
    __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */])),
    __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */])),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */],
        __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
        __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
        __WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */],
        __WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */]])
], SiteConfigApi);

//# sourceMappingURL=SiteConfig.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DespatchToDriverMessagesApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_search_params__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_error_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__ = __webpack_require__(29);
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
var DespatchToDriverMessagesApi = (function (_super) {
    __extends(DespatchToDriverMessagesApi, _super);
    function DespatchToDriverMessagesApi(http, connection, models, auth, searchParams, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, searchParams, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.searchParams = searchParams;
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
    return DespatchToDriverMessagesApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));
DespatchToDriverMessagesApi = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */])),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */])),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
    __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
    __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */])),
    __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */])),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */],
        __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
        __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
        __WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */],
        __WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */]])
], DespatchToDriverMessagesApi);

//# sourceMappingURL=DespatchToDriverMessages.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JseaDriverAnswersApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_search_params__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_error_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_JseaDriverAnswers__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sockets_socket_connections__ = __webpack_require__(29);
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
var JseaDriverAnswersApi = (function (_super) {
    __extends(JseaDriverAnswersApi, _super);
    function JseaDriverAnswersApi(http, connection, models, auth, searchParams, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, searchParams, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.searchParams = searchParams;
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
        return result.map(function (instances) {
            return instances.map(function (instance) { return new __WEBPACK_IMPORTED_MODULE_8__models_JseaDriverAnswers__["a" /* JseaDriverAnswers */](instance); });
        });
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
    return JseaDriverAnswersApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));
JseaDriverAnswersApi = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */])),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_9__sockets_socket_connections__["a" /* SocketConnection */])),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
    __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
    __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */])),
    __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */])),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_9__sockets_socket_connections__["a" /* SocketConnection */],
        __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
        __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
        __WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */],
        __WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */]])
], JseaDriverAnswersApi);

//# sourceMappingURL=JseaDriverAnswers.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotocontainerApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_search_params__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_error_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__ = __webpack_require__(29);
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
var PhotocontainerApi = (function (_super) {
    __extends(PhotocontainerApi, _super);
    function PhotocontainerApi(http, connection, models, auth, searchParams, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, searchParams, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.searchParams = searchParams;
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
    return PhotocontainerApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));
PhotocontainerApi = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */])),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */])),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
    __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
    __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */])),
    __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */])),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */],
        __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
        __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
        __WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */],
        __WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */]])
], PhotocontainerApi);

//# sourceMappingURL=Photocontainer.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_search_params__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_error_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__ = __webpack_require__(29);
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
var ImageApi = (function (_super) {
    __extends(ImageApi, _super);
    function ImageApi(http, connection, models, auth, searchParams, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, searchParams, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.searchParams = searchParams;
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
    return ImageApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));
ImageApi = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */])),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */])),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
    __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
    __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */])),
    __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */])),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */],
        __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
        __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
        __WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */],
        __WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */]])
], ImageApi);

//# sourceMappingURL=Image.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarcodeHistApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_search_params__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_error_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_BarcodeHist__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sockets_socket_connections__ = __webpack_require__(29);
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
var BarcodeHistApi = (function (_super) {
    __extends(BarcodeHistApi, _super);
    function BarcodeHistApi(http, connection, models, auth, searchParams, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, searchParams, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.searchParams = searchParams;
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
        return result.map(function (instances) {
            return instances.map(function (instance) { return new __WEBPACK_IMPORTED_MODULE_8__models_BarcodeHist__["a" /* BarcodeHist */](instance); });
        });
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
    return BarcodeHistApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));
BarcodeHistApi = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */])),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_9__sockets_socket_connections__["a" /* SocketConnection */])),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
    __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
    __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */])),
    __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */])),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_9__sockets_socket_connections__["a" /* SocketConnection */],
        __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
        __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
        __WEBPACK_IMPORTED_MODULE_6__core_search_params__["a" /* JSONSearchParams */],
        __WEBPACK_IMPORTED_MODULE_7__core_error_service__["a" /* ErrorHandler */]])
], BarcodeHistApi);

//# sourceMappingURL=BarcodeHist.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteconfigServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_sdk_services__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service_shared_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_service_config_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pdaparams_service_pdaparams_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__log_service_log_service__ = __webpack_require__(16);
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
var SiteconfigServiceProvider = (function () {
    function SiteconfigServiceProvider(pdaParams, siteConfigApi, configService, http, sharedService, logger) {
        this.pdaParams = pdaParams;
        this.siteConfigApi = siteConfigApi;
        this.configService = configService;
        this.http = http;
        this.sharedService = sharedService;
        this.logger = logger;
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
            'PDA_MANDATORY_PHOTOS'
        ];
        this.siteconfigs = null;
        this.logParams = { site: this.pdaParams.getSiteId(), driver: this.pdaParams.getDriverId(), fn: 'SiteconfigServiceProvider' };
        this.log = this.logger.getInstance(this.logParams);
        //console.log('Hello SiteconfigServiceProvider Provider');
        //this.injector = ReflectiveInjector.resolveAndCreate([LogServiceProvider, LoggerService, PdaparamsServiceProvider, ConfigServiceProvider, Http]);
    }
    SiteconfigServiceProvider.prototype.loadAllConfigsFromServer = function () {
        var _this = this;
        var filter = {
            "where": {
                and: [{ "confActive": true }, { "confKey": { "inq": this.keylist } }]
            }
        };
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].create(function (observer) {
            _this.siteConfigApi.find(filter).subscribe(function (siteconfigs) {
                _this.log.info("Retrieved:" + JSON.stringify(siteconfigs));
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
                    localStorage.setItem('SITE_CONFIG_LOADED', 'true');
                    _this.sharedService.SITE_CONFIG_LOADED.next(true);
                }
                observer.next("success");
            }, function (error) {
                _this.log.info(error);
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
        //return ($q.when(retval));
        //return (retval);
        return retval;
    };
    SiteconfigServiceProvider.prototype.getSiteConfig = function (key) {
        var retval = localStorage.getItem(key);
        if (!retval) {
            retval = '';
        }
        //return ($q.when(retval));
        //return (retval);
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].of(retval);
    };
    SiteconfigServiceProvider.prototype.getSiteConfigInt = function (key) {
        var retval = +localStorage.getItem(key); // the "+" causes a cast to an integer
        if (!retval) {
            retval = 0;
        }
        //return ($q.when(retval));
        //return (retval);
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
    return SiteconfigServiceProvider;
}());
SiteconfigServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_3__shared_sdk_services__["e" /* SiteConfigApi */],
        __WEBPACK_IMPORTED_MODULE_5__config_service_config_service__["a" /* ConfigServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_4__shared_service_shared_service__["a" /* SharedServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_7__log_service_log_service__["a" /* LogServiceProvider */]])
], SiteconfigServiceProvider);

//# sourceMappingURL=siteconfig-service.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageTextPageModule", function() { return ImageTextPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_text__ = __webpack_require__(326);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ImageTextPageModule = (function () {
    function ImageTextPageModule() {
    }
    return ImageTextPageModule;
}());
ImageTextPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__image_text__["a" /* ImageTextPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__image_text__["a" /* ImageTextPage */]),
        ],
    })
], ImageTextPageModule);

//# sourceMappingURL=image-text.module.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageTextPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_sdk_index__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_service_config_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_image_file_service_image_file_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_pdaparams_service_pdaparams_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_shared_service_shared_service__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ImageTextPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ImageTextPage = (function () {
    function ImageTextPage(navCtrl, imageFileService, navParams, viewCtrl, configService, pdaParams, sharedService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.imageFileService = imageFileService;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.configService = configService;
        this.pdaParams = pdaParams;
        this.sharedService = sharedService;
        this.loginFlag = this.pdaParams.isDrvLoggedOn();
        this.newFileName = this.navParams.get('newFileName');
        this.save = function () {
            var notes = _this.photoMessage;
            _this.imageFileService.setImageProperty(_this.newFileName, 'notes', notes);
            // close after saving
            _this.closeModal();
        };
        // function to close the modal
        this.closeModal = function () {
            if (_this.newFileName)
                _this.imageFileService.setImageProperty(_this.newFileName, 'readyForUpload', 'true');
            _this.clear();
            _this.viewCtrl.dismiss();
        };
        this.clear = function () {
            _this.photoMessage = "";
        };
        __WEBPACK_IMPORTED_MODULE_2__shared_sdk_index__["b" /* LoopBackConfig */].setBaseURL(configService.apiURL);
        __WEBPACK_IMPORTED_MODULE_2__shared_sdk_index__["b" /* LoopBackConfig */].setApiVersion(configService.API_VERSION);
    }
    return ImageTextPage;
}());
ImageTextPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-image-text',template:/*ion-inline-start:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/image-text/image-text.html"*/'<!--\n\n  Generated template for the ImageTextPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n<ion-header>\n\n  <!--  <h1 class="title">Notes for Job</h1> -->\n\n  <ion-navbar color="primary">\n\n      <ion-buttons left>\n\n          <span [ngSwitch]="this.sharedService.loginFlag">      \n\n            <ion-badge class="common-border"  color="secondary" *ngSwitchCase="true"> Logged In</ion-badge>\n\n            <ion-badge class="common-border"  color="danger" *ngSwitchCase="false"> Logged Off</ion-badge>\n\n          </span>\n\n        </ion-buttons>\n\n    <ion-title>Notes for Image</ion-title>\n\n    <ion-buttons right>\n\n      <ion-badge class="common-border" color="danger" *ngIf="newMessageCount">{{newMessageCount}}</ion-badge>\n\n      <ion-badge class="common-border" color="danger"> Driver #  {{driverId}}</ion-badge>\n\n  </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-card>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-textarea rows="6" cols="50" expanding-textarea name="imagemessage" [(ngModel)]="photoMessage" placeholder="Enter any comments for your image here."\n\n          autofocus required>\n\n        </ion-textarea>\n\n      </ion-item>\n\n      <ion-item>\n\n\n\n        <ion-row>\n\n          <ion-col col-4>\n\n            <button ion-button color="secondary" (click)="save()">Save</button>\n\n          </ion-col>\n\n          <ion-col col-4>\n\n            <button ion-button color="light" (click)="clear()">Clear</button>\n\n          </ion-col>\n\n          <ion-col col-4>\n\n            <button ion-button color="danger" (click)="closeModal()">Cancel</button>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/image-text/image-text.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_image_file_service_image_file_service__["a" /* ImageFileServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_config_service_config_service__["a" /* ConfigServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_6__providers_shared_service_shared_service__["a" /* SharedServiceProvider */]])
], ImageTextPage);

//# sourceMappingURL=image-text.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobDetailNotesPageModule", function() { return JobDetailNotesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__job_detail_notes__ = __webpack_require__(328);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var JobDetailNotesPageModule = (function () {
    function JobDetailNotesPageModule() {
    }
    return JobDetailNotesPageModule;
}());
JobDetailNotesPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__job_detail_notes__["a" /* JobDetailNotesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__job_detail_notes__["a" /* JobDetailNotesPage */]),
        ],
    })
], JobDetailNotesPageModule);

//# sourceMappingURL=job-detail-notes.module.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobDetailNotesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_sdk_index__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_service_config_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_pdaparams_service_pdaparams_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_service_shared_service__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the JobDetailNotesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var JobDetailNotesPage = (function () {
    function JobDetailNotesPage(navCtrl, navParams, viewCtrl, configService, pdaParams, sharedService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.configService = configService;
        this.pdaParams = pdaParams;
        this.sharedService = sharedService;
        this.loginFlag = this.pdaParams.isDrvLoggedOn();
        this.note = {
            'seqid': '',
            'formtype': '',
            'text': '',
            'placeholderText': ''
        };
        __WEBPACK_IMPORTED_MODULE_2__shared_sdk_index__["b" /* LoopBackConfig */].setBaseURL(configService.apiURL);
        __WEBPACK_IMPORTED_MODULE_2__shared_sdk_index__["b" /* LoopBackConfig */].setApiVersion(configService.API_VERSION);
        this.note = Object.assign({}, this.navParams.get('note'));
    }
    JobDetailNotesPage.prototype.clear = function () {
        this.note.formtype = '';
        this.note.placeholderText = '';
        this.note.text = '';
        this.note.seqid = '';
    };
    ;
    JobDetailNotesPage.prototype.drawCancel = function () {
        this.clear();
        this.navCtrl.pop();
    };
    JobDetailNotesPage.prototype.save = function () {
        var seqid = this.note.seqid;
        var noteText = this.note.text;
        this.note.text = "";
        this.viewCtrl.dismiss({
            noteText: noteText,
            seqid: seqid
        });
    };
    ;
    return JobDetailNotesPage;
}());
JobDetailNotesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-job-detail-notes',template:/*ion-inline-start:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/job-detail-notes/job-detail-notes.html"*/'<!--\n\n  Generated template for the JobDetailNotesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <!--  <h1 class="title">Notes for Job</h1> -->\n\n  <ion-navbar color="primary">\n\n      <ion-buttons left>\n\n          <span [ngSwitch]="this.sharedService.loginFlag">      \n\n            <ion-badge class="common-border"  color="secondary" *ngSwitchCase="true"> Logged In</ion-badge>\n\n            <ion-badge class="common-border"  color="danger" *ngSwitchCase="false"> Logged Off</ion-badge>\n\n          </span>\n\n        </ion-buttons>\n\n    <ion-title>Notes for Job</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-textarea rows="6" cols="50" expanding-textarea [(ngModel)]="note.text" placeholder={{note.placeholderText}} autofocus>\n\n        </ion-textarea>\n\n      </ion-item>\n\n      <ion-item>\n\n\n\n        <ion-row>\n\n          <ion-col col-4>\n\n            <button ion-button color="secondary" (click)="save()">Save</button>\n\n          </ion-col>\n\n          <ion-col col-4>\n\n            <button ion-button color="light" (click)="clear()">Clear</button>\n\n          </ion-col>\n\n          <ion-col col-4>\n\n            <button ion-button color="danger" (click)="drawCancel()">Cancel</button>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/job-detail-notes/job-detail-notes.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_config_service_config_service__["a" /* ConfigServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_shared_service_shared_service__["a" /* SharedServiceProvider */]])
], JobDetailNotesPage);

//# sourceMappingURL=job-detail-notes.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobDetailsPageModule", function() { return JobDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__job_details__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_camera_button_camera_button__ = __webpack_require__(716);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var JobDetailsPageModule = (function () {
    function JobDetailsPageModule() {
    }
    return JobDetailsPageModule;
}());
JobDetailsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__job_details__["a" /* JobDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_3__components_camera_button_camera_button__["a" /* CameraButtonComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__job_details__["a" /* JobDetailsPage */]),
        ],
    })
], JobDetailsPageModule);

//# sourceMappingURL=job-details.module.js.map

/***/ }),

/***/ 334:
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
var WindowRefServiceProvider = (function () {
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
    return WindowRefServiceProvider;
}());
WindowRefServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], WindowRefServiceProvider);

//# sourceMappingURL=window-ref-service.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SyncServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__log_service_log_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pdaparams_service_pdaparams_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__job_replication_service_job_replication_service__ = __webpack_require__(167);
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
var SyncServiceProvider = (function () {
    function SyncServiceProvider(http, logger, pdaParams, jobReplicationService) {
        this.http = http;
        this.logger = logger;
        this.pdaParams = pdaParams;
        this.jobReplicationService = jobReplicationService;
        this.isSyncing = false;
        //sync = lbclient.sync(this.arg1,this.arg2);
        this.logParams = { site: this.pdaParams.getSiteId(), driver: this.pdaParams.getDriverId(), fn: 'PlatformReadyServiceProvider' };
        this.log = this.logger.getInstance(this.logParams);
        this.hybridSync = function (callback, filter) {
            this.mystr = 'syncService: About to sync SyncInprogress = ' + this.isSyncing + " Called from (last value set =) [" + this.lcallingfunc + "]";
            this.log.debug(this.mystr);
            if (!this.isSyncing) {
                this.isSyncing = true;
                this.mystr = 'syncService: isSyncInprogress is off so turn it on before Replication sync call ';
                this.log.debug(this.mystr);
                this.log.debug("SYNC: START");
                //console.log("+++++++++++++++++++++Calling jobReplicationService.sync in sync-service.ts.+++++++++++");
                this.jobReplicationService.sync(callback, filter);
            }
        };
        this.getSyncInProgress = function () {
            this.mystr = 'syncService: getSyncInProgress:' + this.isSyncing;
            this.log.debug(this.mystr);
            return this.isSyncing;
        };
        this.setCallingFunc = function (callingfunc) {
            this.mystr = 'syncService: In setCallingFunc value = ' + callingfunc;
            this.log.debug(this.mystr);
            this.lcallingfunc = callingfunc;
        };
        this.setSyncInProgress = function (torf) {
            this.isSyncing = torf;
            this.mystr = 'syncService: In setSyncInprogress setting value = ' + this.isSyncing;
            this.log.debug(this.mystr);
        };
        //console.log('Hello SyncServiceProvider Provider');
    }
    return SyncServiceProvider;
}());
SyncServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__log_service_log_service__["a" /* LogServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_4__pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_5__job_replication_service_job_replication_service__["a" /* JobReplicationServiceProvider */]])
], SyncServiceProvider);

//# sourceMappingURL=sync-service.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePageModule", function() { return ChangePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__change__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChangePageModule = (function () {
    function ChangePageModule() {
    }
    return ChangePageModule;
}());
ChangePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__change__["a" /* ChangePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__change__["a" /* ChangePage */]),
        ],
    })
], ChangePageModule);

//# sourceMappingURL=change.module.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicePageModule", function() { return DevicePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__device__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_keys_pipe__ = __webpack_require__(720);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DevicePageModule = (function () {
    function DevicePageModule() {
    }
    return DevicePageModule;
}());
DevicePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__device__["a" /* DevicePage */],
            __WEBPACK_IMPORTED_MODULE_3__pipes_keys_pipe__["a" /* KeysPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__device__["a" /* DevicePage */]),
        ],
    })
], DevicePageModule);

//# sourceMappingURL=device.module.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_sdk_index__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config_service_config_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_siteconfig_service_siteconfig_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_pdaparams_service_pdaparams_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_gps_service_gps_service__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_platform_ready_service_platform_ready_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_exit_service_exit_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_shared_service_shared_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_device_service_device_service__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_message_service_message_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_job_service_job_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_jsea_service_jsea_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_sod_service_sod_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_push_service_push_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_connectivity_monitor_connectivity_monitor__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__change_change__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_app_component__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















var DevicePage = (function () {
    function DevicePage(storage, navCtrl, navParams, platformReady, configService, pdaParams, gpsService, exitService, deviceService, sharedService, alertCtrl, siteConfig, messageService, jobService, jseaService, sodService, conMonService, pushService, app) {
        var _this = this;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platformReady = platformReady;
        this.configService = configService;
        this.pdaParams = pdaParams;
        this.gpsService = gpsService;
        this.exitService = exitService;
        this.deviceService = deviceService;
        this.sharedService = sharedService;
        this.alertCtrl = alertCtrl;
        this.siteConfig = siteConfig;
        this.messageService = messageService;
        this.jobService = jobService;
        this.jseaService = jseaService;
        this.sodService = sodService;
        this.conMonService = conMonService;
        this.pushService = pushService;
        this.app = app;
        this.loginFlag = this.pdaParams.isDrvLoggedOn();
        this.devicectrl = {
            title: '',
            drivernum: 0,
            isGpsWorking: false,
            isDeviceReady: false,
            showGpsAlerts: false,
            sendGps: false,
            registeredForPush: false
        };
        this.showResult = function () {
            return _this.error == "";
        };
        this.updateShowGpsAlerts = function (torf) {
            _this.gpsService.setShowGpsAlerts(torf);
        };
        this.updateSendGps = function (torf) {
            _this.gpsService.setSendGps(torf);
        };
        this.exitTplusMobile = function () {
            _this.gpsService.setSendGps(false);
            _this.exitService.exitTplusMobile();
        };
        this.toggleFullReplication = function () {
            _this.fullreplication = !_this.fullreplication;
        };
        this.toggleDesktopBrowserScrolling = function () {
            _this.sharedService.setDesktopBrowserScrolling(!_this.sharedService.setDesktopBrowserScrolling);
        };
        this.pushDeRegister = function () {
        };
        this.pushRegister = function () {
            _this.pushService.registerForPush();
        };
        this.resetApp = function () {
            var confirmPopup = _this.alertCtrl.create({
                title: 'Reset App',
                message: 'This will delete all data for this app and you will need to login again.  Are you sure you want to do this?',
                buttons: [
                    {
                        text: 'Yes',
                        handler: function () {
                            localStorage.clear();
                            // TODO -  clear images if required - see /app/strongloop/loopback-clientservices-osc-images/client/js/deviceCtrl.js           
                            _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_19__app_app_component__["a" /* MyApp */]);
                            //return false;
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            //console.log('Cancel clicked');
                            return;
                        }
                    }
                ]
            });
            confirmPopup.present();
        };
        this.reloadSiteConfig = function () {
            _this.siteConfig.deleteLocalConfigs();
            console.log("Local Configs deleted!");
            var result$ = _this.siteConfig
                .loadAllConfigsFromServer()
                .subscribe(function (result) {
                console.log("Site Config Reloaded!");
            }, function (error) {
                _this.showError("Unable to load Site Configs.Please check your connection.");
                return;
            });
        };
        this.localStorageUsage = function () {
            var len = localStorage.length;
            var localStorageList = {};
            for (var i = 0; i < len; i++) {
                var key = localStorage.key(i);
                var value = localStorage[key];
                if (key == 'osc-local-db' || key == 'signature')
                    continue;
                localStorageList[key] = value;
            }
            return (localStorageList);
        };
        this.viewChangeData = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_18__change_change__["a" /* ChangePage */]).catch(function (err) {
                //console.log("Error pushing ChangePage:" + err);
            });
        };
        this.clearChangeData = function () {
            _this.messageService.clearChangeData();
        };
        this.deleteOldJobs = function () {
            _this.jobService.deleteOldJobs(0);
        };
        this.deleteOldJSEA = function () {
            _this.jseaService.deleteOldData(0);
        };
        this.clearSODDate = function () {
            _this.sodService.clearSODDate();
            _this.localStorageList = _this.localStorageUsage();
        };
        this.setSODDate = function () {
            _this.sodService.setSODDate();
            _this.localStorageList = _this.localStorageUsage();
        };
        this.username = navParams.data;
        //console.log("DevicePage loading...");
        __WEBPACK_IMPORTED_MODULE_3__shared_sdk_index__["b" /* LoopBackConfig */].setBaseURL(configService.apiURL);
        __WEBPACK_IMPORTED_MODULE_3__shared_sdk_index__["b" /* LoopBackConfig */].setApiVersion(configService.API_VERSION);
        this.clientConfig = this.configService.getClientConfig();
        this.appConfig = this.configService.appConfig;
    }
    DevicePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.driverId = this.pdaParams.getDriverId();
        this.devicectrl.title = "Device Details" + " v" + this.configService.appConfig.version;
        this.devicectrl.drivernum = this.pdaParams.getDriverId();
        this.devicectrl.isGpsWorking = this.gpsService.getGpsIsWorking();
        this.devicectrl.isDeviceReady = this.platformReady.isPlatformReady();
        this.devicectrl.showGpsAlerts = this.gpsService.getShowGpsAlerts();
        this.devicectrl.sendGps = this.gpsService.getSendGps();
        if (this.devicectrl.isDeviceReady) {
            this.devicectrl.registeredForPush = this.pushService.getIsRegistered();
            this.version = this.configService.appConfig.version;
            this.fullreplication = lbclient.fullreplication.fullReplication;
            this.usedStorage = Math.round(JSON.stringify(localStorage).length / 1024) + " KB";
            this.localStorageList = this.localStorageUsage();
            this.device = this.deviceService.getDevice();
        }
        this.conMonService.isConnected.subscribe(function (res) {
            _this.isOnline = res;
        });
        this.conMonService.networkType.subscribe(function (res) {
            _this.networkType = res;
        });
    }; // ionViewDidLoad() ends
    DevicePage.prototype.showError = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    return DevicePage;
}());
DevicePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-device',template:/*ion-inline-start:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/device/device.html"*/'<!--\n\n  Generated template for the DevicePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-buttons left>\n\n      <span [ngSwitch]="this.sharedService.loginFlag">\n\n        <ion-badge class="common-border" color="secondary" *ngSwitchCase="true"> Logged In</ion-badge>\n\n        <ion-badge class="common-border" color="danger" *ngSwitchCase="false"> Logged Off</ion-badge>\n\n      </span>\n\n    </ion-buttons>\n\n    <ion-title>DEVICE</ion-title>\n\n    <ion-buttons right>\n\n      <ion-badge class="common-border" color="danger" *ngIf="newMessageCount">{{newMessageCount}}</ion-badge>\n\n      <ion-badge class="common-border" color="danger"> Driver # {{driverId}}</ion-badge>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content [ngClass]="{ \'overflow-scroll\': desktopBrowserScrolling}" text-wrap>\n\n\n\n\n\n\n\n  <ion-card>\n\n    <ion-list>\n\n      <ion-list-header class="ion-list-header" color="secondary">\n\n        Driver Number: {{devicectrl.drivernum}}\n\n      </ion-list-header>\n\n\n\n      <ion-item text-wrap>\n\n        <h2>** WARNING **</h2>\n\n        <p>Do not change any of these values unless advised by support</p>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-card>\n\n\n\n  <ion-list>\n\n    <ion-list-header class="ion-list-header" color="secondary">\n\n      App properties - v{{version}}\n\n    </ion-list-header>\n\n\n\n    <ion-item class="item">\n\n      Version :\n\n      <span class="item-note" item-end>\n\n        {{version}}\n\n      </span>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>GPS Active</ion-label>\n\n      <ion-toggle [(ngModel)]="devicectrl.isGpsWorking" [disabled]="true"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Device Ready</ion-label>\n\n      <ion-toggle [(ngModel)]="devicectrl.isDeviceReady" [disabled]="true"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Show GPS Alerts</ion-label>\n\n      <ion-toggle [(ngModel)]="devicectrl.showGpsAlerts" (ngModelChange)="updateShowGpsAlerts(devicectrl.showGpsAlerts)"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>GPS To Server</ion-label>\n\n      <ion-toggle [(ngModel)]="devicectrl.sendGps" (ngModelChange)="updateSendGps(devicectrl.sendGps)"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label> Reg\'d For Push</ion-label>\n\n      <ion-toggle [(ngModel)]="devicectrl.registeredForPush" [disabled]="true"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <button ion-item class="item-button-right" (click)="pushRegister()">\n\n      Register for Push\n\n    </button>\n\n\n\n    <button ion-item class="item-button-right" (click)="pushDeRegister()">\n\n      UnRegister from Push\n\n    </button>\n\n\n\n    <ion-item>\n\n      <ion-label> Desktop Scrolling Mode</ion-label>\n\n      <ion-toggle [(ngModel)]="desktopBrowserScrolling" (ngModelChange)="toggleDesktopBrowserScrolling()"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Multileg</ion-label>\n\n      <ion-toggle [(ngModel)]="pdaParams.multileg"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Local job display</ion-label>\n\n      <ion-toggle [(ngModel)]="pdaParams.jobdisplay"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Multi job select</ion-label>\n\n      <ion-toggle [(ngModel)]="pdaParams.multiSelect"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Always attempt foreground GPS even if logged off</ion-label>\n\n      <ion-toggle [(ngModel)]="pdaParams.alwaysGetGPS"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label> Query one date only</ion-label>\n\n      <ion-toggle [(ngModel)]="pdaParams.jobDetailOneDayOnly"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Auto image upload</ion-label>\n\n      <ion-toggle [(ngModel)]="pdaParams.imageUpload"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <button ion-item class="item-button-right" (click)="viewChangeData()">\n\n      View change data\n\n    </button>\n\n\n\n    <ion-item>\n\n      <ion-label>Debug Mode</ion-label>\n\n      <ion-toggle [(ngModel)]="pdaParams.debugMode" (ngModelChange)="pdaParams.setDebugMode(pdaParams.debugMode)"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <ion-item *ngIf="pdaParams.debugMode">\n\n      <ion-label> Full Replication</ion-label>\n\n      <ion-toggle [(ngModel)]="fullreplication" (ngModelChange)="toggleFullReplication()"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label> Enable experimental features</ion-label>\n\n      <ion-toggle [(ngModel)]="pdaParams.experimental"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <ion-item *ngIf="pdaParams.experimental">\n\n      <ion-label>Mutliple deliveries one POD</ion-label>\n\n      <ion-toggle [(ngModel)]="pdaParams.pda_deliver_all"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <ion-item *ngIf="pdaParams.experimental">\n\n      <ion-label>Additional job statuses</ion-label>\n\n      <ion-toggle [(ngModel)]="pdaParams.pda_full_statuses"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <ion-item *ngIf="pdaParams.experimental">\n\n      <ion-label> Images</ion-label>\n\n      <ion-toggle [(ngModel)]="pdaParams.pda_images"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <ion-item *ngIf="pdaParams.experimental">\n\n      <ion-label> Notes</ion-label>\n\n      <ion-toggle [(ngModel)]="pdaParams.pda_notes"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <ion-item *ngIf="pdaParams.experimental">\n\n      <ion-label> Sync DL</ion-label>\n\n      <ion-toggle [(ngModel)]="pdaParams.syncDL"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <ion-item *ngIf="pdaParams.experimental">\n\n      <ion-label>JSEA applicable</ion-label>\n\n      <ion-toggle [(ngModel)]="pdaParams.pda_jsea_on"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <!-- TODO - make this editable -->\n\n    <ion-item class="item" *ngIf="pdaParams.experimental">\n\n      Image poll time :\n\n      <span class="item-note" item-end>\n\n        {{pdaParams.imagePollTime}}\n\n      </span>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n\n\n\n\n\n\n  <span *ngIf="pdaParams.debugMode">\n\n\n\n    <ion-list>\n\n      <ion-list-header class="ion-list-header" color="secondary">\n\n        Config\n\n      </ion-list-header>\n\n\n\n      <ion-item class="item">\n\n        Client ID :\n\n        <span class="item-note" item-end>\n\n          {{clientConfig.clientId}}\n\n        </span>\n\n      </ion-item>\n\n\n\n      <ion-item class="item">\n\n        Server IP :\n\n        <span class="item-note" item-end>\n\n          {{clientConfig.serverIP}}:{{clientConfig.serverPort}}\n\n        </span>\n\n      </ion-item>\n\n      <ion-item class="item">\n\n        Logger IP :\n\n        <span class="item-note" item-end>\n\n          {{appConfig.logServerIP}}:{{appConfig.logServerPort}}\n\n        </span>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <ion-list>\n\n      <ion-list-header class="ion-list-header" color="secondary">\n\n        Device Reset\n\n      </ion-list-header>\n\n\n\n      <button ion-item class="item-button-right" (click)="resetApp()">\n\n        Reset app (deletes all data)\n\n      </button>\n\n\n\n      <button ion-item class="item-button-right" (click)="clearChangeData()">\n\n        Clear change data\n\n      </button>\n\n\n\n      <button ion-item class="item-button-right" (click)="deleteOldJobs()">\n\n        Delete old jobs\n\n      </button>\n\n\n\n      <button ion-item class="item-button-right" (click)="deleteOldJSEA()">\n\n        Delete old JSEA\n\n      </button>\n\n\n\n      <button ion-item class="item-button-right" (click)="clearSODDate()">\n\n        SOD testing - clear date\n\n      </button>\n\n\n\n      <button ion-item class="item-button-right" (click)="setSODDate()">\n\n        SOD testing - set date yesterday\n\n      </button>\n\n    </ion-list>\n\n\n\n  </span>\n\n\n\n\n\n\n\n  <ion-list>\n\n    <ion-list-header class="ion-list-header" color="secondary">\n\n      Database\n\n    </ion-list-header>\n\n\n\n    <button ion-item class="item-button-right" (click)="reloadSiteConfig()">\n\n      Reload Site Config\n\n    </button>\n\n\n\n    <ion-item class="item">\n\n      Local Storage usage :\n\n      <span class="item-note" item-end>\n\n        {{usedStorage}}\n\n      </span>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n\n\n  <ion-list>\n\n    <ion-list-header class="ion-list-header" color="secondary">\n\n      Local Storage Contents\n\n    </ion-list-header>\n\n    <ion-item class="item" *ngFor="let entr of (localStorageList | keys)">\n\n      {{entr.key}} :\n\n      <span class="item-note" style="display:block">\n\n        {{entr.value}}\n\n      </span>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n\n\n\n\n\n\n  <ion-list>\n\n    <ion-list-header class="ion-list-header" color="secondary">\n\n      Network properties\n\n    </ion-list-header>\n\n\n\n    <!--    <ion-item class="item">\n\n        <ion-label>Connected</ion-label>\n\n        <ion-toggle [(ngModel)]="isConnected" (ngModelChange)="toggleNetworkConnection()"> </ion-toggle>\n\n      </ion-item> -->\n\n\n\n\n\n    <ion-item class="item">\n\n      <ion-label>Online : </ion-label>\n\n      <ion-toggle [(ngModel)]="isOnline" [disabled]="true"> </ion-toggle>\n\n    </ion-item>\n\n\n\n\n\n    <ion-item class="item">\n\n      Network type :\n\n      <span class="item-note" item-end>\n\n        {{networkType}}\n\n      </span>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n  <ion-list>\n\n    <ion-list-header class="ion-list-header" color="secondary">\n\n      Device properties\n\n    </ion-list-header>\n\n    <ion-item class="item" *ngFor="let dev of (device | keys )">\n\n      {{dev.key | titlecase }} :\n\n      <span class="item-note" item-end>\n\n        {{dev.value }}\n\n      </span>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/device/device.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_8__providers_platform_ready_service_platform_ready_service__["a" /* PlatformReadyServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_config_service_config_service__["a" /* ConfigServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_6__providers_pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_gps_service_gps_service__["a" /* GpsServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_9__providers_exit_service_exit_service__["a" /* ExitServiceProvider */], __WEBPACK_IMPORTED_MODULE_11__providers_device_service_device_service__["a" /* DeviceServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_10__providers_shared_service_shared_service__["a" /* SharedServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__providers_siteconfig_service_siteconfig_service__["a" /* SiteconfigServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_12__providers_message_service_message_service__["a" /* MessageServiceProvider */], __WEBPACK_IMPORTED_MODULE_13__providers_job_service_job_service__["a" /* JobServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_14__providers_jsea_service_jsea_service__["a" /* JseaServiceProvider */], __WEBPACK_IMPORTED_MODULE_15__providers_sod_service_sod_service__["a" /* SodServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_17__providers_connectivity_monitor_connectivity_monitor__["a" /* ConnectivityMonitorProvider */], __WEBPACK_IMPORTED_MODULE_16__providers_push_service_push_service__["a" /* PushServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
], DevicePage);

//# sourceMappingURL=device.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GpsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_sdk_index__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config_service_config_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_pdaparams_service_pdaparams_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_gps_audit_service_gps_audit_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_shared_service_shared_service__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var GpsPage = (function () {
    function GpsPage(navCtrl, navParams, pdaParams, configService, gpsAudit, geolocation, sharedService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pdaParams = pdaParams;
        this.configService = configService;
        this.gpsAudit = gpsAudit;
        this.geolocation = geolocation;
        this.sharedService = sharedService;
        this.psIsWorking = false;
        this.posOptions = {
            timeout: 10000,
            enableHighAccuracy: false
        };
        this.gpsIsWorking = false;
        this.loginFlag = this.pdaParams.isDrvLoggedOn();
        this.position = {
            coords: {
                latitude: 0,
                longitude: 0,
                accuracy: 0,
                altitude: 100,
                altitudeAccuracy: 100,
                heading: 50,
                speed: 100,
            },
            timestamp: 10
        };
        this.getGPSIsworking = function () {
            return _this.gpsIsWorking;
        };
        this.showResult = function () {
            return _this.error == "";
        };
        this.username = navParams.data;
        //console.log("GpsPage loading...");
        __WEBPACK_IMPORTED_MODULE_3__shared_sdk_index__["b" /* LoopBackConfig */].setBaseURL(configService.apiURL);
        __WEBPACK_IMPORTED_MODULE_3__shared_sdk_index__["b" /* LoopBackConfig */].setApiVersion(configService.API_VERSION);
    }
    GpsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.driverId = this.pdaParams.getDriverId();
        this.error = "";
        this.debug = this.pdaParams.debugMode;
        this.gpshistory = this.gpsAudit.getHistory();
        //Riyaz: Using ionic native's geolocation plugin here
        this.geolocation.getCurrentPosition(this.posOptions).then(function (position) {
            _this.position.coords.latitude = position.coords.latitude;
            _this.position.coords.longitude = position.coords.longitude;
            _this.position.coords.altitude = position.coords.altitude;
            _this.position.coords.accuracy = position.coords.accuracy;
            _this.position.coords.altitudeAccuracy = position.coords.altitudeAccuracy;
            _this.position.coords.heading = position.coords.heading;
            _this.position.coords.speed = position.coords.speed;
            _this.position.timestamp = position.timestamp;
            _this.success = 'YES';
            _this.gpsIsWorking = true;
        }).catch(function (err) {
            _this.success = 'FAIL';
            _this.gpsIsWorking = false;
            _this.gpsErrorMess = err.message;
            _this.error = "Failed";
            _this.err = err;
        });
    };
    return GpsPage;
}());
GpsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-gps',template:/*ion-inline-start:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/gps/gps.html"*/'<!--\n\n  Generated template for the GpsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n      <ion-buttons left>\n\n          <span [ngSwitch]="this.sharedService.loginFlag">      \n\n            <ion-badge class="common-border"  color="secondary" *ngSwitchCase="true"> Logged In</ion-badge>\n\n            <ion-badge class="common-border"  color="danger" *ngSwitchCase="false"> Logged Off</ion-badge>\n\n          </span>\n\n        </ion-buttons>\n\n    <ion-title>GPS</ion-title>\n\n    <ion-buttons right>\n\n      <ion-badge class="common-border" color="danger" *ngIf="newMessageCount">{{newMessageCount}}</ion-badge>\n\n      <ion-badge class="common-border" color="danger"> Driver #  {{driverId}}</ion-badge>\n\n  </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding text-wrap>\n\n  <ion-card [hidden]="!showResult()">\n\n    <ion-list>\n\n      <ion-list-header class="ion-list-header" color="secondary">\n\n        Current position\n\n      </ion-list-header>\n\n      <!-- This should return one row only in a production environment -->\n\n\n\n      <ion-item class="item">\n\n        Latitude:\n\n        <span class="item-note"> {{ position.coords.latitude }} </span>\n\n      </ion-item>\n\n      <ion-item class="item">\n\n        Longitude:\n\n        <span class="item-note"> {{ position.coords.longitude }}</span>\n\n      </ion-item>\n\n      <ion-item class="item">\n\n        Altitude:\n\n        <span class="item-note"> {{ position.coords.altitude }}</span>\n\n      </ion-item>\n\n      <ion-item class="item">\n\n        Accuracy:\n\n        <span class="item-note"> {{ position.coords.accuracy }}</span>\n\n      </ion-item>\n\n      <ion-item class="item">\n\n        Altitude Accuracy:\n\n        <span class="item-note"> {{ position.coords.altitudeAccuracy }}</span>\n\n      </ion-item>\n\n      <ion-item class="item">\n\n        Heading:\n\n        <span class="item-note"> {{ position.coords.heading }}</span>\n\n      </ion-item>\n\n      <ion-item class="item">\n\n        Speed:\n\n        <span class="item-note"> {{ position.coords.speed }} </span>\n\n      </ion-item>\n\n      <ion-item class="item">\n\n        Timestamp:\n\n        <span class="item-note"> {{ position.timestamp }} </span>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-card>\n\n\n\n  <ion-card [hidden]="showResult()">\n\n    Error : {{err}}\n\n    <!-- Error Code: {{err.code}} -->\n\n  </ion-card>\n\n\n\n\n\n  <ion-card *ngIf="gpshistory != \'\'">\n\n    <ion-list>\n\n      <ion-list-header class="ion-list-header" color="secondary">\n\n        GPS History\n\n      </ion-list-header>\n\n      <!-- <ion-item class=item *ngFor="let gps of gpshistory | reverse"> -->\n\n      <ion-item class=item *ngFor="let gps of gpshistory">\n\n        <!-- {{ gps.gps_timestamp | gpsdate }}: {{ gps.gps_latitude }} , {{ gps.gps_longitude }} -->\n\n        {{ gps.gps_timestamp }}: {{ gps.gps_latitude }} , {{ gps.gps_longitude }}\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-card>\n\n\n\n  <ion-card id="debug" *ngIf="debug">\n\n    <ion-list>\n\n      <ion-item>\n\n        <button ion-button item-left color="secondary">BG GPS Start</button>\n\n        <button ion-button item-right color="danger">BG GPS Stop</button>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/gps/gps.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_5__providers_pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_config_service_config_service__["a" /* ConfigServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_6__providers_gps_audit_service_gps_audit_service__["a" /* GpsAuditServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_7__providers_shared_service_shared_service__["a" /* SharedServiceProvider */]])
], GpsPage);

//# sourceMappingURL=gps.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MsgsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_sdk_index__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_sdk__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config_service_config_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_log_service_log_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_pdaparams_service_pdaparams_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_siteconfig_service_siteconfig_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_base_service_base_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_shared_service_shared_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_message_service_message_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_driver_message_service_driver_message_service__ = __webpack_require__(349);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/**
 * Generated class for the MsgsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MsgsPage = (function () {
    function MsgsPage(navCtrl, navParams, configService, pdaParams, alertCtrl, siteConfig, logger, base, sharedService, messageService, driverMessageService, despatchToDriverMessages) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.configService = configService;
        this.pdaParams = pdaParams;
        this.alertCtrl = alertCtrl;
        this.siteConfig = siteConfig;
        this.logger = logger;
        this.base = base;
        this.sharedService = sharedService;
        this.messageService = messageService;
        this.driverMessageService = driverMessageService;
        this.despatchToDriverMessages = despatchToDriverMessages;
        this.t = this.navCtrl.parent;
        this.logParams = { site: this.pdaParams.getSiteId(), driver: this.pdaParams.getDriverId(), fn: 'MsgsPage' };
        this.log = this.logger.getInstance(this.logParams);
        this.boxShow = false;
        this.messages = [];
        this.loginFlag = this.pdaParams.isDrvLoggedOn();
        this.username = navParams.data;
        __WEBPACK_IMPORTED_MODULE_2__shared_sdk_index__["b" /* LoopBackConfig */].setBaseURL(configService.apiURL);
        __WEBPACK_IMPORTED_MODULE_2__shared_sdk_index__["b" /* LoopBackConfig */].setApiVersion(configService.API_VERSION);
        this.driverId = this.pdaParams.getDriverId();
        this.filter = {
            "where": { "drvmDriverId": this.driverId },
            "order": 'drvmSeqid DESC',
            "limit": 20
        };
    }
    MsgsPage.prototype.ionViewWillEnter = function () {
        this.getMessages();
        // Reset new message count now they have been viewed
        this.messageService.resetNewMessageCount();
    };
    MsgsPage.prototype.getMessages = function () {
        var _this = this;
        this.despatchToDriverMessages.find(this.filter).subscribe(function (msgs) {
            _this.messages = msgs;
            //console.log("messages from inside subscribe:::" + this.messages);
        }, function (err) {
            _this.err = err;
        });
    };
    // Reshow messages as required from callbacks etc.
    MsgsPage.prototype.showMessages = function (err) {
        this.messages = this.err;
    };
    MsgsPage.prototype.showMessageEntryBox = function (tf) {
        this.boxShow = tf;
    };
    MsgsPage.prototype.newMessage = function () {
        this.textareadata = "Input your text here";
        this.showMessageEntryBox(true);
    };
    MsgsPage.prototype.onSubmit = function () {
        this.messageText = this.textareadata;
        this.driverMessageService.addMessage(this.pdaParams.getDriverId(), this.messageText, this.showMessages);
        this.showMessageEntryBox(false);
        this.getMessages();
    };
    MsgsPage.prototype.deleteAllMessages = function () {
        var _this = this;
        var confirmPopup = this.alertCtrl.create({
            title: 'DELETE All messages',
            subTitle: 'Are you sure you want to DELETE All messages?',
            buttons: [
                {
                    text: 'Yes',
                    handler: function () {
                        //console.log('User has DELETED all messages');
                        _this.log.debug('User has DELETED all messages');
                        return false;
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        //console.log('Cancel clicked');
                        _this.log.debug('User has CANCELLED out of DELETE All messages');
                        return;
                    }
                }
            ]
        });
        confirmPopup.present();
    }; //End of  deleteAllMessages() messages
    MsgsPage.prototype.quit = function () {
        this.showMessageEntryBox(false);
        this.t.select(0);
    };
    return MsgsPage;
}());
MsgsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-msgs',template:/*ion-inline-start:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/msgs/msgs.html"*/'<!--\n\n  Generated template for the MsgsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-buttons left>\n\n      <span [ngSwitch]="this.sharedService.loginFlag">\n\n        <ion-badge class="common-border" color="secondary" *ngSwitchCase="true"> Logged In</ion-badge>\n\n        <ion-badge class="common-border" color="danger" *ngSwitchCase="false"> Logged Off</ion-badge>\n\n      </span>\n\n    </ion-buttons>\n\n    <ion-title>MESSAGES</ion-title>\n\n    <ion-buttons right>\n\n      <ion-badge class="common-border" color="danger" *ngIf="newMessageCount">{{newMessageCount}}</ion-badge>\n\n      <ion-badge class="common-border" color="danger"> Driver # {{driverId}}</ion-badge>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content [ngClass]="{ \'overflow-scroll\': (desktopBrowserScrolling == true) }" padding text-wrap>\n\n\n\n  <ion-row [hidden]="boxShow">\n\n    <ion-col>\n\n      <button ion-button full round color="primary" (click)="newMessage(true)">\n\n        Create Message\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-card [hidden]="!boxShow">\n\n\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-textarea rows="4" id="styled" [(ngModel)]="textareadata" onfocus="this.value=\'\';">\n\n          {{textareadata}}\n\n        </ion-textarea>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button full round color="secondary" (click)="onSubmit()">\n\n          Submit\n\n        </button>\n\n      </ion-col>\n\n\n\n      <ion-col col-6>\n\n        <button ion-button full round color="danger" (click)="quit()">\n\n          Quit\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n\n\n  <span></span>\n\n\n\n  <ion-card>\n\n    <ion-list-header class="ion-list-header" color="secondary">Messages</ion-list-header>\n\n\n\n    <ion-item *ngIf="messages.length === 0">\n\n      No messages\n\n    </ion-item>\n\n\n\n    <ion-list *ngIf="messages.length !== 0">\n\n      <ion-item *ngFor="let message of messages;trackBy:index" type="item-text-wrap">\n\n        <!-- if message was from driver to despatch show on right, otherwise show on left like tradidional messages app -->\n\n        <span *ngIf="pdaParams.driverId!=message.drvmSender" class="left">\n\n         &nbsp; <ion-icon name="contact" style="font-size:30px;color:red;"></ion-icon> : {{message.drvmMessage}} </span>\n\n        <span *ngIf="pdaParams.driverId==message.drvmSender" class="right">\n\n          <ion-icon name="contact" style="font-size:30px;color:green;"></ion-icon> : {{message.drvmMessage}}\n\n\n\n        </span>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/msgs/msgs.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_config_service_config_service__["a" /* ConfigServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_6__providers_pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7__providers_siteconfig_service_siteconfig_service__["a" /* SiteconfigServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_log_service_log_service__["a" /* LogServiceProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_base_service_base_service__["a" /* BaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_shared_service_shared_service__["a" /* SharedServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_10__providers_message_service_message_service__["a" /* MessageServiceProvider */], __WEBPACK_IMPORTED_MODULE_11__providers_driver_message_service_driver_message_service__["a" /* DriverMessageServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_3__shared_sdk__["a" /* DespatchToDriverMessagesApi */]])
], MsgsPage);

//# sourceMappingURL=msgs.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverMessageServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_sdk__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DriverMessageServiceProvider = (function () {
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
        //var now = new Date();
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
    return DriverMessageServiceProvider;
}());
DriverMessageServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_sdk__["a" /* DespatchToDriverMessagesApi */]])
], DriverMessageServiceProvider);

//# sourceMappingURL=driver-message-service.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseLoopBackApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_params__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__error_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lb_config__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__custom_SDKModels__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sockets_socket_connections__ = __webpack_require__(29);
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
* @module BaseLoopBackApi
* @author Jonathan Casarrubias <@johncasarrubias> <github:jonathan-casarrubias>
* @author Nikolay Matiushenkov <https://github.com/mnvx>
* @license MIT
* @description
* Abstract class that will be implemented in every custom service automatically built
* by the sdk builder.
* It provides the core functionallity for every API call, either by HTTP Calls or by
* WebSockets.
**/
var BaseLoopBackApi = (function () {
    function BaseLoopBackApi(http, connection, models, auth, searchParams, errorHandler) {
        this.http = http;
        this.connection = connection;
        this.models = models;
        this.auth = auth;
        this.searchParams = searchParams;
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
            var subject_1 = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["Subject"]();
            this.connection.on(event_1, function (res) { return subject_1.next(res); });
            return subject_1.asObservable();
        }
        else {
            // Headers to be sent
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            // Authenticate request
            this.authenticate(url, headers);
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
            var filter = '';
            // Separate filter object from url params and add to search query
            if (urlParams.filter) {
                if (__WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].isHeadersFilteringSet()) {
                    headers.append('filter', JSON.stringify(urlParams.filter));
                }
                else {
                    filter = "?filter=" + encodeURIComponent(JSON.stringify(urlParams.filter));
                }
                delete urlParams.filter;
            }
            // Separate where object from url params and add to search query
            /**
            CODE BELOW WILL GENERATE THE FOLLOWING ISSUES:
            - https://github.com/mean-expert-official/loopback-sdk-builder/issues/356
            - https://github.com/mean-expert-official/loopback-sdk-builder/issues/328
            if (urlParams.where) {
              headers.append('where', JSON.stringify(urlParams.where));
              delete urlParams.where;
            }
            **/
            if (typeof customHeaders === 'function') {
                headers = customHeaders(headers);
            }
            this.searchParams.setJSON(urlParams);
            var request = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Request */](new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
                headers: headers,
                method: method,
                url: "" + url + filter,
                search: Object.keys(urlParams).length > 0 ? this.searchParams.getURLSearchParams() : null,
                body: body ? JSON.stringify(body) : undefined,
                withCredentials: __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getRequestOptionsCredentials()
            }));
            return this.http.request(request)
                .map(function (res) { return (res.text() != "" ? res.json() : {}); })
                .catch(function (e) { return _this.errorHandler.handleError(e); });
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
            headers.append('Authorization', __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getAuthPrefix() + this.auth.getAccessTokenId());
        }
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
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders).map(function (data) { return _this.model.factory(data); });
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
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, undefined, { data: data }, true)
            .map(function (datum) { return datum.map(function (data) { return _this.model.factory(data); }); });
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
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .map(function (datum) { return datum.map(function (data) { return _this.model.factory(data); }); });
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
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, undefined, { data: data }, true)
            .map(function (datum) { return datum.map(function (data) { return _this.model.factory(data); }); });
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
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, _urlParams, undefined, null, customHeaders)
            .map(function (data) { return _this.model.factory(data); });
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
        //console.log('=========:::::Request sent from base.service.ts:::::=======' + filter);
        return this.request('GET', [
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, { filter: filter }, undefined, null, customHeaders)
            .map(function (datum) { return datum.map(function (data) { return _this.model.factory(data); }); });
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
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
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
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'findOne'
        ].join('/'), undefined, { filter: filter }, undefined, null, customHeaders)
            .map(function (data) { return _this.model.factory(data); });
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
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
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
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
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
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, undefined, undefined, null, customHeaders)
            .map(function (data) { return _this.model.factory(data); });
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
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, undefined, undefined, true).map(function (data) { return _this.model.factory(data); });
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
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
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
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, undefined, { data: data }, null, customHeaders)
            .map(function (data) { return _this.model.factory(data); });
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
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, undefined, { data: data }, true).map(function (data) { return _this.model.factory(data); });
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
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .map(function (data) { return _this.model.factory(data); });
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
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
        ].join('/'), undefined, undefined, { data: data }, true).map(function (data) { return _this.model.factory(data); });
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
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .map(function (data) { return _this.model.factory(data); });
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
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
        ].join('/'), undefined, undefined, { data: data }, true).map(function (data) { return _this.model.factory(data); });
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
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'upsertWithWhere'
        ].join('/'), undefined, _urlParams, { data: data }, null, customHeaders)
            .map(function (data) { return _this.model.factory(data); });
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
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'upsertWithWhere'
        ].join('/'), undefined, _urlParams, { data: data }, true).map(function (data) { return _this.model.factory(data); });
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
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'replaceOrCreate'
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .map(function (data) { return _this.model.factory(data); });
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
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'replaceOrCreate'
        ].join('/'), undefined, undefined, { data: data }, true).map(function (data) { return _this.model.factory(data); });
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
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id', 'replace'
        ].join('/'), { id: id }, undefined, { data: data }, null, customHeaders)
            .map(function (data) { return _this.model.factory(data); });
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
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id', 'replace'
        ].join('/'), { id: id }, undefined, { data: data }, true).map(function (data) { return _this.model.factory(data); });
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
        var subject = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["Subject"]();
        if (typeof EventSource !== 'undefined') {
            var emit = function (msg) { return subject.next(JSON.parse(msg.data)); };
            var source = new EventSource([
                __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getPath(),
                __WEBPACK_IMPORTED_MODULE_5__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
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
    return BaseLoopBackApi;
}());
BaseLoopBackApi = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */])),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_10__sockets_socket_connections__["a" /* SocketConnection */])),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6__custom_SDKModels__["a" /* SDKModels */])),
    __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* LoopBackAuth */])),
    __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__search_params__["a" /* JSONSearchParams */])),
    __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__error_service__["a" /* ErrorHandler */])),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_10__sockets_socket_connections__["a" /* SocketConnection */],
        __WEBPACK_IMPORTED_MODULE_6__custom_SDKModels__["a" /* SDKModels */],
        __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* LoopBackAuth */],
        __WEBPACK_IMPORTED_MODULE_2__search_params__["a" /* JSONSearchParams */],
        __WEBPACK_IMPORTED_MODULE_3__error_service__["a" /* ErrorHandler */]])
], BaseLoopBackApi);

//# sourceMappingURL=base.service.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_sdk_index__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config_service_config_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_pdaparams_service_pdaparams_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_image_service_image_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_image_file_service_image_file_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_siteconfig_service_siteconfig_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_shared_service_shared_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_util_service_util_service__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the ImagesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ImagesPage = (function () {
    function ImagesPage(navCtrl, navParams, file, configService, pdaParams, imageService, siteConfig, sharedService, imageFileService, alertCtrl, utilService, cd) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.file = file;
        this.configService = configService;
        this.pdaParams = pdaParams;
        this.imageService = imageService;
        this.siteConfig = siteConfig;
        this.sharedService = sharedService;
        this.imageFileService = imageFileService;
        this.alertCtrl = alertCtrl;
        this.utilService = utilService;
        this.cd = cd;
        this.t = this.navCtrl.parent;
        this.result = null;
        this.loginFlag = this.pdaParams.isDrvLoggedOn();
        this.getImages = function () {
            _this.imageService.getImageList().subscribe(function (images) {
                var len = images.length;
                if (len > 0)
                    _this.images_present = true;
                //For each of the images retrieved from file system grab any notes and update the uploaded flag.
                for (var i = 0; i < len; i++) {
                    var notes = _this.imageFileService.getImageProperty(images[i].name, 'notes');
                    if (notes != null) {
                        images[i].notes = notes;
                    }
                    images[i].uploaded = _this.imageFileService.getImageProperty(images[i].name, 'uploaded');
                    images[i].readyForUpload = _this.imageFileService.getImageProperty(images[i].name, 'readyForUpload');
                }
                _this.images = images;
                _this.images_loaded = true;
                _this.cd.detectChanges();
            });
        }; //getImages() ends here
        //Riyaz: See https://github.com/justinwoodcock/Loopback-Upload
        this.uploadImage = function (image) {
            _this.imageService.uploadImage(image, function (result) {
                _this.images_loaded = false;
                _this.getImages();
            });
        };
        this.deleteImage = function (imageName) {
            _this.imageService.deleteSingleImage(imageName).subscribe(function (success) {
                _this.getImages(); // reload images into scope     
            }, function (err) {
                this.log.error(err);
            });
        };
        this.deleteObsoleteImages = function () {
            _this.imageService.deleteObsoleteImages().subscribe(function (result) {
                _this.result = result;
                _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
            }, function (err) {
                //this.log.error(err);
            });
        };
        //console.log("ImagesPage loading...");
        this.username = navParams.data;
        __WEBPACK_IMPORTED_MODULE_3__shared_sdk_index__["b" /* LoopBackConfig */].setBaseURL(configService.apiURL);
        __WEBPACK_IMPORTED_MODULE_3__shared_sdk_index__["b" /* LoopBackConfig */].setApiVersion(configService.API_VERSION);
        this.driverId = this.pdaParams.getDriverId();
        //Monitor Image Refreshes.
        this.sharedService.imageRefresh.subscribe(function (res) {
            _this.getImages();
        });
    } //End of the constructor.
    ImagesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.images_loaded = false;
        this.images_present = false;
        if (this.sharedService.testing) {
            this.lpda_images = 'Y';
            this.pda_images = 'Y';
        }
        else {
            this.lpda_images = this.pdaParams.pda_images ? 'Y' : 'N';
            this.pda_images = this.siteConfig.getSiteConfigYN('PDA_IMAGES');
        }
        if (this.pda_images != 'Y' && this.lpda_images != 'Y') {
            var alert_1 = this.alertCtrl.create({
                title: 'Module not installed',
                subTitle: 'This module is not installed.',
                buttons: [{
                        text: 'OK',
                        handler: function () {
                            var navTransition = alert_1.dismiss();
                            navTransition.then(function () {
                                _this.t.select(0);
                            });
                            return false;
                        }
                    }]
            });
            alert_1.present();
        }
        else {
            this.getImages();
        }
    }; // ionViewWillEnter() ends here
    return ImagesPage;
}());
ImagesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-images',template:/*ion-inline-start:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/images/images.html"*/'<!--\n\n  Generated template for the ImagesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-buttons left>\n\n      <span [ngSwitch]="this.sharedService.loginFlag">\n\n        <ion-badge class="common-border" color="secondary" *ngSwitchCase="true"> Logged In</ion-badge>\n\n        <ion-badge class="common-border" color="danger" *ngSwitchCase="false"> Logged Off</ion-badge>\n\n      </span>\n\n    </ion-buttons>\n\n    <ion-title>IMAGES</ion-title>\n\n    <ion-buttons right>\n\n      <ion-badge class="common-border" color="danger" *ngIf="newMessageCount">{{newMessageCount}}</ion-badge>\n\n      <ion-badge class="common-border" color="danger"> Driver # {{driverId}}</ion-badge>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content [ngClass]="{ \'overflow-scroll\': desktopBrowserScrolling}" padding>\n\n\n\n  <ion-card round inset class="ion-card" *ngIf="!images_present">\n\n    <ion-card-content>No images</ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card *ngIf="images_loaded ">\n\n    <ion-list *ngFor="let image of images.slice().reverse(); trackBy:$index">\n\n      <ion-item class="item item-thumbnail-left" text-wrap>\n\n        <img [src]="image.nativeURL" height="100px">\n\n        <h3>{{image.name}}</h3>\n\n        <p>Notes: {{image.notes}}</p>      \n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <button *ngIf="!image.uploaded" ion-button full round color="secondary" (click)="uploadImage(image)" class="button button-small">Upload</button>\n\n            <button *ngIf="image.uploaded" ion-button full round color="dark" [disabled]="true" class="button button-small">Uploaded</button>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <button ion-button full round color="danger" (click)="deleteImage(image.name)" class="button button-small">Delete</button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-card>\n\n\n\n  <div *ngIf="pdaParams.debugMode">\n\n    <ion-list>\n\n      <button ion-button round full color="primary" (click)="deleteObsoleteImages()" class="button button-small">Delete obsolete images</button>\n\n    </ion-list>\n\n\n\n\n\n    <!--    <ion-grid *ngIf="result !== null">\n\n      <ion-row>\n\n        <ion-col col-6>Number of images:</ion-col>\n\n        <ion-col col-6>{{result.numImages}}</ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-6>Number of deleted images:</ion-col>\n\n        <ion-col col-6>{{result.delImages}}</ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-6>Number of error images:</ion-col>\n\n        <ion-col col-6>{{result.errImages}}</ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-6>Failed:</ion-col>\n\n        <ion-col col-6>{{result.failed}}</ion-col>\n\n      </ion-row>\n\n\n\n    </ion-grid> -->\n\n\n\n  </div>\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/images/images.html"*/,
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_4__providers_config_service_config_service__["a" /* ConfigServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_6__providers_image_service_image_service__["a" /* ImageServiceProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_siteconfig_service_siteconfig_service__["a" /* SiteconfigServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_9__providers_shared_service_shared_service__["a" /* SharedServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_7__providers_image_file_service_image_file_service__["a" /* ImageFileServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_10__providers_util_service_util_service__["a" /* UtilServiceProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
], ImagesPage);

//# sourceMappingURL=images.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarcodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_sdk_index__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_config_service_config_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_log_service_log_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_pdaparams_service_pdaparams_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_siteconfig_service_siteconfig_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_base_service_base_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_platform_ready_service_platform_ready_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_barcode_service_barcode_service__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_shared_service_shared_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__signature_signature__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














/**
 * Generated class for the BarcodePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var BarcodePage = (function () {
    function BarcodePage(navCtrl, navParams, configService, pdaParams, siteConfig, logger, base, alertCtrl, platformReady, device, barcodeScanner, modalController, barcodeService, app, sharedService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.configService = configService;
        this.pdaParams = pdaParams;
        this.siteConfig = siteConfig;
        this.logger = logger;
        this.base = base;
        this.alertCtrl = alertCtrl;
        this.platformReady = platformReady;
        this.device = device;
        this.barcodeScanner = barcodeScanner;
        this.modalController = modalController;
        this.barcodeService = barcodeService;
        this.app = app;
        this.sharedService = sharedService;
        this.t = this.navCtrl.parent;
        this.logParams = { site: this.pdaParams.getSiteId(), driver: this.pdaParams.getDriverId(), fn: 'JobDetailsPage' };
        this.log = this.logger.getInstance(this.logParams);
        this.saveok = false;
        this.useCamera = true;
        this.useCipherlab = false;
        this.myBcodeIsjobNum = false;
        this.my_is_scan_on = true;
        this.matchedJobsPieces = 0;
        this.LocalBarcodeHist = lbclient.models.LocalBarcodeHist;
        this.RemoteBarcodeHist = lbclient.models.RemoteBarcodeHist;
        this.Job = lbclient.models.LocalJob;
        this.barcode_sync = lbclient.barcode_sync;
        this.barcodes = [];
        this.strncmp = function (str1, str2, n) {
            str1 = str1.substring(0, n);
            str2 = str2.substring(0, n);
            return ((str1 == str2) ? 0 :
                ((str1 > str2) ? 1 : -1));
        };
        /*========================================*/
        /*        CAMERA SCAN                    */
        /*========================================*/
        this.scan = function () {
            if (_this.platformReady.isPlatformReady()) {
                _this.useCamera = true;
                _this.barcodeScanner.scan().then(function (barcodeData) {
                    // Success! Barcode data is here
                    // Returns object e.g.: {text: "053329109558", format: "UPC_A", cancelled: false}
                    _this.barcodes.push(barcodeData.text);
                    _this.log.debug('CAMERA scanned OK: barcodeData:' + barcodeData);
                }, function (error) {
                    // An error occurred
                    _this.log.debug('CAMERA BAD scan : error:' + error);
                });
            }
            else {
                var ltitle = 'ERROR';
                var lmes = 'CAMERA: cordova NOT ready';
                var alert_1 = _this.alertCtrl.create({
                    title: ltitle,
                    subTitle: lmes,
                    buttons: ['Ok']
                });
                alert_1.present();
            }
            ;
        }; //Camera Scan ends
        /*========================================*/
        /*        SCAN SESSION CANCEL   */
        /*========================================*/
        this.scanCancel = function () {
            var confirmPopup = _this.alertCtrl.create({
                title: 'CANCEL Scan Session',
                subTitle: 'Are you sure you want to CANCEL this scan session (You will lose all data scanned)?',
                buttons: [
                    {
                        text: 'Yes',
                        handler: function () {
                            _this.log.debug('User has Cancelled the scan session');
                            _this.barcodes = [];
                            return;
                        }
                    },
                    {
                        text: 'No',
                        handler: function () {
                            _this.log.debug('User has CANCELLED out of a Scan session CANCEL');
                        }
                    }
                ]
            });
            confirmPopup.present();
        }; //scanCancel() ends here
        this.openSignatureModal = function () {
            var modal = _this.modalController.create(__WEBPACK_IMPORTED_MODULE_13__signature_signature__["a" /* SignaturePage */]);
            modal.onDidDismiss(function (result) {
                if (typeof result !== 'undefined') {
                    var podname = result.podname;
                    var signature = result.signature;
                    _this.confirmscanSubmit(signature, podname);
                }
            });
            modal.present();
        };
        this.scanSubmit = function () {
            var _this = this;
            if (this.barcodes.length == 0) {
                return;
            }
            var subconfirmPopup = this.alertCtrl.create({
                title: 'Scan Session Confirm',
                message: 'Are you sure you want to submit your Scan session to the database ?',
                buttons: [
                    {
                        text: 'Submit',
                        handler: function () {
                            if (_this.my_is_scan_on == false) {
                                _this.openSignatureModal();
                            }
                            else {
                                _this.confirmscanSubmit();
                            }
                        }
                    },
                    {
                        text: 'Cancel',
                        handler: function () {
                            _this.log.debug('User has CANCELLED out of a Scan session SUBMIT Doing nothing');
                            return;
                        }
                    }
                ]
            });
            subconfirmPopup.present();
        }; //scanSubmit() ends
        /*========================================*/
        /*       SCAN SESSION SUBMIT   */
        /*========================================*/
        this.confirmscanSubmit = function (signat, podname) {
            var _this = this;
            var save_status = 'FAILED';
            var _filter = {
                "where": { and: [{ "mobjobDriver": this.pdaParams.getDriverId() }, { "mobjobStatus": { "neq": "DL" } }] },
                "order": ['mobjobNumber ASC', 'mobjobLegNumber ASC']
            };
            var filter = Object.assign({}, _filter);
            this.Job.find(filter, function (err, jobs) {
                _this.doSubmitWork(jobs, signat, podname);
            });
        }; //confirmscanSubmit() ends here
        this.doSubmitWork = function (jobs, signat, podname) {
            //console.log("doSubmitWork fired!!");
            var syncRequired = 0;
            var foundJob = false;
            var foundIdx = 0;
            var foundJobNum;
            var foundJobDate;
            var fjobarr = new Array();
            var matchedJobsPieces = 0;
            // A confirm dialog
            var len = this.barcodes.length;
            this.log.debug("Searching on " + len + " Barcodes across all Jobs");
            for (var i = 0; i < len; i++) {
                //Set up a unique number
                var d = new Date();
                var uniqId = d.getTime();
                var bchSession = new this.LocalBarcodeHist();
                bchSession.bchSeq = uniqId % 1000000;
                bchSession.bchDriver = this.pdaParams.getDriverId();
                bchSession.bchBarcode = this.barcodes[i];
                this.bcode = bchSession.bchBarcode;
                this.log.debug("Looking for BCODE [" + this.bcode + "] across all Jobs");
                bchSession.bchTimestamp = d.toISOString();
                var oset = d.getTimezoneOffset();
                bchSession.bchTimestamp += (oset * -1) * 60 * 1000;
                //Always Zero for a Scan on 
                bchSession.bchTimestamp = new Date().toISOString();
                if (this.my_is_scan_on) {
                    bchSession.bchJobno = 0;
                    bchSession.bchJobdate = new Date();
                    bchSession.bchEvent = 'SCAN ON';
                }
                else {
                    //We need to get these from a Job
                    bchSession.bchEvent = 'SCAN OFF';
                    /****************************************************************/
                    /* Go Thru the list of jobs that are Picked up and compare their */
                    /* connote number against the barcode and when matches thats the*/
                    /* Job to finish off                                            */
                    /****************************************************************/
                    this.log.debug("Looking across " + jobs.length + " JOBS");
                    for (var x = 0; x < jobs.length; x++) {
                        var job = jobs[x];
                        var dstring;
                        var myconnote_num;
                        //Only do this for the first leg as the others are not usefull
                        //console.log("mobjobLegNumber is:" + job.mobjobLegNumber);
                        if (job.mobjobLegNumber == 0) {
                            var jn = job.mobjobNumber;
                            if (this.myBcodeIsjobNum) {
                                //==== DATE HANDLING to get the connotenum to something like
                                //============= 1160615002020 ===========================
                                var jobBookDay = new Date(job.mobjobBookingDay);
                                var fy = jobBookDay.getFullYear() % 100;
                                var dm = jobBookDay.getDate() * 1;
                                var mi = jobBookDay.getMonth() + 1;
                                //The  leading zero is due to the barcode that gets generate needing to be an even number
                                dstring = "01" + fy + ((mi < 10) ? ("0" + mi) : mi) + ((dm < 10) ? ("0" + dm) : dm);
                                jn = (jn < 100000 && jn > 9999) ? ("0" + jn) : jn;
                                jn = (jn < 10000) ? ("00" + jn) : jn;
                                myconnote_num = dstring + jn;
                            }
                            else {
                                //Connote num stored here
                                myconnote_num = job.mobjobAddrExtras;
                            }
                            bchSession.bchEventSubtype = 'N/A';
                            this.log.debug("Before checking Barcode against Job: " + job.mobjobNumber + " JobsConnoteNumber: " + myconnote_num + ' Barcode: ' + this.bcode);
                            //Only Compare the length of myconnote_num eg so if Bcode was WXLGHHH01 and myconn is WXLGHHH then OK
                            if (myconnote_num.length > 1 && this.strncmp(myconnote_num, this.bcode, myconnote_num.length) == 0) {
                                this.log.debug('Scan OFF FOUND Barcode on Job:' + jn + " On Date " + myconnote_num);
                                foundJob = true;
                                //Should store the Pickup Leg of the Found Job
                                foundIdx = x;
                                foundJobNum = job.mobjobNumber;
                                foundJobDate = job.mobjobBookingDay;
                                matchedJobsPieces += job.mobjobJobPieces;
                                this.JobsPieces = matchedJobsPieces;
                                this.log.debug('Scan OFF recording JOb Index ' + foundIdx + 'Pieces now = ' + matchedJobsPieces);
                                fjobarr.push(foundIdx);
                                break; // No need to keep looking we have found the job for this barcode   
                            }
                        }
                    }
                    if (foundJob == false) {
                        bchSession.bchEventSubtype = 'ORPHAN';
                    }
                } //SCAN OFF ELSE ENDS
                this.log.info("About to save Barcode Hist Session for barcode " + JSON.stringify(bchSession));
                bchSession.save();
                syncRequired++;
            }
            //Go through Jobs and attach signat and PODNAME where required
            if (this.my_is_scan_on == false) {
                this.log.debug('Doing Job update for SCAN OFF Job foundJob = ' + foundJob);
                if (foundJob) {
                    var fjobnum = 0;
                    //The list can array may have matched the same job number multiple times
                    var uniquearr = fjobarr.filter(function (item, i, ar) { return ar.indexOf(item) === i; });
                    //Go Thru the found Job Array
                    for (var li = 0; li < uniquearr.length; li++) {
                        var lfidx = uniquearr[li];
                        for (var x = 0; x < 2; x++) {
                            this.log.debug('In Job loop: x = ' + x);
                            var job = jobs[lfidx + x];
                            if (x == 0)
                                fjobnum = job.mobjobNumber;
                            this.log.debug('In Job loop: x = ' + x + ' jobnum = ' + job.mobjobNumber);
                            if (x == 1) {
                                if (fjobnum != job.mobjobNumber) {
                                    this.log.debug('!!!!!!!!! JOb Number Mismatch Pup JOb ' + fjobnum + ' Del job ' + job.mobjobNumber);
                                }
                                else {
                                    this.log.debug('In Job loop: x + 1 = ' + x + ' jobnum = ' + job.mobjobNumber);
                                    job.mobjobSignat = signat || "";
                                    if (podname) {
                                        job.mobjobPodName = podname;
                                        job.mobjobPodTime = new Date().toISOString();
                                    }
                                }
                            }
                            job.mobjobStatus = 'DL';
                            job.save(); // save leg           
                        }
                    }
                }
                else {
                    var ltitle = 'ERROR';
                    var lmes = 'The Scan Off could not find a job that matched your barcodes';
                    var alert_2 = this.alertCtrl.create({
                        title: ltitle,
                        subTitle: lmes,
                        buttons: ['Ok']
                    });
                    alert_2.present();
                }
            } //my_is_scan_on check for false ends here
            this.finishSubmit(foundJob, syncRequired);
        }; //End of doSubmitWork()
        this.finishSubmit = function (foundJob, syncRequired) {
            if (foundJob == false) {
                this.log.info("Been through all barcodes and Jobs and NOT FOUND CONNOTE ON ANY JOB ");
            }
            if (syncRequired) {
                this.barcode_sync();
                this.barcodeService.setSyncRequired(true);
                this.barcodes = [];
            }
            if (this.platformReady.isPlatformReady()) {
                if (this.useCipherlab) {
                    window.plugins.CipherlabRS30CordovaPlugin.destroy(function () { });
                }
            }
            //this.app.getRootNav().setRoot(TabsPage);
            //this.navCtrl.popToRoot();
            this.t.select(0);
        }; //finishSubmit() ends here
        //console.log("BarcodePage loading...");
        this.username = navParams.data;
        __WEBPACK_IMPORTED_MODULE_4__shared_sdk_index__["b" /* LoopBackConfig */].setBaseURL(configService.apiURL);
        __WEBPACK_IMPORTED_MODULE_4__shared_sdk_index__["b" /* LoopBackConfig */].setApiVersion(configService.API_VERSION);
    }
    BarcodePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        if (this.sharedService.testing) {
            this.YN = 'Y';
            this.pda_barcodes = 'Y';
        }
        else {
            this.pda_barcodes = this.siteConfig.getSiteConfigYN('PDA_BARCODES');
            this.YN = this.siteConfig.getSiteConfigYN('BARCODE_SUPP_BCODEISJOBNUM');
        }
        this.driverId = this.pdaParams.getDriverId();
        if (this.pda_barcodes != 'Y') {
            var alert_3 = this.alertCtrl.create({
                title: 'Module not installed',
                subTitle: 'This module is not installed.',
                buttons: [{
                        text: 'OK',
                        handler: function () {
                            var navTransition = alert_3.dismiss();
                            navTransition.then(function () {
                                _this.t.select(0);
                            });
                            return false;
                        }
                    }]
            });
            alert_3.present();
        }
        else {
            //Check if the user is logged in
            if (this.pdaParams.isDrvLoggedOn() == false) {
                var logAlert_1 = this.alertCtrl.create({
                    title: 'ERROR',
                    subTitle: 'You are not logged in please do so first from the jobs screen',
                    buttons: [{
                            text: 'OK',
                            handler: function () {
                                var navTransition = logAlert_1.dismiss();
                                navTransition.then(function () {
                                    _this.t.select(0);
                                });
                                return false;
                            }
                        }]
                });
                logAlert_1.present();
            }
            //Check the value of 'BARCODE_SUPP_BCODEISJOBNUM'
            if (this.YN === "Y") {
                this.myBcodeIsjobNum = true;
            }
            else {
                this.myBcodeIsjobNum = false;
            }
            this.jobsPieces = this.matchedJobsPieces;
            //Determine Scan Type   
            var scanPrompt = this.alertCtrl.create({
                title: 'Determine SCAN Type',
                message: 'Please choose what SCAN type you are performing',
                buttons: [
                    {
                        text: 'Scan On',
                        handler: function () {
                            _this.log.debug("Choosing Scan type: Chose SCAN ON !!!");
                            _this.my_scan_session_type = 'SCAN ON SESSION';
                            _this.scan_session_id = _this.my_scan_session_type;
                            _this.my_is_scan_on = true;
                        }
                    },
                    {
                        text: 'Scan Off',
                        handler: function () {
                            _this.log.debug("Choosing Scan type: Chose SCAN OFF !!!");
                            _this.my_scan_session_type = 'SCAN OFF SESSION';
                            _this.scan_session_id = _this.my_scan_session_type;
                            _this.my_is_scan_on = false;
                        }
                    }
                ]
            });
            scanPrompt.present();
            //Check Device for a CipherLab RS30
            if (this.platformReady.isPlatformReady()) {
                var model = this.device.model;
                this.log.debug("Device Model = " + model);
                if (model == 'CipherLab RS30') {
                    this.log.debug("Device is a CipherLab RS30 " + model);
                    this.useCamera = false;
                    this.useCipherlab = true;
                }
                else {
                    this.log.debug("Device is NOT !!!! a CipherLab RS30 HEAD scanning NOT Available " + model);
                    this.useCamera = true;
                }
                if (this.useCipherlab) {
                    window.plugins.CipherlabRS30CordovaPlugin.initialise(function () {
                        window.plugins.CipherlabRS30CordovaPlugin.setReceiveScanCallback(function (data) {
                            _this.log.debug("Cipherlab Callback called scanned = [" + data + "]");
                            _this.barcodes.push(data);
                        });
                    });
                }
                window.onbeforeunload = function () {
                    _this.log.debug('BarcodeCtrl: onBeforeUnload');
                };
            }
        } //End of else    
    }; //ionViewDidEnter() ends here
    return BarcodePage;
}());
BarcodePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-barcode',template:/*ion-inline-start:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/barcode/barcode.html"*/'<!--\n\n  Generated template for the BarcodePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-buttons left>\n\n            <span [ngSwitch]="this.sharedService.loginFlag">\n\n                <ion-badge class="common-border" color="secondary" *ngSwitchCase="true"> Logged In</ion-badge>\n\n                <ion-badge class="common-border" color="danger" *ngSwitchCase="false"> Logged Off</ion-badge>\n\n            </span>\n\n        </ion-buttons>\n\n        <ion-title>BARCODE</ion-title>\n\n        <ion-buttons right>\n\n            <ion-badge class="common-border" color="danger" *ngIf="newMessageCount">{{newMessageCount}}</ion-badge>\n\n            <ion-badge class="common-border" color="danger"> Driver # {{driverId}}</ion-badge>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content [ngClass]="{ \'overflow-scroll\': (desktopBrowserScrolling == true) }" padding>\n\n    <ion-list>\n\n        <span [ngSwitch]="my_is_scan_on"> Scan Session :\n\n            <ion-badge color="secondary" *ngSwitchCase="true"> On</ion-badge>\n\n            <ion-badge color="danger" *ngSwitchCase="false"> Off</ion-badge>\n\n        </span>\n\n        <span></span>\n\n        <p></p>\n\n    </ion-list>\n\n\n\n    <ion-list padding>\n\n\n\n      <!--   <ion-item class="barcode-item">\n\n            <input type="text" [(ngModel)]="barcodes[0]" />\n\n        </ion-item> -->\n\n\n\n        <ion-item class="barcode-item" [hidden]="barcodes.length !== 0">\n\n            <strong>\n\n                No barcodes\n\n            </strong>\n\n        </ion-item>\n\n        <ion-item class="barcode-item" [hidden]="barcodes.length === 0" *ngFor="let barcode of barcodes; trackBy:$index" type="item-text-wrap">\n\n            {{barcode}}\n\n        </ion-item>\n\n    </ion-list>\n\n\n\n    <ion-row>\n\n        <ion-col>\n\n            <button ion-button full round color="primary" (click)="scan()">\n\n                Camera Scan\n\n            </button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row *ngIf="barcodes.length !== 0">\n\n        <ion-col col-6>\n\n            <button ion-button full round color="secondary" (click)="scanSubmit()">\n\n                Submit\n\n            </button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n            <button ion-button full round color="danger" (click)="scanCancel()">\n\n                Cancel\n\n            </button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n</ion-content>'/*ion-inline-end:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/barcode/barcode.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_config_service_config_service__["a" /* ConfigServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_7__providers_pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_siteconfig_service_siteconfig_service__["a" /* SiteconfigServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_6__providers_log_service_log_service__["a" /* LogServiceProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_base_service_base_service__["a" /* BaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_10__providers_platform_ready_service_platform_ready_service__["a" /* PlatformReadyServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__["a" /* Device */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_11__providers_barcode_service_barcode_service__["a" /* BarcodeServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_12__providers_shared_service_shared_service__["a" /* SharedServiceProvider */]])
], BarcodePage);

//# sourceMappingURL=barcode.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarcodeServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pdaparams_service_pdaparams_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__log_service_log_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service_shared_service__ = __webpack_require__(14);
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
var BarcodeServiceProvider = (function () {
    function BarcodeServiceProvider(http, pdaParams, logger, sharedService) {
        var _this = this;
        this.http = http;
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
    return BarcodeServiceProvider;
}());
BarcodeServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_4__log_service_log_service__["a" /* LogServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__shared_service_shared_service__["a" /* SharedServiceProvider */]])
], BarcodeServiceProvider);

//# sourceMappingURL=barcode-service.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GpsPageModule", function() { return GpsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gps__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GpsPageModule = (function () {
    function GpsPageModule() {
    }
    return GpsPageModule;
}());
GpsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__gps__["a" /* GpsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__gps__["a" /* GpsPage */]),
        ],
    })
], GpsPageModule);

//# sourceMappingURL=gps.module.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdaPageModule", function() { return PdaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pda__ = __webpack_require__(178);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PdaPageModule = (function () {
    function PdaPageModule() {
    }
    return PdaPageModule;
}());
PdaPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__pda__["a" /* PdaPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pda__["a" /* PdaPage */]),
        ],
    })
], PdaPageModule);

//# sourceMappingURL=pda.module.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsgsPageModule", function() { return MsgsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__msgs__ = __webpack_require__(348);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MsgsPageModule = (function () {
    function MsgsPageModule() {
    }
    return MsgsPageModule;
}());
MsgsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__msgs__["a" /* MsgsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__msgs__["a" /* MsgsPage */]),
        ],
    })
], MsgsPageModule);

//# sourceMappingURL=msgs.module.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesPageModule", function() { return ImagesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__images__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ImagesPageModule = (function () {
    function ImagesPageModule() {
    }
    return ImagesPageModule;
}());
ImagesPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__images__["a" /* ImagesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__images__["a" /* ImagesPage */]),
        ],
    })
], ImagesPageModule);

//# sourceMappingURL=images.module.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarcodePageModule", function() { return BarcodePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__barcode__ = __webpack_require__(351);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BarcodePageModule = (function () {
    function BarcodePageModule() {
    }
    return BarcodePageModule;
}());
BarcodePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__barcode__["a" /* BarcodePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__barcode__["a" /* BarcodePage */]),
        ],
    })
], BarcodePageModule);

//# sourceMappingURL=barcode.module.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(175);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
        ]
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(404);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_insomnia__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_background_geolocation__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_signaturepad__ = __webpack_require__(738);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_signaturepad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_signaturepad__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_device_feedback__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_transfer__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_camera__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_network__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_barcode_scanner__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_in_app_browser__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_media__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_push__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pipes_change_display_from_pipe__ = __webpack_require__(739);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pipes_change_display_svc_pipe__ = __webpack_require__(740);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pipes_change_display_to_pipe__ = __webpack_require__(741);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pipes_display_status_detail_pipe__ = __webpack_require__(742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__shared_sdk_index__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__shared_sdk_services_custom_logger_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_login_service_login_service__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_config_service_config_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_customerconn_service_customerconn_service__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_pdaparams_service_pdaparams_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_siteconfig_service_siteconfig_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_shared_service_shared_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_base_service_base_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_util_service_util_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_jsea_service_jsea_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_message_service_message_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_fixed_queue_service_fixed_queue_service__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_device_service_device_service__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__providers_platform_ready_service_platform_ready_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__providers_background_geolocation_service_background_geolocation_service__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_gps_audit_service_gps_audit_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__providers_log_service_log_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__providers_job_service_job_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__providers_event_service_event_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__providers_window_ref_service_window_ref_service__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__providers_sod_service_sod_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__providers_push_service_push_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__providers_exit_service_exit_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__providers_gps_service_gps_service__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__providers_error_modal_service_error_modal_service__ = __webpack_require__(743);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__providers_job_changed_service_job_changed_service__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__providers_image_service_image_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__providers_image_file_service_image_file_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__providers_driver_message_service_driver_message_service__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__providers_connectivity_monitor_connectivity_monitor__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__providers_sync_service_sync_service__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__providers_job_replication_service_job_replication_service__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__providers_barcode_service_barcode_service__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pages_tabs_tabs__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__pages_home_home__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__pages_job_details_job_details_module__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__pages_device_device_module__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__pages_gps_gps_module__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__pages_pda_pda_module__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__pages_jsea_jsea_module__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__pages_msgs_msgs_module__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__pages_images_images_module__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__pages_barcode_barcode_module__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__pages_login_login__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__pages_login_login_module__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__pages_signature_signature__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__pages_job_detail_notes_job_detail_notes_module__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__pages_image_text_image_text_module__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__pages_change_change_module__ = __webpack_require__(341);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












































































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_60__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_61__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_72__pages_signature_signature__["a" /* SignaturePage */],
            __WEBPACK_IMPORTED_MODULE_22__pipes_change_display_from_pipe__["a" /* ChangeDisplayFromPipe */],
            __WEBPACK_IMPORTED_MODULE_23__pipes_change_display_svc_pipe__["a" /* ChangeDisplaySvcPipe */],
            __WEBPACK_IMPORTED_MODULE_24__pipes_change_display_to_pipe__["a" /* ChangeDisplayToPipe */],
            __WEBPACK_IMPORTED_MODULE_25__pipes_display_status_detail_pipe__["a" /* DisplayStatusDetailPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_11_angular2_signaturepad__["SignaturePadModule"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/jsea/jsea.module#JseaPageModule', name: 'JseaPage', segment: 'jsea', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/image-text/image-text.module#ImageTextPageModule', name: 'ImageTextPage', segment: 'image-text', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/job-detail-notes/job-detail-notes.module#JobDetailNotesPageModule', name: 'JobDetailNotesPage', segment: 'job-detail-notes', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/job-details/job-details.module#JobDetailsPageModule', name: 'JobDetailsPage', segment: 'job-details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/change/change.module#ChangePageModule', name: 'ChangePage', segment: 'change', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/device/device.module#DevicePageModule', name: 'DevicePage', segment: 'device', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/gps/gps.module#GpsPageModule', name: 'GpsPage', segment: 'gps', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/pda/pda.module#PdaPageModule', name: 'PdaPage', segment: 'pda', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/msgs/msgs.module#MsgsPageModule', name: 'MsgsPage', segment: 'msgs', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/images/images.module#ImagesPageModule', name: 'ImagesPage', segment: 'images', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/barcode/barcode.module#BarcodePageModule', name: 'BarcodePage', segment: 'barcode', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_26__shared_sdk_index__["c" /* SDKBrowserModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_71__pages_login_login_module__["LoginPageModule"],
            __WEBPACK_IMPORTED_MODULE_69__pages_barcode_barcode_module__["BarcodePageModule"],
            __WEBPACK_IMPORTED_MODULE_75__pages_change_change_module__["ChangePageModule"],
            __WEBPACK_IMPORTED_MODULE_63__pages_device_device_module__["DevicePageModule"],
            __WEBPACK_IMPORTED_MODULE_64__pages_gps_gps_module__["GpsPageModule"],
            __WEBPACK_IMPORTED_MODULE_74__pages_image_text_image_text_module__["ImageTextPageModule"],
            __WEBPACK_IMPORTED_MODULE_68__pages_images_images_module__["ImagesPageModule"],
            __WEBPACK_IMPORTED_MODULE_73__pages_job_detail_notes_job_detail_notes_module__["JobDetailNotesPageModule"],
            __WEBPACK_IMPORTED_MODULE_62__pages_job_details_job_details_module__["JobDetailsPageModule"],
            __WEBPACK_IMPORTED_MODULE_66__pages_jsea_jsea_module__["JseaPageModule"],
            __WEBPACK_IMPORTED_MODULE_67__pages_msgs_msgs_module__["MsgsPageModule"],
            __WEBPACK_IMPORTED_MODULE_65__pages_pda_pda_module__["PdaPageModule"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_60__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_61__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_70__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_72__pages_signature_signature__["a" /* SignaturePage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_28__providers_login_service_login_service__["a" /* LoginServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_29__providers_config_service_config_service__["a" /* ConfigServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_30__providers_customerconn_service_customerconn_service__["a" /* CustomerconnServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_31__providers_pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_32__providers_siteconfig_service_siteconfig_service__["a" /* SiteconfigServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_33__providers_shared_service_shared_service__["a" /* SharedServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_34__providers_base_service_base_service__["a" /* BaseServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_35__providers_util_service_util_service__["a" /* UtilServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_36__providers_jsea_service_jsea_service__["a" /* JseaServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_37__providers_message_service_message_service__["a" /* MessageServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_38__providers_fixed_queue_service_fixed_queue_service__["a" /* FixedQueueServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_39__providers_device_service_device_service__["a" /* DeviceServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_40__providers_platform_ready_service_platform_ready_service__["a" /* PlatformReadyServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_41__providers_background_geolocation_service_background_geolocation_service__["a" /* BackgroundGeolocationServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_43__providers_log_service_log_service__["a" /* LogServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_27__shared_sdk_services_custom_logger_service__["a" /* LoggerService */],
            __WEBPACK_IMPORTED_MODULE_42__providers_gps_audit_service_gps_audit_service__["a" /* GpsAuditServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_insomnia__["a" /* Insomnia */],
            __WEBPACK_IMPORTED_MODULE_44__providers_job_service_job_service__["a" /* JobServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_45__providers_event_service_event_service__["a" /* EventServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_46__providers_window_ref_service_window_ref_service__["a" /* WindowRefServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_47__providers_sod_service_sod_service__["a" /* SodServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_48__providers_push_service_push_service__["a" /* PushServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_49__providers_exit_service_exit_service__["a" /* ExitServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_50__providers_gps_service_gps_service__["a" /* GpsServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_51__providers_error_modal_service_error_modal_service__["a" /* ErrorModalServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_52__providers_job_changed_service_job_changed_service__["a" /* JobChangedServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_device_feedback__["a" /* DeviceFeedback */],
            __WEBPACK_IMPORTED_MODULE_53__providers_image_service_image_service__["a" /* ImageServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_54__providers_image_file_service_image_file_service__["a" /* ImageFileServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_55__providers_driver_message_service_driver_message_service__["a" /* DriverMessageServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_transfer__["b" /* FileTransferObject */],
            __WEBPACK_IMPORTED_MODULE_56__providers_connectivity_monitor_connectivity_monitor__["a" /* ConnectivityMonitorProvider */],
            __WEBPACK_IMPORTED_MODULE_57__providers_sync_service_sync_service__["a" /* SyncServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_media__["a" /* Media */],
            __WEBPACK_IMPORTED_MODULE_58__providers_job_replication_service_job_replication_service__["a" /* JobReplicationServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_59__providers_barcode_service_barcode_service__["a" /* BarcodeServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_push__["a" /* Push */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketBrowser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_socket_io_client__ = __webpack_require__(426);
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
var SocketBrowser = (function () {
    function SocketBrowser() {
    }
    /**
     * @method connect
     * @param {string} url URL path to connect with the server.
     * @param {any} options Any socket.io v1 =< valid options
     * @return {any} Not currently a socket.io-client for web Typings implemented.
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

/***/ 444:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IO; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* tslint:disable */

var IO = (function () {
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

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FireLoop; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(284);
/* tslint:disable */

var FireLoop = (function () {
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

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FireLoopRef; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_merge__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_merge__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_merge__);
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
var FireLoopRef = (function () {
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
    *   - change (Triggers on any model change -create, update, remove-)
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
        return subject.asObservable().catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error); });
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

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_service_util_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pdaparams_service_pdaparams_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service_shared_service__ = __webpack_require__(14);
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







var BaseServiceProvider = (function () {
    function BaseServiceProvider(pdaParams, util, logger, alertCtrl, sharedService, actionSheetCtrl) {
        var _this = this;
        this.pdaParams = pdaParams;
        this.util = util;
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
            if (rootScopeProperty === "jobMetadata" && !(_this.sharedService.getJobMetaData() === undefined)) {
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
            _this.mystr = 'generateHeaderForModelInstance';
            _this.log.debug(_this.mystr);
            if (!metadata || !item) {
                return '';
            }
            var header = '';
            if (Object.keys(metadata.properties).length > 0) {
                header = (metadata.properties[0].label || '') + ' : ' +
                    item[metadata.properties[0].name];
            }
            var headerProperties = _this.util.findArrayItemsByKey(metadata.properties, "includeInHeader", true);
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
                var headerProperty = _this.util.findArrayItemByKey(metadata.properties, "defaultHeader", true);
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
            _this.log.debug(mystr);
            //Will register if not already registered
            _this.convertDates(item, metadata);
            var curProp;
            for (var iac = 0; iac < item.length; iac++) {
                var interimitem = item[iac]; //Just Get one of the Jobs/Leg
                if (_this.pdaParams.experimental)
                    _this.log.debug("LegLoop:START:" + iac);
                for (var i = 0; i < Object.keys(metadata.properties).length; i++) {
                    if (_this.pdaParams.experimental)
                        _this.log.debug("Metadata:START:" + i);
                    if (i === 0) {
                        metadata.properties[i].index = 1;
                        // Give the First Property a predictable Index Value
                    }
                    curProp = metadata.properties[i];
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
                            var currentEnumValue = _this.util.findArrayItemByKey(_this.addProp.enum, "value", property);
                            if (!currentEnumValue) {
                                currentEnumValue = _this.addProp.enum[0];
                            }
                            _this.addProp.enumValue = currentEnumValue;
                            _this.addProp.enumValue = Object.assign({}, currentEnumValue);
                        }
                        data.push(_this.addProp);
                    }
                    if (_this.pdaParams.experimental)
                        _this.log.debug("Metadata:END:" + i);
                } // Metadata End FOR
                if (_this.pdaParams.experimental)
                    _this.log.debug("LegLoop:END:" + iac);
            } //Item/Job END FOR    
            return data;
        }; //combineValuesAndLabels ends here
        // Generate a Primary Key for the new Entity Instance if necessary
        // and then create a new Instance with Default Values if provided.
        this.createNewItem = function (item, metadata) {
            var idProperty = _this.util.findArrayItemByKey(metadata.properties, "id", true);
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
                var metaProperty = _this.util.findArrayItemByKey(metadata.properties, "name", property);
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
                var metaProperty = _this.util.findArrayItemByKey(data, "property", property);
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
                var metaProperty = _this.util.findArrayItemByKey(data, "property", message);
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
                var idProperty = _this.util.findArrayItemByKey(data, "id", true);
                if (idProperty) {
                    if (!idProperty.generateNewID) {
                        delete item[idProperty.property];
                    }
                }
            }
            // Because the UX displayed the Values controlled with the Metadata,
            // Let's extract the Values back into a Clean Item Object...
            for (var property in item) {
                var metaProperty = _this.util.findArrayItemByKey(data, "property", property);
                if (metaProperty && (item[property] !== metaProperty.value)) {
                    item[property] = metaProperty.value;
                }
            }
            // If there is a "lastModified" Property, update it to "NOW"...
            var lastModified = _this.util.findArrayItemByKey(data, "lastModified", true);
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
        //console.log('Hello BaseServiceProvider Provider');
        this.bNewItem = this.sharedService.getBNewItem();
        this.sharedService.setDesktopBrowserScrolling(true);
    }
    return BaseServiceProvider;
}());
BaseServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_3__util_service_util_service__["a" /* UtilServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_6__log_service_log_service__["a" /* LogServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_5__shared_service_shared_service__["a" /* SharedServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
], BaseServiceProvider);

//# sourceMappingURL=base-service.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__(24);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error_service__ = __webpack_require__(28);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_params__ = __webpack_require__(27);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_service__ = __webpack_require__(35);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__real_time__ = __webpack_require__(283);
/* unused harmony namespace reexport */
/* tslint:disable */





//# sourceMappingURL=index.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Job__ = __webpack_require__(286);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__Job__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TpmPdaController__ = __webpack_require__(288);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__TpmPdaController__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GpsHistory__ = __webpack_require__(104);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Application__ = __webpack_require__(289);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Installation__ = __webpack_require__(290);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__Installation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Notification__ = __webpack_require__(291);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Push__ = __webpack_require__(292);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Mobile_event__ = __webpack_require__(293);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__SiteConfig__ = __webpack_require__(294);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_8__SiteConfig__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__DespatchToDriverMessages__ = __webpack_require__(295);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_9__DespatchToDriverMessages__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__JseaDriverQuestions__ = __webpack_require__(153);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__JseaDriverAnswers__ = __webpack_require__(296);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Photocontainer__ = __webpack_require__(297);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Image__ = __webpack_require__(298);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__BarcodeHist__ = __webpack_require__(299);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__SDKModels__ = __webpack_require__(25);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__logger_service__ = __webpack_require__(81);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_16__logger_service__["a"]; });
/* tslint:disable */

















//# sourceMappingURL=index.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
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
var UtilServiceProvider = (function () {
    function UtilServiceProvider(http) {
        this.http = http;
        this.oneDay = 60 * 60 * 24 * 1000;
        this.scrollBarWidth = null;
        this.isEmpty = function (obj) {
            for (var key in obj) {
                if (obj.hasOwnProperty(key))
                    return false;
            }
            return true;
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
    return UtilServiceProvider;
}());
UtilServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], UtilServiceProvider);

//# sourceMappingURL=util-service.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JseaServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_sdk_services__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pdaparams_service_pdaparams_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__siteconfig_service_siteconfig_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_service_base_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_service_shared_service__ = __webpack_require__(14);
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
var JseaServiceProvider = (function () {
    function JseaServiceProvider(pdaParams, siteConfig, log, base, sharedService) {
        //console.log('Hello JseaServiceProvider Provider');
        var _this = this;
        this.pdaParams = pdaParams;
        this.siteConfig = siteConfig;
        this.log = log;
        this.base = base;
        this.sharedService = sharedService;
        //var logParams = { site: pdaParams.getSiteId(), driver: pdaParams.getDriverId(), fn: 'jseaService' };
        //var log = Logger.getInstance(logParams);
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
        this.log.info('Setting JseaType passed ' + larg);
        for (var key in this.jseaServiceTypes) {
            var lvalue = this.jseaServiceTypes[key];
            this.log.info(' lvalue : ' + lvalue);
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
        this.log.info('Getting JseaIsCaptured');
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
            _this.log.info('SODSERVICE_IS_NEW_DAY Event triggered');
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
            console.log("Hi from jsea-service.ts");
            _this.log.info('SITE_CONFIG_LOADED Event triggered');
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
    return JseaServiceProvider;
}());
JseaServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_4__siteconfig_service_siteconfig_service__["a" /* SiteconfigServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_2__shared_sdk_services__["d" /* LoggerService */],
        __WEBPACK_IMPORTED_MODULE_5__base_service_base_service__["a" /* BaseServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_6__shared_service_shared_service__["a" /* SharedServiceProvider */]])
], JseaServiceProvider);

//# sourceMappingURL=jsea-service.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_sdk_services__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fixed_queue_service_fixed_queue_service__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__device_service_device_service__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__log_service_log_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_pdaparams_service_pdaparams_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_job_service_job_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_shared_service_shared_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__util_service_util_service__ = __webpack_require__(57);
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
var MessageServiceProvider = (function () {
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
        this.newMsgCount = 0; // keep a count of new messages - will reset once driver has seen them
        this.deleteJobChangeData = lbclient.deleteJobChangeData;
        this.deleteJseaChangeData = lbclient.deleteJseaChangeData;
        //console.log('Hello MessageServiceProvider Provider');
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
        var logmsg = {};
        var dblist = ['osc-local-db', 'osc-driver-info', 'osc-push-credentials'];
        var len = dblist.length;
        // dump ALL items, not just out predefined ones
        len = localStorage.length;
        for (var i = 0; i < len; i++) {
            var key = localStorage.key(i);
            var value = localStorage[key];
            logmsg.type = 'dumpLocalStorage:' + key;
            if (this.isJson(value))
                logmsg.data = JSON.parse(value);
            else
                logmsg.data = value;
            this.log.info(logmsg);
        }
    };
    MessageServiceProvider.prototype.clearLocalStorage = function () {
        var logmsg = {};
        logmsg.type = 'clearLocalStorage';
        // clear local storage then log contents - should be empty
        localStorage.removeItem('osc-local-db');
        logmsg.data = JSON.parse(localStorage.getItem('osc-local-db'));
        this.log.info(logmsg);
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
        logmsg.type = 'dumpDeviceInfo';
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
    MessageServiceProvider.prototype.startWatching = function () {
        var _this = this;
        // PDA commands 
        // From REST endpoint /TpmPdaControllers/sendCommandToPDA/{driver}
        this.sharedService.commandToPDA.subscribe(function (payload) {
            // $rootScope.$on('commandToPDA', function (event, payload) {
            _this.log.debug('commandToPDA:received:' + JSON.stringify(payload));
            //console.log('commandToPDA:received 1:' + JSON.stringify(payload));
            switch (payload.command) {
                case 'dumpLocalStorage':
                    _this.dumpLocalStorage();
                    break;
                case 'clearLocalStorage':
                    _this.clearLocalStorage();
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
                default:
                    var logmsg = {};
                    logmsg.type = 'commandToPDA';
                    _this.log.error('unknown command:' + payload.command);
                    //console.log('unknown command:' + payload.command);
                    break;
            }
            // LT - added after cordova/push upgrades - we didn't seem to get immediate updates afterwards
            //$rootScope.$apply();
        });
        // Message to driver
        //$rootScope.$on('messageToDriver', function (event, payload) {
        this.sharedService.messageToDriver.subscribe(function (payload) {
            //console.log('messageToDriver:received 1:' + JSON.stringify(payload));
            // payload.message has the message text
            //if (payload !== null) {
            if (!_this.utilService.isEmpty(payload)) {
                // //console.log('messageToDriver:received 2:' + JSON.stringify(payload));
                _this.msgQ.push(payload.message);
                _this.newMsgCount++;
            }
            // LT - added after cordova/push upgrades - we didn't seem to get immediate updates afterwards
            //$rootScope.$apply();
        });
        // more watchers if required
    };
    MessageServiceProvider.prototype.getMessages = function () {
        // get all messages
        return (this.msgQ);
    };
    MessageServiceProvider.prototype.getNewMesssageCount = function () {
        return (this.newMsgCount);
    };
    MessageServiceProvider.prototype.resetNewMessageCount = function () {
        this.newMsgCount = 0;
    };
    return MessageServiceProvider;
}());
MessageServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__fixed_queue_service_fixed_queue_service__["a" /* FixedQueueServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_5__log_service_log_service__["a" /* LogServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_6__providers_pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_4__device_service_device_service__["a" /* DeviceServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__shared_sdk_services__["c" /* JobApi */],
        __WEBPACK_IMPORTED_MODULE_7__providers_job_service_job_service__["a" /* JobServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_8__providers_shared_service_shared_service__["a" /* SharedServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_9__util_service_util_service__["a" /* UtilServiceProvider */]])
], MessageServiceProvider);

//# sourceMappingURL=message-service.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlatformReadyServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_device__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_insomnia__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__log_service_log_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_pdaparams_service_pdaparams_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_background_geolocation_service_background_geolocation_service__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_shared_service_shared_service__ = __webpack_require__(14);
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
var PlatformReadyServiceProvider = (function () {
    function PlatformReadyServiceProvider(device, logger, pdaParams, platform, insomnia, backgroundGeolocationService, sharedService) {
        var _this = this;
        this.device = device;
        this.logger = logger;
        this.pdaParams = pdaParams;
        this.platform = platform;
        this.insomnia = insomnia;
        this.backgroundGeolocationService = backgroundGeolocationService;
        this.sharedService = sharedService;
        this.logParams = { site: this.pdaParams.getSiteId(), driver: this.pdaParams.getDriverId(), fn: 'PlatformReadyServiceProvider' };
        this.log = this.logger.getInstance(this.logParams);
        this.isready = false;
        this.log.info('Hello PlatformReadyServiceProvider Provider');
        this.platform.ready().then(function (readySource) {
            _this.log.info('Platform ready from :', readySource);
            // Platform now ready, execute any required native code
            var model = _this.device.model;
            var platform = _this.device.platform;
            var version = _this.device.version;
            /*  if (platform == 'android') {
               StatusBar.backgroundColorByHexString("#333");
             } */
            _this.isready = true;
            // Keep screen on for our app
            _this.insomnia.keepAwake();
            //this.log.info("Device Model:" + model + ", platform:" + platform + ", OS ver:" + version);
            if (model == 'CipherLab RS30') {
                _this.log.debug("Device is a CipherLab RS30 " + model);
            }
            else {
                _this.log.debug("Device is NOT !!!! a CipherLab RS30 HEAD scanning NOT Available " + model);
            }
            _this.platform.pause.subscribe(function (e) {
                _this.log.debug("platform.pause: About to call BGGS.start() ");
                _this.backgroundGeolocationService.start();
                //$rootScope.$broadcast('PAUSE');
                _this.sharedService.PAUSE.next(true);
            });
            _this.platform.resume.subscribe(function (e) {
                _this.log.debug("platform.resume: About to broadcast: RESUME event");
                _this.backgroundGeolocationService.stop();
                //$rootScope.$broadcast('RESUME');
                _this.sharedService.RESUME.next(true);
            });
        });
    } //constructor ends;
    PlatformReadyServiceProvider.prototype.isPlatformReady = function () {
        return this.isready;
    };
    return PlatformReadyServiceProvider;
}());
PlatformReadyServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_5__log_service_log_service__["a" /* LogServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_6__providers_pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_insomnia__["a" /* Insomnia */], __WEBPACK_IMPORTED_MODULE_7__providers_background_geolocation_service_background_geolocation_service__["a" /* BackgroundGeolocationServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_8__providers_shared_service_shared_service__["a" /* SharedServiceProvider */]])
], PlatformReadyServiceProvider);

//# sourceMappingURL=platform-ready-service.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_index__ = __webpack_require__(451);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_index__ = __webpack_require__(452);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__custom_index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__custom_index__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__custom_index__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__custom_index__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__custom_index__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__custom_index__["f"]; });
/* tslint:disable */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GpsAuditServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__log_service_log_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_pdaparams_service_pdaparams_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fixed_queue_service_fixed_queue_service__ = __webpack_require__(161);
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
var GpsAuditServiceProvider = (function () {
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
        return (this.gpsHistory);
    };
    GpsAuditServiceProvider.prototype.getLastGPS = function () {
        // TODO - maybe have arg for time so only return GPS if within last x secs
        return (this.lastGps);
    };
    return GpsAuditServiceProvider;
}());
GpsAuditServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__fixed_queue_service_fixed_queue_service__["a" /* FixedQueueServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_2__log_service_log_service__["a" /* LogServiceProvider */]])
], GpsAuditServiceProvider);

//# sourceMappingURL=gps-audit-service.js.map

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogServiceInstance; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_sdk_services_custom_logger_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_sdk_lb_config__ = __webpack_require__(20);


var LogServiceInstance = (function () {
    function LogServiceInstance(http, context, driverId, logServerIP, logServerPort, pdaParams) {
        this.seqno = 0;
        this.isEnabled = true;
        this.http = http;
        this.context = context;
        this.driverId = driverId;
        this.logServerIP = logServerIP;
        this.logServerPort = logServerPort;
        this.pdaParams = pdaParams;
        this.loggerService = new __WEBPACK_IMPORTED_MODULE_0__shared_sdk_services_custom_logger_service__["a" /* LoggerService */]();
        //console.log('Hello LogServiceInstance class');
    }
    LogServiceInstance.prototype.supplant = function (str, o) {
        return str.replace(/\{([^{}]*)\}/g, function (a, b) {
            var r = o[b];
            return typeof r === 'string' || typeof r === 'number' ? r : a;
        });
    };
    ;
    LogServiceInstance.prototype.getFormattedTimestamp = function (date) {
        return this.supplant('{0}:{1}:{2}:{3}', [
            date.getHours(),
            date.getMinutes(),
            date.getSeconds(),
            date.getMilliseconds()
        ]);
    };
    ;
    LogServiceInstance.prototype.getLogTimestamp = function (date) {
        return (date.toISOString());
    };
    ;
    LogServiceInstance.prototype.getLocalTimestamp = function (date) {
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
    LogServiceInstance.prototype.debug = function (arg) {
        if (__WEBPACK_IMPORTED_MODULE_1__shared_sdk_lb_config__["a" /* LoopBackConfig */].debuggable())
            console.debug(arg);
    };
    LogServiceInstance.prototype.warn = function (arg) {
        if (__WEBPACK_IMPORTED_MODULE_1__shared_sdk_lb_config__["a" /* LoopBackConfig */].debuggable())
            console.warn(arg);
    };
    return LogServiceInstance;
}()); //class LogServiceInstance ends here

LogServiceInstance.prototype._log = function (originalFn, args) {
    if (!this.isEnabled) {
        return;
    }
    var contentType = 'application/json; charset=UTF-8';
    var now = this.getFormattedTimestamp(new Date());
    var message = '', supplantData = [];
    var logstring = '';
    // LT - BAD - HACK - check driver id and if zero update context
    // Logger function should not know details of context or what a driver id is!!!!
    if (this.context.driver == 0 || (typeof this.context.driver == 'undefined'))
        //this.context.driver = this.pdaParamService.getDriverId();
        this.context.driver = this.driverId;
    this.context.driver = Number(this.context.driver);
    // LT - for our OSC PDA app context is a JSON object so need to convert to string
    var lcontext = JSON.stringify(this.context);
    switch (args.length) {
        case 1:
            message = this.supplant("{0} - {1}: {2}", [now, lcontext, args[0]]);
            logstring = args[0];
            break;
        case 3:
            supplantData = args[2];
            message = this.supplant("{0} - {1}::{2}(\'{3}\')", [now, lcontext, args[0], args[1]]);
            this.logtype = args[0];
            logstring = this.supplant(args[1], supplantData);
            break;
        case 2:
            if (typeof args[1] === 'string') {
                message = this.supplant("{0} - {1}::{2}(\'{3}\')", [now, lcontext, args[0], args[1]]);
                this.logtype = args[0];
                logstring = args[1];
            }
            else {
                supplantData = args[1];
                message = this.supplant("{0} - {1}: {2}", [now, lcontext, args[0]]);
                logstring = this.supplant(args[0], supplantData);
            }
            break;
    }
    //this.loggerService[originalFn].call(null, this.supplant(message, supplantData));
    // LT - POST to log server
    /* The angular $http service cannot be used in the $log
     * decorator because it will cause a circular dependecy.
     * To overcome this  a direct ajax call should be made.
     * TODO - maybe use "request" https://github.com/request/request/blob/master/README.md instead of jQuery to reduce footprint
     */
    this.seqno++;
    if (this.seqno > 999)
        this.seqno = 1;
    var d = new Date();
    var OSC_log = {
        time: this.getLogTimestamp(d),
        localtime: this.getLocalTimestamp(d),
        seq: this.seqno,
        logtype: originalFn,
        context: this.context,
        message: logstring
    };
    var url = 'http://' + this.logServerIP + ':' + this.logServerPort;
    var data = JSON.stringify({
        pdalog: OSC_log
    });
    this.http.post(url, data).subscribe(function (data) {
        //console.log("GPS log test:::" + data);
    }, function (error) {
        console.log("GPS log test error:::" + error);
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

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_sdk_index__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_image_file_service_image_file_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_image_service_image_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_config_service_config_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_shared_service_shared_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_image_text_image_text__ = __webpack_require__(326);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the CameraButtonComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var CameraButtonComponent = (function () {
    function CameraButtonComponent(modalCtrl, imageFileService, imageService, configService, sharedService) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.imageFileService = imageFileService;
        this.imageService = imageService;
        this.configService = configService;
        this.sharedService = sharedService;
        // function to open the modal
        this.openModal = function (obj) {
            var myModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__pages_image_text_image_text__["a" /* ImageTextPage */], obj);
            myModal.present();
        };
        this.getNotesForImage = function (imageURI, legid, baseFileName, newFileName) {
            var obj = { imageURI: '', legid: 0, baseFileName: '', newFileName: '' };
            obj.imageURI = imageURI;
            obj.legid = legid;
            obj.baseFileName = baseFileName;
            obj.newFileName = newFileName;
            _this.openModal(obj);
        };
        this.takephoto = function (legid) {
            console.log(new Date().toISOString() + ': camera.takephoto: starts'); //DEBUG
            _this.imageURI = "Nothing Loaded!!";
            _this.legid = legid;
            _this.imageService.takePhoto(_this.legid).subscribe(function (imageURI) {
                _this.imageURI = imageURI;
                _this.imageService.storeImageURI(_this.legid, _this.imageURI, _this.metadata).subscribe(function (fileData) {
                    // image moved to app storage
                    _this.sharedService.imageSaved.next(fileData);
                    var savedImageURI = fileData.savedImageURI;
                    var baseFileName = fileData.baseFileName;
                    var newFileName = fileData.newFileName;
                    _this.getNotesForImage(savedImageURI, _this.legid, baseFileName, newFileName);
                }, function (err) {
                    alert("storeImageURI Error" + JSON.stringify(err));
                });
            });
            // image successfully captured by device
        }; //takephoto ends here
        //console.log('Hello CameraButtonComponent Component');
        __WEBPACK_IMPORTED_MODULE_2__shared_sdk_index__["b" /* LoopBackConfig */].setBaseURL(configService.apiURL);
        __WEBPACK_IMPORTED_MODULE_2__shared_sdk_index__["b" /* LoopBackConfig */].setApiVersion(configService.API_VERSION);
    }
    return CameraButtonComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('metadata'),
    __metadata("design:type", Object)
], CameraButtonComponent.prototype, "metadata", void 0);
CameraButtonComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'camera-button',template:/*ion-inline-start:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/components/camera-button/camera-button.html"*/'<!-- Generated template for the CameraButtonComponent component -->\n\n<button ion-button name="myPicture" [(ngModel)]="myPicture" (click)="takephoto(metadata.legid)" ngDefaultControl>\n\n  <!-- <ion-icon name="camera"></ion-icon> &nbsp; --> Photo\n\n</button>\n\n'/*ion-inline-end:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/components/camera-button/camera-button.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__providers_image_file_service_image_file_service__["a" /* ImageFileServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_image_service_image_service__["a" /* ImageServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_config_service_config_service__["a" /* ConfigServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_6__providers_shared_service_shared_service__["a" /* SharedServiceProvider */]])
], CameraButtonComponent);

//# sourceMappingURL=camera-button.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectivityMonitorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_service_util_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pdaparams_service_pdaparams_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__log_service_log_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__siteconfig_service_siteconfig_service__ = __webpack_require__(31);
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
var ConnectivityMonitorProvider = (function () {
    function ConnectivityMonitorProvider(pdaParams, util, logger, siteConfig, platform, network) {
        //console.log('Hello ConnectivityMonitorProvider Provider');
        var _this = this;
        this.pdaParams = pdaParams;
        this.util = util;
        this.logger = logger;
        this.siteConfig = siteConfig;
        this.platform = platform;
        this.network = network;
        this.logParams = { site: this.pdaParams.getSiteId(), driver: this.pdaParams.getDriverId(), fn: 'ConnectivityMonitorProvider' };
        this.log = this.logger.getInstance(this.logParams);
        //isConnected is the ONLY variable used to interact with the Ionic-native network plugin. 
        /*   //while Online is used as a global network variable in the code.
          //Use isOnline() function to read the value of the 'Online' variable */
        this.isConnected = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["BehaviorSubject"](true);
        this.networkType = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["BehaviorSubject"]('');
        /*  isOnline() {
           if (this.platform.is('core')) {
             this.Online = navigator.onLine;
           }
           return this.Online;
         } */
        this.startWatching = function () {
            if (_this.platform.is('core')) {
                window.addEventListener("online", function (e) {
                    //if (this.monitorOnline)
                    _this.isConnected.next(true);
                    //console.log("went online");
                }, false);
                window.addEventListener("offline", function (e) {
                    //console.log("went offline");
                    // if (this.monitorOnline)
                    _this.isConnected.next(false);
                }, false);
            }
            else {
                _this.connectSubscription = _this.network.onConnect().subscribe(function () {
                    //console.log('network was Connected :-(');
                    setTimeout(function () {
                        //if (this.monitorOnline)
                        _this.isConnected.next(true);
                        _this.networkType.next(_this.network.type);
                    }, 2000);
                });
                _this.disconnectSubscription = _this.network.onDisconnect().subscribe(function () {
                    _this.isConnected.next(false);
                });
            }
        }; //startWatching ends here
        this.monitorOnline = siteConfig.getSiteConfigValue('PDA_MONITOR_ONLINE') == 'Y';
    }
    ConnectivityMonitorProvider.prototype.ngOnDestroy = function () {
        this.disconnectSubscription.unsubscribe();
        this.connectSubscription.unsubscribe();
    };
    return ConnectivityMonitorProvider;
}());
ConnectivityMonitorProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_5__util_service_util_service__["a" /* UtilServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_7__log_service_log_service__["a" /* LogServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_8__siteconfig_service_siteconfig_service__["a" /* SiteconfigServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__["a" /* Network */]])
], ConnectivityMonitorProvider);

//# sourceMappingURL=connectivity-monitor.js.map

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            keys.push({ key: key, value: value[key] });
        }
        return keys;
    };
    return KeysPipe;
}());
KeysPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'keys' })
], KeysPipe);

//# sourceMappingURL=keys.pipe.js.map

/***/ }),

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeDisplayFromPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChangeDisplayFromPipe = (function () {
    function ChangeDisplayFromPipe() {
    }
    ChangeDisplayFromPipe.prototype.transform = function (input, job) {
        if (job.displayFrom)
            return job.displayFrom;
        return input;
    };
    return ChangeDisplayFromPipe;
}());
ChangeDisplayFromPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'changeDisplayFrom' })
], ChangeDisplayFromPipe);

//# sourceMappingURL=change-display-from.pipe.js.map

/***/ }),

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeDisplaySvcPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChangeDisplaySvcPipe = (function () {
    function ChangeDisplaySvcPipe() {
    }
    ChangeDisplaySvcPipe.prototype.transform = function (input, pdaParams) {
        var output = "(" + input + ")";
        if (pdaParams.siteId === 'WADS')
            return "";
        return output;
    };
    return ChangeDisplaySvcPipe;
}());
ChangeDisplaySvcPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'changeDisplaySvc' })
], ChangeDisplaySvcPipe);

//# sourceMappingURL=change-display-svc.pipe.js.map

/***/ }),

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeDisplayToPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChangeDisplayToPipe = (function () {
    function ChangeDisplayToPipe() {
    }
    ChangeDisplayToPipe.prototype.transform = function (input, job) {
        if (job.displayTo)
            return job.displayTo;
        return input;
    };
    return ChangeDisplayToPipe;
}());
ChangeDisplayToPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'changeDisplayTo' })
], ChangeDisplayToPipe);

//# sourceMappingURL=change-display-to.pipe.js.map

/***/ }),

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayStatusDetailPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DisplayStatusDetailPipe = (function () {
    function DisplayStatusDetailPipe() {
    }
    DisplayStatusDetailPipe.prototype.transform = function (input, args) {
        input = input || '';
        var out = "";
        if (input == "IP")
            return "IN PROGRESS";
        if (input == "DN")
            return "PICKED UP";
        return "ALLOCATED";
    };
    return DisplayStatusDetailPipe;
}());
DisplayStatusDetailPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'displayStatusDetail' })
], DisplayStatusDetailPipe);

//# sourceMappingURL=display-status-detail.pipe.js.map

/***/ }),

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorModalServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pdaparams_service_pdaparams_service__ = __webpack_require__(9);
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
  Generated class for the ErrorModalServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var ErrorModalServiceProvider = (function () {
    function ErrorModalServiceProvider(pdaParams, logger, alertCtrl) {
        this.pdaParams = pdaParams;
        this.logger = logger;
        this.alertCtrl = alertCtrl;
        this.logParams = { site: this.pdaParams.getSiteId(), driver: this.pdaParams.getDriverId(), fn: 'ErrorModalServiceProvider' };
        this.log = this.logger.getInstance(this.logParams);
        //console.log('Hello ErrorModalServiceProvider Provider');
    }
    ErrorModalServiceProvider.prototype.showModal = function (modalOptions) {
        var errortext = "Status:" + modalOptions.error.status + " url:" + modalOptions.error.config.url;
        var alert = this.alertCtrl.create({
            title: this.pdaParams.getAppVersion(),
            subTitle: modalOptions.headerText,
            message: errortext,
            buttons: ['Dismiss']
        });
        alert.present();
        this.log.error('Error:' + JSON.stringify(modalOptions.error));
    };
    ; //showModal ends here
    return ErrorModalServiceProvider;
}());
ErrorModalServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_4__log_service_log_service__["a" /* LogServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], ErrorModalServiceProvider);

//# sourceMappingURL=error-modal-service.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lb_config__ = __webpack_require__(20);
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
var LoggerService = (function () {
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
    return LoggerService;
}());
LoggerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], LoggerService);

//# sourceMappingURL=logger.service.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageFileServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__log_service_log_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_pdaparams_service_pdaparams_service__ = __webpack_require__(9);
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
var ImageFileServiceProvider = (function () {
    function ImageFileServiceProvider(pdaParams, http, logger) {
        //console.log('Hello ImageFileServiceProvider Provider');
        var _this = this;
        this.pdaParams = pdaParams;
        this.http = http;
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
    return ImageFileServiceProvider;
}());
ImageFileServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__log_service_log_service__["a" /* LogServiceProvider */]])
], ImageFileServiceProvider);

//# sourceMappingURL=image-file-service.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__log_service_log_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pdaparams_service_pdaparams_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_service_config_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__window_ref_service_window_ref_service__ = __webpack_require__(334);
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
var EventServiceProvider = (function () {
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
            var serverIP = _this.configService.getServerIP();
            var serverPort = _this.configService.getServerPort();
            // TODO - implement POST method - should be POST as we are creating
            _this.http.get('http://' + serverIP + ':' + serverPort + '/api/mobile_event' + '?payload=' + encodeURIComponent(JSON.stringify(message)))
                .map(function (res) { return _this.log.info('mobile_event:' + JSON.stringify(message)); });
        };
        //console.log('Hello EventServiceProvider Provider');
    }
    return EventServiceProvider;
}());
EventServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__log_service_log_service__["a" /* LogServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_4__pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_5__config_service_config_service__["a" /* ConfigServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_6__window_ref_service_window_ref_service__["a" /* WindowRefServiceProvider */]])
], EventServiceProvider);

//# sourceMappingURL=event-service.js.map

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PdaparamsServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_service_config_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_shared_service__ = __webpack_require__(14);
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
var PdaparamsServiceProvider = (function () {
    function PdaparamsServiceProvider(configService, sharedService) {
        this.configService = configService;
        this.sharedService = sharedService;
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
        // v2.37 - defaulted to false while we work out best way to sync when multiple jobs updated quickly within local storage
        // which in turn trigger multiple replication processes which caused some changes to be missed
        this.jobdisplay = false; // jobs tab does a quick display from local storage while sync takes place
        this.multiSelect = true; // Allow multi job select for Accept; Pickup etc.
        this.GPSInterval = 60000; // 1 minute default to grab GPS data (milliseconds)
        this.alwaysGetGPS = false;
        this.pda_jsea_on = false;
        this.imagePollTime = 60000 * 5; // 5 minute default
        this.imageUpload = true;
        this.syncDL = false; // sync DL jobs as well
        //console.log('Hello PdaparamsServiceProvider Provider');
        this.driverId = this.getDriverId();
        if (this.sharedService.testing)
            this.jobDetailOneDayOnly = false;
        else
            this.jobDetailOneDayOnly = true;
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
        localStorage.setItem('osc-driver-info', JSON.stringify(this.localdriver));
    };
    ;
    PdaparamsServiceProvider.prototype.logoffDriver = function () {
        this.localdriver = this.getParams();
        this.localdriver.loggedOn = false;
        this.localdriver.lastUpdate = Date.now();
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
    return PdaparamsServiceProvider;
}());
PdaparamsServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__config_service_config_service__["a" /* ConfigServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__shared_service_shared_service__["a" /* SharedServiceProvider */]])
], PdaparamsServiceProvider);

//# sourceMappingURL=pdaparams-service.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JseaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_sdk_index__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_sdk_services_custom_JseaDriverQuestions__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config_service_config_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_log_service_log_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_pdaparams_service_pdaparams_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_siteconfig_service_siteconfig_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_base_service_base_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_shared_service_shared_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_jsea_service_jsea_service__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the JseaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var JseaPage = (function () {
    function JseaPage(navCtrl, navParams, configService, pdaParams, siteConfig, logger, base, sharedService, jseaService, alertCtrl, jseaDriverQuestionsApi) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.configService = configService;
        this.pdaParams = pdaParams;
        this.siteConfig = siteConfig;
        this.logger = logger;
        this.base = base;
        this.sharedService = sharedService;
        this.jseaService = jseaService;
        this.alertCtrl = alertCtrl;
        this.jseaDriverQuestionsApi = jseaDriverQuestionsApi;
        this.t = this.navCtrl.parent;
        this.logParams = { site: this.pdaParams.getSiteId(), driver: this.pdaParams.getDriverId(), fn: 'JobDetailsPage' };
        this.log = this.logger.getInstance(this.logParams);
        this.jseaQuestions = [];
        this.LocalJseaDriverAnswers = lbclient.models.LocalJseaDriverAnswers;
        this.jseaAnswers_sync = lbclient.jseaAnswers_sync;
        this.loginFlag = this.pdaParams.isDrvLoggedOn();
        this.checkJdqResponse = function (jdqCbox, jdqType, jdqOrder, jdqNewForm, jdqNewFormType) {
            // check response when items are changed in case we need to do
            // any additional work e.g. load some more questions
            var _this = this;
            if (jdqCbox) {
                if (jdqNewForm) {
                    // jdqNewFormType has the type we need
                    var filter = {
                        "where": { "jdqType": jdqNewFormType },
                        "order": "jdqOrder ASC"
                    };
                    this.jseaDriverQuestionsApi.find(filter)
                        .subscribe(function (questsarr) {
                        var len = questsarr.length;
                        for (var i = 0; i < len; i++) {
                            _this.jseaQuestions.push(questsarr[i]);
                        }
                    });
                }
            }
            else {
                if (jdqNewForm) {
                    for (var i = this.jseaQuestions.length - 1; i >= 0; i--) {
                        if (this.jseaQuestions[i].jdqType === jdqNewFormType) {
                            this.jseaQuestions.splice(i, 1);
                            // break;       //<-- Uncomment  if only the first term has to be removed
                        }
                    }
                }
            }
        };
        this.doSubmitWork = function () {
            var li;
            var llen;
            //They Have Submited a list of Ticks Y/N and we now have to create an array of answers
            // one row for each answer	
            var ljobnum = this.jseaService.getServiceJobNum();
            var ljobdate = this.jseaService.getServiceJobDate();
            var jobStatusType = this.jseaService.getServiceStatusType();
            var formLeg = this.jseaService.getServiceFormLeg();
            llen = this.jseaQuestions.length;
            for (li = 0; li < llen; li++) {
                var AnswerSession = new lbclient.models.LocalJseaDriverAnswers();
                AnswerSession.jdaSeqnum = 0;
                AnswerSession.jdaJobNum = ljobnum;
                AnswerSession.jdaJobBday = ljobdate; // is a date object already 
                AnswerSession.jdaDriverId = this.pdaParams.getDriverId();
                AnswerSession.jdaFormType = this.jseaQuestions[li].jdqType;
                AnswerSession.jdaFormLeg = formLeg;
                AnswerSession.jdaOrder = this.jseaQuestions[li].jdqOrder;
                AnswerSession.jdaCheckBox = this.jseaQuestions[li].jdqCbox;
                AnswerSession.jdaJobStatusType = jobStatusType;
                AnswerSession.save();
            }
            this.jseaAnswers_sync();
        };
        /*========================================*/
        /*      JSEA SUBMIT   */
        /*========================================*/
        this.jseaSubmit = function () {
            var _this = this;
            var subconfirmPopup = this.alertCtrl.create({
                title: 'Jsea Session Confirm',
                message: 'Are you sure you want to submit your Answers session to the database ?',
                buttons: [
                    {
                        text: 'Yes',
                        handler: function () {
                            var navTransition = subconfirmPopup.dismiss();
                            _this.log.debug('User has Submitted the Jsea session');
                            _this.jseaService.setJseaIsCaptured("Y");
                            //Handle Answers
                            _this.doSubmitWork();
                            navTransition.then(function () {
                                //this.navCtrl.setRoot(TabsPage);
                                _this.t.select(0);
                            });
                            /*  navTransition.then(() => {
                               if (this.firstlogin === 'true') {
                                 localStorage.setItem('firstlogin', 'false');
                                 this.navCtrl.setRoot(TabsPage);
                               }
                               else
                                 this.t.select(0);
                 
                             }); */
                            return false;
                        }
                    },
                    {
                        text: 'No',
                        handler: function () {
                            _this.log.debug('User has CANCELLED out of a Jsea session SUBMIT Doing nothing');
                            return;
                        }
                    }
                ]
            });
            subconfirmPopup.present();
        };
        /*========================================*/
        /*        SCAN SESSION CANCEL   */
        /*========================================*/
        this.jseaCancel = function () {
            var _this = this;
            var confirmPopup = this.alertCtrl.create({
                title: 'CANCEL Jsea Session',
                message: 'Are you sure you want to CANCEL this jsea session (You will lose all data )?',
                buttons: [
                    {
                        text: 'Yes',
                        handler: function () {
                            var navTransition = confirmPopup.dismiss();
                            _this.log.debug('User has Cancelled the jsea session');
                            navTransition.then(function () {
                                //this.navCtrl.setRoot(TabsPage);
                                _this.t.select(0);
                            });
                            /* navTransition.then(() => {
                              if (this.firstlogin === 'true') {
                                this.navCtrl.push(LoginPage);
                                //return;
                              } else {
                                this.t.select(0);
                              }
                            }); */
                            return false;
                        }
                    },
                    {
                        text: 'No',
                        handler: function () {
                            _this.log.debug('User has CANCELLED out of a Jsea session CANCEL');
                            return;
                        }
                    }
                ]
            });
            confirmPopup.present();
        };
        this.username = navParams.data;
        //console.log("JseaPage loading...");
        __WEBPACK_IMPORTED_MODULE_2__shared_sdk_index__["b" /* LoopBackConfig */].setBaseURL(configService.apiURL);
        __WEBPACK_IMPORTED_MODULE_2__shared_sdk_index__["b" /* LoopBackConfig */].setApiVersion(configService.API_VERSION);
    }
    JseaPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.firstlogin = localStorage.getItem('firstlogin');
        this.driverId = this.pdaParams.getDriverId();
        if (this.sharedService.testing) {
            this.pda_jsea_on = 'Y';
            this.lpda_jsea_on = 'Y';
        }
        else {
            this.pda_jsea_on = this.siteConfig.getSiteConfigValue('PDA_JSEA_ON');
            this.lpda_jsea_on = this.pdaParams.pda_jsea_on ? 'Y' : 'N';
        }
        if (this.pda_jsea_on != 'Y' && this.lpda_jsea_on != 'Y') {
            var alert_1 = this.alertCtrl.create({
                title: 'Module not installed',
                subTitle: 'This module is not installed.',
                buttons: [{
                        text: 'OK',
                        handler: function () {
                            var navTransition = alert_1.dismiss();
                            //console.log('OK clicked');
                            navTransition.then(function () {
                                _this.t.select(0);
                            });
                            return false;
                        }
                    }]
            });
            alert_1.present();
        }
        else {
            var formType = this.jseaService.getServiceFormType();
            var _allfilter = {
                "where": { "jdqType": formType },
                "order": "jdqOrder ASC"
            };
            var filter = Object.assign({}, _allfilter);
            this.jseaDriverQuestionsApi.find(filter).subscribe(function (questsarr) {
                // TODO - need to check error and only show jobs if no error
                _this.jseaQuestions = questsarr;
            });
        } //End of else
    }; //End of ionViewDidEnter()
    return JseaPage;
}());
JseaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-jsea',template:/*ion-inline-start:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/jsea/jsea.html"*/'<!--\n\n  Generated template for the JseaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-buttons left>\n\n      <span [ngSwitch]="this.sharedService.loginFlag">\n\n        <ion-badge class="common-border" color="secondary" *ngSwitchCase="true"> Logged In</ion-badge>\n\n        <ion-badge class="common-border" color="danger" *ngSwitchCase="false"> Logged Off</ion-badge>\n\n      </span>\n\n    </ion-buttons>\n\n    <ion-title>JSEA</ion-title>\n\n    <ion-buttons right>\n\n      <ion-badge class="common-border" color="danger" *ngIf="newMessageCount">{{newMessageCount}}</ion-badge>\n\n      <ion-badge class="common-border" color="danger"> Driver # {{driverId}}</ion-badge>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content [ngClass]="{ \'overflow-scroll\': (desktopBrowserScrolling == true) }" padding>\n\n\n\n  <ion-list text-wrap>\n\n    <ion-list-header class="ion-list-header" color="secondary">Answer All Questions</ion-list-header>\n\n    <ion-item class="jsea-item item-text-wrap" *ngFor=" let jseaQuestion of jseaQuestions;trackBy:index" type="item-text-wrap">\n\n      <ion-toggle [(ngModel)]="jseaQuestion.jdqCbox" (ngModelChange)="checkJdqResponse(jseaQuestion.jdqCbox,jseaQuestion.jdqType,jseaQuestion.jdqOrder,jseaQuestion.jdqNewForm,jseaQuestion.jdqNewFormType)"></ion-toggle>\n\n\n\n      <ion-label> {{jseaQuestion.jdqQuestionText}}</ion-label>\n\n\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <button ion-button full round color="secondary" (click)="jseaSubmit()">\n\n        Submit\n\n      </button>\n\n    </ion-col>\n\n\n\n    <ion-col col-6>\n\n      <button ion-button full round color="danger" (click)="jseaCancel()">\n\n        Cancel\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/jsea/jsea.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_config_service_config_service__["a" /* ConfigServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_6__providers_pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_siteconfig_service_siteconfig_service__["a" /* SiteconfigServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_log_service_log_service__["a" /* LogServiceProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_base_service_base_service__["a" /* BaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_shared_service_shared_service__["a" /* SharedServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_10__providers_jsea_service_jsea_service__["a" /* JseaServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__shared_sdk_services_custom_JseaDriverQuestions__["a" /* JseaDriverQuestionsApi */]])
], JseaPage);

//# sourceMappingURL=jsea.js.map

/***/ })

},[399]);
//# sourceMappingURL=main.js.map