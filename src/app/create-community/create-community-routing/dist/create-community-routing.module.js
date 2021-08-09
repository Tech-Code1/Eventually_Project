"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateCommunityRoutingModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var token_guard_1 = require("../../guards/token.guard");
var routes = [
    {
        path: 'datos-basicos',
        loadChildren: function () { return Promise.resolve().then(function () { return require('../step1/step1.module'); }).then(function (x) { return x.Step1Module; }); },
        canActivate: [
            token_guard_1.TokenGuard
        ]
    },
    {
        path: 'conociendo-la-comunidad',
        loadChildren: function () { return Promise.resolve().then(function () { return require('../step2/step2.module'); }).then(function (x) { return x.Step2Module; }); },
        canActivate: [
            token_guard_1.TokenGuard
        ]
    },
    {
        path: 'ultimos-detalles',
        loadChildren: function () { return Promise.resolve().then(function () { return require('../step3/step3.module'); }).then(function (x) { return x.Step3Module; }); },
        canActivate: [
            token_guard_1.TokenGuard
        ]
    },
    {
        path: 'crear-comunidad',
        loadChildren: function () { return Promise.resolve().then(function () { return require('../../create-community/create-community.module'); }).then(function (x) { return x.CreateCommunityModule; }); },
        canActivate: [
            token_guard_1.TokenGuard
        ]
    }
];
var CreateCommunityRoutingModule = /** @class */ (function () {
    function CreateCommunityRoutingModule() {
    }
    CreateCommunityRoutingModule = __decorate([
        core_1.NgModule({
            declarations: [],
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(routes)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], CreateCommunityRoutingModule);
    return CreateCommunityRoutingModule;
}());
exports.CreateCommunityRoutingModule = CreateCommunityRoutingModule;
