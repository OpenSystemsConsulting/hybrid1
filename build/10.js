webpackJsonp([10],{

/***/ 839:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobDetailNotesPageModule", function() { return JobDetailNotesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__job_detail_notes__ = __webpack_require__(867);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var JobDetailNotesPageModule = /** @class */ (function () {
    function JobDetailNotesPageModule() {
    }
    JobDetailNotesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__job_detail_notes__["a" /* JobDetailNotesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__job_detail_notes__["a" /* JobDetailNotesPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__job_detail_notes__["a" /* JobDetailNotesPage */]
            ]
        })
    ], JobDetailNotesPageModule);
    return JobDetailNotesPageModule;
}());

//# sourceMappingURL=job-detail-notes.module.js.map

/***/ }),

/***/ 867:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobDetailNotesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_sdk__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_service_config_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_pdaparams_service_pdaparams_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_service_shared_service__ = __webpack_require__(23);
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
var JobDetailNotesPage = /** @class */ (function () {
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
        __WEBPACK_IMPORTED_MODULE_2__shared_sdk__["b" /* LoopBackConfig */].setBaseURL(this.configService.apiURL);
        __WEBPACK_IMPORTED_MODULE_2__shared_sdk__["b" /* LoopBackConfig */].setApiVersion(this.configService.API_VERSION);
        this.note = Object.assign({}, this.navParams.get('note'));
    }
    JobDetailNotesPage.prototype.ionViewWillEnter = function () {
        //set the tab string in shared-service
        this.sharedService.tab = "JobDetailNotes Page";
    };
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
    JobDetailNotesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-job-detail-notes',template:/*ion-inline-start:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/job-detail-notes/job-detail-notes.html"*/'<!--\n\n  Generated template for the JobDetailNotesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <!--  <h1 class="title">Notes for Job</h1> -->\n\n  <ion-navbar color="primary">\n\n      <ion-buttons left>\n\n          <span [ngSwitch]="this.sharedService.loginFlag">      \n\n            <ion-badge class="common-border"  color="secondary" *ngSwitchCase="true"> Logged In</ion-badge>\n\n            <ion-badge class="common-border"  color="danger" *ngSwitchCase="false"> Logged Off</ion-badge>\n\n          </span>\n\n        </ion-buttons>\n\n    <ion-title>Notes for Job</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-textarea rows="6" cols="50" expanding-textarea [(ngModel)]="note.text" placeholder={{note.placeholderText}} autofocus>\n\n        </ion-textarea>\n\n      </ion-item>\n\n      <ion-item>\n\n\n\n        <ion-row>\n\n          <ion-col col-4>\n\n            <button ion-button color="secondary" (click)="sharedService.showSpinner();save()">Save</button>\n\n          </ion-col>\n\n          <ion-col col-4>\n\n            <button ion-button color="light" (click)="clear()">Clear</button>\n\n          </ion-col>\n\n          <ion-col col-4>\n\n            <button ion-button color="danger" (click)="sharedService.showSpinner();drawCancel()">Cancel</button>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/job-detail-notes/job-detail-notes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_config_service_config_service__["a" /* ConfigServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_shared_service_shared_service__["a" /* SharedServiceProvider */]])
    ], JobDetailNotesPage);
    return JobDetailNotesPage;
}());

//# sourceMappingURL=job-detail-notes.js.map

/***/ })

});
//# sourceMappingURL=10.js.map