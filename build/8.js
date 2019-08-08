webpackJsonp([8],{

/***/ 843:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(871);
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

/***/ 871:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_login_service_login_service__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_shared_service_shared_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_sqlite_service_sqlite_service__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(storage, loginService, alertCtrl, sharedService, splashScreen) {
        //console.log("LoginPage loading...");
        this.storage = storage;
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
                }
                else {
                    // update last login time
                    loginDetails.time = new Date().toISOString();
                }
                // Store details in local storage & sqllite  
                var uid = _this.registerCredentials.username;
                (function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.storage.set('login', JSON.stringify(loginDetails)).then(function (res) {
                                    if (res)
                                        console.log("login is set");
                                    else
                                        console.log("login is not set");
                                })];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, this.storage.set('userId', uid).then(function (res) {
                                        if (res)
                                            console.log("userid is set");
                                        else
                                            console.log("userid is not set");
                                    })];
                            case 2:
                                _a.sent();
                                //this.storage.printAll();
                                localStorage.setItem('login', JSON.stringify(loginDetails));
                                localStorage.setItem('userId', uid);
                                /* await this.storage.get('userId').then((val) => {
                                  alert('GET:userId set is:' + val);
                                  console.log('GET:userId set is:' + val);
                                }); */
                                //this.splashScreen.show();
                                //Redirect to the root app component.
                                document.location.href = 'index.html';
                                return [2 /*return*/];
                        }
                    });
                }); })();
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_sqlite_service_sqlite_service__["a" /* SqliteServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_login_service_login_service__["a" /* LoginServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_shared_service_shared_service__["a" /* SharedServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=8.js.map