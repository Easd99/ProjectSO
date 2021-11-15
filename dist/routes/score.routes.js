"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var score_controllers_1 = require("../controllers/score.controllers");
var scoresRoutes = (0, express_1.Router)();
var scoresController = new score_controllers_1.ScoreControllers();
scoresRoutes.route("/")
    .post(scoresController.create);
exports.default = scoresRoutes;
