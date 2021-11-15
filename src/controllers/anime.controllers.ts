import {Request, Response} from "express";
import {getRepository} from "typeorm";
import {
    AnimeEntity,
    IAnimeCreateInput,
    IAnimeUpdateInput,
} from "../models/Anime";
import {AnimeEntityToDomain} from "./helpers/data-to-domain";

export class AnimesControllers {
    public async getAll(req: Request, res: Response): Promise<Response> {
        try {
            const animes = await getRepository(AnimeEntity).find({
                relations: ["scores"],
            });

            animes.forEach((e) => {
                let sum = 0;
                e.scores.forEach((el) => {
                    sum = sum + el.score;
                    console.log(el.score);
                });
                if (e.scores.length > 0) {
                    e.scoreAverage = sum / e.scores.length;
                } else {
                    e.scoreAverage = 1;
                }
            });

            return res.status(200).json({
                status: "success",
                    data: animes.map(e => AnimeEntityToDomain(e)),
            });
        } catch (e: any) {
            return res.status(400).json({
                status: "error",
                error: e.message,
            });
        }
    }

    public async create(req: Request, res: Response): Promise<Response> {
        try {
            const input: IAnimeCreateInput = req.body;

            if (!input.name) {
                throw new Error("Missing name");
            }

            if (input.episodes && isNaN(input.episodes)) {
                throw new Error("Invalid episodes");
            }

            let anime = new AnimeEntity(
                input.name,
                input.episodes,
                input.airDate,
                input.endDate
            );
            anime = await getRepository(AnimeEntity).save(anime);
            return res.status(201).json({
                status: "success",
                data: AnimeEntityToDomain(anime),
            });
        } catch (e: any) {
            return res.status(400).json({
                status: "error",
                error: e.message,
            });
        }
    }

    public async getById(req: Request, res: Response): Promise<Response> {
        try {
            const {id} = req.params;
            if (!id && isNaN(parseInt(id))) {
                throw new Error("Invalid id");
            }
            const anime = await getRepository(AnimeEntity).findOne(id, {
                relations: ["scores"],
            });
            if (!anime) {
                return res.status(404).json({
                    status: "error",
                    data: "Anime not found",
                });
            }
            let sum = 0;
            anime.scores.forEach((el) => {
                sum = sum + el.score;
            });
            if (anime.scores.length > 0) {
                anime.scoreAverage = sum / anime.scores.length;
            } else {
                anime.scoreAverage = 1;
            }
            return res.status(200).json({
                status: "success",
                data: AnimeEntityToDomain(anime),
            });
        } catch (e: any) {
            return res.status(400).json({
                status: "error",
                error: e.message,
            });
        }
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        try {
            const {id} = req.params;
            if (!id && isNaN(parseInt(id))) {
                throw new Error("Invalid id");
            }
            const anime = await getRepository(AnimeEntity).findOne(id);
            if (!anime) {
                return res.status(404).json({
                    status: "error",
                    data: "Anime not found",
                });
            }
            await getRepository(AnimeEntity).softRemove(anime);
            return res.status(204).json({
                status: "success",
                data: "",
            });
        } catch (e: any) {
            return res.status(203).json({
                status: "error",
                error: e.message,
            });
        }
    }

    public async update(req: Request, res: Response): Promise<Response> {
        try {
            const {id} = req.params;
            const body: IAnimeUpdateInput = req.body;
            if (!id && isNaN(parseInt(id))) {
                throw new Error("Invalid id");
            }

            let anime = await getRepository(AnimeEntity).findOne(id);
            if (!anime) {
                return res.status(404).json({
                    status: "error",
                    data: "Anime not found",
                });
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

            anime = await getRepository(AnimeEntity).save(anime);
            return res.status(201).json({
                status: "success",
                data: AnimeEntityToDomain(anime),
            });
        } catch (e: any) {
            return res.status(400).json({
                status: "error",
                error: e.message,
            });
        }
    }
}
