import express from "express";
import { productosRouter } from "./productos.routes";
import { carritosRouter } from "./carrito.routes";
import * as dotenv from "dotenv";
var bodyParser = require("body-parser");

dotenv.config({ path: __dirname+'/.env' });

require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/productos", productosRouter);
app.use("/api/carrito", carritosRouter);

app.get("/", (req, res) => {
	res.send("Well done!");
});

app.listen(8080, () => {
	console.log("The application is listening on port 8080!");
});
