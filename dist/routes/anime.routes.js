"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var anime_controllers_1 = require("../controllers/anime.controllers");
var usersRoutes = (0, express_1.Router)();
var animesController = new anime_controllers_1.AnimesControllers();
usersRoutes.route("/")
    .get(animesController.getAll)
    .post(animesController.create);
usersRoutes.route("/:id")
    .get(animesController.getById)
    .delete(animesController.delete)
    .put(animesController.update);
exports.default = usersRoutes;
