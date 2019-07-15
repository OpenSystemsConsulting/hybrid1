webpackJsonp([12],{

/***/ 838:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageTextPageModule", function() { return ImageTextPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_text__ = __webpack_require__(866);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ImageTextPageModule = /** @class */ (function () {
    function ImageTextPageModule() {
    }
    ImageTextPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__image_text__["a" /* ImageTextPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__image_text__["a" /* ImageTextPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__image_text__["a" /* ImageTextPage */]
            ]
        })
    ], ImageTextPageModule);
    return ImageTextPageModule;
}());

//# sourceMappingURL=image-text.module.js.map

/***/ }),

/***/ 866:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageTextPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_sdk__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_service_config_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_image_file_service_image_file_service__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_pdaparams_service_pdaparams_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_shared_service_shared_service__ = __webpack_require__(21);
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
var ImageTextPage = /** @class */ (function () {
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
        __WEBPACK_IMPORTED_MODULE_2__shared_sdk__["b" /* LoopBackConfig */].setBaseURL(this.configService.apiURL);
        __WEBPACK_IMPORTED_MODULE_2__shared_sdk__["b" /* LoopBackConfig */].setApiVersion(this.configService.API_VERSION);
    }
    ImageTextPage.prototype.ionViewWillEnter = function () {
        //set the tab string in shared-service
        this.sharedService.tab = "ImageText Page";
    };
    ImageTextPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-image-text',template:/*ion-inline-start:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/image-text/image-text.html"*/'<!--\n\n  Generated template for the ImageTextPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n<ion-header>\n\n  <!--  <h1 class="title">Notes for Job</h1> -->\n\n  <ion-navbar color="primary">\n\n      <ion-buttons left>\n\n          <span [ngSwitch]="this.sharedService.loginFlag">      \n\n            <ion-badge class="common-border"  color="secondary" *ngSwitchCase="true"> Logged In</ion-badge>\n\n            <ion-badge class="common-border"  color="danger" *ngSwitchCase="false"> Logged Off</ion-badge>\n\n          </span>\n\n        </ion-buttons>\n\n    <ion-title>Notes for Image</ion-title>\n\n    <ion-buttons right>\n\n      <!-- <ion-badge class="common-border" color="danger" *ngIf="newMessageCount">{{newMessageCount}}</ion-badge> -->\n\n      <ion-badge class="common-border" color="danger"> Driver #  {{driverId}}</ion-badge>\n\n  </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-card>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-textarea rows="6" cols="50" expanding-textarea name="imagemessage" [(ngModel)]="photoMessage" placeholder="Enter any comments for your image here."\n\n          autofocus required>\n\n        </ion-textarea>\n\n      </ion-item>\n\n      <ion-item>\n\n\n\n        <ion-row>\n\n          <ion-col col-4>\n\n            <button ion-button color="secondary" (click)="sharedService.showSpinner();save()">Save</button>\n\n          </ion-col>\n\n          <ion-col col-4>\n\n            <button ion-button color="light" (click)="clear()">Clear</button>\n\n          </ion-col>\n\n          <ion-col col-4>\n\n            <button ion-button color="danger" (click)="sharedService.showSpinner();closeModal()">Cancel</button>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/image-text/image-text.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_image_file_service_image_file_service__["a" /* ImageFileServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_service_config_service__["a" /* ConfigServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_shared_service_shared_service__["a" /* SharedServiceProvider */]])
    ], ImageTextPage);
    return ImageTextPage;
}());

//# sourceMappingURL=image-text.js.map

/***/ })

});
//# sourceMappingURL=12.js.map