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
const firebase_1 = __importDefault(require("../config/firebase"));
class ContenedorFirebase {
    constructor(entity) {
        this.db = firebase_1.default.firestore();
        this.query = this.db.collection(entity);
    }
    save(item) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let doc = this.query.doc();
                return yield doc.create(item);
            }
            catch (e) {
                console.log(`Error al guardar el elemento: ${e}`);
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const doc = this.query.doc(`${id}`);
                const item = yield doc.get();
                return [item.data()];
            }
            catch (e) {
                console.log(`Error al obtener los datos: ${e}`);
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const doc = yield this.query.get();
                const items = yield doc.docs;
                const response = items.map((doc) => {
                    return doc.data();
                });
                return response;
            }
            catch (e) {
                console.log(`Error al obtener los datos: ${e}`);
            }
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const doc = this.query.doc(`${id}`);
                const item = yield doc.delete();
                return item;
            }
            catch (e) {
                console.log(`Error al borrar el dato: ${e}`);
            }
        });
    }
    update(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const doc = this.query.doc(`${id}`);
                const item = yield doc.update(body);
                return item;
            }
            catch (e) {
                console.log(`Error al actualizar el item : ${e}`);
            }
        });
    }
}
exports.default = ContenedorFirebase;
