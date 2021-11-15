import "reflect-metadata";
import express from "express"
import {createConnection} from 'typeorm'
import indexRoutes from "./routes/index.routes";
import connection from "./configs/database";
//import cors from  'cors'
const cors = require('cors')
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./doc.yaml');


const app = express()
if (process.env.NODE_ENV !== 'test') {
    const connect = async () => {
        try {
            await createConnection(connection)
            await console.log('DB CONNECTED')
        } catch (e) {
            process.exit()
        }
    }
    const bd = connect()
}


//Middelwares
app.use(cors());
app.use(express.json())




app.set('port', process.env.PORT || 5000)

app.use('/api/v1', indexRoutes)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app