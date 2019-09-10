webpackJsonp([11],{

/***/ 838:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesPageModule", function() { return ImagesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__images__ = __webpack_require__(866);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ImagesPageModule = /** @class */ (function () {
    function ImagesPageModule() {
    }
    ImagesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__images__["a" /* ImagesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__images__["a" /* ImagesPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__images__["a" /* ImagesPage */]
            ]
        })
    ], ImagesPageModule);
    return ImagesPageModule;
}());

//# sourceMappingURL=images.module.js.map

/***/ }),

/***/ 866:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_sdk__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_service_config_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_pdaparams_service_pdaparams_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_image_service_image_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_image_file_service_image_file_service__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_siteconfig_service_siteconfig_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_shared_service_shared_service__ = __webpack_require__(23);
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











/**
 * Generated class for the ImagesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ImagesPage = /** @class */ (function () {
    function ImagesPage(navCtrl, navParams, configService, pdaParams, imageService, siteConfig, sharedService, imageFileService, alertCtrl, messageService, cd, logger) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.configService = configService;
        this.pdaParams = pdaParams;
        this.imageService = imageService;
        this.siteConfig = siteConfig;
        this.sharedService = sharedService;
        this.imageFileService = imageFileService;
        this.alertCtrl = alertCtrl;
        this.messageService = messageService;
        this.cd = cd;
        this.logger = logger;
        this.t = this.navCtrl.parent;
        this.result = null;
        this.loginFlag = this.pdaParams.isDrvLoggedOn();
        this.logParams = { site: this.pdaParams.getSiteId(), driver: this.pdaParams.getDriverId(), fn: 'ImagesPage' };
        this.log = this.logger.getInstance(this.logParams);
        this.getImages = function () {
            _this.imageService.getImageList().subscribe(function (images) {
                if (images) {
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
                }
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
        __WEBPACK_IMPORTED_MODULE_2__shared_sdk__["b" /* LoopBackConfig */].setBaseURL(this.configService.apiURL);
        __WEBPACK_IMPORTED_MODULE_2__shared_sdk__["b" /* LoopBackConfig */].setApiVersion(this.configService.API_VERSION);
        this.driverId = this.pdaParams.getDriverId();
        //Monitor Image Refreshes.
        this.sharedService.imageRefresh.subscribe(function (res) {
            _this.getImages();
        });
    } //End of the constructor.
    ImagesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        //set the tab string in shared-service
        this.sharedService.tab = "Images";
        this.log.info("In the Images Tab.");
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
                    }],
                enableBackdropDismiss: false
            });
            alert_1.present();
        }
        else {
            this.getImages();
        }
    }; // ionViewWillEnter() ends here
    ImagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-images',template:/*ion-inline-start:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/images/images.html"*/'<!--\n\n  Generated template for the ImagesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-buttons left>\n\n      <span [ngSwitch]="this.sharedService.loginFlag">\n\n        <ion-badge class="common-border" color="secondary" *ngSwitchCase="true"> Logged In</ion-badge>\n\n        <ion-badge class="common-border" color="danger" *ngSwitchCase="false"> Logged Off</ion-badge>\n\n      </span>\n\n    </ion-buttons>\n\n    <ion-title>IMAGES</ion-title>\n\n    <ion-buttons right>\n\n      <!-- <ion-badge class="common-border" color="danger" *ngIf="newMessageCount">{{newMessageCount}}</ion-badge> -->\n\n      <ion-badge class="common-border" color="danger"> Driver # {{driverId}}</ion-badge>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content [ngClass]="{ \'overflow-scroll\': desktopBrowserScrolling}" padding>\n\n\n\n  <ion-card round inset class="ion-card" *ngIf="!images_present">\n\n    <ion-card-content>No images</ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card *ngIf="images_loaded ">\n\n    <ion-list *ngFor="let image of images.slice().reverse(); trackBy:$index">\n\n      <ion-item class="item item-thumbnail-left" text-wrap>\n\n        <img [src]="image.nativeURL" height="150px">\n\n        <h3>{{image.name}}</h3>\n\n        <p>Notes: {{image.notes}}</p>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <button *ngIf="!image.uploaded" ion-button full round color="secondary" (click)="sharedService.showSpinner();uploadImage(image)" class="button button-small">Upload</button>\n\n            <button *ngIf="image.uploaded" ion-button full round color="dark" [disabled]="true" class="button button-small">Uploaded</button>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <button ion-button full round color="danger" (click)="sharedService.showSpinner();deleteImage(image.name)" class="button button-small">Delete</button>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <hr>\n\n        </ion-row>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-card>\n\n\n\n  <div *ngIf="pdaParams.debugMode">\n\n    <ion-list>\n\n      <button ion-button round full color="primary" (click)="sharedService.showSpinner();deleteObsoleteImages()" class="button button-small">Delete\n\n        obsolete images</button>\n\n    </ion-list>\n\n\n\n\n\n    <!--    <ion-grid *ngIf="result !== null">\n\n      <ion-row>\n\n        <ion-col col-6>Number of images:</ion-col>\n\n        <ion-col col-6>{{result.numImages}}</ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-6>Number of deleted images:</ion-col>\n\n        <ion-col col-6>{{result.delImages}}</ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-6>Number of error images:</ion-col>\n\n        <ion-col col-6>{{result.errImages}}</ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-6>Failed:</ion-col>\n\n        <ion-col col-6>{{result.failed}}</ion-col>\n\n      </ion-row>\n\n\n\n    </ion-grid> -->\n\n\n\n  </div>\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/images/images.html"*/,
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_service_config_service__["a" /* ConfigServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_image_service_image_service__["a" /* ImageServiceProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_siteconfig_service_siteconfig_service__["a" /* SiteconfigServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_shared_service_shared_service__["a" /* SharedServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_image_file_service_image_file_service__["a" /* ImageFileServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_9__providers_message_service_message_service__["a" /* MessageServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_10__providers_log_service_log_service__["a" /* LogServiceProvider */]])
    ], ImagesPage);
    return ImagesPage;
}());

//# sourceMappingURL=images.js.map

/***/ })

});
//# sourceMappingURL=11.js.map