"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const producto_service_1 = __importDefault(require("./producto.service"));
class ProductoController {
    constructor() {
        this.productoService = new producto_service_1.default();
    }
    save(item) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.productoService.save(item);
            }
            catch (e) {
                console.log(`Error al guardar el producto : ${e}`);
                return {};
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.productoService.getById(id);
            }
            catch (e) {
                console.log(`Error al obtener el producto : ${e}`);
                return {};
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.productoService.getAll();
            }
            catch (e) {
                console.log(`Error al obtener los productos : ${e}`);
                return {};
            }
        });
    }
    deleteById(id) {
        try {
            return this.productoService.deleteById(id);
        }
        catch (e) {
            console.log(`Error al eliminar el producto : ${e}`);
            return {};
        }
    }
    update(id, body) {
        try {
            return this.productoService.update(id, body);
        }
        catch (e) {
            console.log(`Error al actualizar el producto : ${e}`);
            return {};
        }
    }
}
exports.default = ProductoController;
