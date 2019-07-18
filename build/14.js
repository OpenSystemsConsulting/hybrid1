webpackJsonp([14],{

/***/ 833:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarcodePageModule", function() { return BarcodePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__barcode__ = __webpack_require__(857);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BarcodePageModule = /** @class */ (function () {
    function BarcodePageModule() {
    }
    BarcodePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__barcode__["a" /* BarcodePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__barcode__["a" /* BarcodePage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__barcode__["a" /* BarcodePage */]
            ]
        })
    ], BarcodePageModule);
    return BarcodePageModule;
}());

//# sourceMappingURL=barcode.module.js.map

/***/ }),

/***/ 857:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarcodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_sdk__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_config_service_config_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_log_service_log_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_pdaparams_service_pdaparams_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_siteconfig_service_siteconfig_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_base_service_base_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_platform_ready_service_platform_ready_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_shared_service_shared_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_message_service_message_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_barcode_replication_service_barcode_replication_service__ = __webpack_require__(470);
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
 * Generated class for the BarcodePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var BarcodePage = /** @class */ (function () {
    function BarcodePage(navCtrl, navParams, configService, pdaParams, siteConfig, logger, base, alertCtrl, platformReady, device, barcodeScanner, modalController, sharedService, messageService, barcodeReplicationService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.configService = configService;
        this.pdaParams = pdaParams;
        this.siteConfig = siteConfig;
        this.logger = logger;
        this.base = base;
        this.alertCtrl = alertCtrl;
        this.platformReady = platformReady;
        this.device = device;
        this.barcodeScanner = barcodeScanner;
        this.modalController = modalController;
        this.sharedService = sharedService;
        this.messageService = messageService;
        this.barcodeReplicationService = barcodeReplicationService;
        this.t = this.navCtrl.parent;
        this.logParams = { site: this.pdaParams.getSiteId(), driver: this.pdaParams.getDriverId(), fn: 'BarcodePage' };
        this.log = this.logger.getInstance(this.logParams);
        this.saveok = false;
        this.useCamera = true;
        this.useCipherlab = false;
        this.myBcodeIsjobNum = false;
        this.my_is_scan_on = true;
        this.matchedJobsPieces = 0;
        this.LocalBarcodeHist = lbclient.models.LocalBarcodeHist;
        this.RemoteBarcodeHist = lbclient.models.RemoteBarcodeHist;
        this.Job = lbclient.models.LocalJob;
        this.barcodes = [];
        this.barcodetemp = "";
        this.strncmp = function (str1, str2, n) {
            str1 = str1.substring(0, n);
            str2 = str2.substring(0, n);
            return ((str1 == str2) ? 0 :
                ((str1 > str2) ? 1 : -1));
        };
        /*========================================*/
        /*        CAMERA SCAN                    */
        /*========================================*/
        this.scan = function () {
            if (_this.platformReady.isPlatformReady()) {
                _this.useCamera = true;
                _this.barcodeScanner.scan().then(function (barcodeData) {
                    // Success! Barcode data is here
                    // Returns object e.g.: {text: "053329109558", format: "UPC_A", cancelled: false}
                    _this.barcodes.push(barcodeData.text);
                    _this.log.debug('CAMERA scanned OK: barcodeData:' + barcodeData);
                }, function (error) {
                    // An error occurred
                    _this.log.debug('CAMERA BAD scan : error:' + error);
                });
            }
            else {
                var ltitle = 'ERROR';
                var lmes = 'CAMERA: cordova NOT ready';
                var alert_1 = _this.alertCtrl.create({
                    title: ltitle,
                    subTitle: lmes,
                    buttons: ['Ok'],
                    enableBackdropDismiss: false
                });
                alert_1.present();
            }
            ;
        }; //Camera Scan ends
        /*========================================*/
        /*        SCAN SESSION CANCEL   */
        /*========================================*/
        this.scanCancel = function () {
            var confirmPopup = _this.alertCtrl.create({
                title: 'CANCEL Scan Session',
                subTitle: 'Are you sure you want to CANCEL this scan session (You will lose all data scanned)?',
                buttons: [
                    {
                        text: 'Yes',
                        handler: function () {
                            _this.log.debug('User has Cancelled the scan session');
                            _this.barcodes = [];
                            return;
                        }
                    },
                    {
                        text: 'No',
                        handler: function () {
                            _this.log.debug('User has CANCELLED out of a Scan session CANCEL');
                        }
                    }
                ],
                enableBackdropDismiss: false
            });
            confirmPopup.present();
        }; //scanCancel() ends here
        this.openSignatureModal = function () {
            var lparams = { metadata: { barcodeSignOff: true } };
            var modal = _this.modalController.create('SignaturePage', lparams);
            modal.onDidDismiss(function (result) {
                if (typeof result !== 'undefined') {
                    var podname = result.podname;
                    var signature = result.signature;
                    _this.confirmscanSubmit(signature, podname);
                }
            });
            modal.present();
        };
        this.scanSubmit = function () {
            var _this = this;
            if (this.barcodes.length == 0) {
                return;
            }
            var subconfirmPopup = this.alertCtrl.create({
                title: 'Scan Session Confirm',
                message: 'Are you sure you want to submit your Scan session to the database ?',
                buttons: [
                    {
                        text: 'Submit',
                        handler: function () {
                            if (_this.my_is_scan_on == false) {
                                _this.openSignatureModal();
                            }
                            else {
                                _this.confirmscanSubmit();
                            }
                        }
                    },
                    {
                        text: 'Cancel',
                        handler: function () {
                            _this.log.debug('User has CANCELLED out of a Scan session SUBMIT Doing nothing');
                            return;
                        }
                    }
                ],
                enableBackdropDismiss: false
            });
            subconfirmPopup.present();
        }; //scanSubmit() ends
        /*========================================*/
        /*       SCAN SESSION SUBMIT   */
        /*========================================*/
        this.confirmscanSubmit = function (signat, podname) {
            var _this = this;
            var save_status = 'FAILED';
            var _filter = {
                "where": { and: [{ "mobjobDriver": this.pdaParams.getDriverId() }, { "mobjobStatus": { "neq": "DL" } }] },
                "order": ['mobjobNumber ASC', 'mobjobLegNumber ASC']
            };
            var filter = Object.assign({}, _filter);
            this.Job.find(filter, function (err, jobs) {
                _this.doSubmitWork(jobs, signat, podname);
            });
        }; //confirmscanSubmit() ends here
        this.doSubmitWork = function (jobs, signat, podname) {
            //console.log("doSubmitWork fired!!");
            var syncRequired = 0;
            var foundJob = false;
            var foundIdx = 0;
            var foundJobNum;
            var foundJobDate;
            var fjobarr = new Array();
            var matchedJobsPieces = 0;
            // A confirm dialog
            var len = this.barcodes.length;
            this.log.debug("Searching on " + len + " Barcodes across all Jobs");
            for (var i = 0; i < len; i++) {
                //Set up a unique number
                var d = new Date();
                var uniqId = d.getTime();
                var bchSession = new this.LocalBarcodeHist();
                bchSession.bchSeq = uniqId % 1000000;
                bchSession.bchDriver = this.pdaParams.getDriverId();
                bchSession.bchBarcode = this.barcodes[i];
                this.bcode = bchSession.bchBarcode;
                this.log.debug("Looking for BCODE [" + this.bcode + "] across all Jobs");
                bchSession.bchTimestamp = d.toISOString();
                var oset = d.getTimezoneOffset();
                bchSession.bchTimestamp += (oset * -1) * 60 * 1000;
                //Always Zero for a Scan on 
                bchSession.bchTimestamp = new Date().toISOString();
                if (this.my_is_scan_on) {
                    bchSession.bchJobno = 0;
                    bchSession.bchJobdate = new Date();
                    bchSession.bchEvent = 'SCAN ON';
                }
                else {
                    //We need to get these from a Job
                    bchSession.bchEvent = 'SCAN OFF';
                    /****************************************************************/
                    /* Go Thru the list of jobs that are Picked up and compare their */
                    /* connote number against the barcode and when matches thats the*/
                    /* Job to finish off                                            */
                    /****************************************************************/
                    this.log.debug("Looking across " + jobs.length + " JOBS");
                    for (var x = 0; x < jobs.length; x++) {
                        var job = jobs[x];
                        var dstring;
                        var myconnote_num;
                        //Only do this for the first leg as the others are not usefull
                        //console.log("mobjobLegNumber is:" + job.mobjobLegNumber);
                        if (job.mobjobLegNumber == 0) {
                            var jn = job.mobjobNumber;
                            if (this.myBcodeIsjobNum) {
                                //==== DATE HANDLING to get the connotenum to something like
                                //============= 1160615002020 ===========================
                                var jobBookDay = new Date(job.mobjobBookingDay);
                                var fy = jobBookDay.getFullYear() % 100;
                                var dm = jobBookDay.getDate() * 1;
                                var mi = jobBookDay.getMonth() + 1;
                                //The  leading zero is due to the barcode that gets generate needing to be an even number
                                dstring = "01" + fy + ((mi < 10) ? ("0" + mi) : mi) + ((dm < 10) ? ("0" + dm) : dm);
                                jn = (jn < 100000 && jn > 9999) ? ("0" + jn) : jn;
                                jn = (jn < 10000) ? ("00" + jn) : jn;
                                myconnote_num = dstring + jn;
                            }
                            else {
                                //Connote num stored here
                                myconnote_num = job.mobjobAddrExtras;
                            }
                            bchSession.bchEventSubtype = 'N/A';
                            this.log.debug("Before checking Barcode against Job: " + job.mobjobNumber + " JobsConnoteNumber: " + myconnote_num + ' Barcode: ' + this.bcode);
                            //Only Compare the length of myconnote_num eg so if Bcode was WXLGHHH01 and myconn is WXLGHHH then OK
                            if (myconnote_num.length > 1 && this.strncmp(myconnote_num, this.bcode, myconnote_num.length) == 0) {
                                this.log.debug('Scan OFF FOUND Barcode on Job:' + jn + " On Date " + myconnote_num);
                                foundJob = true;
                                //Should store the Pickup Leg of the Found Job
                                foundIdx = x;
                                foundJobNum = job.mobjobNumber;
                                foundJobDate = job.mobjobBookingDay;
                                matchedJobsPieces += job.mobjobJobPieces;
                                this.JobsPieces = matchedJobsPieces;
                                this.log.debug('Scan OFF recording JOb Index ' + foundIdx + 'Pieces now = ' + matchedJobsPieces);
                                fjobarr.push(foundIdx);
                                break; // No need to keep looking we have found the job for this barcode   
                            }
                        }
                    }
                    if (foundJob == false) {
                        bchSession.bchEventSubtype = 'ORPHAN';
                    }
                } //SCAN OFF ELSE ENDS
                this.log.info("About to save Barcode Hist Session for barcode " + JSON.stringify(bchSession));
                bchSession.save();
                syncRequired++;
            }
            //Go through Jobs and attach signat and PODNAME where required
            if (this.my_is_scan_on == false) {
                this.log.debug('Doing Job update for SCAN OFF Job foundJob = ' + foundJob);
                if (foundJob) {
                    var fjobnum = 0;
                    //The list can array may have matched the same job number multiple times
                    var uniquearr = fjobarr.filter(function (item, i, ar) { return ar.indexOf(item) === i; });
                    //Go Thru the found Job Array
                    for (var li = 0; li < uniquearr.length; li++) {
                        var lfidx = uniquearr[li];
                        for (var x = 0; x < 2; x++) {
                            this.log.debug('In Job loop: x = ' + x);
                            var job = jobs[lfidx + x];
                            if (x == 0)
                                fjobnum = job.mobjobNumber;
                            this.log.debug('In Job loop: x = ' + x + ' jobnum = ' + job.mobjobNumber);
                            if (x == 1) {
                                if (fjobnum != job.mobjobNumber) {
                                    this.log.debug('!!!!!!!!! JOb Number Mismatch Pup JOb ' + fjobnum + ' Del job ' + job.mobjobNumber);
                                }
                                else {
                                    this.log.debug('In Job loop: x + 1 = ' + x + ' jobnum = ' + job.mobjobNumber);
                                    job.mobjobSignat = signat || "";
                                    if (podname) {
                                        job.mobjobPodName = podname;
                                        job.mobjobPodTime = new Date().toISOString();
                                    }
                                }
                            }
                            job.mobjobStatus = 'DL';
                            job.save(); // save leg           
                        }
                    }
                }
                else {
                    var ltitle = 'ERROR';
                    var lmes = 'The Scan Off could not find a job that matched your barcodes';
                    var alert_2 = this.alertCtrl.create({
                        title: ltitle,
                        subTitle: lmes,
                        buttons: ['Ok'],
                        enableBackdropDismiss: false
                    });
                    alert_2.present();
                }
            } //my_is_scan_on check for false ends here
            this.finishSubmit(foundJob, syncRequired);
        }; //End of doSubmitWork()
        this.finishSubmit = function (foundJob, syncRequired) {
            if (foundJob == false) {
                this.log.info("Been through all barcodes and Jobs and NOT FOUND CONNOTE ON ANY JOB ");
            }
            if (syncRequired) {
                this.barcodeReplicationService.barcode_sync();
                //this.barcodeService.setSyncRequired(true);
                this.barcodes = [];
            }
            if (this.platformReady.isPlatformReady()) {
                if (this.useCipherlab) {
                    window.plugins.CipherlabRS30CordovaPlugin.destroy(function () { });
                }
            }
            //this.app.getRootNav().setRoot(TabsPage);
            //this.navCtrl.popToRoot();
            this.t.select(0);
        }; //finishSubmit() ends here
        this.arrayRemove = function (value) {
            _this.barcodes = _this.barcodes.filter(function (ele) {
                return ele != value;
            });
        };
        this.submitBarInput = function () {
            if (_this.barcodetemp.length > 0 && _this.barcodetemp.trim() != '') {
                _this.barcodes.push(_this.barcodetemp);
                _this.barcodetemp = "";
            }
        };
        //console.log("BarcodePage loading...");
        this.username = navParams.data;
        __WEBPACK_IMPORTED_MODULE_4__shared_sdk__["b" /* LoopBackConfig */].setBaseURL(this.configService.apiURL);
        __WEBPACK_IMPORTED_MODULE_4__shared_sdk__["b" /* LoopBackConfig */].setApiVersion(this.configService.API_VERSION);
        /* this.sharedService.messageToDriver.subscribe(payload => {
          // this.newMessageCount = this.messageService.getNewMesssageCount();
        }); */
    }
    BarcodePage.prototype.ionViewDidEnter = function () {
        // initialise the current new message count in this scope
        // this.newMessageCount = this.messageService.getNewMesssageCount(); 
        var _this = this;
        if (this.sharedService.testing) {
            this.YN = 'Y';
            this.pda_barcodes = 'Y';
        }
        else {
            this.pda_barcodes = this.siteConfig.getSiteConfigYN('PDA_BARCODES');
            this.YN = this.siteConfig.getSiteConfigYN('BARCODE_SUPP_BCODEISJOBNUM');
        }
        this.driverId = this.pdaParams.getDriverId();
        if (this.pda_barcodes != 'Y') {
            var alert_3 = this.alertCtrl.create({
                title: 'Module not installed',
                subTitle: 'This module is not installed.',
                buttons: [{
                        text: 'OK',
                        handler: function () {
                            var navTransition = alert_3.dismiss();
                            navTransition.then(function () {
                                _this.t.select(0);
                            });
                            return false;
                        }
                    }],
                enableBackdropDismiss: false
            });
            alert_3.present();
        }
        else {
            //Check if the user is logged in
            if (this.pdaParams.isDrvLoggedOn() == false) {
                var logAlert_1 = this.alertCtrl.create({
                    title: 'ERROR',
                    subTitle: 'You are not logged in please do so first from the jobs screen',
                    buttons: [{
                            text: 'OK',
                            handler: function () {
                                var navTransition = logAlert_1.dismiss();
                                navTransition.then(function () {
                                    _this.t.select(0);
                                });
                                return false;
                            }
                        }],
                    enableBackdropDismiss: false
                });
                logAlert_1.present();
            }
            //Check the value of 'BARCODE_SUPP_BCODEISJOBNUM'
            if (this.YN === "Y") {
                this.myBcodeIsjobNum = true;
            }
            else {
                this.myBcodeIsjobNum = false;
            }
            this.jobsPieces = this.matchedJobsPieces;
            //Determine Scan Type   
            var scanPrompt = this.alertCtrl.create({
                title: 'Determine SCAN Type',
                message: 'Please choose what SCAN type you are performing',
                buttons: [
                    {
                        text: 'Scan On',
                        handler: function () {
                            _this.log.debug("Choosing Scan type: Chose SCAN ON !!!");
                            _this.my_scan_session_type = 'SCAN ON SESSION';
                            _this.scan_session_id = _this.my_scan_session_type;
                            _this.my_is_scan_on = true;
                        }
                    },
                    {
                        text: 'Scan Off',
                        handler: function () {
                            _this.log.debug("Choosing Scan type: Chose SCAN OFF !!!");
                            _this.my_scan_session_type = 'SCAN OFF SESSION';
                            _this.scan_session_id = _this.my_scan_session_type;
                            _this.my_is_scan_on = false;
                        }
                    }
                ],
                enableBackdropDismiss: false
            });
            scanPrompt.present();
            //Check Device for a CipherLab RS30
            if (this.platformReady.isPlatformReady()) {
                var model = this.device.model;
                this.log.debug("Device Model = " + model);
                if (model == 'CipherLab RS30') {
                    this.log.debug("Device is a CipherLab RS30 " + model);
                    this.useCamera = false;
                    this.useCipherlab = true;
                }
                else {
                    this.log.debug("Device is NOT !!!! a CipherLab RS30 HEAD scanning NOT Available " + model);
                    this.useCamera = true;
                }
                if (this.useCipherlab) {
                    window.plugins.CipherlabRS30CordovaPlugin.initialise(function () {
                        window.plugins.CipherlabRS30CordovaPlugin.setReceiveScanCallback(function (data) {
                            _this.log.debug("Cipherlab Callback called scanned = [" + data + "]");
                            _this.barcodes.push(data);
                        });
                    });
                }
                window.onbeforeunload = function () {
                    _this.log.debug('BarcodeCtrl: onBeforeUnload');
                };
            }
        } //End of else    
    }; //ionViewDidEnter() ends here
    BarcodePage.prototype.ionViewWillEnter = function () {
        //set the tab string in shared-service
        this.sharedService.tab = "Scan/Barcode";
        this.log.info("In the Scan/Barcode Tab.");
    };
    BarcodePage.prototype.customTrackBy = function (index, obj) {
        return index;
    };
    BarcodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-barcode',template:/*ion-inline-start:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/barcode/barcode.html"*/'<!--\n\n  Generated template for the BarcodePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-buttons left>\n\n            <span [ngSwitch]="this.sharedService.loginFlag">\n\n                <ion-badge class="common-border" color="secondary" *ngSwitchCase="true"> Logged In</ion-badge>\n\n                <ion-badge class="common-border" color="danger" *ngSwitchCase="false"> Logged Off</ion-badge>\n\n            </span>\n\n        </ion-buttons>\n\n        <ion-title>BARCODE</ion-title>\n\n        <ion-buttons right>\n\n            <ion-badge class="common-border" color="danger"> Driver # {{driverId}}</ion-badge>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content [ngClass]="{ \'overflow-scroll\': (desktopBrowserScrolling == true) }" padding>\n\n    <ion-list>\n\n        <span [ngSwitch]="my_is_scan_on"> Scan Session :\n\n            <ion-badge color="secondary" *ngSwitchCase="true"> On</ion-badge>\n\n            <ion-badge color="danger" *ngSwitchCase="false"> Off</ion-badge>\n\n        </span>\n\n        <span></span>\n\n        <p></p>\n\n    </ion-list>\n\n\n\n\n\n    <ion-card round inset class="ion-card" type="item-text-wrap" tappable>\n\n        <ion-row>\n\n            <ion-col>\n\n                <button ion-button full round color="primary" type="reset" (click)="submitBarInput()"\n\n                    [disabled]="!(barcodetemp.trim())">\n\n                    Enter BarCodes Manually\n\n                </button>\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n            <ion-col>\n\n                <ion-input type="text" [(ngModel)]="barcodetemp" clearInput placeholder="Enter A Barcode">\n\n                </ion-input>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card>\n\n\n\n\n\n    <br>\n\n    <ion-row>\n\n        <ion-col>\n\n            <button ion-button full round color="secondary" (click)="scan()">\n\n                OR Scan BarCodes\n\n            </button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-card round inset class="ion-card" type="item-text-wrap" tappable [hidden]="barcodes.length !== 0">\n\n        <ion-row nolines>\n\n            <ion-col>\n\n                <strong>\n\n                    No Barcodes Added.\n\n                </strong>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card>\n\n    <br>\n\n\n\n    <ion-card round inset class="ion-card" type="item-text-wrap" tappable [hidden]="barcodes.length == 0">\n\n        <ion-item-divider class="ion-list-header" color="primary">Barcode List</ion-item-divider>\n\n        <ion-row *ngFor="let barcode of barcodes;let i = index;" no-padding no-margin>\n\n            <ion-col col-2 style="margin:auto;">{{ i+ 1 }}.</ion-col>\n\n            <ion-col col-7 style="margin:auto;">{{barcodes[i]}}</ion-col>\n\n            <ion-col col-3 style="margin:auto;">\n\n                <button ion-button color="danger" (click)="arrayRemove(barcodes[i])">\n\n                    <ion-icon name="remove"></ion-icon>\n\n                </button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card>\n\n\n\n    <ion-row *ngIf="barcodes.length !== 0">\n\n        <ion-col col-6>\n\n            <button ion-button full round color="secondary" (click)="sharedService.showSpinner();scanSubmit()">\n\n                Submit\n\n            </button>\n\n        </ion-col>\n\n\n\n        <ion-col col-6>\n\n            <button ion-button full round color="danger" (click)="sharedService.showSpinner();scanCancel()">\n\n                Cancel\n\n            </button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n</ion-content>'/*ion-inline-end:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/barcode/barcode.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_config_service_config_service__["a" /* ConfigServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_pdaparams_service_pdaparams_service__["a" /* PdaparamsServiceProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_siteconfig_service_siteconfig_service__["a" /* SiteconfigServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_log_service_log_service__["a" /* LogServiceProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_base_service_base_service__["a" /* BaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_10__providers_platform_ready_service_platform_ready_service__["a" /* PlatformReadyServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_11__providers_shared_service_shared_service__["a" /* SharedServiceProvider */], __WEBPACK_IMPORTED_MODULE_12__providers_message_service_message_service__["a" /* MessageServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_13__providers_barcode_replication_service_barcode_replication_service__["a" /* BarcodeReplicationServiceProvider */]])
    ], BarcodePage);
    return BarcodePage;
}());

//# sourceMappingURL=barcode.js.map

/***/ })

});
//# sourceMappingURL=14.js.map