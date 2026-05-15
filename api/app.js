import { request, response } from "express";
import express from "express";
import dbConnect from "./utils/dbConnect.js";
import router from "./routes/rutas.routes.js";

const app = express()
dbConnect();


app.use(express.json())

const server = "/api/"

app.use(server, router)

function routeNotFound(request, response) {
    response.status(404).json({
        message: "Route not found"
    })
}

app.use(routeNotFound)

app.listen(8080, () => {
    console.log("Server listening to port 8080")
})