"use strict";
exports.__esModule = true;
exports.buildFormData = void 0;
function buildFormData(DtoObj) {
    var formData = new FormData();
    var paramNames = Object.getOwnPropertyNames(DtoObj);
    for (var i = 0; i < paramNames.length; i++) {
        if (!paramNames || !DtoObj[paramNames[i]]) {
            continue;
        }
        formData.append(paramNames[i], DtoObj[paramNames[i]]);
    }
    return formData;
}
exports.buildFormData = buildFormData;
