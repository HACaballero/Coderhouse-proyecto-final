"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productosRouter = void 0;
const express_1 = require("express");
const producto_controller_1 = __importDefault(require("../Modules/Producto/producto.controller"));
const config_1 = __importDefault(require("../config/config"));
const { config: env } = config_1.default;
let producto = new producto_controller_1.default();
const router = (0, express_1.Router)();
router.get("/:id?", (req, res) => {
    if (req.params.id) {
        producto.getById(req.params.id).then((productos) => {
            if (productos.length > 0 && productos[0]) {
                res.send({ productos });
            }
            else {
                res.send({ error: "producto no encontrado" });
            }
        });
    }
    else {
        producto.getAll().then((productos) => {
            res.send({ productos });
        });
    }
});
router.post("/", (req, res) => {
    if (env.admin) {
        producto.save(req.body);
        res.send({ status: "ok" });
    }
    else {
        res.send({ error: "No tiene acceso" });
    }
});
router.put("/:id", (req, res) => {
    if (env.admin) {
        producto.update(req.params.id, req.body);
        res.send({ status: "ok" });
    }
    else {
        res.send({ error: "No tiene acceso" });
    }
});
router.delete("/:id", (req, res) => {
    if (env.admin) {
        producto.deleteById(req.params.id);
        res.send({ status: "ok" });
    }
    else {
        res.send({ error: "No tiene acceso" });
    }
});
router.use((req, res) => {
    res.send({
        error: -2,
        descripcion: `Ruta ${req.originalUrl} método ${req.method} no implementada`,
    });
});
exports.productosRouter = router;
