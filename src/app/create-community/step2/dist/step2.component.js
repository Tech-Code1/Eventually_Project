"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Step2Component = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var Step2Component = /** @class */ (function () {
    function Step2Component(comunityCreationService, router) {
        this.comunityCreationService = comunityCreationService;
        this.router = router;
        this.stepTwo = new forms_1.FormGroup({
            socialFacebook: new forms_1.FormControl(''),
            socialLinkedin: new forms_1.FormControl(''),
            socialInstagram: new forms_1.FormControl(''),
            socialGithub: new forms_1.FormControl(''),
            socialTwitter: new forms_1.FormControl(''),
            socialDiscord: new forms_1.FormControl(''),
            descriptionCommunity: new forms_1.FormControl('')
        });
    }
    Step2Component.prototype.ngOnInit = function () {
    };
    Step2Component.prototype.onSubmit = function () {
        if (!this.stepTwo.valid) {
            return;
        }
        this.comunityCreationService.AddStepInfo(this.stepTwo.value);
        this.router.navigate(['/crear-comunidad/ultimos-detalles']);
    };
    Step2Component = __decorate([
        core_1.Component({
            selector: 'app-step2',
            templateUrl: './step2.component.html',
            styleUrls: ['./step2.component.scss']
        })
    ], Step2Component);
    return Step2Component;
}());
exports.Step2Component = Step2Component;
