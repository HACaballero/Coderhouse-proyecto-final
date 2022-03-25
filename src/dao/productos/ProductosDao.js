"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
const { container, constructor } = (0, __1.default)("Producto");
class ProductosDao extends container {
    constructor() {
        super(constructor);
    }
}
exports.default = ProductosDao;
