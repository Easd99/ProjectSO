import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { AnimeEntity } from "../models/Anime";
import { IScoreCreateInput, ScoreEntity } from "../models/Score";

export class ScoreControllers {
  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const input: IScoreCreateInput = req.body;

      if (!input.score) {
        throw new Error("Missing score");
      }

      if (!input.animeId) {
        throw new Error("Missing animeId");
      }

      if (isNaN(input.score)) {
        throw new Error("Invalid score");
      }

      if (isNaN(input.animeId)) {
        throw new Error("Invalid animeId");
      }

      if (input.score < 1 || input.score > 10) {
        throw new Error("score must be greater than 0 and less than 10");
      }

      const anime = await getRepository(AnimeEntity).findOne(input.animeId, {
        relations: ["scores"],
      });
      if (!anime) {
        throw new Error("Anime not found");
      }

      let score = new ScoreEntity(input.score, anime);
      score = await getRepository(ScoreEntity).save(score);
      score.anime = undefined!;
      return res.status(201).json({
        status: "success",
        data: score,
      });
    } catch (e: any) {
      return res.status(400).json({
        status: "error",
        error: e.message,
      });
    }
  }
}
