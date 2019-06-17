webpackJsonp([1],{

/***/ 836:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GpsPageModule", function() { return GpsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gps__ = __webpack_require__(860);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(848);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var GpsPageModule = /** @class */ (function () {
    function GpsPageModule() {
    }
    GpsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__gps__["a" /* GpsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__gps__["a" /* GpsPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__gps__["a" /* GpsPage */]
            ]
        })
    ], GpsPageModule);
    return GpsPageModule;
}());

//# sourceMappingURL=gps.module.js.map

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

/***/ 860:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GpsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_sdk__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config_service_config_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_pdaparams_service_pdaparams_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_gps_audit_service_gps_audit_service__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_gps_service_gps_service__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_shared_service_shared_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_message_service_message_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_log_service_log_service__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var GpsPage = /** @class */ (function () {
    function GpsPage(navCtrl, navParams, pdaParams, configService, gpsAudit, geolocation, logger, messageService, gpsService, sharedService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pdaParams = pdaParams;
        this.configService = configService;
        this.gpsAudit = gpsAudit;
        this.geolocation = geolocation;
        this.logger = logger;
        this.messageService = messageService;
        this.gpsService = gpsService;
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
        this.logParams = { site: this.pdaParams.getSiteId(), driver: this.pdaParams.getDriverId(), fn: 'GPSPage' };
        this.log = this.logger.getInstance(this.logParams);
        this.getGPSIsworking = function () {
            return _this.gpsIsWorking;
        };
        this.showResult = function () {
            return _this.error == "";
        };
        this.username = navParams.data;
        //console.log("GpsPage loading...");
        __WEBPACK_IMPORTED_MODULE_3__shared_sdk__["b" /* LoopBackConfig */].setBaseURL(this.configService.apiURL);
        __WEBPACK_IMPORTED_MODULE_3__shared_sdk__["b" /* LoopBackConfig */].setApiVersion(this.configService.API_VERSION);
    }
    GpsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        //set the tab string in shared-service
        this.sharedService.tab = "GPS";
        this.log.info("In the GPS Tab.");
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
            _this.timestamp = new Date(position.timestamp);
            _this.timestamp = _this.timestamp.toString();
        }).catch(function (err) {
            _this.success = 'FAIL';
            _this.gpsIsWorking = false;
            _this.gpsErrorMess = err.message;
            //this.error = "Failed";
            //this.err =  JSON.stringify(err);
            _this.error = _this.gpsService.getGPSErrors(err);
        });
    };
    GpsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-gps',template:/*ion-inline-start:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/gps/gps.html"*/'<!--\n\n  Generated template for the GpsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-buttons left>\n\n      <span [ngSwitch]="this.sharedService.loginFlag">\n\n        <ion-badge class="common-border" color="secondary" *ngSwitchCase="true"> Logged In</ion-badge>\n\n        <ion-badge class="common-border" color="danger" *ngSwitchCase="false"> Logged Off</ion-badge>\n\n      </span>\n\n    </ion-buttons>\n\n    <ion-title>GPS</ion-title>\n\n    <ion-buttons right>\n\n      <!-- <ion-badge class="common-border" color="danger" *ngIf="newMessageCount">{{newMessageCount}}</ion-badge> -->\n\n      <ion-badge class="common-border" color="danger"> Driver # {{driverId}}</ion-badge>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding text-wrap>\n\n  <ion-card [hidden]="!showResult()">\n\n    <ion-list>\n\n      <ion-list-header class="ion-list-header" color="primary">\n\n        Current position\n\n      </ion-list-header>\n\n      <!-- This should return one row only in a production environment -->\n\n\n\n      <ion-item class="item">\n\n        Latitude:\n\n        <span class="item-note"> {{ position.coords.latitude }} </span>\n\n      </ion-item>\n\n      <ion-item class="item">\n\n        Longitude:\n\n        <span class="item-note"> {{ position.coords.longitude }}</span>\n\n      </ion-item>\n\n      <ion-item class="item">\n\n        Altitude:\n\n        <span class="item-note"> {{ position.coords.altitude }}</span>\n\n      </ion-item>\n\n      <ion-item class="item">\n\n        Accuracy:\n\n        <span class="item-note"> {{ position.coords.accuracy }}</span>\n\n      </ion-item>\n\n      <ion-item class="item">\n\n        Altitude Accuracy:\n\n        <span class="item-note"> {{ position.coords.altitudeAccuracy }}</span>\n\n      </ion-item>\n\n      <ion-item class="item">\n\n        Heading:\n\n        <span class="item-note"> {{ position.coords.heading }}</span>\n\n      </ion-item>\n\n      <ion-item class="item">\n\n        Speed:\n\n        <span class="item-note"> {{ position.coords.speed }} </span>\n\n      </ion-item>\n\n      <ion-item class="item">\n\n        Timestamp:\n\n        <span class="item-note"> {{ timestamp }} </span>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-card>\n\n\n\n  <ion-card [hidden]="showResult()">\n\n    <ion-list>\n\n      <ion-list-header class="ion-list-header" color="primary">\n\n        Oops!! Something went wrong...\n\n      </ion-list-header>\n\n\n\n      <ion-item class="bodytext" >\n\n        <b> {{error}}</b>\n\n        <hr>\n\n\n\n        Please try the following:\n\n        <ul>\n\n          <li>Check if your mobile\'s location is turned on.</li>\n\n          <li>Check if you have given location access to the New TPLUS app.</li>\n\n          <li>Restart the app.</li>\n\n        </ul>     \n\n\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-card>\n\n\n\n\n\n  <ion-card *ngIf="gpshistory != \'\'">\n\n    <ion-list>\n\n      <ion-list-header class="ion-list-header" color="primary">\n\n        GPS History\n\n      </ion-list-header>\n\n      <!-- <ion-item class=item *ngFor="let gps of gpshistory | reverse"> -->\n\n      <ion-item class=item *ngFor="let gps of gpshistory">\n\n        <!-- {{ gps.gps_timestamp | gpsdate }}: {{ gps.gps_latitude }} , {{ gps.gps_longitude }} -->\n\n        {{ gps.gps_timestamp | gpsdate }}: {{ gps.gps_latitude }} , {{ gps.gps_longitude }}\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-card>\n\n\n\n  <ion-card id="debug" *ngIf="debug">\n\n    <ion-list>\n\n      <ion-item>\n\n        <button ion-button item-left color="secondary">BG GPS Start</button>\n\n        <button ion-button item-right color="danger">BG GPS Stop</button>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/gps/gps.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_config_service_config_service__["a" /* ConfigServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_gps_audit_service_gps_audit_service__["a" /* GpsAuditServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_10__providers_log_service_log_service__["a" /* LogServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_message_service_message_service__["a" /* MessageServiceProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_gps_service_gps_service__["a" /* GpsServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_shared_service_shared_service__["a" /* SharedServiceProvider */]])
    ], GpsPage);
    return GpsPage;
}());

//# sourceMappingURL=gps.js.map

/***/ })

});
//# sourceMappingURL=1.js.map