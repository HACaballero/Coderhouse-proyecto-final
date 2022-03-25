"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productos_routes_1 = require("./src/routes/productos.routes");
const carrito_routes_1 = require("./src/routes/carrito.routes");
const config_1 = __importDefault(require("./src/config/config"));
const { config: env } = config_1.default;
var bodyParser = require("body-parser");
require("dotenv").config();
const app = (0, express_1.default)();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api/productos", productos_routes_1.productosRouter);
app.use("/api/carrito", carrito_routes_1.carritosRouter);
app.get("/", (req, res) => {
    res.send("Well done!");
});
app.listen(env.port, () => {
    console.log(`The application is listening on port ${env.port}!`);
});
