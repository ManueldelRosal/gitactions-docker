"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapToFacialAuthenticationResult = exports.FacialAuthenticationStatus = void 0;
var FacialAuthenticationStatus;
(function (FacialAuthenticationStatus) {
    FacialAuthenticationStatus[FacialAuthenticationStatus["None"] = 0] = "None";
    FacialAuthenticationStatus[FacialAuthenticationStatus["Negative"] = 1] = "Negative";
    FacialAuthenticationStatus[FacialAuthenticationStatus["Uncertain"] = 2] = "Uncertain";
    FacialAuthenticationStatus[FacialAuthenticationStatus["Positive"] = 3] = "Positive";
    FacialAuthenticationStatus[FacialAuthenticationStatus["NoneBecausePoseExceed"] = 4] = "NoneBecausePoseExceed";
    FacialAuthenticationStatus[FacialAuthenticationStatus["NoneBecauseInvalidExtractions"] = 5] = "NoneBecauseInvalidExtractions";
})(FacialAuthenticationStatus = exports.FacialAuthenticationStatus || (exports.FacialAuthenticationStatus = {}));
var MapToFacialAuthenticationResult;
(function (MapToFacialAuthenticationResult) {
    MapToFacialAuthenticationResult["None"] = "NONE";
    MapToFacialAuthenticationResult["Negative"] = "NEGATIVE";
    MapToFacialAuthenticationResult["Uncertain"] = "UNCERTAIN";
    MapToFacialAuthenticationResult["Positive"] = "POSITIVE";
    MapToFacialAuthenticationResult["NoneBecausePoseExceed"] = "NONE_BECAUSE_POSE_EXCEED";
    MapToFacialAuthenticationResult["NoneBecauseInvalidExtractions"] = "NONE_BECAUSE_INVALID_EXTRACTIONS";
})(MapToFacialAuthenticationResult = exports.MapToFacialAuthenticationResult || (exports.MapToFacialAuthenticationResult = {}));
