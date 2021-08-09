"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateCommunityModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var step1_component_1 = require("./step1/step1.component");
var create_community_routing_module_1 = require("./create-community-routing/create-community-routing.module");
var step2_component_1 = require("./step2/step2.component");
var step3_component_1 = require("./step3/step3.component");
var create_community_component_1 = require("./create-community.component");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var comunity_creation_service_1 = require("./services/comunity-creation.service");
var routes = [
    {
        path: "",
        component: create_community_component_1.CreateCommunityComponent
    },
    {
        path: '**',
        redirectTo: '/crear-comunidad'
    }
];
var CreateCommunityModule = /** @class */ (function () {
    function CreateCommunityModule() {
    }
    CreateCommunityModule = __decorate([
        core_1.NgModule({
            declarations: [
                step1_component_1.Step1Component,
                step2_component_1.Step2Component,
                step3_component_1.Step3Component,
                create_community_component_1.CreateCommunityComponent
            ],
            exports: [
                step1_component_1.Step1Component
            ],
            imports: [
                common_1.CommonModule,
                create_community_routing_module_1.CreateCommunityRoutingModule,
                router_1.RouterModule.forChild(routes),
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule
            ],
            providers: [
                comunity_creation_service_1.ComunityCreationService
            ]
        })
    ], CreateCommunityModule);
    return CreateCommunityModule;
}());
exports.CreateCommunityModule = CreateCommunityModule;
