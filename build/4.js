webpackJsonp([4],{

/***/ 845:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobDetailsPageModule", function() { return JobDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__job_details__ = __webpack_require__(873);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(854);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var JobDetailsPageModule = /** @class */ (function () {
    function JobDetailsPageModule() {
    }
    JobDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__job_details__["a" /* JobDetailsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__job_details__["a" /* JobDetailsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__job_details__["a" /* JobDetailsPage */]
            ]
        })
    ], JobDetailsPageModule);
    return JobDetailsPageModule;
}());

//# sourceMappingURL=job-details.module.js.map

/***/ }),

/***/ 854:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__camera_button_camera_button__ = __webpack_require__(855);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__camera_button_camera_button__["a" /* CameraButtonComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__camera_button_camera_button__["a" /* CameraButtonComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 855:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_sdk__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_image_file_service_image_file_service__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_image_service_image_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_config_service_config_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_shared_service_shared_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_pdaparams_service_pdaparams_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_siteconfig_service_siteconfig_service__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









//import { ImageTextPage } from '../../pages/image-text/image-text';
/**
 * Generated class for the CameraButtonComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var CameraButtonComponent = /** @class */ (function () {
    function CameraButtonComponent(modalCtrl, imageFileService, imageService, configService, sharedService, pdaParams, siteConfig) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.imageFileService = imageFileService;
        this.imageService = imageService;
        this.configService = configService;
        this.sharedService = sharedService;
        this.pdaParams = pdaParams;
        this.siteConfig = siteConfig;
        // function to open the modal
        this.openModal = function (obj) {
            var myModal = _this.modalCtrl.create("ImageTextPage", obj);
            myModal.present();
        };
        this.getNotesForImage = function (imageURI, legid, baseFileName, newFileName) {
            var obj = { imageURI: '', legid: 0, baseFileName: '', newFileName: '' };
            obj.imageURI = imageURI;
            obj.legid = legid;
            obj.baseFileName = baseFileName;
            obj.newFileName = newFileName;
            _this.openModal(obj);
        };
        this.takephoto = function (legid) {
            //console.log(new Date().toISOString() + ': camera.takephoto: starts');		//DEBUG
            _this.imageURI = "Nothing Loaded!!";
            _this.legid = legid;
            _this.imageService.takePhoto(_this.legid).subscribe(function (imageURI) {
                _this.imageURI = imageURI;
                _this.imageService.storeImageURI(_this.legid, _this.imageURI, _this.metadata).subscribe(function (fileData) {
                    // image moved to app storage
                    _this.sharedService.imageSaved.next(fileData);
                    var savedImageURI = fileData.savedImageURI;
                    var baseFileName = fileData.baseFileName;
                    var newFileName = fileData.newFileName;
                    //alert("this.pdaImageNotes from inside takephoto:::" + this.pdaImageNotes);
                    if (_this.pdaImageNotes) {
                        // get the notes associated with this image
                        _this.getNotesForImage(savedImageURI, _this.legid, baseFileName, newFileName);
                    }
                    else {
                        // no notes, simply mark as ready for upload
                        _this.imageFileService.set(newFileName, 'readyForUpload', true);
                    }
                    //Set the shared variable multidel_phototaken to true;
                    _this.sharedService.multidel_phototaken = true;
                }, function (err) {
                    alert("storeImageURI Error" + JSON.stringify(err));
                });
            });
            // image successfully captured by device
        }; //takephoto ends here
        //console.log('Hello CameraButtonComponent Component');
        __WEBPACK_IMPORTED_MODULE_2__shared_sdk__["b" /* LoopBackConfig */].setBaseURL(configService.apiURL);
        __WEBPACK_IMPORTED_MODULE_2__shared_sdk__["b" /* LoopBackConfig */].setApiVersion(configService.API_VERSION);
        // default is must enter notes for image but can be overridden by having site config set to 'N'
        this.pdaImageNotes = this.pdaParams.pda_image_notes || true;
        if (this.siteConfig.getSiteConfigValue('PDA_IMAGE_NOTES') === 'N')
            this.pdaImageNotes = false;
        //alert("this.pdaImageNotes from constructor of camera-button.ts:::" + this.pdaImageNotes);
    }
    CameraButtonComponent.prototype.ionViewWillEnter = function () {
        //set the tab string in shared-service
        this.sharedService.tab = "CameraButtonComponent";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('metadata'),
        __metadata("design:type", Object)
    ], CameraButtonComponent.prototype, "metadata", void 0);
    CameraButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'camera-button',template:/*ion-inline-start:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/components/camera-button/camera-button.html"*/'<!-- Generated template for the CameraButtonComponent component -->\n\n<button ion-button class="fontsize" name="myPicture" [(ngModel)]="myPicture" (click)="takephoto(metadata.legid)" ngDefaultControl>\n\n  <!-- <ion-icon name="camera"></ion-icon> &nbsp; --> Photo\n\n</button>\n\n'/*ion-inline-end:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/components/camera-button/camera-button.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__providers_image_file_service_image_file_service__["a" /* ImageFileServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_image_service_image_service__["a" /* ImageServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_config_service_config_service__["a" /* ConfigServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_shared_service_shared_service__["a" /* SharedServiceProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_siteconfig_service_siteconfig_service__["a" /* SiteconfigServiceProvider */]])
    ], CameraButtonComponent);
    return CameraButtonComponent;
}());

//# sourceMappingURL=camera-button.js.map

/***/ }),

/***/ 873:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_sdk__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_insomnia__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_log_service_log_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_pdaparams_service_pdaparams_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_siteconfig_service_siteconfig_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_base_service_base_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_shared_service_shared_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_jsea_service_jsea_service__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_config_service_config_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_job_changed_service_job_changed_service__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_gps_audit_service_gps_audit_service__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_image_service_image_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_jobnote_replication_service_jobnote_replication_service__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_navigation_service_navigation_service__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_message_service_message_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_attach_service_attach_service__ = __webpack_require__(477);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { Observable } from 'rxjs/Observable';















/**
 * Generated class for the JobDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 *
 * Read about how to unsubscribe observables at
 * https://stackoverflow.com/questions/38008334/angular-rxjs-when-should-i-unsubscribe-from-subscription
 *
 */
