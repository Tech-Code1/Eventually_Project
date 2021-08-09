"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ComunityCreationService = void 0;
var core_1 = require("@angular/core");
var environment_prod_1 = require("../../../environments/environment.prod");
var buildFormData_1 = require("../../shared/utils/buildFormData");
var ComunityCreationService = /** @class */ (function () {
    function ComunityCreationService(httpClient) {
        this.httpClient = httpClient;
        this.comunityCreationDTO = {};
        this.baseUrl = environment_prod_1.environment.baseUrl;
    }
    ComunityCreationService.prototype.AddStepInfo = function (info) {
        console.log(info);
        this.comunityCreationDTO = __assign(__assign({}, this.comunityCreationDTO), info);
    };
    ComunityCreationService.prototype.FinishComunityCreation = function () {
        var finalDTO = {
            name: this.comunityCreationDTO.nameCommunity,
            areaId: this.comunityCreationDTO.areaCommunity,
            otherArea: this.comunityCreationDTO.areaOtherCommunity,
            email: this.comunityCreationDTO.emailCommunity,
            facebook: this.comunityCreationDTO.socialFacebook,
            linkedin: this.comunityCreationDTO.socialLinkedin,
            instagram: this.comunityCreationDTO.socialInstagram,
            github: this.comunityCreationDTO.socialGithub,
            twitter: this.comunityCreationDTO.socialTwitter,
            discord: this.comunityCreationDTO.socialDiscord,
            description: this.comunityCreationDTO.descriptionCommunity,
            logo: this.comunityCreationDTO.logo,
            banner: this.comunityCreationDTO.banner
        };
        debugger;
        var formData = buildFormData_1.buildFormData(finalDTO);
        return this.httpClient.post(this.baseUrl + "api/comunities", formData);
    };
    ComunityCreationService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ComunityCreationService);
    return ComunityCreationService;
}());
exports.ComunityCreationService = ComunityCreationService;
