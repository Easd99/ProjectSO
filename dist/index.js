"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = exports.app = void 0;
var dotenv = require('dotenv-yaml');
dotenv.config();
var app_1 = __importDefault(require("./app"));
exports.app = app_1.default;
var server = app_1.default.listen(app_1.default.get('port'));
exports.server = server;
console.log('Server on port ', app_1.default.get('port'));
