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
class ContenedorMemoria {
    constructor() {
        this.items = [];
    }
    save(item) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                item.id = this.items.length + 1;
                item.created_at = Date.now();
                this.items.push(item);
                return this.items;
            }
            catch (e) {
                console.log(`Error al guardar el elemento: ${e}`);
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let filter = this.items.filter((i) => i.id == id);
                return filter[0];
            }
            catch (e) {
                console.log(`Error al obtener el elemento : ${e}`);
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.items;
            }
            catch (e) {
                console.log(`Error al obtener los datos : ${e}`);
            }
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let filter = this.items.filter((i) => i.id != id);
                this.items = filter;
            }
            catch (e) {
                console.log(`Error al borrar el elemento : ${e}`);
            }
        });
    }
    update(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let index = this.items.findIndex((x) => x.id == id);
                if (index != -1) {
                    this.items[index] = body;
                    return this.items[index];
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
exports.default = ContenedorMemoria;
