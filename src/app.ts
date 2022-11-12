import dotenv from "dotenv"
dotenv.config()

import express, { json } from "express"
import itemsRoutes from "./routes/items.routes.js"

const app = express()
app
    .use(json())
    .get('/status', (_, res) => res.sendStatus(200))
    .use('/items', itemsRoutes)
    .listen(process.env.PORT, () => console.log(`Running on port ${process.env.PORT}`))