"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimeEntity = void 0;
var typeorm_1 = require("typeorm");
var Score_1 = require("./Score");
var AnimeEntity = /** @class */ (function () {
    function AnimeEntity(name, episodes, airDate, endDate) {
        this.name = name;
        this.airDate = airDate;
        this.episodes = episodes;
        this.endDate = endDate;
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], AnimeEntity.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", {
            nullable: false,
        })
    ], AnimeEntity.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)("integer", {
            nullable: true,
        })
    ], AnimeEntity.prototype, "episodes", void 0);
    __decorate([
        (0, typeorm_1.Column)("date", {
            nullable: true,
        })
    ], AnimeEntity.prototype, "airDate", void 0);
    __decorate([
        (0, typeorm_1.Column)("date", {
            nullable: true,
        })
    ], AnimeEntity.prototype, "endDate", void 0);
    __decorate([
        (0, typeorm_1.Column)("float", {
            nullable: true,
        })
    ], AnimeEntity.prototype, "scoreAverage", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)({
            type: "timestamp",
        })
    ], AnimeEntity.prototype, "createdAt", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({
            type: "timestamp",
        })
    ], AnimeEntity.prototype, "updatedAt", void 0);
    __decorate([
        (0, typeorm_1.DeleteDateColumn)({
            type: "timestamp",
        })
    ], AnimeEntity.prototype, "deletedAt", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Score_1.ScoreEntity; }, function (score) { return score.anime; }, { cascade: true })
    ], AnimeEntity.prototype, "scores", void 0);
    AnimeEntity = __decorate([
        (0, typeorm_1.Entity)()
    ], AnimeEntity);
    return AnimeEntity;
}());
exports.AnimeEntity = AnimeEntity;
