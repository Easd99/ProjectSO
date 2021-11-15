import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { AnimeEntity } from "./Anime";

export interface IScore {
  id: number;
  score: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export interface IScoreCreateInput {
  score?: number;
  animeId?: number;
}

export interface IScoreUpdateInput {
  score?: number;
}

@Entity()
export class ScoreEntity implements IScore {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("float", {
    nullable: false,
  })
  score: number;

  @CreateDateColumn({
    type: "timestamp",
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: "timestamp",
  })
  updatedAt: Date;

  @DeleteDateColumn({
    type: "timestamp",
  })
  deletedAt: Date;

  @ManyToOne(() => AnimeEntity, (anime) => anime.scores)
  anime: AnimeEntity;

  constructor(score: number, anime: AnimeEntity) {
    this.score = score;
    this.anime = anime;
  }
}
