"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.carritosRouter = void 0;
const express_1 = require("express");
const carrito_controller_1 = __importDefault(require("../Modules/Carrito/carrito.controller"));
let carrito = new carrito_controller_1.default();
const router = (0, express_1.Router)();
router.post("/", (req, res) => {
    carrito
        .save(req.body)
        .then((carrito) => {
        res.send(carrito);
    })
        .catch((error) => res.send({ error }));
});
router.delete("/:id", (req, res) => {
    carrito.deleteById(req.params.id);
    res.send({ status: "ok" });
});
router.get("/:id/productos", (req, res) => {
    carrito
        .getById(req.params.id)
        .then((carrito) => {
        res.send({ productos: carrito.productos || [] });
    })
        .catch((error) => res.send({ error }));
});
router.post("/:id/productos", (req, res) => {
    carrito.saveProduct(req.params.id, req.body.body);
    res.send({ status: "ok" });
});
router.use((req, res) => {
    res.send({
        error: -2,
        descripcion: `Ruta ${req.originalUrl} método ${req.method} no implementada`,
    });
});
exports.carritosRouter = router;
