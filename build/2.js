webpackJsonp([2],{

/***/ 835:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicePageModule", function() { return DevicePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__device__ = __webpack_require__(859);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(848);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DevicePageModule = /** @class */ (function () {
    function DevicePageModule() {
    }
    DevicePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__device__["a" /* DevicePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__device__["a" /* DevicePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__device__["a" /* DevicePage */]
            ]
        })
    ], DevicePageModule);
    return DevicePageModule;
}());

//# sourceMappingURL=device.module.js.map

/***/ }),

/***/ 848:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__change_display_from_change_display_from__ = __webpack_require__(849);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__change_display_to_change_display_to__ = __webpack_require__(850);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__change_display_svc_change_display_svc__ = __webpack_require__(851);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gpsdate_gpsdate__ = __webpack_require__(852);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__keys_keys__ = __webpack_require__(853);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__change_display_from_change_display_from__["a" /* ChangeDisplayFromPipe */],
                __WEBPACK_IMPORTED_MODULE_2__change_display_to_change_display_to__["a" /* ChangeDisplayToPipe */],
                __WEBPACK_IMPORTED_MODULE_3__change_display_svc_change_display_svc__["a" /* ChangeDisplaySvcPipe */],
                __WEBPACK_IMPORTED_MODULE_4__gpsdate_gpsdate__["a" /* GpsdatePipe */],
                __WEBPACK_IMPORTED_MODULE_5__keys_keys__["a" /* KeysPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__change_display_from_change_display_from__["a" /* ChangeDisplayFromPipe */],
                __WEBPACK_IMPORTED_MODULE_2__change_display_to_change_display_to__["a" /* ChangeDisplayToPipe */],
                __WEBPACK_IMPORTED_MODULE_3__change_display_svc_change_display_svc__["a" /* ChangeDisplaySvcPipe */],
                __WEBPACK_IMPORTED_MODULE_4__gpsdate_gpsdate__["a" /* GpsdatePipe */],
                __WEBPACK_IMPORTED_MODULE_5__keys_keys__["a" /* KeysPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 849:
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

/**
 * Generated class for the ChangeDisplayFromPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var ChangeDisplayFromPipe = /** @class */ (function () {
    function ChangeDisplayFromPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    ChangeDisplayFromPipe.prototype.transform = function (input, job) {
        if (job.displayFrom)
            return job.displayFrom;
        return input;
    };
    ChangeDisplayFromPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'changeDisplayFrom',
        })
    ], ChangeDisplayFromPipe);
    return ChangeDisplayFromPipe;
}());

//# sourceMappingURL=change-display-from.js.map

/***/ }),

/***/ 850:
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

/**
 * Generated class for the ChangeDisplayToPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var ChangeDisplayToPipe = /** @class */ (function () {
    function ChangeDisplayToPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    ChangeDisplayToPipe.prototype.transform = function (input, job) {
        if (job.displayTo)
            return job.displayTo;
        return input;
    };
    ChangeDisplayToPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'changeDisplayTo',
        })
    ], ChangeDisplayToPipe);
    return ChangeDisplayToPipe;
}());

//# sourceMappingURL=change-display-to.js.map

/***/ }),

/***/ 851:
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

/**
 * Generated class for the ChangeDisplaySvcPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var ChangeDisplaySvcPipe = /** @class */ (function () {
    function ChangeDisplaySvcPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    ChangeDisplaySvcPipe.prototype.transform = function (input, pdaParams) {
        var output = "(" + input.trim() + ")";
        if (pdaParams.getSiteId() === 'WADS')
            return "";
        return output;
    };
    ChangeDisplaySvcPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'changeDisplaySvc',
        })
    ], ChangeDisplaySvcPipe);
    return ChangeDisplaySvcPipe;
}());

//# sourceMappingURL=change-display-svc.js.map

/***/ }),

/***/ 852:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GpsdatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the GpsdatePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var GpsdatePipe = /** @class */ (function () {
    function GpsdatePipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    GpsdatePipe.prototype.transform = function (gpsdate, args) {
        gpsdate = gpsdate || '';
        var ldate = new Date(gpsdate);
        //var oset = ldate.getTimezoneOffset();
        //ldate -= (oset * -1) * 60 * 1000;
        //var newdate = new Date(ldate);
        //return newdate.toLocaleTimeString();
        return ldate.toLocaleTimeString();
    };
    GpsdatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'gpsdate',
        })
    ], GpsdatePipe);
    return GpsdatePipe;
}());

