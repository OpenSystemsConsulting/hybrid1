webpackJsonp([9],{

/***/ 842:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JseaPageModule", function() { return JseaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsea__ = __webpack_require__(870);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var JseaPageModule = /** @class */ (function () {
    function JseaPageModule() {
    }
    JseaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__jsea__["a" /* JseaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__jsea__["a" /* JseaPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__jsea__["a" /* JseaPage */]
            ]
        })
    ], JseaPageModule);
    return JseaPageModule;
}());

//# sourceMappingURL=jsea.module.js.map

/***/ }),

/***/ 870:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JseaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_sdk__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_sdk_services_custom_JseaDriverQuestions__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config_service_config_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_log_service_log_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_pdaparams_service_pdaparams_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_siteconfig_service_siteconfig_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_base_service_base_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_shared_service_shared_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_jsea_service_jsea_service__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_message_service_message_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_jsea_answers_replication_service_jsea_answers_replication_service__ = __webpack_require__(476);
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
var JseaPage = /** @class */ (function () {
    function JseaPage(navCtrl, navParams, configService, pdaParams, siteConfig, logger, base, sharedService, messageService, jseaService, alertCtrl, jseaDriverQuestionsApi, jseaAnswersService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.configService = configService;
        this.pdaParams = pdaParams;
        this.siteConfig = siteConfig;
        this.logger = logger;
        this.base = base;
        this.sharedService = sharedService;
        this.messageService = messageService;
        this.jseaService = jseaService;
        this.alertCtrl = alertCtrl;
        this.jseaDriverQuestionsApi = jseaDriverQuestionsApi;
        this.jseaAnswersService = jseaAnswersService;
        this.t = this.navCtrl.parent;
        this.logParams = { site: this.pdaParams.getSiteId(), driver: this.pdaParams.getDriverId(), fn: 'JseaPage' };
        this.log = this.logger.getInstance(this.logParams);
        this.jseaQuestions = [];
        this.LocalJseaDriverAnswers = lbclient.models.LocalJseaDriverAnswers;
        //firstlogin;
        this.loginFlag = this.pdaParams.isDrvLoggedOn();
        this.checkJdqResponse = function (jdqCbox, jdqType, jdqOrder, jdqNewForm, jdqNewFormType) {
            // check response when items are changed in case we need to do
            // any additional work e.g. load some more questions
            var _this = this;
            if (this.pda_jsea_both_yn) {
                if (jdqCbox === 'Y')
                    jdqCbox = true;
                else
                    jdqCbox = false;
            }
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
            var jseaObj = {
                jobNumber: '',
                jobBookingDay: '',
                jobStatusType: '',
                formLeg: ''
            };
            //They Have Submited a list of Ticks Y/N and we now have to create an array of answers
            // one row for each answer	
            var ljobnum = jseaObj.jobNumber = this.jseaService.getServiceJobNum();
            var ljobdate = jseaObj.jobBookingDay = this.jseaService.getServiceJobDate();
            var jobStatusType = jseaObj.jobStatusType = this.jseaService.getServiceStatusType();
            var formLeg = jseaObj.formLeg = this.jseaService.getServiceFormLeg();
            var submitTime = Date.now();
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
                if (this.pda_jsea_both_yn) {
                    // When both buttons present they are Y/N - convert to boolean
                    if (this.jseaQuestions[li].jdqCbox === 'Y')
                        AnswerSession.jdaCheckBox = true;
                    else
                        AnswerSession.jdaCheckBox = false;
                }
                else
                    AnswerSession.jdaCheckBox = this.jseaQuestions[li].jdqCbox;
                AnswerSession.jdaJobStatusType = jobStatusType;
                // store a timestamp of when answer saved
                AnswerSession.jdaSubmitTime = submitTime;
                AnswerSession.save();
            }
            if (jobStatusType == 'PICKUP' || jobStatusType == 'DELIVER') {
                //this.$emit('jseaSaved', jseaObj);
                var key = jseaObj.jobNumber + '-' + jseaObj.jobStatusType;
                localStorage.setItem(key, 'Y');
            }
            this.jseaAnswersService.jseaAnswers_sync();
        };
        this.jseaSubmit = function () {
            var _this = this;
            // check all questions have a Y or N answer before allowing submission
            if (!this.validateJseaAnswers()) {
                return;
            }
            var subconfirmPopup = this.alertCtrl.create({
                title: 'Jsea Session Confirm',
                message: 'Are you sure you want to submit your Answers session to the database ?',
                buttons: [
                    {
                        text: 'Yes',
                        handler: function () {
                            var navTransition = subconfirmPopup.dismiss().catch(function () { });
                            ;
                            _this.log.debug('User has Submitted the Jsea session');
                            _this.jseaService.setJseaIsCaptured("Y");
                            //Handle Answers
                            _this.doSubmitWork();
                            navTransition.then(function () {
                                //this.navCtrl.setRoot(TabsPage);
                                if (_this.sharedService.localStorageZapped)
                                    _this.pdaParams.fullReplication = true;
                                _this.t.select(0);
                            });
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
                ],
                enableBackdropDismiss: false
            });
            subconfirmPopup.present();
        };
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
                                _this.t.select(0);
                            });
                            return false;
                        }
                    },
                    {
                        text: 'No',
                        handler: function () {
                            _this.log.debug('User has CANCELLED out of a Jsea session CANCEL');
                        }
                    }
                ],
                enableBackdropDismiss: false
            });
            confirmPopup.present();
        };
        // check all questions have either a Y or N answer before allowing submission
        this.validateJseaAnswers = function () {
            var retval = true;
            var llen = _this.jseaQuestions.length;
            var checked;
            if (!_this.pda_jsea_both_yn)
                return true;
            // jdqCbox is a boolean and comes in by default as either true or more normally false
            // The form will set the value to either 'Y' or 'N' once a radio button has been checked
            for (var li = 0; li < llen; li++) {
                checked = _this.jseaQuestions[li].jdqCbox;
                if (checked !== 'N' && checked !== 'Y') {
                    // nothing explicitly checked so alert that all questions must be answered
                    var alertPopup = _this.alertCtrl.create({
                        title: 'You must answer all questions',
                        message: _this.jseaQuestions[li].jdqQuestionText,
                        buttons: [{
                                text: 'OK',
                                handler: function () {
                                    var navTransition = alertPopup.dismiss();
                                    return false;
                                }
                            }],
                        enableBackdropDismiss: false
                    });
                    alertPopup.present();
                    return false;
                }
            }
            for (var li = 0; li < llen; li++) {
                var checked = _this.jseaQuestions[li].jdqCbox;
                if (checked === 'N' && !_this.jseaQuestions[li].jdqAllowNo) {
                    // 'N" has been checked on a question that does not allow it - alert
                    var confirmPopup = _this.alertCtrl.create({
                        title: 'Have you filled in a full paper JSEA?',
                        message: 'You have answered no to 1 or more questions that are not allowed to be no.  By clicking OK you are confirming that you have filled out a full PAPER JSEA',
                        buttons: [
                            {
                                text: 'OK',
                                handler: function () {
                                    var navTransition = confirmPopup.dismiss();
                                    _this.log.info('User has been warned and confirmed OK to submit');
                                    _this.jseaService.setJseaIsCaptured("Y");
                                    //Handle Answers
                                    _this.doSubmitWork();
                                    navTransition.then(function () {
                                        _this.t.select(0);
                                    });
                                    return false;
                                }
                            },
                            {
                                text: 'Cancel',
                                handler: function () {
                                    _this.log.debug('User has CANCELLED out of a Jsea session warning doing nothing');
                                    return true;
                                }
                            }
                        ],
                        enableBackdropDismiss: false
                    });
                    confirmPopup.present();
                    return false;
                }
            }
            return retval;
        };
        this.username = navParams.data;
        //console.log("JseaPage loading...");
        //console.log("this.configService.apiURL from jsea:::" + this.configService.apiURL);
        __WEBPACK_IMPORTED_MODULE_2__shared_sdk__["b" /* LoopBackConfig */].setBaseURL(this.configService.apiURL);
        __WEBPACK_IMPORTED_MODULE_2__shared_sdk__["b" /* LoopBackConfig */].setApiVersion(this.configService.API_VERSION);
        this.sharedService.messageToDriver.subscribe(function (payload) {
            _this.newMessageCount = _this.messageService.getNewMesssageCount();
        });
    }
    JseaPage.prototype.ionViewWillEnter = function () {
        //set the tab string in shared-service
        this.sharedService.tab = "JSEA";
        this.log.info("In the JSEA Tab.");
    };
    JseaPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        // initialise the current new message count in this scope
        this.newMessageCount = this.messageService.getNewMesssageCount();
        // this.firstlogin = localStorage.getItem('firstlogin');
        this.driverId = this.pdaParams.getDriverId();
        if (this.sharedService.testing) {
            this.pda_jsea_on = 'Y';
            this.lpda_jsea_on = 'Y';
            this.pda_jsea_both_yn = 'Y';
        }
        else {
            this.pda_jsea_on = this.siteConfig.getSiteConfigValue('PDA_JSEA_ON');
            this.lpda_jsea_on = this.pdaParams.pda_jsea_on ? 'Y' : 'N';
            this.pda_jsea_both_yn = this.siteConfig.getSiteConfigValue('PDA_JSEA_BOTH_YN') === 'Y';
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
                    }],
                enableBackdropDismiss: false
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
    JseaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-jsea',template:/*ion-inline-start:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/jsea/jsea.html"*/'<!--\n\n  Generated template for the JseaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-buttons left>\n\n      <span [ngSwitch]="this.sharedService.loginFlag">\n\n        <ion-badge class="common-border" color="secondary" *ngSwitchCase="true"> Logged In</ion-badge>\n\n        <ion-badge class="common-border" color="danger" *ngSwitchCase="false"> Logged Off</ion-badge>\n\n      </span>\n\n    </ion-buttons>\n\n    <ion-title>JSEA</ion-title>\n\n    <ion-buttons right>\n\n      <!-- <ion-badge class="common-border" color="danger" *ngIf="newMessageCount">{{newMessageCount}}</ion-badge> -->\n\n      <ion-badge class="common-border" color="danger"> Driver # {{driverId}}</ion-badge>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content [ngClass]="{ \'overflow-scroll\': (desktopBrowserScrolling == true) }" padding="true">\n\n\n\n  <ion-list text-wrap *ngIf="pda_jsea_both_yn">\n\n    <ion-list-header class="ion-list-header" color="primary">Answer All Questions</ion-list-header>\n\n\n\n\n\n    <ion-grid class="jsea-item item-text-wrap" *ngFor=" let jseaQuestion of jseaQuestions;trackBy:index"\n\n      type="item-text-wrap">\n\n\n\n      <ion-row radio-group [(ngModel)]="jseaQuestion.jdqCbox">\n\n        <ion-col col-8 class="jsea-col">\n\n          <ion-item no-lines>\n\n            {{jseaQuestion.jdqQuestionText}}\n\n          </ion-item>\n\n        </ion-col>\n\n\n\n        <ion-col col-2 class="jsea-col">\n\n          <ion-label>Yes</ion-label>\n\n          <ion-radio color="secondary" value="Y"\n\n            (ionSelect)="checkJdqResponse(jseaQuestion.jdqCbox,jseaQuestion.jdqType,jseaQuestion.jdqOrder,jseaQuestion.jdqNewForm,jseaQuestion.jdqNewFormType)">\n\n          </ion-radio>\n\n        </ion-col>\n\n\n\n        <ion-col col-2 class="jsea-col">\n\n          <ion-label>No</ion-label>\n\n          <ion-radio color="danger" value="N"\n\n            (ionSelect)="checkJdqResponse(jseaQuestion.jdqCbox,jseaQuestion.jdqType,jseaQuestion.jdqOrder,jseaQuestion.jdqNewForm,jseaQuestion.jdqNewFormType)">\n\n          </ion-radio>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-list>\n\n\n\n\n\n  <ion-list text-wrap *ngIf="!pda_jsea_both_yn">\n\n    <ion-list-header class="ion-list-header" color="primary">Answer All Questions</ion-list-header>\n\n\n\n    <ion-item class="jsea-item item-text-wrap" *ngFor=" let jseaQuestion of jseaQuestions;trackBy:index"\n\n      type="item-text-wrap">\n\n      <ion-toggle [(ngModel)]="jseaQuestion.jdqCbox"\n\n        (ngModelChange)="checkJdqResponse(jseaQuestion.jdqCbox,jseaQuestion.jdqType,jseaQuestion.jdqOrder,jseaQuestion.jdqNewForm,jseaQuestion.jdqNewFormType)">\n\n      </ion-toggle>\n\n      <ion-label> {{jseaQuestion.jdqQuestionText}}</ion-label>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <button ion-button full round color="secondary" (click)="sharedService.showSpinner();jseaSubmit()">\n\n        Submit\n\n      </button>\n\n    </ion-col>\n\n\n\n    <ion-col col-6>\n\n      <button ion-button full round color="danger" (click)="sharedService.showSpinner();jseaCancel()">\n\n        Cancel\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/jsea/jsea.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_config_service_config_service__["a" /* ConfigServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_siteconfig_service_siteconfig_service__["a" /* SiteconfigServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_log_service_log_service__["a" /* LogServiceProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_base_service_base_service__["a" /* BaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_shared_service_shared_service__["a" /* SharedServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_message_service_message_service__["a" /* MessageServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_jsea_service_jsea_service__["a" /* JseaServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__shared_sdk_services_custom_JseaDriverQuestions__["a" /* JseaDriverQuestionsApi */], __WEBPACK_IMPORTED_MODULE_12__providers_jsea_answers_replication_service_jsea_answers_replication_service__["a" /* JseaAnswersReplicationServiceProvider */]])
    ], JseaPage);
    return JseaPage;
}());

//# sourceMappingURL=jsea.js.map

/***/ })

});
//# sourceMappingURL=9.js.map