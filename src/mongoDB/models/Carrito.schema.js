"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
let Schema = mongoose_1.default.Schema;
let carritoSchema = new Schema({
    id: {
        type: String,
    },
    title: {
        type: String,
        required: [true, "Título es necesario"],
    },
    productos: {
        type: Array,
    },
    created_at: {
        type: Date,
    },
});
const Carrito = mongoose_1.default.model("Carrito", carritoSchema);
exports.default = Carrito;
