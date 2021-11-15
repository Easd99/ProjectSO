"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimeEntityToDomain = void 0;
function AnimeEntityToDomain(input) {
    return {
        id: input.id,
        name: input.name,
        episodes: input.episodes,
        airDate: input.airDate,
        endDate: input.endDate,
        scoreAverage: input.scoreAverage,
        createdAt: input.createdAt,
        updatedAt: input.updatedAt,
        deletedAt: input.deletedAt
    };
}
exports.AnimeEntityToDomain = AnimeEntityToDomain;
