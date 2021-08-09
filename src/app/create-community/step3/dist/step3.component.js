"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Step3Component = void 0;
var core_1 = require("@angular/core");
var sweetalert2_1 = require("sweetalert2");
var Step3Component = /** @class */ (function () {
    function Step3Component(formBuilder, comunityCreationService, router) {
        this.comunityCreationService = comunityCreationService;
        this.router = router;
        this.images = {};
        this.stepThree = formBuilder.group({
            logo: [],
            banner: []
        });
    }
    Step3Component.prototype.ngOnInit = function () { };
    Step3Component.prototype.onSubmit = function () {
        var _this = this;
        if (!this.stepThree.valid) {
            return;
        }
        this.comunityCreationService.AddStepInfo(this.stepThree.value);
        this.comunityCreationService.FinishComunityCreation().subscribe(function (comunity) {
            sweetalert2_1["default"].fire('Se ha creado la comunidad');
            _this.router.navigate(['/comunidades']);
        });
    };
    Step3Component.prototype.showImgPreview = function (event, fieldName) {
        var _this = this;
        var _a;
        var input = event.target;
        if (input && input.files) {
            var file = input.files[0];
            (_a = this.stepThree.get(fieldName)) === null || _a === void 0 ? void 0 : _a.setValue(file);
            // File Preview
            var reader_1 = new FileReader();
            reader_1.onload = function () {
                _this.images[fieldName] = reader_1.result;
            };
            reader_1.readAsDataURL(file);
        }
    };
    Step3Component = __decorate([
        core_1.Component({
            selector: 'app-step3',
            templateUrl: './step3.component.html',
            styleUrls: ['./step3.component.scss']
        })
    ], Step3Component);
    return Step3Component;
}());
exports.Step3Component = Step3Component;
