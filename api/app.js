import express from "express";
import router from "./src/routes/productos.routes.js";
import cors from "cors"

const app = express()
const PORT=8080


function routeNotFound(request, response) {
    response.status(404).json({
        message: "Route not found"
    })
}

app.use(cors())
app.use(express.json());
app.use("/api", router);
app.use(routeNotFound);



app.listen(PORT, () => {
    console.log(`Server listening http://localhost:${PORT}/`)
})