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
const connect_1 = __importDefault(require("../mongoDB/connect"));
class ContenedorMongoDB {
    constructor(model) {
        (0, connect_1.default)();
        this.entity = model;
    }
    save(item) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newItem = new this.entity(item);
                return yield newItem.save();
            }
            catch (e) {
                console.log(`Error al guardar el elemento: ${e}`);
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.entity.find({ id });
            }
            catch (e) {
                console.log(`Error al obtener los datos: ${e}`);
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.entity.find({});
            }
            catch (e) {
                console.log(`Error al obtener los datos: ${e}`);
            }
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.entity.deleteOne({ id });
            }
            catch (e) {
                console.log(`Error al borrar el dato: ${e}`);
            }
        });
    }
    update(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.entity.updateOne({ id }, { $set: body });
            }
            catch (e) {
                console.log(`Error al actualizar el item : ${e}`);
            }
        });
    }
}
exports.default = ContenedorMongoDB;
