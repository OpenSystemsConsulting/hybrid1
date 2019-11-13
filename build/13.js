webpackJsonp([13],{

/***/ 834:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePageModule", function() { return ChangePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__change__ = __webpack_require__(858);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChangePageModule = /** @class */ (function () {
    function ChangePageModule() {
    }
    ChangePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__change__["a" /* ChangePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__change__["a" /* ChangePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__change__["a" /* ChangePage */]
            ]
        })
    ], ChangePageModule);
    return ChangePageModule;
}());

//# sourceMappingURL=change.module.js.map

/***/ }),

/***/ 858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_sdk__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_log_service_log_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_pdaparams_service_pdaparams_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_config_service_config_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_connectivity_monitor_connectivity_monitor__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_shared_service_shared_service__ = __webpack_require__(23);
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
var ChangePage = /** @class */ (function () {
    function ChangePage(navCtrl, navParams, pdaParams, logger, configService, conMonService, sharedService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pdaParams = pdaParams;
        this.logger = logger;
        this.configService = configService;
        this.conMonService = conMonService;
        this.sharedService = sharedService;
        this.logParams = { site: this.pdaParams.getSiteId(), driver: this.pdaParams.getDriverId(), fn: 'ChangePage' };
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
            return _this.sharedService.isOnline;
        };
        __WEBPACK_IMPORTED_MODULE_2__shared_sdk__["b" /* LoopBackConfig */].setBaseURL(this.configService.apiURL);
        __WEBPACK_IMPORTED_MODULE_2__shared_sdk__["b" /* LoopBackConfig */].setApiVersion(this.configService.API_VERSION);
        this.conMonService.isConnected.subscribe(function (res) {
            _this.sharedService.isOnline = res;
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
    ChangePage.prototype.ionViewWillEnter = function () {
        //set the tab string in shared-service
        this.sharedService.tab = "Change Page";
    };
    ChangePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-change',template:/*ion-inline-start:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/change/change.html"*/'<!--\n\n  Generated template for the ChangePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n      <ion-buttons left>\n\n          <span [ngSwitch]="this.sharedService.loginFlag">      \n\n            <ion-badge class="common-border"  color="secondary" *ngSwitchCase="true"> Logged In</ion-badge>\n\n            <ion-badge class="common-border"  color="danger" *ngSwitchCase="false"> Logged Off</ion-badge>\n\n          </span>\n\n        </ion-buttons>\n\n    <ion-title>CHANGE</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding direction="xy" [ngClass]="{ \'overflow-scroll\': (desktopBrowserScrolling == true) }" text-wrap>\n\n\n\n\n\n  <ion-card *ngIf="changes" class="ion-card">\n\n    <ion-card-header text-wrap>\n\n      <h1>Local Change List</h1>\n\n      <p *ngIf="changes.length">\n\n        A list of all changes made to models in local storage.\n\n      </p>\n\n      <strong *ngIf="changes.length === 0">\n\n        No local changes have been made.\n\n      </strong>\n\n    </ion-card-header>\n\n\n\n    <ion-grid *ngIf="changes.length" class="iongrid">\n\n      <ion-row class="ionrowheader">\n\n        <ion-col class="ioncol" col-3>Model ID</ion-col>\n\n        <ion-col class="ioncol" col-2>Type</ion-col>\n\n        <ion-col class="ioncol" col-2>Checkpoint</ion-col>\n\n        <ion-col class="ioncol" col-3>Revision</ion-col>\n\n        <ion-col class="ioncol" col-2>Prev Revision</ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row *ngFor="let change of changes">\n\n        <ion-col class="ioncol" col-3>{{change.modelId}}</ion-col>\n\n        <ion-col class="ioncol" col-2>{{change.type()}}</ion-col>\n\n        <ion-col class="ioncol" col-2>{{change.checkpoint}}</ion-col>\n\n        <ion-col class="ioncol" col-3>{{change.rev}}</ion-col>\n\n        <ion-col class="ioncol" col-2>{{change.prev}}</ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-card>\n\n\n\n  <ion-card *ngIf="diff" class="ion-card">\n\n    <ion-card-header text-wrap>\n\n      <h1>Local to Server Deltas</h1>\n\n      <p *ngIf="diff.deltas.length">\n\n        Below is list of changes required to replicate local data to the server.\n\n      </p>\n\n      <strong *ngIf="diff.deltas.length === 0">No changes required to replicate the local data to the server.</strong>\n\n    </ion-card-header>\n\n\n\n    <ion-grid *ngIf="diff.deltas.length" class="iongrid">\n\n      <ion-row class="ionrowheader">\n\n        <ion-col class="ioncol" col-4>Model ID</ion-col>\n\n        <ion-col class="ioncol" col-4>Revision</ion-col>\n\n        <ion-col class="ioncol" col-4>Prev Revision</ion-col>\n\n      </ion-row>\n\n      <ion-row *ngFor="let delta of diff.deltas">\n\n        <ion-col class="ioncol" col-4>{{delta.modelId}}</ion-col>\n\n        <ion-col class="ioncol" col-4>{{delta.rev}}</ion-col>\n\n        <ion-col class="ioncol" col-4>{{delta.prev}}</ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-card>\n\n\n\n  <ion-card *ngIf="jobs" class="ion-card">\n\n    <ion-card-header text-wrap>\n\n      <h1>Local Storage Data</h1>\n\n      <strong *ngIf="jobs.length === 0">\n\n        There is no data in local storage.\n\n      </strong>\n\n    </ion-card-header>\n\n\n\n    <ion-grid *ngIf="jobs.length" class="iongrid">\n\n      <ion-row class="ionrowheader">\n\n        <ion-col class="ioncol" col-3>Model ID</ion-col>\n\n        <ion-col class="ioncol" col-3>Sequence</ion-col>\n\n        <ion-col class="ioncol" col-2>Client</ion-col>\n\n        <ion-col class="ioncol" col-2>Status</ion-col>\n\n        <ion-col class="ioncol" col-2>Driver</ion-col>\n\n      </ion-row>\n\n      <ion-row *ngFor="let job of jobs">\n\n        <ion-col class="ioncol" col-3>{{job.getId()}}</ion-col>\n\n        <ion-col class="ioncol" col-3>{{job.mobjobSeq}}</ion-col>\n\n        <ion-col class="ioncol" col-2>{{job.mobjobClientCode}}</ion-col>\n\n        <ion-col class="ioncol" col-2>{{job.mobjobStatus}}</ion-col>\n\n        <ion-col class="ioncol" col-2>{{job.mobjobDriver}}</ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-card>\n\n\n\n  <ion-card *ngIf="diff" class="ion-card">\n\n    <ion-card-header text-wrap>\n\n      <h1>Local to Server Conflicts</h1>\n\n      <p *ngIf="diff.conflicts.length">\n\n        Below is list of changes that cannot be replicated to the server.\n\n      </p>\n\n      <strong *ngIf="diff.conflicts.length === 0">No conflicts</strong>\n\n    </ion-card-header>\n\n\n\n    <ion-grid *ngIf="diff.conflicts.length" class="iongrid">\n\n      <ion-row class="ionrowheader">\n\n        <ion-col class="ioncol" col-4>Model ID</ion-col>\n\n        <ion-col class="ioncol" col-2>Checkpoint</ion-col>\n\n        <ion-col class="ioncol" col-3>Revision</ion-col>\n\n        <ion-col class="ioncol" col-3>Prev Revision</ion-col>\n\n      </ion-row>\n\n      <ion-row *ngFor="let conflict of diff.conflicts">\n\n        <ion-col class="ioncol" col-4>{{conflict.modelId}}</ion-col>\n\n        <ion-col class="ioncol" col-2>{{conflict.checkpoint}}</ion-col>\n\n        <ion-col class="ioncol" col-3>{{conflict.rev}}</ion-col>\n\n        <ion-col class="ioncol" col-3>{{conflict.prev}}</ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-card>\n\n\n\n\n\n  <!--  <footer class="debug" *ngIf="pdaParams.debugMode">\n\n    <button (click)="sync()" [ngClass]="{deltas: needSync}">Sync</button>\n\n    <button (click)="connect()">Connect</button>\n\n    <button (click)="disconnect()">Disconnect</button>\n\n    <button (click)="reload()">Reload jobs</button>\n\n    <button (click)="logLocalStorage()">Log local storage</button>\n\n    <button (click)="clearLocalStorage()">Clear local storage</button>   \n\n    <strong> connected: {{ connected() }} </strong>\n\n  </footer> -->\n\n\n\n\n\n  <ion-card class="iongrid" *ngIf="pdaParams.debugMode">\n\n    <ion-list>\n\n      <button ion-item class="item-button-right" (click)="sync()" [ngClass]="{deltas: needSync}">Sync</button>\n\n      <!--    <button ion-item class="item-button-right" (click)="connect()">Connect</button>\n\n      <button ion-item class="item-button-right" (click)="disconnect()">Disconnect</button> -->\n\n     <!--  <button ion-item class="item-button-right" (click)="reload()">Reload jobs</button> -->\n\n      <button ion-item class="item-button-right" (click)="logLocalStorage()">Log local storage</button>\n\n      <button ion-item class="item-button-right" (click)="clearLocalStorage()">Clear local storage</button>\n\n\n\n      <strong> connected: {{ connected() }} </strong>\n\n    </ion-list>\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/change/change.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_log_service_log_service__["a" /* LogServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_config_service_config_service__["a" /* ConfigServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_connectivity_monitor_connectivity_monitor__["a" /* ConnectivityMonitorProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_shared_service_shared_service__["a" /* SharedServiceProvider */]])
    ], ChangePage);
    return ChangePage;
}());

//# sourceMappingURL=change.js.map

/***/ })

});
//# sourceMappingURL=13.js.map