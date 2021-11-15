"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoreEntity = void 0;
var typeorm_1 = require("typeorm");
var Anime_1 = require("./Anime");
var ScoreEntity = /** @class */ (function () {
    function ScoreEntity(score, anime) {
        this.score = score;
        this.anime = anime;
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], ScoreEntity.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)("float", {
            nullable: false,
        })
    ], ScoreEntity.prototype, "score", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)({
            type: "timestamp",
        })
    ], ScoreEntity.prototype, "createdAt", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({
            type: "timestamp",
        })
    ], ScoreEntity.prototype, "updatedAt", void 0);
    __decorate([
        (0, typeorm_1.DeleteDateColumn)({
            type: "timestamp",
        })
    ], ScoreEntity.prototype, "deletedAt", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Anime_1.AnimeEntity; }, function (anime) { return anime.scores; })
    ], ScoreEntity.prototype, "anime", void 0);
    ScoreEntity = __decorate([
        (0, typeorm_1.Entity)()
    ], ScoreEntity);
    return ScoreEntity;
}());
exports.ScoreEntity = ScoreEntity;
