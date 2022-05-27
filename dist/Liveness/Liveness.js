"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluatePassiveLiveness = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const HandleError_1 = require("../HandleError");
const FacialLivenessDiagnostic_1 = require("./FacialLivenessDiagnostic");
const EvaluatePassiveLiveness = (request, response) => {
    (0, node_fetch_1.default)("http://selphid-sdk/api/selphid/passive-liveness/evaluate", {
        method: "POST",
        body: JSON.stringify(request.body),
        headers: {
            "Content-Type": "application/json",
            Authorization: request.headers.authorization,
        },
    })
        .then((res) => res.json())
        .then((data) => {
        const result = {
            diagnostic: FacialLivenessDiagnostic_1.MapToFacialLivenessResult[data.diagnostic],
            diagnosticValue: FacialLivenessDiagnostic_1.FacialLivenessDiagnostic[data.diagnostic],
            diagnosticDescription: data.diagnosticDescription,
        };
        if (!!data.status)
            (0, HandleError_1.HandleError)(data, response);
        else
            response.status(200).json(result);
    })
        .catch((error) => {
        console.error(error);
        response.status(500).json(error);
    });
};
exports.EvaluatePassiveLiveness = EvaluatePassiveLiveness;
