"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var anime_routes_1 = __importDefault(require("./anime.routes"));
var score_routes_1 = __importDefault(require("./score.routes"));
var indexRoutes = (0, express_1.Router)();
indexRoutes.use('/animes', anime_routes_1.default);
indexRoutes.use('/scores', score_routes_1.default);
exports.default = indexRoutes;
