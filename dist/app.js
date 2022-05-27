"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const Authentication_1 = require("./Authentication/Authentication");
const Liveness_1 = require("./Liveness/Liveness");
const app = (0, express_1.default)();
const port = 3000;
const cors = require("cors");
app.use(body_parser_1.default.json());
app.use(cors());
app.listen(port, () => {
    console.log(`Application is running on port ${port}.`);
});
app.post("/api/selphid/passive-liveness/evaluate", Liveness_1.EvaluatePassiveLiveness);
app.post("/api/selphid/authenticate-facial/images", Authentication_1.AuthenticateFacialImages);
