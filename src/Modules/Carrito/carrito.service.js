"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CarritosDao_1 = __importDefault(require("../../dao/carritos/CarritosDao"));
class CarritoService {
    constructor() {
        this.Carrito = new CarritosDao_1.default();
    }
    getAll() {
        return this.Carrito.getAll();
    }
    save(item) {
        return this.Carrito.save(item);
    }
    getById(id) {
        return this.Carrito.getById(id);
    }
    deleteById(id) {
        return this.Carrito.deleteById(id);
    }
    update(id, body) {
        return this.Carrito.update(id, body);
    }
}
exports.default = CarritoService;
