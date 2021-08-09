"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TokenGuard = void 0;
var core_1 = require("@angular/core");
var TokenGuard = /** @class */ (function () {
    /**
     *
     */
    function TokenGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    TokenGuard.prototype.canActivate = function (route, state) {
        var isLoggedIn = this.authService.isLoggedIn();
        if (!isLoggedIn) {
            this.router.navigate(['/auth/registrarse']);
            return false;
        }
        return true;
    };
    TokenGuard = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], TokenGuard);
    return TokenGuard;
}());
exports.TokenGuard = TokenGuard;