var JobDetailsPage = /** @class */ (function () {
    //newMessageCount: number;
    function JobDetailsPage(navCtrl, navParams, modalController, pdaParams, siteConfig, logger, base, sharedService, jseaService, alertCtrl, jobChangedService, gpsAudit, configService, messageService, imageService, jobnoteReplicationService, navigationService, theInAppBrowser, // private callNumber: CallNumber,
        attachService, platform, insomnia, device) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalController = modalController;
        this.pdaParams = pdaParams;
        this.siteConfig = siteConfig;
        this.logger = logger;
        this.base = base;
        this.sharedService = sharedService;
        this.jseaService = jseaService;
        this.alertCtrl = alertCtrl;
        this.jobChangedService = jobChangedService;
        this.gpsAudit = gpsAudit;
        this.configService = configService;
        this.messageService = messageService;
        this.imageService = imageService;
        this.jobnoteReplicationService = jobnoteReplicationService;
        this.navigationService = navigationService;
        this.theInAppBrowser = theInAppBrowser;
        this.attachService = attachService;
        this.platform = platform;
        this.insomnia = insomnia;
        this.device = device;
        this.t = this.navCtrl.parent;
        this.logParams = { site: this.pdaParams.getSiteId(), driver: this.pdaParams.getDriverId(), fn: 'JobDetailsPage' };
        this.log = this.logger.getInstance(this.logParams);
        this.note = {
            'seqid': '',
            'formtype': '',
            'text': '',
            'placeholderText': ''
        };
        this.isNotesModelClosed = false;
        this.mdelPhotoTaken = false;
        this.attachments = [];
        this.PNO_CHECK = /(?:\+?(61))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})/g;
        // The following two are mutually exclusive so should never be set together - if they are we use depart pickup
        // signature on pickup
        this.pdaSignatOnPU = (this.pdaParams.pda_signat_on_pu || (this.siteConfig.getSiteConfigValue('PDA_SIGNATURE_PUP') == 'Y'));
        // separate delivery signature and delivery event
        this.pdaDiscreteDelSignat = (this.pdaParams.pda_discrete_del_signat || (this.siteConfig.getSiteConfigValue('PDA_DISCRETE_DEL_SIGNAT') == 'Y'));
        this.multidelText = this.siteConfig.getSiteConfigValue('PDA_MULTIDEL_NOTE_TEXT');
        this.jseaPerJob = (this.jseaService.getJseaConfig() == 'PJB_CHECK');
        this.pdaMandatoryPhotos = (this.pdaParams.pda_mandatory_photos || (this.siteConfig.getSiteConfigValue('PDA_MANDATORY_PHOTOS') == 'Y'));
        this.pdaMandatoryNotes = (this.pdaParams.pda_mandatory_notes || (this.siteConfig.getSiteConfigValue('PDA_MANDATORY_NOTES') == 'Y'));
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
        this.openSignatureModal = function (legid) {
            var lparams = { metadata: { basejob: _this.jobs[0].mobjobBasejobNum, legid: legid, legStatus: _this.jobs[0].mobjobStatus, barcodeSignOff: false } };
            var modal = _this.modalController.create('SignaturePage', lparams);
            modal.onDidDismiss(function (result) {
                if (typeof result !== 'undefined') {
                    _this.podname = result.podname;
                    _this.signature = result.signature;
                    _this.mdelPhotoTaken = result.mdelPhotoTaken;
                    _this.handleJobStatusChange(legid, _this.signature, _this.podname);
                    //this.signatureCallback(this.signature, this.podname, this.mdelPhotoTaken);
                }
            });
            modal.present();
        };
        this.getJob = function () {
            // Do the normal stuff for this function
            _this.mystr = 'getJob';
            if (_this.pdaParams.debug)
                _this.log.debug(_this.mystr);
            if (_this.jobidparam === 'new') {
                return _this.newJob();
            }
            _this.njobId = (_this.jobidparam) % 100000000; //Modulus 100 Million gives job num and leg num - need to account for modded jobs
            _this.legnum = _this.njobId % 100;
            _this.jobId = Math.trunc(_this.njobId / 100); //Divide by 100 gives job number taking off the leg number
            _this.localfilter =
                {
                    "where": { "mobjobBasejobNum": _this.jobId },
                    "order": 'mobjobLegNumber ASC'
                };
            if (_this.pdaParams.jobDetailOneDayOnly) {
                // convoluted (maybe) way to get job date with no hh/mm/ss into date object
                var jobDate = Math.floor(_this.jobidparam / 100000000); // e.g. 20160502
                var year = Math.round(jobDate / 10000);
                var mon = Math.round((jobDate % 10000) / 100);
                var day = Math.round((jobDate % 100));
                var jobDateFilter = new Date(Date.UTC(year, mon - 1, day, 0, 0, 0, 0));
                _this.localfilter =
                    {
                        "where": {
                            "mobjobBasejobNum": _this.jobId,
                            "mobjobBookingDay": jobDateFilter
                        },
                        "order": 'mobjobLegNumber ASC'
                    };
            }
            if (_this.pdaParams.isDrvLoggedOff()) {
                var alertPopup_1 = _this.alertCtrl.create({
                    title: 'Log On/Off Issue',
                    subTitle: "Please Log on to action jobs",
                    buttons: [{
                            text: 'OK',
                            handler: function () {
                                var navTransition = alertPopup_1.dismiss();
                                navTransition.then(function () {
                                    _this.navCtrl.pop();
                                });
                                return false;
                            }
                        }],
                    enableBackdropDismiss: false
                });
                alertPopup_1.present();
                return;
            }
            var Job = lbclient.models.LocalJob;
            Job.find(_this.localfilter, function (err, results) {
                if (err) {
                    _this.log.error('Job.find:' + JSON.stringify(err));
                }
                _this.results = results;
                if (_this.results.length === 0) {
                    _this.navCtrl.push('HomePage');
                    return;
                }
                _this.legs = _this.results.length;
                _this.jobs = _this.results;
                var lastleg = _this.jobs[_this.legs - 1];
                // Check if last leg is at 'PC' status for discrete signature before delivery
                if (lastleg.mobjobStatus == 'PC')
                    _this.discreteDelSignat = true;
                else
                    _this.discreteDelSignat = false;
                if (_this.discreteDelSignat && _this.pdaDiscreteDelSignat) {
                    _this.showDelButtonNoSignat = true; // used on template in ng-if
                }
                _this.base.base.currentItem = _this.results;
                _this.job = _this.base.base.currentItem;
                // Isolate the Single Job and set the CurrentItem in the Base Class...   
                // Do the normal stuff for this function
                _this.base.currentData = _this.base.combineValuesAndLabels(_this.job, _this.jobMetadata, "");
                _this.data = _this.base.currentData;
                // Set up the Metadata to control the Display of this Job...
                // Set base.currentData so Edits can be sensed...
                _this.base.bDataChanged = false;
                // No Data changed at this point...
                //this.tabHeader = this.generateJobHeader(this.job);
                // Generate a meaningful Header Title...
                // attachments
                if (_this.pdaAttachedDocs) {
                    _this.jdsub3 = _this.attachService.getAttachments(results[0]).subscribe(function (data) {
                        _this.attachments = data["filelist"];
                        //console.log("attachments:" + this.attachments);
                    }, function (err) {
                        _this.log.error("this.attachService.getAttachments error:" + err);
                        _this.attachments = [];
                    });
                }
            });
        }; //GetJob() ends here
        this.newJob = function () {
            _this.mystr = 'newJob';
            //log.debug(mystr);
            _this.bNewItem = true;
            _this.job = {};
            _this.data = _this.base.createNewItem(_this.job, _this.jobMetadata);
            //this.data= Array.from(this.data);
            _this.data = _this.data;
            // An Empty Job with Defaults...
        };
        this.doJseaSubType = function (formtype) {
            var job = _this.job[0];
            var jobStatus;
            //formtype is MDEL or ODIM or JSEA
            _this.basejob = job.mobjobNumber;
            _this.basejobDate = job.mobjobBookingDay;
            if (job.mobjobStatus == 'PU' || job.mobjobStatus == 'Dp')
                jobStatus = 'PICKUP';
            if (_this.job[0].mobjobStatus == 'Ad')
                jobStatus = 'DELIVER';
            _this.jseaService.setJobJseaDetails(_this.basejob, _this.basejobDate, 'N', jobStatus, formtype, 2);
            // if MULTIDEL prompt for notes prior to entering jsea details
            // designed to allow operator to enter address/suburb details
            // which will then appear on CCT's invoices to clients
            if (formtype == 'MULTIDEL') {
                // wait for the modal form to be closed before going to the next page
                if (_this.isNotesModelClosed) {
                    if (_this.pdaMandatoryPhotos) {
                        _this.takePhoto(job.mobjobSeq, job.mobjobNumber, job.mobjobStatus);
                        // Keep screen on for our app
                        _this.insomnia.keepAwake();
                    }
                    _this.navCtrl.push('JseaPage').catch(function (err) {
                        // console.log("Error pushing Jseapage:" + err);
                    });
                }
                ;
                _this.enterNotes(job.mobjobSeq, _this.multidelText, formtype);
            }
            else {
                _this.navCtrl.push('JseaPage').catch(function (err) {
                    //console.log("Error pushing Jseapage:" + err);
                });
            }
        }; //doJseaSubType ends here
        this.handleNavigation = function (legnum) {
            var job = this.job[legnum];
            if (!this.navigationInstalled) {
                var alertPopup = this.alertCtrl.create({
                    title: 'Module not installed:',
                    subTitle: 'This module is not installed, please contact your office',
                    buttons: ['Ok'],
                    enableBackdropDismiss: false
                });
                alertPopup.present();
            }
            else {
                //var myaddr = job.mobjobClientName + ' ' + job.mobjobAddress1 + ' ' + job.mobjobSuburb;
                var myaddr = job.mobjobAddress2 + ' ' + job.mobjobSuburb;
                this.navigationService.registerJobDetails(job.mobjobNumber, job.mobjobBookingDay, myaddr);
                this.navigationService.navigate(myaddr);
            }
        };
        //The func below should only be called when a button is clicked EG 
        // Accept / Pickup / Tap to Sign 
        this.handleJobStatusChange = function (seqid, signat, podname) {
            // seqid id the mobjobSeq of the job that's just changed e.g. 2015123103038500
            _this.mystr = 'handleJobStatusChange:seqid:' + seqid;
            _this.log.debug(_this.mystr);
            var jseaMaybeRequired = false;
            var wasPickup = false;
            var wasArriveDeliver = false;
            var dateTime = new Date().getTime();
            var timestamp = Math.floor(dateTime / 1000);
            // Loop thru this array and update the status on all legs of the job
            // jobs at this point contains all legs for one basejob
            var podCount = 0;
            var legCount = _this.jobs.length;
            //TESTING
            if (_this.jseaService.getJseaConfig() == 'PJB_CHECK') {
                _this.basejob = _this.job[0].mobjobNumber;
                _this.basejobDate = _this.job[0].mobjobBookingDay;
                jseaMaybeRequired = true;
            }
            ///END TESTING
            // If mandatory photos required check all legs to make sure at least one 
            // photo has been taken for the current status (anything > NJ)
            // NOTE - the image could be attached to any leg
            if (_this.pdaMandatoryPhotos) {
                var found = false;
                // It's possible to have e.g. leg 0 @ Ad and leg 1 @ PC where the Ad photo
                // was taken on leg 1 so get status from 1st leg ( leg 0 PU)
                var jobStatus = _this.jobs[0].mobjobStatus; // get status from 1st leg (PU)
                for (var i = 0; i < legCount; i++) {
                    var job = _this.jobs[i];
                    // long status text is stored in this.data
                    var statusString = _this.getStatusString(seqid);
                    if (job.mobjobStatus === 'NJ') {
                        found = true; // don't care about NJ
                        break;
                    }
                    // [ v2.58.39 CCT test code - needs to be enabled when confirmed OK by CCT
                    // Maybe the "don't care" statuses should be configurable?
                    if (job.mobjobStatus === 'AC') {
                        found = true; // CCT don't care about AC
                        break;
                    }
                    if (job.mobjobStatus === 'Dp') {
                        found = true; // CCT don't care about Dp
                        break;
                    }
                    // ] v2.58.39 CCT test code end
                    if (typeof job.imageCount !== 'undefined') {
                        // We have some images - check if some for this status
                        var obj = _this.getCurrentStatusObj(jobStatus, job.imageCount) || {};
                        if (obj.count > 0) {
                            found = true;
                            break; // have at least one image
                        }
                    }
                }
                _this.log.info('pdaMandatoryPhotos: seqid:' + seqid + ', jobStatus:' + jobStatus + ', found:' + found);
                if (!found) {
                    // no images found - don't allow user to continue
                    var alertPopup = _this.alertCtrl.create({
                        title: 'No photos yet for : ' + statusString,
                        subTitle: "Please take at least one photo at this stage, before updating the job status",
                        buttons: ['Ok'],
                        enableBackdropDismiss: false
                    });
                    alertPopup.present();
                    return; // the alert is async - return here while popup does its job
                }
            } //End of pdaMandatoryPhotos check
            for (var iac = 0; iac < legCount; iac++) {
                var job = _this.jobs[iac];
                var oldStatus = job.mobjobStatus;
                // Don't need to match seqid just have this there for later when
                // we want to have individual signatures for each leg
                // we need to change PU to PC (pod captured) for each leg of a multi leg
                // job, and once all legs are PC we can the update all legs to DL
                if (_this.pdaParams.multileg) {
                    // Pod captured (PC) processing
                    _this.log.info("this.fullStatuses:" + _this.fullStatuses + " job.mobjobStatus::" + job.mobjobStatus);
                    if ((!_this.fullStatuses && job.mobjobStatus == 'PU') // Std statuses -  NJ->AC->PU->DL
                        ||
                            (_this.fullStatuses && job.mobjobStatus == 'Ad') // Full statuses - NJ->AC->PU->Dp->Ad->DL
                    ) {
                        // Set pickup leg status only - don't store signature etc. on this leg
                        // Can't let this fall thru below otherwise will become DL and not visible
                        // If at least one POD mark leg 0 for access by templates etc. where we only have leg 0
                        if (job.mobjobLegNumber == 0)
                            job.mobjobHasPod = true;
                        // Add POD for current leg only (not pickup leg 0)
                        if (job.mobjobSeq == seqid && job.mobjobLegNumber > 0) {
                            job.mobjobStatus = 'PC'; // pod captured
                            _this.mystr = 'Job status update to PC for job.mobjobLegNumber > 0 of Job Number:' + job.mobjobNumber;
                            _this.log.info(_this.mystr);
                            job.mobjobSignat = signat || "";
                            if (podname) {
                                job.mobjobPodName = podname;
                                job.mobjobPodTime = new Date().toISOString();
                            }
                        }
                        // Single leg jobs do have a pod capture on leg 0 though - need to add signat to leg 1
                        if (job.mobjobTotalLegs == 1 && job.mobjobLegNumber == 1) {
                            job.mobjobStatus = 'PC'; // pod captured
                            _this.mystr = 'Job status update to PC for leg#1 of Job Number:' + job.mobjobNumber;
                            _this.log.info(_this.mystr);
                            job.mobjobSignat = signat || "";
                            if (podname) {
                                job.mobjobPodName = podname;
                                job.mobjobPodTime = new Date().toISOString();
                            }
                        }
                        _this.log.info("Job status for Job leg:" + job.mobjobLegNumber + " of Job Number:" + job.mobjobNumber + " is set to " + job.mobjobStatus);
                    }
                }
                // Following block is for all legs
                // TODO - should this be a switch/case?
                var oldStatus = job.mobjobStatus;
                if (!_this.fullStatuses) {
                    if (oldStatus == 'NJ') {
                        job.mobjobStatus = 'AC';
                        job.mobjobTimeAC = Date.now();
                    }
                    else if (oldStatus == 'AC') {
                        job.mobjobStatus = 'PU';
                        job.mobjobTimePU = Date.now();
                        var lgps = _this.gpsAudit.getLastGPS();
                        if (lgps) {
                            job.gpsLatPU = lgps.gps_latitude;
                            job.gpsLongPU = lgps.gps_longitude;
                        }
                        if (job.mobjobLegNumber == 0) {
                            // Possible signature on pickup
                            job.mobjobSignat = signat || "";
                            if (podname) {
                                job.mobjobPodName = podname;
                                job.mobjobPodTime = new Date().toISOString();
                            }
                        }
                    }
                    else if (oldStatus == 'PU') {
                        // PC processing - no direct route to DL now - will either be PU or PC until all pods captured
                        if (!_this.pdaParams.multileg) {
                            job.mobjobStatus = 'DL';
                            // why did we store signature on pickup leg (leg 0)?
                            if (job.mobjobLegNumber > 0) {
                                job.mobjobSignat = signat || "";
                                if (podname) {
                                    job.mobjobPodName = podname;
                                    job.mobjobPodTime = new Date().toISOString();
                                }
                            }
                        }
                    }
                    else if (oldStatus == 'PC') {
                        podCount++;
                    }
                }
                else {
                    if (oldStatus == 'NJ') {
                        job.mobjobStatus = 'AC';
                        job.mobjobTimeAC = Date.now();
                    }
                    else if (oldStatus == 'AC') {
                        wasPickup = true;
                        job.mobjobStatus = 'PU';
                        job.mobjobTimePU = Date.now();
                        var lgps = _this.gpsAudit.getLastGPS();
                        if (lgps) {
                            job.gpsLatPU = lgps.gps_latitude;
                            job.gpsLongPU = lgps.gps_longitude;
                        }
                        if (job.mobjobLegNumber == 0) {
                            // Possible signature on pickup
                            job.mobjobSignat = signat || "";
                            if (podname) {
                                job.mobjobPodName = podname;
                                job.mobjobPodTime = new Date().toISOString();
                            }
                        }
                    }
                    else 
                    // Arrive pickup - not used atm
                    if (oldStatus == 'PU') {
                        job.mobjobStatus = 'Dp';
                        job.mobjobTimeDp = Date.now();
                        if (job.mobjobLegNumber == 0) {
                            // Possible signature on depart pickup
                            job.mobjobSignat = signat || "";
                            if (podname) {
                                job.mobjobPodName = podname;
                                job.mobjobPodTime = new Date().toISOString();
                            }
                        }
                    }
                    if (oldStatus == 'Dp') {
                        wasArriveDeliver = true;
                        job.mobjobStatus = 'Ad';
                        job.mobjobTimeAd = Date.now();
                    }
                    if (oldStatus == 'Ad') {
                        // PC processing - no direct route to DL now - will either be PU or PC until all pods captured
                        if (!_this.pdaParams.multileg) {
                            // TODO - get GPS
                            job.mobjobStatus = 'DL';
                            var lgps = _this.gpsAudit.getLastGPS();
                            if (lgps) {
                                job.gpsLatDL = lgps.gps_latitude;
                                job.gpsLongDL = lgps.gps_longitude;
                            }
                            // why did we store signature on pickup leg (leg 0)?
                            if (job.mobjobLegNumber > 0) {
                                job.mobjobSignat = signat || "";
                                if (podname) {
                                    job.mobjobPodName = podname;
                                    job.mobjobPodTime = new Date().toISOString();
                                }
                            }
                        }
                    }
                    else if (oldStatus == 'PC') {
                        // if oldStatus is PC it means we've just captured a POD or, if there is 
                        // a separate signature capture, it means we've just had a deliver event
                        // If we want a separate PC (signature capture) and then a discrete DEL deliver event
                        // don't increment podCount as we don't want to complete at this stage
                        // If we were at 'PC' AND we have site config set AND discreteDelSignat is set
                        // (last leg is at 'PC' status)
                        // we do want to increment podCount because we do want to complete the job now
                        if (_this.pdaDiscreteDelSignat && !_this.discreteDelSignat) {
                            // do nothing
                        }
                        else if (_this.showDelButtonNoSignat) {
                            podCount++;
                        }
                        else {
                            podCount++; // normal default behaviour
                        }
                        _this.log.debug('handleJobStatusChange: ' + job.mobjobSeq + ' oldStatus:' + oldStatus + ' this.showDelButtonNoSignat:' + _this.showDelButtonNoSignat + ' podCount:' + podCount);
                    }
                }
                _this.mystr = 'handleJobStatusChange:' + job.mobjobSeq + ' updated from ' + oldStatus + ' -> ' + job.mobjobStatus;
                _this.log.info(_this.mystr);
                //console.log('this.mystr:::::' + this.mystr);     
                job.save(); // save leg  
                _this.jobChangedService.setlastjobedited(true);
            } //For loop for each leg ends here
            // NOTE - because we don't replicate between the very last PC and setting all to DL the last PC leg goes
            // direct from PU -> DL and therefore does NOT trigger a POD_INFORMATION event on the server
            // TODO - what is best test for all PODs captured?
            // if all PODs now captured update job to DL (all delivery legs have status PC so now job fully completed)
            if (podCount >= (legCount - 1)) {
                // check for mandatory notes here before marking job DL
                if (_this.pdaMandatoryNotes) {
                    _this.enterNotes(_this.jobs[0].mobjobSeq, _this.multidelText, "");
                }
                for (var iac = 0; iac < legCount; iac++) {
                    var job = _this.jobs[iac];
                    var oldStatus = job.mobjobStatus;
                    // TODO - do we need this test?  or just update every leg regardless?
                    if (job.mobjobStatus == 'PU' || job.mobjobStatus == 'PC' || job.mobjobStatus == 'Ad') {
                        // TODO - get GPS
                        job.mobjobStatus = 'DL';
                        var lgps = _this.gpsAudit.getLastGPS();
                        if (lgps) {
                            job.gpsLatDL = lgps.gps_latitude;
                            job.gpsLongDL = lgps.gps_longitude;
                        }
                        job.save(); // save leg         
                        _this.mystr = 'handleJobStatusChange:DL' + job.mobjobSeq + ' updated from ' + oldStatus + ' -> ' + job.mobjobStatus;
                        _this.log.info(_this.mystr);
                        _this.jobChangedService.setlastjobedited(true);
                    }
                }
            }
            //If we are here then a Jsea Form is required for a job Pu and Del
            // So now check if is a pickup etc
            if (jseaMaybeRequired && (wasPickup || wasArriveDeliver)) {
                var lstr;
                if (wasPickup)
                    lstr = 'PICKUP';
                else
                    lstr = 'DELIVER';
                _this.jseaService.setJobJseaDetails(_this.basejob, _this.basejobDate, 'N', lstr, 'JSEA', 1);
                _this.navCtrl.push('JseaPage');
                return;
            }
            // After save go back to job list
            // this.navCtrl.pop();
            //this.navCtrl.setRoot(TabsPage);
            _this.t.select(0);
            return;
        }; //END OF handleJobStatusChange function ends here
        this.jnSyncCallback = function (err, conflicts) {
            if (err)
                _this.log.error('jnSyncCallback: err:' + err);
            if (conflicts)
                _this.log.error('jnSyncCallback: conflicts:' + conflicts);
        };
        this.saveNotes = function (seqid, noteText) {
            var LocalNote = lbclient.models.LocalNote;
            var seqid = seqid;
            //var note = noteText;
            var ln = new LocalNote();
            ln.jnJobNum = _this.job[0].mobjobNumber;
            ln.jnJobBday = _this.job[0].mobjobBookingDay;
            // prepend formtype if set e.g. "MULTIDEL:...."
            if (_this.note.formtype)
                ln.jnText = _this.note.formtype + ':' + noteText;
            else
                ln.jnText = noteText;
            ln.jnDriver = _this.pdaParams.getDriverId();
            ln.jnCreateTime = Date.now();
            ln.save();
            //this.job_note_sync(this.jnSyncCallback);
            _this.jobnoteReplicationService.job_note_sync(_this.jnSyncCallback, "");
        };
        this.getCurrentStatusObj = function (legStatus, imageCountArr) {
            for (var i = 0; i < imageCountArr.length; i++) {
                if (imageCountArr[i].jobStatus === legStatus) {
                    return imageCountArr[i];
                }
            }
            return { "jobStatus": legStatus, "count": 0 };
        };
        this.getStatusString = function (seqid) {
            var len = _this.data.length;
            for (var i = 0; i < len; i++) {
                if (_this.data[i].legid === seqid && _this.data[i].property === 'mobjobStatus') {
                    return (_this.data[i].enumValue.label);
                }
            }
            return "";
        };
        this.checkOkForSignat = function (seqid) {
            // check if images taken at this status to allow signature to go ahead
            // This function is called from the signature pad directive 
            var retval = true; // default behaviour
            var statusString;
            var legid;
            if (_this.pdaMandatoryPhotos) {
                // this.job contains the list of legs - 1st should match seqid
                _this.log.debug("checkOkForSignat:pdaMandatoryPhotos: leg 0:" + _this.job[0].mobjobSeq + ", seqid:" + seqid);
                if (_this.job[0].mobjobSeq === seqid) {
                    retval = false;
                    var jobStatus;
                    var legCount = _this.job.length;
                    for (var i = 0; i < legCount; i++) {
                        var job = _this.job[i];
                        jobStatus = job.mobjobStatus;
                        legid = job.legid;
                        // long status text is stored in this.data
                        statusString = _this.getStatusString(seqid);
                        if (job.mobjobStatus === 'NJ') {
                            retval = true; // don't care about NJ
                            break;
                        }
                        if (typeof job.imageCount !== 'undefined') {
                            // We have some images - check if some for this status
                            var obj = _this.getCurrentStatusObj(job.mobjobStatus, job.imageCount) || {};
                            if (obj.count > 0) {
                                retval = true;
                                break; // have at least one image
                            }
                        }
                    }
                }
                if (!retval) {
                    // no images found - don't allow operator to continue
                    var alertPopup = _this.alertCtrl.create({
                        title: 'No photos yet for : ' + statusString,
                        subTitle: "Please take at least one photo at this stage, before updating the job status",
                        buttons: ['Ok'],
                        enableBackdropDismiss: false
                    });
                    alertPopup.present();
                    return; // the alert is async - return here while popup does its job
                }
            }
            if (retval)
                _this.openSignatureModal(seqid);
        }; //checkOkForSignat ends here
        this.takePhoto = function (legid, basejob, jobstatus) {
            // function similar to that in imageCapture directive to take and store a photo
            // note that this is only for CCT atm and they don't require notes for photos
            _this.imageService.takePhoto(legid).then(function (imageURI) {
                // image successfully captured by device
                // create metadata object with at least legid, basejob and legStatus properties
                // which are used on the remote endpoint for reference in job_mobile_events table
                var metadata = {
                    legid: legid,
                    basejob: basejob,
                    legStatus: jobstatus
                };
                this.imageService.storeImageURI(legid, imageURI, metadata).then(function (fileData) {
                    // image moved to app storage
                    this.imageFileService.set(fileData.newFileName, 'notes', 'MULTIDEL');
                    this.imageFileService.set(fileData.newFileName, 'readyForUpload', true);
                    this.sharedService.imageSaved.next(fileData);
                }, function (err) {
                    this.log.error(JSON.stringify(err));
                });
            }, function (err) {
                this.log.error(JSON.stringify(err));
            });
        };
        //console.log("JobDetailsPage loading...");
        this.plt = platform;
        this.username = navParams.data;
        this.jobs = navParams.get('jobs');
        __WEBPACK_IMPORTED_MODULE_3__shared_sdk__["b" /* LoopBackConfig */].setBaseURL(configService.apiURL);
        __WEBPACK_IMPORTED_MODULE_3__shared_sdk__["b" /* LoopBackConfig */].setApiVersion(configService.API_VERSION);
        if (this.sharedService.testing) {
            this.pdaImages = true;
            this.pdaNotes = true;
            this.fullStatuses = true;
            this.pdaSignatOnDepPU = false;
        }
        else {
            // For button to take photos
            this.pdaImages = (this.pdaParams.pda_images || (this.siteConfig.getSiteConfigValue('PDA_IMAGES') == 'Y'));
            //For button to take notes
            this.pdaNotes = (this.pdaParams.pda_notes || (this.siteConfig.getSiteConfigValue('PDA_NOTES') == 'Y'));
            // New functionality to get arrive/depart pickup/delivery times
            this.fullStatuses = (this.pdaParams.pda_full_statuses || (this.siteConfig.getSiteConfigValue('PDA_FULL_STATUSES') == 'Y'));
            // signature on depart pickup 
            this.pdaSignatOnDepPU = (this.pdaParams.pda_signat_on_dpu || (this.siteConfig.getSiteConfigValue('PDA_SIGNATURE_DPUP') == 'Y'));
        }
        if (this.pdaSignatOnDepPU && this.pdaSignatOnPU) {
            this.pdaSignatOnPU = false;
        }
        this.pdaAttachedDocs = (this.pdaParams.pda_attached_docs || (this.siteConfig.getSiteConfigValue('PDA_ATTACHED_DOCS') == 'Y'));
        this.serverIP = this.configService.getServerIP();
        this.driverId = this.pdaParams.getDriverId();
        this.jobidparam = this.sharedService.getJobId();
        this.jobMetadata = this.sharedService.getJobMetaData();
        this.reqsNavigation = this.navigationService.isRequired();
        this.navigationInstalled = this.navigationService.isModuleInstalled();
        this.jobChangedService.setlastjobedited(false);
        this.bNewItem = false;
    } //Constructor ends here
    JobDetailsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        //Monitor Image saves.
        this.jdsub1 = this.sharedService.imageSaved.subscribe(function (fileData) {
            // fileData contains image name and metadata with job no, legid, status
            _this.log.debug('imageSaved:' + JSON.stringify(fileData));
            if (_this.pdaMandatoryPhotos) {
                var legid = fileData.metadata.legid; // id of leg of saved image
                var legStatus = fileData.metadata.legStatus;
                var legCount = _this.jobs.length;
                // find our leg and update the image status count
                for (var i = 0; i < legCount; i++) {
                    var job = _this.jobs[i];
                    if (legid == job.mobjobSeq) {
                        if (typeof job.imageCount === 'undefined') {
                            job.imageCount = []; // create property if it doesn't exist yet (array of objects)
                        }
                        var obj = _this.getCurrentStatusObj(legStatus, job.imageCount) || {};
                        if (obj.count === 0)
                            job.imageCount.push(obj); // new array element
                        obj.count++;
                        job.save();
                    }
                }
            }
        });
        //Monitor job cancellations.
        this.jdsub2 = this.sharedService.CANCEL.subscribe(function (cpayload) {
            _this.log.info('Received a CANCEL event');
            _this.log.info(cpayload.platform + ':' + JSON.stringify(cpayload));
            if (typeof cpayload.data !== "undefined") {
                if (cpayload.data.type === 'CANCEL' && cpayload.data.baseJob === _this.jobs[0].mobjobBasejobNum) {
                    var alertPopup_2 = _this.alertCtrl.create({
                        title: 'Job Cancellation',
                        subTitle: 'A Job has Been Cancelled by Base - resyncing.',
                        buttons: [{
                                text: 'OK',
                                handler: function () {
                                    var navTransition = alertPopup_2.dismiss();
                                    navTransition.then(function () {
                                        _this.t.select(0);
                                    });
                                    return false;
                                }
                            }],
                        enableBackdropDismiss: false
                    });
                    alertPopup_2.present();
                } //inner if ends
                else
                    _this.log.info('payload.data.type <> Cancel, help !!!!');
            } //outer if ends
            else {
                _this.log.info('payload.data = undefined, help !!!!');
            }
        });
        this.getJob();
    };
    JobDetailsPage.prototype.ionViewWillEnter = function () {
        console.log("ionViewWillEnter fired!!");
        //set the tab string in shared-service
        this.sharedService.tab = "Job Details";
        this.log.info("In the Job Details Page.");
        if (this.sharedService.getSyncInProgress() == true)
            this.syncInProgress = true;
        else
            this.syncInProgress = false;
    };
    JobDetailsPage.prototype.getPhoneNum = function (property) {
        var propvalue = property.value;
        //console.log("property.value is :::" + propvalue);
        var found = propvalue.match(this.PNO_CHECK);
        return found[0].toString();
    };
    JobDetailsPage.prototype.isPhoneNumAvailable = function (property) {
        if ((property.property == 'mobjobAddress1') || (property.property == 'mobjobAddress2') ||
            (property.property == 'mobjobAddress3') || (property.property == 'mobjobAddress4') ||
            (property.property == 'mobjobAddress5')) {
            var propvalue = property.value;
            var found = propvalue.match(this.PNO_CHECK);
            if (found != null)
                return true;
        }
        else
            //return property.value;
            return false;
    };
    JobDetailsPage.prototype.openNotesModal = function (note) {
        var _this = this;
        this.notesModal = this.modalController.create('JobDetailNotesPage', { 'note': note });
        this.notesModal.onDidDismiss(function (result) {
            if (typeof result !== 'undefined') {
                var seqid = result.seqid;
                var noteText = result.noteText;
                _this.saveNotes(seqid, noteText);
            }
        });
        this.notesModal.present();
    };
    JobDetailsPage.prototype.enterNotes = function (seqid, placeholder, formtype) {
        // TODO - do we need to save seqid?  Should all be in job[0]  
        this.note.seqid = seqid;
        this.note.placeholderText = placeholder || "Enter job notes here";
        this.note.formtype = formtype || "";
        this.openNotesModal(this.note);
    };
    JobDetailsPage.prototype.openWithBrowser = function (filename) {
        var _this = this;
        if (this.serverIP == '')
            this.serverIP = JSON.parse(localStorage.getItem('clientConfig')).serverIP;
        var url = 'http://' + this.serverIP + '/docs/' + this.jobs[0].mobjobClientCode + '/' + filename;
        var target;
        this.plt.ready().then(function (readySource) {
            _this.osplatform = _this.device.platform;
            if (_this.osplatform != null) {
                _this.osplatform = _this.osplatform.toLowerCase();
                if (_this.osplatform.localeCompare('ios') == 0)
                    target = "_blank";
                else
                    target = "_system";
            }
            else
                target = "_system";
            _this.theInAppBrowser.create(url, target, _this.options);
        });
    };
    JobDetailsPage.prototype.trackByFn = function (index, property) {
        return property.index;
    };
    JobDetailsPage.prototype.ionViewWillUnload = function () {
        this.jdsub1.unsubscribe();
        this.jdsub2.unsubscribe();
        if (this.pdaAttachedDocs)
            this.jdsub3.unsubscribe();
    };
    JobDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-job-details',template:/*ion-inline-start:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/job-details/job-details.html"*/'<!--\n\n  Generated template for the JobDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-buttons left>\n\n      <span [ngSwitch]="this.sharedService.loginFlag">\n\n        <ion-badge class="common-border" color="secondary" *ngSwitchCase="true"> Logged In</ion-badge>\n\n        <ion-badge class="common-border" color="danger" *ngSwitchCase="false"> Logged Off</ion-badge>\n\n      </span>\n\n    </ion-buttons>\n\n    <ion-title>JOB DETAILS</ion-title>\n\n    <ion-buttons right>\n\n      <!-- <ion-badge class="common-border" color="danger" *ngIf="newMessageCount">{{newMessageCount}}</ion-badge> -->\n\n      <ion-badge class="common-border" color="danger"> Driver # {{driverId}}</ion-badge>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding text-wrap>\n\n\n\n\n\n  <!-- PHOTO THUMBNAIL CAROUSEL  -->\n\n  <!--   \n\n    <div *ngIf="images.length > 0">\n\n      <ion-scroll direction="x">\n\n        <img *ngFor="let image of images.slice().reverse();trackBy:index" [src]="image.nativeURL" height="50px" class="img-frame">\n\n      </ion-scroll>\n\n    </div> -->\n\n\n\n  <ion-grid no-padding text-wrap *ngFor="let property of data;trackBy:trackByFn"\n\n    [hidden]="!((property.index> 1) && (!property.omitFromForm) && (property.value) && (property.type != \'\') || (property.label === \'Leg\'))">\n\n\n\n    <ion-row>\n\n      <!-- <ion-col *ngIf="(property.label === \'Leg\')" class="jobDetail-label">\n\n        <ion-label class="jobDetails-label" [ngClass]="{ \'alignAlmostRight\': (property.index == 1) }"> </ion-label>\n\n      </ion-col> -->\n\n      <ion-col>\n\n        <ion-list-header class="ionlistheader" *ngIf="(property.label === \'Leg\') && (property.value === 0)">BASE\n\n          JOB</ion-list-header>\n\n        <ion-list-header class="ionlistheader" *ngIf="(property.label === \'Leg\') && (property.value !== 0)">DELIVERY\n\n          LEG</ion-list-header>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col class="jobDetail-label">\n\n        <ion-label class="jobDetails-label" [ngClass]="{ \'alignAlmostRight\': (property.index == 1) }">\n\n          {{ property.label }}\n\n        </ion-label>\n\n      </ion-col>\n\n\n\n      <!--\n\n      <ion-col *ngIf="(property.type != \'\') && (property.type != \'toggle\') && (property.type != \'enum\')  && (!property.omitFromForm)  ">\n\n\n\n         <ion-input *ngIf="(property.type != \'\') && (property.type != \'toggle\') && (property.type != \'enum\')  && (!property.omitFromForm) && ((property.property == \'mobjobAddress1\') || (property.property == \'mobjobAddress2\') || \n\n          (property.property == \'mobjobAddress3\') || (property.property == \'mobjobAddress4\') || \n\n          (property.property == \'mobjobAddress5\')) "\n\n          [readonly]="true" [ngClass]=\'addressfields\' type="{{property.type}}" value="{{property.value}}" class="standardInput"\n\n          text-wrap>\n\n        </ion-input> \n\n\n\n        <ion-input [readonly]="true" [ngClass]=" {\n\n          \'jobnumberspan\'	: (property.property == \'mobjobNumber\'),\n\n          \'requiredInput\'	: ((property.required == true) && (property.value == \'\')),         \n\n          \'suburbfield\'		: (property.property == \'mobjobSuburb\'), \n\n          \'servicefield\'		: (property.property == \'mobjobServiceCode\'), \n\n          \'centered\'			: property.centered,         \n\n          \'jobTotalLegsInput\': ((property.property == \'mobjobTotalLegs\') && jseaPerJob)}"\n\n          type="{{property.type}}" value="{{property.value}}" class="standardInput" text-wrap>\n\n        </ion-input>\n\n      </ion-col>\n\n-->\n\n\n\n      <ion-col\n\n        *ngIf="(property.type != \'\') && (property.type != \'toggle\') && (property.type != \'enum\')  && (!property.omitFromForm)  ">\n\n        <ion-input [readonly]="true" [ngClass]=" {\n\n            \'jobnumberspan\'	: (property.property == \'mobjobNumber\'),\n\n            \'requiredInput\'	: ((property.required == true) && (property.value == \'\')),\n\n            \'addressfields\'	: ((property.property == \'mobjobAddress1\') || (property.property == \'mobjobAddress2\') || \n\n                        (property.property == \'mobjobAddress3\') || (property.property == \'mobjobAddress4\') || \n\n                        (property.property == \'mobjobAddress5\') || (property.property == \'mobjobClientName\')),\n\n            \'suburbfield\'		: (property.property == \'mobjobSuburb\'), \n\n            \'servicefield\'		: (property.property == \'mobjobServiceCode\'), \n\n            \'centered\'			: property.centered,         \n\n            \'jobTotalLegsInput\': ((property.property == \'mobjobTotalLegs\') && jseaPerJob)}" type="{{property.type}}"\n\n          value="{{property.value}}" class="standardInput" text-wrap>\n\n        </ion-input>\n\n        <!--  <ion-input type="tel" id="showTel"  [ngClass]=" { \'addressfields\':true,\'centered\':true} " [hidden]="!isPhoneNumAvailable(property)" value=""></ion-input> -->\n\n\n\n\n\n        <!--  <ion-item *ngIf="isPhoneNumAvailable(property) " [ngClass]=" { \'addressfields\':true} ">\n\n          <ion-icon item-start (click)="callContact(property)" ios="ios-call" md="md-call" [ngClass]=" { \'addressfields\':true} "\n\n            tappable></ion-icon>\n\n          <ion-label [ngClass]=" { \'addressfields\':true} " class="bodytext" text-wrap>CALL\n\n            {{getPhoneNum(property)}}</ion-label>\n\n        </ion-item> -->\n\n\n\n\n\n        <ion-item *ngIf="isPhoneNumAvailable(property) " [ngClass]=" { \'addressfields\':true} ">\n\n          <a href="tel:{{getPhoneNum(property)}}" class="bodytext" text-wrap>\n\n            <ion-icon item-start ios="ios-call" md="md-call" tappable> CALL {{getPhoneNum(property)}}</ion-icon>\n\n          </a>\n\n        </ion-item>\n\n\n\n      </ion-col>\n\n\n\n      <!--  <ion-col *ngIf="(property.type != \'\') && (property.type != \'toggle\') && (property.type != \'enum\')  && (!property.omitFromForm)  ">\n\n        {{phoneNumCheck(property)}}\n\n        <div id=\'test\'></div>\n\n      </ion-col> -->\n\n\n\n\n\n\n\n\n\n      <!--  Show the Job Status Enum Value   -->\n\n      <ion-col *ngIf="(property.type != \'\') && (property.hasOwnProperty(\'enumValue\'))&& (property.type != \'toggle\') && \n\n        (property.type == \'enum\') && (!property.omitFromForm) ">\n\n        <ion-input [readonly]="true" type="{{property.type}}" value="{{property.enumValue.label}}"\n\n          class="jobStatusInput">\n\n        </ion-input>\n\n      </ion-col>\n\n\n\n\n\n      <!-- ACCEPT JOB -->\n\n      <ion-col *ngIf="(property.hasOwnProperty(\'enumValue\') && property.enumValue.value == \'NJ\' \n\n        && (property.legid % 100 == 0) )">\n\n        <button ion-button color="secondary" (click)="sharedService.showSpinner();handleJobStatusChange(property.legid)"\n\n          [disabled]="sharedService.getSyncInProgress()">\n\n          Accept\n\n        </button>\n\n      </ion-col>\n\n\n\n\n\n      <!--   IMAGE CAPTURE -->\n\n      <!-- the metadata here will be passed into the directive as an object and then stored as part of the image properties -->\n\n      <ion-col *ngIf="( pdaImages && property.property == \'mobjobNumber\' )">\n\n        <camera-button [metadata]="{basejob: property.basejob, legid: property.legid, legStatus: property.legStatus}">\n\n        </camera-button>\n\n      </ion-col>\n\n\n\n      <!-- job notes -->\n\n      <ion-col *ngIf="( pdaNotes && property.property == \'mobjobNumber\' )">\n\n        <button ion-button class="fontsize" (click)="sharedService.showSpinner();enterNotes(property.legid)"\n\n          [disabled]="sharedService.getSyncInProgress()">\n\n          Notes\n\n        </button>\n\n      </ion-col>\n\n\n\n      <!--   JSEA PER JOB  -->\n\n      <ion-col *ngIf="(jseaPerJob && property.property == \'mobjobTotalLegs\' && (property.legid % 100 == 0) \n\n        && (property.legStatus != \'NJ\' \n\n        && property.legStatus != \'AC\'))">\n\n        <button ion-button (click)="sharedService.showSpinner();doJseaSubType(\'MULTIDEL\')"\n\n          [disabled]="sharedService.getSyncInProgress()">\n\n          MULTIDEL\n\n        </button>\n\n      </ion-col>\n\n\n\n      <!--   PICKUP  JOB -->\n\n      <!-- possible signature at time of pickup -->\n\n      <ion-col\n\n        *ngIf="(property.hasOwnProperty(\'enumValue\') && pdaSignatOnPU && property.enumValue.value == \'AC\' && (property.legid % 100 == 0) )">\n\n        <button ion-button color="secondary" (click)="sharedService.showSpinner();openSignatureModal(property.legid)"\n\n          [disabled]="sharedService.getSyncInProgress()">\n\n          Pickup\n\n        </button>\n\n      </ion-col>\n\n\n\n      <ion-col *ngIf="(property.hasOwnProperty(\'enumValue\') && !pdaSignatOnPU && \n\n        property.enumValue.value == \'AC\'  && (property.legid % 100 == 0) )">\n\n        <button ion-button color="secondary" (click)="sharedService.showSpinner();handleJobStatusChange(property.legid)"\n\n          [disabled]="sharedService.getSyncInProgress()">\n\n          Pickup\n\n        </button>\n\n      </ion-col>\n\n\n\n\n\n      <!--   Depart Pup -->\n\n      <!-- possible signature at time of depart pickup -->\n\n      <ion-col *ngIf="(property.hasOwnProperty(\'enumValue\') && pdaSignatOnDepPU && \n\n        fullStatuses && property.enumValue.value == \'PU\' \n\n        && (property.legid % 100 == 0) )">\n\n        <button ion-button color="secondary" (click)="sharedService.showSpinner();checkOkForSignat(property.legid)"\n\n          [disabled]="sharedService.getSyncInProgress()">\n\n          Depart P/up\n\n        </button>\n\n      </ion-col>\n\n\n\n      <!-- \n\n       {{property.hasOwnProperty(\'enumValue\') }}=>{{ !pdaSignatOnDepPU }}=>{{ fullStatuses }}=>{{ (property.legid % 100 == 0) }} -->\n\n\n\n      <ion-col *ngIf="(property.hasOwnProperty(\'enumValue\') && !pdaSignatOnDepPU && \n\n        fullStatuses && property.enumValue.value == \'PU\' \n\n          && (property.legid % 100 == 0) )">\n\n        <button ion-button color="secondary" (click)="sharedService.showSpinner();handleJobStatusChange(property.legid)"\n\n          [disabled]="sharedService.getSyncInProgress()">\n\n          Depart P/up\n\n        </button>\n\n      </ion-col>\n\n\n\n      <!--   Arrive Del -->\n\n      <ion-col *ngIf="(property.hasOwnProperty(\'enumValue\') && fullStatuses && \n\n        property.enumValue.value == \'Dp\' && (property.legid % 100 == 0) )">\n\n        <button ion-button color="secondary" (click)="sharedService.showSpinner();handleJobStatusChange(property.legid)"\n\n          [disabled]="sharedService.getSyncInProgress()">\n\n          Arrive Delv\n\n        </button>\n\n      </ion-col>\n\n\n\n      <!--   Navigation -->\n\n      <ion-col *ngIf="(property.property == \'mobjobNumber\')">\n\n        <button ion-button class="fontsize"\n\n          (click)="sharedService.showSpinner();handleNavigation((property.legid % 100))"\n\n          [disabled]="sharedService.getSyncInProgress()">\n\n          Map\n\n        </button>\n\n      </ion-col>\n\n\n\n\n\n      <!--   COMPLETE JOB -->\n\n      <!-- fullStatuses turned on in site config -->\n\n      <!-- no multileg parameter or single leg job has one "tap to sign" on first leg -->\n\n      <ion-col *ngIf="(property.hasOwnProperty(\'enumValue\') && showDelButtonNoSignat && \n\n        fullStatuses && property.enumValue.value == \'Ad\' && (property.legid % 100 == 0) \n\n          && (!pdaParams.multileg || property.numlegs < 2))">\n\n        <button ion-button color="secondary" (click)="sharedService.showSpinner();handleJobStatusChange(property.legid)"\n\n          [disabled]="sharedService.getSyncInProgress()">\n\n          Deliver\n\n        </button>\n\n      </ion-col>\n\n\n\n      <!-- {{property.hasOwnProperty(\'enumValue\') }}=>{{ showDelButtonNoSignat }}=>{{ fullStatuses }}=>{{ (property.legid % 100 == 0) }} -->\n\n\n\n      <ion-col *ngIf="(property.hasOwnProperty(\'enumValue\') \n\n        && !showDelButtonNoSignat && fullStatuses && property.enumValue.value == \'Ad\' \n\n          && (property.legid % 100 == 0) && (!pdaParams.multileg || property.numlegs < 2))">\n\n        <button ion-button color="secondary" (click)="sharedService.showSpinner();checkOkForSignat(property.legid)"\n\n          [disabled]="sharedService.getSyncInProgress()">\n\n          Deliver\n\n        </button>\n\n      </ion-col>\n\n\n\n      <!-- multileg parameter has individual per leg "tap to sign" -->\n\n      <ion-col *ngIf="(property.hasOwnProperty(\'enumValue\') && fullStatuses && property.enumValue.value == \'Ad\' \n\n        && (property.legid % 100 > 0) \n\n            && (pdaParams.multileg && property.numlegs > 1) )">\n\n        <button ion-button color="secondary" (click)="sharedService.showSpinner();openSignatureModal(property.legid)"\n\n          [disabled]="sharedService.getSyncInProgress()">\n\n          Deliver\n\n        </button>\n\n      </ion-col>\n\n\n\n\n\n      <!-- fullStatuses NOT turned on in site config -->\n\n      <!-- no multileg parameter or single leg job has one "tap to sign" on first leg -->\n\n      <ion-col\n\n        *ngIf="(property.hasOwnProperty(\'enumValue\') && !fullStatuses && \n\n        property.enumValue.value == \'PU\' && (property.legid % 100 == 0) && (!pdaParams.multileg || property.numlegs < 2))">\n\n        <button ion-button color="secondary" pod-name="podname" my-key="property.legid"\n\n          (click)="sharedService.showSpinner();openSignatureModal(property.legid)"\n\n          [disabled]="sharedService.getSyncInProgress()">\n\n          Deliver\n\n        </button>\n\n      </ion-col>\n\n\n\n      <!-- multileg parameter has individual per leg "tap to sign" -->\n\n      <ion-col *ngIf="(property.hasOwnProperty(\'enumValue\') && !fullStatuses && property.enumValue.value == \'PU\' \n\n        && (property.legid % 100 > 0) \n\n            && (pdaParams.multileg && property.numlegs > 1) )">\n\n        <button ion-button color="secondary" (click)="sharedService.showSpinner();openSignatureModal(property.legid)"\n\n          [disabled]="sharedService.getSyncInProgress()">\n\n          Deliver\n\n        </button>\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <div class="item item-divider" *ngIf="pdaAttachedDocs">\n\n    <ion-label>File Attachments:</ion-label>\n\n    <ion-item *ngFor="let filename of attachments;trackBy:index">\n\n      <button ion-button clear (click)="sharedService.showSpinner();openWithBrowser(filename)">{{filename}}</button>\n\n    </ion-item>\n\n  </div>\n\n\n\n  <ion-item *ngIf="attachments.length == 0" class="item bodytext">\n\n    No File attachments.\n\n  </ion-item>\n\n</ion-content>'/*ion-inline-end:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/job-details/job-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_siteconfig_service_siteconfig_service__["a" /* SiteconfigServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_log_service_log_service__["a" /* LogServiceProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_base_service_base_service__["a" /* BaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_10__providers_shared_service_shared_service__["a" /* SharedServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_jsea_service_jsea_service__["a" /* JseaServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_13__providers_job_changed_service_job_changed_service__["a" /* JobChangedServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_14__providers_gps_audit_service_gps_audit_service__["a" /* GpsAuditServiceProvider */], __WEBPACK_IMPORTED_MODULE_12__providers_config_service_config_service__["a" /* ConfigServiceProvider */], __WEBPACK_IMPORTED_MODULE_18__providers_message_service_message_service__["a" /* MessageServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_15__providers_image_service_image_service__["a" /* ImageServiceProvider */], __WEBPACK_IMPORTED_MODULE_16__providers_jobnote_replication_service_jobnote_replication_service__["a" /* JobnoteReplicationServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_17__providers_navigation_service_navigation_service__["a" /* NavigationServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_19__providers_attach_service_attach_service__["a" /* AttachServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_insomnia__["a" /* Insomnia */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__["a" /* Device */]])
    ], JobDetailsPage);
    return JobDetailsPage;
}());

//# sourceMappingURL=job-details.js.map

/***/ })

});
//# sourceMappingURL=4.js.map