import express from "express";
import { productosRouter } from "./src/routes/productos.routes";
import { carritosRouter } from "./src/routes/carrito.routes";
import config from "./src/config/config";
const { config: env } = config;
var bodyParser = require("body-parser");

require("dotenv").config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/productos", productosRouter);
app.use("/api/carrito", carritosRouter);

app.get("/", (req, res) => {
	res.send("Well done!");
});

app.listen(env.port, () => {
	console.log(`The application is listening on port ${env.port}!`);
});
