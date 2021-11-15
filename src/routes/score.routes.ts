import {Router} from 'express'
import { ScoreControllers } from '../controllers/score.controllers'

const scoresRoutes = Router()

const scoresController = new ScoreControllers()

scoresRoutes.route("/")
    .post(scoresController.create)





export default scoresRoutes