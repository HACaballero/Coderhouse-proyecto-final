"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.carritosRouter = void 0;
const express_1 = require("express");
const Carrito_1 = __importDefault(require("./controllers/Carrito"));
let carrito = new Carrito_1.default("./carrito.txt");
const router = (0, express_1.Router)();
router.post("/", (req, res) => {
    carrito
        .newCarrito()
        .then((id) => {
        res.send({ id });
    })
        .catch((error) => res.send({ error }));
});
router.delete("/:id", (req, res) => {
    carrito
        .deleteById(req.params.id)
        .then(() => {
        res.send({ status: "ok" });
    })
        .catch((error) => res.send({ error }));
});
router.get("/:id/productos", (req, res) => {
    carrito
        .getProductos(req.params.id)
        .then((productos) => {
        res.send({ productos });
    })
        .catch((error) => res.send({ error }));
});
router.post("/:id/productos", (req, res) => {
    carrito
        .addProducto(req.params.id, req.body)
        .then(() => {
        res.send({ status: "ok" });
    })
        .catch((error) => res.send({ error }));
});
router.delete("/:id/productos/:id_prod", (req, res) => {
    carrito
        .deleteProduct(req.params.id, req.params.id_prod)
        .then(() => {
        res.send({ status: "ok" });
    })
        .catch((error) => res.send({ error }));
});
router.use((req, res) => {
    res.send({
        error: -2,
        descripcion: `Ruta ${req.originalUrl} método ${req.method} no implementada`,
    });
});
exports.carritosRouter = router;
