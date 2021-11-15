import {Router} from 'express'
import {AnimesControllers} from "../controllers/anime.controllers"

const usersRoutes = Router()

const animesController = new AnimesControllers()

usersRoutes.route("/")
    .get(animesController.getAll)
    .post(animesController.create)

usersRoutes.route("/:id")
    .get(animesController.getById)
    .delete(animesController.delete)
    .put(animesController.update)


export default usersRoutes