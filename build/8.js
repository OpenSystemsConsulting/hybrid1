webpackJsonp([8],{

/***/ 842:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(870);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 870:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_login_service_login_service__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_shared_service_shared_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(206);
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
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(loginService, alertCtrl, sharedService, splashScreen) {
        //console.log("LoginPage loading...");
        this.loginService = loginService;
        this.alertCtrl = alertCtrl;
        this.sharedService = sharedService;
        this.splashScreen = splashScreen;
        this.ngUnsubscribe = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.registerCredentials = { username: '', password: '' };
        this.allowed = false;
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        this.loginService.login(this.registerCredentials)
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (allowed) {
            _this.allowed = allowed;
        }, function (error) {
            _this.showError(error);
            // this.spinnerService.hideSpinner();
        }, function () {
            if (_this.allowed) {
                //this.spinnerService.showSpinner();
                // Retrieve current login details
                var loginDetails = JSON.parse(localStorage.getItem('login'));
                // If no login details assume new installation or reset
                if (!loginDetails) {
                    // 1st time ever logged in on PDA
                    loginDetails = {
                        username: _this.registerCredentials.username,
                        time: new Date().toISOString()
                    };
                    // Store details in local storage           
                    localStorage.setItem('login', JSON.stringify(loginDetails));
                }
                else {
                    // update last login time
                    loginDetails.time = new Date().toISOString();
                    localStorage.setItem('login', JSON.stringify(loginDetails));
                }
                //Set the clientid         
                localStorage.setItem('userId', _this.registerCredentials.username);
                //this.splashScreen.show();
                //Redirect to the root app component.
                document.location.href = 'index.html';
            }
            else {
                _this.showError("Access Denied!");
                //this.spinnerService.hideSpinner();
            }
        }); //login subscription ends here  
    }; //login() ends here
    LoginPage.prototype.showError = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Login failed!',
            subTitle: text,
            buttons: ['OK'],
            enableBackdropDismiss: false
        });
        alert.present();
    };
    LoginPage.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/login/login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>LOGIN</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<!--https://devdactic.com/login-ionic-2/ -->\n\n\n\n<ion-content padding text-wrap>\n\n \n\n    <ion-row style="text-align: center">\n\n      <ion-col>\n\n        <img src="assets/OSC_300_150.jpg" />\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <form (ngSubmit)="login()" #registerForm="ngForm">\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-list-header class="login-header" color="primary">Welcome to the TPLUS Mobile Application.\n\n          </ion-list-header>\n\n          <ion-list inset no-lines>\n\n            <ion-item>\n\n              <ion-input type="text" placeholder="Username" name="username" [(ngModel)]="registerCredentials.username"\n\n                required></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-input type="password" placeholder="Password" name="password"\n\n                [(ngModel)]="registerCredentials.password" required></ion-input>\n\n            </ion-item>\n\n            <p>Note: Usernames and passwords are case-sensitive.</p>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col>\n\n          <button ion-button color="secondary" full round full type="submit" [disabled]="!registerForm.form.valid">\n\n            <ion-icon name="log-in" style="font-size:20px;color:white;text-shadow:2px 2px 4px #000000;"> L/ON</ion-icon>\n\n          </button>\n\n          <br>\n\n          <ion-list-header class="login-header" color="primary">Open Systems Consulting © 2019\n\n          </ion-list-header>\n\n        </ion-col>\n\n      </ion-row>\n\n    </form>\n\n  \n\n\n\n</ion-content>'/*ion-inline-end:"/app/strongloop/tplus_mobile_riyaz/TPLUS3/client/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_login_service_login_service__["a" /* LoginServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_shared_service_shared_service__["a" /* SharedServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=8.js.map