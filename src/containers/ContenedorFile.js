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
const fs = require("fs");
class ContenedorFile {
    constructor(nameFile) {
        this.nameFile = "";
        this.nameFile = nameFile;
    }
    save(item) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let items = yield this.txtToJson();
                item.id = items.length + 1;
                item.created_at = Date.now();
                items.push(item);
                items = JSON.stringify(items);
                yield fs.promises.writeFile(this.nameFile, items);
                return items;
            }
            catch (e) {
                console.log(`Error al guardar el elemento: ${e}`);
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let contenido = yield this.txtToJson();
                let filter = contenido.filter((i) => i.id == id);
                return filter;
            }
            catch (e) {
                console.log(`Error en la lectura del archivo ${this.nameFile} : ${e}`);
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let contenido = yield this.txtToJson();
                return contenido;
            }
            catch (e) {
                console.log(`Error en la lectura del archivo ${this.nameFile} : ${e}`);
            }
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let contenido = yield this.txtToJson();
                let filter = contenido.filter((i) => i.id != id);
                contenido = JSON.stringify(filter);
                yield fs.promises.writeFile(this.nameFile, contenido);
            }
            catch (e) {
                console.log(`Error en la lectura del archivo ${this.nameFile} : ${e}`);
            }
        });
    }
    deleteAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield fs.promises.writeFile(this.nameFile, "[]");
            }
            catch (e) {
                console.log(`Error en la lectura del archivo ${this.nameFile} : ${e}`);
            }
        });
    }
    update(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let items = yield this.txtToJson();
                let index = items.findIndex((x) => x.id == id);
                if (index != -1) {
                    items[index] = body;
                    yield fs.promises.writeFile(this.nameFile, items);
                    return items[index];
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
    txtToJson() {
        return __awaiter(this, void 0, void 0, function* () {
            let contenido = yield fs.promises.readFile(this.nameFile, "utf-8");
            contenido = JSON.parse(contenido);
            return contenido;
        });
    }
}
exports.default = ContenedorFile;
