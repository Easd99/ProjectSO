import {AnimeEntity, IAnime} from "../../models/Anime";


export function AnimeEntityToDomain(input: AnimeEntity): IAnime {
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
    }

}