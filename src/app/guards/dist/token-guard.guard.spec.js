"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var token_guard_1 = require("./token.guard");
describe('TokenGuardGuard', function () {
    var guard;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        guard = testing_1.TestBed.inject(token_guard_1.TokenGuard);
    });
    it('should be created', function () {
        expect(guard).toBeTruthy();
    });
});
