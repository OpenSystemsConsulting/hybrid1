webpackJsonp([6],{

/***/ 844:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdaPageModule", function() { return PdaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pda__ = __webpack_require__(872);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PdaPageModule = /** @class */ (function () {
    function PdaPageModule() {
    }
    PdaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pda__["a" /* PdaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pda__["a" /* PdaPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__pda__["a" /* PdaPage */]
            ]
        })
    ], PdaPageModule);
    return PdaPageModule;
}());

//# sourceMappingURL=pda.module.js.map

/***/ }),

/***/ 872:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PdaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_sdk__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_sdk_services__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_config_service_config_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_log_service_log_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_pdaparams_service_pdaparams_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_shared_service_shared_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_sqlite_service_sqlite_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_app_component__ = __webpack_require__(465);
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
var PdaPage = /** @class */ (function () {
    function PdaPage(navCtrl, navParams, storage, configService, pdaParams, logger, sharedService, TpmPdaController, alertCtrl, iab, app, platform, device) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.configService = configService;
        this.pdaParams = pdaParams;
        this.logger = logger;
        this.sharedService = sharedService;
        this.TpmPdaController = TpmPdaController;
        this.alertCtrl = alertCtrl;
        this.iab = iab;
        this.app = app;
        this.platform = platform;
        this.device = device;
        this.t = this.navCtrl.parent;
        this.clientlog = lbclient.clientlog;
        this.isDriverSetup = true;
        this.loginFlag = this.pdaParams.isDrvLoggedOn();
        this.TpmPdaControllers = [];
        this.TpmRowCount = 0;
        this.logParams = { site: this.pdaParams.getSiteId(), driver: this.pdaParams.getDriverId(), fn: 'PdaPage' };
        this.log = this.logger.getInstance(this.logParams);
        this._filter = {
            "where": { and: [{ "tpmpc_driver_id": this.pdaParams.driverId, "tpmpc_access_allowed": 'Y', "tpmpc_access_registered": 'Y' }] }
        };
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
        this.getTpmPdaControllers = function (filter, flag) {
            _this.TpmPdaController.find(filter).subscribe(function (results) {
                _this.log.info("Returned value from TpmPdaController.find::" + results);
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
                            ],
                            enableBackdropDismiss: false
                        });
                        alert_1.present();
                        _this.isDriverSetup = false;
                    }
                    else
                        _this.isDriverSetup = true;
                }
                else
                    _this.isDriverSetup = true;
                // TODO - need to ensure we have updated scope so in promise somewhere in TpmPdaController.find ??
                var TpmPdaControllerRow = _this.TpmPdaControllers[0]; // should only ever be one
                if (TpmPdaControllerRow) {
                    if (TpmPdaControllerRow.tpmpc_access_registered == 'N') {
                        TpmPdaControllerRow.tpmpc_access_registered = 'Y';
                        TpmPdaControllerRow.tpmpc_last_update_time = new Date().toISOString();
                        _this.TpmPdaController.upsert(TpmPdaControllerRow).subscribe();
                        _this.sharedService.tpmPdaCtlsLoadedSubject.next(true);
                    }
                    _this.storage.set('driverHomeLat', TpmPdaControllerRow.tpmpc_driver_home_lat).then(function (res) {
                        if (res)
                            console.log("driverHomeLat is set");
                        else
                            console.log("driverHomeLat is not set");
                    });
                    _this.log.info("Sqlite Storage : Setting driverHomeLat : " + TpmPdaControllerRow.tpmpc_driver_home_lat);
                    localStorage.setItem('driverHomeLat', TpmPdaControllerRow.tpmpc_driver_home_lat);
                    localStorage.setItem('driverHomeLng', TpmPdaControllerRow.tpmpc_driver_home_lng);
                    _this.storage.set('driverHomeLng', TpmPdaControllerRow.tpmpc_driver_home_lng).then(function (res) {
                        if (res)
                            console.log("driverHomeLng is set");
                        else
                            console.log("driverHomeLng is not set");
                    });
                    _this.log.info("Sqlite Storage : Setting driverHomeLng : " + TpmPdaControllerRow.tpmpc_driver_home_lng);
                }
                if (_this.isDriverSetup && flag) {
                    _this.pdaParams.setDriverInfo(_this.driverId);
                    _this.pdaParams.logoffDriver();
                    localStorage.setItem('firstlogin', 'false');
                    _this.app.getRootNav().setRoot('TabsPage');
                    return;
                }
            });
            //return 1;
        };
        this.updateDriverPrompt = function () {
            if (_this.firstlogin === 'false') {
                var alert_2 = _this.alertCtrl.create({
                    title: 'Update Driver',
                    message: 'You will have to relogin to update the driver. Do you wish to relogin?',
                    buttons: [
                        {
                            text: 'Relogin',
                            handler: function () {
                                localStorage.clear();
                                _this.storage.clear();
                                if (_this.plt.is('cordova') && window.sqlitePlugin)
                                    _this.storage.closeDB();
                                _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_11__app_app_component__["a" /* MyApp */]);
                            }
                        },
                        {
                            text: 'Cancel',
                            handler: function () {
                                //console.log('Cancel clicked');
                                return;
                            }
                        }
                    ],
                    enableBackdropDismiss: false
                });
                alert_2.present();
            }
            else {
                var alert_3 = _this.alertCtrl.create({
                    title: 'Driver #',
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
                                //console.log('Cancel clicked');
                                return;
                            }
                        },
                        {
                            text: 'Update',
                            handler: function (data) {
                                _this.updateDriver(data.drivernum);
                            }
                        }
                    ],
                    enableBackdropDismiss: false
                });
                alert_3.present();
            }
        }; // updateDriverPrompt() ends here
        this.updateDriver = function (driverId) {
            //Create alert        
            if (isNaN(driverId)) {
                var alert_4 = _this.alertCtrl.create({
                    title: 'Driver',
                    message: 'Please enter correct Driver ID.',
                    buttons: [
                        {
                            text: 'OK'
                        }
                    ],
                    enableBackdropDismiss: false
                });
                alert_4.present();
                return;
            }
            _this.driverId = driverId;
            //Save the driverid in sqllite
            _this.storage.set("driverId", _this.driverId).then(function (res) {
                if (res)
                    console.log("driverId is set");
                else
                    console.log("driverId is not set");
            });
            _this.log.info("Sqlite Storage : Setting driverID : " + _this.driverId);
            _this.pdaParams.setDriverInfo(_this.driverId);
            //console.log("================The driver id is===================::" + this.pdaParams.getDriverId());
            // TODO - we need to unregister from push services and reregister with new driver id
            // reset _newfilter as driver id has changed
            var _newfilter = {
                "where": { and: [{ "tpmpc_driver_id": _this.driverId, "tpmpc_access_allowed": 'Y', "tpmpc_access_registered": { neq: "Y" } }] }
            };
            _this.filter = Object.assign({}, _newfilter);
            _this.getTpmPdaControllers(_this.filter, true);
            _this.log.info("Calling getTpmPdaControllers with filter:" + JSON.stringify(_this.filter));
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
        __WEBPACK_IMPORTED_MODULE_3__shared_sdk__["b" /* LoopBackConfig */].setBaseURL(this.configService.apiURL);
        __WEBPACK_IMPORTED_MODULE_3__shared_sdk__["b" /* LoopBackConfig */].setApiVersion(this.configService.API_VERSION);
        this.driverId = this.pdaParams.driverId;
        if (typeof (this.sharedService.loginFlag) == 'undefined')
            this.sharedService.loginFlag = this.pdaParams.isDrvLoggedOn();
        this.firstlogin = localStorage.getItem('firstlogin');
        this.getTpmPdaControllers(this._filter, false);
        this.plt = platform;
    }
    PdaPage.prototype.ionViewWillEnter = function () {
        //set the tab string in shared-service
        this.sharedService.tab = "PDA";
        this.log.info("In the PDA Tab.");
        this.getTpmPdaControllers(this._filter, false);
    };
    PdaPage.prototype.openPrivacyUrl = function (url) {
        var _this = this;
        //this.iab.create(url, "_self");
        var target;
        this.plt.ready().then(function (readySource) {
            _this.osplatform = _this.device.platform;
            if (_this.osplatform != null) {
                _this.osplatform = _this.osplatform.toLowerCase();
                if (_this.osplatform.localeCompare('ios') == 0)
                    target = "_blank"; //android-not ok;IOS-ok
                else
                    target = "_system"; //android-ok;IOS- not ok
            }
            else
                target = "_blank";
            _this.iab.create(url, target, _this.options);
        });
    };
    PdaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pda',template:/*ion-inline-start:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/pda/pda.html"*/'<!--\n\n  Generated template for the PdaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-buttons left>\n\n      <span [ngSwitch]="this.sharedService.loginFlag">\n\n        <ion-badge class="common-border" color="secondary" *ngSwitchCase="true"> Logged In</ion-badge>\n\n        <ion-badge class="common-border" color="danger" *ngSwitchCase="false"> Logged Off</ion-badge>\n\n      </span>\n\n    </ion-buttons>\n\n    <ion-title>PDA </ion-title>\n\n    <ion-buttons right>\n\n      <!-- <ion-badge class="common-border" color="danger" *ngIf="newMessageCount">{{newMessageCount}}</ion-badge> -->\n\n      <ion-badge class="common-border" color="danger"> Driver # {{driverId}}</ion-badge>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content [ngClass]="{ \'overflow-scroll\': (desktopBrowserScrolling == true) }" padding text-wrap>\n\n\n\n  <!-- TODO - if no driver no. configured need to get it -->\n\n  <!--\n\n      <div >\n\n        <form name="driverForm">\n\n          Driver: \n\n          <input type="text" name=driverId" ng-model="pdaParams.driverId" ng-model-options="{ updateOn: \'submit\' }" >\n\n    \n\n          <input type="button" value="Save" ng-click="pdaParams.setDriverInfo(pdaParams.driverId);">\n\n        \n\n          <input type="button" value="Reset" ng-click="pdaParams.clearDriverInfo()">\n\n    \n\n    \n\n        </form>\n\n      </div>\n\n    -->\n\n\n\n\n\n\n\n\n\n  <ion-card [hidden]="!TpmRowCount">\n\n    <ion-list *ngFor="let tpmpdacontroller of TpmPdaControllers">\n\n      <!--\n\n        <ion-item>\n\n            <p>Driver</p>\n\n            <input type="text" ng-model="pdaParams.driverId" >\n\n            <ion-option-button ng-click="pdaParams.setDriverInfo(pdaParams.driverId)">\n\n              Save\n\n            </ion-option-button>\n\n        </ion-item>\n\n    -->\n\n\n\n      <!-- This should return one row only in a production environment -->\n\n      <ion-list-header class="ion-list-header" color="primary">\n\n        Driver # : {{tpmpdacontroller.tpmpc_driver_id}}\n\n      </ion-list-header>\n\n\n\n      <!--   <button ion-button color="primary" block (click)="updateDriverPrompt()">Update Driver</button> -->\n\n\n\n      <ion-item>\n\n        <p>\n\n          <b>IMEI</b>\n\n        </p>\n\n        <p> {{ tpmpdacontroller.tpmpc_imei_id }} </p>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <p>\n\n          <b>Name</b>\n\n        </p>\n\n        <p> {{ tpmpdacontroller.tpmpc_driver_name }} </p>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <p>\n\n          <b>Phone</b>\n\n        </p>\n\n        <p> {{ tpmpdacontroller.tpmpc_phone_num }} </p>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-card>\n\n\n\n  <button ion-button round full icon-start (click)="updateDriverPrompt()" style="min-height: 4rem;">\n\n    <ion-icon name="create"></ion-icon> Update Driver\n\n  </button>\n\n\n\n  <br>\n\n\n\n  <ion-card [hidden]="TpmRowCount">\n\n\n\n    <ion-list>\n\n      <!-- <ion-item> <p> TpmRowCount: {{ TpmRowCount }} </p> </ion-item> -->\n\n      <ion-item>\n\n        <p>Driver not configured or not activated or already registered.</p>\n\n        <p>Please contact office BEFORE updating your driverId below</p>\n\n\n\n        <!-- <button ion-button class="button button-icon ion-compose" (click)="updateDriverPrompt()"> </button> -->\n\n\n\n        <button ion-button icon-start full round class="common-border" (click)="updateDriverPrompt()"\n\n          style="min-height: 4rem;">\n\n          <ion-icon name="create"> </ion-icon> Update Driver\n\n        </button>\n\n\n\n        <!--  <button ion-button color="primary" block (click)="updateDriverPrompt()">Update Driver</button> -->\n\n\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n  </ion-card>\n\n  <!-- </div> -->\n\n\n\n  <!--\n\n      <section id="registration" ng-if="TpmRowCount">\n\n        <button ng-click="pushRegister()">GCM Register</button>\n\n        <button ng-click="pushDeRegister()">GCM Unregister</button>\n\n      </section>\n\n    -->\n\n\n\n  <br />\n\n\n\n  <button ion-button round full style="min-height: 4rem;"\n\n    (click)="sharedService.showSpinner();openPrivacyUrl(\'http://opensyscon.com.au/spa-privacy-policy.html\')">Privacy\n\n    policy</button>\n\n\n\n</ion-content>\n\n\n\n\n\n<!-- modal window for driver no. entry/update -->\n\n<!-- <script id="templates/modal.html" type="text/ng-template">\n\n          <ion-modal-view>\n\n            <ion-header-bar class="bar bar-header bar-positive">\n\n              <h1 class="title">Driver</h1>\n\n              <button class="button button-clear button-primary" ng-click="closeModal()">Cancel</button>\n\n            </ion-header-bar>\n\n            <ion-content class="padding">\n\n              <div class="list">\n\n                <label class="item item-input">\n\n                  <span class="input-label">Driver</span>\n\n                  <input ng-model="pdaParams.driverId" type="number">\n\n                </label>\n\n                <button class="button button-full button-positive" ng-click="updateDriver(pdaParams.driverId)">Update</button>\n\n              </div>\n\n            </ion-content>\n\n          </ion-modal-view>\n\n</script> -->'/*ion-inline-end:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/pda/pda.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_10__providers_sqlite_service_sqlite_service__["a" /* SqliteServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_config_service_config_service__["a" /* ConfigServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_log_service_log_service__["a" /* LogServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_shared_service_shared_service__["a" /* SharedServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__shared_sdk_services__["e" /* TpmPdaControllerApi */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__["a" /* Device */]])
    ], PdaPage);
    return PdaPage;
}());

//# sourceMappingURL=pda.js.map

/***/ })

});
//# sourceMappingURL=6.js.map