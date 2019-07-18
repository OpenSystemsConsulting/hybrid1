webpackJsonp([7],{

/***/ 843:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsgsPageModule", function() { return MsgsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__msgs__ = __webpack_require__(871);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MsgsPageModule = /** @class */ (function () {
    function MsgsPageModule() {
    }
    MsgsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__msgs__["a" /* MsgsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__msgs__["a" /* MsgsPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__msgs__["a" /* MsgsPage */]
            ]
        })
    ], MsgsPageModule);
    return MsgsPageModule;
}());

//# sourceMappingURL=msgs.module.js.map

/***/ }),

/***/ 871:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MsgsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_sdk__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_service_config_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_log_service_log_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_pdaparams_service_pdaparams_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_message_service_message_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_driver_message_service_driver_message_service__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_shared_service_shared_service__ = __webpack_require__(23);
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
var MsgsPage = /** @class */ (function () {
    function MsgsPage(navCtrl, navParams, configService, pdaParams, alertCtrl, logger, messageService, sharedService, driverMessageService, despatchToDriverMessages) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.configService = configService;
        this.pdaParams = pdaParams;
        this.alertCtrl = alertCtrl;
        this.logger = logger;
        this.messageService = messageService;
        this.sharedService = sharedService;
        this.driverMessageService = driverMessageService;
        this.despatchToDriverMessages = despatchToDriverMessages;
        this.t = this.navCtrl.parent;
        this.logParams = { site: this.pdaParams.getSiteId(), driver: this.pdaParams.getDriverId(), fn: 'MsgsPage' };
        this.log = this.logger.getInstance(this.logParams);
        this.boxShow = false;
        this.messages = [];
        this.username = navParams.data;
        __WEBPACK_IMPORTED_MODULE_2__shared_sdk__["b" /* LoopBackConfig */].setBaseURL(this.configService.apiURL);
        __WEBPACK_IMPORTED_MODULE_2__shared_sdk__["b" /* LoopBackConfig */].setApiVersion(this.configService.API_VERSION);
        this.driverId = this.pdaParams.getDriverId();
        this.filter = {
            "where": { "drvmDriverId": this.driverId },
            "order": 'drvmSeqid DESC',
            "limit": 20
        };
    }
    MsgsPage.prototype.ionViewWillEnter = function () {
        this.sharedService.tab = "Msgs";
        this.log.info("In the Msgs Tab.");
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
        //this.ionViewWillEnter();
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
        return;
        //this.getMessages();
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
            ],
            enableBackdropDismiss: false
        });
        confirmPopup.present();
    }; //End of  deleteAllMessages() messages
    MsgsPage.prototype.quit = function () {
        this.showMessageEntryBox(false);
        this.t.select(0);
    };
    MsgsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-msgs',template:/*ion-inline-start:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/msgs/msgs.html"*/'<!--\n\n  Generated template for the MsgsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-buttons left>\n\n      <span [ngSwitch]="this.sharedService.loginFlag">\n\n        <ion-badge class="common-border" color="secondary" *ngSwitchCase="true"> Logged In</ion-badge>\n\n        <ion-badge class="common-border" color="danger" *ngSwitchCase="false"> Logged Off</ion-badge>\n\n      </span>\n\n    </ion-buttons>\n\n    <ion-title>MESSAGES</ion-title>\n\n    <ion-buttons right>\n\n\n\n      <ion-badge class="common-border" color="danger"> Driver # {{driverId}}</ion-badge>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content [ngClass]="{ \'overflow-scroll\': (desktopBrowserScrolling == true) }" padding text-wrap>\n\n\n\n  <ion-row [hidden]="boxShow">\n\n    <ion-col>\n\n      <button ion-button full round color="primary" (click)="sharedService.showSpinner();newMessage(true)">\n\n        Create Message\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n  <br>\n\n\n\n  <ion-card [hidden]="!boxShow">\n\n\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-textarea rows="4" id="styled" [(ngModel)]="textareadata" onfocus="this.value=\'\';">\n\n          {{textareadata}}\n\n        </ion-textarea>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button full round color="secondary" (click)="sharedService.showSpinner();onSubmit()">\n\n          Submit\n\n        </button>\n\n      </ion-col>\n\n\n\n      <ion-col col-6>\n\n        <button ion-button full round color="danger" (click)="quit()">\n\n          Quit\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n\n\n  <span></span>\n\n\n\n  <!-- <ion-list>\n\n    <ion-list-header class="ion-list-header" color="primary">Messages</ion-list-header> -->\n\n\n\n  <ion-item-group>\n\n    <ion-item-divider class="ion-list-header" color="primary">Message List</ion-item-divider>\n\n\n\n    <ion-item *ngIf="messages.length === 0" class=\'bodytext\'>\n\n      No messages\n\n    </ion-item>\n\n\n\n    <ion-list *ngIf="messages.length !== 0" class=\'bodytext\'>\n\n      <ion-item *ngFor="let message of messages;trackBy:index" type="item-text-wrap">\n\n        <!-- if message was from driver to despatch show on right, otherwise show on left like tradidional messages app -->\n\n        <span *ngIf="pdaParams.driverId!=message.drvmSender" class="left bodytext">\n\n          &nbsp;\n\n          <ion-icon name="laptop" style="font-size:30px;color:red;"></ion-icon>\n\n          {{message.drvmTimestamp | date:\'yyyy-MM-dd HH:mm\'}} : {{message.drvmMessage}} </span>\n\n\n\n        <span *ngIf="pdaParams.driverId==message.drvmSender" class="right bodytext">\n\n          <ion-icon name="contact" style="font-size:30px;color:green;"></ion-icon>\n\n          {{message.drvmTimestamp | date:\'yyyy-MM-dd HH:mm\'}} : {{message.drvmMessage}}\n\n\n\n        </span>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-item-group>\n\n\n\n  <!-- </ion-list> -->\n\n</ion-content>'/*ion-inline-end:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/msgs/msgs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_config_service_config_service__["a" /* ConfigServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_log_service_log_service__["a" /* LogServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_message_service_message_service__["a" /* MessageServiceProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_shared_service_shared_service__["a" /* SharedServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_driver_message_service_driver_message_service__["a" /* DriverMessageServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__shared_sdk__["a" /* DespatchToDriverMessagesApi */]])
    ], MsgsPage);
    return MsgsPage;
}());

//# sourceMappingURL=msgs.js.map

/***/ })

});
//# sourceMappingURL=7.js.map