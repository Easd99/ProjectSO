import {Router} from "express";
import animesRoutes from "./anime.routes";
import scoresRoutes from "./score.routes";


const indexRoutes = Router()

indexRoutes.use('/animes', animesRoutes)
indexRoutes.use('/scores', scoresRoutes)

export default indexRoutes