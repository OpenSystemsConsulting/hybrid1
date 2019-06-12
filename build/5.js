webpackJsonp([5],{

/***/ 845:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(875);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]
            ]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 875:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_sdk__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_login_service_login_service__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_config_service_config_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_util_service_util_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_shared_service_shared_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_message_service_message_service__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var TabsPage = /** @class */ (function () {
    //newMessageCount: number = 0; // default 0
    function TabsPage(nav, auth, configService, utilService, sharedService, messageService, zone) {
        //let info = this.auth.getUserInfo();
        var _this = this;
        this.nav = nav;
        this.auth = auth;
        this.configService = configService;
        this.utilService = utilService;
        this.sharedService = sharedService;
        this.messageService = messageService;
        this.zone = zone;
        this.ngUnsubscribe = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.tab1Root = 'HomePage';
        this.tab2Root = 'DevicePage';
        this.tab3Root = 'GpsPage';
        this.tab4Root = 'PdaPage';
        this.tab5Root = 'JseaPage';
        this.tab6Root = 'MsgsPage';
        this.tab7Root = 'ImagesPage';
        this.tab8Root = 'BarcodePage';
        this.username = '';
        __WEBPACK_IMPORTED_MODULE_4__shared_sdk__["b" /* LoopBackConfig */].setBaseURL(this.configService.apiURL);
        __WEBPACK_IMPORTED_MODULE_4__shared_sdk__["b" /* LoopBackConfig */].setApiVersion(this.configService.API_VERSION);
        this.sharedService.messageToDriver.subscribe(function (payload) {
            _this.messageService.getNewMesssageCount();
            _this.zone.run(function () {
                console.log('force update the screen');
            });
        });
    } //constuctor
    TabsPage.prototype.logout = function () {
        var _this = this;
        this.auth.logout().takeUntil(this.ngUnsubscribe).subscribe(function (success) {
            _this.nav.setRoot('LoginPage');
        });
    };
    // Once the view is done loading (this is triggered automatically)
    TabsPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Get the element by the id 'tab-0-0' attributed by the Ionic team for the first button
        document.getElementById('tab-t0-0').addEventListener('click', function (event) {
            // Execute your code here when the first button is clicked
            _this.sharedService.showSpinner();
        });
        // Get the element by the id 'tab-0-1' attributed by the Ionic team for the second button
        document.getElementById('tab-t0-1').addEventListener('click', function (event) {
            // Execute your code here when the second button is clicked
            _this.sharedService.showSpinner();
        });
        // Get the element by the id 'tab-0-2' attributed by the Ionic team for the third button
        document.getElementById('tab-t0-2').addEventListener('click', function (event) {
            // Execute your code here when the third button is clicked
            _this.sharedService.showSpinner();
        });
        // Get the element by the id 'tab-0-3' attributed by the Ionic team for the fourth button
        document.getElementById('tab-t0-3').addEventListener('click', function (event) {
            // Execute your code here when the fourth button is clicked
            _this.sharedService.showSpinner();
        });
        // Get the element by the id 'tab-0-4' attributed by the Ionic team for the fifth button
        document.getElementById('tab-t0-4').addEventListener('click', function (event) {
            // Execute your code here when the fifth button is clicked
            _this.sharedService.showSpinner();
        });
        // Get the element by the id 'tab-0-5' attributed by the Ionic team for the sixth button
        document.getElementById('tab-t0-5').addEventListener('click', function (event) {
            // Execute your code here when the sixth button is clicked
            _this.sharedService.showSpinner();
        });
        // Get the element by the id 'tab-0-6' attributed by the Ionic team for the seventh button
        document.getElementById('tab-t0-6').addEventListener('click', function (event) {
            // Execute your code here when the seventh button is clicked
            _this.sharedService.showSpinner();
        });
        // Get the element by the id 'tab-0-7' attributed by the Ionic team for the eighth button
        document.getElementById('tab-t0-7').addEventListener('click', function (event) {
            // Execute your code here when the eighth button is clicked
            _this.sharedService.showSpinner();
        });
    };
    TabsPage.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tabs',template:/*ion-inline-start:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/tabs/tabs.html"*/'<ion-tabs name="myTabsNav" color="primary">\n\n  <ion-tab [root]="tab1Root" [rootParams]="username" tabTitle="Jobs" tabIcon="home" >\n\n  </ion-tab>\n\n  <ion-tab [root]="tab2Root" [rootParams]="username" tabTitle="Device" tabIcon="construct" >\n\n  </ion-tab>\n\n  <ion-tab [root]="tab3Root" [rootParams]="username" tabTitle="GPS" tabIcon="pin" ></ion-tab>\n\n  <ion-tab [root]="tab4Root" [rootParams]="username" tabTitle="PDA" tabIcon="cog" ></ion-tab>\n\n  <ion-tab [root]="tab5Root" [rootParams]="username" tabTitle="JSEA" tabIcon="book" >\n\n  </ion-tab>\n\n  <ion-tab [root]="tab6Root" [rootParams]="username" tabTitle="Msgs" tabIcon="mail"\n\n    [tabBadge]="sharedService.newMsgCount>0 ? sharedService.newMsgCount : null" tabBadgeStyle="danger"\n\n    ></ion-tab>\n\n  <ion-tab [root]="tab7Root" [rootParams]="username" tabTitle="Images" tabIcon="images" >\n\n  </ion-tab>\n\n  <ion-tab [root]="tab8Root" [rootParams]="username" tabTitle="Scan" tabIcon="barcode" >\n\n  </ion-tab>\n\n  <!--  <ion-tab [root]="tab10Root" [rootParams]="username" tabTitle="Log" tabIcon="log-in"></ion-tab> -->\n\n</ion-tabs>'/*ion-inline-end:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_login_service_login_service__["a" /* LoginServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_config_service_config_service__["a" /* ConfigServiceProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_util_service_util_service__["a" /* UtilServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_shared_service_shared_service__["a" /* SharedServiceProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_message_service_message_service__["a" /* MessageServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

});
//# sourceMappingURL=5.js.map