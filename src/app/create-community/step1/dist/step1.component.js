"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Step1Component = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var Step1Component = /** @class */ (function () {
    function Step1Component(comunityCreationService, router) {
        this.comunityCreationService = comunityCreationService;
        this.router = router;
        this.stepOne = new forms_1.FormGroup({
            nameCommunity: new forms_1.FormControl(''),
            areaCommunity: new forms_1.FormControl(''),
            areaOtherCommunity: new forms_1.FormControl(''),
            emailCommunity: new forms_1.FormControl('')
        });
    }
    Step1Component.prototype.ngOnInit = function () {
    };
    Step1Component.prototype.onSubmit = function () {
        if (!this.stepOne.valid) {
            return;
        }
        this.comunityCreationService.AddStepInfo(this.stepOne.value);
        this.router.navigate(['/crear-comunidad/conociendo-la-comunidad']);
    };
    Step1Component = __decorate([
        core_1.Component({
            selector: 'app-step1',
            templateUrl: './step1.component.html',
            styleUrls: ['./step1.component.scss']
        })
    ], Step1Component);
    return Step1Component;
}());
exports.Step1Component = Step1Component;
