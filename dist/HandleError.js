"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandleError = void 0;
const HandleError = (error, response) => {
    response.status(error.status).json(error);
};
exports.HandleError = HandleError;
