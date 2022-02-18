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
Object.defineProperty(exports, "__esModule", { value: true });
class Carrito {
    constructor(nameFile) {
        this.nameFile = nameFile;
        this.carritos = [
            {
                id: 1,
                timestamp: 20200120,
                productos: [
                    {
                        nombre: "Escuadra",
                        precio: 123,
                        descripcion: "Soy una escuadra",
                        stock: 1,
                        id: 1,
                        timestamp: 20200120,
                        codigo: "Es-cod",
                        foto: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png",
                    },
                ],
            },
        ];
    }
    newCarrito() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let newId = this.carritos.length + 1;
                this.carritos.push({ id: newId, timestamp: Date.now(), productos: [] });
                return newId;
            }
            catch (e) {
                console.log(`Error al crear el carrito: ${e}`);
            }
        });
    }
    getProductos(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let filter = this.carritos.filter((i) => i.id == id);
                return filter[0].productos;
            }
            catch (e) {
                console.log(`Error al obtener el elemento : ${e}`);
            }
        });
    }
    addProducto(id, producto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let index = this.carritos.findIndex((x) => x.id == id);
                if (index != -1) {
                    this.carritos[index].productos.push(producto);
                }
                else {
                    return {};
                }
            }
            catch (e) {
                console.log(`Error al obtener el elemento : ${e}`);
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.carritos;
            }
            catch (e) {
                console.log(`Error al obtener los datos : ${e}`);
            }
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let filter = this.carritos.filter((i) => i.id != id);
                this.carritos = filter;
            }
            catch (e) {
                console.log(`Error al borrar el elemento : ${e}`);
            }
        });
    }
    deleteProduct(id_carrito, id_producto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let carritoIndex = this.carritos.findIndex((i) => i.id == id_carrito);
                let productos = this.carritos[carritoIndex].productos;
                let filter = productos.filter((i) => i.id != id_producto);
                this.carritos[carritoIndex].productos = filter;
            }
            catch (e) {
                console.log(`Error al borrar el elemento : ${e}`);
            }
        });
    }
    update(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let index = this.carritos.findIndex((x) => x.id == id);
                if (index != -1) {
                    let item = this.carritos[index];
                    this.carritos[index] = item;
                    return item;
                }
                else {
                    return {};
                }
            }
            catch (e) {
                console.log(`Error al actualizar el producto : ${e}`);
            }
        });
    }
}
exports.default = Carrito;
