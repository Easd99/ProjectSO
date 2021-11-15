"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimesControllers = void 0;
var typeorm_1 = require("typeorm");
var Anime_1 = require("../models/Anime");
var data_to_domain_1 = require("./helpers/data-to-domain");
var AnimesControllers = /** @class */ (function () {
    function AnimesControllers() {
    }
    AnimesControllers.prototype.getAll = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var animes, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, (0, typeorm_1.getRepository)(Anime_1.AnimeEntity).find({
                                relations: ["scores"],
                            })];
                    case 1:
                        animes = _a.sent();
                        animes.forEach(function (e) {
                            var sum = 0;
                            e.scores.forEach(function (el) {
                                sum = sum + el.score;
                                console.log(el.score);
                            });
                            if (e.scores.length > 0) {
                                e.scoreAverage = sum / e.scores.length;
                            }
                            else {
                                e.scoreAverage = 1;
                            }
                        });
                        return [2 /*return*/, res.status(200).json({
                                status: "success",
                                data: animes.map(function (e) { return (0, data_to_domain_1.AnimeEntityToDomain)(e); }),
                            })];
                    case 2:
                        e_1 = _a.sent();
                        return [2 /*return*/, res.status(400).json({
                                status: "error",
                                error: e_1.message,
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AnimesControllers.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var input, anime, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        input = req.body;
                        if (!input.name) {
                            throw new Error("Missing name");
                        }
                        if (input.episodes && isNaN(input.episodes)) {
                            throw new Error("Invalid episodes");
                        }
                        anime = new Anime_1.AnimeEntity(input.name, input.episodes, input.airDate, input.endDate);
                        return [4 /*yield*/, (0, typeorm_1.getRepository)(Anime_1.AnimeEntity).save(anime)];
                    case 1:
                        anime = _a.sent();
                        return [2 /*return*/, res.status(201).json({
                                status: "success",
                                data: (0, data_to_domain_1.AnimeEntityToDomain)(anime),
                            })];
                    case 2:
                        e_2 = _a.sent();
                        return [2 /*return*/, res.status(400).json({
                                status: "error",
                                error: e_2.message,
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AnimesControllers.prototype.getById = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, anime, sum_1, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        if (!id && isNaN(parseInt(id))) {
                            throw new Error("Invalid id");
                        }
                        return [4 /*yield*/, (0, typeorm_1.getRepository)(Anime_1.AnimeEntity).findOne(id, {
                                relations: ["scores"],
                            })];
                    case 1:
                        anime = _a.sent();
                        if (!anime) {
                            return [2 /*return*/, res.status(404).json({
                                    status: "error",
                                    data: "Anime not found",
                                })];
                        }
                        sum_1 = 0;
                        anime.scores.forEach(function (el) {
                            sum_1 = sum_1 + el.score;
                        });
                        if (anime.scores.length > 0) {
                            anime.scoreAverage = sum_1 / anime.scores.length;
                        }
                        else {
                            anime.scoreAverage = 1;
                        }
                        return [2 /*return*/, res.status(200).json({
                                status: "success",
                                data: (0, data_to_domain_1.AnimeEntityToDomain)(anime),
                            })];
                    case 2:
                        e_3 = _a.sent();
                        return [2 /*return*/, res.status(400).json({
                                status: "error",
                                error: e_3.message,
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AnimesControllers.prototype.delete = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, anime, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        id = req.params.id;
                        if (!id && isNaN(parseInt(id))) {
                            throw new Error("Invalid id");
                        }
                        return [4 /*yield*/, (0, typeorm_1.getRepository)(Anime_1.AnimeEntity).findOne(id)];
                    case 1:
                        anime = _a.sent();
                        if (!anime) {
                            return [2 /*return*/, res.status(404).json({
                                    status: "error",
                                    data: "Anime not found",
                                })];
                        }
                        return [4 /*yield*/, (0, typeorm_1.getRepository)(Anime_1.AnimeEntity).softRemove(anime)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, res.status(204).json({
                                status: "success",
                                data: "",
                            })];
                    case 3:
                        e_4 = _a.sent();
                        return [2 /*return*/, res.status(203).json({
                                status: "error",
                                error: e_4.message,
                            })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AnimesControllers.prototype.update = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, body, anime, e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        id = req.params.id;
                        body = req.body;
                        if (!id && isNaN(parseInt(id))) {
                            throw new Error("Invalid id");
                        }
                        return [4 /*yield*/, (0, typeorm_1.getRepository)(Anime_1.AnimeEntity).findOne(id)];
                    case 1:
                        anime = _a.sent();
                        if (!anime) {
                            return [2 /*return*/, res.status(404).json({
                                    status: "error",
                                    data: "Anime not found",
                                })];
                        }
                        if (body.episodes) {
                            anime.episodes = body.episodes;
                        }
                        if (body.airDate) {
                            anime.airDate = body.airDate;
                        }
                        if (body.endDate) {
                            anime.endDate = body.endDate;
                        }
                        return [4 /*yield*/, (0, typeorm_1.getRepository)(Anime_1.AnimeEntity).save(anime)];
                    case 2:
                        anime = _a.sent();
                        return [2 /*return*/, res.status(201).json({
                                status: "success",
                                data: (0, data_to_domain_1.AnimeEntityToDomain)(anime),
                            })];
                    case 3:
                        e_5 = _a.sent();
                        return [2 /*return*/, res.status(400).json({
                                status: "error",
                                error: e_5.message,
                            })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return AnimesControllers;
}());
exports.AnimesControllers = AnimesControllers;
