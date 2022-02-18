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
class Producto {
    constructor(nameFile) {
        this.nameFile = nameFile;
        this.productos = [
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
        ];
    }
    save(item) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let newId = this.productos.length + 1;
                item.id = newId;
                item.timestamp = Date.now();
                console.log("PRODUCTOS 1", this.productos);
                this.productos.push(item);
                console.log("PRODUCTOS 2", this.productos);
                return this.productos;
            }
            catch (e) {
                console.log(`Error al guardar el producto: ${e}`);
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let filter = this.productos.filter((i) => i.id == id);
                return filter;
            }
            catch (e) {
                console.log(`Error al obtener el elemento : ${e}`);
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(this.productos);
                return this.productos;
            }
            catch (e) {
                console.log(`Error al obtener los datos : ${e}`);
            }
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let filter = this.productos.filter((i) => i.id != id);
                this.productos = filter;
            }
            catch (e) {
                console.log(`Error al borrar el elemento : ${e}`);
            }
        });
    }
    update(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let index = this.productos.findIndex((x) => x.id == id);
                if (index != -1) {
                    let item = this.productos[index];
                    item.precio = body.precio;
                    item.nombre = body.nombre;
                    this.productos[index] = item;
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
exports.default = Producto;
