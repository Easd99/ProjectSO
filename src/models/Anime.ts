import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from "typeorm";
import { ScoreEntity } from "./Score";

export interface IAnime {
  id: number;
  name: string;
  episodes?: number;
  airDate?: Date;
  endDate?: Date;
  scoreAverage?: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export interface IAnimeCreateInput {
  name?: string;
  episodes?: number;
  airDate?: Date;
  endDate?: Date;
}

export interface IAnimeUpdateInput {
  episodes?: number;
  airDate?: Date;
  endDate?: Date;
}

@Entity()
export class AnimeEntity implements IAnime {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", {
    nullable: false,
  })
  name: string;

  @Column("integer", {
    nullable: true,
  })
  episodes?: number;

  @Column("date", {
    nullable: true,
  })
  airDate?: Date;

  @Column("date", {
    nullable: true,
  })
  endDate?: Date;

  @Column("float", {
    nullable: true,
  })
  scoreAverage: number;

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

  @OneToMany(() => ScoreEntity, (score) => score.anime, { cascade: true })
  scores!: ScoreEntity[];

  constructor(name: string, episodes?: number, airDate?: Date, endDate?: Date) {
    this.name = name;
    this.airDate = airDate;
    this.episodes = episodes;
    this.endDate = endDate;
  }
}