//# sourceMappingURL=gpsdate.js.map

/***/ }),

/***/ 853:
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

/**
 * Generated class for the KeysPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var KeysPipe = /** @class */ (function () {
    function KeysPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    KeysPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            keys.push({ key: key, value: value[key] });
        }
        return keys;
    };
    KeysPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'keys',
        })
    ], KeysPipe);
    return KeysPipe;
}());

//# sourceMappingURL=keys.js.map

/***/ }),

/***/ 859:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_launch_navigator__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_sdk__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_sqlite_service_sqlite_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_config_service_config_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_siteconfig_service_siteconfig_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_pdaparams_service_pdaparams_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_gps_service_gps_service__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_platform_ready_service_platform_ready_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_exit_service_exit_service__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_shared_service_shared_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_device_service_device_service__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_message_service_message_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_job_service_job_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_jsea_service_jsea_service__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_sod_service_sod_service__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_push_service_push_service__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_connectivity_monitor_connectivity_monitor__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_navigation_service_navigation_service__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_log_service_log_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__app_app_component__ = __webpack_require__(465);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






















var DevicePage = /** @class */ (function () {
    function DevicePage(navCtrl, navParams, platformReady, configService, logger, pdaParams, gpsService, exitService, deviceService, sharedService, storage, alertCtrl, siteConfig, messageService, jobService, jseaService, sodService, conMonService, pushService, navigatorService, navigatorPlugin, app, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platformReady = platformReady;
        this.configService = configService;
        this.logger = logger;
        this.pdaParams = pdaParams;
        this.gpsService = gpsService;
        this.exitService = exitService;
        this.deviceService = deviceService;
        this.sharedService = sharedService;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.siteConfig = siteConfig;
        this.messageService = messageService;
        this.jobService = jobService;
        this.jseaService = jseaService;
        this.sodService = sodService;
        this.conMonService = conMonService;
        this.pushService = pushService;
        this.navigatorService = navigatorService;
        this.navigatorPlugin = navigatorPlugin;
        this.app = app;
        this.platform = platform;
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
        this.logParams = { site: this.pdaParams.getSiteId(), driver: this.pdaParams.getDriverId(), fn: 'DevicePage' };
        this.log = this.logger.getInstance(this.logParams);
        this.availableMapApps = [];
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
        this.toggleDesktopBrowserScrolling = function () {
            _this.sharedService.setDesktopBrowserScrolling(!_this.sharedService.setDesktopBrowserScrolling);
        };
        this.pushRegister = function () {
            _this.pushService.registerForPush();
        };
        this.clearNavUserChoice = function () {
            _this.navigatorService.clearUserChoice();
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
                            //if (!this.sharedService.desktopTesting) {
                            _this.storage.clear();
                            if (_this.platform.is('cordova') && window.sqlitePlugin)
                                _this.storage.closeDB();
                            //}
                            // TODO -  clear images if required - see /app/strongloop/loopback-clientservices-osc-images/client/js/deviceCtrl.js           
                            _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_21__app_app_component__["a" /* MyApp */]);
                            //document.location.href = 'index.html';
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
                ],
                enableBackdropDismiss: false
            });
            confirmPopup.present();
        };
        this.reloadSiteConfig = function () {
            _this.siteConfig.deleteLocalConfigs();
            _this.log.info("Local Configs deleted!");
            var result$ = _this.siteConfig
                .loadAllConfigsFromServer()
                .subscribe(function (result) {
                _this.log.debug("Site Config Reloaded!");
                var alert = _this.alertCtrl.create({
                    title: 'Site Config',
                    subTitle: 'Site Config Reloaded...',
                    buttons: ['OK'],
                    enableBackdropDismiss: false
                });
                alert.present();
                _this.ionViewWillEnter();
            }, function (error) {
                _this.showError("Unable to load Site Configs.Please check your connection.");
                return;
            });
        };
        this.clearSqliteStorage = function () {
            var confirmPopup = _this.alertCtrl.create({
                title: 'Clear Sqlite Storage',
                message: 'This will clear all data from Sqlite Storage.  Are you sure you want to do this?',
                buttons: [
                    {
                        text: 'Yes',
                        handler: function () {
                            if (!_this.sharedService.desktopTesting) {
                                _this.storage.clear().then(function (val) {
                                    // TODO -  clear images if required - see /app/strongloop/loopback-clientservices-osc-images/client/js/deviceCtrl.js   
                                    if (val)
                                        _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_21__app_app_component__["a" /* MyApp */]);
                                    else {
                                        console.log("Error in clearing the sqlite storage:" + val);
                                        _this.log.error("Error in clearing the sqlite storage:" + val);
                                    }
                                    //return false;
                                });
                            }
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
                ],
                enableBackdropDismiss: false
            });
            confirmPopup.present();
        };
        this.clearLocalStorage = function () {
            var confirmPopup = _this.alertCtrl.create({
                title: 'Clear Local Storage',
                message: 'This will clear all data from Local Storage.  Are you sure you want to do this?',
                buttons: [
                    {
                        text: 'Yes',
                        handler: function () {
                            localStorage.clear();
                            // TODO -  clear images if required - see /app/strongloop/loopback-clientservices-osc-images/client/js/deviceCtrl.js           
                            //this.app.getRootNav().setRoot(MyApp);
                            var alert = _this.alertCtrl.create({
                                title: 'Restart App',
                                subTitle: 'Please restart the app.',
                                buttons: ['OK'],
                                enableBackdropDismiss: false
                            });
                            alert.present();
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
                ],
                enableBackdropDismiss: false
            });
            confirmPopup.present();
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
            _this.navCtrl.push("ChangePage").catch(function (err) {
                //this.log.info("Error pushing ChangePage:" + err);
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
        };
        this.setSODDate = function () {
            _this.sodService.setSODDate();
            _this.localStorageList = _this.localStorageUsage();
        };
        this.username = navParams.data;
        //console.log("DevicePage loading...");
        __WEBPACK_IMPORTED_MODULE_3__shared_sdk__["b" /* LoopBackConfig */].setBaseURL(configService.apiURL);
        __WEBPACK_IMPORTED_MODULE_3__shared_sdk__["b" /* LoopBackConfig */].setApiVersion(configService.API_VERSION);
        this.clientConfig = this.configService.getClientConfig();
        this.appConfig = this.configService.appConfig;
        this.conMonService.isConnected.subscribe(function (res) {
            _this.sharedService.isOnline = res;
        });
        /*  this.conMonService.networkType.subscribe(res => {
           this.sharedService.networkType = res;
         }); */
        //Store GPS Defaults
        this.def_gps_stationaryRadius = pdaParams.gps_stationaryRadius;
        this.def_gps_stopOnStillActivity = pdaParams.gps_stopOnStillActivity;
        this.def_gps_fastestInterval = pdaParams.gps_fastestInterval;
        this.def_gps_stopOnTerminate = pdaParams.gps_stopOnTerminate;
        this.def_gps_interval = pdaParams.gps_interval;
        this.def_gps_distanceFilter = pdaParams.gps_distanceFilter;
        this.def_gps_activitiesInterval = pdaParams.gps_activitiesInterval;
    } //Constructor ends
    DevicePage.prototype.ionViewWillEnter = function () {
        /*    this.storage.sqliteStorageList().then((rows: any) => {
             this.sqliteStorageList = rows;
       
             for (let i = 0; i < this.sqliteStorageList.length; i++) {
               console.log("item: " + this.sqliteStorageList(i).item + ", ItemValue: " + this.sqliteStorageList(i).itemvalue);
               console.log("-------======================----------");
             }
       
           }); */
        var _this = this;
        //set the tab string in shared-service
        this.sharedService.tab = "Device";
        this.log.info("In the Device Tab.");
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
            this.build = this.configService.appConfig.build;
            //this.fullreplication = lbclient.fullreplication.fullReplication;
            this.device = this.deviceService.getDevice();
        }
        this.usedStorage = Math.round(JSON.stringify(localStorage).length / 1024) + " KB";
        this.localStorageList = this.localStorageUsage();
        /*  this.navigatorPlugin.appSelection.userChoice.get((app) => {
           this.favouriteMapApp = this.navigatorPlugin.getAppDisplayName(app);
         }); */
        this.navigatorPlugin.availableApps().then(function (results) {
            for (var app in results) {
                _this.availableMapApps.push(_this.navigatorPlugin.getAppDisplayName(app) + (results[app] ? " is" : " isn't") + " available");
            }
        });
    }; // ionViewWillEnter() ends
    DevicePage.prototype.showError = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: text,
            buttons: ['OK'],
            enableBackdropDismiss: false
        });
        alert.present();
    };
    DevicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-device',template:/*ion-inline-start:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/device/device.html"*/'<!--\n\n  Generated template for the DevicePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-buttons left>\n\n      <span [ngSwitch]="this.sharedService.loginFlag">\n\n        <ion-badge class="common-border" color="secondary" *ngSwitchCase="true"> Logged In</ion-badge>\n\n        <ion-badge class="common-border" color="danger" *ngSwitchCase="false"> Logged Off</ion-badge>\n\n      </span>\n\n    </ion-buttons>\n\n    <ion-title>DEVICE</ion-title>\n\n    <ion-buttons right>\n\n      <!-- <ion-badge class="common-border" color="danger" *ngIf="newMessageCount">{{newMessageCount}}</ion-badge> -->\n\n      <ion-badge class="common-border" color="danger"> Driver # {{driverId}}</ion-badge>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content [ngClass]="{ \'overflow-scroll\': desktopBrowserScrolling}" text-wrap>\n\n\n\n\n\n\n\n  <ion-card>\n\n    <ion-list>\n\n      <ion-list-header class="ion-list-header" color="primary">\n\n        Driver Number: {{devicectrl.drivernum}}\n\n      </ion-list-header>\n\n\n\n      <ion-item text-wrap>\n\n        <h3>** WARNING **</h3>\n\n        <p><b>Do not change any of these values unless advised by support</b></p>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-card>\n\n\n\n  <ion-list>\n\n    <ion-list-header class="ion-list-header" color="primary">\n\n      App properties - v{{version}}\n\n    </ion-list-header>\n\n\n\n    <ion-item class="bodytext">\n\n      Version :\n\n      <span class="item-note" item-end>\n\n        {{version}}\n\n      </span>\n\n    </ion-item>\n\n\n\n    <ion-item class="bodytext">\n\n      Build :\n\n      <span class="item-note" item-end>\n\n        {{build}}\n\n      </span>\n\n    </ion-item>\n\n\n\n    <ion-item class="bodytext">\n\n      <ion-label>GPS Active</ion-label>\n\n      <ion-toggle [(ngModel)]="devicectrl.isGpsWorking" [disabled]="true"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <ion-item class="bodytext">\n\n      <ion-label>Device Ready</ion-label>\n\n      <ion-toggle [(ngModel)]="devicectrl.isDeviceReady" [disabled]="true"></ion-toggle>\n\n    </ion-item>\n\n\n\n\n\n    <ion-item class="bodytext">\n\n      <ion-label>Show GPS Alerts</ion-label>\n\n      <ion-toggle [(ngModel)]="devicectrl.showGpsAlerts"\n\n        (ngModelChange)="updateShowGpsAlerts(devicectrl.showGpsAlerts)"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <ion-item class="bodytext">\n\n      <ion-label>GPS To Server</ion-label>\n\n      <ion-toggle [(ngModel)]="devicectrl.sendGps" (ngModelChange)="updateSendGps(devicectrl.sendGps)"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <ion-item class="bodytext">\n\n      <ion-label> Reg\'d For Push</ion-label>\n\n      <ion-toggle [(ngModel)]="devicectrl.registeredForPush" [disabled]="true"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <button ion-item class="item-button-right bodytext" (click)="sharedService.showSpinner();pushRegister()">\n\n      Register for Push\n\n    </button>\n\n\n\n    <!--  <button ion-item class="item-button-right" (click)="pushDeRegister()">\n\n      UnRegister from Push\n\n    </button> -->\n\n\n\n    <button ion-item class="item-button-right bodytext" (click)="sharedService.showSpinner();clearNavUserChoice()">\n\n      Clear Navigator Preference\n\n    </button>\n\n\n\n    <ion-item class="bodytext">\n\n      <ion-label> Desktop Scrolling Mode</ion-label>\n\n      <ion-toggle [(ngModel)]="desktopBrowserScrolling" (ngModelChange)="toggleDesktopBrowserScrolling()"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <ion-item class="bodytext">\n\n      <ion-label>Multileg</ion-label>\n\n      <ion-toggle [(ngModel)]="pdaParams.multileg"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <ion-item class="bodytext">\n\n      <ion-label>Local job display</ion-label>\n\n      <ion-toggle [(ngModel)]="pdaParams.jobdisplay"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <ion-item class="bodytext">\n\n      <ion-label>Multi job select</ion-label>\n\n      <ion-toggle [(ngModel)]="pdaParams.multiSelect"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <ion-item class="bodytext">\n\n      <ion-label>Always attempt foreground GPS even if logged off</ion-label>\n\n      <ion-toggle [(ngModel)]="pdaParams.alwaysGetGPS"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <ion-item class="bodytext">\n\n      <ion-label> Query one date only</ion-label>\n\n      <ion-toggle [(ngModel)]="pdaParams.jobDetailOneDayOnly"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <ion-item class="bodytext">\n\n      <ion-label>Auto image upload</ion-label>\n\n      <ion-toggle [(ngModel)]="pdaParams.imageUpload"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <!--     <ion-item class="bodytext">\n\n      <ion-label> Status bar overlays WebView</ion-label>\n\n      <ion-toggle [(ngModel)]="this.checked" (ngModelChange)="setStatusBarOverlay()"></ion-toggle>\n\n    </ion-item> -->\n\n\n\n\n\n    <ion-item class="bodytext">\n\n      <ion-label> Show loading messages</ion-label>\n\n      <ion-toggle [(ngModel)]="pdaParams.showLoading"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <button ion-item class="item-button-right bodytext" (click)="sharedService.showSpinner();viewChangeData()">\n\n      View change data\n\n    </button>\n\n\n\n    <ion-item class="bodytext">\n\n      <ion-label>Debug Mode</ion-label>\n\n      <ion-toggle [(ngModel)]="pdaParams.debugMode" (ngModelChange)="pdaParams.setDebugMode(pdaParams.debugMode)">\n\n      </ion-toggle>\n\n    </ion-item>\n\n\n\n    <ion-item *ngIf="pdaParams.debugMode" class="bodytext">\n\n      <ion-label> Full Replication</ion-label>\n\n      <ion-toggle [(ngModel)]="pdaParams.fullreplication"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <ion-item *ngIf="pdaParams.debugMode" class="bodytext" type="item-text-wrap" text-wrap>\n\n      Available Map Apps :\n\n      <span class="item-note" item-end>\n\n\n\n        <ul>\n\n          <li *ngFor="let app of availableMapApps">\n\n            {{app}}\n\n          </li>\n\n        </ul>\n\n      </span>\n\n    </ion-item>\n\n\n\n    <!-- <ion-item *ngIf="pdaParams.debugMode" class="bodytext">\n\n      Favourite Map App :\n\n      <span class="item-note" item-end>\n\n        {{favouriteMapApp}}\n\n      </span>\n\n    </ion-item> -->\n\n\n\n\n\n    <ion-item class="bodytext">\n\n      <ion-label> Enable experimental features</ion-label>\n\n      <ion-toggle [(ngModel)]="pdaParams.experimental"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <ion-item *ngIf="pdaParams.experimental" class="bodytext">\n\n      <ion-label>Mutliple deliveries one POD</ion-label>\n\n      <ion-toggle [(ngModel)]="pdaParams.pda_deliver_all"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <ion-item *ngIf="pdaParams.experimental" class="bodytext">\n\n      <ion-label>Additional job statuses</ion-label>\n\n      <ion-toggle [(ngModel)]="pdaParams.pda_full_statuses"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <ion-item *ngIf="pdaParams.experimental" class="bodytext">\n\n      <ion-label> Images</ion-label>\n\n      <ion-toggle [(ngModel)]="pdaParams.pda_images"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <ion-item *ngIf="pdaParams.experimental" class="bodytext">\n\n      <ion-label> Notes</ion-label>\n\n      <ion-toggle [(ngModel)]="pdaParams.pda_notes"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <ion-item *ngIf="pdaParams.experimental" class="bodytext">\n\n      <ion-label> Sync DL</ion-label>\n\n      <ion-toggle [(ngModel)]="pdaParams.syncDL"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <ion-item *ngIf="pdaParams.experimental" class="bodytext">\n\n      <ion-label>JSEA applicable</ion-label>\n\n      <ion-toggle [(ngModel)]="pdaParams.pda_jsea_on"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <ion-item *ngIf="pdaParams.experimental" class="bodytext">\n\n      <ion-label>Mandatory Photos</ion-label>\n\n      <ion-toggle [(ngModel)]="pdaParams.pda_mandatory_photos"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <ion-item *ngIf="pdaParams.experimental" class="bodytext">\n\n      <ion-label>Disable Background Sync</ion-label>\n\n      <ion-toggle [(ngModel)]="pdaParams.pda_disable_background_sync"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <ion-item *ngIf="pdaParams.experimental" class="bodytext">\n\n      <ion-label>Disable Device Diagnostics</ion-label>\n\n      <ion-toggle [(ngModel)]="pdaParams.pda_disable_device_diagnostics"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <ion-item *ngIf="pdaParams.experimental" class="bodytext">\n\n      <ion-label>Disable Device Diagnostics & Background GPS when drivers logs off:</ion-label>\n\n      <ion-toggle [(ngModel)]="pdaParams.pda_disable_diagnostics_bgps_on_logoff"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <!-- TODO - make this editable -->\n\n    <ion-item class="bodytext" *ngIf="pdaParams.experimental">\n\n      Image poll time :\n\n      <span class="item-note" item-end>\n\n        {{pdaParams.imagePollTime}}\n\n      </span>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <span *ngIf="pdaParams.debugMode">\n\n    <ion-list>\n\n      <ion-list-header class="ion-list-header" color="primary">\n\n        Config\n\n      </ion-list-header>\n\n\n\n      <ion-item class="bodytext">\n\n        Client ID :\n\n        <span class="item-note" item-end>\n\n          {{clientConfig.clientId}}\n\n        </span>\n\n      </ion-item>\n\n\n\n      <ion-item class="bodytext">\n\n        Server IP :\n\n        <span class="item-note" item-end>\n\n          {{clientConfig.serverIP}}:{{clientConfig.serverPort}}\n\n        </span>\n\n      </ion-item>\n\n      <ion-item class="bodytext">\n\n        Logger IP :\n\n        <span class="item-note" item-end>\n\n          {{appConfig.logServerIP}}:{{appConfig.logServerPort}}\n\n        </span>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <ion-list>\n\n      <ion-list-header class="ion-list-header" color="primary">\n\n        Device Reset\n\n      </ion-list-header>\n\n\n\n      <button ion-item class="item-button-right bodytext" (click)="sharedService.showSpinner();resetApp()">\n\n        Reset app (deletes all data)\n\n      </button>\n\n\n\n      <button ion-item class="item-button-right bodytext" (click)="sharedService.showSpinner();clearChangeData()">\n\n        Clear change data\n\n      </button>\n\n\n\n      <button ion-item class="item-button-right bodytext" (click)="sharedService.showSpinner();deleteOldJobs()">\n\n        Delete old jobs\n\n      </button>\n\n\n\n      <button ion-item class="item-button-right bodytext" (click)="sharedService.showSpinner();deleteOldJSEA()">\n\n        Delete old JSEA\n\n      </button>\n\n\n\n      <button ion-item class="item-button-right bodytext" (click)="sharedService.showSpinner();clearSODDate()">\n\n        SOD testing - clear date\n\n      </button>\n\n\n\n      <button ion-item class="item-button-right bodytext" (click)="sharedService.showSpinner();setSODDate()">\n\n        SOD testing - set date yesterday\n\n      </button>\n\n    </ion-list>\n\n\n\n  </span>\n\n\n\n\n\n\n\n  <ion-list>\n\n    <ion-list-header class="ion-list-header" color="primary">\n\n      Database\n\n    </ion-list-header>\n\n\n\n    <button ion-item class="item-button-right bodytext" (click)="sharedService.showSpinner();reloadSiteConfig()">\n\n      Reload Site Config\n\n    </button>\n\n\n\n    <button ion-item class="item-button-right bodytext" (click)="sharedService.showSpinner();clearLocalStorage()">\n\n      Clear Local Storage\n\n    </button>\n\n\n\n    <!-- <button ion-item class="item-button-right bodytext" (click)="sharedService.showSpinner();clearSqliteStorage()">\n\n      Clear Sqlite Storage\n\n    </button> -->\n\n\n\n    <ion-item class="bodytext">\n\n      Local Storage usage :\n\n      <span class="item-note" item-end>\n\n        {{usedStorage}}\n\n      </span>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <!--  <ion-list>\n\n    <ion-list-header class="ion-list-header" color="primary">\n\n      Sqlite Storage Contents\n\n    </ion-list-header>\n\n    <ion-item class="bodytext" *ngFor="let entr of sqliteStorageList;let i=index;)">\n\n      {{entr.item}} :\n\n      <span class="item-note" style="display:block">\n\n        {{entr.itemvalue}}\n\n      </span>\n\n    </ion-item>\n\n  </ion-list> -->\n\n\n\n  <ion-list>\n\n    <ion-list-header class="ion-list-header" color="primary">\n\n      Local Storage Contents\n\n    </ion-list-header>\n\n\n\n    <ng-container *ngFor="let entr of (localStorageList | keys)">\n\n      <ion-item class="bodytext" *ngIf="entr.key != \'jobMetadata\'">\n\n        {{entr.key}} :\n\n        <span class="item-note" style="display:block">\n\n          {{entr.value}}\n\n        </span>\n\n      </ion-item>\n\n    </ng-container>\n\n  </ion-list>\n\n\n\n\n\n\n\n\n\n  <ion-list>\n\n    <ion-list-header class="ion-list-header" color="primary">\n\n      Network properties\n\n    </ion-list-header>\n\n\n\n    <!--     <ion-item class="bodytext">\n\n      <ion-label>Connected</ion-label>\n\n      <ion-toggle [(ngModel)]="isConnected" (ngModelChange)="toggleNetworkConnection()"> </ion-toggle>\n\n    </ion-item> -->\n\n\n\n\n\n    <ion-item class="bodytext">\n\n      <ion-label>Online : </ion-label>\n\n      <ion-toggle [(ngModel)]="sharedService.isOnline" [disabled]="true"> </ion-toggle>\n\n    </ion-item>\n\n\n\n\n\n    <ion-item class="bodytext">\n\n      Network type :\n\n      <span class="item-note" item-end>\n\n        {{sharedService.networkType}}\n\n      </span>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n  <!-- Background GPS properties -->\n\n  <ion-list *ngIf="pdaParams.debugMode">\n\n    <ion-list-header class="ion-list-header" color="primary">\n\n      Background GPS properties\n\n    </ion-list-header>\n\n\n\n    <!--   <ion-item class="item item-select">\n\n      <ion-label>\n\n        Accuracy (current {{pdaParams.gps_desiredAccuracy}})\n\n      </ion-label>\n\n      <ion-select [(ngModel)]="pdaParams.gps_desiredAccuracy">\n\n        <ion-option value="0">0</ion-option>\n\n        <ion-option value="10">10</ion-option>\n\n        <ion-option value="100">100</ion-option>\n\n        <ion-option value="1000">1000</ion-option>\n\n      </ion-select>\n\n    </ion-item> -->\n\n\n\n\n\n    <ion-item class="bodytext">\n\n      <ion-label>Stationary Radius (metres): Default is {{def_gps_stationaryRadius}}</ion-label>\n\n      <ion-badge item-end>{{pdaParams.gps_stationaryRadius}}</ion-badge>\n\n\n\n\n\n      <ion-range [(ngModel)]="pdaParams.gps_stationaryRadius" min="0" max="1000">\n\n        <ion-icon range-left name="remove"></ion-icon>\n\n        <ion-icon range-right name="add"></ion-icon>\n\n      </ion-range>\n\n    </ion-item>\n\n\n\n    <ion-item class="bodytext">\n\n      <ion-label> Distance Filter (metres): Default is {{def_gps_distanceFilter}}</ion-label>\n\n      <ion-badge item-end>{{pdaParams.gps_distanceFilter}}</ion-badge>\n\n\n\n      <ion-range [(ngModel)]="pdaParams.gps_distanceFilter" min="0" max="1000">\n\n        <ion-icon range-left name="remove"></ion-icon>\n\n        <ion-icon range-right name="add"></ion-icon>\n\n      </ion-range>\n\n    </ion-item>\n\n\n\n    <ion-item class="bodytext">\n\n      <ion-label>\n\n        Background GPS Interval (milliseconds): Default is {{def_gps_interval}}</ion-label>\n\n      <ion-badge item-end>{{pdaParams.gps_interval}}</ion-badge>\n\n\n\n      <ion-range [(ngModel)]="pdaParams.gps_interval" min="0" max="180000">\n\n        <ion-icon range-left name="remove"></ion-icon>\n\n        <ion-icon range-right name="add"></ion-icon>\n\n      </ion-range>\n\n    </ion-item>\n\n\n\n    <ion-item class="bodytext">\n\n      <ion-label>Background GPS Debug</ion-label>\n\n      <ion-toggle [(ngModel)]="pdaParams.gps_debug"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <ion-item class="bodytext">\n\n      <ion-label>Background GPS StopOnTerminate: Default is {{def_gps_stopOnTerminate}}</ion-label>\n\n      <ion-toggle [(ngModel)]="pdaParams.gps_stopOnTerminate"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <ion-item class="bodytext">\n\n      <ion-label>\n\n        Background GPS fastestInterval (milliseconds): Default is {{def_gps_fastestInterval}}</ion-label>\n\n      <ion-badge item-end>{{pdaParams.gps_fastestInterval}}</ion-badge>\n\n\n\n      <ion-range [(ngModel)]="pdaParams.gps_fastestInterval" min="0" max="180000">\n\n        <ion-icon range-left name="remove"></ion-icon>\n\n        <ion-icon range-right name="add"></ion-icon>\n\n      </ion-range>\n\n    </ion-item>\n\n\n\n\n\n    <ion-item class="bodytext">\n\n      <ion-label>\n\n        Background GPS activitiesInterval (milliseconds): Default is {{def_gps_activitiesInterval}}</ion-label>\n\n      <ion-badge item-end>{{pdaParams.gps_activitiesInterval}}</ion-badge>\n\n\n\n      <ion-range [(ngModel)]="pdaParams.gps_activitiesInterval" min="0" max="180000">\n\n        <ion-icon range-left name="remove"></ion-icon>\n\n        <ion-icon range-right name="add"></ion-icon>\n\n      </ion-range>\n\n    </ion-item>\n\n\n\n    <ion-item class="bodytext">\n\n      <ion-label>stopOnStillActivity: Default is {{def_gps_stopOnStillActivity}}</ion-label>\n\n      <ion-toggle [(ngModel)]="pdaParams.gps_stopOnStillActivity"></ion-toggle>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n  <!-- Background GPS code ends -->\n\n\n\n\n\n  <ion-list>\n\n    <ion-list-header class="ion-list-header" color="primary">\n\n      Device properties\n\n    </ion-list-header>\n\n    <ion-item class="bodytext" *ngFor="let dev of (device | keys )">\n\n      {{dev.key | titlecase }} :\n\n      <span class="item-note" item-end>\n\n        {{dev.value }}\n\n      </span>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/device/device.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_9__providers_platform_ready_service_platform_ready_service__["a" /* PlatformReadyServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_config_service_config_service__["a" /* ConfigServiceProvider */], __WEBPACK_IMPORTED_MODULE_20__providers_log_service_log_service__["a" /* LogServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_gps_service_gps_service__["a" /* GpsServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_exit_service_exit_service__["a" /* ExitServiceProvider */], __WEBPACK_IMPORTED_MODULE_12__providers_device_service_device_service__["a" /* DeviceServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_shared_service_shared_service__["a" /* SharedServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_sqlite_service_sqlite_service__["a" /* SqliteServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__providers_siteconfig_service_siteconfig_service__["a" /* SiteconfigServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_13__providers_message_service_message_service__["a" /* MessageServiceProvider */], __WEBPACK_IMPORTED_MODULE_14__providers_job_service_job_service__["a" /* JobServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_15__providers_jsea_service_jsea_service__["a" /* JseaServiceProvider */], __WEBPACK_IMPORTED_MODULE_16__providers_sod_service_sod_service__["a" /* SodServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_18__providers_connectivity_monitor_connectivity_monitor__["a" /* ConnectivityMonitorProvider */], __WEBPACK_IMPORTED_MODULE_17__providers_push_service_push_service__["a" /* PushServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_19__providers_navigation_service_navigation_service__["a" /* NavigationServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], DevicePage);
    return DevicePage;
}());

//# sourceMappingURL=device.js.map

/***/ })

});
//# sourceMappingURL=2.js.map